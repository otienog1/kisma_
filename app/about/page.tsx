import { Metadata } from 'next'
import Image from 'next/image'
import { Award, Users, Globe, Heart, Shield, Star, Leaf, Camera } from 'lucide-react'

export const metadata: Metadata = {
    title: 'About Us | Kisima Safaris',
    description: 'Learn about Kisima Safaris - Kenya\'s premier safari company with over 15 years of experience in creating unforgettable African adventures with sustainable tourism practices.',
    keywords: 'about Kisima Safaris, Kenya safari company, sustainable tourism, African adventures, safari experts',
}

const AboutPage = () => {
    const stats = [
        { number: "15+", label: "Years of Experience", icon: <Award className="w-6 h-6" /> },
        { number: "1000+", label: "Happy Travelers", icon: <Users className="w-6 h-6" /> },
        { number: "50+", label: "Destinations Covered", icon: <Globe className="w-6 h-6" /> },
        { number: "98%", label: "Customer Satisfaction", icon: <Heart className="w-6 h-6" /> }
    ]

    const values = [
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Safety & Excellence",
            description: "Your safety is our top priority. We maintain the highest standards in all our operations, from vehicle maintenance to guide training and emergency protocols."
        },
        {
            icon: <Leaf className="w-8 h-8" />,
            title: "Sustainable Tourism",
            description: "We believe in responsible tourism that protects wildlife, preserves environments, and benefits local communities for generations to come."
        },
        {
            icon: <Heart className="w-8 h-8" />,
            title: "Authentic Experiences",
            description: "We create genuine connections between our travelers and Africa's wildlife, landscapes, and cultures through immersive and respectful experiences."
        },
        {
            icon: <Star className="w-8 h-8" />,
            title: "Personalized Service",
            description: "Every safari is tailored to your unique preferences, ensuring your African adventure exceeds expectations and creates lasting memories."
        }
    ]

    const team = [
        {
            name: "John Kamau",
            role: "Founder & CEO",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
            bio: "With over 20 years in the tourism industry, John founded Kisima Safaris with a vision to showcase Africa's beauty while supporting local communities.",
            specialties: ["Strategic Planning", "Community Relations", "Sustainable Tourism"]
        },
        {
            name: "Sarah Njeri",
            role: "Safari Operations Manager",
            image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&q=80",
            bio: "Sarah ensures every safari runs smoothly, coordinating logistics and maintaining our high standards of service across all destinations.",
            specialties: ["Operations Management", "Quality Control", "Guest Relations"]
        },
        {
            name: "David Mwangi",
            role: "Head Safari Guide",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
            bio: "A passionate wildlife expert and photographer, David has guided safaris for over 15 years and knows Kenya's parks like the back of his hand.",
            specialties: ["Wildlife Photography", "Animal Behavior", "Conservation"]
        },
        {
            name: "Grace Wanjiku",
            role: "Mountain Climbing Specialist",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
            bio: "Grace is a certified mountain guide who has summited Kilimanjaro over 100 times and specializes in making dreams of reaching Africa's peaks come true.",
            specialties: ["Mountain Guiding", "Safety Protocols", "High Altitude Training"]
        }
    ]

    const milestones = [
        {
            year: "2009",
            title: "Kisima Safaris Founded",
            description: "Started with a dream to share Africa's magic with the world while supporting local communities."
        },
        {
            year: "2012",
            title: "First Kilimanjaro Expedition",
            description: "Expanded services to include mountain climbing adventures on Africa's highest peak."
        },
        {
            year: "2015",
            title: "Sustainability Certification",
            description: "Received recognition for our commitment to sustainable and responsible tourism practices."
        },
        {
            year: "2018",
            title: "1000th Happy Traveler",
            description: "Celebrated serving over 1000 satisfied customers from around the world."
        },
        {
            year: "2021",
            title: "COVID-19 Recovery",
            description: "Adapted operations to ensure safe travel while supporting local communities during challenging times."
        },
        {
            year: "2024",
            title: "Digital Innovation",
            description: "Launched modern digital platforms to enhance customer experience and accessibility."
        }
    ]

    return (
        <div className="min-h-screen pt-20">
            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                    <img
                        src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1600&q=80"
                        alt="Kisima Safaris team"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-5xl md:text-6xl font-bold mb-6">
                                About <span className="text-amber-400">Kisima Safaris</span>
                            </h1>
                            <p className="text-xl text-gray-300 leading-relaxed mb-8">
                                For over 15 years, we've been creating unforgettable African adventures while
                                practicing sustainable tourism that benefits both travelers and local communities.
                            </p>
                            <div className="grid grid-cols-2 gap-6">
                                {stats.map((stat, index) => (
                                    <div key={index} className="text-center">
                                        <div className="flex items-center justify-center text-amber-400 mb-2">
                                            {stat.icon}
                                        </div>
                                        <div className="text-2xl font-bold mb-1">{stat.number}</div>
                                        <div className="text-sm text-gray-300">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1549366021-9f761d040a94?w=600&q=80"
                                alt="African landscape"
                                className="rounded-2xl shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Our <span className="text-gradient">Story</span>
                            </h2>
                            <div className="space-y-6 text-gray-600 leading-relaxed">
                                <p>
                                    Kisima Safaris was born from a deep love for Africa and a desire to share its incredible
                                    beauty with the world. Founded in 2009 by John Kamau, a passionate conservationist and
                                    tourism expert, our company started with a simple mission: to create authentic African
                                    experiences while supporting local communities and wildlife conservation.
                                </p>
                                <p>
                                    The name "Kisima" means "well" in Swahili, representing our role as a source of
                                    life-changing experiences and sustainable tourism practices. Just as a well provides
                                    essential water to a community, we aim to be an essential source of authentic African
                                    adventures that nourish the soul and create lasting positive impacts.
                                </p>
                                <p>
                                    Over the years, we've grown from a small local operation to Kenya's premier safari
                                    company, but we've never lost sight of our core values: excellence, sustainability,
                                    and genuine care for both our travelers and the communities we serve.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&q=80"
                                alt="Safari guide with wildlife"
                                className="rounded-2xl shadow-xl"
                            />
                            <div className="absolute -bottom-6 -right-6 bg-amber-600 text-white p-6 rounded-xl shadow-lg">
                                <div className="text-2xl font-bold">15+</div>
                                <div className="text-sm">Years of Excellence</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Our <span className="text-gradient">Values</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            These core values guide everything we do, from planning your safari to our daily operations
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover"
                            >
                                <div className="text-amber-600 mb-4">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Team */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Meet Our <span className="text-gradient">Team</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Our passionate team of safari experts, guides, and adventure specialists are here to make your African dreams come true
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group card-hover"
                            >
                                <div className="relative">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                                    <p className="text-amber-600 font-semibold mb-3">{member.role}</p>
                                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>

                                    <div className="space-y-1">
                                        <h4 className="text-sm font-semibold text-gray-900">Specialties:</h4>
                                        {member.specialties.map((specialty, idx) => (
                                            <div key={idx} className="text-xs text-gray-500 flex items-center">
                                                <div className="w-1 h-1 bg-amber-600 rounded-full mr-2"></div>
                                                {specialty}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Our <span className="text-gradient">Journey</span>
                        </h2>
                        <p className="text-lg text-gray-600">
                            Key milestones in our mission to become Kenya's premier safari company
                        </p>
                    </div>

                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-amber-600"></div>

                        {/* Timeline Items */}
                        <div className="space-y-12">
                            {milestones.map((milestone, index) => (
                                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                                    {/* Timeline Dot */}
                                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-amber-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                                    {/* Content */}
                                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                                        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                            <div className="text-2xl font-bold text-amber-600 mb-2">{milestone.year}</div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-2">{milestone.title}</h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">{milestone.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Sustainability */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&q=80"
                                alt="Conservation efforts"
                                className="rounded-2xl shadow-xl"
                            />
                        </div>
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Committed to <span className="text-gradient">Sustainability</span>
                            </h2>
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <Leaf className="w-6 h-6 text-amber-600 mt-1" />
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-2">Environmental Conservation</h3>
                                        <p className="text-gray-600">We actively support wildlife conservation initiatives and promote eco-friendly practices in all our operations.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <Users className="w-6 h-6 text-amber-600 mt-1" />
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-2">Community Support</h3>
                                        <p className="text-gray-600">Our tours directly benefit local communities through employment, cultural exchanges, and community development projects.</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <Heart className="w-6 h-6 text-amber-600 mt-1" />
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-2">Responsible Tourism</h3>
                                        <p className="text-gray-600">We educate travelers about conservation and ensure our activities have minimal environmental impact.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Join Our Conservation Mission
                    </h2>
                    <p className="text-xl mb-8 opacity-90">
                        When you travel with Kisima Safaris, you're not just going on an adventure -
                        you're supporting wildlife conservation and local communities.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/contact"
                            className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-colors"
                        >
                            Plan Your Sustainable Safari
                        </a>
                        <a
                            href="/sustainability"
                            className="border-2 border-white text-white hover:bg-white hover:text-amber-600 px-8 py-4 rounded-full font-semibold transition-colors"
                        >
                            Learn About Our Impact
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutPage