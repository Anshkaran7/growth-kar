import React, { useEffect, useRef, useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { motion, useAnimation } from "framer-motion";

interface Section3Props {
  style: string;
}

interface ServiceItem {
  title: string;
  content: string;
  bulletPoints: string[];
}

function Section3({ style }: Section3Props) {
  const [, setTitleOpacity] = useState(1);
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());
  const [isInView, setIsInView] = useState(false);
  const [isMdScreen, setIsMdScreen] = useState(false);
  const cardsContainerRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const titleControls = useAnimation();
  const cardsControls = useAnimation();

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMdScreen(window.innerWidth >= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isInView]);

  useEffect(() => {
    const animationSequence = async () => {
      if (isInView) {
        await titleControls.start({ opacity: 1, x: 0 });

        if (isMdScreen) {
          await new Promise((resolve) => setTimeout(resolve, 2000));
          await Promise.all([
            titleControls.start({ opacity: 0, x: -50 }),
            cardsControls.start({ x: "-12%" }),
          ]);
        }
      }
    };

    animationSequence();
  }, [isInView, titleControls, cardsControls, isMdScreen]);

  const handleScroll = () => {
    if (cardsContainerRef.current) {
      const scrollLeft = cardsContainerRef.current.scrollLeft;
      const maxScrollLeft =
        cardsContainerRef.current.scrollWidth -
        cardsContainerRef.current.clientWidth;

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

  const toggleCard = (index: number) => {
    setExpandedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const services: ServiceItem[] = [
    {
      title: "Startup Growth Solutions",
      content:
        "We help startups navigate early challenges and establish a solid foundation for growth.",
      bulletPoints: [
        "Business Plan Development",
        "Market Research And Analysis",
        "Funding Strategy And Pitch Deck Creation",
        "MVP (Minimum Viable Product) Planning",
        "Early-Stage Marketing And Branding",
        "Many More...",
      ],
    },
    {
      title: "Established Business Expansion",
      content:
        "For established companies looking to scale, we offer strategies to maximize potential and drive sustainable development.",
      bulletPoints: [
        "Market Expansion Strategy",
        "Operational Optimization",
        "Growth Financing",
        "Digital Transformation",
        "Advanced Marketing Campaigns",
        "More Services Available...",
      ],
    },
    {
      title: "Expert Freelancer Matching",
      content:
        "We connect businesses with top-tier freelancers to meet specific project needs and drive growth.",
      bulletPoints: [
        "Skilled Professional Vetting",
        "Project-Specific Matching",
        "Collaboration Management",
        "Quality Assurance",
        "Seamless Integration Support",
        "Additional Services...",
      ],
    },
  ];

  return (
    <div className={`${style}`} ref={sectionRef}>
      <div className="h-screen relative flex flex-col md:flex-row items-center justify-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={titleControls}
          className="w-full md:w-[30%] absolute z-10 left-0 md:top-[40%] top-[10%] flex justify-center items-center py-4 px-4 md:px-0"
        >
          <h2 className="font-roslindale text-3xl sm:text-4xl md:text-6xl text-center md:text-left">
            Our Goals
          </h2>
        </motion.div>

        <motion.div
          className="absolute z-20 md:top-[25%] top-[30%] flex justify-center md:mt-20 w-full md:w-fit"
          animate={cardsControls}
          initial={isMdScreen ? { x: 60 } : { x: 0 }}
          transition={isMdScreen ? { duration: 1, ease: "easeInOut" } : {}}
        >
          <div
            ref={cardsContainerRef}
            className="flex flex-row w-full overflow-x-auto hide-scrollbar gap-x-5 px-6 sm:px-6 scroll-smooth overflow-y-hidden"
          >
            {services.map((service, index) => (
              <div
                key={index}
                className={`${
                  index === 0 && "md:ml-[400px]"
                } relative overflow-x-visible snap-center items-center flex-shrink-0 text-white z-20 p-6 min-w-[300px] w-96 ${
                  expandedCards.has(index) ? "h-[450px]" : "h-[350px]"
                } rounded-3xl bg-gradient-to-b from-[#1a1a1a] to-black backdrop-blur-[10px] border-[1px] border-[#333333] flex flex-col justify-between transition-all duration-300`}
              >
                <div className="flex flex-col gap-5 items-center">
                  <div className="relative z-10">
                    <h3 className="text-2xl mb-4 px-10 text-center">
                      {service.title}
                    </h3>
                    <div className="flex flex-col justify-between h-32 items-center">
                      <p className="text-sm text-gray-400 text-center">
                        {service.content}
                      </p>
                      <button
                        onClick={() => toggleCard(index)}
                        className="mt-4 w-48 px-4 py-2 bg-[#6877FF] text-white rounded-md text-sm flex items-center justify-center"
                      >
                        {expandedCards.has(index) ? (
                          <FiMinus className="mr-2" />
                        ) : (
                          <FiPlus className="mr-2" />
                        )}
                        {expandedCards.has(index)
                          ? "Show Less"
                          : "Explore Our Services"}
                      </button>
                    </div>
                  </div>
                  {expandedCards.has(index) && (
                    <ul className="text-[#6877FF] text-sm mt-4 space-y-2">
                      {service.bulletPoints.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  )}
                </div>

                {!expandedCards.has(index) && (
                  <div className="absolute -bottom-5 -left-2 h-36 w-[400px] z-10 bg-gradient-to-t from-black to-transparent" />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Section3;
