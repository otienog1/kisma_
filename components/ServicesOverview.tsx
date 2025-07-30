import React from 'react'
import Link from 'next/link'
import { Camera, Mountain, Heart, Users, ArrowRight, CheckCircle } from 'lucide-react'

const ServicesOverview = () => {
    const services = [
        {
            id: 'wildlife-safaris',
            icon: <Camera className="w-8 h-8" />,
            title: "Wildlife Safaris",
            description: "Experience the Big Five and witness incredible wildlife in their natural habitat",
            features: ["Professional game drives", "Photography equipment", "Night safaris", "Bird watching tours"],
            image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&q=80",
            popular: true
        },
        {
            id: 'mountain-climbing',
            icon: <Mountain className="w-8 h-8" />,
            title: "Mountain Climbing",
            description: "Conquer Mount Kenya and Kilimanjaro with expert guides",
            features: ["Multiple route options", "All climbing equipment", "Experienced guides", "Safety protocols"],
            image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=600&q=80",
            popular: false
        },
        {
            id: 'honeymoon-tours',
            icon: <Heart className="w-8 h-8" />,
            title: "Honeymoon Packages",
            description: "Romantic getaways combining adventure with luxury",
            features: ["Private vehicles", "Luxury accommodations", "Romantic dinners", "Spa treatments"],
            image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80",
            popular: false
        },
        {
            id: 'family-packages',
            icon: <Users className="w-8 h-8" />,
            title: "Family Safaris",
            description: "Kid-friendly adventures creating memories for the whole family",
            features: ["Family-sized vehicles", "Child-friendly activities", "Educational programs", "Flexible schedules"],
            image: "https://images.unsplash.com/photo-1549366021-9f761d040a94?w=600&q=80",
            popular: true
        }
    ]

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Our <span className="text-gradient">Services</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        We specialize in tailor-making your perfect African adventure,
                        ensuring every detail matches your tastes and budget.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                        >
                            <div className="md:flex">
                                {/* Image */}
                                <div className="md:w-1/2 relative">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    {service.popular && (
                                        <div className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                            Most Popular
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="md:w-1/2 p-8">
                                    <div className="text-amber-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        {service.description}
                                    </p>

                                    {/* Features */}
                                    <ul className="space-y-3 mb-6">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center text-sm text-gray-600">
                                                <CheckCircle className="w-4 h-4 text-amber-600 mr-3 flex-shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Learn More Link */}
                                    <Link
                                        href={`/services/${service.id}`}
                                        className="inline-flex items-center text-amber-600 hover:text-amber-700 font-semibold group/link"
                                    >
                                        <span>Learn More</span>
                                        <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Services */}
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Additional Services
                        </h3>
                        <p className="text-gray-600">
                            We offer comprehensive travel solutions for your African adventure
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-amber-50 transition-colors group">
                            <div className="text-amber-600 mb-3 flex justify-center group-hover:scale-110 transition-transform">
                                <CheckCircle className="w-6 h-6" />
                            </div>
                            <h4 className="font-semibold text-gray-900 mb-2">Airport Transfers</h4>
                            <p className="text-sm text-gray-600">Comfortable and reliable transportation</p>
                        </div>

                        <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-amber-50 transition-colors group">
                            <div className="text-amber-600 mb-3 flex justify-center group-hover:scale-110 transition-transform">
                                <CheckCircle className="w-6 h-6" />
                            </div>
                            <h4 className="font-semibold text-gray-900 mb-2">Accommodation Booking</h4>
                            <p className="text-sm text-gray-600">From budget lodges to luxury resorts</p>
                        </div>

                        <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-amber-50 transition-colors group">
                            <div className="text-amber-600 mb-3 flex justify-center group-hover:scale-110 transition-transform">
                                <CheckCircle className="w-6 h-6" />
                            </div>
                            <h4 className="font-semibold text-gray-900 mb-2">Cultural Experiences</h4>
                            <p className="text-sm text-gray-600">Authentic interactions with local communities</p>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                    <Link
                        href="/services"
                        className="inline-flex items-center space-x-2 btn-primary"
                    >
                        <span>View All Services</span>
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default ServicesOverview