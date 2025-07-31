import Head from 'next/head'
import { siteConfig } from '@/lib/data'

interface SEOProps {
    title?: string
    description?: string
    keywords?: string[]
    image?: string
    url?: string
    type?: 'website' | 'article' | 'product'
    publishedTime?: string
    modifiedTime?: string
    author?: string
    noindex?: boolean
    nofollow?: boolean
}

const SEO: React.FC<SEOProps> = ({
    title,
    description,
    keywords = [],
    image,
    url,
    type = 'website',
    publishedTime,
    modifiedTime,
    author,
    noindex = false,
    nofollow = false
}) => {
    const seoTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name
    const seoDescription = description || siteConfig.description
    const seoImage = image ? (image.startsWith('http') ? image : `${siteConfig.url}${image}`) : `${siteConfig.url}/images/og-default.jpg`
    const seoUrl = url ? `${siteConfig.url}${url}` : siteConfig.url

    const allKeywords = [
        'Kenya safari',
        'African adventure',
        'wildlife tours',
        'Maasai Mara',
        'Mount Kenya climbing',
        'sustainable tourism',
        ...keywords
    ].join(', ')

    const robotsContent = [
        noindex ? 'noindex' : 'index',
        nofollow ? 'nofollow' : 'follow'
    ].join(', ')

    return (
        <Head>
            {/* Basic Meta Tags */}
            <title>{seoTitle}</title>
            <meta name="description" content={seoDescription} />
            <meta name="keywords" content={allKeywords} />
            <meta name="robots" content={robotsContent} />

            {/* Canonical URL */}
            <link rel="canonical" href={seoUrl} />

            {/* Open Graph Tags */}
            <meta property="og:title" content={seoTitle} />
            <meta property="og:description" content={seoDescription} />
            <meta property="og:image" content={seoImage} />
            <meta property="og:url" content={seoUrl} />
            <meta property="og:type" content={type} />
            <meta property="og:site_name" content={siteConfig.name} />
            <meta property="og:locale" content="en_US" />

            {/* Twitter Card Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={seoTitle} />
            <meta name="twitter:description" content={seoDescription} />
            <meta name="twitter:image" content={seoImage} />

            {/* Article specific tags */}
            {type === 'article' && publishedTime && (
                <meta property="article:published_time" content={publishedTime} />
            )}
            {type === 'article' && modifiedTime && (
                <meta property="article:modified_time" content={modifiedTime} />
            )}
            {type === 'article' && author && (
                <meta property="article:author" content={author} />
            )}

            {/* Favicon and App Icons */}
            <link rel="icon" type="image/x-icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />

            {/* Theme Color */}
            <meta name="theme-color" content="#d97706" />
            <meta name="msapplication-TileColor" content="#d97706" />

            {/* Viewport */}
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            {/* Additional SEO Tags */}
            <meta name="format-detection" content="telephone=no" />
            <meta name="geo.region" content="KE" />
            <meta name="geo.placename" content="Nairobi" />
            <meta name="geo.position" content="-1.286389;36.817223" />
            <meta name="ICBM" content="-1.286389, 36.817223" />
        </Head>
    )
}

// Structured Data Component for Safari/Tourism
interface SafariStructuredDataProps {
    name: string
    description: string
    image: string
    price?: string
    duration?: string
    location?: string
    rating?: number
    reviewCount?: number
}

export const SafariStructuredData: React.FC<SafariStructuredDataProps> = ({
    name,
    description,
    image,
    price,
    duration,
    location,
    rating,
    reviewCount
}) => {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "TouristAttraction",
        "name": name,
        "description": description,
        "image": image,
        "url": typeof window !== 'undefined' ? window.location.href : '',
        ...(location && {
            "address": {
                "@type": "PostalAddress",
                "addressCountry": "KE",
                "addressLocality": location
            }
        }),
        ...(rating && reviewCount && {
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": rating,
                "reviewCount": reviewCount,
                "bestRating": 5,
                "worstRating": 1
            }
        }),
        "provider": {
            "@type": "Organization",
            "name": "Kisima Safaris",
            "url": siteConfig.url,
            "logo": `${siteConfig.url}/images/logo.png`,
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+254721123456",
                "contactType": "customer service",
                "availableLanguage": ["English", "Swahili"]
            }
        }
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    )
}

// Organization Structured Data
export const OrganizationStructuredData: React.FC = () => {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "TravelAgency",
        "name": "Kisima Safaris",
        "description": "Kenya's premier safari company offering wildlife tours, mountain climbing, and sustainable tourism experiences",
        "url": siteConfig.url,
        "logo": `${siteConfig.url}/images/logo.png`,
        "image": `${siteConfig.url}/images/hero-safari.jpg`,
        "telephone": "+254721123456",
        "email": "info@kisimasafaris.com",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Westlands Business District",
            "addressLocality": "Nairobi",
            "addressCountry": "KE",
            "postalCode": "00100"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": -1.286389,
            "longitude": 36.817223
        },
        "openingHours": [
            "Mo-Fr 08:00-18:00",
            "Sa 09:00-16:00"
        ],
        "sameAs": [
            siteConfig.links.facebook,
            siteConfig.links.instagram,
            siteConfig.links.twitter
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Safari Packages",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "TouristTrip",
                        "name": "Wildlife Safari",
                        "description": "Experience Africa's incredible wildlife"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "TouristTrip",
                        "name": "Mountain Climbing",
                        "description": "Conquer Africa's legendary peaks"
                    }
                }
            ]
        }
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    )
}

// Breadcrumb Structured Data
interface BreadcrumbItem {
    name: string
    url: string
}

export const BreadcrumbStructuredData: React.FC<{ items: BreadcrumbItem[] }> = ({ items }) => {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": `${siteConfig.url}${item.url}`
        }))
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    )
}

// FAQ Structured Data
interface FAQItem {
    question: string
    answer: string
}

export const FAQStructuredData: React.FC<{ faqs: FAQItem[] }> = ({ faqs }) => {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    )
}

export default SEO