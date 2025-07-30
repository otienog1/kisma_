import React from 'react'
import Hero from '@/components/Hero'
import StatsSection from '@/components/StatsSection'
import FeaturedDestinations from '@/components/FeaturedDestinations'
import ServicesOverview from '@/components/ServicesOverview'
import TestimonialCarousel from '@/components/TestimonialCarousel'
import CTASection from '@/components/CTASection'

export default function Home() {
    return (
        <div className="min-h-screen">
            <Hero />
            <StatsSection />
            <FeaturedDestinations />
            <ServicesOverview />
            <TestimonialCarousel />
            <CTASection />
        </div>
    )
}