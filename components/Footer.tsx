import React from 'react'
import Link from 'next/link'
import { Compass, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    const quickLinks = [
        { href: '/', label: 'Home' },
        { href: '/destinations', label: 'Destinations' },
        { href: '/services', label: 'Services' },
        { href: '/about', label: 'About Us' },
        { href: '/contact', label: 'Contact' },
    ]

    const destinations = [
        { href: '/destinations/maasai-mara', label: 'Maasai Mara' },
        { href: '/destinations/mount-kenya', label: 'Mount Kenya' },
        { href: '/destinations/kilimanjaro', label: 'Kilimanjaro' },
        { href: '/destinations/coastal-beaches', label: 'Coast & Beaches' },
        { href: '/destinations/samburu', label: 'Samburu' },
    ]

    const services = [
        { href: '/services/wildlife-safaris', label: 'Wildlife Safaris' },
        { href: '/services/mountain-climbing', label: 'Mountain Climbing' },
        { href: '/services/family-packages', label: 'Family Packages' },
        { href: '/services/honeymoon-tours', label: 'Honeymoon Tours' },
        { href: '/services/cultural-tours', label: 'Cultural Tours' },
    ]

    const socialLinks = [
        {
            href: 'https://facebook.com/kisimasafaris',
            icon: <Facebook className="w-5 h-5" />,
            label: 'Facebook'
        },
        {
            href: 'https://instagram.com/kisimasafaris',
            icon: <Instagram className="w-5 h-5" />,
            label: 'Instagram'
        },
        {
            href: 'https://twitter.com/kisimasafaris',
            icon: <Twitter className="w-5 h-5" />,
            label: 'Twitter'
        },
        {
            href: 'https://linkedin.com/company/kisimasafaris',
            icon: <Linkedin className="w-5 h-5" />,
            label: 'LinkedIn'
        },
    ]

    return (
        <footer className="bg-gray-900 text-white">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center space-x-2 mb-6 group">
                            <Compass className="h-8 w-8 text-amber-400 group-hover:rotate-45 transition-transform duration-300" />
                            <span className="text-xl font-bold">Kisima Safaris</span>
                        </Link>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Creating unforgettable African adventures with sustainable tourism practices.
                            Experience the magic of Kenya and East Africa with our expert guides.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3 mb-6">
                            <div className="flex items-center space-x-3 text-gray-400">
                                <Phone className="w-4 h-4 text-amber-400" />
                                <span>+254 (0) 721 123 456</span>
                            </div>
                            <div className="flex items-center space-x-3 text-gray-400">
                                <Mail className="w-4 h-4 text-amber-400" />
                                <span>info@kisimasafaris.com</span>
                            </div>
                            <div className="flex items-center space-x-3 text-gray-400">
                                <MapPin className="w-4 h-4 text-amber-400" />
                                <span>Nairobi, Kenya</span>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                            <div className="flex space-x-3">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-gray-800 hover:bg-amber-600 p-3 rounded-full transition-colors duration-300 group"
                                        aria-label={social.label}
                                    >
                                        <div className="group-hover:scale-110 transition-transform duration-300">
                                            {social.icon}
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-amber-400 transition-colors duration-300 flex items-center group"
                                    >
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-amber-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Destinations */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Destinations</h4>
                        <ul className="space-y-3">
                            {destinations.map((destination) => (
                                <li key={destination.href}>
                                    <Link
                                        href={destination.href}
                                        className="text-gray-400 hover:text-amber-400 transition-colors duration-300 flex items-center group"
                                    >
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-amber-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                                        {destination.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Our Services</h4>
                        <ul className="space-y-3">
                            {services.map((service) => (
                                <li key={service.href}>
                                    <Link
                                        href={service.href}
                                        className="text-gray-400 hover:text-amber-400 transition-colors duration-300 flex items-center group"
                                    >
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-amber-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                                        {service.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Newsletter Signup */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="mb-4 md:mb-0">
                            <h4 className="text-lg font-semibold mb-2">Stay Updated</h4>
                            <p className="text-gray-400">Get the latest safari deals and African adventure tips</p>
                        </div>
                        <div className="flex w-full md:w-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-gray-800 border border-gray-700 px-4 py-3 rounded-l-lg focus:border-amber-400 focus:outline-none flex-1 md:w-64"
                            />
                            <button className="bg-amber-600 hover:bg-amber-700 px-6 py-3 rounded-r-lg font-semibold transition-colors duration-300">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
                        <p>&copy; {currentYear} Kisima Safaris. All rights reserved.</p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <Link href="/privacy" className="hover:text-amber-400 transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="hover:text-amber-400 transition-colors">
                                Terms of Service
                            </Link>
                            <Link href="/sustainability" className="hover:text-amber-400 transition-colors">
                                Sustainability
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer