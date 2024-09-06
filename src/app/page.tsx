"use client";

import CustomSvg from "@/components/CustomSvg";
import Section2 from "@/components/Section2";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const yOffset = window.pageYOffset;
      setScrollY(yOffset);
      setScrolled(yOffset > window.innerHeight / 4);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white scroll-smooth overflow-hidden">
      <Head>
        <title>GrowthKAR</title>
      </Head>

      {/* Sticky Navbar */}
      <header className="fixed top-0 left-0 right-0 z-20">
        <div className="flex justify-between items-center p-4 sm:p-8 bg-black backdrop-blur-sm transition-all duration-300">
          <Image
            src="/navbar.png"
            alt="GrowthKAR"
            width={40}
            height={40}
            className="w-8 h-8 sm:w-10 sm:h-10"
          />
          <div className="flex items-center gap-x-2">
            <Image
              src="/growthkar_logo.png"
              alt="GrowthKAR"
              width={28}
              height={28}
              className="w-5 h-5 sm:w-7 sm:h-7"
            />
            <span className="text-white font-semibold text-sm sm:text-base">
              GrowthKAR
            </span>
          </div>
          <button className="px-4 py-2 sm:px-6 sm:py-2 border rounded-full border-gray-600 hover:bg-gray-800 transition duration-300">
            Join Us
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div
        className={`h-screen grid grid-rows-2 items-center justify-items-center transition-opacity duration-1000 ease-in-out ${
          scrolled ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        style={{
          transform: `translateY(-${scrollY * 0.05}px)`,
        }}
      >
        {/* Welcome Section */}
        <div className="text-center z-10 px-4 sm:px-0 flex absolute top-[30%] flex-col items-center">
          <p className="text-base sm:text-lg text-gray-400 mb-1">
            Welcome to GrowthKAR
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
            Empowering Your{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
              Business Growth
            </span>
          </h1>
          <button className="px-4 py-2 sm:px-6 sm:py-3 bg-gray-800 rounded-full text-lg hover:bg-gray-700 transition duration-300">
            Join Us
          </button>
        </div>

          {/* Videos */}
          <div className="col-span-3 absolute bottom-36 flex justify-center">
            <video
              src="/assets/-7a40-4081-8df1-83f2461af922.mp4"
              className="w-[100px] h-[60px] sm:w-[150px] sm:h-[90px]"
              autoPlay
              muted
              loop
              playsInline
              controls={false}
            ></video>
            <video
              src="/assets/-7a40-4081-8df1-83f2461af922.mp4"
              className="w-[100px] h-[60px] sm:w-[150px] sm:h-[90px]"
              autoPlay
              muted
              loop
              playsInline
              controls={false}
            ></video>
            <video
              src="/assets/-7a40-4081-8df1-83f2461af922.mp4"
              className="w-[100px] h-[60px] sm:w-[150px] sm:h-[90px]"
              autoPlay
              muted
              loop
              playsInline
              controls={false}
            ></video>
          </div>

          {/* Custom SVG - This is the circle that should go on top of all the content of the page when the scroll is triggered */}
          <div className="flex h-screen items-center absolute -bottom-36 pl-24 justify-center">
            <CustomSvg />
          </div>

          <div>
            <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center gap-y-5 justify-center">
              <p className="text-lg text-[#C0C0C0]">
              Scroll To Explore
              </p>
              <div className="w-[1px] h-14 bg-[#C0C0C0] rounded-full"></div>
            </div>

          </div>
        </div>
  
          {/* New Screen -  that should load up on top of the previous, its height be off the screen and the color should be black.  */}
        <Section2 />
    </div>
  );
}
