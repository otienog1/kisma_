'use client'

import React from 'react'
import Link from 'next/link'
import { AlertTriangle, RefreshCw, Home, Phone } from 'lucide-react'

// Error Boundary Component
interface ErrorBoundaryState {
    hasError: boolean
    error?: Error
}

export class ErrorBoundary extends React.Component<
    { children: React.ReactNode; fallback?: React.ComponentType<{ error?: Error }> },
    ErrorBoundaryState
> {
    constructor(props: { children: React.ReactNode; fallback?: React.ComponentType<{ error?: Error }> }) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return { hasError: true, error }
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error('ErrorBoundary caught an error:', error, errorInfo)
    }

    render() {
        if (this.state.hasError) {
            const FallbackComponent = this.props.fallback || DefaultErrorFallback
            return <FallbackComponent error={this.state.error} />
        }

        return this.props.children
    }
}

// Default error fallback component
const DefaultErrorFallback = ({ error }: { error?: Error }) => {
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
                        We're sorry, but something unexpected happened. Please try refreshing the page or contact us if the problem persists.
                    </p>

                    {process.env.NODE_ENV === 'development' && error && (
                        <details className="mb-6 text-left">
                            <summary className="cursor-pointer text-sm text-gray-500 mb-2">
                                Error Details (Development)
                            </summary>
                            <pre className="text-xs bg-gray-100 p-4 rounded overflow-auto">
                                {error.message}
                                {error.stack}
                            </pre>
                        </details>
                    )}

                    <div className="space-y-3">
                        <button
                            onClick={() => window.location.reload()}
                            className="w-full btn-primary flex items-center justify-center space-x-2"
                        >
                            <RefreshCw className="w-4 h-4" />
                            <span>Try Again</span>
                        </button>

                        <Link
                            href="/"
                            className="w-full border-2 border-gray-300 text-gray-700 hover:border-amber-600 hover:text-amber-600 px-6 py-3 rounded-full font-semibold transition-colors flex items-center justify-center space-x-2"
                        >
                            <Home className="w-4 h-4" />
                            <span>Go Home</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

// 404 Not Found Component
export const NotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="max-w-md w-full text-center">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    <div className="text-6xl font-bold text-amber-600 mb-4">404</div>

                    <h1 className="text-2xl font-bold text-gray-900 mb-4">
                        Page Not Found
                    </h1>

                    <p className="text-gray-600 mb-6">
                        The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
                    </p>

                    <div className="space-y-3">
                        <Link
                            href="/"
                            className="w-full btn-primary flex items-center justify-center space-x-2"
                        >
                            <Home className="w-4 h-4" />
                            <span>Go Home</span>
                        </Link>

                        <Link
                            href="/contact"
                            className="w-full border-2 border-gray-300 text-gray-700 hover:border-amber-600 hover:text-amber-600 px-6 py-3 rounded-full font-semibold transition-colors flex items-center justify-center space-x-2"
                        >
                            <Phone className="w-4 h-4" />
                            <span>Contact Us</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Network Error Component
export const NetworkError = ({ onRetry }: { onRetry?: () => void }) => {
    return (
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center max-w-md mx-auto">
            <div className="text-red-500 mb-4 flex justify-center">
                <AlertTriangle className="w-12 h-12" />
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-3">
                Network Error
            </h3>

            <p className="text-gray-600 mb-6">
                Unable to connect to our servers. Please check your internet connection and try again.
            </p>

            {onRetry && (
                <button
                    onClick={onRetry}
                    className="btn-primary flex items-center justify-center space-x-2 mx-auto"
                >
                    <RefreshCw className="w-4 h-4" />
                    <span>Try Again</span>
                </button>
            )}
        </div>
    )
}

// Form Error Component
export const FormError = ({ message }: { message: string }) => {
    return (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center space-x-3">
            <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0" />
            <p className="text-red-700 text-sm">{message}</p>
        </div>
    )
}

// Success Message Component
export const SuccessMessage = ({ message }: { message: string }) => {
    return (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center space-x-3">
            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <p className="text-green-700 text-sm">{message}</p>
        </div>
    )
}

// Warning Message Component
export const WarningMessage = ({ message }: { message: string }) => {
    return (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-center space-x-3">
            <AlertTriangle className="w-5 h-5 text-yellow-500 flex-shrink-0" />
            <p className="text-yellow-700 text-sm">{message}</p>
        </div>
    )
}

export default ErrorBoundary