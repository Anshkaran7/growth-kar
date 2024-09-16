'use client'
// components/ExpandingLine.tsx
import { useEffect, useState } from 'react';

export default function ExpandingLine() {
  const [expandLine, setExpandLine] = useState(false);
  const [shrinkLine, setShrinkLine] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 && !expandLine) {
        setExpandLine(true);

        setTimeout(() => {
          setShrinkLine(true);
        }, 1000); // Delay before shrinking
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [expandLine]);

  return (
    <div className="flex justify-center items-center min-h-screen relative">
      <div
        className={`absolute bg-gray-500 transition-all duration-1000 ease-in-out ${
          shrinkLine
            ? 'h-20 w-0.5' // Shrink line
            : expandLine
            ? 'h-full w-1 left-1/2 transform -translate-x-1/2' // Expanded line
            : 'h-10 w-0.5 bottom-10 left-1/2 transform -translate-x-1/2' // Initial small line
        }`}
      ></div>
    </div>
  );
}
