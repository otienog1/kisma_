import React from 'react';

const HomePageSection: React.FC = () => {
    return (
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Hero Section */}
                <div className="flex flex-col lg:flex-row items-start lg:space-x-12 mb-16">
                    <div className="lg:w-1/2">
                        <p className="text-amber-600 uppercase text-sm font-semibold tracking-wider mb-2">
                            Explore Our Africa
                        </p>
                        <h2 className="text-4xl font-light text-gray-900 leading-tight mb-6">
                            Embark on a Kisima safari—authentic, enriching, and deeply connected to Africa.
                        </h2>
                        <p className="text-lg text-gray-700 mb-6">
                            Embark on an unforgettable East African safari where authentic adventure meets personalized comfort—crafted with care and local expertise.
                        </p>
                        <p className="text-lg text-gray-700 mb-8">
                            Venture into Kenya’s wild heart with seasoned guides who know the land intimately, and experience Africa the Kisima way.
                        </p>
                        <button className="bg-amber-600 text-white font-bold py-3 px-8  hover:bg-red-700 transition duration-300">
                            INQUIRE NOW
                        </button>
                    </div>
                    <div className="lg:w-1/2 mt-12 lg:mt-0 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <div className="relative h-64 md:h-80 overflow-hidden  mb-4">
                                <img
                                    src="https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=400&h=500&fit=crop&crop=center"
                                    alt="Coastal landscape"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Authentic heritage</h3>
                            <p className="text-gray-700">
                                With a deep-rooted lineage going back to 1858 and eleven generations of knowledge, we are sharing our home and not simply selling a destination.
                            </p>
                        </div>
                        <div>
                            <div className="relative h-64 md:h-80 overflow-hidden  mb-4">
                                <img
                                    src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=500&fit=crop&crop=center"
                                    alt="People interacting"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">All-African team</h3>
                            <p className="text-gray-700">
                                Our all-African team on the ground is dedicated to sharing authentic experiences and deeply enriched knowledge from a life lived on the continent.
                            </p>
                        </div>
                        <div>
                            <div className="relative h-64 md:h-80 overflow-hidden  mb-4">
                                <img
                                    src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400&h=500&fit=crop&crop=center"
                                    alt="Safari guide in the wild"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">A dedication to women's empowerment</h3>
                            <p className="text-gray-700">
                                Our vision, "If African women ran the wildlife, it would be threaded into every trip by an 85% female team infused with positivity and natural nurture."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomePageSection;