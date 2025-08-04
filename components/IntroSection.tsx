'use client'

import React from 'react'

const IntroSection = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl  font-light text-gray-900 mb-8 leading-relaxed">
                            Every journey through East Africa is a chance to rediscover yourself—while uplifting the people, wildlife, and wild places that make it so extraordinary.
                        </h2>
                        <div className="prose prose-lg md:prose-xl text-gray-700 mx-auto leading-relaxed space-y-6 text-xl">
                            <p>
                                Kisima Safaris crafts immersive, soul-stirring journeys through Kenya, Tanzania, and Uganda.
                                From iconic wildlife safaris to family adventures, active hiking expeditions, and romantic getaways,
                                each experience is designed to connect you with nature, culture, and yourself.
                            </p>
                            <p>
                                Whether it's climbing Mount Kenya, floating above the Mara in a balloon, or rafting in Sagana,
                                we offer more than just safaris—we offer unforgettable stories. With deep roots in Africa,
                                we know this land intimately.
                            </p>
                            <p className="text-xl font-light text-amber-700">
                                Travel with us and return transformed, touched by the magic, diversity, and warmth of East Africa.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default IntroSection