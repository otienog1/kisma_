'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Users, Award, MapPin, Heart } from 'lucide-react'

const StatsSection = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [counts, setCounts] = useState({
        travelers: 0,
        experience: 0,
        destinations: 0,
        satisfaction: 0
    })
    const sectionRef = useRef<HTMLElement>(null)

    const stats = [
        {
            icon: <Users className="w-8 h-8" />,
            number: 1000,
            suffix: '+',
            label: 'Happy Travelers',
            key: 'travelers'
        },
        {
            icon: <Award className="w-8 h-8" />,
            number: 15,
            suffix: '+',
            label: 'Years Experience',
            key: 'experience'
        },
        {
            icon: <MapPin className="w-8 h-8" />,
            number: 50,
            suffix: '+',
            label: 'Destinations',
            key: 'destinations'
        },
        {
            icon: <Heart className="w-8 h-8" />,
            number: 100,
            suffix: '%',
            label: 'Satisfaction Rate',
            key: 'satisfaction'
        }
    ]

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true)
                    animateCounters()
                }
            },
            { threshold: 0.5 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [isVisible])

    const animateCounters = () => {
        stats.forEach((stat) => {
            let startValue = 0
            const endValue = stat.number
            const duration = 2000
            const increment = endValue / (duration / 16)

            const timer = setInterval(() => {
                startValue += increment
                if (startValue >= endValue) {
                    startValue = endValue
                    clearInterval(timer)
                }

                setCounts(prev => ({
                    ...prev,
                    [stat.key]: Math.floor(startValue)
                }))
            }, 16)
        })
    }

    return (
        <section ref={sectionRef} className="py-20 bg-gradient-to-r from-amber-50 to-orange-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Trusted by <span className="text-gradient">Thousands</span>
                    </h2>
                    <p className="text-lg text-gray-600">
                        Our commitment to excellence has made us Kenya's premier safari company
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={stat.key}
                            className={`text-center group transform transition-all duration-500 hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                                }`}
                            style={{ transitionDelay: `${index * 200}ms` }}
                        >
                            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className="text-amber-600 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                                    {stat.icon}
                                </div>
                                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                                    {counts[stat.key as keyof typeof counts]}{stat.suffix}
                                </div>
                                <div className="text-gray-600 font-medium">{stat.label}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Achievement Badges */}
                <div className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-70">
                    <div className="flex items-center space-x-2 text-gray-600">
                        <Award className="w-5 h-5 text-amber-600" />
                        <span className="text-sm font-medium">TripAdvisor Excellence</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                        <Award className="w-5 h-5 text-amber-600" />
                        <span className="text-sm font-medium">Kenya Tourism Board Certified</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                        <Award className="w-5 h-5 text-amber-600" />
                        <span className="text-sm font-medium">Sustainable Tourism Certified</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StatsSection