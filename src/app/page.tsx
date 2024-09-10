"use client";

import CustomSvg from "@/components/CustomSvg";
import Section2 from "@/components/Section2";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Section3 from "@/components/Section3";
import Section4 from "@/components/Section4";
import Section5 from "@/components/Section5";
import Section6 from "@/components/Section6";
import Section7 from "@/components/Section7";
import Section8 from "@/components/Section8";

export default function Home() {
  const controls = useAnimation(); // Framer Motion controls for animation
  const contentRef = useRef<HTMLDivElement>(null); // Ref for the content section

  useEffect(() => {
    const handleScroll = () => {
      const yOffset = window.pageYOffset;

      // Animate the circle as soon as there is any scroll
      controls.start({
        scaleX: Math.min(3, 1 + yOffset / 200), // Increase width up to 3 times faster
        scaleY: Math.max(0.2, 1 - yOffset / 800), // Decrease height faster down to 0.2
        y: -Math.min(window.innerHeight + 200, yOffset * 1.5), // Move faster and translate up beyond the screen
        transition: { duration: 0.6, ease: "easeOut" }, // Faster transition
      });

      // Apply fade and translate effect to the main content
      if (contentRef.current) {
        contentRef.current.style.transform = `translateY(-${yOffset * 0.05}px)`;
        contentRef.current.style.opacity = `${Math.max(0, 1 - yOffset / 300)}`; // Smooth fade out
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  return (
    <div className="relative snap-y snap-mandatory overflow-y-scroll h-screen  bg-black text-white scroll-smooth overflow-hidden">
      <Head>
        <title>GrowthKAR</title>
      </Head>

      {/* Sticky Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50">
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

      {/* Section 1 Content */}
      <div
        ref={contentRef}
        className="h-screen grid snap-always snap-center grid-rows-2 items-center justify-items-center transition-opacity duration-1000 ease-in-out"
      >
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

        <motion.div
          className="flex h-screen items-center absolute -bottom-36 z-30 pl-24 justify-center"
          initial={{ scaleX: 1, scaleY: 1, y: 0 }}
          animate={controls}
        >
          <CustomSvg />
        </motion.div>

        <div className="absolute bottom-0 z-40 left-0 right-0 flex flex-col items-center gap-y-5 justify-center">
          <p className="text-lg text-[#C0C0C0]">Scroll To Explore</p>
          <div className="w-[1px] h-14 bg-[#C0C0C0] rounded-full"></div>
        </div>
      </div>

      {/* Section 2 - Automatically shows when scrolled */}
      <Section2 style="h-screen snap-always snap-center" />
      <Section3 style="h-screen snap-always snap-center" />
      <Section4 style="h-screen snap-always snap-center" />
      <Section5 style="h-screen snap-always snap-center" />
      <Section6 style="h-screen snap-always snap-center" />
      <Section7 style="h-screen snap-always snap-center" />
      <Section8 style="snap-always snap-center" />
    </div>
  );
}
