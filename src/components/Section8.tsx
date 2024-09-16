import React, { useState } from "react";
import CustomDropdown from "./CustomDropdown"; // Assumes a dropdown component is created
import "tailwindcss/tailwind.css"; // Assuming Tailwind is used for styling
import FileInput from "./FileInput";

const Section8 = () => {
  const [activeTab, setActiveTab] = useState("startup"); // Manage active tab state
  const [formData, setFormData] = useState({
    // Common fields
    name: "",
    contactName: "",
    email: "",
    phone: "",
    address: "",
    website: "",
    description: "",
    // Freelancer-specific fields
    role: "",
    services: "",
    experience: "",
    portfolio: "",
    pricingModel: "",
    // Startup-specific fields
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Startup-specific Fields */}
      <input
        type="text"
        name="name"
        placeholder="Company/Startup Name"
        value={formData.name}
        onChange={handleInputChange}
        className="input-field"
      />
      <input
        type="text"
        name="founderName"
        placeholder="Founder Name"
        value={formData.founderName}
        onChange={handleInputChange}
        className="input-field"
      />
      <input
        type="email"
        name="founderEmail"
        placeholder="Founder Email"
        value={formData.founderEmail}
        onChange={handleInputChange}
        className="input-field"
      />
      <input
        type="text"
        name="founderPhone"
        placeholder="Founder Phone Number"
        value={formData.founderPhone}
        onChange={handleInputChange}
        className="input-field"
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
        className="input-field col-span-2"
      ></textarea>
    </div>
  );

  const freelancerFields = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Freelancer-specific Fields */}
      <input
        type="text"
        name="name"
        placeholder="Name / Company Name"
        value={formData.name}
        onChange={handleInputChange}
        className="input-field"
      />
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleInputChange}
        className="input-field"
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleInputChange}
        className="input-field"
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
        onChange={(e) =>
          handleInputChange({
            target: { name: "portfolio", value: e.target.value },
          } as any)
        }
      />
      <CustomDropdown
        title="Pricing Model"
        options={["Hourly", "Project-based", "Retainer"]}
        selectedOption={formData.pricingModel}
        onSelect={(option) => handleDropdownChange("pricingModel", option)}
      />
    </div>
  );

  return (
    <section className="min-h-screen snap-start flex flex-col items-center justify-center pt-28 p-10 bg-black text-white">
      <h2 className="text-center text-4xl font-bold">Register Here</h2>
      <div className="w-full max-w-5xl  p-8 rounded-lg">
        {/* Tab Navigation */}
        <div className="flex justify-center mb-6">
          {["startup", "freelancer"].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 mx-2 ${
                activeTab === tab
                  ? "border-b-4 border-purple-500 text-purple-500"
                  : "text-gray-400"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {activeTab === "startup" ? startupFields : freelancerFields}

          {/* Terms and Conditions */}
          <div className="flex items-center mt-6">
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
            <label htmlFor="terms" className="ml-3 text-sm text-gray-400">
              I Agree To The Terms And Conditions
            </label>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="text-purple-500 bg-white px-10 py-3 rounded-lg hover:bg-white/90 cursor-pointer transition-all duration-300 focus:outline-none"
              disabled={!formData.agreeToTerms}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Section8;
