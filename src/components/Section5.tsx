import Image from 'next/image'; // Next.js optimized Image component
import { motion } from 'framer-motion'; // Import Framer Motion for animations

interface Section5Props {
  style: string;
}

export default function Section5({ style }: Section5Props) {
  // Animation Variants
  const imageVariants = {
    hidden: { opacity: 0, x: -50 }, // Image enters from the left
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 50 }, // Text enters from the right
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.3 } },
  };

  return (
    <div className={` ${style} scroll-smooth flex items-center justify-center bg-black text-white min-h-screen px-4`}>
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl space-y-0 md:space-x-8">
        {/* Image Section */}
        <motion.div
          className="relative w-full md:w-1/2 h-60 md:h-80 flex-shrink-0 flex justify-center"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% is visible
        >
          <Image
            src="/assets/Freelancer.png"
            alt="Freelancer illustration"
            objectFit="contain"
            width={1000}
            height={1000}
            className="w-full h-full object-contain"
          />
        </motion.div>

        {/* Text Content Section */}
        <motion.div
          className="max-w-xl w-full text-center md:text-left"
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Freelancer Representation</h1>
          <p className="text-sm sm:text-base md:text-lg text-[#666666] text-justify">
            Freelancers represent GrowthKAR, not themselves. We provide work
            opportunities based on experience, portfolio, and pricing. Our platform
            has a bidding system where freelancers and service providers can bid for
            work. Alternatively, we can directly choose the best-rated freelancers,
            service providers, or agencies based on their portfolio.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
