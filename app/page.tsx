import React from 'react'
import Hero from '@/components/Hero'
import IntroSection from '@/components/IntroSection'
import ImageSection from '@/components/ImageSection'
// import StatsSection from '@/components/StatsSection'
import FeaturedDestinations from '@/components/FeaturedDestinations'
import HomePageSection from '@/components/HomePageSection'
import ServicesOverview from '@/components/ServicesOverview'
import TestimonialCarousel from '@/components/TestimonialCarousel'
import CTASection from '@/components/CTASection'

export default function Home() {
    return (
        <div className="min-h-screen">
            <Hero />
            <IntroSection />
            <ImageSection />
            {/* <StatsSection /> */}
            <FeaturedDestinations />
            <HomePageSection />
            <ServicesOverview />
            <TestimonialCarousel />
            <CTASection />
        </div>
    )
}