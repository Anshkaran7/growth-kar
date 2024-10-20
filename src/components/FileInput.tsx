import React, { useState } from "react";
import { X } from "lucide-react"; // Importing the X icon from lucide-react

const FileInput = ({
  name,
  onChange,
  title,
}: {
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  title: string;
}) => {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
      onChange(e);
    }
  };

  const handleCancelClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setFileName(null);
    if (onChange) {
      // Create a synthetic event to clear the file input
      const syntheticEvent = {
        target: { name, value: "", files: null },
      } as React.ChangeEvent<HTMLInputElement>;
      onChange(syntheticEvent);
    }
  };

  return (
    <div className="relative w-full">
      <input
        type="file"
        id={name}
        name={name}
        className="hidden"
        onChange={handleFileChange}
      />
      <label
        htmlFor={name}
        className="flex items-center justify-between w-full px-4 py-3 text-left bg-[rgba(255,255,255,0.05)] text-[#666666] border border-[#3a3a3a] rounded-[15px] cursor-pointer hover:bg-[rgba(255,255,255,0.1)] transition duration-200 ease-in-out focus-within:ring-2 focus-within:ring-purple-500"
      >
        <span className="flex-grow truncate">
          {fileName ? fileName : title}
        </span>
        <div className="flex items-center space-x-2 text-gray-400">
          {fileName ? (
            <button
              onClick={handleCancelClick}
              className="p-1 hover:bg-[rgba(255,255,255,0.1)] rounded-full transition duration-200 ease-in-out"
            >
              <X size={16} />
            </button>
          ) : (
            <span className="text-sm">Browse</span>
          )}
        </div>
      </label>
    </div>
  );
};

export default FileInput;
