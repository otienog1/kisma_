'use client'

import React, { useState } from 'react'
import { Mail, Send, CheckCircle, AlertCircle, Gift, Star } from 'lucide-react'

interface NewsletterSignupProps {
    variant?: 'inline' | 'modal' | 'sidebar' | 'footer'
    showBenefits?: boolean
    className?: string
}

const NewsletterSignup: React.FC<NewsletterSignupProps> = ({
    variant = 'inline',
    showBenefits = true,
    className
}) => {
    const [email, setEmail] = useState('')
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
    const [message, setMessage] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!email || !email.includes('@')) {
            setStatus('error')
            setMessage('Please enter a valid email address')
            return
        }

        setStatus('loading')

        try {
            const response = await fetch('/api/newsletter', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    source: variant
                }),
            })

            const data = await response.json()

            if (response.ok) {
                setStatus('success')
                setMessage(data.message || 'Thank you for subscribing!')
                setEmail('')
            } else {
                setStatus('error')
                setMessage(data.error || 'Something went wrong. Please try again.')
            }
        } catch (error) {
            setStatus('error')
            setMessage('Network error. Please check your connection and try again.')
        }

        // Reset status after 5 seconds
        setTimeout(() => {
            setStatus('idle')
            setMessage('')
        }, 5000)
    }

    const benefits = [
        'Exclusive safari deals and discounts',
        'First access to new destinations',
        'Wildlife photography tips',
        'Seasonal travel recommendations',
        'Conservation updates from the field'
    ]

    // Inline variant (for homepage, etc.)
    if (variant === 'inline') {
        return (
            <div className='bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-8 text-white'>
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <div className="flex items-center space-x-2 mb-4">
                                <Mail className="w-8 h-8" />
                                <h3 className="text-2xl font-bold">Stay Connected</h3>
                            </div>
                            <p className="text-xl opacity-90 mb-6">
                                Get the latest safari deals, wildlife updates, and travel inspiration delivered to your inbox.
                            </p>

                            {showBenefits && (
                                <ul className="space-y-2 opacity-90">
                                    {benefits.slice(0, 3).map((benefit, index) => (
                                        <li key={index} className="flex items-center space-x-2 text-sm">
                                            <CheckCircle className="w-4 h-4 flex-shrink-0" />
                                            <span>{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        <div>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="flex">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email address"
                                        className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                                        disabled={status === 'loading'}
                                    />
                                    <button
                                        type="submit"
                                        disabled={status === 'loading'}
                                        className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-r-lg font-semibold transition-colors disabled:opacity-50 flex items-center"
                                    >
                                        {status === 'loading' ? (
                                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                        ) : (
                                            <>
                                                <Send className="w-4 h-4 mr-2" />
                                                Subscribe
                                            </>
                                        )}
                                    </button>
                                </div>

                                {/* Status Messages */}
                                {status === 'success' && (
                                    <div className="flex items-center space-x-2 text-green-100">
                                        <CheckCircle className="w-5 h-5" />
                                        <span className="text-sm">{message}</span>
                                    </div>
                                )}

                                {status === 'error' && (
                                    <div className="flex items-center space-x-2 text-red-100">
                                        <AlertCircle className="w-5 h-5" />
                                        <span className="text-sm">{message}</span>
                                    </div>
                                )}

                                <p className="text-xs opacity-75">
                                    By subscribing, you agree to receive emails from Kisima Safaris.
                                    You can unsubscribe at any time. See our{' '}
                                    <a href="/privacy" className="underline hover:no-underline">
                                        Privacy Policy
                                    </a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    // Footer variant
    if (variant === 'footer') {
        return (
            <div>
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="mb-4 md:mb-0">
                        <h4 className="text-lg font-semibold mb-2">Stay Updated</h4>
                        <p className="text-gray-400">Get the latest safari deals and African adventure tips</p>
                    </div>

                    <form onSubmit={handleSubmit} className="flex w-full md:w-auto">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="bg-gray-800 border border-gray-700 px-4 py-3 rounded-l-lg focus:border-amber-400 focus:outline-none flex-1 md:w-64 text-white placeholder-gray-400"
                            disabled={status === 'loading'}
                        />
                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="bg-amber-600 hover:bg-amber-700 px-6 py-3 rounded-r-lg font-semibold transition-colors disabled:opacity-50"
                        >
                            {status === 'loading' ? (
                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                            ) : (
                                'Subscribe'
                            )}
                        </button>
                    </form>
                </div>

                {/* Status Messages */}
                {message && (
                    <div className={`mt-3 flex items-center space-x-2 text-sm' ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                        {status === 'success' ? (
                            <CheckCircle className="w-4 h-4" />
                        ) : (
                            <AlertCircle className="w-4 h-4" />
                        )}
                        <span>{message}</span>
                    </div>
                )}
            </div>
        )
    }

    // Modal variant
    if (variant === 'modal') {
        return (
            <div className='bg-white p-8 rounded-2xl'>
                <div className="text-center mb-6">
                    <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Gift className="w-8 h-8 text-amber-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Get Exclusive Safari Deals!
                    </h3>
                    <p className="text-gray-600">
                        Subscribe to our newsletter and receive special offers, travel tips, and wildlife updates.
                    </p>
                </div>

                {showBenefits && (
                    <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">What you'll get:</h4>
                        <ul className="space-y-2">
                            {benefits.map((benefit, index) => (
                                <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                                    <Star className="w-4 h-4 text-amber-500 flex-shrink-0" />
                                    <span>{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email address"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                            disabled={status === 'loading'}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-lg font-semibold transition-colors disabled:opacity-50 flex items-center justify-center"
                    >
                        {status === 'loading' ? (
                            <>
                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                Subscribing...
                            </>
                        ) : (
                            <>
                                <Mail className="w-5 h-5 mr-2" />
                                Subscribe to Newsletter
                            </>
                        )}
                    </button>

                    {/* Status Messages */}
                    {status === 'success' && (
                        <div className="flex items-center space-x-2 text-green-600 bg-green-50 p-3 rounded-lg">
                            <CheckCircle className="w-5 h-5" />
                            <span className="text-sm">{message}</span>
                        </div>
                    )}

                    {status === 'error' && (
                        <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg">
                            <AlertCircle className="w-5 h-5" />
                            <span className="text-sm">{message}</span>
                        </div>
                    )}

                    <p className="text-xs text-gray-500 text-center">
                        No spam, unsubscribe at any time. See our{' '}
                        <a href="/privacy" className="text-amber-600 hover:underline">
                            Privacy Policy
                        </a>
                    </p>
                </form>
            </div>
        )
    }

    // Sidebar variant
    return (
        <div className='bg-amber-50 p-6 rounded-xl border border-amber-200'>
            <div className="text-center mb-4">
                <Mail className="w-8 h-8 text-amber-600 mx-auto mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">Safari Newsletter</h4>
                <p className="text-sm text-gray-600">
                    Weekly updates from the wild
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                    disabled={status === 'loading'}
                />

                <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2 rounded-lg text-sm font-semibold transition-colors disabled:opacity-50"
                >
                    {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
                </button>

                {message && (
                    <div className={`text-xs p-2 rounded ${status === 'success' ? 'text-green-700 bg-green-100' : 'text-amber-700 bg-red-100'}
                    `}>
                        {message}
                    </div>
                )}
            </form>
        </div>
    )
}

// Newsletter popup component
interface NewsletterPopupProps {
    isOpen: boolean
    onClose: () => void
}

export const NewsletterPopup: React.FC<NewsletterPopupProps> = ({
    isOpen,
    onClose
}) => {
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
            <div className="relative max-w-md w-full">
                <button
                    onClick={onClose}
                    className="absolute -top-3 -right-3 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors z-10"
                >
                    <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>

                <NewsletterSignup variant="modal" showBenefits={true} />
            </div>
        </div>
    )
}

// Hook for managing newsletter popup
export const useNewsletterPopup = () => {
    const [isOpen, setIsOpen] = useState(false)

    React.useEffect(() => {
        // Check if user has already subscribed or dismissed
        const hasSubscribed = localStorage.getItem('newsletter-subscribed')
        const hasDismissed = localStorage.getItem('newsletter-dismissed')
        const lastShown = localStorage.getItem('newsletter-last-shown')

        if (hasSubscribed || hasDismissed) return

        // Don't show again if shown recently (within 7 days)
        if (lastShown) {
            const daysSinceLastShown = (Date.now() - parseInt(lastShown)) / (1000 * 60 * 60 * 24)
            if (daysSinceLastShown < 7) return
        }

        // Show popup after user has been on site for 30 seconds
        const timer = setTimeout(() => {
            setIsOpen(true)
            localStorage.setItem('newsletter-last-shown', Date.now().toString())
        }, 30000)

        return () => clearTimeout(timer)
    }, [])

    const closePopup = () => {
        setIsOpen(false)
        localStorage.setItem('newsletter-dismissed', 'true')
    }

    return { isOpen, closePopup }
}

export default NewsletterSignup