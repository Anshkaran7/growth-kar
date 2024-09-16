// components/Section9.tsx
import React from 'react';
import Card from './Card';

// Fixed Section Title Component
const SectionTitle: React.FC = () => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center px-4">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
        Why Choose GrowthKAR
      </h1>
    </div>
  );
};

const Section9: React.FC = () => {
  return (
    <div className="relative min-h-screen snap-start ">
      {/* Fixed Section Title */}
      <SectionTitle />

      {/* Scrollable Cards Container */}
      <div className="relative h-screen px-4 sm:px-10 md:px-20 lg:px-40 xl:px-60 overflow-y-scroll snap-y snap-mandatory flex flex-col gap-20 pt-[70vh] pb-20">
        <Card
          imageSrc="/assets/Experts-rafiki 1.png" // Replace with your image path
          title="Expert Guidance"
          description="Benefit From Our Experienced Mentors And Industry Experts"
          zigzagPosition="left"
        />
        <Card
          imageSrc="/assets/Experts-rafiki 1 (1).png" // Replace with your image path
          title="Comprehensive Solutions"
          description="We provide comprehensive solutions tailored to your needs."
          zigzagPosition="right"
        />
        <Card
          imageSrc="/assets/Experts-rafiki 1 (2).png" // Replace with your image path
          title="Tailored Strategies"
          description="Our strategies are crafted to ensure growth and success."
          zigzagPosition="left"
        />
        <Card
          imageSrc="/assets/Experts-rafiki 1 (3).png" // Replace with your image path
          title="Dedicated Support"
          description="Our dedicated support team is here to help you 24/7."
          zigzagPosition="right"
        />
        {/* Add more cards as needed */}
      </div>
    </div>
  );
};

export default Section9;
