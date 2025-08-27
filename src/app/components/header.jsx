'use client'
import Link from 'next/link';
import { useState } from 'react';
import './style.css';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="w-full">
      {/* <div className="w-full bg-black flex items-center justify-center p-2 text-white">
        <h2 className='text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] text-center'>Регистрируйтесь сейчас и побеждайте вместе со своей командой в наших турнирах с денежными призами!</h2>
      </div> */}
      <header className="flex items-center justfiy-center bg-[url('/images/bg.jpg')] bg-cover bg-center h-[70px] md:h-[80px] lg:h-[100px] shadow-lg lg:shadow-xl">
      <div className='container flex items-center justify-between relative'>
        <i>
        <h1 className="text-[#2C2F44] text-[30px] cursor-pointer font-extrabold sm:text-[35px] md:text-[40px] lg:text-[45px]">SevenStrike</h1>
        </i>

        <ul className="hidden md:flex items-center gap-3">
          <li>
            <Link className="font-semibold text-gray-300 transition-all hover:text-[#4ac0ff] hover:underline" href={'/'}>
              Главная
            </Link>
          </li>
          <li>
            <Link className="font-semibold text-gray-300 transition-all hover:text-[#4ac0ff] hover:underline" href={'/contact'}>
              Связаться
            </Link>
          </li>
          <li>
            <Link className="font-semibold text-gray-300 transition-all hover:text-[#4ac0ff] hover:underline" href={'/about'}>
              О нас
            </Link>
          </li>
           <li>
            <Link className="font-semibold text-gray-300 transition-all hover:text-[#4ac0ff] hover:underline" href={'/chat'}>
              Чат и торговля
            </Link>
          </li>
        </ul>

        <aside className="flex items-center gap-2 lg:hidden">
          <Link href={'/register'} className='text-[16px] text-[#378ebd] sm:text-[18px] underline'>Регистрация</Link>
          <button onClick={toggleSidebar}>
            <i className="fa-solid fa-bars fa-xl text-gray-400"></i>
          </button>
        </aside>

        <Link
          href={'/register'}
          className="hidden lg:flex items-center justify-center bg-[#3281AC] text-white w-[140px] h-[40px] rounded-md hover:border-[1px] hover:border-[#E38617] transition-all hover:bg-transparent hover:text-[#E38617]"
        >
          Регистрация
        </Link>

        <div
          className={`fixed top-0 left-0 z-50 w-[65%] h-full bg-[#3281AC] text-white p-4 transform transition-transform ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <button onClick={toggleSidebar} className="absolute top-4 right-4">
            <i className="fa-solid fa-xmark"></i>
          </button>
          <ul className="flex flex-col gap-4 mt-10">
            <li>
              <Link className="text-white text-[12px] sm:text-[14px] hover:text-gray-300" href={'/'}>
                Главная
              </Link>
            </li>
            <li>
              <Link className="text-white text-[12px] sm:text-[14px] hover:text-gray-300" href={'/contact'}>
                Связаться
              </Link>
            </li>
            <li>
              <Link className="text-white text-[12px] sm:text-[14px] hover:text-gray-300" href={'/about'}>
                О нас
              </Link>
            </li>
             <li>
              <Link className="text-white text-[12px] sm:text-[14px] hover:text-gray-300" href={'/chat'}>
                Чат и торговля
              </Link>
            </li>
          </ul>
        </div>
      </div>
      </header>
    </div>
  );
};

export default Header;