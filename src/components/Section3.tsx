import React, { useEffect, useRef, useState } from "react";
import { FiPlus } from "react-icons/fi";

interface Section3Props {
  style: string;
}

function Section3({ style }: Section3Props) {
  const [titleOpacity, setTitleOpacity] = useState(1); // State to control the opacity of the title
  const cardsContainerRef = useRef<HTMLDivElement | null>(null);

  // Function to handle scroll event and adjust title opacity
  const handleScroll = () => {
    if (cardsContainerRef.current) {
      const scrollLeft = cardsContainerRef.current.scrollLeft;
      const maxScrollLeft =
        cardsContainerRef.current.scrollWidth -
        cardsContainerRef.current.clientWidth;

      // Decrease the opacity more aggressively using Math.pow to create a non-linear effect
      const opacity = Math.max(
        0,
        1 - Math.pow(scrollLeft / maxScrollLeft, 1.5)
      );
      setTitleOpacity(opacity);
    }
  };

  useEffect(() => {
    const container = cardsContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const showServices = true;

  return (
    <div className={`${style}`}>
      <div
        className={`h-screen relative flex flex-col md:flex-row items-center justify-center transition-opacity duration-1000 ease-in-out ${
          showServices ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Sticky Heading */}
        <div
          className="w-full md:w-[30%] absolute z-10 left-0 md:top-[40%] top-[10%] flex justify-center items-center py-4 px-4 md:px-0"
          style={{ opacity: titleOpacity }} // Apply dynamic opacity to the title
        >
          <h2 className="font-roslindale text-3xl sm:text-4xl md:text-7xl text-center md:text-left">
            Our Goals
          </h2>
        </div>

        {/* Service Cards */}
        <div className="w-full absolute z-20 md:top-[25%] top-[30%] flex justify-center mt-20 overflow-hidden">
          <div
            ref={cardsContainerRef}
            className="flex w-full overflow-x-auto hide-scrollbar gap-x-5 px-4 sm:px-6 scroll-snap-x scroll-smooth overflow-y-hidden"
          >
            {[
              {
                title: "Startup Growth Solutions",
                content:
                  "We help startups navigate early challenges and establish a solid foundation for growth.",
              },
              {
                title: "Established Business Expansion",
                content:
                  "For established companies looking to scale, we offer strategies to maximize potential and drive sustainable development.",
              },
              {
                title: "Expert Freelancer Matching",
                content:
                  "We connect businesses with top-tier freelancers to meet specific project needs and drive growth.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className={`${
                  index === 0 && "ml-0 md:ml-[400px]"
                } relative overflow-x-visible snap-center items-center flex-shrink-0 text-white z-20 p-6 min-w-[300px] w-96 h-[350px] rounded-3xl bg-gradient-to-b from-[#1a1a1a] to-black backdrop-blur-[10px] border-[1px] border-[#333333] flex flex-col gap-5`}
              >
                <div className="relative z-10">
                  <h3 className="text-2xl mb-4 px-10 text-center">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-400 text-center">
                    {service.content}
                  </p>
                </div>
                <button className="mt-4 w-48 px-4 py-2 bg-[#6877FF] text-white rounded-md text-sm flex items-center justify-center">
                  <FiPlus className="mr-2" /> Explore Our Services
                </button>
                <div className="absolute -bottom-5 -left-2 h-36 w-[400px] z-10 bg-gradient-to-t from-black to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
