// components/FreelancerRepresentation.jsx
import Image from 'next/image'; // Next.js optimized Image component

interface Section5Props {
  style: string;
}
export default function Section5({ style }: Section5Props) {
  return (
    <div className={` ${style} scroll-smooth  flex items-center justify-center bg-black text-white min-h-screen`}>
      <div className="flex items-center justify-between  w-[70%] space-x-8">
        <div className="relative w-80 h-80">
          <Image
            src="/assets/Freelancer.png"
            alt="Freelancer illustration"
            objectFit="contain"
            width={1000}
            height={1000}
          />
        </div>
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">Freelancer Representation</h1>
          <p className="text-lg text-[#666666] text-justify">
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
