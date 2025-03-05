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
      <header className="flex items-center justfiy-center bg-[url('/images/bg.jpg')] bg-cover bg-center h-[100px] md:h-[120px] lg:h-[140px] shadow-lg lg:shadow-xl">
      <div className='container flex items-center justify-between relative'>
        <i>
        <h1 className="text-[#2C2F44] text-[30px] cursor-pointer font-extrabold sm:text-[35px] md:text-[40px] lg:text-[45px]">SevenStrike</h1>
        </i>

        <ul className="hidden md:flex items-center gap-3">
          <li>
            <Link className="font-semibold text-gray-300 transition-all hover:text-[#4ac0ff]" href={'/'}>
              Home
            </Link>
          </li>
          <li>
            <Link className="font-semibold text-gray-300 transition-all hover:text-[#4ac0ff]" href={'/contact'}>
              Contact
            </Link>
          </li>
          <li>
            <Link className="font-semibold text-gray-300 transition-all hover:text-[#4ac0ff]" href={'/about'}>
              About us
            </Link>
          </li>
          <li>
            <Link className="font-semibold text-gray-300 transition-all hover:text-[#4ac0ff]" href={'/faq'}>
              FAQ
            </Link>
          </li>
        </ul>

        <aside className="flex items-center gap-2 md:hidden">
          <Link href={'/rules'} className='text-[16px] text-[#378ebd] sm:text-[18px]'>Rules</Link>
          <button onClick={toggleSidebar}>
            <i className="fa-solid fa-bars fa-xl text-gray-400"></i>
          </button>
        </aside>

        <Link
          href={'/rules'}
          className="hidden min-[841px]:flex items-center justify-center bg-[#3281AC] text-white w-[140px] h-[40px] rounded-md hover:border-[1px] hover:border-[#E38617] transition-all hover:bg-transparent hover:text-[#E38617]"
        >
          Rules
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
                Home
              </Link>
            </li>
            <li>
              <Link className="text-white text-[12px] sm:text-[14px] hover:text-gray-300" href={'/contact'}>
                Contact
              </Link>
            </li>
            <li>
              <Link className="text-white text-[12px] sm:text-[14px] hover:text-gray-300" href={'/about'}>
                About us
              </Link>
            </li>
            <li>
              <Link className="text-white text-[12px] sm:text-[14px] hover:text-gray-300" href={'/faq'}>
                FAQ
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