import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FiPlus } from "react-icons/fi";

interface Section4Props {
  style: string;
}

function Section4({ style }: Section4Props) {
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`${style} flex items-center justify-center w-full relative p-0`}
    >
      <div
        className={`h-auto relative flex flex-col items-center justify-center w-full  transition-transform duration-1000 ${
          isInView ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`}
      >
        <div
          className={`bg-[#FFFFFF0D] w-full mt-20 md:mt-32 lg:mt-40 px-4 sm:px-8 md:px-12 py-8 sm:py-12 relative shadow-lg flex flex-col items-center justify-center transition-all duration-1000 ${
            isInView ? "rounded-t-[0%]" : "rounded-t-[50%]"
          }`}
        >
          <div className="mb-6 absolute -top-10 animate-bounce duration-300">
            <Image
              src="/star.png"
              alt="Star Icon"
              className="w-12 h-12 sm:w-20 sm:h-20"
              width={1000}
              height={1000}
            />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-white font-serif mb-8 sm:mb-12 transition-opacity duration-1000 ease-out transform translate-y-[-20px] animate-fade-in text-center">
            Freelancer Benefits
          </h2>
          <ul className="space-y-4 text-sm sm:text-base md:text-lg w-full mx-auto px-4 sm:px-6 md:px-8">
            {[
              {
                title: "No Commission",
                content:
                  "We ensure that freelancers receive 100% of their earnings without any platform commission.",
              },
              {
                title: "Team Building Opportunities",
                content:
                  "Join teams and collaborate with like-minded professionals on long-term projects.",
              },
              {
                title: "Long-Term Work Algorithm",
                content:
                  "Our algorithm matches you with clients for long-term work engagements, ensuring job security.",
              },
              {
                title: "Fair Work Allocation",
                content:
                  "Work is allocated fairly based on your skills, availability, and previous performance.",
              },
            ].map((benefit, index) => (
              <li
                key={index}
                className={`flex flex-col justify-between items-center border-b px-4 py-4 border-gray-600 transition-all duration-700 ${
                  isInView ? "animate-bounce-in" : "opacity-0 translate-y-4"
                }`}
                style={{
                  transitionDelay: `${index * 300}ms`, // Delay each item for a more noticeable staggered effect
                }}
                onMouseEnter={() => setHoveredBenefit(index)}
                onMouseLeave={() => setHoveredBenefit(null)}
              >
                <div className="flex flex-col md:flex-row justify-between items-start w-full cursor-pointer gap-4">
                 <div className="flex flex-row items-start justify-between w-full md:w-[30%]">
                 <span className="font-medium text-sm md:text-xl">
                    {benefit.title}
                  </span>
                  <span
                      className={`text-2xl md:hidden flex transition-transform duration-500 ${
                        hoveredBenefit === index ? "animate-spin" : ""
                      }`}
                    >
                      <FiPlus />
                    </span>
                 </div>
                  <div className="flex flex-col md:flex-row gap-x-4 items-center">
                    {hoveredBenefit === index && (
                      <p className="text-gray-400 text-sm md:text-lg font-light transition-opacity duration-500 ease-in-out animate-drop-in">
                        {benefit.content}
                      </p>
                    )}
                    <span
                      className={`text-2xl md:flex hidden transition-transform duration-500 ${
                        hoveredBenefit === index ? "animate-spin" : ""
                      }`}
                    >
                      <FiPlus />
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Section4;
