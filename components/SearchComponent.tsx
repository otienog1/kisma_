'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Search, MapPin, Calendar, Users, X } from 'lucide-react'
import { destinations } from '@/lib/data'

interface SearchResult {
    id: string
    title: string
    description: string
    category: 'destination' | 'service' | 'page'
    url: string
    image?: string
    highlights?: string[]
}

interface SearchComponentProps {
    className?: string
    placeholder?: string
    showFilters?: boolean
}

const SearchComponent: React.FC<SearchComponentProps> = ({
    className,
    placeholder = "Search destinations, services, or activities...",
    showFilters = true
}) => {
    const [query, setQuery] = useState('')
    const [results, setResults] = useState<SearchResult[]>([])
    const [isOpen, setIsOpen] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState(-1)
    const [filters, setFilters] = useState({
        category: 'all',
        duration: 'all',
        difficulty: 'all'
    })

    const searchRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)

    // Mock search data - in real app this would come from API/database
    const searchData: SearchResult[] = [
        {
            id: 'maasai-mara',
            title: 'Maasai Mara National Reserve',
            description: 'Witness the Great Migration in Kenya\'s most famous reserve',
            category: 'destination',
            url: '/destinations/maasai-mara',
            image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=400&q=80',
            highlights: ['Great Migration', 'Big Five', 'Maasai Culture']
        },
        {
            id: 'mount-kenya',
            title: 'Mount Kenya National Park',
            description: 'Conquer Africa\'s second highest peak',
            category: 'destination',
            url: '/destinations/mount-kenya',
            image: 'https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=400&q=80',
            highlights: ['Snow-capped peaks', 'Alpine lakes', 'Unique flora']
        },
        {
            id: 'wildlife-safaris',
            title: 'Wildlife Safaris',
            description: 'Experience the Big Five and incredible wildlife',
            category: 'service',
            url: '/services/wildlife-safaris',
            highlights: ['Game drives', 'Photography', 'Conservation']
        },
        {
            id: 'mountain-climbing',
            title: 'Mountain Climbing',
            description: 'Guided climbs of Mount Kenya and Kilimanjaro',
            category: 'service',
            url: '/services/mountain-climbing',
            highlights: ['Expert guides', 'Safety equipment', 'Multiple routes']
        },
        {
            id: 'about',
            title: 'About Kisima Safaris',
            description: 'Learn about our story and commitment to sustainable tourism',
            category: 'page',
            url: '/about'
        },
        {
            id: 'contact',
            title: 'Contact Us',
            description: 'Plan your perfect safari adventure',
            category: 'page',
            url: '/contact'
        }
    ]

    // Perform search
    const performSearch = (searchQuery: string) => {
        if (searchQuery.length < 2) {
            setResults([])
            return
        }

        const filtered = searchData.filter(item => {
            const matchesQuery =
                item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                (item.highlights && item.highlights.some(h =>
                    h.toLowerCase().includes(searchQuery.toLowerCase())
                ))

            const matchesCategory = filters.category === 'all' || item.category === filters.category

            return matchesQuery && matchesCategory
        })

        setResults(filtered.slice(0, 8)) // Limit to 8 results
    }

    // Handle input change
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            performSearch(query)
        }, 300) // Debounce search

        return () => clearTimeout(timeoutId)
    }, [query, filters])

    // Handle click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setIsOpen(false)
                setSelectedIndex(-1)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    // Handle keyboard navigation
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (!isOpen) return

        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault()
                setSelectedIndex(prev =>
                    prev < results.length - 1 ? prev + 1 : prev
                )
                break
            case 'ArrowUp':
                e.preventDefault()
                setSelectedIndex(prev => prev > 0 ? prev - 1 : -1)
                break
            case 'Enter':
                e.preventDefault()
                if (selectedIndex >= 0 && results[selectedIndex]) {
                    window.location.href = results[selectedIndex].url
                }
                break
            case 'Escape':
                setIsOpen(false)
                setSelectedIndex(-1)
                inputRef.current?.blur()
                break
        }
    }

    const clearSearch = () => {
        setQuery('')
        setResults([])
        setIsOpen(false)
        inputRef.current?.focus()
    }

    const getCategoryIcon = (category: string) => {
        switch (category) {
            case 'destination':
                return <MapPin className="w-4 h-4" />
            case 'service':
                return <Calendar className="w-4 h-4" />
            default:
                return <Search className="w-4 h-4" />
        }
    }

    const getCategoryColor = (category: string) => {
        switch (category) {
            case 'destination':
                return 'text-green-600 bg-green-100'
            case 'service':
                return 'text-blue-600 bg-blue-100'
            default:
                return 'text-gray-600 bg-gray-100'
        }
    }

    return (
        <div ref={searchRef} className='relative'>
            {/* Search Input */}
            <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                </div>

                <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value)
                        setIsOpen(true)
                    }}
                    onFocus={() => setIsOpen(true)}
                    onKeyDown={handleKeyDown}
                    className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-full leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    placeholder={placeholder}
                />

                {query && (
                    <button
                        onClick={clearSearch}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
                        <X className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    </button>
                )}
            </div>

            {/* Filters */}
            {showFilters && (
                <div className="flex space-x-2 mt-3">
                    <select
                        value={filters.category}
                        onChange={(e) => setFilters(prev => ({ ...prev, category: e.target.value }))}
                        className="text-sm border border-gray-300 rounded-full px-3 py-1 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    >
                        <option value="all">All Categories</option>
                        <option value="destination">Destinations</option>
                        <option value="service">Services</option>
                        <option value="page">Pages</option>
                    </select>
                </div>
            )}

            {/* Search Results Dropdown */}
            {isOpen && query.length >= 2 && (
                <div className="absolute z-50 w-full mt-2 bg-white rounded-xl shadow-2xl border border-gray-200 max-h-96 overflow-y-auto">
                    {results.length > 0 ? (
                        <>
                            <div className="p-3 border-b border-gray-100">
                                <p className="text-sm text-gray-600">
                                    {results.length} result{results.length !== 1 ? 's' : ''} for "{query}"
                                </p>
                            </div>

                            <div className="py-2">
                                {results.map((result, index) => (
                                    <Link
                                        key={result.id}
                                        href={result.url}
                                        className={`block px-4 py-3 hover:bg-gray-50 transition-colors ${selectedIndex === index && 'bg-amber-50'}`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <div className="flex items-start space-x-3">
                                            {result.image && (
                                                <img
                                                    src={result.image}
                                                    alt={result.title}
                                                    className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                                                />
                                            )}

                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center space-x-2 mb-1">
                                                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(result.category)}`}>
                                                        {getCategoryIcon(result.category)}
                                                        <span className="ml-1 capitalize">{result.category}</span>
                                                    </span>
                                                </div>

                                                <h4 className="text-sm font-semibold text-gray-900 truncate">
                                                    {result.title}
                                                </h4>
                                                <p className="text-sm text-gray-600 line-clamp-2">
                                                    {result.description}
                                                </p>

                                                {result.highlights && (
                                                    <div className="flex flex-wrap gap-1 mt-2">
                                                        {result.highlights.slice(0, 3).map((highlight, idx) => (
                                                            <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                                                                {highlight}
                                                            </span>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>

                            <div className="p-3 border-t border-gray-100">
                                <Link
                                    href={`/search?q=${encodeURIComponent(query)}`}
                                    className="text-sm text-amber-600 hover:text-amber-700 font-medium"
                                    onClick={() => setIsOpen(false)}
                                >
                                    View all results →
                                </Link>
                            </div>
                        </>
                    ) : (
                        <div className="p-6 text-center">
                            <Search className="w-8 h-8 text-gray-400 mx-auto mb-3" />
                            <p className="text-sm text-gray-600 mb-2">No results found for "{query}"</p>
                            <p className="text-xs text-gray-500">
                                Try searching for destinations like "Maasai Mara" or services like "safari"
                            </p>
                        </div>
                    )}
                </div>
            )}

            {/* Quick Suggestions when empty */}
            {isOpen && query.length === 0 && (
                <div className="absolute z-50 w-full mt-2 bg-white rounded-xl shadow-2xl border border-gray-200">
                    <div className="p-3 border-b border-gray-100">
                        <p className="text-sm text-gray-600 font-medium">Popular Searches</p>
                    </div>

                    <div className="py-2">
                        {['Maasai Mara', 'Mount Kenya', 'Wildlife Safari', 'Kilimanjaro', 'Family Safari'].map((suggestion, index) => (
                            <button
                                key={suggestion}
                                onClick={() => {
                                    setQuery(suggestion)
                                    inputRef.current?.focus()
                                }}
                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                            >
                                <div className="flex items-center space-x-2">
                                    <Search className="w-4 h-4 text-gray-400" />
                                    <span>{suggestion}</span>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

// Advanced Search Filters Component
interface AdvancedSearchProps {
    onFiltersChange: (filters: any) => void
    className?: string
}

export const AdvancedSearch: React.FC<AdvancedSearchProps> = ({
    onFiltersChange,
    className
}) => {
    const [filters, setFilters] = useState({
        destination: '',
        serviceType: '',
        duration: '',
        budget: '',
        travelers: '',
        difficulty: ''
    })

    const updateFilter = (key: string, value: string) => {
        const newFilters = { ...filters, [key]: value }
        setFilters(newFilters)
        onFiltersChange(newFilters)
    }

    return (
        <div className='bg-white p-6 rounded-xl shadow-lg'>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Find Your Perfect Safari</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Destination
                    </label>
                    <select
                        value={filters.destination}
                        onChange={(e) => updateFilter('destination', e.target.value)}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    >
                        <option value="">Any Destination</option>
                        <option value="maasai-mara">Maasai Mara</option>
                        <option value="mount-kenya">Mount Kenya</option>
                        <option value="kilimanjaro">Kilimanjaro</option>
                        <option value="amboseli">Amboseli</option>
                        <option value="samburu">Samburu</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Service Type
                    </label>
                    <select
                        value={filters.serviceType}
                        onChange={(e) => updateFilter('serviceType', e.target.value)}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    >
                        <option value="">Any Service</option>
                        <option value="wildlife-safari">Wildlife Safari</option>
                        <option value="mountain-climbing">Mountain Climbing</option>
                        <option value="family-safari">Family Safari</option>
                        <option value="honeymoon-package">Honeymoon Package</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Duration
                    </label>
                    <select
                        value={filters.duration}
                        onChange={(e) => updateFilter('duration', e.target.value)}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    >
                        <option value="">Any Duration</option>
                        <option value="1-3">1-3 days</option>
                        <option value="4-7">4-7 days</option>
                        <option value="8-14">8-14 days</option>
                        <option value="15+">15+ days</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Budget (per person)
                    </label>
                    <select
                        value={filters.budget}
                        onChange={(e) => updateFilter('budget', e.target.value)}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    >
                        <option value="">Any Budget</option>
                        <option value="0-500">Under $500</option>
                        <option value="500-1000">$500 - $1,000</option>
                        <option value="1000-2500">$1,000 - $2,500</option>
                        <option value="2500+">$2,500+</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Travelers
                    </label>
                    <select
                        value={filters.travelers}
                        onChange={(e) => updateFilter('travelers', e.target.value)}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    >
                        <option value="">Any Group Size</option>
                        <option value="1">Solo Traveler</option>
                        <option value="2">Couple</option>
                        <option value="3-5">Small Group (3-5)</option>
                        <option value="6+">Large Group (6+)</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Difficulty
                    </label>
                    <select
                        value={filters.difficulty}
                        onChange={(e) => updateFilter('difficulty', e.target.value)}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    >
                        <option value="">Any Difficulty</option>
                        <option value="easy">Easy</option>
                        <option value="moderate">Moderate</option>
                        <option value="challenging">Challenging</option>
                    </select>
                </div>
            </div>

            <div className="mt-6 flex space-x-3">
                <button
                    onClick={() => {
                        const resetFilters = {
                            destination: '',
                            serviceType: '',
                            duration: '',
                            budget: '',
                            travelers: '',
                            difficulty: ''
                        }
                        setFilters(resetFilters)
                        onFiltersChange(resetFilters)
                    }}
                    className="flex-1 border border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-lg transition-colors"
                >
                    Clear Filters
                </button>
                <Link
                    href="/destinations"
                    className="flex-1 bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg text-center transition-colors"
                >
                    Search Safaris
                </Link>
            </div>
        </div>
    )
}

export default SearchComponent