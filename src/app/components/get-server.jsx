import React from "react";
import Image from "next/image";

const GetServer = () => {
  return (
    <section className="container bg-[#D9D9D9] py-12 mt-[50px] mb-[50px] px-4 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto flex flex-col gap-[20px] sm:gap-[40px] md:gap-[50px] lg:gap-[60px] lg:flex-row items-center">
        <div className="order-2 lg:order-1 lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold bg-black p-4 rounded-md text-gray-300 mb-4">
          How do I access the tournament map server?
          </h2>
          <ul className="list-disc list-inside text-gray-600 p-4 text-lg mb-6">
            <li>Create a team</li>
            <li>Choose tournament map</li>
            <li>Register to tournament</li>
            <li>Join the private channel, which gives a link to the channel (administrator of SevenStrike) to the team leader</li>
          </ul>
        </div>

        <div className="lg:w-2/2 order-1 lg:order-2 w-[99%]  sm:w-[70%] flex justify-center">
          <Image
          width={500}
          height={500}
            src={'/images/dust.jpg'}
            alt="How to join image"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default GetServer;