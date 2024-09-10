import React, { useEffect, useRef, useState } from "react";

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
        cardsContainerRef.current.scrollWidth - cardsContainerRef.current.clientWidth;
      
      // Decrease the opacity more aggressively using Math.pow to create a non-linear effect
      const opacity = Math.max(0, 1 - Math.pow(scrollLeft / maxScrollLeft, 1.5));
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
        className={`h-screen relative flex flex-row items-center justify-center transition-opacity duration-1000 ease-in-out ${
          showServices ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Sticky Heading */}
        <div
          className="w-[30%] absolute z-10 left-0 top-[40%] flex justify-center items-center py-4"
          style={{ opacity: titleOpacity }} // Apply dynamic opacity to the title
        >
          <h2 className="text-4xl sm:text-5xl font-serif">Our Services</h2>
        </div>

        {/* Service Cards */}
        <div className="w-full absolute z-50 top-[25%] flex justify-center mt-20 overflow-hidden">
          <div
            ref={cardsContainerRef}
            className="flex w-full overflow-x-auto hide-scrollbar gap-x-10 px-4 sm:px-6 scroll-snap-x scroll-smooth"
          >
            {[
              {
                title: "Startup Growth Solutions",
                content:
                  "Starting a new business can be challenging. At GrowthKAR, we provide expert guidance and resources to help startups navigate these challenges and establish a solid foundation for growth.",
              },
              {
                title: "Mid-Level Company Growth",
                content:
                  "For established companies looking to scale, we offer growth strategies that are designed to maximize potential and drive sustainable development.",
              },
              {
                title: "Freelancer Growth Services",
                content:
                  "GrowthKAR connects businesses with freelancers across various fields dedicated to providing high-quality services that meet your specific needs.",
              },
              {
                title: "Freelancer Growth Services",
                content:
                  "GrowthKAR connects businesses with freelancers across various fields dedicated to providing high-quality services that meet your specific needs.",
              },

            ].map((service, index) => (
              <div
                key={index}
                className={`
                ${index === 0 && "ml-[500px]"} 
                relative overflow-x-visible snap-center  flex-shrink-0 text-white z-50 sm:p-6 min-w-[250px] sm:min-w-[300px] w-72 sm:w-80 h-52 sm:h-60 rounded-[30px] bg-gradient-to-b from-[#ccc]/20 to-black/5 bg-blend-lighten backdrop-blur-[100px] hover:bg-opacity-80 transition-transform duration-500`}
              >
                <div className="relative z-10">
                  <h3 className="text-xl sm:text-2xl mb-4">{service.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-400">{service.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
