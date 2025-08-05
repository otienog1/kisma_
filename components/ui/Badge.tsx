import React from 'react'

type BadgeVariant = 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info'
type BadgeSize = 'sm' | 'md' | 'lg'

interface BadgeProps {
    children: React.ReactNode
    variant?: BadgeVariant
    size?: BadgeSize
    className?: string
    icon?: React.ReactNode
    removable?: boolean
    onRemove?: () => void
}

const badgeVariants = {
    default: 'bg-gray-100 text-gray-800 border-gray-200',
    primary: 'bg-amber-100 text-amber-800 border-amber-200',
    success: 'bg-green-100 text-green-800 border-green-200',
    warning: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    danger: 'bg-red-100 text-red-800 border-red-200',
    info: 'bg-blue-100 text-blue-800 border-blue-200'
}

const badgeSizes = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-2 text-base'
}

export const Badge: React.FC<BadgeProps> = ({
    children,
    variant = 'default',
    size = 'md',
    className,
    icon,
    removable = false,
    onRemove
}) => {
    return (
        <span
            className={`inline-flex items-center font-medium rounded-full border ${badgeVariants[variant]} ${badgeSizes[size]}`}
        >
            {icon && <span className="mr-1">{icon}</span>}
            <span>{children}</span>
            {removable && onRemove && (
                <button
                    onClick={onRemove}
                    className="ml-1 hover:bg-black/10 rounded-full p-0.5 transition-colors"
                    aria-label="Remove"
                >
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>
            )}
        </span>
    )
}

// Status Badge for bookings, etc.
interface StatusBadgeProps {
    status: 'confirmed' | 'pending' | 'cancelled' | 'completed'
    className?: string
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, className }) => {
    const statusConfig = {
        confirmed: { variant: 'success' as BadgeVariant, text: 'Confirmed' },
        pending: { variant: 'warning' as BadgeVariant, text: 'Pending' },
        cancelled: { variant: 'danger' as BadgeVariant, text: 'Cancelled' },
        completed: { variant: 'info' as BadgeVariant, text: 'Completed' }
    }

    const config = statusConfig[status]

    return (
        <Badge variant={config.variant} className={className}>
            {config.text}
        </Badge>
    )
}

// Rating Badge
interface RatingBadgeProps {
    rating: number
    maxRating?: number
    showValue?: boolean
    className?: string
}

export const RatingBadge: React.FC<RatingBadgeProps> = ({
    rating,
    maxRating = 5,
    showValue = true,
    className
}) => {
    const percentage = (rating / maxRating) * 100

    const getVariant = (): BadgeVariant => {
        if (percentage >= 90) return 'success'
        if (percentage >= 70) return 'primary'
        if (percentage >= 50) return 'warning'
        return 'danger'
    }

    return (
        <Badge
            variant={getVariant()}
            className={className}
            icon={
                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            }
        >
            {showValue && `${rating}/${maxRating}`}
        </Badge>
    )
}

export default Badge