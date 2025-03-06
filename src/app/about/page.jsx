import Image from "next/image"
import Header from "../components/header"
import Footer from "../components/footer"
import '../components/style.css'
const Page = () => {
  return (
    <>
    <div className="mb-[30px] md:mb-[60px]">
    <Header/>
    </div>
    <div className="container flex flex-col gap-4 md:gap-6 xl:flex-row xl:gap-8">
    <Image priority className="w-[100%] rounded-md order-2 xl:order-1 md:w-[90%] lg:w-[70%] xl:w-[60%]" width={600} height={600} src={'/images/dust.jpg'} alt="About image"/>
    <div className="flex flex-col gap-1 order-1 xl:order-2">
    <i><h1 className="text-[18px] sm:text-[22px] md:text-[24px] font-bold lg:text-[28px]">SEVENSTRIKE</h1></i>
    <div className="flex flex-col gap-1 mt-1 sm:mt-3">
    <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]">About SevenStrike

Welcome to <span className="underline">SevenStrike</span>, the ultimate destination for competitive gaming tournaments! We provide a platform where players can participate in paid tournaments, showcase their skills, and compete for cash prizes. Our mission is to create a fair, fun, and rewarding gaming experience for players of all levels.

At SevenStrike, we offer:

Daily and weekly CS2 tournaments
A vibrant gaming community to connect with other players
A fair play policy that ensures a cheat-free environment
Join SevenStrike today and turn your passion for gaming into real rewards! 🚀🎮</p>
    </div>
    </div>
    </div>
    <div className="flex items-center justify-center">
    <div className="w-[95%] mt-[20px] rounded-lg bg-black text-white p-4 border-[1px] border-orange-600 flex flex-col items-center justify-center">
      <strong><h2 className="text-orange-500 text-[20px] md:text-[25px]">About the registration fee</h2></strong>
      <p className="text-[14px] w-[100%] sm:w-[90%] md:w-[70%]">To participate in SevenStrike CS2 online paid tournaments, players must pay a registration fee before entering the competition. This fee helps maintain a high-quality gaming experience, contributes to the prize pool, and ensures fair play for all participants.</p>
      <p className="underline font-bold text-[17px]">How it works:</p>
<ul className="list-disc list-inside text-gray-300 text-[14px] mb-6">
            <li>Choose a tournament - Browse through the available CS2 tournaments and choose the one that suits you.</li>
            <li>Pay the entry fee - Secure your spot by paying the registration fee.</li>
            <li>Compete and win - Compete against other skilled players and claim your share of the prize pool.</li>
            <li>Withdraw your winnings from the SevenStrike admin - If you win, you can easily withdraw your earnings via supported payment methods.
            </li>
            <li>💰 Fair Play & Rewards - Your entry fee contributes directly to the tournament prize pool and gives the best performers bigger rewards.
            </li>
          </ul>
    </div>
    </div>
    <div className="mt-9 sm:mt-[30px]">
      <Footer/>
    </div>
    </>
  )
}

export default Page