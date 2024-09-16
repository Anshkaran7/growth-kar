// components/Section.jsx
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

interface HelpSectionProps {
  title: string;
  content: string;
  image: string;
  style ?: string;
}

const HelpSection: React.FC<HelpSectionProps> = ({ title, content, image, style }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Adjust as needed
  });

  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: 0.8 }}
      className={` ${style} flex items-center justify-center min-h-screen p-8 bg-black text-white`}
    >
      <div className="flex items-center space-x-8 max-w-4xl">
        <div className="relative w-64 h-64">
          {/* Image area */}
          <img src={image} alt={title} className="w-full h-full object-contain" />
        </div>
        <div className="max-w-md">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-lg">{content}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default HelpSection;
