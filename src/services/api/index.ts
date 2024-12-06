import axios from 'axios';

// Generic API Response
interface ApiResponse<T> {
    message: string;
    data: T;
}

// Example Startup Response
interface StartupResponse {
    id: number;
    company_name: string;
    contact_person_id: number;
    address_id: number;
    business_entity_type: string;
    business_structure: string[];
    industry_sector: string;
    company_stage: string;
    funding_stage: string;
    about: string;
    website_url?: string;
    intrested_in_building_team: boolean;
    team_information?: {
        coreTeamMembers: string;
        supportStaff: string;
    };
    interested_services?: string[];
    comments?: string;
}

// Address Interface
interface Address {
    street: string;
    city: string;
    state_province: string;
    country: string;
  }
  
  // Contact Person Interface
  interface ContactPerson {
    name: string;
    email: string;
    phone: string;
    role?: string; // Optional, if provided
  }
  
// Startup Registration API Payload
export interface StartupRegistrationRequest {
    company_name: string;
    contact_person: ContactPerson;
    address: Address;
    business_entity_type: string;
    business_structure: string[];
    industry_sector: string;
    company_stage: string;
    funding_stage: string;
    about: string;
    website_url?: string;
    intrested_in_building_team: boolean;
    team_information?: {
      coreTeamMembers: string;
      supportStaff: string;
    };
    interested_services?: string[];
    comments?: string;
  }
  
  // Freelancer Registration API Payload
  export interface FreelancerRegistrationRequest {
    name: string;
    email_address: string;
    phone_number: string;
    address: Address;
    business_type: string;
    services_provided: string;
    other_services_provided?: string; // Optional field
    website_url?: string; // Optional field
    intrested_in_building_team: boolean;
  }
// Example Freelancer Response
interface FreelancerResponse {
    id: number;
    name: string;
    email_address: string;
    phone_number: string;
    address_id: number;
    business_type: string;
    services_provided: string;
    other_services_provided?: string;
    website_url?: string;
    intrested_in_building_team: boolean;
}

// Base Axios Instance
const api = axios.create({
    baseURL: 'http://localhost:3000/api', // Replace with your backend base URL
    headers: {
        'Content-Type': 'application/json',
    },
});
export const registerStartup = async (
    data: StartupRegistrationRequest
): Promise<ApiResponse<StartupResponse>> => {
    const response = await api.post('http://localhost:3000/api/startups/', data);
    return response.data;
};

export const registerFreelancer = async (
    data: FreelancerRegistrationRequest
): Promise<ApiResponse<FreelancerResponse>> => {
    const response = await api.post('/freelancers/', data);
    return response.data;
};