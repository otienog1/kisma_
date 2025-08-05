'use client'

import { Metadata } from 'next'
import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        country: '',
        travelers: '2',
        serviceType: '',
        destination: '',
        travelDates: '',
        budget: '',
        message: ''
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000))

        setIsSubmitting(false)
        setIsSubmitted(true)
    }

    const contactInfo = [
        {
            icon: <Phone className="w-6 h-6" />,
            title: "Phone",
            details: ["+254 720 909852"],
            description: "Call us for immediate assistance"
        },
        {
            icon: <Mail className="w-6 h-6" />,
            title: "Email",
            details: ["info@kisimasafaris.com"],
            description: "Send us your detailed inquiry"
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            title: "Location",
            details: ["Nairobi, Kenya", "Westlands Business District"],
            description: "Visit our offices"
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: "Business Hours",
            details: ["Mon - Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 4:00 PM"],
            description: "East Africa Time (EAT)"
        }
    ]

    const serviceTypes = [
        "Wildlife Safari",
        "Mountain Climbing",
        "Honeymoon Package",
        "Family Safari",
        "Cultural Tour",
        "Photography Safari",
        "Corporate Retreat",
        "Custom Package"
    ]

    const destinations = [
        "Maasai Mara",
        "Mount Kenya",
        "Mount Kilimanjaro",
        "Amboseli",
        "Samburu",
        "Tsavo",
        "Lake Nakuru",
        "Kenya Coast",
        "Multiple Destinations",
        "Not Sure Yet"
    ]

    const budgetRanges = [
        "Under $1,000",
        "$1,000 - $2,500",
        "$2,500 - $5,000",
        "$5,000 - $10,000",
        "Over $10,000",
        "Flexible"
    ]

    if (isSubmitted) {
        return (
            <div className="min-h-screen pt-20 bg-gray-50 flex items-center justify-center">
                <div className="max-w-md mx-auto text-center p-8">
                    <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-12 h-12 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h2>
                    <p className="text-gray-600 mb-6">
                        Your inquiry has been received. Our safari experts will contact you within 24 hours to discuss your African adventure.
                    </p>
                    <button
                        onClick={() => {
                            setIsSubmitted(false)
                            setFormData({
                                name: '', email: '', phone: '', country: '', travelers: '2',
                                serviceType: '', destination: '', travelDates: '', budget: '', message: ''
                            })
                        }}
                        className="btn-primary"
                    >
                        Send Another Inquiry
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen pt-20">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img
                        src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1600&q=80"
                        alt="Contact Kisima Safaris"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        Contact <span className="text-amber-400">Us</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Ready to embark on your African adventure? Our safari experts are here to help you
                        plan the perfect trip tailored to your dreams and budget.
                    </p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Contact Information */}
                        <div className="lg:col-span-1">
                            <h2 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h2>

                            <div className="space-y-6">
                                {contactInfo.map((info, index) => (
                                    <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                        <div className="flex items-start space-x-4">
                                            <div className="text-amber-600 mt-1">
                                                {info.icon}
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-bold text-gray-900 mb-1">{info.title}</h3>
                                                <div className="space-y-1 mb-2">
                                                    {info.details.map((detail, idx) => (
                                                        <p key={idx} className="text-gray-600">{detail}</p>
                                                    ))}
                                                </div>
                                                <p className="text-sm text-gray-500">{info.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Social Media */}
                            <div className="mt-8">
                                <h3 className="font-bold text-gray-900 mb-4">Follow Us</h3>
                                <div className="flex space-x-4">
                                    <a href="https://www.facebook.com/Kisimasafaris/" target="_blank" rel="noopener noreferrer" className="bg-amber-600 hover:bg-amber-700 p-3 rounded-full text-white transition-colors">
                                        <Facebook className="w-5 h-5" />
                                    </a>
                                    <a href="https://twitter.com/kisimasafaris" target="_blank" rel="noopener noreferrer" className="bg-amber-600 hover:bg-amber-700 p-3 rounded-full text-white transition-colors">
                                        <Twitter className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>

                            {/* Quick Response Info */}
                            <div className="mt-8 bg-amber-50 p-6 rounded-xl border border-amber-200">
                                <h3 className="font-bold text-gray-900 mb-2">Quick Response Guarantee</h3>
                                <p className="text-sm text-gray-600">
                                    We respond to all inquiries within 24 hours. For urgent matters,
                                    please call us directly at +254 720 909852.
                                </p>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <div className="bg-white p-8 rounded-2xl shadow-xl">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Plan Your Safari</h2>
                                <p className="text-gray-600 mb-8">
                                    Fill out the form below and our safari experts will create a personalized
                                    itinerary for your African adventure.
                                </p>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Personal Information */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full p-3 border border-gray-300 rounded-lg focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all"
                                                placeholder="Your full name"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full p-3 border border-gray-300 rounded-lg focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all"
                                                placeholder="your@email.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                className="w-full p-3 border border-gray-300 rounded-lg focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all"
                                                placeholder="+1 (555) 123-4567"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Country/Region
                                            </label>
                                            <input
                                                type="text"
                                                name="country"
                                                value={formData.country}
                                                onChange={handleInputChange}
                                                className="w-full p-3 border border-gray-300 rounded-lg focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all"
                                                placeholder="United States"
                                            />
                                        </div>
                                    </div>

                                    {/* Trip Details */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Number of Travelers
                                            </label>
                                            <select
                                                name="travelers"
                                                value={formData.travelers}
                                                onChange={handleInputChange}
                                                className="w-full p-3 border border-gray-300 rounded-lg focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all"
                                            >
                                                {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                                                    <option key={num} value={num}>{num} {num === 1 ? 'person' : 'people'}</option>
                                                ))}
                                                <option value="9+">9+ people</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Service Type *
                                            </label>
                                            <select
                                                name="serviceType"
                                                value={formData.serviceType}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full p-3 border border-gray-300 rounded-lg focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all"
                                            >
                                                <option value="">Select a service</option>
                                                {serviceTypes.map(service => (
                                                    <option key={service} value={service}>{service}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Preferred Destination
                                            </label>
                                            <select
                                                name="destination"
                                                value={formData.destination}
                                                onChange={handleInputChange}
                                                className="w-full p-3 border border-gray-300 rounded-lg focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all"
                                            >
                                                <option value="">Select destination</option>
                                                {destinations.map(dest => (
                                                    <option key={dest} value={dest}>{dest}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Preferred Travel Dates
                                            </label>
                                            <input
                                                type="text"
                                                name="travelDates"
                                                value={formData.travelDates}
                                                onChange={handleInputChange}
                                                className="w-full p-3 border border-gray-300 rounded-lg focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all"
                                                placeholder="e.g., July 2025 or flexible"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Budget Range (per person)
                                        </label>
                                        <select
                                            name="budget"
                                            value={formData.budget}
                                            onChange={handleInputChange}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all"
                                        >
                                            <option value="">Select budget range</option>
                                            {budgetRanges.map(range => (
                                                <option key={range} value={range}>{range}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Tell us about your dream safari
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            rows={5}
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all resize-none"
                                            placeholder="Share any special requests, interests, or questions about your African adventure..."
                                        ></textarea>
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center space-x-2 ${isSubmitting
                                                ? 'bg-gray-400 cursor-not-allowed'
                                                : 'bg-amber-600 hover:bg-amber-700 transform hover:scale-105'
                                            }`}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                                <span>Sending...</span>
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-5 h-5" />
                                                <span>Send My Safari Inquiry</span>
                                            </>
                                        )}
                                    </button>

                                    <p className="text-xs text-gray-500 text-center">
                                        By submitting this form, you agree to our privacy policy and terms of service.
                                        We'll only use your information to plan your safari and send you relevant updates.
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                        Frequently Asked <span className="text-gradient">Questions</span>
                    </h2>

                    <div className="space-y-8">
                        <div className="bg-gray-50 p-6 rounded-xl">
                            <h3 className="font-bold text-gray-900 mb-2">How far in advance should I book my safari?</h3>
                            <p className="text-gray-600">We recommend booking 3-6 months in advance, especially for peak seasons (July-October and December-March). However, we can often accommodate last-minute bookings based on availability.</p>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-xl">
                            <h3 className="font-bold text-gray-900 mb-2">What's included in your safari packages?</h3>
                            <p className="text-gray-600">Our packages typically include accommodation, meals, park fees, professional guide, 4WD safari vehicle, and airport transfers. Specific inclusions vary by package - we'll provide detailed information with your quote.</p>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-xl">
                            <h3 className="font-bold text-gray-900 mb-2">Do you provide travel insurance?</h3>
                            <p className="text-gray-600">We strongly recommend travel insurance and can help you find suitable coverage. We work with reputable insurance partners to ensure you're protected during your African adventure.</p>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-xl">
                            <h3 className="font-bold text-gray-900 mb-2">What payment methods do you accept?</h3>
                            <p className="text-gray-600">We accept bank transfers, credit cards (Visa, MasterCard), and PayPal. A deposit is required to secure your booking, with the balance due closer to your travel date.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContactPage