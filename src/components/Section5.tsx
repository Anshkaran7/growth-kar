// components/FreelancerRepresentation.jsx
import Image from 'next/image'; // Next.js optimized Image component

interface Section5Props {
  style: string;
}

export default function Section5({ style }: Section5Props) {
  return (
    <div className={` ${style} scroll-smooth flex items-center justify-center bg-black text-white min-h-screen px-4`}>
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl space-y-0 md:space-x-8">
        {/* Image Section */}
        <div className="relative w-full md:w-1/2 h-60 md:h-80 flex-shrink-0 flex justify-center">
          <Image
            src="/assets/Freelancer.png"
            alt="Freelancer illustration"
            objectFit="contain"
            width={1000}
            height={1000}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Text Content Section */}
        <div className="max-w-xl w-full text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Freelancer Representation</h1>
          <p className="text-sm sm:text-base md:text-lg text-[#666666] text-justify">
            Freelancers represent GrowthKAR, not themselves. We provide work
            opportunities based on experience, portfolio, and pricing. Our platform
            has a bidding system where freelancers and service providers can bid for
            work. Alternatively, we can directly choose the best-rated freelancers,
            service providers, or agencies based on their portfolio.
          </p>
        </div>
      </div>
    </div>
  );
}
