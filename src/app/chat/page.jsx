import Header from "../components/header"
import '../components/style.css'
import Link from "next/link"
import Image from "next/image"
import Tournaments from "../../../public/images/CS.jpg"
import Footer from "../components/footer"
const Page = () => {
  return (
    <div className="flex flex-col min-h-screen">
    <div className="mb-[10px]">
    <Header/>
    </div>
    <div className="container">
        <div className="grid grid-cols-1 gap-2 items-center xl:grid-cols-[70%_30%]">
        <div className="w-full h-[450px] bg-[#0000006d] flex flex-col gap-3 mt-[10px] p-2">
            <div className="p-2 sm:px-4 md:px-6 md:pt-4 w-full text-white h-full bg-[#0000009d]">
            <div>
                Anonym: message
            </div>
            
            </div>
                        <div className="w-full text-white flex items-center bg-[#0000009d] justify-between p-2 px-2 md:px-4 lg:px-6">
                <input className="w-full rounded-sm outline-none text-gray-200 bg-transparent" type="text" placeholder="Write a message..."/>
                <Link href={'/'} className="text-gray-200">Send</Link>
            </div>
        </div>
        <div className="flex flex-col max-h-[450px] bg-[#0000006d] aspect-[9/10] overflow-hidden rounded-2xl">
        <Image src={Tournaments} className="w-full rounded-lg " alt="Counter stike 2 image"/>
        <div className="flex flex-col justify-between p-2 pb-5 h-64">
  <p className="text-gray-300 text-[12px] sm:text-[14px]">Прими участие в нашем CS2 турнире!
Это отличная возможность показать свои навыки и провести время с единомышленниками. Турнир абсолютно бесплатный, и каждый желающий может попробовать свои силы. В одном турнире участвует до 10 команд, что делает соревнование ещё более увлекательным и напряжённым. Собери свою команду, вступай в игру и докажи, что именно вы достойны победы!</p>
  <Link className="text-gray-100 w-full text-[14px] sm:text-[16px] bg-[#4ac0ff] h-[30px] sm:h-[40px] rounded-md flex items-center justify-center transition-all hover:bg-[#4ac0ffc6]" 
        href="https://t.me/sevenstrikee">
    Зарегистрироваться
  </Link>
</div>

        </div>
        </div>
    </div>
    <div className="mt-[50px]">
        <Footer/>
    </div>
    </div>
  )
}

export default Page