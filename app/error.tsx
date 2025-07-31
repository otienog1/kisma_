'use client'

import React from 'react'
import Link from 'next/link'
import { AlertTriangle, RefreshCw, Home, Phone } from 'lucide-react'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    React.useEffect(() => {
        // Log the error to an error reporting service
        console.error('Application error:', error)
    }, [error])

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="max-w-md w-full text-center">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    <div className="text-red-500 mb-6 flex justify-center">
                        <AlertTriangle className="w-16 h-16" />
                    </div>

                    <h1 className="text-2xl font-bold text-gray-900 mb-4">
                        Oops! Something went wrong
                    </h1>

                    <p className="text-gray-600 mb-6">
                        We're sorry, but something unexpected happened while loading this page.
                        Please try refreshing or contact us if the problem persists.
                    </p>

                    {/* Error details in development */}
                    {process.env.NODE_ENV === 'development' && (
                        <details className="mb-6 text-left">
                            <summary className="cursor-pointer text-sm text-gray-500 mb-2">
                                Error Details (Development)
                            </summary>
                            <div className="text-xs bg-gray-100 p-4 rounded overflow-auto max-h-40">
                                <pre className="whitespace-pre-wrap">
                                    {error.message}
                                    {error.stack && '\n\nStack trace:\n' + error.stack}
                                </pre>
                            </div>
                        </details>
                    )}

                    <div className="space-y-3">
                        <button
                            onClick={reset}
                            className="w-full bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                        >
                            <RefreshCw className="w-5 h-5" />
                            <span>Try Again</span>
                        </button>

                        <div className="flex space-x-3">
                            <Link
                                href="/"
                                className="flex-1 border-2 border-gray-300 text-gray-700 hover:border-amber-600 hover:text-amber-600 px-6 py-3 rounded-full font-semibold transition-colors flex items-center justify-center space-x-2"
                            >
                                <Home className="w-4 h-4" />
                                <span>Go Home</span>
                            </Link>

                            <Link
                                href="/contact"
                                className="flex-1 border-2 border-gray-300 text-gray-700 hover:border-amber-600 hover:text-amber-600 px-6 py-3 rounded-full font-semibold transition-colors flex items-center justify-center space-x-2"
                            >
                                <Phone className="w-4 h-4" />
                                <span>Contact Us</span>
                            </Link>
                        </div>
                    </div>

                    {/* Additional help */}
                    <div className="mt-6 pt-6 border-t border-gray-200">
                        <p className="text-sm text-gray-500">
                            Need immediate assistance? Call us at{' '}
                            <a
                                href="tel:+254721123456"
                                className="text-amber-600 hover:text-amber-700 font-medium"
                            >
                                +254 (0) 721 123 456
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}