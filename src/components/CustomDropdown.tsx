import { useState, useRef, useEffect } from "react";
import { FiChevronDown, FiSearch } from "react-icons/fi";
import { MdClear } from "react-icons/md";

interface CustomDropdownProps {
  title: string;
  options: string[];
  selectedOption: string | string[];
  onSelect: (option: string | string[]) => void;
  multiple?: boolean;
  disabled?: boolean; // New disabled prop
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  title,
  options,
  selectedOption,
  onSelect,
  multiple = false,
  disabled = false, // Default to false
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const optionsRef = useRef<HTMLDivElement>(null);

  const handleOptionSelect = (option: string) => {
    if (multiple) {
      const currentSelections = selectedOption as string[];
      const newSelections = currentSelections.includes(option)
        ? currentSelections.filter((o) => o !== option)
        : [...currentSelections, option];
      onSelect(newSelections);
    } else {
      onSelect(option);
      setIsOpen(false);
    }
  };

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const clearSelection = () => {
    onSelect(multiple ? [] : "");
    setSearchTerm("");
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isOpen && optionsRef.current) {
      optionsRef.current.focus();
    }
  }, [isOpen]);

  return (
    <div
      className={`relative w-full ${disabled ? "opacity-50 pointer-events-none" : ""}`}
      ref={dropdownRef}
    >
      {/* Dropdown button */}
      <button
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        className="w-full px-4 py-3 text-left rounded-[15px] bg-[rgba(255,255,255,0.05)] text-[#666666] border border-[#3a3a3a] focus:outline-none focus:ring-2 focus:ring-purple-500 flex items-center justify-between transition duration-200 ease-in-out hover:bg-[rgba(255,255,255,0.1)]"
      >
        {multiple
          ? (selectedOption as string[]).length > 0
            ? (selectedOption as string[]).join(", ")
            : title
          : (selectedOption as string) || title}
        <div className="flex items-center space-x-2">
          {((multiple && (selectedOption as string[]).length > 0) ||
            (!multiple && selectedOption)) && (
            <MdClear
              className="text-gray-400 hover:text-red-500 transition duration-200 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                clearSelection();
              }}
            />
          )}
          <FiChevronDown
            className={`transition-transform duration-300 transform ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>
      </button>
      {isOpen && (
        <div className="absolute z-10 w-full bg-[#2a2a2a] text-white rounded-[15px] shadow-lg mt-1 border border-gray-600 flex flex-col max-h-60 overflow-hidden">
          {/* Search Input */}
          <div className="sticky top-0 bg-[#2a2a2a] p-2 z-20 border-b border-gray-500 rounded-t-[15px]">
            <div className="relative">
              <FiSearch className="absolute top-3 left-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-10 py-2 rounded-[15px] bg-[#1e1e1e] text-[#c1c1c1] border border-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              {searchTerm && (
                <MdClear
                  className="absolute top-3 right-3 text-gray-400 hover:text-red-500 cursor-pointer"
                  onClick={() => setSearchTerm("")}
                />
              )}
            </div>
          </div>
          {/* Options List */}
          <div
            ref={optionsRef}
            tabIndex={0}
            className="flex-grow overflow-y-auto focus:outline-none scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <ul className="p-2">
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option, index) => (
                  <li
                    key={option}
                    onClick={() => handleOptionSelect(option)}
                    className={`px-4 py-2 flex items-center space-x-2 hover:bg-purple-600 cursor-pointer transition-all duration-200 ease-in-out transform ${
                      (multiple &&
                        (selectedOption as string[]).includes(option)) ||
                      (!multiple && option === selectedOption)
                        ? "bg-purple-700 text-white"
                        : "text-[#c1c1c1]"
                    }`}
                    style={{ transitionDelay: `${index * 25}ms` }}
                  >
                    {multiple && (
                      <input
                        title="Select"
                        type="checkbox"
                        checked={(selectedOption as string[]).includes(option)}
                        onChange={() => handleOptionSelect(option)}
                        className="form-checkbox h-5 w-5 text-purple-500 bg-[#242424] border-gray-300 focus:ring-purple-500"
                      />
                    )}
                    <span>{option}</span>
                  </li>
                ))
              ) : (
                <li className="px-4 py-2 text-gray-400">No options found</li>
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
