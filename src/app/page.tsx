"use client";

import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import Section4 from "@/components/Section4";
import Section5 from "@/components/Section5";
import Section6 from "@/components/Section6";
import Section7 from "@/components/Section7";
import Section8 from "@/components/Section8";
import Section9 from "@/components/Section9";
import { Button } from "@/components/ui/button";
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";

export default function Home() {
  const controls = useAnimation(); // Framer Motion controls for animations
  const contentRef = useRef<HTMLDivElement>(null); // Ref for the content section
  const logoContainerRef = useRef<HTMLDivElement>(null); // Ref for the logo container
  const [isMessageVisible, setIsMessageVisible] = useState(false);

  const toggleMessage = () => {
    setIsMessageVisible(!isMessageVisible);
  };


  // Scroll animations for SVG and content
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

      // Rotate the logo container based on scroll
      if (logoContainerRef.current) {
        const rotation = yOffset * 0.2; // Control the speed of rotation (adjust this value as needed)
        logoContainerRef.current.style.transform = `rotate(${rotation}deg)`; // Rotate based on scroll
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  return (
    <div className="relative container mx-auto overflow-hidden bg-black text-white h-screen scroll-smooth overflow-y-scroll snap-y snap-mandatory">
      <Head>
        <title>GrowthKAR</title>
      </Head>

      {/* Sticky Navbar */}
      <header className="w-full fixed top-0 left-0 right-0 z-50">
        {/* Beta Message with Toggle */}
        <div
          className={`sticky top-0 z-10 bg-yellow-500 text-black h-8 px-3 flex justify-center items-center space-x-2 transition-all duration-300 ${isMessageVisible ? 'h-12' : 'h-8'
            }`}
        >
          <motion.p
            className="font-medium text-sm leading-none"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            🚀 Product is in Beta Stage. Your Feedback is Appreciated!
          </motion.p>
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleMessage}
            aria-expanded={isMessageVisible}
            aria-controls="feedback-message"
            className="p-0.5 transition-transform duration-300"
          >
            {isMessageVisible ? (
              <ChevronUpIcon className="h-3 w-3" />
            ) : (
              <ChevronDownIcon className="h-3 w-3" />
            )}
            <span className="sr-only">
              {isMessageVisible ? 'Hide feedback message' : 'Show feedback message'}
            </span>
          </Button>
        </div>

        {/* Feedback Message (Animated) */}
        <div
          id="feedback-message"
          className={`transition-all duration-300 text-xs text-center bg-yellow-100 text-black ${isMessageVisible ? 'max-h-20 opacity-100 py-2' : 'max-h-0 opacity-0 py-0'
            } overflow-hidden`}
          role="alert"
        >
          If you encounter any bugs or glitches, please send us a screenshot at{' '}
          <a
            href="mailto:feedback@mail.growthkar.com"
            className="text-blue-500 hover:underline"
          >
            feedback@mail.growthkar.com
          </a>
        </div>

        {/* Logo and Branding Section */}
        <div className="w-full flex justify-center items-center p-4 sm:p-6 bg-black/70 backdrop-blur-md transition-all duration-300">
          <div className="flex items-center gap-x-2">
            <Image
              src="/logo.png"
              alt="GrowthKAR"
              width={1000}
              height={1000}
              className="w-5 h-5 sm:w-7 sm:h-7 transition-transform duration-300 hover:scale-110"
            />
            <span className="text-white font-semibold text-sm sm:text-base">
              GrowthKAR
            </span>
          </div>
        </div>
      </header>

      {/* Floating Banner */}
      {/* <motion.div
        className="fixed bottom-8 right-8 z-50 px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg shadow-lg flex items-center justify-center cursor-pointer"
        initial={{ scale: 0.9, opacity: 0.8 }}
        animate={{ scale: [1, 1.1, 1], opacity: 1 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
        whileHover={{ scale: 1.1 }}
      >
        <span className="text-xs md:text-base font-bold">
          🚀 Product Launch in {daysLeft} Days!
        </span>
      </motion.div> */}

      {/* Sections */}
      <Section1 style="h-screen snap-start" />
      <Section2 style="h-screen snap-start" />
      <Section3 style="h-screen snap-start" />
      <Section4 style="h-screen snap-start" />
      <Section5 style="h-screen snap-start" />
      <Section9 />
      <Section6 style="h-screen snap-start" />
      <Section7 style="h-screen snap-start" />
      <Section8 id="join-us" />
    </div>
  );
}
