import React from 'react'
import { Compass } from 'lucide-react'

// Main loading component
export const Loading = ({ message = "Loading..." }: { message?: string }) => {
    return (
        <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
                <div className="relative mb-4">
                    <Compass className="w-12 h-12 text-amber-600 animate-spin mx-auto" />
                    <div className="absolute inset-0 w-12 h-12 border-2 border-amber-200 rounded-full animate-ping mx-auto"></div>
                </div>
                <p className="text-gray-600 font-medium">{message}</p>
            </div>
        </div>
    )
}

// Page loading component
export const PageLoading = () => {
    return (
        <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
            <div className="text-center">
                <div className="relative mb-6">
                    <Compass className="w-16 h-16 text-amber-600 animate-spin mx-auto" />
                    <div className="absolute inset-0 w-16 h-16 border-4 border-amber-200 rounded-full animate-ping mx-auto"></div>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Kisima Safaris</h2>
                <p className="text-gray-600">Preparing your African adventure...</p>
            </div>
        </div>
    )
}

// Skeleton loading components
export const SkeletonCard = () => {
    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
            <div className="h-64 bg-gray-200"></div>
            <div className="p-6">
                <div className="h-4 bg-gray-200 rounded mb-3"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-3"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
            </div>
        </div>
    )
}

export const SkeletonText = ({ lines = 3 }: { lines?: number }) => {
    return (
        <div className="animate-pulse">
            {[...Array(lines)].map((_, i) => (
                <div key={i} className={`h-4 bg-gray-200 rounded mb-3 ${i === lines - 1 ? 'w-3/4' : 'w-full'}`}></div>
            ))}
        </div>
    )
}

// Destination cards loading
export const DestinationCardsLoading = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
                <SkeletonCard key={i} />
            ))}
        </div>
    )
}

// Services loading
export const ServicesLoading = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-white rounded-2xl shadow-lg animate-pulse">
                    <div className="md:flex">
                        <div className="md:w-1/2 h-64 bg-gray-200"></div>
                        <div className="md:w-1/2 p-8">
                            <div className="w-8 h-8 bg-gray-200 rounded mb-4"></div>
                            <div className="h-6 bg-gray-200 rounded mb-3"></div>
                            <div className="h-4 bg-gray-200 rounded mb-4"></div>
                            <div className="space-y-2">
                                {[...Array(3)].map((_, j) => (
                                    <div key={j} className="h-3 bg-gray-200 rounded"></div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

// Button loading state
export const ButtonLoading = ({ children, isLoading, ...props }: {
    children: React.ReactNode
    isLoading: boolean
    [key: string]: any
}) => {
    return (
        <button
            {...props}
            disabled={isLoading}
            className={`${props.className} ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
            {isLoading ? (
                <div className="flex items-center justify-center space-x-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span>Loading...</span>
                </div>
            ) : (
                children
            )}
        </button>
    )
}

// Image loading placeholder
export const ImagePlaceholder = ({ className = "w-full h-64" }: { className?: string }) => {
    return (
        <div className={`${className} bg-gray-200 animate-pulse flex items-center justify-center`}>
            <Compass className="w-8 h-8 text-gray-400" />
        </div>
    )
}

export default Loading