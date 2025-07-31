import { Metadata } from 'next'
import Link from 'next/link'
import { Shield, Mail, Phone, FileText } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Privacy Policy | Kisima Safaris',
    description: 'Learn how Kisima Safaris protects and handles your personal information. Our comprehensive privacy policy explains our data practices.',
    robots: 'index, follow'
}

export default function PrivacyPolicyPage() {
    const lastUpdated = "January 15, 2025"

    return (
        <div className="min-h-screen pt-20">
            {/* Hero Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8">
                        <div className="flex justify-center mb-4">
                            <Shield className="w-16 h-16 text-amber-600" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Privacy Policy
                        </h1>
                        <p className="text-xl text-gray-600">
                            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
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
                                Kisima Safaris ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or communicate with us.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                By using our website or services, you consent to the data practices described in this policy. If you do not agree with the practices described in this policy, please do not use our website or services.
                            </p>
                        </div>

                        {/* Information We Collect */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>

                            <h3 className="text-xl font-semibold text-gray-900 mb-3">2.1 Personal Information</h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                We may collect the following types of personal information:
                            </p>
                            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-1">
                                <li>Name, email address, phone number, and postal address</li>
                                <li>Travel preferences, dates, and destinations</li>
                                <li>Passport information and emergency contact details</li>
                                <li>Payment information (processed securely through third-party payment processors)</li>
                                <li>Dietary requirements and accessibility needs</li>
                                <li>Photos and testimonials (with your consent)</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-900 mb-3">2.2 Automatically Collected Information</h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                When you visit our website, we automatically collect:
                            </p>
                            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-1">
                                <li>IP address and browser information</li>
                                <li>Device type and operating system</li>
                                <li>Pages visited and time spent on our website</li>
                                <li>Referring website and search terms used</li>
                                <li>Cookies and similar tracking technologies</li>
                            </ul>
                        </div>

                        {/* How We Use Information */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                We use your information for the following purposes:
                            </p>
                            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-1">
                                <li>To provide and manage safari services and bookings</li>
                                <li>To communicate with you about your trips and our services</li>
                                <li>To process payments and send booking confirmations</li>
                                <li>To improve our website and services</li>
                                <li>To send marketing communications (with your consent)</li>
                                <li>To comply with legal obligations and protect our rights</li>
                                <li>To ensure the safety and security of our travelers</li>
                            </ul>
                        </div>

                        {/* Information Sharing */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Information Sharing and Disclosure</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
                            </p>

                            <h3 className="text-xl font-semibold text-gray-900 mb-3">4.1 Service Providers</h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                We work with trusted third-party service providers who assist us in operating our business, including:
                            </p>
                            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-1">
                                <li>Accommodation providers and transportation companies</li>
                                <li>Payment processors and financial institutions</li>
                                <li>Email marketing platforms and communication services</li>
                                <li>Website hosting and analytics providers</li>
                                <li>Travel insurance companies</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-900 mb-3">4.2 Legal Requirements</h3>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                We may disclose your information if required by law, legal process, or government request, or to protect the rights, property, or safety of Kisima Safaris, our customers, or others.
                            </p>
                        </div>

                        {/* Data Security */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                            </p>
                            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-1">
                                <li>SSL encryption for data transmission</li>
                                <li>Secure servers and data storage</li>
                                <li>Regular security assessments and updates</li>
                                <li>Limited access to personal information on a need-to-know basis</li>
                                <li>Staff training on data protection and privacy</li>
                            </ul>
                            <p className="text-gray-600 leading-relaxed">
                                However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
                            </p>
                        </div>

                        {/* Cookies and Tracking */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookies and Tracking Technologies</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Our website uses cookies and similar technologies to enhance your browsing experience. We use:
                            </p>
                            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-1">
                                <li><strong>Essential cookies:</strong> Required for website functionality</li>
                                <li><strong>Performance cookies:</strong> Help us understand how visitors use our website</li>
                                <li><strong>Marketing cookies:</strong> Used to deliver relevant advertisements</li>
                                <li><strong>Preference cookies:</strong> Remember your settings and preferences</li>
                            </ul>
                            <p className="text-gray-600 leading-relaxed">
                                You can control cookies through your browser settings. However, disabling certain cookies may affect website functionality.
                            </p>
                        </div>

                        {/* Your Rights */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Your Rights and Choices</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Depending on your location, you may have the following rights regarding your personal information:
                            </p>
                            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-1">
                                <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                                <li><strong>Portability:</strong> Request transfer of your information to another service</li>
                                <li><strong>Objection:</strong> Object to processing of your information for direct marketing</li>
                                <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances</li>
                            </ul>
                            <p className="text-gray-600 leading-relaxed">
                                To exercise these rights, please contact us using the information provided at the end of this policy.
                            </p>
                        </div>

                        {/* Data Retention */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Data Retention</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law. Specifically:
                            </p>
                            <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-1">
                                <li>Booking and travel information: 7 years for tax and legal compliance</li>
                                <li>Marketing communications: Until you unsubscribe or opt out</li>
                                <li>Website analytics: 2 years maximum</li>
                                <li>Customer service communications: 3 years</li>
                            </ul>
                        </div>

                        {/* Third-Party Links */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Third-Party Links</h2>
                            <p className="text-gray-600 leading-relaxed">
                                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party websites you visit.
                            </p>
                        </div>

                        {/* International Transfers */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. International Data Transfers</h2>
                            <p className="text-gray-600 leading-relaxed">
                                Your information may be transferred to and processed in countries other than your country of residence. We ensure that adequate safeguards are in place to protect your information in accordance with applicable data protection laws.
                            </p>
                        </div>

                        {/* Changes to Policy */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to This Privacy Policy</h2>
                            <p className="text-gray-600 leading-relaxed">
                                We may update this privacy policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the "last updated" date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
                            </p>
                        </div>

                        {/* Contact Information */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Us</h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                If you have any questions about this privacy policy or our data practices, please contact us:
                            </p>

                            <div className="bg-gray-50 p-6 rounded-xl">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="flex items-center space-x-3">
                                        <Mail className="w-5 h-5 text-amber-600" />
                                        <div>
                                            <p className="font-semibold text-gray-900">Email</p>
                                            <p className="text-gray-600">privacy@kisimasafaris.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Phone className="w-5 h-5 text-amber-600" />
                                        <div>
                                            <p className="font-semibold text-gray-900">Phone</p>
                                            <p className="text-gray-600">+254 (0) 721 123 456</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6 flex items-start space-x-3">
                                    <FileText className="w-5 h-5 text-amber-600 mt-1" />
                                    <div>
                                        <p className="font-semibold text-gray-900">Postal Address</p>
                                        <p className="text-gray-600">
                                            Kisima Safaris<br />
                                            Westlands Business District<br />
                                            P.O. Box 12345<br />
                                            Nairobi 00100, Kenya
                                        </p>
                                    </div>
                                </div>
                            </div>
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
                            href="/terms"
                            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center group"
                        >
                            <FileText className="w-8 h-8 text-amber-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                            <h4 className="font-semibold text-gray-900 mb-2">Terms of Service</h4>
                            <p className="text-gray-600 text-sm">Read our terms and conditions</p>
                        </Link>

                        <Link
                            href="/cookies"
                            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center group"
                        >
                            <Shield className="w-8 h-8 text-amber-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                            <h4 className="font-semibold text-gray-900 mb-2">Cookie Policy</h4>
                            <p className="text-gray-600 text-sm">Learn about our cookie usage</p>
                        </Link>

                        <Link
                            href="/contact"
                            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center group"
                        >
                            <Mail className="w-8 h-8 text-amber-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                            <h4 className="font-semibold text-gray-900 mb-2">Contact Us</h4>
                            <p className="text-gray-600 text-sm">Get in touch with questions</p>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}