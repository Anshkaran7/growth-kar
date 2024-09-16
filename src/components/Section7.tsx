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
    companyLogo: "/assets/companyLogo.png",
  },
  {
    quote: "The innovative strategies and the team’s dedication at GrowthKAR have been remarkable. It has transformed our approach towards growth.",
    author: "Jane Smith",
    companyLogo: "/assets/companyLogo.png",
  },
  {
    quote: "GrowthKAR helped us scale our operations seamlessly. Their professionalism and commitment have been impressive throughout our journey.",
    author: "Michael Johnson",
    companyLogo: "/assets/companyLogo.png",
  },
  {
    quote: "Their growth strategies have paved a new direction for our company. The whole process was smooth, efficient, and well managed.",
    author: "Emily Williams",
    companyLogo: "/assets/companyLogo.png",
  },
  {
    quote: "The expertise at GrowthKAR is unmatched. They understood our requirements and delivered the best results.",
    author: "Chris Brown",
    companyLogo: "/assets/companyLogo.png",
  },
];

interface Section7Props {
  style: string;
}

const Section7 = ({ style }: Section7Props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true,
    centerPadding: "0",
    focusOnSelect: true,
    arrows: false,
    beforeChange: (oldIndex: number, newIndex: number) => setActiveIndex(newIndex),
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
    <section className={`${style} relative snap-start flex flex-col items-center justify-center min-h-screen bg-black text-white`}>
      <h2 className="text-center text-4xl font-semibold mb-10">Testimonials</h2>
      <Slider {...settings} className="w-full mx-auto px-4">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`flex-shrink-0 relative rounded-xl shadow-lg mx-4 my-10 p-8 transition-transform duration-700 ${
              activeIndex === index ? "opacity-100 scale-105 z-20" : "opacity-60 scale-95"
            }`}
            style={{
              width: "60%",
              maxWidth: "500px",
              transition: "all 0.5s ease-in-out",
            }}
          >
            {/* Quote Image in the Corner */}
            <div className="absolute -top-10 left-5">
              <Image
                src="/assets/quote.png"
                alt="Quote Icon"
                width={50}
                height={50}
                className="object-contain opacity-40"
              />
            </div>
            {/* Testimonial Quote */}
            <p className="text-lg md:text-xl text-[#B8B8B8] mb-6 text-justify">{testimonial.quote}</p>
            {/* Author */}
            <p className="font-semibold text-lg text-white">{testimonial.author}</p>
            {/* Company Logo */}
            <div className="flex justify-center mt-6">
              <Image
                src={testimonial.companyLogo}
                alt={`Logo of ${testimonial.author}'s company`}
                width={100}
                height={50}
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
