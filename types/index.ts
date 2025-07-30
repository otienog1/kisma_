// Common types used throughout the application

export interface Destination {
  id: string;
  name: string;
  location: string;
  category: string;
  heroImage: string;
  gallery: string[];
  description: string;
  highlights: string[];
  bestTime: string;
  duration: string;
  difficulty: string;
  price: string;
  rating: number;
  reviews: number;
  wildlife: string[];
  activities: string[];
  accommodation: string[];
  packages: Package[];
}

export interface Package {
  name: string;
  duration: string;
  price: string;
  includes: string[];
  description?: string;
  highlights?: string[];
}

export interface Service {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  destinations: string[];
  duration: string;
  startingPrice: string;
  image: string;
  popular: boolean;
  packages: Package[];
  whatToExpect: string[];
  included: string[];
  notIncluded: string[];
}

export interface Testimonial {
  text: string;
  author: string;
  location: string;
  rating: number;
  trip: string;
  avatar: string;
  date?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  specialties: string[];
  experience?: string;
  languages?: string[];
}

export interface ContactInfo {
  phone: string[];
  email: string[];
  address: {
    street: string;
    city: string;
    country: string;
    postalCode: string;
  };
  socialMedia: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    linkedin?: string;
  };
  businessHours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
}

export interface FormData {
  name: string;
  email: string;
  phone: string;
  country: string;
  travelers: string;
  serviceType: string;
  destination: string;
  travelDates: string;
  budget: string;
  message: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  author: string;
  publishedAt: string;
  tags: string[];
  category: string;
  readTime: number;
}

export interface FAQ {
  question: string;
  answer: string;
  category: string;
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

// Navigation types
export interface NavItem {
  href: string;
  label: string;
  children?: NavItem[];
}

// SEO types
export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  image?: string;
  canonical?: string;
}

// Gallery types
export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
  photographer?: string;
}

// Pricing types
export interface PricingTier {
  name: string;
  description: string;
  price: string;
  duration: string;
  features: string[];
  popular?: boolean;
  bookingUrl?: string;
}

// Location types
export interface Location {
  name: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  description: string;
  attractions: string[];
}

// Weather types
export interface WeatherInfo {
  season: string;
  temperature: {
    min: number;
    max: number;
  };
  rainfall: string;
  description: string;
  recommendations: string[];
}

// Equipment types for climbing
export interface Equipment {
  category: string;
  items: {
    name: string;
    description: string;
    provided: boolean;
    essential: boolean;
  }[];
}

// Booking types
export interface BookingRequest {
  personalInfo: {
    name: string;
    email: string;
    phone: string;
    nationality: string;
  };
  tripDetails: {
    destination: string;
    service: string;
    startDate: string;
    endDate: string;
    travelers: number;
    accommodation: string;
    budget: string;
  };
  preferences: {
    dietaryRequirements?: string;
    accessibility?: string;
    specialRequests?: string;
  };
}

export type LoadingState = "idle" | "loading" | "success" | "error";

export type DifficultyLevel = "Easy" | "Moderate" | "Challenging" | "Expert";

export type SeasonType =
  | "Dry Season"
  | "Wet Season"
  | "Peak Season"
  | "Low Season";
