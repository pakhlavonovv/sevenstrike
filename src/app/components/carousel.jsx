'use client';
import { useEffect, useState } from "react";
import { db } from '../../../firebase-config';
import { collection, getDocs } from "firebase/firestore";
import './style.css';
import Image from "next/image";
import Link from "next/link";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [tournaments, setTournaments] = useState([]);

  useEffect(() => {
    const fetchTournaments = async () => {
      const querySnapshot = await getDocs(collection(db, "tournament"));
      const fetchedTournaments = querySnapshot.docs.map(doc => doc.data());
      setTournaments(fetchedTournaments);
      setCurrentSlide(0);
    };
    fetchTournaments();
  }, []);

  const handleNext = () => {
    if (tournaments.length === 0) return; 
    setCurrentSlide((prev) => (prev + 1) % tournaments.length);
  };

  const handlePrev = () => {
    if (tournaments.length === 0) return;
    setCurrentSlide((prev) => (prev - 1 + tournaments.length) % tournaments.length);
  };

  useEffect(() => {
    if (tournaments.length === 0) return;
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [tournaments]);

  return (
    <div className="container flex items-center justify-center">
      <div className="relative w-full lg:w-[95%] xl:w-[85%] h-[45vh] sm:h-[65vh] overflow-hidden rounded-lg ">
        {tournaments.length > 0 ? (
          <div
            className="absolute inset-0 bg-cover bg-center transition-all duration-700"
            style={{ backgroundImage: `url(${tournaments[currentSlide]?.image || '/images/dust.jpg'})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col gap-2 sm:flex-row items-start sm:items-center justify-between text-white text-center p-8 lg:p-12 xl:p-14">
              <div className="z-10 flex flex-col items-start">
                <h2 className="text-[25px] sm:text-4xl md:text-5xl font-bold">{tournaments[currentSlide]?.name || "Loading..."}</h2>
                <p className="text-lg sm:text-xl md:text-2xl sm:mt-2">{tournaments[currentSlide]?.map || "Map is not found"}</p>
                <p className="text-lg sm:text-xl md:text-2xl sm:mt-2">{tournaments[currentSlide]?.tournamenttype || "Undefined"}</p>
                <p className="text-lg sm:text-xl md:text-2xl sm:mt-2">{tournaments[currentSlide]?.time || "Undefined"}</p>
                <p className="text-lg sm:text-xl md:text-2xl sm:mt-2">Can participate: 10 Teams</p>
                <p className="text-md sm:text-lg md:text-xl sm:mt-2">Prize: <span className="text-green-500 text-[25px]">Ruble {tournaments[currentSlide]?.price || "0"}</span></p>
                <Link href={'https://t.me/pakhlavonov177'} target="_blank" className="mt-1 sm:mt-4 px-6 py-2 bg-[#3281AC] transition-all hover:border-[1px] hover:border-gray-300 hover:bg-transparent hover:shadow-xl rounded-lg text-white text-[14px] md:text-[16px] xl:text-[20px]">
                  Register now
                </Link>
              </div>
              <div className="hidden sm:flex absolute bottom-0 right-0">
                <Image width={500} height={500} alt="character image" src={'/images/carousel-ch.png'}/>
              </div>
            </div>
          </div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
            <p className="text-[16px] sm:text-2xl">Loading...</p>
          </div>
        )}
        <button
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-30 p-2 rounded-full"
          onClick={handlePrev}
        >
          ◀
        </button>
        <button
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-30 p-2 rounded-full"
          onClick={handleNext}
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default Carousel;
