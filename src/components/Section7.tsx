import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Testimonial {
  quote: string;
  author: string;
  companyLogo: string; // Path to company logo
}

const testimonials: Testimonial[] = [
  {
    quote: "Working with GrowthKAR has been a game-changer for our business. Their team is not only incredibly talented but also deeply committed to understanding our unique needs and delivering results that exceed our expectations.",
    author: "John Doe",
    companyLogo: "/assets/companyLogo.png", // Replace with your image path
  },
  {
    quote: "Working with GrowthKAR has been a game-changer for our business. Their team is not only incredibly talented but also deeply committed to understanding our unique needs and delivering results that exceed our expectations.",
    author: "John Doe",
    companyLogo: "/assets/companyLogo.png", // Replace with your image path
  },
  {
    quote: "Working with GrowthKAR has been a game-changer for our business. Their team is not only incredibly talented but also deeply committed to understanding our unique needs and delivering results that exceed our expectations.",
    author: "John Doe",
    companyLogo: "/assets/companyLogo.png", // Replace with your image path
  },
  {
    quote: "Working with GrowthKAR has been a game-changer for our business. Their team is not only incredibly talented but also deeply committed to understanding our unique needs and delivering results that exceed our expectations.",
    author: "John Doe",
    companyLogo: "/assets/companyLogo.png", // Replace with your image path
  },
  {
    quote: "Working with GrowthKAR has been a game-changer for our business. Their team is not only incredibly talented but also deeply committed to understanding our unique needs and delivering results that exceed our expectations.",
    author: "John Doe",
    companyLogo: "/assets/companyLogo.png", // Replace with your image path
  },
];

interface Section7Props {
  style: string;
}

const Section7 = ({ style }: Section7Props) => {
  const [activeIndex, setActiveIndex] = useState(0); // State to track the active slide

  const settings = {
    dots: true,
    infinite: true, // Enable infinite looping
    speed: 500,
    slidesToShow: 3, // Show 3 slides at a time for better effect
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true,
    centerPadding: "0",
    focusOnSelect: true,
    arrows: false, // Disable arrows
    beforeChange: (oldIndex: number, newIndex: number) => setActiveIndex(newIndex), // Track the active slide index
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerMode: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerMode: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ],
  };

  return (
    <section
      className={`${style} relative flex flex-col items-center justify-center min-h-screen bg-black text-white`}
    >
      <h2 className="text-center text-4xl font-semibold mb-12">Testimonial</h2>
      <Slider {...settings} className="w-full  overflow-x-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`flex-shrink-0 relative  rounded-lg shadow-lg mx-10 my-40 overflow-visible transition-all duration-500 ${
              activeIndex === index ? "opacity-100 scale-100" : "opacity-30 scale-90"
            }`} // Conditional styling for active and inactive slides
            style={{
              width: activeIndex === index ? "50%" : "40%", // Increased card width for better visibility
            }}
          >
            {/* Quote Image in the Corner */}
            <div className="absolute -top-20 left-0">
              <Image
                src="/assets/quote.png"
                alt="Quote"
                width={1000}
                height={1000}
                className="h-40 w-40 object-contain"
              />
            </div>
            {/* Quote */}
            <p className="text-lg text-[#B8B8B8] mb-4 text-justify">{testimonial.quote}</p>
            {/* Author */}
            <p className="font-semibold text-lg">{testimonial.author}</p>
            {/* Company Logo */}
            <div className="flex justify-center mt-4">
              <Image
                src={testimonial.companyLogo}
                alt={testimonial.author}
                width={100}
                height={40}
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Section7;
