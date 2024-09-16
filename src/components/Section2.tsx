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
  const [titleInView, setTitleInView] = useState(false); // State to manage title visibility
  const [descriptionInView, setDescriptionInView] = useState(false); // State to manage description visibility

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
            setTitleInView(entry.isIntersecting);
          }

          if (entry.target === descriptionRef.current) {
            setDescriptionInView(entry.isIntersecting);
          }
        });
      },
      {
        rootMargin: "0px 0px -100px 0px", // Adjust root margin to trigger earlier
        threshold: 0.3, // Trigger when 30% of the element is in view for better visibility in mobile
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
      <div className="h-screen flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16">
        <div className="flex flex-col sm:flex-row items-center justify-center w-full max-w-6xl mx-auto space-y-8 sm:space-y-0 sm:space-x-8">
          {/* Left Section */}
          <div className="sm:w-1/2 flex items-center justify-center sm:justify-start text-center sm:text-left">
            <h1
              ref={titleRef}
              className={`text-3xl z-50 sm:text-4xl md:text-5xl lg:text-6xl font-serif transition duration-700 ease-in-out transform ${
                titleInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`} // Adjust translate-x for better appearance
            >
              At GrowthKAR
            </h1>
           
          </div>

          {/* Animated Line */}
          <div
            ref={lineRef} // Reference to the animated line
            className={`transition-all duration-1000 ease-[cubic-bezier(0.68, -0.55, 0.27, 1.55)] transform-origin-bottom w-[1px] ${
              lineInView
                ? "h-24 -translate-x-[10px] bg-[#C0C0C0]" // Adjusted responsiveness for smaller devices
                : "h-[20vh] sm:h-[60vh] bg-[#C0C0C0]"
            }`}
          ></div>

          {/* Right Section */}
          <div
            ref={descriptionRef}
            className={`sm:w-1/2 flex items-center justify-center sm:justify-end text-center sm:text-left transition duration-700 ease-in-out transform ${
              descriptionInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[50px]"
            }`} // Adjust translate-x for better appearance
          >
            <p className="text-base text-justify sm:text-lg lg:text-xl text-gray-400 max-w-md px-4 sm:px-0">
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
