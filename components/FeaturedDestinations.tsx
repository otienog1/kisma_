import React from 'react'
import Link from 'next/link'
import { Calendar, Star, ArrowRight } from 'lucide-react'

const FeaturedDestinations = () => {
    const destinations = [
        {
            id: 'maasai-mara',
            name: "Maasai Mara",
            image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
            description: "Witness the Great Migration in Kenya's most famous reserve",
            duration: "3-7 days",
            rating: 4.9,
            price: "From $850",
            highlights: ["Great Migration", "Big Five", "Maasai Culture"],
            bestTime: "July - October"
        },
        {
            id: 'mount-kenya',
            name: "Mount Kenya",
            image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&q=80",
            description: "Conquer Africa's second highest peak",
            duration: "4-6 days",
            rating: 4.8,
            price: "From $650",
            highlights: ["Snow-capped peaks", "Alpine lakes", "Unique flora"],
            bestTime: "December - March"
        },
        {
            id: 'kilimanjaro',
            name: "Mount Kilimanjaro",
            image: "https://images.unsplash.com/photo-1589553416260-f586c8f1514f?w=800&q=80",
            description: "Scale the legendary roof of Africa in Tanzania",
            duration: "5-9 days",
            rating: 4.9,
            price: "From $1,200",
            highlights: ["Uhuru Peak", "Multiple routes", "Crater views"],
            bestTime: "June - October"
        },
        {
            id: 'coastal-beaches',
            name: "Coast & Beaches",
            image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
            description: "Relax on pristine Indian Ocean beaches",
            duration: "2-14 days",
            rating: 4.7,
            price: "From $400",
            highlights: ["White sand beaches", "Coral reefs", "Swahili culture"],
            bestTime: "December - March"
        }
    ]

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Featured <span className="text-gradient">Destinations</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        From the vast savannahs of Maasai Mara to the snow-capped peaks of Mount Kenya,
                        discover the diverse landscapes that make East Africa extraordinary.
                    </p>
                </div>

                {/* Destinations Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {destinations.map((destination, index) => (
                        <Link
                            key={destination.id}
                            href={`/destinations/${destination.id}`}
                            className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl card-hover"
                        >
                            <div className="relative">
                                <img
                                    src={destination.image}
                                    alt={destination.name}
                                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                                {/* Rating Badge */}
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
                                    <Star className="w-4 h-4 text-amber-400 fill-current" />
                                    <span className="text-sm font-semibold text-gray-900">{destination.rating}</span>
                                </div>

                                {/* Price Badge */}
                                <div className="absolute top-4 left-4 bg-amber-600/90 backdrop-blur-sm text-white px-3 py-1 rounded-full">
                                    <span className="text-sm font-semibold">{destination.price}</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                <h3 className="text-2xl font-bold mb-2 group-hover:text-amber-400 transition-colors">
                                    {destination.name}
                                </h3>
                                <p className="text-gray-200 mb-4 leading-relaxed">{destination.description}</p>

                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center text-amber-400">
                                        <Calendar className="w-4 h-4 mr-1" />
                                        <span className="text-sm">{destination.duration}</span>
                                    </div>
                                    <div className="text-sm text-gray-300">
                                        Best: {destination.bestTime}
                                    </div>
                                </div>

                                {/* Highlights */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {destination.highlights.map((highlight, idx) => (
                                        <span
                                            key={idx}
                                            className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full border border-white/30"
                                        >
                                            {highlight}
                                        </span>
                                    ))}
                                </div>

                                {/* Learn More Link */}
                                <div className="flex items-center text-amber-400 group-hover:text-amber-300 transition-colors">
                                    <span className="text-sm font-semibold mr-2">Learn More</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center">
                    <Link
                        href="/destinations"
                        className="inline-flex items-center space-x-2 bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                    >
                        <span>View All Destinations</span>
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default FeaturedDestinations