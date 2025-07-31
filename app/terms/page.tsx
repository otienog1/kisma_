import { Metadata } from 'next'
import Link from 'next/link'
import { FileText, Scale, Shield, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Terms of Service | Kisima Safaris',
    description: 'Read the terms and conditions for booking safari services with Kisima Safaris. Understand your rights and responsibilities.',
    robots: 'index, follow'
}

export default function TermsOfServicePage() {
    const lastUpdated = "January 15, 2025"

    return (
        <div className="min-h-screen pt-20">
            {/* Hero Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8">
                        <div className="flex justify-center mb-4">
                            <Scale className="w-16 h-16 text-amber-600" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Terms of Service
                        </h1>
                        <p className="text-xl text-gray-600">
                            Please read these terms carefully before using our services or booking a safari with us.
                        </p>
                        <p className="text-sm text-gray-500 mt-4">
                            Last updated: {lastUpdated}
                        </p>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="prose prose-lg max-w-none">

                        {/* Introduction */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                These Terms of Service ("Terms") govern your use of the Kisima Safaris website and services. By accessing our website, booking our services, or engaging with us in any way, you agree to be bound by these Terms.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                If you do not agree with any part of these Terms, please do not use our website or services.
                            </p>
                        </div>

                        {/* Company Information */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Company Information</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Kisima Safaris is a registered tour operator in Kenya, licensed to provide safari and travel services throughout East Africa. Our company details:
                            </p>
                            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-1">
                                <li>Company Name: Kisima Safaris Limited</li>
                                <li>Registration Number: [Registration Number]</li>
                                <li>Licensed Tour Operator: License No. [License Number]</li>
                                <li>Address: Westlands Business District, Nairobi, Kenya</li>
                                <li>Contact: info@kisimasafaris.com | +254 (0) 721 123 456</li>
                            </ul>
                        </div>

                        {/* Services */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Our Services</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Kisima Safaris provides the following services:
                            </p>
                            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-1">
                                <li>Wildlife safari tours in Kenya and East Africa</li>
                                <li>Mountain climbing expeditions (Mount Kenya, Kilimanjaro)</li>
                                <li>Cultural and community tourism experiences</li>
                                <li>Accommodation and transportation arrangements</li>
                                <li>Travel consultation and itinerary planning</li>
                                <li>Group and private tour packages</li>
                            </ul>
                        </div>

                        {/* Booking Terms */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Booking Terms and Conditions</h2>

                            <h3 className="text-xl font-semibold text-gray-900 mb-3">4.1 Booking Process</h3>
                            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-1">
                                <li>All bookings must be confirmed in writing with a signed contract</li>
                                <li>A deposit is required to secure your booking</li>
                                <li>Full payment is due as specified in your booking agreement</li>
                                <li>Bookings are subject to availability and confirmation</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-900 mb-3">4.2 Payment Terms</h3>
                            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-1">
                                <li>Deposit: 30% of total cost due upon booking confirmation</li>
                                <li>Balance: Due 45 days before travel date</li>
                                <li>Accepted payment methods: Bank transfer, credit card, PayPal</li>
                                <li>All prices are in USD unless otherwise specified</li>
                                <li>Prices may be subject to change due to external factors</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-900 mb-3">4.3 Travel Documents</h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Travelers are responsible for ensuring they have valid passports, visas, and any required health certificates. We can assist with information but are not responsible for any issues arising from inadequate documentation.
                            </p>
                        </div>

                        {/* Cancellation Policy */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cancellation and Refund Policy</h2>

                            <h3 className="text-xl font-semibold text-gray-900 mb-3">5.1 Cancellation by Client</h3>
                            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-1">
                                <li>More than 60 days before travel: Full refund minus 10% administrative fee</li>
                                <li>30-60 days before travel: 50% refund</li>
                                <li>15-29 days before travel: 25% refund</li>
                                <li>Less than 15 days before travel: No refund</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-900 mb-3">5.2 Cancellation by Kisima Safaris</h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                If we cancel your trip due to circumstances within our control, we will provide a full refund or alternative arrangements. In cases of force majeure (natural disasters, political instability, etc.), we will work with you to reschedule or provide partial refunds based on recoverable costs.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-900 mb-3">5.3 Travel Insurance</h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                We strongly recommend comprehensive travel insurance. We can assist you in obtaining suitable coverage, but insurance decisions are your responsibility.
                            </p>
                        </div>

                        {/* Responsibilities */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Responsibilities and Liability</h2>

                            <h3 className="text-xl font-semibold text-gray-900 mb-3">6.1 Our Responsibilities</h3>
                            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-1">
                                <li>Provide services as described in your itinerary</li>
                                <li>Ensure professional, licensed guides and safe vehicles</li>
                                <li>Maintain appropriate insurance coverage</li>
                                <li>Assist with emergency situations during your trip</li>
                                <li>Operate in accordance with local laws and regulations</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-900 mb-3">6.2 Client Responsibilities</h3>
                            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-1">
                                <li>Provide accurate personal and health information</li>
                                <li>Follow guide instructions and safety guidelines</li>
                                <li>Respect local customs, wildlife, and environments</li>
                                <li>Maintain appropriate travel insurance</li>
                                <li>Arrive with required travel documents</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-900 mb-3">6.3 Limitation of Liability</h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                While we take every precaution to ensure your safety and satisfaction, travel involves inherent risks. Our liability is limited to the cost of services provided. We are not liable for delays, changes, or cancellations due to weather, political situations, or other circumstances beyond our control.
                            </p>
                        </div>

                        {/* Safety and Health */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Health and Safety</h2>
                            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-1">
                                <li>Clients must declare any medical conditions that may affect their ability to participate</li>
                                <li>We recommend consulting a travel medicine specialist before travel</li>
                                <li>Certain activities may have age or fitness requirements</li>
                                <li>We reserve the right to exclude participants who pose a safety risk</li>
                                <li>Emergency evacuation insurance is strongly recommended</li>
                            </ul>
                        </div>

                        {/* Intellectual Property */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Intellectual Property</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                All content on our website, including text, images, logos, and multimedia, is owned by Kisima Safaris or licensed to us. You may not use our content without written permission.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Photos taken during your safari may be used for promotional purposes unless you explicitly opt out. We will always credit and seek permission for identifiable images.
                            </p>
                        </div>

                        {/* Force Majeure */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Force Majeure</h2>
                            <p className="text-gray-600 leading-relaxed">
                                Neither party shall be liable for any failure to perform due to circumstances beyond reasonable control, including but not limited to natural disasters, war, terrorism, government actions, pandemics, or other events that make performance impossible or impracticable.
                            </p>
                        </div>

                        {/* Dispute Resolution */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Dispute Resolution</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                We encourage direct communication to resolve any concerns. If a dispute cannot be resolved amicably:
                            </p>
                            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-1">
                                <li>Disputes will be governed by the laws of Kenya</li>
                                <li>Courts of Nairobi, Kenya shall have exclusive jurisdiction</li>
                                <li>Mediation may be pursued before formal legal proceedings</li>
                            </ul>
                        </div>

                        {/* Privacy and Data Protection */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Privacy and Data Protection</h2>
                            <p className="text-gray-600 leading-relaxed">
                                Your privacy is important to us. Please review our <Link href="/privacy" className="text-amber-600 hover:text-amber-700 underline">Privacy Policy</Link> to understand how we collect, use, and protect your personal information.
                            </p>
                        </div>

                        {/* Changes to Terms */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Changes to Terms</h2>
                            <p className="text-gray-600 leading-relaxed">
                                We reserve the right to modify these Terms at any time. Changes will be posted on our website with an updated effective date. Continued use of our services after changes constitutes acceptance of the new Terms.
                            </p>
                        </div>

                        {/* Contact Information */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Information</h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                If you have questions about these Terms, please contact us:
                            </p>

                            <div className="bg-gray-50 p-6 rounded-xl">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-2">General Inquiries</h4>
                                        <p className="text-gray-600">info@kisimasafaris.com</p>
                                        <p className="text-gray-600">+254 (0) 721 123 456</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 mb-2">Legal Department</h4>
                                        <p className="text-gray-600">legal@kisimasafaris.com</p>
                                        <p className="text-gray-600">+254 (0) 734 567 890</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Important Notice */}
            <section className="py-12 bg-amber-50 border-t border-amber-200">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-start space-x-4">
                        <AlertTriangle className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-semibold text-gray-900 mb-2">Important Notice</h3>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                These terms constitute a legally binding agreement. Please ensure you understand all terms before booking.
                                We recommend consulting with a legal advisor if you have any concerns about these terms.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Links */}
            <section className="py-12 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Related Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Link
                            href="/privacy"
                            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center group"
                        >
                            <Shield className="w-8 h-8 text-amber-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                            <h4 className="font-semibold text-gray-900 mb-2">Privacy Policy</h4>
                            <p className="text-gray-600 text-sm">How we protect your information</p>
                        </Link>

                        <Link
                            href="/contact"
                            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center group"
                        >
                            <FileText className="w-8 h-8 text-amber-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                            <h4 className="font-semibold text-gray-900 mb-2">Contact Us</h4>
                            <p className="text-gray-600 text-sm">Questions about our terms</p>
                        </Link>

                        <Link
                            href="/about"
                            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center group"
                        >
                            <Scale className="w-8 h-8 text-amber-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                            <h4 className="font-semibold text-gray-900 mb-2">About Us</h4>
                            <p className="text-gray-600 text-sm">Learn about our company</p>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}