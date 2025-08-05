import React from 'react'
import Link from 'next/link'

// Base Card Component
interface CardProps {
    children: React.ReactNode
    className?: string
    hover?: boolean
    clickable?: boolean
    onClick?: () => void
}

export const Card: React.FC<CardProps> = ({
    children,
    className,
    hover = false,
    clickable = false,
    onClick
}) => {
    const baseClasses = 'bg-white rounded-xl shadow-lg border border-gray-100'
    const hoverClasses = hover ? 'hover:shadow-xl transition-shadow duration-300' : ''
    const clickableClasses = clickable ? 'cursor-pointer hover:scale-[1.02] transition-transform duration-300' : ''

    const Component = onClick ? 'button' : 'div'

    return (
        <Component
            className={`${baseClasses} ${hoverClasses} ${clickableClasses}`}
            onClick={onClick}
        >
            {children}
        </Component>
    )
}

// Card Header
interface CardHeaderProps {
    children: React.ReactNode
    className?: string
}

export const CardHeader: React.FC<CardHeaderProps> = ({ children, className }) => {
    return (
        <div className='px-6 py-4 border-b border-gray-100'>
            {children}
        </div>
    )
}

// Card Body
interface CardBodyProps {
    children: React.ReactNode
    className?: string
}

export const CardBody: React.FC<CardBodyProps> = ({ children, className }) => {
    return (
        <div className={'px-6 py-4'}>
            {children}
        </div>
    )
}

// Card Footer
interface CardFooterProps {
    children: React.ReactNode
    className?: string
}

export const CardFooter: React.FC<CardFooterProps> = ({ children, className }) => {
    return (
        <div className={'px-6 py-4 border-t border-gray-100 bg-gray-50 rounded-b-xl'}>
            {children}
        </div>
    )
}

// Destination Card (specialized for safari destinations)
interface DestinationCardProps {
    title: string
    description: string
    image: string
    price: string
    duration: string
    rating?: number
    reviews?: number
    highlights: string[]
    href: string
    className?: string
}

export const DestinationCard: React.FC<DestinationCardProps> = ({
    title,
    description,
    image,
    price,
    duration,
    rating,
    reviews,
    highlights,
    href,
    className
}) => {
    return (
        <Link href={href}>
            <Card className='overflow-hidden group cursor-pointer' hover>
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                    {/* Price Badge */}
                    <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {price}
                    </div>

                    {/* Rating Badge */}
                    {rating && (
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
                            <svg className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span className="text-sm font-semibold text-gray-900">{rating}</span>
                            {reviews && <span className="text-xs text-gray-500">({reviews})</span>}
                        </div>
                    )}
                </div>

                <CardBody>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                        {title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                        {description}
                    </p>

                    {/* Duration */}
                    <div className="flex items-center text-gray-500 text-sm mb-4">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        {duration}
                    </div>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                        {highlights.slice(0, 3).map((highlight, index) => (
                            <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                                {highlight}
                            </span>
                        ))}
                        {highlights.length > 3 && (
                            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                                +{highlights.length - 3} more
                            </span>
                        )}
                    </div>
                </CardBody>
            </Card>
        </Link>
    )
}

// Service Card (specialized for safari services)
interface ServiceCardProps {
    title: string
    description: string
    image: string
    features: string[]
    icon: React.ReactNode
    href: string
    className?: string
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
    title,
    description,
    features,
    icon,
    href,
    className
}) => {
    return (
        <Link href={href}>
            <Card className='group cursor-pointer h-full' hover>
                <CardBody className="h-full flex flex-col">
                    <div className="text-amber-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                        {icon}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
                        {title}
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed flex-1">
                        {description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2">
                        {features.slice(0, 3).map((feature, index) => (
                            <li key={index} className="flex items-center text-sm text-gray-600">
                                <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-3"></div>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </CardBody>
            </Card>
        </Link>
    )
}

// Testimonial Card
interface TestimonialCardProps {
    quote: string
    author: string
    location: string
    avatar: string
    rating?: number
    className?: string
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
    quote,
    author,
    location,
    avatar,
    rating = 5,
    className
}) => {
    return (
        <Card className='h-full'>
            <CardBody className="h-full flex flex-col">
                {/* Rating */}
                <div className="flex mb-4">
                    {[...Array(rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    ))}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-600 leading-relaxed mb-6 flex-1">
                    "{quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center space-x-3">
                    <img
                        src={avatar}
                        alt={author}
                        className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                        <p className="font-semibold text-gray-900">{author}</p>
                        <p className="text-sm text-gray-500">{location}</p>
                    </div>
                </div>
            </CardBody>
        </Card>
    )
}

// Stats Card
interface StatsCardProps {
    number: string
    label: string
    icon: React.ReactNode
    description?: string
    className?: string
}

export const StatsCard: React.FC<StatsCardProps> = ({
    number,
    label,
    icon,
    description,
    className
}) => {
    return (
        <Card className='text-center group' hover>
            <CardBody>
                <div className="text-amber-600 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{number}</div>
                <div className="text-gray-600 font-medium mb-2">{label}</div>
                {description && (
                    <div className="text-sm text-gray-500">{description}</div>
                )}
            </CardBody>
        </Card>
    )
}

export default Card