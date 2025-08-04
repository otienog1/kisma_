import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Camera, Mountain, Heart, Users, CheckCircle, X, Star, Calendar, Clock, MapPin, ArrowRight, Shield, Award } from 'lucide-react'

// Service data - in a real app this would come from a database or CMS
const servicesData = {
    'wildlife-safaris': {
        id: 'wildlife-safaris',
        icon: <Camera className="w-12 h-12" />,
        title: "Wildlife Safaris",
        subtitle: "Experience Africa's incredible wildlife",
        heroImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1600&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
            "https://images.unsplash.com/photo-1549366021-9f761d040a94?w=800&q=80",
            "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80",
            "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=800&q=80"
        ],
        description: "Embark on thrilling game drives to witness the Big Five and countless other species in their natural habitat. Our expert guides ensure you capture the perfect moments while learning about wildlife behavior and conservation efforts across Kenya's premier national parks and reserves.",
        longDescription: "Our wildlife safaris offer an unparalleled opportunity to witness Africa's most magnificent creatures in their natural environment. From the dramatic wildebeest migration in the Maasai Mara to intimate encounters with elephant families in Amboseli, every moment is carefully crafted to provide authentic, educational, and thrilling experiences. Our professional guides combine years of field experience with deep knowledge of animal behavior, ensuring you not only see incredible wildlife but truly understand the complex ecosystems that sustain them.",
        whatToExpect: [
            "Early morning game drives for optimal wildlife viewing when animals are most active",
            "Professional guide commentary on animal behavior, ecology, and conservation",
            "Photography opportunities with the Big Five and other iconic African species",
            "Cultural interactions with local Maasai and other indigenous communities",
            "Sundowner drinks while watching spectacular African sunsets",
            "Educational sessions about wildlife conservation and ecosystem protection"
        ],
        included: [
            "Professional safari guide with extensive wildlife knowledge",
            "4WD safari vehicle with pop-up roof for optimal viewing and photography",
            "All national park and conservancy entrance fees",
            "Game drives as specified in itinerary",
            "Unlimited drinking water during game drives",
            "Binoculars for enhanced wildlife viewing",
            "Field guides and wildlife identification materials"
        ],
        notIncluded: [
            "International flights to/from Kenya",
            "Comprehensive travel and medical insurance",
            "Personal expenses and shopping",
            "Alcoholic beverages (unless specified)",
            "Tips and gratuities for guides and staff",
            "Optional activities not mentioned in itinerary",
            "Visa fees and vaccination costs"
        ],
        destinations: ["Maasai Mara", "Amboseli", "Samburu", "Tsavo", "Lake Nakuru"],
        duration: "3-10 days",
        difficulty: "Easy",
        bestTime: "Year-round, with peak wildlife viewing July-October and January-March",
        startingPrice: "$650",
        rating: 4.9,
        reviews: 324,
        popular: true,
        packages: [
            {
                name: "Big Five Safari",
                duration: "5 days / 4 nights",
                price: "$950",
                includes: ["Luxury lodge accommodation", "All meals", "Professional guide", "Game drives", "Park fees", "Airport transfers"],
                description: "Focus on spotting Africa's Big Five across multiple parks"
            },
            {
                name: "Great Migration Safari",
                duration: "7 days / 6 nights",
                price: "$1,450",
                includes: ["Premium camps", "Migration tracking", "Hot air balloon", "Cultural visits", "Photography guide"],
                description: "Witness the spectacular wildebeest migration in the Maasai Mara"
            },
            {
                name: "Family Wildlife Adventure",
                duration: "6 days / 5 nights",
                price: "$850",
                includes: ["Family-friendly accommodation", "Educational activities", "Flexible schedules", "Children's guides"],
                description: "Perfect safari experience designed for families with children"
            }
        ],
        wildlife: [
            "Lions", "Leopards", "Elephants", "Rhinos", "Buffalos", "Cheetahs",
            "Wildebeest", "Zebras", "Giraffes", "Hippos", "Crocodiles", "Hyenas"
        ],
        safetyFeatures: [
            "Comprehensive vehicle safety checks",
            "First aid trained guides",
            "Emergency communication equipment",
            "Insurance coverage during activities",
            "Safety briefings before each activity"
        ]
    },
    'mountain-climbing': {
        id: 'mountain-climbing',
        icon: <Mountain className="w-12 h-12" />,
        title: "Mountain Climbing",
        subtitle: "Conquer Africa's legendary peaks",
        heroImage: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=1600&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&q=80",
            "https://images.unsplash.com/photo-1589553416260-f586c8f1514f?w=800&q=80",
            "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=800&q=80",
            "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80"
        ],
        description: "Challenge yourself with guided climbs of Mount Kenya and Kilimanjaro. Our experienced mountain guides ensure your safety while helping you achieve your summit dreams with proper acclimatization and route planning.",
        longDescription: "Mountain climbing in East Africa offers some of the world's most rewarding and accessible high-altitude adventures. Whether you're scaling Mount Kenya's technical peaks or conquering Kilimanjaro's legendary summit, our expert guides provide the knowledge, equipment, and support needed for a successful and safe climb. We offer multiple route options to suit different skill levels and preferences, from scenic routes that maximize acclimatization to challenging paths that test your mountaineering skills.",
        whatToExpected: [
            "Comprehensive pre-climb briefing and equipment check",
            "Gradual acclimatization schedule to prevent altitude sickness",
            "Professional mountain guides certified in high-altitude rescue",
            "All technical climbing equipment and camping gear provided",
            "Educational opportunities about mountain ecosystems and geology",
            "Summit certificate and professional photography of your achievement"
        ],
        included: [
            "Professional certified mountain guides",
            "All climbing and camping equipment (tents, sleeping bags, etc.)",
            "Three meals per day plus snacks during the climb",
            "National park fees and camping permits",
            "Porter services for equipment and supplies",
            "Emergency evacuation insurance",
            "Summit certificate upon successful completion"
        ],
        notIncluded: [
            "International flights and domestic transfers",
            "Personal climbing gear (boots, clothing, etc.)",
            "Travel and medical insurance",
            "Tips for guides and porters",
            "Personal expenses and souvenirs",
            "Additional nights before or after the climb",
            "Alcoholic beverages"
        ],
        destinations: ["Mount Kenya", "Mount Kilimanjaro", "Mount Longonot", "Hell's Gate"],
        duration: "4-9 days",
        difficulty: "Moderate to Challenging",
        bestTime: "December-March, July-October",
        startingPrice: "$650",
        rating: 4.8,
        reviews: 198,
        popular: false,
        packages: [
            {
                name: "Mount Kenya - Sirimon Route",
                duration: "5 days / 4 nights",
                price: "$650",
                includes: ["Mountain guide", "All equipment", "Meals", "Park fees", "Porter service"],
                description: "Most scenic route with gradual acclimatization"
            },
            {
                name: "Kilimanjaro - Machame Route",
                duration: "7 days / 6 nights",
                price: "$1,200",
                includes: ["Professional guides", "All equipment", "Meals", "Park fees", "Transfers"],
                description: "The most popular and scenic Kilimanjaro route"
            },
            {
                name: "Technical Climbing Package",
                duration: "6 days / 5 nights",
                price: "$850",
                includes: ["Technical guide", "Climbing equipment", "Training", "Summit certificate"],
                description: "For experienced climbers seeking technical challenges"
            }
        ],
        wildlife: [
            "Mountain elephants", "Buffalos", "Leopards", "Various primates",
            "Mountain birds", "Hyrax", "Duikers"
        ],
        safetyFeatures: [
            "Certified mountain rescue guides",
            "Comprehensive safety equipment",
            "Emergency evacuation protocols",
            "Altitude sickness monitoring",
            "Weather condition assessments"
        ]
    }
    // Add more services as needed
}

type Props = {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params
    const service = servicesData[slug as keyof typeof servicesData]

    if (!service) {
        return {
            title: 'Service Not Found | Kisima Safaris'
        }
    }

    return {
        title: `${service.title} | Kisima Safaris`,
        description: service.description,
        keywords: `${service.title}, Kenya safari services, ${service.subtitle}`,
    }
}

export default async function ServicePage({ params }: Props) {
    const { slug } = await params
    const service = servicesData[slug as keyof typeof servicesData]

    if (!service) {
        notFound()
    }

    return (
        <div className="min-h-screen pt-20">
            {/* Hero Section */}
            <section className="relative h-96 md:h-[500px] overflow-hidden">
                <img
                    src={service.heroImage}
                    alt={service.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50"></div>

                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white max-w-4xl px-4">
                        <div className="text-amber-400 mb-4 flex justify-center">
                            {service.icon}
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">{service.title}</h1>
                        <p className="text-xl md:text-2xl opacity-90">{service.subtitle}</p>
                    </div>
                </div>
            </section>

            {/* Quick Info Bar */}
            <section className="py-6 bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
                        <div className="flex items-center justify-center space-x-2">
                            <Calendar className="w-5 h-5 text-amber-600" />
                            <span className="text-sm font-medium">{service.duration}</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                            <Clock className="w-5 h-5 text-amber-600" />
                            <span className="text-sm font-medium">{service.difficulty}</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                            <Star className="w-5 h-5 text-amber-600 fill-current" />
                            <span className="text-sm font-medium">{service.rating} ({service.reviews} reviews)</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                            <MapPin className="w-5 h-5 text-amber-600" />
                            <span className="text-sm font-medium">{service.destinations.length} destinations</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                            <span className="text-sm font-bold text-amber-600">{service.startingPrice}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-12">
                            {/* Overview */}
                            <div className="bg-white p-8 rounded-2xl shadow-lg">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Overview</h2>
                                <p className="text-gray-600 leading-relaxed text-lg mb-6">{service.description}</p>
                                <p className="text-gray-600 leading-relaxed">{service.longDescription}</p>
                            </div>

                            {/* What to Expect */}
                            <div className="bg-white p-8 rounded-2xl shadow-lg">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">What to Expect</h2>
                                <div className="space-y-4">
                                    {service.whatToExpect.map((item, index) => (
                                        <div key={index} className="flex items-start space-x-3">
                                            <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-600">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Included & Not Included */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-white p-8 rounded-2xl shadow-lg">
                                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                        <CheckCircle className="w-6 h-6 text-green-600 mr-2" />
                                        What's Included
                                    </h3>
                                    <div className="space-y-3">
                                        {service.included.map((item, index) => (
                                            <div key={index} className="flex items-start space-x-2">
                                                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                                <span className="text-gray-600 text-sm">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-white p-8 rounded-2xl shadow-lg">
                                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                                        <X className="w-6 h-6 text-red-600 mr-2" />
                                        Not Included
                                    </h3>
                                    <div className="space-y-3">
                                        {service.notIncluded.map((item, index) => (
                                            <div key={index} className="flex items-start space-x-2">
                                                <X className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                                                <span className="text-gray-600 text-sm">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Safety & Standards */}
                            <div className="bg-white p-8 rounded-2xl shadow-lg">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Shield className="w-6 h-6 text-amber-600 mr-2" />
                                    Safety & Standards
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {service.safetyFeatures.map((feature, index) => (
                                        <div key={index} className="flex items-start space-x-3">
                                            <Shield className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-600">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Photo Gallery */}
                            <div className="bg-white p-8 rounded-2xl shadow-lg">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Photo Gallery</h2>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {service.gallery.map((image, index) => (
                                        <div key={index} className="aspect-square rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                                            <img src={image} alt={`${service.title} ${index + 1}`} className="w-full h-full object-cover" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            {/* Booking Widget */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg sticky top-24 mb-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Book This Service</h3>
                                <div className="space-y-4">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-amber-600">{service.startingPrice}</div>
                                        <div className="text-sm text-gray-500">Starting price per person</div>
                                    </div>

                                    <div className="flex items-center justify-center space-x-1 mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'text-amber-400 fill-current' : 'text-gray-300'}`} />
                                        ))}
                                        <span className="text-sm text-gray-600 ml-2">({service.reviews} reviews)</span>
                                    </div>

                                    <Link href="/contact" className="block w-full btn-primary text-center">
                                        Get Custom Quote
                                    </Link>

                                    <a href="tel:+254721123456" className="block w-full border-2 border-gray-300 text-gray-700 hover:border-amber-600 hover:text-amber-600 px-6 py-3 rounded-full font-semibold transition-colors text-center">
                                        Call +254 (0) 721 123 456
                                    </a>
                                </div>
                            </div>

                            {/* Package Options */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg mb-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Package Options</h3>
                                <div className="space-y-4">
                                    {service.packages.map((pkg, index) => (
                                        <div key={index} className="border border-gray-200 p-4 rounded-lg hover:border-amber-300 transition-colors">
                                            <div className="flex justify-between items-start mb-2">
                                                <h4 className="font-semibold text-gray-900">{pkg.name}</h4>
                                                <span className="font-bold text-amber-600">{pkg.price}</span>
                                            </div>
                                            <p className="text-sm text-gray-600 mb-2">{pkg.duration}</p>
                                            <p className="text-xs text-gray-500 mb-3">{pkg.description}</p>
                                            <div className="text-xs text-gray-500">
                                                Includes: {pkg.includes.join(', ')}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Quick Facts */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Facts</h3>
                                <div className="space-y-4">
                                    <div>
                                        <span className="font-semibold text-gray-900">Duration:</span>
                                        <p className="text-gray-600">{service.duration}</p>
                                    </div>
                                    <div>
                                        <span className="font-semibold text-gray-900">Difficulty:</span>
                                        <p className="text-gray-600">{service.difficulty}</p>
                                    </div>
                                    <div>
                                        <span className="font-semibold text-gray-900">Best Time:</span>
                                        <p className="text-gray-600">{service.bestTime}</p>
                                    </div>
                                    <div>
                                        <span className="font-semibold text-gray-900">Destinations:</span>
                                        <p className="text-gray-600">{service.destinations.join(', ')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Services */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                        You Might Also Like
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Link href="/services/honeymoon-tours" className="group">
                            <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
                                <img
                                    src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&q=80"
                                    alt="Honeymoon Tours"
                                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="p-6">
                                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                                        Honeymoon Tours
                                    </h3>
                                    <p className="text-gray-600 text-sm">Romantic adventures for couples</p>
                                </div>
                            </div>
                        </Link>

                        <Link href="/services/family-packages" className="group">
                            <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
                                <img
                                    src="https://images.unsplash.com/photo-1549366021-9f761d040a94?w=400&q=80"
                                    alt="Family Safaris"
                                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="p-6">
                                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                                        Family Safaris
                                    </h3>
                                    <p className="text-gray-600 text-sm">Adventures for the whole family</p>
                                </div>
                            </div>
                        </Link>

                        <Link href="/services/cultural-tours" className="group">
                            <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
                                <img
                                    src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&q=80"
                                    alt="Cultural Tours"
                                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="p-6">
                                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                                        Cultural Tours
                                    </h3>
                                    <p className="text-gray-600 text-sm">Authentic cultural experiences</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}