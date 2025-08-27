import Link from "next/link"
import Header from "../components/header"
import Footer from "../components/footer"
const Page = () => {
  return (
    <>
      <div className="mb-[20px]">
        <Header/>
      </div>
      <div className="container flex items-center justify-center">
      <div className="flex flex-col w-[100%] md:w-[80%] xl:w-[40%] gap-[20px]">
          <h1 className="font-bold text-[30px] text-start">Регистрация</h1>
        <form className="flex bg-[#0000009c] w-full h-full flex-col rounded-sm p-4 lg:p-[40px] py-10 pt-5 gap-2">
          <p className="text-[#D07B15] text-[16px]">Регистрируйтесь, используя имя аккаунта</p>
          <input type="text" className="bg-[#9d9d9d] outline-none text-white font-bold p-3 h-[40px] rounded-sm"/>
           <p className="text-[#D07B15] text-[16px]">Пароль</p>
          <input type="text" className="bg-[#9d9d9d] outline-none text-white font-bold p-3 h-[40px] rounded-sm"/>
          <button className="bg-[#14A2FF] h-[40px] mt-[20px] rounded-sm text-white">Регистрация</button>
          <Link href={'/login'} className="text-white text-center mt-[10px] underline">У меня уже есть аккаунт</Link>
        </form>
      </div>
      </div>
      <div className="mt-[50px]">
        <Footer/>
      </div>
    </>
  )
}

export default Page