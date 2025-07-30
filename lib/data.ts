import {
  Destination,
  Service,
  Testimonial,
  TeamMember,
  ContactInfo,
} from "@/types";
import {
  Camera,
  Mountain,
  Heart,
  Users,
  Compass,
  Shield,
  Star,
  Leaf,
} from "lucide-react";

// Destinations Data
export const destinations: Record<string, Destination> = {
  "maasai-mara": {
    id: "maasai-mara",
    name: "Maasai Mara National Reserve",
    location: "Kenya",
    category: "Wildlife Safari",
    heroImage:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
      "https://images.unsplash.com/photo-1549366021-9f761d040a94?w=800&q=80",
      "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80",
      "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=800&q=80",
    ],
    description:
      "The Maasai Mara National Reserve is Kenya's most famous safari destination, renowned for the spectacular Great Migration and its exceptional wildlife diversity. This vast savannah ecosystem hosts the Big Five and offers some of Africa's most incredible wildlife viewing opportunities.",
    highlights: [
      "Witness the Great Migration (July-October)",
      "Spot the Big Five in their natural habitat",
      "Experience authentic Maasai culture",
      "Hot air balloon safaris at sunrise",
      "Professional photography opportunities",
      "Bush dinners under the African stars",
    ],
    bestTime:
      "July - October (Great Migration), January - March (Calving season)",
    duration: "3-7 days",
    difficulty: "Easy",
    price: "From $850 per person",
    rating: 4.9,
    reviews: 247,
    wildlife: [
      "Lions",
      "Leopards",
      "Elephants",
      "Rhinos",
      "Buffalos",
      "Cheetahs",
      "Wildebeest",
      "Zebras",
      "Giraffes",
      "Hippos",
    ],
    activities: [
      "Game drives",
      "Hot air balloon safari",
      "Maasai village visit",
      "Bush breakfast",
      "Night game drive",
      "Photography workshop",
    ],
    accommodation: [
      "Luxury tented camps",
      "Safari lodges",
      "Budget camping",
      "Mid-range lodges",
    ],
    packages: [
      {
        name: "Classic Mara Safari",
        duration: "4 days / 3 nights",
        price: "$850",
        includes: [
          "Accommodation",
          "All meals",
          "Game drives",
          "Park fees",
          "Professional guide",
        ],
      },
      {
        name: "Mara Balloon Experience",
        duration: "5 days / 4 nights",
        price: "$1,200",
        includes: [
          "Luxury accommodation",
          "Hot air balloon",
          "Champagne breakfast",
          "All game drives",
        ],
      },
      {
        name: "Great Migration Special",
        duration: "6 days / 5 nights",
        price: "$1,450",
        includes: [
          "Premium lodges",
          "Migration tracking",
          "Cultural visits",
          "Professional photography guide",
        ],
      },
    ],
  },
  "mount-kenya": {
    id: "mount-kenya",
    name: "Mount Kenya National Park",
    location: "Kenya",
    category: "Mountain Climbing",
    heroImage:
      "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&q=80",
      "https://images.unsplash.com/photo-1589553416260-f586c8f1514f?w=800&q=80",
      "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=800&q=80",
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
    ],
    description:
      "Mount Kenya is Africa's second-highest peak and a UNESCO World Heritage Site. This ancient volcanic mountain offers diverse ecosystems, from bamboo forests to alpine meadows, glacial lakes, and snow-capped peaks.",
    highlights: [
      "Summit Point Lenana (4,985m)",
      "Experience diverse ecosystems",
      "Alpine lakes and glacial valleys",
      "Unique Afro-alpine flora and fauna",
      "Technical climbing on Batian and Nelion",
      "Spectacular sunrise views from the summit",
    ],
    bestTime: "December - March, July - October",
    duration: "4-6 days",
    difficulty: "Moderate to Challenging",
    price: "From $650 per person",
    rating: 4.8,
    reviews: 156,
    wildlife: [
      "Elephants",
      "Buffalos",
      "Leopards",
      "Hyenas",
      "Duikers",
      "Hyrax",
      "Various primates",
      "Mountain birds",
    ],
    activities: [
      "Summit climbing",
      "Rock climbing",
      "Nature walks",
      "Bird watching",
      "Photography",
      "Camping under stars",
    ],
    accommodation: [
      "Mountain huts",
      "Camping",
      "Base camp lodges",
      "Luxury mountain lodges",
    ],
    packages: [
      {
        name: "Sirimon-Chogoria Route",
        duration: "5 days / 4 nights",
        price: "$650",
        includes: [
          "Mountain guide",
          "All camping gear",
          "Meals",
          "Park fees",
          "Porter service",
        ],
      },
      {
        name: "Naro Moru Route",
        duration: "4 days / 3 nights",
        price: "$550",
        includes: [
          "Professional guide",
          "Equipment",
          "Accommodation",
          "All meals",
          "Emergency support",
        ],
      },
    ],
  },
  kilimanjaro: {
    id: "kilimanjaro",
    name: "Mount Kilimanjaro",
    location: "Tanzania",
    category: "Mountain Climbing",
    heroImage:
      "https://images.unsplash.com/photo-1589553416260-f586c8f1514f?w=1600&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1589553416260-f586c8f1514f?w=800&q=80",
      "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&q=80",
      "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=800&q=80",
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
    ],
    description:
      "Mount Kilimanjaro is Africa's highest peak and the world's tallest free-standing mountain. This iconic mountain offers multiple routes to the summit, each providing unique experiences and challenges.",
    highlights: [
      "Summit Uhuru Peak (5,895m)",
      "Multiple route options",
      "Diverse climate zones",
      "Spectacular crater views",
      "Certificate of achievement",
      "Professional mountain guides",
    ],
    bestTime: "June - October, December - March",
    duration: "5-9 days",
    difficulty: "Challenging",
    price: "From $1,200 per person",
    rating: 4.9,
    reviews: 189,
    wildlife: [
      "Blue monkeys",
      "Colobus monkeys",
      "Elephants",
      "Leopards",
      "Various bird species",
      "Small mammals",
    ],
    activities: [
      "Summit climbing",
      "Photography",
      "Stargazing",
      "Cultural visits",
      "Crater exploration",
      "Glacier viewing",
    ],
    accommodation: [
      "Mountain huts",
      "Camping",
      "Base hotels",
      "Luxury pre-climb lodges",
    ],
    packages: [
      {
        name: "Machame Route",
        duration: "7 days / 6 nights",
        price: "$1,200",
        includes: [
          "Professional guides",
          "All equipment",
          "Meals",
          "Park fees",
          "Transfers",
        ],
      },
      {
        name: "Lemosho Route",
        duration: "8 days / 7 nights",
        price: "$1,400",
        includes: [
          "Premium camping",
          "Extended acclimatization",
          "Professional guides",
          "All meals",
        ],
      },
    ],
  },
};

// Services Data
export const services: Record<string, Service> = {
  "wildlife-safaris": {
    id: "wildlife-safaris",
    icon: undefined, // Will be set in components
    title: "Wildlife Safaris",
    subtitle: "Experience Africa's incredible wildlife",
    description:
      "Embark on thrilling game drives to witness the Big Five and countless other species in their natural habitat. Our expert guides ensure you capture the perfect moments while learning about wildlife behavior and conservation.",
    features: [
      "Professional game drives with expert guides",
      "Photography equipment and tips",
      "Night safaris for nocturnal wildlife",
      "Bird watching tours with specialist guides",
      "Bush dinners and sundowners",
      "Conservation education programs",
    ],
    destinations: ["Maasai Mara", "Amboseli", "Samburu", "Tsavo"],
    duration: "3-10 days",
    startingPrice: "$650",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
    popular: true,
    packages: [
      {
        name: "Big Five Safari",
        duration: "5 days / 4 nights",
        price: "$950",
        includes: [
          "Luxury lodge accommodation",
          "All meals",
          "Professional guide",
          "Game drives",
          "Park fees",
        ],
      },
    ],
    whatToExpect: [
      "Early morning game drives for optimal wildlife viewing",
      "Professional guide commentary on animal behavior",
      "Photography opportunities with the Big Five",
      "Cultural interactions with local communities",
      "Sundowner drinks in the wilderness",
    ],
    included: [
      "Professional safari guide",
      "4WD safari vehicle",
      "All park entrance fees",
      "Game drives as per itinerary",
      "Drinking water during drives",
    ],
    notIncluded: [
      "International flights",
      "Travel insurance",
      "Personal expenses",
      "Alcoholic beverages",
      "Tips and gratuities",
    ],
  },
};

// Testimonials Data
export const testimonials: Testimonial[] = [
  {
    text: "The safari itself was superb. Our driver guide, a lovely young man, was very friendly, polite and exceptionally knowledgeable with regard to all the animals and birds. We had the holiday of a lifetime and we would definitely have no hesitation to book another safari with KISIMA SAFARIS.",
    author: "Sandra Seary",
    location: "Lytham St Annes, UK",
    rating: 5,
    trip: "Maasai Mara Safari",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&q=80",
  },
  {
    text: "Every day was a busy, exciting, wonderful, amazing experience with Henry, our guide/driver. This was my 5th trip with KISIMA and each trip has just been amazing. With each trip while taking us back to favourite areas they also at the same time come up with some surprising new experiences.",
    author: "Maria van den Berg",
    location: "Netherlands",
    rating: 5,
    trip: "Multiple Safari Tours",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
  },
  {
    text: "Kisima prepared a well organised safari tour program for my one-week visit in Kenya. They provided me a very good driver-guide who also looked after me well as I was then having a very bad cough at the time of my visit.",
    author: "Fedi",
    location: "Netherlands",
    rating: 5,
    trip: "Kenya Wildlife Tour",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
  },
  {
    text: "An absolutely incredible experience climbing Mount Kenya with Kisima Safaris. Our guides were professional, safety-conscious, and made the challenging climb enjoyable. The views from Point Lenana were breathtaking.",
    author: "James Mitchell",
    location: "Australia",
    rating: 5,
    trip: "Mount Kenya Climbing",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
  },
  {
    text: "Our honeymoon with Kisima Safaris was magical! They arranged everything perfectly - from romantic dinners under the stars to private game drives. The attention to detail made our trip unforgettable.",
    author: "Emily & David Johnson",
    location: "United States",
    rating: 5,
    trip: "Honeymoon Safari Package",
    avatar:
      "https://images.unsplash.com/photo-1515041219749-89347f83291a?w=100&q=80",
  },
];

// Team Data
export const team: TeamMember[] = [
  {
    name: "John Kamau",
    role: "Founder & CEO",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    bio: "With over 20 years in the tourism industry, John founded Kisima Safaris with a vision to showcase Africa's beauty while supporting local communities.",
    specialties: [
      "Strategic Planning",
      "Community Relations",
      "Sustainable Tourism",
    ],
    experience: "20+ years",
    languages: ["English", "Swahili", "Kikuyu"],
  },
  {
    name: "Sarah Njeri",
    role: "Safari Operations Manager",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&q=80",
    bio: "Sarah ensures every safari runs smoothly, coordinating logistics and maintaining our high standards of service across all destinations.",
    specialties: [
      "Operations Management",
      "Quality Control",
      "Guest Relations",
    ],
    experience: "12+ years",
    languages: ["English", "Swahili", "French"],
  },
  {
    name: "David Mwangi",
    role: "Head Safari Guide",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    bio: "A passionate wildlife expert and photographer, David has guided safaris for over 15 years and knows Kenya's parks like the back of his hand.",
    specialties: ["Wildlife Photography", "Animal Behavior", "Conservation"],
    experience: "15+ years",
    languages: ["English", "Swahili", "Maasai", "German"],
  },
  {
    name: "Grace Wanjiku",
    role: "Mountain Climbing Specialist",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    bio: "Grace is a certified mountain guide who has summited Kilimanjaro over 100 times and specializes in making dreams of reaching Africa's peaks come true.",
    specialties: [
      "Mountain Guiding",
      "Safety Protocols",
      "High Altitude Training",
    ],
    experience: "10+ years",
    languages: ["English", "Swahili", "Spanish"],
  },
];

// Contact Information
export const contactInfo: ContactInfo = {
  phone: ["+254 (0) 721 123 456", "+254 (0) 734 567 890"],
  email: ["info@kisimasafaris.com", "bookings@kisimasafaris.com"],
  address: {
    street: "Westlands Business District",
    city: "Nairobi",
    country: "Kenya",
    postalCode: "00100",
  },
  socialMedia: {
    facebook: "https://facebook.com/kisimasafaris",
    instagram: "https://instagram.com/kisimasafaris",
    twitter: "https://twitter.com/kisimasafaris",
    linkedin: "https://linkedin.com/company/kisimasafaris",
  },
  businessHours: {
    weekdays: "Monday - Friday: 8:00 AM - 6:00 PM",
    saturday: "Saturday: 9:00 AM - 4:00 PM",
    sunday: "Sunday: Closed",
  },
};

// FAQ Data
export const faqs = [
  {
    question: "How far in advance should I book my safari?",
    answer:
      "We recommend booking 3-6 months in advance, especially for peak seasons (July-October and December-March). However, we can often accommodate last-minute bookings based on availability.",
    category: "Booking",
  },
  {
    question: "What's included in your safari packages?",
    answer:
      "Our packages typically include accommodation, meals, park fees, professional guide, 4WD safari vehicle, and airport transfers. Specific inclusions vary by package - we'll provide detailed information with your quote.",
    category: "Packages",
  },
  {
    question: "Do you provide travel insurance?",
    answer:
      "We strongly recommend travel insurance and can help you find suitable coverage. We work with reputable insurance partners to ensure you're protected during your African adventure.",
    category: "Insurance",
  },
  {
    question: "What should I pack for a safari?",
    answer:
      "Essential items include comfortable clothing in neutral colors, a hat, sunscreen, binoculars, camera with extra batteries, and any personal medications. We provide a detailed packing list upon booking.",
    category: "Preparation",
  },
  {
    question: "Are your safaris suitable for children?",
    answer:
      "Yes! We offer family-friendly safaris with appropriate vehicles, accommodations, and activities. Most parks welcome children, though some lodges have age restrictions. We'll help you choose the best options for your family.",
    category: "Family Travel",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept bank transfers, credit cards (Visa, MasterCard), and PayPal. A deposit is required to secure your booking, with the balance due closer to your travel date.",
    category: "Payment",
  },
];

// Statistics
export const stats = [
  { number: "1000+", label: "Happy Travelers" },
  { number: "15+", label: "Years Experience" },
  { number: "50+", label: "Destinations" },
  { number: "98%", label: "Satisfaction Rate" },
];

// Navigation items
export const navigationItems = [
  { href: "/", label: "Home" },
  { href: "/destinations", label: "Destinations" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

// Site configuration
export const siteConfig = {
  name: "Kisima Safaris",
  description:
    "Discover the Magic of Africa with Kenya's Premier Safari Company",
  url: "https://kisimasafaris.com",
  ogImage: "/images/og-image.jpg",
  links: {
    facebook: "https://facebook.com/kisimasafaris",
    instagram: "https://instagram.com/kisimasafaris",
    twitter: "https://twitter.com/kisimasafaris",
  },
};
