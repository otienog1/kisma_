import { Metadata } from 'next'
import Link from 'next/link'
import { Camera, Mountain, Heart, Users, Compass, Shield, CheckCircle, Star, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Safari Services | Kisima Safaris',
    description: 'Discover our comprehensive safari services including wildlife safaris, mountain climbing, honeymoon packages, and family adventures in Kenya and East Africa.',
    keywords: 'safari services, wildlife tours, mountain climbing, family safaris, honeymoon packages, Kenya tours',
}

const ServicesPage = () => {
    const mainServices = [
        {
            id: 'wildlife-safaris',
            icon: <Camera className="w-12 h-12" />,
            title: "Wildlife Safaris",
            subtitle: "Experience Africa's incredible wildlife",
            description: "Embark on thrilling game drives to witness the Big Five and countless other species in their natural habitat. Our expert guides ensure you capture the perfect moments while learning about wildlife behavior and conservation.",
            features: [
                "Professional game drives with expert guides",
                "Photography equipment and tips",
                "Night safaris for nocturnal wildlife",
                "Bird watching tours with specialist guides",
                "Bush dinners and sundowners",
                "Conservation education programs"
            ],
            destinations: ["Maasai Mara", "Amboseli", "Samburu", "Tsavo"],
            duration: "3-10 days",
            startingPrice: "$650",
            image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
            popular: true
        },
        {
            id: 'mountain-climbing',
            icon: <Mountain className="w-12 h-12" />,
            title: "Mountain Climbing",
            subtitle: "Conquer Africa's legendary peaks",
            description: "Challenge yourself with guided climbs of Mount Kenya and Kilimanjaro. Our experienced mountain guides ensure your safety while helping you achieve your summit dreams with proper acclimatization and route planning.",
            features: [
                "Multiple route options for all skill levels",
                "All climbing and camping equipment provided",
                "Experienced certified mountain guides",
                "Comprehensive safety protocols",
                "Acclimatization and fitness guidance",
                "Summit certificate and photography"
            ],
            destinations: ["Mount Kenya", "Mount Kilimanjaro", "Mount Longonot"],
            duration: "4-9 days",
            startingPrice: "$850",
            image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&q=80",
            popular: false
        },
        {
            id: 'honeymoon-tours',
            icon: <Heart className="w-12 h-12" />,
            title: "Honeymoon Packages",
            subtitle: "Romantic adventures for couples",
            description: "Celebrate your love with romantic safari experiences designed for couples. From private game drives to candlelit dinners under the African stars, create unforgettable memories on your honeymoon.",
            features: [
                "Private luxury vehicles and guides",
                "Romantic accommodations and lodges",
                "Candlelit bush dinners",
                "Couples spa treatments",
                "Sunset hot air balloon rides",
                "Personalized itinerary planning"
            ],
            destinations: ["Maasai Mara", "Coastal Beaches", "Amboseli"],
            duration: "5-14 days",
            startingPrice: "$1,200",
            image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
            popular: false
        },
        {
            id: 'family-packages',
            icon: <Users className="w-12 h-12" />,
            title: "Family Safaris",
            subtitle: "Adventures for the whole family",
            description: "Create lasting family memories with our specially designed family safari packages. Child-friendly activities, educational programs, and flexible schedules ensure everyone from grandparents to toddlers has an amazing time.",
            features: [
                "Family-sized vehicles with safety features",
                "Child-friendly accommodations",
                "Educational wildlife programs",
                "Flexible daily schedules",
                "Family photography sessions",
                "Cultural interaction experiences"
            ],
            destinations: ["Maasai Mara", "Lake Nakuru", "Amboseli"],
            duration: "4-10 days",
            startingPrice: "$750",
            image: "https://images.unsplash.com/photo-1549366021-9f761d040a94?w=800&q=80",
            popular: true
        }
    ]

    const additionalServices = [
        {
            icon: <Compass className="w-8 h-8" />,
            title: "Cultural Tours",
            description: "Immersive experiences with local communities including Maasai villages and Swahili coastal culture."
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Photographic Safaris",
            description: "Specialized tours for photography enthusiasts with expert guidance and optimal positioning."
        },
        {
            icon: <CheckCircle className="w-8 h-8" />,
            title: "Corporate Retreats",
            description: "Team building and corporate events in the stunning backdrop of African wilderness."
        },
        {
            icon: <Star className="w-8 h-8" />,
            title: "Luxury Experiences",
            description: "Premium safari experiences with high-end accommodations and exclusive access."
        }
    ]

    return (
        <div className="min-h-screen pt-20">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img
                        src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1600&q=80"
                        alt="Safari services"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        Our <span className="text-amber-400">Services</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        We specialize in tailor-making your perfect African adventure, ensuring every detail
                        matches your preferences, budget, and travel style for an unforgettable experience.
                    </p>
                </div>
            </section>

            {/* Main Services */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-16">
                        {mainServices.map((service, index) => (
                            <div
                                key={service.id}
                                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
                            >
                                {/* Image */}
                                <div className="lg:w-1/2">
                                    <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        {service.popular && (
                                            <div className="absolute top-6 left-6 bg-amber-600 text-white px-4 py-2 rounded-full font-semibold">
                                                Most Popular
                                            </div>
                                        )}
                                        <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full font-bold text-gray-900">
                                            {service.startingPrice}
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="lg:w-1/2">
                                    <div className="text-amber-600 mb-4">
                                        {service.icon}
                                    </div>

                                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                                        {service.title}
                                    </h2>
                                    <p className="text-xl text-amber-600 mb-4 font-medium">
                                        {service.subtitle}
                                    </p>
                                    <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                                        {service.description}
                                    </p>

                                    {/* Features */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                                        {service.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-start space-x-2">
                                                <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                                                <span className="text-gray-600 text-sm">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Details */}
                                    <div className="bg-gray-50 rounded-xl p-6 mb-6">
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                                            <div>
                                                <span className="font-semibold text-gray-900">Duration:</span>
                                                <p className="text-gray-600">{service.duration}</p>
                                            </div>
                                            <div>
                                                <span className="font-semibold text-gray-900">Starting Price:</span>
                                                <p className="text-gray-600">{service.startingPrice}</p>
                                            </div>
                                            <div>
                                                <span className="font-semibold text-gray-900">Destinations:</span>
                                                <p className="text-gray-600">{service.destinations.join(', ')}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* CTA */}
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <Link
                                            href={`/services/${service.id}`}
                                            className="btn-primary inline-flex items-center justify-center space-x-2"
                                        >
                                            <span>Learn More</span>
                                            <ArrowRight className="w-4 h-4" />
                                        </Link>
                                        <Link
                                            href="/contact"
                                            className="border-2 border-gray-300 text-gray-700 hover:border-amber-600 hover:text-amber-600 px-8 py-4 rounded-full font-semibold transition-colors text-center"
                                        >
                                            Get Quote
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Additional Services */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Additional <span className="text-gradient">Services</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            We offer specialized services to enhance your African adventure experience
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {additionalServices.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group card-hover"
                            >
                                <div className="text-amber-600 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Why Choose <span className="text-gradient">Kisima Safaris?</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Shield className="w-8 h-8 text-amber-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Safety First</h3>
                            <p className="text-gray-600">
                                Your safety is our top priority with comprehensive insurance, experienced guides, and emergency protocols.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Star className="w-8 h-8 text-amber-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Guides</h3>
                            <p className="text-gray-600">
                                Local guides with years of experience and deep knowledge of wildlife, culture, and landscapes.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Heart className="w-8 h-8 text-amber-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Sustainable Tourism</h3>
                            <p className="text-gray-600">
                                We practice responsible tourism that benefits local communities and protects wildlife for future generations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to Start Your Adventure?
                    </h2>
                    <p className="text-xl mb-8 opacity-90">
                        Our team is ready to create your perfect safari experience. Get in touch for a free consultation.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-colors"
                        >
                            Get Free Consultation
                        </Link>
                        <a
                            href="tel:+254721123456"
                            className="border-2 border-white text-white hover:bg-white hover:text-amber-600 px-8 py-4 rounded-full font-semibold transition-colors"
                        >
                            Call +254 (0) 721 123 456
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ServicesPage