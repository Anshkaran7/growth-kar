import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

interface Section2Props {
  style?: string;
}

function Section2({ style }: Section2Props) {
  const [activeBenefit, setActiveBenefit] = useState<number | null>(null);
  const [showContent, setShowContent] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showBenefits, setShowBenefits] = useState(false);
  const [showStar, setShowStar] = useState(false);
  const [lineInView, setLineInView] = useState(false); // State to handle when line is in view

  const lineRef = useRef<HTMLDivElement>(null); // Ref for the animated line
  const titleRef = useRef<HTMLHeadingElement>(null); // Ref for "At GrowthKAR" title
  const descriptionRef = useRef<HTMLDivElement>(null); // Ref for description

  const toggleBenefit = (index: number) => {
    setActiveBenefit(activeBenefit === index ? null : index);
  };

  // Scroll effect handler
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Show content when scrolling past a certain point
      if (scrollPosition > window.innerHeight * 0.1) {
        setShowContent(true);
      }
      if (scrollPosition > window.innerHeight * 1.2) {
        setShowServices(true);
      }
      if (scrollPosition > window.innerHeight * 2) {
        setShowStar(true);
        setShowBenefits(true);
      }
    };

    // Attach scroll listener
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup
    };
  }, []);

  // Intersection Observer to animate the line, title, and description
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === lineRef.current) {
            setLineInView(entry.isIntersecting);
          }

          if (entry.target === titleRef.current) {
            if (entry.isIntersecting) {
              entry.target.classList.add("animate-title");
            } else {
              entry.target.classList.remove("animate-title");
            }
          }

          if (entry.target === descriptionRef.current) {
            if (entry.isIntersecting) {
              entry.target.classList.add("animate-description");
            } else {
              entry.target.classList.remove("animate-description");
            }
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is in view
      }
    );

    if (lineRef.current) observer.observe(lineRef.current); // Observe the animated line
    if (titleRef.current) observer.observe(titleRef.current); // Observe the "At GrowthKAR" title
    if (descriptionRef.current) observer.observe(descriptionRef.current); // Observe the description

    return () => {
      // Cleanup observers on component unmount
      if (lineRef.current) observer.unobserve(lineRef.current);
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (descriptionRef.current) observer.unobserve(descriptionRef.current);
    };
  }, []);

  return (
    <div
      className={`relative min-h-screen bg-black text-white scroll-smooth overflow-hidden ${style}`}
    >
      {/* Second Section with Scroll-Triggered Effects */}
      <div className="h-screen flex flex-col items-center justify-center px-4 sm:px-0">
        <div className="flex items-center justify-center w-full max-w-6xl mx-auto space-y-12 sm:space-y-0 sm:space-x-6 flex-col sm:flex-row">
          {/* Left Section */}
          <div className="sm:w-1/2 flex items-center justify-start text-center sm:text-left">
            <h1
              ref={titleRef}
              className={`text-4xl sm:text-5xl md:text-6xl font-serif opacity-0 transform -translate-x-40`} /* Initial transform state */
            >
              At GrowthKAR
            </h1>
          </div>

          {/* Animated Line */}
          <div
            ref={lineRef} // Reference to the animated line
            className={`transition-all duration-1000 ease-[cubic-bezier(0.68, -0.55, 0.27, 1.55)] transform-origin-bottom w-[1px] ${
              lineInView
                ? "h-24 -translate-x-[40px] bg-[#C0C0C0]" // Shortened and moved 140px left when in view
                : "h-[25vh] sm:h-[60vh] rotate-0 scale-100 bg-[#C0C0C0]"
            }`}
          ></div>

          {/* Right Section */}
          <div
            ref={descriptionRef}
            className={`sm:w-1/2 flex items-center justify-end opacity-0 transform translate-x-[400px]`} /* Initial transform state */
          >
            <p className="text-sm sm:text-lg text-gray-400 max-w-md">
              We specialize in helping companies of all sizes achieve their
              growth potential. Whether you are a startup or a mid-level
              company, we provide tailored services to support your business
              journey. Our goal is to offer comprehensive solutions that drive
              success and facilitate growth in today’s competitive market.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
