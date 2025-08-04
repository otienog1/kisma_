'use client'

import React from 'react'

const ImageSection = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="relative overflow-hidden shadow-2xl">
                    <img
                        src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1600&q=80"
                        alt="African Safari Landscape"
                        className="w-full h-[500px] md:h-[600px] lg:h-[700px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
            </div>
        </section>
    )
}

export default ImageSection