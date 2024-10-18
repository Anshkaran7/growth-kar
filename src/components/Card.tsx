// components/Card.tsx
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  zigzagPosition: "left" | "right"; // New prop to determine the zigzag position
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  title,
  description,
  zigzagPosition,
}) => {
  // Conditional class for alignment based on zigzag position
  const alignmentClass =
    zigzagPosition === "left"
      ? "self-center lg:self-start lg:ml-10"
      : "self-center lg:self-end lg:mr-10";

  return (
    <motion.div
      className={`w-[90%] sm:w-[70%] md:w-[60%] lg:w-[400px] py-20 p-6 z-10 bg-[rgba(255,255,255,0.05)] backdrop-blur-sm border border-[rgba(157,157,157,0.5)] rounded-2xl shadow-lg ${alignmentClass} my-8`} // Responsive width and dynamic alignment class
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex justify-center mb-4">
        <Image
          src={imageSrc}
          alt={title}
          className="max-w-full max-h-52 object-contain"
        />
      </div>
      <h2 className="text-lg sm:text-xl lg:text-2xl text-white mb-2 text-center">
        {title}
      </h2>
      <p className="text-sm sm:text-md lg:text-lg text-gray-300 text-center">
        {description}
      </p>
    </motion.div>
  );
};

export default Card;
