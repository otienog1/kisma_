import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Calendar, Clock, MapPin, Star, Users, Camera, Mountain, Heart, CheckCircle, ArrowRight } from 'lucide-react'

// This would typically come from a database or CMS
const destinationsData = {
    'maasai-mara': {
        name: "Maasai Mara National Reserve",
        location: "Kenya",
        category: "Wildlife Safari",
        heroImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1600&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
            "https://images.unsplash.com/photo-1549366021-9f761d040a94?w=800&q=80",
            "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80",
            "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=800&q=80"
        ],
        description: "The Maasai Mara National Reserve is Kenya's most famous safari destination, renowned for the spectacular Great Migration and its exceptional wildlife diversity. This vast savannah ecosystem hosts the Big Five and offers some of Africa's most incredible wildlife viewing opportunities.",
        highlights: [
            "Witness the Great Migration (July-October)",
            "Spot the Big Five in their natural habitat",
            "Experience authentic Maasai culture",
            "Hot air balloon safaris at sunrise",
            "Professional photography opportunities",
            "Bush dinners under the African stars"
        ],
        bestTime: "July - October (Great Migration), January - March (Calving season)",
        duration: "3-7 days",
        difficulty: "Easy",
        price: "From $850 per person",
        rating: 4.9,
        reviews: 247,
        wildlife: [
            "Lions", "Leopards", "Elephants", "Rhinos", "Buffalos",
            "Cheetahs", "Wildebeest", "Zebras", "Giraffes", "Hippos"
        ],
        activities: [
            "Game drives", "Hot air balloon safari", "Maasai village visit",
            "Bush breakfast", "Night game drive", "Photography workshop"
        ],
        accommodation: [
            "Luxury tented camps", "Safari lodges", "Budget camping", "Mid-range lodges"
        ],
        packages: [
            {
                name: "Classic Mara Safari",
                duration: "4 days / 3 nights",
                price: "$850",
                includes: ["Accommodation", "All meals", "Game drives", "Park fees", "Professional guide"]
            },
            {
                name: "Mara Balloon Experience",
                duration: "5 days / 4 nights",
                price: "$1,200",
                includes: ["Luxury accommodation", "Hot air balloon", "Champagne breakfast", "All game drives"]
            },
            {
                name: "Great Migration Special",
                duration: "6 days / 5 nights",
                price: "$1,450",
                includes: ["Premium lodges", "Migration tracking", "Cultural visits", "Professional photography guide"]
            }
        ]
    },
    'mount-kenya': {
        name: "Mount Kenya National Park",
        location: "Kenya",
        category: "Mountain Climbing",
        heroImage: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=1600&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&q=80",
            "https://images.unsplash.com/photo-1589553416260-f586c8f1514f?w=800&q=80",
            "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=800&q=80",
            "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80"
        ],
        description: "Mount Kenya is Africa's second-highest peak and a UNESCO World Heritage Site. This ancient volcanic mountain offers diverse ecosystems, from bamboo forests to alpine meadows, glacial lakes, and snow-capped peaks. It provides an excellent mountaineering experience with multiple route options for different skill levels.",
        highlights: [
            "Summit Point Lenana (4,985m)",
            "Experience diverse ecosystems",
            "Alpine lakes and glacial valleys",
            "Unique Afro-alpine flora and fauna",
            "Technical climbing on Batian and Nelion",
            "Spectacular sunrise views from the summit"
        ],
        bestTime: "December - March, July - October",
        duration: "4-6 days",
        difficulty: "Moderate to Challenging",
        price: "From $650 per person",
        rating: 4.8,
        reviews: 156,
        wildlife: [
            "Elephants", "Buffalos", "Leopards", "Hyenas", "Duikers",
            "Hyrax", "Various primates", "Mountain birds"
        ],
        activities: [
            "Summit climbing", "Rock climbing", "Nature walks", "Bird watching",
            "Photography", "Camping under stars"
        ],
        accommodation: [
            "Mountain huts", "Camping", "Base camp lodges", "Luxury mountain lodges"
        ],
        packages: [
            {
                name: "Sirimon-Chogoria Route",
                duration: "5 days / 4 nights",
                price: "$650",
                includes: ["Mountain guide", "All camping gear", "Meals", "Park fees", "Porter service"]
            },
            {
                name: "Naro Moru Route",
                duration: "4 days / 3 nights",
                price: "$550",
                includes: ["Professional guide", "Equipment", "Accommodation", "All meals", "Emergency support"]
            },
            {
                name: "Technical Climbing Package",
                duration: "6 days / 5 nights",
                price: "$850",
                includes: ["Technical guide", "Climbing equipment", "Training", "Summit certificate"]
            }
        ]
    }
    // Add more destinations as needed
}

type Props = {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params
    const destination = destinationsData[slug as keyof typeof destinationsData]

    if (!destination) {
        return {
            title: 'Destination Not Found | Kisima Safaris'
        }
    }

    return {
        title: `${destination.name} | Kisima Safaris`,
        description: destination.description,
        keywords: `${destination.name}, ${destination.location}, safari, ${destination.category}`,
    }
}

export default async function DestinationPage({ params }: Props) {
    const { slug } = await params
    const destination = destinationsData[slug as keyof typeof destinationsData]

    if (!destination) {
        notFound()
    }

    return (
        <div className="min-h-screen pt-20">
            {/* Hero Section */}
            <section className="relative h-96 md:h-[500px] overflow-hidden">
                <img
                    src={destination.heroImage}
                    alt={destination.name}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50"></div>

                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white max-w-4xl px-4">
                        <div className="flex items-center justify-center space-x-2 mb-4">
                            <MapPin className="w-5 h-5 text-amber-400" />
                            <span className="text-amber-400 font-medium">{destination.location}</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">{destination.name}</h1>
                        <p className="text-xl md:text-2xl opacity-90">{destination.category}</p>
                    </div>
                </div>
            </section>

            {/* Quick Info Bar */}
            <section className="py-6 bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div className="flex items-center justify-center space-x-2">
                            <Calendar className="w-5 h-5 text-amber-600" />
                            <span className="text-sm font-medium">{destination.duration}</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                            <Clock className="w-5 h-5 text-amber-600" />
                            <span className="text-sm font-medium">{destination.difficulty}</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                            <Star className="w-5 h-5 text-amber-600 fill-current" />
                            <span className="text-sm font-medium">{destination.rating} ({destination.reviews} reviews)</span>
                        </div>
                        <div className="flex items-center justify-center space-x-2">
                            <span className="text-sm font-bold text-amber-600">{destination.price}</span>
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
                            {/* Description */}
                            <div className="bg-white p-8 rounded-2xl shadow-lg">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">About This Destination</h2>
                                <p className="text-gray-600 leading-relaxed text-lg mb-6">{destination.description}</p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-3">Best Time to Visit</h3>
                                        <p className="text-gray-600">{destination.bestTime}</p>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-3">Difficulty Level</h3>
                                        <p className="text-gray-600">{destination.difficulty}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Highlights */}
                            <div className="bg-white p-8 rounded-2xl shadow-lg">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Highlights & Experiences</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {destination.highlights.map((highlight, index) => (
                                        <div key={index} className="flex items-start space-x-3">
                                            <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                                            <span className="text-gray-600">{highlight}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Wildlife & Activities */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-white p-8 rounded-2xl shadow-lg">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Wildlife to See</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {destination.wildlife.map((animal, index) => (
                                            <span key={index} className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">
                                                {animal}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-white p-8 rounded-2xl shadow-lg">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4">Activities</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {destination.activities.map((activity, index) => (
                                            <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                                                {activity}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Photo Gallery */}
                            <div className="bg-white p-8 rounded-2xl shadow-lg">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Photo Gallery</h2>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {destination.gallery.map((image, index) => (
                                        <div key={index} className="aspect-square rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                                            <img src={image} alt={`${destination.name} ${index + 1}`} className="w-full h-full object-cover" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            {/* Booking Widget */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg sticky top-24 mb-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Book This Destination</h3>
                                <div className="space-y-4">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-amber-600">{destination.price}</div>
                                        <div className="text-sm text-gray-500">Starting price per person</div>
                                    </div>

                                    <Link href="/contact" className="block w-full btn-primary text-center">
                                        Get Custom Quote
                                    </Link>

                                    <a href="tel:+254721123456" className="block w-full border-2 border-gray-300 text-gray-700 hover:border-amber-600 hover:text-amber-600 px-6 py-3 rounded-full font-semibold transition-colors text-center">
                                        Call Now
                                    </a>
                                </div>
                            </div>

                            {/* Package Options */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Package Options</h3>
                                <div className="space-y-4">
                                    {destination.packages.map((pkg, index) => (
                                        <div key={index} className="border border-gray-200 p-4 rounded-lg hover:border-amber-300 transition-colors">
                                            <div className="flex justify-between items-start mb-2">
                                                <h4 className="font-semibold text-gray-900">{pkg.name}</h4>
                                                <span className="font-bold text-amber-600">{pkg.price}</span>
                                            </div>
                                            <p className="text-sm text-gray-600 mb-2">{pkg.duration}</p>
                                            <div className="text-xs text-gray-500">
                                                Includes: {pkg.includes.join(', ')}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Destinations */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                        You Might Also Like
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* This would show other destinations */}
                        <Link href="/destinations/amboseli" className="group">
                            <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
                                <img
                                    src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=400&q=80"
                                    alt="Amboseli"
                                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="p-6">
                                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                                        Amboseli National Park
                                    </h3>
                                    <p className="text-gray-600 text-sm">Famous for elephants and Kilimanjaro views</p>
                                </div>
                            </div>
                        </Link>

                        <Link href="/destinations/samburu" className="group">
                            <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
                                <img
                                    src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&q=80"
                                    alt="Samburu"
                                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="p-6">
                                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                                        Samburu National Reserve
                                    </h3>
                                    <p className="text-gray-600 text-sm">Unique wildlife and cultural experiences</p>
                                </div>
                            </div>
                        </Link>

                        <Link href="/destinations/kilimanjaro" className="group">
                            <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
                                <img
                                    src="https://images.unsplash.com/photo-1589553416260-f586c8f1514f?w=400&q=80"
                                    alt="Kilimanjaro"
                                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="p-6">
                                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                                        Mount Kilimanjaro
                                    </h3>
                                    <p className="text-gray-600 text-sm">Africa's highest peak climbing adventure</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}