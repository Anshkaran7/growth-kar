import Image from "next/image";
import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { motion, useInView } from "framer-motion";

interface Section4Props {
  style: string;
}

const Section4: React.FC<Section4Props> = ({ style }) => {
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);
  const ref = React.useRef(null);
  const inView = useInView(ref, {
    amount: 0.2, // Trigger when 20% of the component is visible
  });

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const iconVariants = {
    hidden: { rotate: 0 },
    visible: { rotate: 90, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className={`${style} flex items-center justify-center w-full relative p-0`}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div className="h-auto relative flex flex-col items-center justify-center w-full">
        <motion.div
          ref={ref}
          className="bg-[#FFFFFF0D] w-full mt-20 md:mt-32 lg:mt-40 px-4 sm:px-8 md:px-12 py-8 sm:py-12 relative shadow-lg flex flex-col items-center justify-center"
          initial={{ y: 200, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            borderTopLeftRadius: inView ? "0%" : "40%",
            borderTopRightRadius: inView ? "0%" : "40%",
          }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="mb-6 absolute -top-10"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          >
            <Image
              src="/star.png"
              alt="Star Icon"
              className="w-12 h-12 sm:w-20 sm:h-20"
              width={1000}
              height={1000}
            />
          </motion.div>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl text-white font-serif mb-8 sm:mb-12 text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Service Provider Benefits
          </motion.h2>
          <motion.ul
            className="space-y-4 text-sm sm:text-base md:text-lg w-full mx-auto px-4 sm:px-6 md:px-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
          >
            {[
              {
                title: "Bidding Opportunities & Fair Competition",
                content:
                  "The bidding system allows providers to compete fairly based on their pricing, portfolio, and expertise.",
              },
              {
                title: "Team Building Opportunities",
                content:
                  "GrowthKAR enables service providers to build teams through the platform.",
              },
              {
                title: "Long-Term Work Algorithm",
                content:
                  "An algorithm that prioritizes long-term relationships and recurring work",
              },
              {
                title: "Commission-Free Platform",
                content: "GrowthKAR offers a commission-free system",
              },
              {
                title: " Project Management Tools",
                content:
                  "Providing built-in tools for project management, communication, and time tracking",
              },
              {
                title: "Customizable Service Packages",
                content:
                  "Allowing providers to create customizable packages to suit client needs",
              },
            ].map((benefit, index) => (
              <motion.li
                key={index}
                className="flex flex-col justify-between items-center border-b px-4 py-4 border-gray-600"
                variants={itemVariants}
                onMouseEnter={() => setHoveredBenefit(index)}
                onMouseLeave={() => setHoveredBenefit(null)}
              >
                <div className="flex flex-col md:flex-row justify-between items-start w-full cursor-pointer gap-4">
                  <div className="flex flex-row items-start justify-between w-full md:w-[30%]">
                    <span className="font-medium text-sm md:text-xl">
                      {benefit.title}
                    </span>
                    <motion.span
                      className="text-2xl md:hidden flex"
                      variants={iconVariants}
                      animate={hoveredBenefit === index ? "visible" : "hidden"}
                    >
                      <FiPlus />
                    </motion.span>
                  </div>
                  <div className="flex flex-col md:flex-row gap-x-4 items-center">
                    {hoveredBenefit === index && (
                      <motion.p
                        className="text-gray-400 text-sm md:text-lg font-light"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        {benefit.content}
                      </motion.p>
                    )}
                    <motion.span
                      className="text-2xl md:flex hidden"
                      variants={iconVariants}
                      animate={hoveredBenefit === index ? "visible" : "hidden"}
                    >
                      <FiPlus />
                    </motion.span>
                  </div>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Section4;
