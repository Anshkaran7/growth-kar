import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import CustomSvg from "@/components/CustomSvg";

interface Section1Props {
  style: string;
}

function Section1({ style }: Section1Props) {
  const controls = useAnimation();
  const welcomeControls = useAnimation();
  const contentRef = useRef<HTMLDivElement>(null);
  const [daysLeft, setDaysLeft] = useState(15);
  const [showBusinessGrowth, setShowBusinessGrowth] = useState(false);

  useEffect(() => {
    // Start the welcome text animation sequence
    const startAnimationSequence = async () => {
      await welcomeControls.start("visible");
      setShowBusinessGrowth(true);
      await welcomeControls.start({
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
      });
    };

    startAnimationSequence();
  }, [welcomeControls]);

  useEffect(() => {
    const calculateDaysLeft = () => {
      const launchDate = new Date("2024-09-25");
      const currentDate = new Date();
      const timeDifference = launchDate.getTime() - currentDate.getTime();
      const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
      setDaysLeft(daysRemaining > 0 ? daysRemaining : 0);
    };

    calculateDaysLeft();
    const intervalId = setInterval(calculateDaysLeft, 24 * 60 * 60 * 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const yOffset = window.pageYOffset;

      controls.start({
        scaleX: Math.min(3, 1 + yOffset / 200),
        scaleY: Math.max(0.2, 1 - yOffset / 800),
        y: -Math.min(window.innerHeight + 200, yOffset * 1.5),
        transition: { duration: 0.6, ease: "easeOut" },
      });

      if (contentRef.current) {
        contentRef.current.style.transform = `translateY(-${yOffset * 0.05}px)`;
        contentRef.current.style.opacity = `${Math.max(0, 1 - yOffset / 300)}`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  const sentence = {
    hidden: { opacity: 1, y: 50 },
    visible: {
      opacity: 1,
      y: 50,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const businessGrowthVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.5, ease: "easeInOut" },
    },
  };

  return (
    <div className={`${style} min-h-screen`}>
      <motion.div
        className="fixed bottom-8 right-8 z-50 px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg shadow-lg flex items-center justify-center cursor-pointer"
        initial={{ scale: 0.9, opacity: 0.8 }}
        animate={{ scale: [1, 1.1, 1], opacity: 1 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
        whileHover={{ scale: 1.1 }}
      >
        <span className="text-sm sm:text-base font-bold">
          🚀 Product Launch in {daysLeft} Days!
        </span>
      </motion.div>

      <div
        ref={contentRef}
        className="grid mb-60 md:mb-0 snap-always snap-center grid-rows-2 items-center justify-items-center transition-opacity duration-1000 ease-in-out"
      >
        <div className="text-center z-10 px-4 sm:px-0 flex absolute top-[30%] flex-col items-center gap-5">
          <motion.p
            className="text-2xl mb-1 text-white font-semibold"
            variants={sentence}
            initial="hidden"
            animate={welcomeControls}
          >
            {"Welcome to GrowthKAR".split("").map((char, index) => (
              <motion.span key={char + "-" + index} variants={letter}>
                {char}
              </motion.span>
            ))}
          </motion.p>

          <motion.h1
            className="font-roslindale text-3xl sm:text-4xl md:text-5xl font-medium"
            variants={businessGrowthVariants}
            initial="hidden"
            animate={showBusinessGrowth ? "visible" : "hidden"}
          >
            {"Empowering Your ".split("").map((char, index) => (
              <motion.span key={char + "-" + index}>{char}</motion.span>
            ))}
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-purple-500 bg-clip-text text-transparent">
              {"Business Growth".split("").map((char, index) => (
                <motion.span key={char + "-" + index}>{char}</motion.span>
              ))}
            </span>
          </motion.h1>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 2.0 }}
            className="px-4 py-2 sm:px-6 sm:py-3 bg-gray-800 rounded-full text-lg hover:bg-gray-700 transition duration-300"
          >
            Join Us
          </motion.button>
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
