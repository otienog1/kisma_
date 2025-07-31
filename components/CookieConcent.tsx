'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { X, Settings, Cookie, Shield } from 'lucide-react'
import { Button } from './ui/Button'
import Modal from './ui/Modal'

interface CookieConsent {
    necessary: boolean
    analytics: boolean
    marketing: boolean
    preferences: boolean
}

const CookieConsent: React.FC = () => {
    const [showBanner, setShowBanner] = useState(false)
    const [showSettings, setShowSettings] = useState(false)
    const [consent, setConsent] = useState<CookieConsent>({
        necessary: true, // Always required
        analytics: false,
        marketing: false,
        preferences: false
    })

    useEffect(() => {
        // Check if user has already given consent
        const existingConsent = localStorage.getItem('cookie-consent')
        if (!existingConsent) {
            // Show banner after a short delay
            const timer = setTimeout(() => setShowBanner(true), 2000)
            return () => clearTimeout(timer)
        } else {
            // Load existing consent
            try {
                const parsedConsent = JSON.parse(existingConsent)
                setConsent(parsedConsent)
                loadCookies(parsedConsent)
            } catch (error) {
                console.error('Error parsing cookie consent:', error)
                setShowBanner(true)
            }
        }
    }, [])

    const loadCookies = (consentData: CookieConsent) => {
        // Load analytics cookies
        if (consentData.analytics && typeof window !== 'undefined') {
            // Google Analytics example
            if (process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID) {
                const script = document.createElement('script')
                script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`
                script.async = true
                document.head.appendChild(script)

                window.gtag = window.gtag || function (...args: any[]) {
                    (window.dataLayer = window.dataLayer || []).push(args)
                }

                window.gtag('js', new Date())
                window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID)
            }
        }

        // Load marketing cookies
        if (consentData.marketing && typeof window !== 'undefined') {
            // Facebook Pixel example
            if (process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID) {
                // Load Facebook Pixel
            }

            // Other marketing tools
        }

        // Load preference cookies
        if (consentData.preferences) {
            // Theme preferences, language settings, etc.
        }
    }

    const saveConsent = (consentData: CookieConsent) => {
        localStorage.setItem('cookie-consent', JSON.stringify(consentData))
        localStorage.setItem('cookie-consent-date', new Date().toISOString())
        setConsent(consentData)
        loadCookies(consentData)
        setShowBanner(false)
        setShowSettings(false)
    }

    const acceptAll = () => {
        const allConsent = {
            necessary: true,
            analytics: true,
            marketing: true,
            preferences: true
        }
        saveConsent(allConsent)
    }

    const acceptNecessary = () => {
        const necessaryOnly = {
            necessary: true,
            analytics: false,
            marketing: false,
            preferences: false
        }
        saveConsent(necessaryOnly)
    }

    const handleCustomConsent = () => {
        saveConsent(consent)
    }

    const updateConsent = (type: keyof CookieConsent, value: boolean) => {
        setConsent(prev => ({ ...prev, [type]: value }))
    }

    if (!showBanner) return null

    return (
        <>
            {/* Cookie Banner */}
            <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                            <Cookie className="w-6 h-6 text-amber-600" />
                        </div>

                        <div className="flex-1 min-w-0">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                We use cookies to enhance your experience
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                We use cookies and similar technologies to provide the best experience on our website.
                                Some are necessary for the site to function, while others help us understand how you use our site
                                and improve your experience. You can customize your preferences or accept all cookies.
                            </p>
                        </div>

                        <div className="flex-shrink-0 flex flex-col sm:flex-row gap-2">
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => setShowSettings(true)}
                                leftIcon={<Settings className="w-4 h-4" />}
                            >
                                Customize
                            </Button>
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={acceptNecessary}
                            >
                                Necessary Only
                            </Button>
                            <Button
                                variant="primary"
                                size="sm"
                                onClick={acceptAll}
                            >
                                Accept All
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Cookie Settings Modal */}
            <Modal
                isOpen={showSettings}
                onClose={() => setShowSettings(false)}
                title="Cookie Preferences"
                size="lg"
            >
                <div className="p-6 space-y-6">
                    <div className="text-gray-600">
                        <p className="mb-4">
                            Manage your cookie preferences below. You can enable or disable different types of cookies.
                            Note that disabling some cookies may affect your experience on our website.
                        </p>
                    </div>

                    {/* Necessary Cookies */}
                    <div className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-start justify-between">
                            <div className="flex-1">
                                <div className="flex items-center space-x-2 mb-2">
                                    <Shield className="w-5 h-5 text-green-600" />
                                    <h4 className="font-semibold text-gray-900">Necessary Cookies</h4>
                                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Always Active</span>
                                </div>
                                <p className="text-sm text-gray-600">
                                    These cookies are essential for the website to function properly. They enable basic functionality
                                    like navigation, form submission, and security features.
                                </p>
                            </div>
                            <div className="ml-4">
                                <div className="w-12 h-6 bg-green-600 rounded-full relative">
                                    <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Analytics Cookies */}
                    <div className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-start justify-between">
                            <div className="flex-1">
                                <h4 className="font-semibold text-gray-900 mb-2">Analytics Cookies</h4>
                                <p className="text-sm text-gray-600">
                                    These cookies help us understand how visitors interact with our website by collecting
                                    and reporting information anonymously. This helps us improve our website.
                                </p>
                            </div>
                            <div className="ml-4">
                                <button
                                    onClick={() => updateConsent('analytics', !consent.analytics)}
                                    className={`w-12 h-6 rounded-full relative transition-colors ${consent.analytics ? 'bg-amber-600' : 'bg-gray-300'
                                        }`}
                                >
                                    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${consent.analytics ? 'right-1' : 'left-1'
                                        }`}></div>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Marketing Cookies */}
                    <div className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-start justify-between">
                            <div className="flex-1">
                                <h4 className="font-semibold text-gray-900 mb-2">Marketing Cookies</h4>
                                <p className="text-sm text-gray-600">
                                    These cookies are used to track visitors across websites and display ads that are
                                    relevant and engaging. They may be set by us or third-party advertising partners.
                                </p>
                            </div>
                            <div className="ml-4">
                                <button
                                    onClick={() => updateConsent('marketing', !consent.marketing)}
                                    className={`w-12 h-6 rounded-full relative transition-colors ${consent.marketing ? 'bg-amber-600' : 'bg-gray-300'
                                        }`}
                                >
                                    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${consent.marketing ? 'right-1' : 'left-1'
                                        }`}></div>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Preference Cookies */}
                    <div className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-start justify-between">
                            <div className="flex-1">
                                <h4 className="font-semibold text-gray-900 mb-2">Preference Cookies</h4>
                                <p className="text-sm text-gray-600">
                                    These cookies allow the website to remember choices you make and provide enhanced,
                                    more personal features like language selection and region preferences.
                                </p>
                            </div>
                            <div className="ml-4">
                                <button
                                    onClick={() => updateConsent('preferences', !consent.preferences)}
                                    className={`w-12 h-6 rounded-full relative transition-colors ${consent.preferences ? 'bg-amber-600' : 'bg-gray-300'
                                        }`}
                                >
                                    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${consent.preferences ? 'right-1' : 'left-1'
                                        }`}></div>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Privacy Policy Link */}
                    <div className="text-center">
                        <p className="text-sm text-gray-600">
                            For more information about how we use cookies, please read our{' '}
                            <Link href="/privacy" className="text-amber-600 hover:text-amber-700 underline">
                                Privacy Policy
                            </Link>
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
                        <Button
                            variant="outline"
                            onClick={acceptNecessary}
                            fullWidth
                        >
                            Accept Necessary Only
                        </Button>
                        <Button
                            variant="primary"
                            onClick={handleCustomConsent}
                            fullWidth
                        >
                            Save Preferences
                        </Button>
                        <Button
                            variant="primary"
                            onClick={acceptAll}
                            fullWidth
                        >
                            Accept All
                        </Button>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default CookieConsent

// Declare global gtag function for TypeScript
declare global {
    interface Window {
        gtag: (...args: any[]) => void
        dataLayer: any[]
    }
}