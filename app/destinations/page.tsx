import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Star, MapPin, Users, Clock, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Safari Destinations | Kisima Safaris',
    description: 'Explore Kenya and East Africa\'s most spectacular destinations including Maasai Mara, Mount Kenya, Kilimanjaro, and pristine coastal beaches.',
    keywords: 'Kenya destinations, Maasai Mara, Mount Kenya, Kilimanjaro, safari destinations, East Africa travel',
}

const DestinationsPage = () => {
    const destinations = [
        {
            id: 'maasai-mara',
            name: "Maasai Mara National Reserve",
            location: "Kenya",
            image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
            description: "Kenya's most famous game reserve, home to the spectacular Great Migration and abundant wildlife including the Big Five.",
            duration: "3-7 days",
            difficulty: "Easy",
            bestTime: "July - October",
            highlights: ["Great Migration", "Big Five", "Maasai Culture", "Hot Air Balloon Safaris"],
            price: "From $850",
            rating: 4.9,
            reviews: 247,
            category: "Wildlife Safari"
        },
        {
            id: 'mount-kenya',
            name: "Mount Kenya National Park",
            location: "Kenya",
            image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&q=80",
            description: "Africa's second-highest peak offering diverse ecosystems, from bamboo forests to alpine meadows and glacial lakes.",
            duration: "4-6 days",
            difficulty: "Moderate to Challenging",
            bestTime: "December - March, July - October",
            highlights: ["Point Lenana", "Alpine Lakes", "Unique Flora", "Rock Climbing"],
            price: "From $650",
            rating: 4.8,
            reviews: 156,
            category: "Mountain Climbing"
        },
        {
            id: 'kilimanjaro',
            name: "Mount Kilimanjaro",
            location: "Tanzania",
            image: "https://images.unsplash.com/photo-1589553416260-f586c8f1514f?w=800&q=80",
            description: "The highest peak in Africa and the world's tallest free-standing mountain, offering multiple routes to the summit.",
            duration: "5-9 days",
            difficulty: "Challenging",
            bestTime: "June - October, December - March",
            highlights: ["Uhuru Peak", "Multiple Routes", "Crater Views", "Sunrise Summit"],
            price: "From $1,200",
            rating: 4.9,
            reviews: 189,
            category: "Mountain Climbing"
        },
        {
            id: 'amboseli',
            name: "Amboseli National Park",
            location: "Kenya",
            image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=800&q=80",
            description: "Famous for its large elephant herds and stunning views of Mount Kilimanjaro as a backdrop.",
            duration: "2-4 days",
            difficulty: "Easy",
            bestTime: "June - October, December - March",
            highlights: ["Elephant Herds", "Kilimanjaro Views", "Birdwatching", "Maasai Culture"],
            price: "From $550",
            rating: 4.7,
            reviews: 134,
            category: "Wildlife Safari"
        },
        {
            id: 'samburu',
            name: "Samburu National Reserve",
            location: "Kenya",
            image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80",
            description: "A unique ecosystem in northern Kenya, home to rare species and the traditional Samburu people.",
            duration: "2-4 days",
            difficulty: "Easy",
            bestTime: "Year-round",
            highlights: ["Unique Wildlife", "Samburu Culture", "Ewaso Nyiro River", "Less Crowded"],
            price: "From $600",
            rating: 4.6,
            reviews: 98,
            category: "Wildlife Safari"
        },
        {
            id: 'coastal-beaches',
            name: "Kenya Coast & Beaches",
            location: "Kenya",
            image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
            description: "Pristine white sand beaches along the Indian Ocean, perfect for relaxation after safari adventures.",
            duration: "2-14 days",
            difficulty: "Relaxation",
            bestTime: "October - April",
            highlights: ["White Sand Beaches", "Coral Reefs", "Swahili Culture", "Water Sports"],
            price: "From $400",
            rating: 4.7,
            reviews: 167,
            category: "Beach & Relaxation"
        },
        {
            id: 'lake-nakuru',
            name: "Lake Nakuru National Park",
            location: "Kenya",
            image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80",
            description: "Famous for its millions of flamingos and important rhino sanctuary in the Great Rift Valley.",
            duration: "1-2 days",
            difficulty: "Easy",
            bestTime: "Year-round",
            highlights: ["Flamingo Flocks", "Rhino Sanctuary", "Baboon Cliff", "Birdwatching"],
            price: "From $350",
            rating: 4.5,
            reviews: 112,
            category: "Wildlife Safari"
        },
        {
            id: 'tsavo',
            name: "Tsavo National Parks",
            location: "Kenya",
            image: "https://images.unsplash.com/photo-1549366021-9f761d040a94?w=800&q=80",
            description: "Kenya's largest national park, divided into Tsavo East and West, known for red elephants and diverse landscapes.",
            duration: "2-5 days",
            difficulty: "Easy to Moderate",
            bestTime: "June - October, January - March",
            highlights: ["Red Elephants", "Mzima Springs", "Lugard Falls", "Vast Wilderness"],
            price: "From $500",
            rating: 4.6,
            reviews: 143,
            category: "Wildlife Safari"
        }
    ]

    const categories = ["All", "Wildlife Safari", "Mountain Climbing", "Beach & Relaxation"]

    return (
        <div className="min-h-screen pt-20">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img
                        src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1600&q=80"
                        alt="African landscape"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        Explore Our <span className="text-amber-400">Destinations</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        From the sweeping savannahs of the Maasai Mara to the snow-capped peaks of Kilimanjaro,
                        discover the diverse landscapes and incredible wildlife that make East Africa extraordinary.
                    </p>
                </div>
            </section>

            {/* Filter Section */}
            <section className="py-8 bg-white sticky top-20 z-40 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className="px-6 py-2 rounded-full border border-gray-300 hover:border-amber-600 hover:text-amber-600 transition-colors duration-300 font-medium"
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Destinations Grid */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {destinations.map((destination, index) => (
                            <div
                                key={destination.id}
                                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group card-hover"
                            >
                                {/* Image */}
                                <div className="relative">
                                    <img
                                        src={destination.image}
                                        alt={destination.name}
                                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                                    />

                                    {/* Category Badge */}
                                    <div className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                        {destination.category}
                                    </div>

                                    {/* Rating Badge */}
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
                                        <Star className="w-4 h-4 text-amber-400 fill-current" />
                                        <span className="text-sm font-semibold text-gray-900">{destination.rating}</span>
                                        <span className="text-xs text-gray-500">({destination.reviews})</span>
                                    </div>

                                    {/* Price Badge */}
                                    <div className="absolute bottom-4 left-4 bg-gray-900/80 backdrop-blur-sm text-white px-3 py-1 rounded-full">
                                        <span className="text-sm font-semibold">{destination.price}</span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                                        <MapPin className="w-4 h-4" />
                                        <span>{destination.location}</span>
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
                                        {destination.name}
                                    </h3>

                                    <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                                        {destination.description}
                                    </p>

                                    {/* Details */}
                                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                                        <div className="flex items-center space-x-2 text-gray-500">
                                            <Calendar className="w-4 h-4" />
                                            <span>{destination.duration}</span>
                                        </div>
                                        <div className="flex items-center space-x-2 text-gray-500">
                                            <Clock className="w-4 h-4" />
                                            <span>{destination.difficulty}</span>
                                        </div>
                                    </div>

                                    {/* Best Time */}
                                    <div className="mb-4">
                                        <span className="text-sm text-gray-500">Best Time: </span>
                                        <span className="text-sm font-medium text-gray-700">{destination.bestTime}</span>
                                    </div>

                                    {/* Highlights */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {destination.highlights.slice(0, 3).map((highlight, idx) => (
                                            <span
                                                key={idx}
                                                className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                                            >
                                                {highlight}
                                            </span>
                                        ))}
                                        {destination.highlights.length > 3 && (
                                            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                                                +{destination.highlights.length - 3} more
                                            </span>
                                        )}
                                    </div>

                                    {/* Learn More Button */}
                                    <Link
                                        href={`/destinations/${destination.id}`}
                                        className="inline-flex items-center text-amber-600 hover:text-amber-700 font-semibold group/link w-full justify-between"
                                    >
                                        <span>Learn More & Book</span>
                                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Planning Section */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Need Help Planning Your Trip?
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Our safari experts are here to help you create the perfect itinerary
                        based on your interests, budget, and travel dates.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="btn-primary">
                            Get Free Consultation
                        </Link>
                        <a href="tel:+254721123456" className="btn-secondary text-gray-900 border-gray-300 hover:bg-gray-900 hover:text-white">
                            Call +254 (0) 721 123 456
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default DestinationsPage