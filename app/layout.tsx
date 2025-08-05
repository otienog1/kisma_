import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Kisima Safaris - Discover the Magic of Africa',
    description: 'Experience unique wildlife adventures, conquer legendary peaks, and create memories that last a lifetime with Kenya\'s premier safari company.',
    keywords: 'Kenya safari, Maasai Mara, Mount Kenya, Kilimanjaro, wildlife tours, African adventures',
    authors: [{ name: 'Kisima Safaris' }],
    openGraph: {
        title: 'Kisima Safaris - Discover the Magic of Africa',
        description: 'Experience unique wildlife adventures, conquer legendary peaks, and create memories that last a lifetime.',
        url: 'https://kisimasafaris.com',
        siteName: 'Kisima Safaris',
        images: [
            {
                url: '/images/hero-safari.jpg',
                width: 1200,
                height: 630,
                alt: 'African Safari Adventure',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Kisima Safaris - Discover the Magic of Africa',
        description: 'Experience unique wildlife adventures, conquer legendary peaks, and create memories that last a lifetime.',
        images: ['/images/hero-safari.jpg'],
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${inter.className}`}>
                <Navigation />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    )
}