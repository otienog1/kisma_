import React from 'react'
import Link from 'next/link'
import { ArrowRight, Phone, Mail, Calendar } from 'lucide-react'

const CTASection = () => {
    return (
        <section className="py-20 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1549366021-9f761d040a94?w=1600&q=80"
                    alt="African sunset safari"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    Ready to Start Your
                    <span className="block text-amber-400">African Adventure?</span>
                </h2>
                <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
                    Don't wait to experience the magic of Africa. Our expert team is ready to
                    craft your perfect safari adventure, tailored to your dreams and budget.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                    <Link
                        href="/contact"
                        className="btn-primary group inline-flex items-center justify-center space-x-2"
                    >
                        <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        <span>Plan My Safari</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <a
                        href="tel:+254721123456"
                        className="btn-secondary group inline-flex items-center justify-center space-x-2"
                    >
                        <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                        <span>Call Now</span>
                    </a>
                </div>

                {/* Quick Contact Options */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-white hover:bg-white/20 transition-all duration-300 group">
                        <Phone className="w-8 h-8 text-amber-400 mb-4 mx-auto group-hover:scale-110 transition-transform" />
                        <h3 className="font-semibold mb-2">Call Us</h3>
                        <p className="text-sm text-gray-200 mb-3">Speak with our safari experts</p>
                        <a
                            href="tel:+254721123456"
                            className="text-amber-400 hover:text-amber-300 font-medium text-sm"
                        >
                            +254 (0) 721 123 456
                        </a>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-white hover:bg-white/20 transition-all duration-300 group">
                        <Mail className="w-8 h-8 text-amber-400 mb-4 mx-auto group-hover:scale-110 transition-transform" />
                        <h3 className="font-semibold mb-2">Email Us</h3>
                        <p className="text-sm text-gray-200 mb-3">Get a detailed quote</p>
                        <a
                            href="mailto:info@kisimasafaris.com"
                            className="text-amber-400 hover:text-amber-300 font-medium text-sm"
                        >
                            info@kisimasafaris.com
                        </a>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-white hover:bg-white/20 transition-all duration-300 group">
                        <Calendar className="w-8 h-8 text-amber-400 mb-4 mx-auto group-hover:scale-110 transition-transform" />
                        <h3 className="font-semibold mb-2">Book Online</h3>
                        <p className="text-sm text-gray-200 mb-3">Easy online booking</p>
                        <Link
                            href="/contact"
                            className="text-amber-400 hover:text-amber-300 font-medium text-sm"
                        >
                            Book Your Trip
                        </Link>
                    </div>
                </div>

                {/* Trust Badges */}
                <div className="mt-12 flex flex-wrap justify-center items-center gap-8 opacity-80">
                    <div className="flex items-center space-x-2 text-white">
                        <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                        <span className="text-sm">24/7 Support</span>
                    </div>
                    <div className="flex items-center space-x-2 text-white">
                        <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                        <span className="text-sm">Best Price Guarantee</span>
                    </div>
                    <div className="flex items-center space-x-2 text-white">
                        <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                        <span className="text-sm">Free Consultation</span>
                    </div>
                    <div className="flex items-center space-x-2 text-white">
                        <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                        <span className="text-sm">Flexible Cancellation</span>
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-1/4 left-10 w-3 h-3 bg-amber-400 rounded-full animate-ping opacity-75"></div>
            <div className="absolute bottom-1/4 right-10 w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-amber-400 rounded-full animate-ping opacity-50"></div>
        </section>
    )
}

export default CTASection