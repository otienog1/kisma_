'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { ChevronDown, Play } from 'lucide-react'

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [currentSlide, setCurrentSlide] = useState(0)

    const heroSlides = [
        {
            image: "https://images.unsplash.com/photo-1549366021-9f761d040a94?w=1600&q=80",
            title: "Discover the Magic of Africa",
            subtitle: "Experience unique wildlife adventures and create memories that last a lifetime",
            cta: "Start Your Safari"
        },
        {
            image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1600&q=80",
            title: "Witness the Great Migration",
            subtitle: "Marvel at one of nature's most spectacular phenomena in the Maasai Mara",
            cta: "Explore Maasai Mara"
        },
        {
            image: "https://images.unsplash.com/photo-1589553416260-f586c8f1514f?w=1600&q=80",
            title: "Conquer Legendary Peaks",
            subtitle: "Scale Mount Kenya and Kilimanjaro with our expert mountain guides",
            cta: "Plan Your Climb"
        }
    ]

    useEffect(() => {
        setIsVisible(true)
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
        }, 6000)
        return () => clearInterval(interval)
    }, [])

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Slides */}
            {heroSlides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>
            ))}

            {/* Content */}
            <div className={`relative z-10 text-center text-white max-w-5xl mx-auto px-4 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6 leading-tight">
                    {heroSlides[currentSlide].title.split(' ').map((word, index) => (
                        <span key={index}>
                            <span
                                className={`inline-block ${word === 'Magic' || word === 'Migration' || word === 'Legendary'
                                    ? 'text-amber-400'
                                    : ''
                                    }`}
                            >
                                {word}
                            </span>
                            {index < heroSlides[currentSlide].title.split(' ').length - 1 && ' '}
                        </span>
                    ))}
                </h2>
                <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
                    {heroSlides[currentSlide].subtitle}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                    <Link href="/destinations" className="btn-primary group">
                        <span>{heroSlides[currentSlide].cta}</span>
                    </Link>
                    <button className="btn-secondary group flex items-center justify-center space-x-2">
                        <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        <span>Watch Our Story</span>
                    </button>
                </div>

                {/* Slide Indicators */}
                <div className="flex justify-center space-x-3">
                    {heroSlides.map((_, index) => (
                        <button
                            key={index}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                                ? 'bg-amber-400 scale-125'
                                : 'bg-white/50 hover:bg-white/75'
                                }`}
                            onClick={() => setCurrentSlide(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <ChevronDown className="h-8 w-8 text-white/70" />
            </div>

            {/* Floating Elements */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-400 rounded-full animate-ping opacity-75"></div>
            <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-amber-400 rounded-full animate-ping opacity-50"></div>
        </section>
    )
}

export default Hero