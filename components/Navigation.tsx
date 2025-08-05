'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Compass, Menu, X, Phone, Facebook, Twitter, Instagram, Mail } from 'lucide-react'

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 50
            if (scrolled !== isScrolled) {
                setIsScrolled(scrolled)
            }
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [isScrolled])

    const navItems = [
        { href: '/', label: 'Home' },
        { href: '/destinations', label: 'Destinations' },
        { href: '/services', label: 'Services' },
        { href: '/about', label: 'About' },
        { href: '/contact', label: 'Contact' },
    ]

    const isActive = (href: string) => {
        if (href === '/') return pathname === '/'
        return pathname.startsWith(href)
    }

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? '' : ''}`}>
            <TopNav isScrolled={isScrolled} />
            <div className={`top-0 w-full transition-all duration-300 glass-effect border-b border-gray-100 py-6 ${isScrolled ? '' : ''
                }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-8">
                        {/* Logo */}
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/Kisima_Safaris_Logo.png"
                                alt="Kisima Safaris"
                                width={300}
                                height={90}
                                className="h-14 w-auto transition-transform duration-300 group-hover:scale-105"
                            />
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
                                            : 'text-amber-600'
                                        : isScrolled
                                            ? 'text-[#322215] hover:text-amber-600'
                                            : 'text-[#322215] hover:text-amber-600'
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            ))}
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
            </div>
        </nav>
    )
}

interface TopNavProps {
    isScrolled: boolean;
}

const TopNav = ({ isScrolled }: TopNavProps) => {
    return (
        <div className={`w-full bg-[#322215] transition-all duration-300 overflow-hidden ${isScrolled ? 'h-0 py-0' : 'h-auto py-2'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-full uppercase text-xs tracking-wider">
                    {/* Phone Number */}
                    <div className="flex items-center space-x-2 text-white">
                        <span className=''> Get in touch: <a href='mailto:info@kisimasafaris.com' className='underline lowercase'>info@kisimasafaris.com</a> | +254 720 909 852</span>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex items-center text-white space-x-4">
                        <span>Socials: </span>
                        <a href="#" className="text-white hover:text-amber-400 transition-colors" aria-label="Facebook">
                            <Facebook className="w-4 h-4" />
                        </a>
                        <a href="#" className="text-white hover:text-amber-400 transition-colors" aria-label="Twitter">
                            <Twitter className="w-4 h-4" />
                        </a>
                        <a href="#" className="text-white hover:text-amber-400 transition-colors" aria-label="Instagram">
                            <Instagram className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation