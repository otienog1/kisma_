import { Metadata } from 'next'
import Image from 'next/image'
import { Award, Users, Globe, Heart, Shield, Star, Leaf, Camera } from 'lucide-react'

export const metadata: Metadata = {
    title: 'About Us | Kisima Tours and Safaris',
    description: 'Learn about Kisima Tours and Safaris - a trusted adventure management company established in 2002, specializing in tailor-made safari programs and authentic African experiences.',
    keywords: 'about Kisima Tours and Safaris, Kenya safari company, KATO member, adventure management, tailor-made safaris',
}

const AboutPage = () => {
    const stats = [
        { number: "22+", label: "Years of Experience", icon: <Award className="w-6 h-6" /> },
        { number: "KATO", label: "Member Since 2006", icon: <Shield className="w-6 h-6" /> },
        { number: "100%", label: "Personalized Service", icon: <Users className="w-6 h-6" /> },
        { number: "Licensed", label: "Tourism & Wildlife", icon: <Heart className="w-6 h-6" /> }
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
            year: "2002",
            title: "Kisima Tours and Safaris Established",
            description: "Founded by seasoned travel professionals with a passion for Africa's iconic landscapes and authentic experiences."
        },
        {
            year: "2006",
            title: "Official Incorporation & KATO Membership",
            description: "Officially incorporated and became proud members of the Kenya Association of Tour Operators (KATO)."
        },
        {
            year: "2010",
            title: "Ministry Registration",
            description: "Fully registered with the Ministry of Tourism and Wildlife, ensuring compliance with all regulatory standards."
        },
        {
            year: "2015",
            title: "Kenya Tourism Federation Member",
            description: "Joined the Kenya Tourism Federation, further cementing our commitment to industry excellence."
        },
        {
            year: "2020",
            title: "Expanded Service Portfolio",
            description: "Diversified to include team-building activities, conference arrangements, and special interest tours."
        },
        {
            year: "2024",
            title: "Digital Transformation",
            description: "Launched modern digital platforms to enhance customer experience while maintaining our personalized service approach."
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
                                About <span className="text-amber-400">Kisima Tours and Safaris</span>
                            </h1>
                            <p className="text-xl text-gray-300 leading-relaxed mb-8">
                                A trusted adventure management company owned and operated by seasoned travel professionals.
                                Since 2002, we've combined our passion for exploration with Africa's most iconic landscapes
                                to create unforgettable safari experiences.
                            </p>
                        </div>
                        <div className="relative">
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
                            {/* <img
                                src="https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1600&q=80"
                                alt="African landscape"
                                className="rounded-2xl shadow-2xl"
                            /> */}
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
                                    Kisima Tours and Safaris is a trusted adventure management company owned and operated by seasoned travel professionals.
                                    Established in 2002 and incorporated in 2006, we've combined our passion for exploration with Africa's most iconic
                                    landscapes to create unforgettable safari experiences.
                                </p>
                                <p>
                                    We specialize in crafting tailor-made safari programs, incentive trips, special interest tours, team-building activities,
                                    and conference arrangements. Every itinerary is personalized to meet your specific needs—because who you travel with
                                    matters just as much as where you go.
                                </p>
                                <p>
                                    Kisima is fully registered with the Ministry of Tourism and Wildlife, and we are proud members of the Kenya Association
                                    of Tour Operators (KATO) and the Kenya Tourism Federation. We operate with integrity and uphold high ethical standards
                                    in all our services.
                                </p>
                                <p>
                                    When you choose Kisima, you're partnering with professionals committed to delivering a seamless, elegant, and truly
                                    African safari adventure—one that stays with you for a lifetime.
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
                                <div className="text-2xl font-bold">22+</div>
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

            {/* Meet Our Owner */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Meet Our <span className="text-gradient">Owner</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            The visionary leader behind Kisima Tours and Safaris
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=600&q=80"
                                alt="Hanna Ng'ang'a"
                                className="shadow-xl w-full max-w-sm mx-auto"
                            />
                            <div className="absolute -bottom-6 -right-6 bg-amber-600 text-white p-4 rounded-xl shadow-lg">
                                <div className="text-lg font-bold">Owner & CEO</div>
                                <div className="text-sm opacity-90">Since 2002</div>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-4">Hanna Ng'ang'a</h3>
                            <p className="text-xl text-amber-600 font-semibold mb-6">Founder, Owner & CEO</p>

                            <div className="space-y-6 text-gray-600 leading-relaxed">
                                <p>
                                    Hanna Ng'ang'a is the visionary founder and owner of Kisima Tours and Safaris. With over two decades
                                    of experience in the tourism industry, she has built the company from the ground up, establishing it
                                    as one of Kenya's most trusted adventure management companies.
                                </p>
                                <p>
                                    Her passion for Africa's landscapes and wildlife, combined with her commitment to authentic experiences,
                                    has shaped Kisima's reputation for delivering personalized, elegant safari adventures. Under her leadership,
                                    the company has maintained its core values of integrity, excellence, and genuine care for both travelers
                                    and local communities.
                                </p>
                                <p>
                                    Hanna's dedication to sustainable tourism practices and her deep understanding of Kenya's diverse ecosystems
                                    ensure that every safari experience creates lasting memories while supporting conservation efforts and
                                    local communities.
                                </p>
                            </div>

                            <div className="mt-8 grid grid-cols-2 gap-6">
                                <div className="bg-gray-50 p-4 rounded-xl">
                                    <div className="text-2xl font-bold text-amber-600">22+</div>
                                    <div className="text-sm text-gray-600">Years of Leadership</div>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-xl">
                                    <div className="text-2xl font-bold text-amber-600">100%</div>
                                    <div className="text-sm text-gray-600">Commitment to Excellence</div>
                                </div>
                            </div>
                        </div>
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