import React from 'react'
import Link from 'next/link'
import { Check, Star, Users, Calendar, MapPin, ArrowRight } from 'lucide-react'

interface PricingCardProps {
    title: string
    description: string
    price: string
    duration: string
    image: string
    features: string[]
    destinations?: string[]
    maxGuests?: number
    rating?: number
    reviews?: number
    popular?: boolean
    bookingUrl?: string
    className?: string
}

const PricingCard: React.FC<PricingCardProps> = ({
    title,
    description,
    price,
    duration,
    image,
    features,
    destinations = [],
    maxGuests,
    rating,
    reviews,
    popular = false,
    bookingUrl = '/contact',
    className = ''
}) => {
    return (
        <div className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group relative ${className}`}>
            {/* Popular Badge */}
            {popular && (
                <div className="absolute top-4 left-4 z-10 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                </div>
            )}

            {/* Image */}
            <div className="relative h-48 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                {/* Rating */}
                {rating && (
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
                        <Star className="w-4 h-4 text-amber-400 fill-current" />
                        <span className="text-sm font-semibold text-gray-900">{rating}</span>
                        {reviews && <span className="text-xs text-gray-500">({reviews})</span>}
                    </div>
                )}

                {/* Price Badge */}
                <div className="absolute bottom-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold">{price}</span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                    {title}
                </h3>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {description}
                </p>

                {/* Quick Info */}
                <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{duration}</span>
                    </div>
                    {maxGuests && (
                        <div className="flex items-center space-x-1">
                            <Users className="w-4 h-4" />
                            <span>Up to {maxGuests} guests</span>
                        </div>
                    )}
                    {destinations.length > 0 && (
                        <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{destinations.length} destinations</span>
                        </div>
                    )}
                </div>

                {/* Destinations */}
                {destinations.length > 0 && (
                    <div className="mb-4">
                        <p className="text-sm font-semibold text-gray-900 mb-2">Destinations:</p>
                        <div className="flex flex-wrap gap-1">
                            {destinations.slice(0, 3).map((destination, index) => (
                                <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                                    {destination}
                                </span>
                            ))}
                            {destinations.length > 3 && (
                                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                                    +{destinations.length - 3} more
                                </span>
                            )}
                        </div>
                    </div>
                )}

                {/* Features */}
                <div className="mb-6">
                    <p className="text-sm font-semibold text-gray-900 mb-3">What's Included:</p>
                    <ul className="space-y-2">
                        {features.slice(0, 4).map((feature, index) => (
                            <li key={index} className="flex items-start space-x-2 text-sm text-gray-600">
                                <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                <span>{feature}</span>
                            </li>
                        ))}
                        {features.length > 4 && (
                            <li className="text-sm text-gray-500 pl-6">
                                +{features.length - 4} more features included
                            </li>
                        )}
                    </ul>
                </div>

                {/* CTA Button */}
                <Link
                    href={bookingUrl}
                    className="w-full btn-primary text-center flex items-center justify-center space-x-2 group/button"
                >
                    <span>Book This Package</span>
                    <ArrowRight className="w-4 h-4 group-hover/button:translate-x-1 transition-transform" />
                </Link>
            </div>
        </div>
    )
}

// Pricing comparison component
interface PricingComparisonProps {
    packages: Array<PricingCardProps & { id: string }>
    title?: string
    subtitle?: string
}

export const PricingComparison: React.FC<PricingComparisonProps> = ({
    packages,
    title = "Choose Your Perfect Safari Package",
    subtitle = "Compare our carefully crafted safari experiences"
}) => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {title}
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        {subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {packages.map((pkg) => (
                        <PricingCard key={pkg.id} {...pkg} />
                    ))}
                </div>

                {/* Custom Package CTA */}
                <div className="mt-12 text-center">
                    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Need a Custom Package?
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Every safari is unique. Let our experts create a personalized itinerary
                            that perfectly matches your preferences, budget, and travel dates.
                        </p>
                        <Link
                            href="/contact"
                            className="btn-primary inline-flex items-center space-x-2"
                        >
                            <span>Get Custom Quote</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

// Simple pricing display component
interface SimplePricingProps {
    price: string
    period?: string
    description?: string
    features?: string[]
    highlighted?: boolean
}

export const SimplePricing: React.FC<SimplePricingProps> = ({
    price,
    period = "per person",
    description,
    features = [],
    highlighted = false
}) => {
    return (
        <div className={`p-6 rounded-xl border-2 transition-all duration-300 ${highlighted
            ? 'border-amber-600 bg-amber-50 shadow-lg scale-105'
            : 'border-gray-200 bg-white hover:border-amber-300'
            }`}>
            <div className="text-center mb-4">
                <div className="text-3xl font-bold text-gray-900">{price}</div>
                <div className="text-sm text-gray-500">{period}</div>
            </div>

            {description && (
                <p className="text-gray-600 text-sm text-center mb-4">{description}</p>
            )}

            {features.length > 0 && (
                <ul className="space-y-2">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                            <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default PricingCard