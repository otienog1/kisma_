import { Compass } from 'lucide-react'

export default function Loading() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="text-center">
                <div className="relative mb-8">
                    <Compass className="w-16 h-16 text-amber-600 animate-spin mx-auto" />
                    <div className="absolute inset-0 w-16 h-16 border-4 border-amber-200 rounded-full animate-ping mx-auto opacity-75"></div>
                </div>

                <h2 className="text-2xl font-semibold text-gray-900 mb-2">Kisima Safaris</h2>
                <p className="text-gray-600 mb-4">Preparing your African adventure...</p>

                <div className="flex justify-center space-x-1">
                    <div className="w-2 h-2 bg-amber-600 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-amber-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-amber-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
            </div>
        </div>
    )
}