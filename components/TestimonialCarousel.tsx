'use client'

import React, { useState, useEffect } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const TestimonialCarousel = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)

    const testimonials = [
        {
            text: "The safari itself was superb. Our driver guide, a lovely young man, was very friendly, polite and exceptionally knowledgeable with regard to all the animals and birds. We had the holiday of a lifetime and we would definitely have no hesitation to book another safari with KISIMA SAFARIS.",
            author: "Sandra Seary",
            location: "Lytham St Annes, UK",
            rating: 5,
            trip: "Maasai Mara Safari",
            avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&q=80"
        },
        {
            text: "Every day was a busy, exciting, wonderful, amazing experience with Henry, our guide/driver. This was my 5th trip with KISIMA and each trip has just been amazing. With each trip while taking us back to favourite areas they also at the same time come up with some surprising new experiences.",
            author: "Maria van den Berg",
            location: "Netherlands",
            rating: 5,
            trip: "Multiple Safari Tours",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80"
        },
        {
            text: "Kisima prepared a well organised safari tour program for my one-week visit in Kenya. They provided me a very good driver-guide who also looked after me well as I was then having a very bad cough at the time of my visit. They saw to it that I made the most of my visit tour in spite of my condition.",
            author: "Fedi",
            location: "Netherlands",
            rating: 5,
            trip: "Kenya Wildlife Tour",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80"
        },
        {
            text: "An absolutely incredible experience climbing Mount Kenya with Kisima Safaris. Our guides were professional, safety-conscious, and made the challenging climb enjoyable. The views from Point Lenana were breathtaking. Highly recommend for anyone seeking adventure!",
            author: "James Mitchell",
            location: "Australia",
            rating: 5,
            trip: "Mount Kenya Climbing",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80"
        },
        {
            text: "Our honeymoon with Kisima Safaris was magical! They arranged everything perfectly - from romantic dinners under the stars to private game drives. The attention to detail and personalized service made our trip unforgettable. Thank you for making our dreams come true!",
            author: "Emily & David Johnson",
            location: "United States",
            rating: 5,
            trip: "Honeymoon Safari Package",
            avatar: "https://images.unsplash.com/photo-1515041219749-89347f83291a?w=100&q=80"
        }
    ]

    useEffect(() => {
        if (!isAutoPlaying) return

        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
        }, 6000)

        return () => clearInterval(interval)
    }, [isAutoPlaying, testimonials.length])

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
        setIsAutoPlaying(false)
    }

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
        setIsAutoPlaying(false)
    }

    const goToTestimonial = (index: number) => {
        setCurrentTestimonial(index)
        setIsAutoPlaying(false)
    }

    return (
        <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        What Our <span className="text-gradient">Travelers Say</span>
                    </h2>
                    <p className="text-xl text-gray-600">
                        Real experiences from real adventurers who've explored Africa with us
                    </p>
                </div>

                {/* Testimonial Card */}
                <div className="relative">
                    <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
                        {/* Quote Icon */}
                        <div className="absolute top-6 left-6 text-amber-600/20">
                            <Quote className="w-16 h-16" fill="currentColor" />
                        </div>

                        {/* Navigation Arrows */}
                        <button
                            onClick={prevTestimonial}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors group"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="w-5 h-5 text-gray-600 group-hover:text-amber-600" />
                        </button>

                        <button
                            onClick={nextTestimonial}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors group"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-amber-600" />
                        </button>

                        {/* Content */}
                        <div className="text-center relative z-10">
                            {/* Rating Stars */}
                            <div className="flex justify-center mb-6">
                                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                                    <Star key={i} className="w-6 h-6 text-amber-400 fill-current" />
                                ))}
                            </div>

                            {/* Testimonial Text */}
                            <blockquote className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto">
                                "{testimonials[currentTestimonial].text}"
                            </blockquote>

                            {/* Author Info */}
                            <div className="flex items-center justify-center space-x-4 mb-2">
                                <img
                                    src={testimonials[currentTestimonial].avatar}
                                    alt={testimonials[currentTestimonial].author}
                                    className="w-16 h-16 rounded-full object-cover border-4 border-amber-100"
                                />
                                <div className="text-left">
                                    <div className="font-bold text-gray-900 text-lg">
                                        {testimonials[currentTestimonial].author}
                                    </div>
                                    <div className="text-gray-500">
                                        {testimonials[currentTestimonial].location}
                                    </div>
                                    <div className="text-amber-600 text-sm font-medium">
                                        {testimonials[currentTestimonial].trip}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex justify-center mt-8 space-x-3">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentTestimonial
                                    ? 'bg-amber-600 scale-125'
                                    : 'bg-gray-300 hover:bg-amber-400'
                                    }`}
                                onClick={() => goToTestimonial(index)}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Trust Indicators */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                        <div className="text-3xl font-bold text-amber-600 mb-2">4.9/5</div>
                        <div className="text-gray-600">Average Rating</div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                        <div className="text-3xl font-bold text-amber-600 mb-2">98%</div>
                        <div className="text-gray-600">Would Recommend</div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-lg">
                        <div className="text-3xl font-bold text-amber-600 mb-2">50%</div>
                        <div className="text-gray-600">Repeat Customers</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TestimonialCarousel