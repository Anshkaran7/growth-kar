"use client";

import Head from "next/head";
import { useEffect, useRef } from "react";
import {  useAnimation } from "framer-motion";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import Section4 from "@/components/Section4";
import Section5 from "@/components/Section5";
import Section6 from "@/components/Section6";
import Section7 from "@/components/Section7";
import Section8 from "@/components/Section8";
import Section9 from "@/components/Section9";

export default function Home() {
  const controls = useAnimation(); // Framer Motion controls for animations
  const contentRef = useRef<HTMLDivElement>(null); // Ref for the content section
  const logoContainerRef = useRef<HTMLDivElement>(null); // Ref for the logo container




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
