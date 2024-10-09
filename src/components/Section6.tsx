import { useState, useEffect } from "react";
import Image from "next/image";

interface Section6Props {
  style: string;
}

export default function Section6({ style }: Section6Props) {
  const [activeIndex, setActiveIndex] = useState(0); // State to track the active content index
  const [animationClass, setAnimationClass] = useState(""); // State to control the animation class

  const sections = [
    {
      title: "Join Us",
      content:
        "If you are a freelancer interested in working with leading companies...",
    },
    {
      title: "About GrowthKAR",
      content: "GrowthKAR is committed to empowering businesses...",
    },
    {
      title: "Get In Touch",
      content:
        "Contact us today to learn more about how GrowthKAR can help your business grow...",
    },
  ];

  useEffect(() => {
    // Change content every 5 seconds
    const interval = setInterval(() => {
      setAnimationClass("slide-up-fade-out"); // Start the slide up and fade out animation
      setTimeout(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % sections.length); // Update content index
        setAnimationClass("slide-in-from-bottom"); // Start the slide in from bottom animation
      }, 500); // Wait for half a second to change content after fade-out
    }, 1000); // 5 seconds interval

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div
      className={`relative flex items-center justify-center min-h-[60vh] md:p-8 bg-black text-white ${style}`}
    >
      {/* Background Image Container */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute md:flex hidden inset-0 overflow-hidden"
          style={{
            backgroundImage: "url('/assets/bg.png')",
            backgroundSize: "50% 50%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.8,
          }}
        />

        {/* Help Section Image on Top */}
        <div className="absolute md:flex hidden -translate-x-12 -translate-y-1 w-1/2 h-auto">
          <Image
            src={"/assets/helpSection.png"}
            alt={"Help Section"}
            width={1000}
            height={1000}
            className="object-contain h-[370px] w-[370px]"
          />
        </div>
        {/* <div className="md:hidden flex w-[70%]">
          <Image
            src={"/assets/helpSection.png"}
            alt={"Help Section"}
            width={1000}
            height={1000}
            className="object-contain h-[370px] w-[370px]"
          />
        </div> */}

        {sections.map((section, index) => (
          <div
            key={index}
            className={`absolute md:hidden flex  w-[90%] md:w-1/2 items-end space-x-8 z-10 ${
              activeIndex === index ? animationClass : "opacity-0"
            }`}
            style={{
              transition: "opacity 0.5s ease-in-out",
            }}
          >
            <div className="w-full max-w-[350px] p-4">
              {" "}
              {/* Added max-width and padding */}
              <h2 className="text-3xl font-bold mb-4">{section.title}</h2>
              <p className="text-lg text-[#575757] w-full break-words">
                {section.content}
              </p>
            </div>
          </div>
        ))}
        {sections.map((section, index) => (
          <div
            key={index}
            className={`absolute md:flex hidden right-10 w-1/2 items-end space-x-8 z-10 ${
              activeIndex === index ? animationClass : "opacity-0"
            }`}
            style={{
              transition: "opacity 0.5s",
            }}
          >
            <div className="w-full max-w-[350px] p-4">
              {" "}
              {/* Added max-width and padding */}
              <h2 className="text-3xl font-bold mb-4">{section.title}</h2>
              <p className="text-lg text-[#575757] w-full break-words">
                {section.content}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-36 left-0 right-0 flex items-center justify-center p-4">
        <div className="w-full max-w-3xl h-1 bg-[#575757] rounded-full">
          <div
            className="h-full bg-[#fff] rounded-full"
            style={{
              width: `${((activeIndex + 1) / sections.length) * 100}%`,
              transition: "width 0.5s ease-in-out",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
