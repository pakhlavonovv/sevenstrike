'use client'

import Header from "../components/header"
import Footer from "../components/footer"
import { useState } from "react"
import { db, collection, addDoc } from "../../../firebase-user"

const IMGBB_API_KEY = process.env.NEXT_PUBLIC_IMGBB_KEY

const Page = () => {
  const [formData, setFormData] = useState({
    name: '',
    game: '',
    image: '',
    description: '',
    price: '',
    sellerContact: ''
  })
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)
  const [notif, setNotif] = useState(false)

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(!formData.name || !formData.price || !formData.sellerContact) return

    setLoading(true)

    let imageUrl = ''
    if(file) {
      const form = new FormData()
      form.append('image', file)
      try {
        const res = await fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`, {
          method: 'POST',
          body: form
        })
        const data = await res.json()
        imageUrl = data.data.url
      } catch (err) {
        console.log('Image upload error:', err)
        alert('Rasm yuklashda xatolik yuz berdi!')
        setLoading(false)
        return
      }
    }

    try {
      await addDoc(collection(db, 'accounts'), {...formData, image: imageUrl})
      setFormData({
        name: '',
        game: '',
        image: '',
        description: '',
        price: '',
        sellerContact: ''
      })
      setFile(null)
      setNotif(true)
      setTimeout(() => setNotif(false), 4000)
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-[#1212129e] min-h-screen flex flex-col">
      <div className="mb-[30px]">
        <Header/>
      </div>

      <main className="container mx-auto px-1 md:px-4 flex-1 flex justify-center items-start">
        <div className="bg-[#1b2838] p-6 rounded-xl shadow-lg max-w-lg w-full">
          <h2 className="text-white text-2xl font-bold mb-4 text-center">Добавить аккаунт</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              placeholder="Название аккаунта"
              className="bg-[#2a475e] text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#66c0f4]"
              required
            />
            <input 
              type="text" 
              name="game" 
              value={formData.game} 
              onChange={handleChange} 
              placeholder="Название игры"
              className="bg-[#2a475e] text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#66c0f4]"
            />
            <input 
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="text-white"
            />
            <textarea
  name="description" 
  value={formData.description} 
  onChange={handleChange} 
  placeholder="Описание аккаунта (минимум 500 символов)"
  className="bg-[#2a475e] text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#66c0f4] resize-none h-32"
  required
  minLength={500}
/>

            <input 
              type="number" 
              name="price" 
              value={formData.price} 
              onChange={handleChange} 
              placeholder="Цена $"
              className="bg-[#2a475e] text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#66c0f4]"
              required
            />
            <input 
              type="text" 
              name="sellerContact" 
              value={formData.sellerContact} 
              onChange={handleChange} 
              placeholder="Контакт продавца (Telegram/Email)"
              className="bg-[#2a475e] text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-[#66c0f4]"
              required
            />
            <button 
              type="submit"
              disabled={loading}
              className="bg-[#66c0f4] text-black font-semibold py-2 rounded hover:bg-[#3b78b3] transition disabled:opacity-50"
            >
              {loading ? "Загрузка..." : "Добавить аккаунт"}
            </button>
          </form>
        </div>

        {notif && (
  <div className="fixed inset-0 flex items-center justify-center z-50">
    <div className="bg-[#1b1b1b] border-l-4 border-green-500 text-white px-6 py-4 rounded-lg shadow-lg text-center">
      ✅ Новый аккаунт добавлен!
    </div>
  </div>
)}

      </main>

        <div className="mt-[20px]">
      <Footer />
        </div>
    </div>
  )
}

export default Page
