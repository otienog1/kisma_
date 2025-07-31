import Link from 'next/link'
import { Home, Search, MapPin, Phone, Compass } from 'lucide-react'

export default function NotFound() {
    const popularPages = [
        {
            title: 'Maasai Mara Safari',
            href: '/destinations/maasai-mara',
            description: 'Witness the Great Migration'
        },
        {
            title: 'Mount Kenya Climbing',
            href: '/destinations/mount-kenya',
            description: 'Conquer Africa\'s second highest peak'
        },
        {
            title: 'All Destinations',
            href: '/destinations',
            description: 'Explore all our safari destinations'
        },
        {
            title: 'Contact Us',
            href: '/contact',
            description: 'Plan your perfect safari'
        }
    ]

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="max-w-2xl w-full text-center">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    {/* 404 Animation */}
                    <div className="mb-8 relative">
                        <div className="text-8xl font-bold text-amber-600 mb-4 opacity-20">404</div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Compass className="w-24 h-24 text-amber-600 animate-spin" />
                        </div>
                    </div>

                    <h1 className="text-3xl font-bold text-gray-900 mb-4">
                        Oops! Page Not Found
                    </h1>

                    <p className="text-lg text-gray-600 mb-8">
                        It looks like you've wandered off the safari trail! The page you're looking for
                        doesn't exist or may have been moved to a new location.
                    </p>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                        <Link
                            href="/"
                            className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                        >
                            <Home className="w-5 h-5" />
                            <span>Go Home</span>
                        </Link>

                        <Link
                            href="/destinations"
                            className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-6 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                        >
                            <MapPin className="w-5 h-5" />
                            <span>Browse Destinations</span>
                        </Link>
                    </div>

                    {/* Popular Pages */}
                    <div className="text-left">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                            Popular Pages
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {popularPages.map((page, index) => (
                                <Link
                                    key={index}
                                    href={page.href}
                                    className="block p-4 border border-gray-200 rounded-lg hover:border-amber-300 hover:bg-amber-50 transition-all duration-300 group"
                                >
                                    <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-amber-600 transition-colors">
                                        {page.title}
                                    </h4>
                                    <p className="text-sm text-gray-600">{page.description}</p>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Search Suggestion */}
                    <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center justify-center space-x-2 text-gray-600 mb-2">
                            <Search className="w-5 h-5" />
                            <span className="font-medium">Looking for something specific?</span>
                        </div>
                        <p className="text-sm text-gray-500 mb-4">
                            Try searching for destinations, services, or contact our team directly for assistance.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <Link
                                href="/destinations"
                                className="flex-1 bg-white border border-gray-200 hover:border-amber-300 text-gray-700 hover:text-amber-600 px-4 py-2 rounded-lg transition-colors text-center"
                            >
                                Search Destinations
                            </Link>
                            <Link
                                href="/services"
                                className="flex-1 bg-white border border-gray-200 hover:border-amber-300 text-gray-700 hover:text-amber-600 px-4 py-2 rounded-lg transition-colors text-center"
                            >
                                Browse Services
                            </Link>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="mt-8 pt-6 border-t border-gray-200">
                        <p className="text-sm text-gray-500 mb-3">
                            Still can't find what you're looking for?
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
                            <a
                                href="tel:+254721123456"
                                className="flex items-center space-x-2 text-amber-600 hover:text-amber-700 font-medium"
                            >
                                <Phone className="w-4 h-4" />
                                <span>+254 (0) 721 123 456</span>
                            </a>
                            <Link
                                href="/contact"
                                className="text-amber-600 hover:text-amber-700 font-medium underline"
                            >
                                Contact our team
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}