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
    <div className="flex flex-col gap-1 mt-1 sm:mt-3">
    <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]">

Добро пожаловать в <span className="underline">SevenStrike</span>, лучшее место для проведения соревновательных игровых турниров! Мы предоставляем платформу, на которой игроки могут участвовать в платных турнирах, демонстрировать свои навыки и соревноваться за денежные призы. Наша миссия — создать справедливую, увлекательную и полезную игровую среду для игроков всех уровней.

На SevenStrike мы предлагаем:

Ежедневные и еженедельные турниры по CS2.
Активное игровое сообщество, где можно общаться с другими игроками.
Политику честной игры, которая гарантирует отсутствие читов.
Присоединяйтесь к SevenStrike сегодня и превратите свою страсть к играм в реальные награды! </p>
    </div>
    </div>
    </div>
    <div className="flex items-center justify-center">
    {/* <div className="w-[95%] mt-[20px] rounded-lg bg-black text-white p-4 border-[1px] border-orange-600 flex flex-col items-center justify-center">
      <strong><h2 className="text-orange-500 text-[20px] md:text-[25px]">О регистрационном взносе</h2></strong>
      <p className="text-[14px] w-[100%] sm:w-[90%] md:w-[70%]">Для участия в платных онлайн-турнирах SevenStrike CS2 игроки должны оплатить регистрационный взнос перед вступлением в соревнование. Этот взнос помогает поддерживать высокое качество игрового опыта, пополняет призовой фонд и обеспечивает честную игру для всех участников.</p>
      <p className="underline font-bold text-[17px]">Как это работает:</p>
<ul className="list-disc list-inside text-gray-300 text-[14px] mb-6">
            <li>Оплатите вступительный взнос — обеспечьте себе место, оплатив регистрационный взнос.</li>
            <li>Соревнуйтесь и выигрывайте — соревнуйтесь с другими опытными игроками и получите свою долю призового фонда.</li>
            <li>Выведите свои выигрыши через администрацию SevenStrike — если вы выиграли, вы можете легко вывести свои заработки с помощью поддерживаемых способов оплаты.</li>
            <li>💰 Честная игра и награды — ваш вступительный взнос напрямую пополняет призовой фонд турнира и дает лучшим игрокам более крупные награды.
            </li>
          </ul>
    </div> */}
    </div>
    <div className="mt-9 sm:mt-[30px]">
      <Footer/>
    </div>
    </>
  )
}

export default Page