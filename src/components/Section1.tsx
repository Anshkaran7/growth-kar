"use client";

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import CustomSvg from "@/components/CustomSvg"; // Import the CustomSvg component

interface Section1Props {
  style: string;
}

function Section1({ style }: Section1Props) {
  const controls = useAnimation(); // Framer Motion controls for animation
  const contentRef = useRef<HTMLDivElement>(null); // Ref for the content section
  const [daysLeft, setDaysLeft] = useState(15); // State to store the number of days left

  useEffect(() => {
    // Calculate the remaining days until the product launch
    const calculateDaysLeft = () => {
      const launchDate = new Date("2024-09-25"); // Set your launch date here
      const currentDate = new Date();
      const timeDifference = launchDate.getTime() - currentDate.getTime();
      const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
      setDaysLeft(daysRemaining > 0 ? daysRemaining : 0); // Set days left, but ensure it's not negative
    };

    calculateDaysLeft(); // Calculate on component mount

    const intervalId = setInterval(calculateDaysLeft, 24 * 60 * 60 * 1000); // Recalculate every 24 hours

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, []);

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
    <div className={`${style} min-h-screen`}>
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

      {/* Floating Banner */}
      <motion.div
        className="fixed bottom-8 right-8 z-50 px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg shadow-lg flex items-center justify-center cursor-pointer"
        initial={{ scale: 0.9, opacity: 0.8 }}
        animate={{ scale: [1, 1.1, 1], opacity: 1 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
        whileHover={{ scale: 1.1 }}
      >
        <span className="text-sm sm:text-base font-bold">🚀 Product Launch in {daysLeft} Days!</span>
      </motion.div>

      {/* Section 1 Content */}
      <div
        ref={contentRef}
        className=" grid mb-60 md:mb-0 snap-always snap-center grid-rows-2 items-center justify-items-center transition-opacity duration-1000 ease-in-out"
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
    </div>
  );
}

export default Section1;
