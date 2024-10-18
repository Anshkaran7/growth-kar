import React, { useState } from "react";
import { motion } from "framer-motion";
import CustomDropdown from "./CustomDropdown";
import "tailwindcss/tailwind.css";
import FileInput from "./FileInput";

interface Section8Props {
  id?: string;
}

const Section8: React.FC<Section8Props> = ({ id }) => {
  const [activeTab, setActiveTab] = useState("seeker");
  const [formData, setFormData] = useState({
    // Common fields
    name: "",
    contactName: "",
    email: "",
    phone: "",
    address: "",
    website: "",
    description: "",
    businessStructure: "",
    industrySector: "",

    // Service Seeker specific fields
    businessStage: "",
    businessSize: "",
    serviceType: [],
    timeline: "",

    // Service Provider specific fields
    designation: "",
    primaryServiceCategory: "",
    specificServices: [],
    experience: "",
    serviceArea: "",
    teamStructure: "",
    teamSize: "",
    coreTeamMembers: "",
    supportStaff: "",
    teamBuildingRequirements: [],

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

  const seekerFields = (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
    >
      <input
        type="text"
        name="name"
        placeholder="Company/Business Name"
        value={formData.name}
        onChange={handleInputChange}
        className="input-field w-full p-3 md:p-4 text-sm md:text-base"
      />
      <CustomDropdown
        title="Business Stage"
        options={[
          "Planning Stage",
          "Startup (0-3 years)",
          "Established Business",
          "Other",
        ]}
        selectedOption={formData.businessStage}
        onSelect={(option) => handleDropdownChange("businessStage", option)}
      />
      <CustomDropdown
        title="Industry Sector"
        options={[
          "Information Technology",
          "Manufacturing",
          "Healthcare",
          "Education",
          "Financial Services",
          "Retail & E-commerce",
          "Food & Beverage",
          "Real Estate",
          "Agriculture",
          "Transportation & Logistics",
          "Media & Entertainment",
          "Travel & Tourism",
          "Other",
        ]}
        selectedOption={formData.industrySector}
        onSelect={(option) => handleDropdownChange("industrySector", option)}
      />
      <CustomDropdown
        title="Business Structure"
        options={[
          "Sole Proprietorship",
          "Partnership",
          "LLC",
          "Corporation",
          "Other",
        ]}
        selectedOption={formData.businessStructure}
        onSelect={(option) => handleDropdownChange("businessStructure", option)}
      />
      <CustomDropdown
        title="Business Size"
        options={[
          "Micro (1-9 employees)",
          "Small (10-49 employees)",
          "Medium (50-249 employees)",
          "Large (250+ employees)",
        ]}
        selectedOption={formData.businessSize}
        onSelect={(option) => handleDropdownChange("businessSize", option)}
      />
      <input
        type="text"
        name="website"
        placeholder="Company Website/URL"
        value={formData.website}
        onChange={handleInputChange}
        className="input-field w-full p-3 md:p-4 text-sm md:text-base"
      />
      <input
        type="text"
        name="contactName"
        placeholder="Primary Contact Person"
        value={formData.contactName}
        onChange={handleInputChange}
        className="input-field w-full p-3 md:p-4 text-sm md:text-base"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleInputChange}
        className="input-field w-full p-3 md:p-4 text-sm md:text-base"
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleInputChange}
        className="input-field w-full p-3 md:p-4 text-sm md:text-base"
      />
      <input
        type="text"
        name="address"
        placeholder="Location/City"
        value={formData.address}
        onChange={handleInputChange}
        className="input-field w-full p-3 md:p-4 text-sm md:text-base"
      />
      <CustomDropdown
        title="Type of Service Needed"
        options={[
          "Business Consulting",
          "Legal Services",
          "Financial Services",
          "Marketing Services",
          "IT Services",
          "HR Services",
          "Other",
        ]}
        selectedOption={formData.serviceType}
        onSelect={(option) => handleDropdownChange("serviceType", option)}
        multiple={true}
      />
      <textarea
        name="description"
        placeholder="Brief Description of Service Required"
        value={formData.description}
        onChange={handleInputChange}
        className="input-field w-full col-span-1 md:col-span-2 p-3 md:p-4 text-sm md:text-base"
      ></textarea>
      <CustomDropdown
        title="Expected Timeline"
        options={[
          "Immediate",
          "Within 1 month",
          "1-3 months",
          "More than 3 months",
        ]}
        selectedOption={formData.timeline}
        onSelect={(option) => handleDropdownChange("timeline", option)}
      />
    </motion.div>
  );

  const providerFields = (
    <motion.div
      className="grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-2"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
    >
      <input
        type="text"
        name="name"
        placeholder="Company/Organization/Person Name"
        value={formData.name}
        onChange={handleInputChange}
        className="input-field w-full p-3 md:p-4 text-sm md:text-base"
      />
      <CustomDropdown
        title="Business Structure"
        options={[
          "Individual Professional",
          "Partnership Firm",
          "Company",
          "Other",
        ]}
        selectedOption={formData.businessStructure}
        onSelect={(option) => handleDropdownChange("businessStructure", option)}
      />
      <input
        type="text"
        name="contactName"
        placeholder="Primary Contact Person"
        value={formData.contactName}
        onChange={handleInputChange}
        className="input-field w-full p-3 md:p-4 text-sm md:text-base"
      />
      <input
        type="text"
        name="designation"
        placeholder="Designation"
        value={formData.designation}
        onChange={handleInputChange}
        className="input-field w-full p-3 md:p-4 text-sm md:text-base"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleInputChange}
        className="input-field w-full p-3 md:p-4 text-sm md:text-base"
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleInputChange}
        className="input-field w-full p-3 md:p-4 text-sm md:text-base"
      />
      <input
        type="text"
        name="address"
        placeholder="Business Address"
        value={formData.address}
        onChange={handleInputChange}
        className="input-field w-full p-3 md:p-4 text-sm md:text-base"
      />
      <input
        type="text"
        name="website"
        placeholder="Website (if any)"
        value={formData.website}
        onChange={handleInputChange}
        className="input-field w-full p-3 md:p-4 text-sm md:text-base"
      />
      <CustomDropdown
        title="Primary Service Category"
        options={[
          "Business Consulting",
          "Legal Services",
          "Financial Services",
          "Marketing Services",
          "IT Services",
          "HR Services",
          "Other",
        ]}
        selectedOption={formData.primaryServiceCategory}
        onSelect={(option) =>
          handleDropdownChange("primaryServiceCategory", option)
        }
      />
      <CustomDropdown
        title="Specific Services Offered"
        options={[
          "Business Strategy",
          "Legal Consultation",
          "Tax Services",
          "Digital Marketing",
          "Software Development",
          "Recruitment",
          "Other",
        ]}
        selectedOption={formData.specificServices}
        onSelect={(option) => handleDropdownChange("specificServices", option)}
        multiple={true}
      />
      <CustomDropdown
        title="Experience in Field"
        options={["1-3 years", "4-7 years", "8-10 years", "10+ years"]}
        selectedOption={formData.experience}
        onSelect={(option) => handleDropdownChange("experience", option)}
      />
      <CustomDropdown
        title="Service Area Coverage"
        options={["Local", "Regional", "National", "International"]}
        selectedOption={formData.serviceArea}
        onSelect={(option) => handleDropdownChange("serviceArea", option)}
      />
      <CustomDropdown
        title="Current Team Structure"
        options={[
          "I have an established team",
          "I am a solo professional",
          "Looking to build a team",
          "In process of building team",
        ]}
        selectedOption={formData.teamStructure}
        onSelect={(option) => handleDropdownChange("teamStructure", option)}
      />
      <input
        type="number"
        name="teamSize"
        placeholder="Total Team Size"
        value={formData.teamSize}
        onChange={handleInputChange}
        className="input-field w-full p-3 md:p-4 text-sm md:text-base"
      />
      <input
        type="number"
        name="coreTeamMembers"
        placeholder="Core Team Members"
        value={formData.coreTeamMembers}
        onChange={handleInputChange}
        className="input-field w-full p-3 md:p-4 text-sm md:text-base"
      />
      <input
        type="number"
        name="supportStaff"
        placeholder="Support Staff"
        value={formData.supportStaff}
        onChange={handleInputChange}
        className="input-field w-full p-3 md:p-4 text-sm md:text-base"
      />
      <CustomDropdown
        title="Team Building Requirements"
        options={[
          "Not looking for team members",
          "Looking for team members in Technical Roles",
          "Looking for team members in Management Roles",
          "Looking for team members in Support Roles",
          "Looking for team members with Specialized Skills",
        ]}
        selectedOption={formData.teamBuildingRequirements}
        onSelect={(option) =>
          handleDropdownChange("teamBuildingRequirements", option)
        }
        multiple={true}
      />
      <FileInput
        name="portfolio"
        title="Upload Portfolio Documents"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleInputChange({
            target: { name: "portfolio", value: e.target.value },
          } as React.ChangeEvent<HTMLInputElement>)
        }
      />
    </motion.div>
  );

  return (
    <section
      id={id}
      className="min-h-screen flex flex-col pb-40 snap-start items-center justify-center pt-24 md:pt-28 px-4 md:px-10 bg-black text-white"
    >
      <h2 className="text-center text-xl md:text-3xl font-bold mb-4 md:mb-6">
        Register Here
      </h2>
      <div className="w-full max-w-3xl md:max-w-5xl b p-6 md:p-8 rounded-lg">
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          {["seeker", "provider"].map((tab) => (
            <button
              key={tab}
              className={`px-3 md:px-4 py-2 mx-1 md:mx-2 text-sm md:text-base transition-colors duration-300 ease-in-out ${
                activeTab === tab
                  ? "border-b-4 border-purple-500 text-purple-500"
                  : "text-gray-400 hover:text-white"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === "seeker" ? "Service Seeker" : "Service Provider"}
            </button>
          ))}
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="transition-opacity duration-500 ease-in-out"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          {activeTab === "seeker" ? seekerFields : providerFields}

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
            <label
              htmlFor="terms"
              className="ml-3 text-xs md:text-base text-gray-400"
            >
              I Agree To The Terms And Conditions
            </label>
          </motion.div>

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
