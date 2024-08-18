// components/ScrollIndicator.tsx
export default function ScrollIndicator() {
    return (
      <div className="absolute animate-bounce bottom-10 text-center z-10">
        <p className="text-sm  text-gray-500">Scroll To Explore</p>
        <div className="mt-2 flex justify-center">
          <div className="w-2 h-2 rounded-full bg-gray-500"></div>
        </div>
      </div>
    );
  }
  