import React, { useState } from "react";
import { motion } from "framer-motion";
import CustomDropdown from "./CustomDropdown";
import "tailwindcss/tailwind.css";
import FileInput from "./FileInput";
import axios from "axios";
import toast from "react-hot-toast";

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
    institution: "",
    fieldOfStudy: "",
    graduationYear: "",
    dob: "",
    educationLevel: "",
    employmentType: "",
    industry:"",
    jobRoles:"",
    locations:"",
    skills:"",
    linkedin:"",
    portfolio:"",
    notes:"",
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
  // import axios from 'axios';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(activeTab, formData);
  
    try {
      if (activeTab === "seeker") {
  
        const postData = {
          company_name: formData.name,
          business_stage: formData.businessStage,
          industry_sector: formData.industrySector,
          business_structure: formData.businessStructure,
          business_size: formData.businessSize,
          website: formData.website,
          primary_contact_name: formData.contactName,
          primary_contact_email: formData.email,
          primary_contact_phone: formData.phone,
          location: formData.address,
          type_of_service_needed: formData.serviceType,
          expected_timeline: formData.timeline,
          description: formData.description,
        };
  
        console.log(postData);
  
        const response = await axios.post(
          "https://api.growthkar.com/api/form/seeker",
          postData
        );
        toast('Form Submitted Successfully!',
          {
            icon: '👏',
            style: {
              borderRadius: '10px',
              background: '#333',
              color: '#fff',
            },
          }
        );
        console.log("Service Seeker API Response:", response.data);
      }else if(activeTab === "job seeker"){ 
        const postData ={
          "name": formData.name,
          "email": formData.email,
          "phone": formData.phone,
          "dob": formData.dob,
          "educationLevel": formData.educationLevel,
          "institution": formData.institution,
          "fieldOfStudy": formData.fieldOfStudy,
          "graduationYear": formData.graduationYear,
          "employmentType": formData.employmentType,
          "industry": formData.industry,
          "jobRoles": formData.jobRoles,
          "locations": formData.locations,
          "skills": formData.skills,
          "experience": formData.experience,
          // "resume": formData.resume,
          "linkedin": formData.linkedin,
          "portfolio": formData.portfolio,
          "notes":formData.notes
        }
        const response = await axios.post(
          "https://api.growthkar.com/api/form/job",
          postData
        );
        toast('Form Submitted Successfully!',
          {
            icon: '👏',
            style: {
              borderRadius: '10px',
              background: '#333',
              color: '#fff',
            },
          }
        );
      }else {
  
        const postData = {
          company_name: formData.name,
          business_structure: formData.businessStructure,
          primary_contact_name: formData.contactName,
          designation: formData.designation,
          primary_contact_email: formData.email,
          primary_contact_phone: formData.phone,
          location: formData.address,
          website: formData.website,
          primary_service: formData.primaryServiceCategory,
          specific_services: formData.specificServices,
          experience: formData.experience,
          service_area: formData.serviceArea,
          current_team_structure: formData.teamStructure,
          team_size: formData.teamSize,
          core_team_members: formData.coreTeamMembers,
          support_staff: formData.supportStaff,
          team_building_requirements: formData.teamBuildingRequirements,
          // Uncomment this if portfolio data is available
          portfolio: "formData.portfolio",
        };
  
        // console.log(postData);
  
        const response = await axios.post(
          "https://api.growthkar.com/api/form/provider",
          postData
        );
        toast('Form Submitted Successfully!',
          {
            icon: '👏',
            style: {
              borderRadius: '10px',
              background: '#333',
              color: '#fff',
            },
          }
        );
        console.log("Service Provider API Response:", response.data);
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
  
      if (axios.isAxiosError(error)) {
        console.error("Axios error response:", error.response?.data);
      } else {
        console.error("Unexpected error:", error);
      }
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

  const jobSeekerFeilds = (
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
      placeholder="Full Name"
      value={formData.name}
      onChange={handleInputChange}
      className="input-field w-full p-3 md:p-4 text-sm md:text-base"
      autoComplete="off"
      required
    />
    <input
      type="email"
      name="email"
      placeholder="Email Address"
      value={formData.email}
      onChange={handleInputChange}
      className="input-field w-full p-3 md:p-4 text-sm md:text-base"
      autoComplete="off"
      required
    />
    <input
      type="tel"
      name="phone"
      placeholder="Phone Number"
      value={formData.phone}
      onChange={handleInputChange}
      className="input-field w-full p-3 md:p-4 text-sm md:text-base"
      autoComplete="off"
      required
    />
    <input
      type="date"
      name="dob"
      placeholder="Date of Birth"
      value={formData.dob}
      onChange={handleInputChange}
      className="input-field w-full p-3 md:p-4 text-sm md:text-base"
      required
    />

    {/* Educational Details */}
    <CustomDropdown
      title="Highest Level of Education"
      options={["High School", "Diploma", "Bachelor's Degree", "Master's Degree", "Doctorate"]}
      selectedOption={formData.educationLevel}
      onSelect={(option) => handleDropdownChange("educationLevel", option)}
    />
    <input
      type="text"
      name="institution"
      placeholder="Institution Name"
      value={formData.institution}
      onChange={handleInputChange}
      className="input-field w-full p-3 md:p-4 text-sm md:text-base"
    />
    <CustomDropdown
      title="Field of Study"
      options={["Computer Science", "Engineering", "Business Administration", "Arts", "Medicine", "Other"]}
      selectedOption={formData.fieldOfStudy}
      onSelect={(option) => handleDropdownChange("fieldOfStudy", option)}
      
    />
    <input
      type="text"
      name="graduationYear"
      placeholder="Graduation Year"
      value={formData.graduationYear}
      onChange={handleInputChange}
      className="input-field w-full p-3 md:p-4 text-sm md:text-base"
    />
 
    {/* Work Preferences */}
    <CustomDropdown
      title="Employment Type"
      options={["Full-Time", "Part-Time", "Internship", "Freelance/Contract", "Remote"]}
      selectedOption={formData.employmentType}
      onSelect={(option) => handleDropdownChange("employmentType", option)}
    />
    <CustomDropdown
      title="Preferred Industry/Sector"
      options={["Technology", "Healthcare", "Education", "Finance", "Manufacturing", "Media & Entertainment", "Retail & E-commerce", "Energy & Environment", "Non-Profit", "Hospitality & Tourism", "Others"]}
      selectedOption={formData.industry}
      onSelect={(option) => handleDropdownChange("industry", option)}
    />
    <input
      type="text"
      name="jobRoles"
      placeholder="Preferred Job Roles"
      value={formData.jobRoles}
      onChange={handleInputChange}
      className="input-field w-full p-3 md:p-4 text-sm md:text-base"
    />
    <input
      type="text"
      name="locations"
      placeholder="Preferred Locations"
      value={formData.locations}
      onChange={handleInputChange}
      className="input-field w-full p-3 md:p-4 text-sm md:text-base"
    />

    {/* Skills & Experience */}
    <input
      type="text"
      name="skills"
      placeholder="Key Skills"
      value={formData.skills}
      onChange={handleInputChange}
      className="input-field w-full p-3 md:p-4 text-sm md:text-base"
      required
    />
    <CustomDropdown
      title="Years of Experience"
      options={["Fresher (0-1 years)", "Entry-Level (1-3 years)", "Intermediate (3-5 years)", "Expert (5+ years)"]}
      selectedOption={formData.experience}
      onSelect={(option) => handleDropdownChange("experience", option)}
    />
    <FileInput
      name="resume"
      title="Upload Resume"
      onChange={(e) => handleInputChange(e)}
    />

    {/* Additional Information */}
    <input
      type="url"
      name="linkedin"
      placeholder="LinkedIn Profile"
      value={formData.linkedin}
      onChange={handleInputChange}
      className="input-field w-full p-3 md:p-4 text-sm md:text-base"
    />
    <input
      type="url"
      name="portfolio"
      placeholder="Portfolio/Personal Website"
      value={formData.portfolio}
      onChange={handleInputChange}
      className="input-field w-full p-3 md:p-4 text-sm md:text-base"
    />
    <textarea
      name="notes"
      placeholder="Additional Notes"
      value={formData.notes}
      onChange={handleInputChange}
      className="input-field w-full p-3 md:p-4 text-sm md:text-base"
    ></textarea>
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
          {["seeker", "provider", "job seeker"].map((tab) => (
            <button
              key={tab}
              className={`px-3 md:px-4 py-2 mx-1 md:mx-2 text-sm md:text-base transition-colors duration-300 ease-in-out ${activeTab === tab
                  ? "border-b-4 border-purple-500 text-purple-500"
                  : "text-gray-400 hover:text-white"
                }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === "job seeker"
                ? "Job Seeker"
                : tab === "seeker"
                  ? "Service Seeker"
                  : "Service Provider"}

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
          {activeTab === "seeker" ? seekerFields :activeTab ==="job seeker"?jobSeekerFeilds :providerFields}

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
