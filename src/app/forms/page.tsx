"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";

import "tailwindcss/tailwind.css";

import { registerFreelancer, registerStartup } from "@/services/api";
import CustomDropdown from "@/components/CustomDropdown";
import FileInput from "@/components/FileInput";

interface Section8Props {
  id?: string;
}

// Common fields
interface CommonFields {
  name: string;
  contactName: string;
  email: string;
  phone: string;
  address: string; // Optional: You can split it into more detailed fields
  website?: string;
  description?: string;
  businessStructure: string;
  industrySector: string;
}

// Service Seeker fields
interface ServiceSeekerFields {
  businessStage: string;
  businessSize: string;
  serviceType: string[]; // Multiple services
  timeline: string;
}

// Service Provider fields
interface ServiceProviderFields {
  designation: string;
  primaryServiceCategory: string;
  specificServices: string[]; // Multiple services
  experience: string;
  serviceArea: string;
  teamStructure: string;
  teamSize: string;
  coreTeamMembers: string;
  supportStaff: string;
  teamBuildingRequirements: string[]; // Multiple requirements
  agreeToTerms: boolean;
}

// Full Form Data
export interface FormData extends CommonFields, ServiceSeekerFields, ServiceProviderFields {}

// Default State for Form Data
export const initialFormData: FormData = {
  name: '',
  contactName: '',
  email: '',
  phone: '',
  address: '',
  website: '',
  description: '',
  businessStructure: '',
  industrySector: '',

  // Service Seeker defaults
  businessStage: '',
  businessSize: '',
  serviceType: [],
  timeline: '',

  // Service Provider defaults
  designation: '',
  primaryServiceCategory: '',
  specificServices: [],
  experience: '',
  serviceArea: '',
  teamStructure: '',
  teamSize: '',
  coreTeamMembers: '',
  supportStaff: '',
  teamBuildingRequirements: [],
  agreeToTerms: false,
};

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
    serviceType: [] as string[],
    timeline: "",

    // Service Provider specific fields
    designation: "",
    primaryServiceCategory: "",
    specificServices: [] as string[],
    experience: "",
    serviceArea: "",
    teamStructure: "",
    teamSize: "",
    coreTeamMembers: "",
    supportStaff: "",
    teamBuildingRequirements: [] as string[],
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      let response;
  
      if (activeTab === 'seeker') {
        // Call Startup API
        const seekerData = {
          company_name: formData.name,
          contact_person: {
            name: formData.contactName,
            email: formData.email,
            phone: formData.phone,
          },
          address: {
            street: formData.address, // Adjust if detailed fields are required
            city: '', // Fill in city, state, country if available
            state_province: '',
            country: '',
          },
          business_entity_type: formData.businessStructure,
          business_structure: [formData.businessStructure], // Example array conversion
          industry_sector: formData.industrySector,
          company_stage: formData.businessStage,
          funding_stage: 'Seed', // Add additional fields as needed
          about: formData.description,
          website_url: formData.website,
          intrested_in_building_team: formData.teamBuildingRequirements.length > 0,
          team_information: {
            coreTeamMembers: formData.coreTeamMembers,
            supportStaff: formData.supportStaff,
          },
          interested_services: formData.serviceType,
          comments: '',
        };
  
        response = await registerStartup(seekerData);
      } else {
        // Call Freelancer API
        const providerData = {
          name: formData.name,
          email_address: formData.email,
          phone_number: formData.phone,
          address: {
            street: formData.address, // Adjust if detailed fields are required
            city: '', // Fill in city, state, country if available
            state_province: '',
            country: '',
          },
          business_type: formData.businessStructure,
          services_provided: formData.primaryServiceCategory,
          website_url: formData.website,
          other_services_provided: formData.specificServices.join(', '),
          intrested_in_building_team: formData.teamBuildingRequirements.length > 0,
        };
  
        response = await registerFreelancer(providerData);
      }
  
      // Handle Success
      console.log('Registration successful:', response.data);
      alert('Registration successful!');
      setFormData({ ...initialFormData as any}); // Reset form (create initialFormData as default state)
    } catch (error) {
      console.log(error)
      // Handle Errors
      // console.error('Error during registration:', error.response?.data || error.message);
      alert('Registration failed. Please try again.');
    }
  };

  const numberInputStyle = `
  input-field w-full p-3 md:p-4 text-sm md:text-base
  [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none
`;

  const teamSizeOptions = ["Self", "2-10", "10-20", "20-40", "40-50+"];

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
        autoComplete="off"
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
        autoComplete="off"
      />
      <input
        type="text"
        name="contactName"
        placeholder="Primary Contact Person"
        value={formData.contactName}
        onChange={handleInputChange}
        className="input-field w-full p-3 md:p-4 text-sm md:text-base"
        autoComplete="off"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleInputChange}
        className="input-field w-full p-3 md:p-4 text-sm md:text-base"
        autoComplete="off"
      />
      <input
        type="number"
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleInputChange}
        min="0"
        className={numberInputStyle}
        autoComplete="off"
      />
      <input
        type="text"
        name="address"
        placeholder="Location/City"
        value={formData.address}
        onChange={handleInputChange}
        className="input-field w-full p-3 md:p-4 text-sm md:text-base"
        autoComplete="off"
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
        multiple
      />
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
      <textarea
        name="description"
        placeholder="Brief Description of Service Required"
        value={formData.description}
        onChange={handleInputChange}
        className="input-field w-full col-span-1 md:col-span-2 p-3 md:p-4 text-sm md:text-base"
      ></textarea>
    </motion.div>
  );

  const providerFields = (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Basic Information */}
      <input
        type="text"
        name="name"
        placeholder="Company/Organization/Person Name"
        value={formData.name}
        onChange={handleInputChange}
        className="input-field w-full p-3 md:p-4 text-sm md:text-base"
        autoComplete="off"
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

      {/* Contact Information */}
      <input
        type="text"
        name="contactName"
        placeholder="Primary Contact Person"
        value={formData.contactName}
        onChange={handleInputChange}
        className="input-field w-full p-3 md:p-4 text-sm md:text-base"
        autoComplete="off"
      />
      <input
        type="text"
        name="designation"
        placeholder="Designation"
        value={formData.designation}
        onChange={handleInputChange}
        className="input-field w-full p-3 md:p-4 text-sm md:text-base"
        autoComplete="off"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleInputChange}
        className="input-field w-full p-3 md:p-4 text-sm md:text-base"
        autoComplete="off"
      />
      <input
        type="number"
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleInputChange}
        min="0"
        className={numberInputStyle}
        autoComplete="off"
      />
      <input
        type="text"
        name="address"
        placeholder="Business Address"
        value={formData.address}
        onChange={handleInputChange}
        className="input-field w-full p-3 md:p-4 text-sm md:text-base"
        autoComplete="off"
      />
      <input
        type="text"
        name="website"
        placeholder="Website (if any)"
        value={formData.website}
        onChange={handleInputChange}
        className="input-field w-full p-3 md:p-4 text-sm md:text-base"
        autoComplete="off"
      />

      {/* Service Details */}
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
        multiple
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

      {/* Team Building Requirements */}
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
      <CustomDropdown
        title="Total Team Size"
        options={teamSizeOptions}
        selectedOption={formData.teamSize}
        onSelect={(option) => handleDropdownChange("teamSize", option)}
      />
      <CustomDropdown
        title="Core Team Members"
        options={teamSizeOptions}
        selectedOption={formData.coreTeamMembers}
        onSelect={(option) => handleDropdownChange("coreTeamMembers", option)}
      />
      <CustomDropdown
        title="Support Staff"
        options={teamSizeOptions}
        selectedOption={formData.supportStaff}
        onSelect={(option) => handleDropdownChange("supportStaff", option)}
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
        multiple
      />

      {/* Portfolio Upload */}
      <FileInput
        name="portfolio"
        title="Upload Portfolio Documents"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleInputChange(e)
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
