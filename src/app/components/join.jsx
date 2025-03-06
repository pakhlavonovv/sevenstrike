import Link from "next/link";
import React from "react";
import Image from "next/image";

const Join = () => {
  return (
    <section className="bg-[#3B415C] py-12 mt-[50px] mb-[50px] px-4 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto flex flex-col gap-[20px] sm:gap-[40px] md:gap-[50px] lg:gap-[60px] lg:flex-row items-center">
        <div className="order-2 lg:order-1 lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-300 mb-4">
          How to Join?
          </h2>
          <ul className="list-disc list-inside text-gray-300 text-lg mb-6">
            <li>Create a team</li>
            <li>Choose tournament map</li>
            <li>Register to tournament</li>
            <li>Join the server in the game</li>
            <li>Follow the results in our telegram channel</li>
          </ul>
          <Link
            href={"https://t.me/+RUy_McUwNN5kYzMy"}
            target="_blank"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium transition hover:bg-blue-700"
          >
            Telegram channel
          </Link>
        </div>

        <div className="lg:w-2/2 order-1 lg:order-2 w-[99%] min-[450px]:w-[90%] sm:w-[70%] flex justify-center">
          <Image
          width={500}
          height={500}
            src={'/images/join.webp'}
            alt="How to join image"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Join;