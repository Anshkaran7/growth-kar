// components/ParallaxSection.tsx
'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

type ParallaxSectionProps = {
  children: React.ReactNode;
  offset: number;
};

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ children, offset }) => {
  // Detect scroll position
  const { scrollY } = useScroll();
  
  // Create a parallax effect with useTransform
  const y = useTransform(scrollY, [0, 1], [0, offset], { clamp: false });

  return (
    <motion.div style={{ y }} className="parallax-section">
      {children}
    </motion.div>
  );
};

export default ParallaxSection;
