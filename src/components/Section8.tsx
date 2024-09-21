import React, { useState } from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import CustomDropdown from "./CustomDropdown";
import "tailwindcss/tailwind.css";
import FileInput from "./FileInput";

const Section8 = () => {
  const [activeTab, setActiveTab] = useState("startup");
  const [formData, setFormData] = useState({
    name: "",
    contactName: "",
    email: "",
    phone: "",
    address: "",
    website: "",
    description: "",
    role: "",
    services: "",
    experience: "",
    portfolio: "",
    pricingModel: "",
    founderName: "",
    founderRole: "",
    founderEmail: "",
    founderPhone: "",
    entityType: "",
    businessStructure: "",
    industrySector: "",
    companyStage: "",
    fundingStage: "",
    teamStatus: "",
    interestedServices: [],
    additionalNotes: "",
    agreeToTerms: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleDropdownChange = (field: string, value: string | string[]) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  const startupFields = (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Startup-specific Fields */}
      <input
        type="text"
        name="name"
        placeholder="Company/Startup Name"
        value={formData.name}
        onChange={handleInputChange}
        className="input-field w-full p-3 md:p-4 text-sm md:text-base transition-all duration-300 ease-in-out transform hover:scale-105 focus:ring-2 focus:ring-purple-500"
      />
      <input
        type="text"
        name="founderName"
        placeholder="Founder Name"
        value={formData.founderName}
        onChange={handleInputChange}
        className="input-field w-full p-3 md:p-4 text-sm md:text-base transition-all duration-300 ease-in-out transform hover:scale-105 focus:ring-2 focus:ring-purple-500"
      />
      <input
        type="email"
        name="founderEmail"
        placeholder="Founder Email"
        value={formData.founderEmail}
        onChange={handleInputChange}
        className="input-field w-full p-3 md:p-4 text-sm md:text-base transition-all duration-300 ease-in-out transform hover:scale-105 focus:ring-2 focus:ring-purple-500"
      />
      <input
        type="text"
        name="founderPhone"
        placeholder="Founder Phone Number"
        value={formData.founderPhone}
        onChange={handleInputChange}
        className="input-field w-full p-3 md:p-4 text-sm md:text-base transition-all duration-300 ease-in-out transform hover:scale-105 focus:ring-2 focus:ring-purple-500"
      />
      <CustomDropdown
        title="Business Entity Type"
        options={[
          "Sole Proprietorship",
          "Partnership",
          "LLC",
          "Private Company",
          "Public Company",
          "NPO",
          "Co-op",
          "Other",
        ]}
        selectedOption={formData.entityType}
        onSelect={(option) => handleDropdownChange("entityType", option)}
      />
      <CustomDropdown
        title="Business Structure"
        options={[
          "Startup",
          "SME",
          "Large Corporation",
          "Family-Owned Business",
          "Other",
        ]}
        selectedOption={formData.businessStructure}
        onSelect={(option) => handleDropdownChange("businessStructure", option)}
      />
      <CustomDropdown
        title="Industry Sector"
        options={[
          "Technology",
          "Finance",
          "Healthcare",
          "Manufacturing",
          "Education",
          "Retail",
          "Marketing/Advertising",
          "Other",
        ]}
        selectedOption={formData.industrySector}
        onSelect={(option) => handleDropdownChange("industrySector", option)}
      />
      <CustomDropdown
        title="Company Stage"
        options={["Idea", "MVP", "Growth", "Scaling"]}
        selectedOption={formData.companyStage}
        onSelect={(option) => handleDropdownChange("companyStage", option)}
      />
      <CustomDropdown
        title="Funding Stage"
        options={["Pre-seed", "Seed", "Series A, B, C", "Not Funded"]}
        selectedOption={formData.fundingStage}
        onSelect={(option) => handleDropdownChange("fundingStage", option)}
      />
      <textarea
        name="description"
        placeholder="About Your Company/Startup"
        value={formData.description}
        onChange={handleInputChange}
        className="input-field w-full col-span-1 md:col-span-2 p-3 md:p-4 text-sm md:text-base"
      ></textarea>
    </motion.div>
  );

  const freelancerFields = (
    <motion.div
      className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-2"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Freelancer-specific Fields */}
      <input
        type="text"
        name="name"
        placeholder="Name / Company Name"
        value={formData.name}
        onChange={handleInputChange}
        className="input-field w-full p-3 md:p-4 text-sm md:text-base transition-all duration-300 ease-in-out transform hover:scale-105 focus:ring-2 focus:ring-purple-500"
      />
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleInputChange}
        className="input-field w-full p-3 md:p-4 text-sm md:text-base transition-all duration-300 ease-in-out transform hover:scale-105 focus:ring-2 focus:ring-purple-500"
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleInputChange}
        className="input-field w-full p-3 md:p-4 text-sm md:text-base transition-all duration-300 ease-in-out transform hover:scale-105 focus:ring-2 focus:ring-purple-500"
      />
      <CustomDropdown
        title="Choose Your Role"
        options={["Developer", "Designer", "Consultant", "Marketer", "Other"]}
        selectedOption={formData.role}
        onSelect={(option) => handleDropdownChange("role", option)}
      />
      <CustomDropdown
        title="Services Provided"
        options={[
          "Web Development",
          "App Development",
          "Graphic Design",
          "SEO",
          "Other",
        ]}
        selectedOption={formData.services}
        onSelect={(option) => handleDropdownChange("services", option)}
      />
      <CustomDropdown
        title="Experience Level"
        options={["Junior", "Mid", "Senior", "Expert"]}
        selectedOption={formData.experience}
        onSelect={(option) => handleDropdownChange("experience", option)}
      />
      <FileInput
        name="portfolio"
        title="Upload Portfolio"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleInputChange({
            target: { name: "portfolio", value: e.target.value },
          } as React.ChangeEvent<HTMLInputElement>)
        }
      />
      <CustomDropdown
        title="Pricing Model"
        options={["Hourly", "Project-based", "Retainer"]}
        selectedOption={formData.pricingModel}
        onSelect={(option) => handleDropdownChange("pricingModel", option)}
      />
    </motion.div>
  );

  return (
    <section className="min-h-screen flex flex-col pb-40 snap-start items-center justify-center pt-24 md:pt-28 px-4 md:px-10 bg-black text-white">
      <h2 className="text-center text-xl md:text-3xl font-bold mb-4 md:mb-6">
        Register Here
      </h2>
      <div className="w-full max-w-3xl md:max-w-5xl b p-6 md:p-8 rounded-lg">
        {/* Tab Navigation */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          {["startup", "freelancer"].map((tab) => (
            <button
              key={tab}
              className={`px-3 md:px-4 py-2 mx-1 md:mx-2 text-sm md:text-base transition-colors duration-300 ease-in-out ${
                activeTab === tab
                  ? "border-b-4 border-purple-500 text-purple-500"
                  : "text-gray-400 hover:text-white"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="transition-opacity duration-500 ease-in-out"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          {activeTab === "startup" ? startupFields : freelancerFields}

          {/* Terms and Conditions */}
          <motion.div
            className="flex items-center mt-4 md:mt-6"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
          >
            <input
              type="checkbox"
              id="terms"
              checked={formData.agreeToTerms}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  agreeToTerms: e.target.checked,
                }))
              }
              className="form-checkbox h-5 w-5 text-purple-500"
            />
            <label htmlFor="terms" className="ml-3 text-xs md:text-base text-gray-400">
              I Agree To The Terms And Conditions
            </label>
          </motion.div>

          {/* Submit Button */}
          <motion.div
            className="flex justify-end mt-4 md:mt-6"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5 }}
          >
            <button
              type="submit"
              className="text-purple-500 bg-white px-8 md:px-10 py-2 md:py-3 rounded-lg hover:bg-white/90 cursor-pointer transition-all duration-300 focus:outline-none"
              disabled={!formData.agreeToTerms}
            >
              Submit
            </button>
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
};

export default Section8;
