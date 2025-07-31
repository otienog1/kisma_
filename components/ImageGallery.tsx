'use client'

import React, { useState, useCallback, useEffect } from 'react'
import { X, ChevronLeft, ChevronRight, ZoomIn, Download, Share2, Heart } from 'lucide-react'

interface GalleryImage {
    src: string
    alt: string
    caption?: string
    photographer?: string
    location?: string
}

interface ImageGalleryProps {
    images: GalleryImage[]
    className?: string
    columns?: number
    gap?: number
    showCaptions?: boolean
    enableLightbox?: boolean
    enableDownload?: boolean
    enableShare?: boolean
}

const ImageGallery: React.FC<ImageGalleryProps> = ({
    images,
    className = '',
    columns = 3,
    gap = 4,
    showCaptions = true,
    enableLightbox = true,
    enableDownload = false,
    enableShare = false
}) => {
    const [lightboxOpen, setLightboxOpen] = useState(false)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [favorites, setFavorites] = useState<Set<number>>(new Set())

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!lightboxOpen) return

            switch (e.key) {
                case 'Escape':
                    setLightboxOpen(false)
                    break
                case 'ArrowLeft':
                    navigateImage('prev')
                    break
                case 'ArrowRight':
                    navigateImage('next')
                    break
            }
        }

        document.addEventListener('keydown', handleKeyDown)
        return () => document.removeEventListener('keydown', handleKeyDown)
    }, [lightboxOpen])

    // Prevent body scroll when lightbox is open
    useEffect(() => {
        if (lightboxOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }

        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [lightboxOpen])

    const openLightbox = useCallback((index: number) => {
        if (!enableLightbox) return
        setCurrentImageIndex(index)
        setLightboxOpen(true)
    }, [enableLightbox])

    const closeLightbox = useCallback(() => {
        setLightboxOpen(false)
    }, [])

    const navigateImage = useCallback((direction: 'prev' | 'next') => {
        setCurrentImageIndex(prev => {
            if (direction === 'prev') {
                return prev > 0 ? prev - 1 : images.length - 1
            } else {
                return prev < images.length - 1 ? prev + 1 : 0
            }
        })
    }, [images.length])

    const toggleFavorite = useCallback((index: number) => {
        setFavorites(prev => {
            const newFavorites = new Set(prev)
            if (newFavorites.has(index)) {
                newFavorites.delete(index)
            } else {
                newFavorites.add(index)
            }
            return newFavorites
        })
    }, [])

    const downloadImage = useCallback(async (src: string, filename: string) => {
        try {
            const response = await fetch(src)
            const blob = await response.blob()
            const url = window.URL.createObjectURL(blob)

            const link = document.createElement('a')
            link.href = url
            link.download = filename
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)

            window.URL.revokeObjectURL(url)
        } catch (error) {
            console.error('Failed to download image:', error)
        }
    }, [])

    const shareImage = useCallback(async (image: GalleryImage) => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: image.alt,
                    text: image.caption || image.alt,
                    url: window.location.href
                })
            } catch (error) {
                console.error('Failed to share:', error)
            }
        } else {
            // Fallback: copy URL to clipboard
            await navigator.clipboard.writeText(window.location.href)
            alert('Link copied to clipboard!')
        }
    }, [])

    const gridColsClass = {
        1: 'grid-cols-1',
        2: 'grid-cols-1 md:grid-cols-2',
        3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
        4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
        5: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5',
        6: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6'
    }[columns] || 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'

    const gapClass = {
        1: 'gap-1',
        2: 'gap-2',
        3: 'gap-3',
        4: 'gap-4',
        6: 'gap-6',
        8: 'gap-8'
    }[gap] || 'gap-4'

    return (
        <>
            {/* Gallery Grid */}
            <div className={`grid ${gridColsClass} ${gapClass} ${className}`}>
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                        onClick={() => openLightbox(index)}
                    >
                        <div className="aspect-square relative">
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-2">
                                    <button className="bg-white/90 hover:bg-white p-2 rounded-full transition-colors">
                                        <ZoomIn className="w-5 h-5 text-gray-700" />
                                    </button>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            toggleFavorite(index)
                                        }}
                                        className="bg-white/90 hover:bg-white p-2 rounded-full transition-colors"
                                    >
                                        <Heart className={`w-5 h-5 ${favorites.has(index) ? 'text-red-500 fill-current' : 'text-gray-700'}`} />
                                    </button>
                                </div>
                            </div>

                            {/* Image Number */}
                            <div className="absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                                {index + 1}/{images.length}
                            </div>
                        </div>

                        {/* Caption */}
                        {showCaptions && (image.caption || image.location) && (
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                <div className="text-white">
                                    {image.caption && (
                                        <p className="text-sm font-medium mb-1">{image.caption}</p>
                                    )}
                                    {image.location && (
                                        <p className="text-xs opacity-80">{image.location}</p>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Lightbox */}
            {lightboxOpen && (
                <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
                    {/* Close Button */}
                    <button
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    {/* Navigation Buttons */}
                    <button
                        onClick={() => navigateImage('prev')}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <button
                        onClick={() => navigateImage('next')}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Image Actions */}
                    <div className="absolute top-4 left-4 z-10 flex space-x-2">
                        {enableShare && (
                            <button
                                onClick={() => shareImage(images[currentImageIndex])}
                                className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
                            >
                                <Share2 className="w-5 h-5" />
                            </button>
                        )}

                        {enableDownload && (
                            <button
                                onClick={() => downloadImage(
                                    images[currentImageIndex].src,
                                    `kisima-safari-${currentImageIndex + 1}.jpg`
                                )}
                                className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
                            >
                                <Download className="w-5 h-5" />
                            </button>
                        )}

                        <button
                            onClick={() => toggleFavorite(currentImageIndex)}
                            className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
                        >
                            <Heart className={`w-5 h-5 ${favorites.has(currentImageIndex) ? 'text-red-500 fill-current' : ''}`} />
                        </button>
                    </div>

                    {/* Main Image */}
                    <div className="relative max-w-7xl max-h-[90vh] mx-4">
                        <img
                            src={images[currentImageIndex].src}
                            alt={images[currentImageIndex].alt}
                            className="max-w-full max-h-full object-contain"
                        />

                        {/* Image Info */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                            <div className="text-white">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h3 className="text-lg font-semibold">{images[currentImageIndex].alt}</h3>
                                        {images[currentImageIndex].caption && (
                                            <p className="text-sm opacity-90">{images[currentImageIndex].caption}</p>
                                        )}
                                    </div>
                                    <div className="text-right text-sm opacity-75">
                                        {currentImageIndex + 1} / {images.length}
                                    </div>
                                </div>

                                <div className="flex justify-between items-center text-sm opacity-75">
                                    {images[currentImageIndex].location && (
                                        <span>{images[currentImageIndex].location}</span>
                                    )}
                                    {images[currentImageIndex].photographer && (
                                        <span>📷 {images[currentImageIndex].photographer}</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Thumbnail Strip */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 max-w-md overflow-x-auto">
                        {images.map((image, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentImageIndex(index)}
                                className={`flex-shrink-0 w-16 h-16 rounded overflow-hidden border-2 transition-all ${index === currentImageIndex ? 'border-white' : 'border-transparent opacity-60 hover:opacity-80'
                                    }`}
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full object-cover"
                                />
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}

// Masonry Gallery Component (alternative layout)
export const MasonryGallery: React.FC<{ images: GalleryImage[] }> = ({ images }) => {
    return (
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {images.map((image, index) => (
                <div key={index} className="break-inside-avoid group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
                    <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full group-hover:scale-105 transition-transform duration-500"
                    />
                    {image.caption && (
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                            <p className="text-white text-sm">{image.caption}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

export default ImageGallery