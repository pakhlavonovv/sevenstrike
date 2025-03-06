import Link from "next/link";
import React from "react";
import Image from "next/image";

const Community = () => {
  return (
    <section className="container py-12 mt-[50px] mb-[50px] px-4 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto flex flex-col gap-[20px] sm:gap-[40px] md:gap-[50px] lg:gap-[60px] lg:flex-row items-center">
        <div className="flex flex-col gap-2 order-2 lg:order-1 lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left">
          <h2 className="text-3xl md:text-3xl font-bold rounded-md text-gray-300 mb-4">
          Don't want to miss out on Counter Strike 2 news and tournament information?
          </h2>
          <p>Of course, tournament statistics, answers, MVP players, and information about Counter Strike 2 are all available on our Telegram channel, and you also have the opportunity to assemble a team for yourself in the Telegram channel group!</p>
          <Link
            href={"https://t.me/+RUy_McUwNN5kYzMy"}
            target="_blank"
            className="bg-black flex items-center justify-center text-white px-6 py-3 rounded-lg text-lg font-medium transition hover:bg-[#0000008a]"
          >
            Join to channel
          </Link>
        </div>

        <div className="lg:w-2/2 order-1 lg:order-2 w-[99%] sm:w-[70%] flex justify-center">
          <Image
          width={500}
          height={500}
            src={'/images/community.jpg'}
            alt="How to join image"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Community;