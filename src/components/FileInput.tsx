import { useState } from "react";

const FileInput = ({
  name,
  onChange,
  title,
}: {
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  title: string;
}) => {
  const [fileName, setFileName] = useState<string | null>(null); // Store selected file name

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name); // Update file name state
      onChange(e); // Call parent's onChange handler
    }
  };

  return (
    <div className="relative w-full">
      {/* Hidden File Input */}
      <input
        type="file"
        id={name}
        name={name}
        className="hidden" // Hide the actual file input
        onChange={handleFileChange}
      />
      {/* Custom File Input Button */}
      <label
        htmlFor={name}
        className="flex items-center justify-between w-full px-4 py-3 text-left bg-[rgba(255,255,255,0.05)] text-[#c1c1c1] border border-[#3a3a3a] rounded-[15px] cursor-pointer hover:bg-[rgba(255,255,255,0.1)] transition duration-200 ease-in-out focus-within:ring-2 focus-within:ring-purple-500"
      >
        {/* Display Selected File Name or Default Title */}
        <span className="flex-grow">
          {fileName ? fileName : title}
        </span>
        {/* Icon or Button Part */}
        <div className="flex items-center space-x-2 text-gray-400">
          <span className="text-sm">Browse</span>
        </div>
      </label>
    </div>
  );
};

export default FileInput;