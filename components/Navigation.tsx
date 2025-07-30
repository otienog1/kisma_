'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Compass, Menu, X, Phone } from 'lucide-react'

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navItems = [
        { href: '/', label: 'Home' },
        { href: '/destinations', label: 'Destinations' },
        { href: '/services', label: 'Services' },
        { href: '/about', label: 'About' },
    ]

    const isActive = (href: string) => {
        if (href === '/') return pathname === '/'
        return pathname.startsWith(href)
    }

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-effect border-b border-gray-100 py-2' : 'bg-transparent py-4'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2 group">
                        <Compass className="h-8 w-8 text-amber-600 group-hover:rotate-45 transition-transform duration-300" />
                        <span className={`text-xl font-bold transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'
                            }`}>
                            Kisima Safaris
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`font-medium transition-colors relative group ${isActive(item.href)
                                        ? isScrolled
                                            ? 'text-amber-600'
                                            : 'text-amber-400'
                                        : isScrolled
                                            ? 'text-gray-700 hover:text-amber-600'
                                            : 'text-white hover:text-amber-400'
                                    }`}
                            >
                                {item.label}
                                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 group-hover:w-full transition-all duration-300 ${isActive(item.href) ? 'w-full' : ''
                                    }`}></span>
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            className="btn-primary flex items-center space-x-2"
                        >
                            <Phone className="w-4 h-4" />
                            <span>Contact</span>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className={`md:hidden p-2 transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'
                            }`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                <div className="bg-white border-t border-gray-100 shadow-lg">
                    <div className="px-4 py-6 space-y-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`block font-medium transition-colors ${isActive(item.href)
                                        ? 'text-amber-600'
                                        : 'text-gray-700 hover:text-amber-600'
                                    }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Link
                            href="/contact"
                            className="block btn-primary text-center"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation