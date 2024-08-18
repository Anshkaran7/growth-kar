'use client';

import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [showBenefits, setShowBenefits] = useState(false);
  const [showStar, setShowStar] = useState(false);
  const [activeBenefit, setActiveBenefit] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const yOffset = window.pageYOffset;
      setScrollY(yOffset);
      setScrolled(yOffset > window.innerHeight / 4);
      setShowContent(yOffset > window.innerHeight / 1.5);
      setShowServices(yOffset > window.innerHeight + 200);
      setShowStar(yOffset > window.innerHeight * 1.5);
      setShowBenefits(yOffset > window.innerHeight * 1.6);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleBenefit = (index: number) => {
    setActiveBenefit(activeBenefit === index ? null : index);
  };

  return (
    <div className="relative min-h-screen bg-black text-white scroll-smooth">
      <Head>
        <title>GrowthKAR</title>
      </Head>

      {/* Sticky Navbar */}
      <header className="fixed top-0 left-0 right-0 z-20">
        <div className="flex justify-between items-center p-4 sm:p-8 bg-black/80 backdrop-blur-sm transition-all duration-300">
          <Image src="/navbar.png" alt="GrowthKAR" width={40} height={40} className="w-8 h-8 sm:w-10 sm:h-10" />
          <div className="flex items-center gap-x-2">
            <Image src="/growthkar_logo.png" alt="GrowthKAR" width={28} height={28} className="w-5 h-5 sm:w-7 sm:h-7" />
            <span className="text-white font-semibold text-sm sm:text-base">GrowthKAR</span>
          </div>
          <button className="px-4 py-2 sm:px-6 sm:py-2 border rounded-full border-gray-600 hover:bg-gray-800 transition duration-300">
            Join Us
          </button>
        </div>
      </header>

      {/* First Section - Scroll-Triggered Hide */}
      <div
        className={`h-screen flex items-center relative justify-center transition-opacity duration-1000 ease-in-out ${
          scrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
        style={{
          transform: `translateY(-${scrollY * 0.05}px)`, // Reduced intensity for mobile
        }}
      >
        <div className="relative text-center z-10 pt-20 px-4 sm:px-0">
          <p
            className={`text-base sm:text-lg text-gray-400 mb-2 transition-opacity duration-700 ${
              scrolled ? 'opacity-0' : 'opacity-100'
            }`}
          >
            Welcome to GrowthKAR
          </p>
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 transition-transform duration-500 ${
              scrolled ? 'scale-90' : 'scale-100' // Subtler scaling on mobile
            }`}
          >
            Empowering Your{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
              Business Growth
            </span>
          </h1>
          <button
            className={`px-6 py-3 sm:px-8 sm:py-4 bg-gray-800 rounded-full text-lg hover:bg-gray-700 transition-transform duration-500 ${
              scrolled ? 'scale-90' : 'scale-100'
            }`}
          >
            Join Us
          </button>
        </div>
      </div>

      {/* Second Section with Scroll-Triggered Effects */}
      <div className="h-screen flex flex-col items-center justify-center px-4 sm:px-0">
        <div className="flex items-center justify-center w-full max-w-6xl mx-auto space-y-12 sm:space-y-0 sm:space-x-6 flex-col sm:flex-row">
          {/* Left Section */}
          <div className="sm:w-1/2 flex items-center justify-start text-center sm:text-left">
            <h1
              className={`text-4xl sm:text-5xl md:text-6xl font-serif transition-opacity duration-700 delay-200 ${
                showContent ? 'opacity-100' : 'opacity-0'
              }`}
            >
              At GrowthKAR
            </h1>
          </div>

          {/* Animated Line */}
          <div
            className={`transition-all duration-1000 ease-in-out transform ${
              showContent ? 'h-16 sm:h-40 rotate-6 scale-75 bg-purple-500' : 'h-[20vh] sm:h-[70vh] rotate-0 scale-100 bg-gray-100'
            } w-0.5`}
          ></div>

          {/* Right Section */}
          <div
            className={`sm:w-1/2 flex items-center justify-end transition-opacity duration-700 delay-400 ${
              showContent ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <p className="text-sm sm:text-lg text-gray-400 max-w-md">
              We specialize in helping companies of all sizes achieve their growth potential. Whether you are a startup
              or a mid-level company, we provide tailored services to support your business journey. Our goal is to offer
              comprehensive solutions that drive success and facilitate growth in today’s competitive market.
            </p>
          </div>
        </div>
      </div>

      {/* Our Services Section */}
      <div
        className={`h-screen flex flex-col items-center justify-center transition-opacity duration-1000 ease-in-out ${
          showServices ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="w-full flex justify-center items-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-serif">Our Services</h2>
        </div>
        <div className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth w-full max-w-6xl mx-auto space-x-6 px-4 sm:px-6 hide-scrollbar">
          <div className="snap-center flex-shrink-0 bg-gray-800 text-white rounded-xl p-4 sm:p-6 min-w-[250px] sm:min-w-[300px] w-72 sm:w-80 h-52 sm:h-60 glassmorphism animate-slide hover:bg-opacity-80 transition-transform duration-500">
            <h3 className="text-xl sm:text-2xl mb-4 animate-fadeInDown transition-transform duration-500">
              Startup Growth Solutions
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 animate-fadeInUp transition-transform duration-500">
              Starting a new business can be challenging. At GrowthKAR, we provide expert guidance and resources to help
              startups navigate these challenges and establish a solid foundation for growth.
            </p>
          </div>
          <div className="snap-center flex-shrink-0 bg-gray-800 text-white rounded-xl p-4 sm:p-6 min-w-[250px] sm:min-w-[300px] w-72 sm:w-80 h-52 sm:h-60 glassmorphism animate-slide hover:bg-opacity-80 transition-transform duration-500">
            <h3 className="text-xl sm:text-2xl mb-4 animate-fadeInDown transition-transform duration-500">
              Mid-Level Company Growth
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 animate-fadeInUp transition-transform duration-500">
              For established companies looking to scale, we offer growth strategies that are designed to maximize
              potential and drive sustainable development.
            </p>
          </div>
          <div className="snap-center flex-shrink-0 bg-gray-800 text-white rounded-xl p-4 sm:p-6 min-w-[250px] sm:min-w-[300px] w-72 sm:w-80 h-52 sm:h-60 glassmorphism animate-slide hover:bg-opacity-80 transition-transform duration-500">
            <h3 className="text-xl sm:text-2xl mb-4 animate-fadeInDown transition-transform duration-500">
              Freelancer Growth Services
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 animate-fadeInUp transition-transform duration-500">
              GrowthKAR connects businesses with freelancers across various fields dedicated to providing high-quality
              services that meet your specific needs.
            </p>
          </div>
        </div>
      </div>

      {/* Star and Freelancer Benefits Section */}
      <div className="h-[70vh] sm:h-[80vh] relative flex flex-col items-center justify-center">
        {showStar && (
          <div className="animate-bounce mb-6 absolute -top-6">
            <Image src="/star.png" alt="Star Icon" className="w-12 h-12 sm:w-20 sm:h-20" width={1000} height={1000} />
          </div>
        )}
        <div className="bg-[#FFFFFF0D] w-full h-[70vh] sm:h-[80vh] px-4 sm:px-8 py-8 sm:py-12 rounded-lg shadow-lg flex flex-col items-center justify-center">
          <h2
            className={`text-4xl sm:text-5xl font-serif mb-8 sm:mb-12 transition-opacity duration-1000 ${
              showBenefits ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Freelancer Benefits
          </h2>
          {showBenefits && (
            <ul className="space-y-4 text-base sm:text-lg w-full max-w-6xl mx-auto">
              {[
                {
                  title: 'No Commission',
                  content:
                    'We ensure that freelancers receive 100% of their earnings without any platform commission.',
                },
                {
                  title: 'Team Building Opportunities',
                  content:
                    'Join teams and collaborate with like-minded professionals on long-term projects.',
                },
                {
                  title: 'Long-Term Work Algorithm',
                  content:
                    'Our algorithm matches you with clients for long-term work engagements, ensuring job security.',
                },
                {
                  title: 'Fair Work Allocation',
                  content:
                    'Work is allocated fairly based on your skills, availability, and previous performance.',
                },
              ].map((benefit, index) => (
                <li
                  key={index}
                  className={`flex flex-col justify-between items-center border-b px-6 py-4 border-gray-600 ${
                    activeBenefit === index ? 'bg-gray-800/50' : ''
                  } hover:bg-gray-800/50 rounded-md transition-colors duration-300`}
                >
                  <div
                    className="flex justify-between items-center w-full cursor-pointer"
                    onClick={() => toggleBenefit(index)}
                  >
                    <span className="flex-1 font-semibold">{benefit.title}</span>
                    <span className="text-2xl">{activeBenefit === index ? '-' : '+'}</span>
                  </div>
                  {activeBenefit === index && (
                    <div className="mt-4 text-gray-400 transition-all duration-500 ease-in-out">
                      {benefit.content}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
