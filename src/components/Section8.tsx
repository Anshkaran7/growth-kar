import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { motion, useInView } from "framer-motion"; // Import Framer Motion hooks
import { useRef } from "react"; // Import useRef from React

interface Section8Props {
  style: string;
}

const CustomDropdown = ({
  title,
  options,
  isOpen,
  toggleDropdown,
}: {
  title: string;
  options: string[];
  isOpen: boolean;
  toggleDropdown: () => void;
}) => {
  const [selected, setSelected] = useState(title);

  const handleSelect = (option: string) => {
    setSelected(option);
    toggleDropdown(); // Close the dropdown after selection
  };

  return (
    <div className="relative w-full">
      <button
        type="button"
        onClick={toggleDropdown}
        className="w-full px-4 py-3 text-left bg-[#FFFFFF0D] text-[#666666] rounded focus:outline-none focus:ring-2 focus:ring-purple-500 flex items-center justify-between transition duration-200 ease-in-out hover:bg-[#1a1a1a]"
      >
        {selected}
        <FiChevronDown className={`transition-transform duration-200 ${isOpen ? "transform rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <ul className="absolute z-10 w-full bg-[#1a1a1a] text-white rounded shadow-lg mt-1 max-h-40 overflow-y-auto transition-all duration-200 ease-in-out">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => handleSelect(option)}
              className="px-4 py-2 hover:bg-purple-500 cursor-pointer transition-colors duration-200 ease-in-out"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Section8 = ({ style }: Section8Props) => {
  const [activeTab, setActiveTab] = useState("Freelancer");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null); // Track which dropdown is open

  const sectionRef = useRef(null); 
  const isInView = useInView(sectionRef, { amount: 0.1 });

  const toggleDropdown = (dropdownName: string) => {
    setOpenDropdown((prev) => (prev === dropdownName ? null : dropdownName)); // Close other dropdowns when one is opened
  };

  const formFieldsLeft = [
    { type: "text", placeholder: "Name / Company Name" },
    { type: "email", placeholder: "Email Address" },
    { type: "text", placeholder: "Phone Number" },
    { type: "text", placeholder: "Location (City/Country)" },
    { type: "text", placeholder: "Website *" },
  ];

  const dropdownOptions = {
    role: ["Choose Your Role", "Developer", "Designer", "Manager", "Analyst", "Tester", "DevOps", "Architect", "Consultant"],
    services: ["Services Provided", "Web Development", "Graphic Design", "Consulting"],
    experience: ["Experience Level", "Junior", "Mid", "Senior"],
    pricing: ["Pricing Model", "Hourly", "Fixed", "Retainer"],
  };

  return (
    <section
      ref={sectionRef} // Attach ref to section
      className={`${style} relative flex flex-col items-center pt-20 justify-center bg-black text-white`}
    >
      <div className="w-full max-w-4xl mx-auto p-8 rounded-lg shadow-lg text-white">
        {/* Header */}
        <h2 className="text-center text-3xl font-bold mb-8">Register Here</h2>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          {["Startup", "Freelancer"].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 font-medium border-b-2 ${
                activeTab === tab ? "border-purple-500 text-purple-500" : "border-transparent text-white"
              } focus:outline-none`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Scrollable Form */}
        <div className="max-h-[700px] overflow-y-auto px-4 mt-4">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-6">
              {formFieldsLeft.map(({ type, placeholder }, index) => (
                <motion.div
                  key={placeholder}
                  initial={{ opacity: 0, translateY: -20 }} // Starting state
                  animate={isInView ? { opacity: 1, translateY: 0 } : {}} // Start animation if in view
                  transition={{ duration: 0.3, delay: index * 0.1 }} // Duration and staggered delay
                >
                  <input
                    type={type}
                    placeholder={placeholder}
                    className="w-full px-4 py-3 text-sm rounded bg-[#FFFFFF0D] text-[#666666] focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </motion.div>
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, translateY: -20 }}
                animate={isInView ? { opacity: 1, translateY: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.1 * 5 }}
              >
                <CustomDropdown
                  title="Choose Your Role"
                  options={dropdownOptions.role}
                  isOpen={openDropdown === "role"}
                  toggleDropdown={() => toggleDropdown("role")}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, translateY: -20 }}
                animate={isInView ? { opacity: 1, translateY: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.1 * 6 }}
              >
                <CustomDropdown
                  title="Services Provided"
                  options={dropdownOptions.services}
                  isOpen={openDropdown === "services"}
                  toggleDropdown={() => toggleDropdown("services")}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, translateY: -20 }}
                animate={isInView ? { opacity: 1, translateY: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.1 * 7 }}
              >
                <CustomDropdown
                  title="Experience Level"
                  options={dropdownOptions.experience}
                  isOpen={openDropdown === "experience"}
                  toggleDropdown={() => toggleDropdown("experience")}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, translateY: -20 }}
                animate={isInView ? { opacity: 1, translateY: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.1 * 8 }}
              >
                <input
                  title="Upload Your Resume *"
                  type="file"
                  className="w-full px-4 py-3 text-sm rounded bg-[#FFFFFF0D] text-[#666666] focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, translateY: -20 }}
                animate={isInView ? { opacity: 1, translateY: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.1 * 9 }}
              >
                <CustomDropdown
                  title="Pricing Model"
                  options={dropdownOptions.pricing}
                  isOpen={openDropdown === "pricing"}
                  toggleDropdown={() => toggleDropdown("pricing")}
                />
              </motion.div>
            </div>

            {/* Full Width Input */}
            <motion.div
              className="md:col-span-2"
              initial={{ opacity: 0, translateY: -20 }}
              animate={isInView ? { opacity: 1, translateY: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.1 * 10 }}
            >
              <textarea
                placeholder="Brief Description Of Your Business/Services *"
                className="w-full px-4 py-3 text-sm rounded bg-[#FFFFFF0D] text-[#666666] focus:outline-none focus:ring-2 focus:ring-purple-500"
              ></textarea>
            </motion.div>

            {/* Custom Checkbox and Submit Button */}
            <motion.div
              className="flex items-center md:col-span-2"
              initial={{ opacity: 0, translateY: -20 }}
              animate={isInView ? { opacity: 1, translateY: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.1 * 11 }}
            >
              <input
                type="checkbox"
                id="terms"
                className="mr-2 h-5 w-5 border-2 border-[#666666] rounded-sm bg-black text-purple-500 focus:ring-2 focus:ring-purple-500 checked:bg-purple-500"
              />
              <label htmlFor="terms" className="text-[#666666]">
                I Agree To The Terms And Conditions
              </label>
            </motion.div>

            {/* Submit Button */}
            <motion.div
              className="flex justify-end md:col-span-2"
              initial={{ opacity: 0, translateY: -20 }}
              animate={isInView ? { opacity: 1, translateY: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.1 * 12 }}
            >
              <button
                type="submit"
                className="px-8 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-700 focus:outline-none"
              >
                Submit
              </button>
            </motion.div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Section8;
