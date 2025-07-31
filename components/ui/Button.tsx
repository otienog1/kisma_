import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Loader2 } from 'lucide-react'

// Button variant types
type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success'
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant
    size?: ButtonSize
    loading?: boolean
    leftIcon?: React.ReactNode
    rightIcon?: React.ReactNode
    fullWidth?: boolean
    children: React.ReactNode
}

interface LinkButtonProps extends Omit<ButtonProps, 'onClick' | 'type'> {
    href: string
    external?: boolean
}

// Button variants styling
const buttonVariants = {
    primary: 'bg-amber-600 hover:bg-amber-700 text-white shadow-lg hover:shadow-xl focus:ring-amber-500',
    secondary: 'bg-gray-600 hover:bg-gray-700 text-white shadow-lg hover:shadow-xl focus:ring-gray-500',
    outline: 'border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white focus:ring-amber-500',
    ghost: 'text-amber-600 hover:bg-amber-50 focus:ring-amber-500',
    danger: 'bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-xl focus:ring-red-500',
    success: 'bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl focus:ring-green-500'
}

// Button sizes
const buttonSizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl'
}

// Main Button Component
export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'md',
    loading = false,
    leftIcon,
    rightIcon,
    fullWidth = false,
    disabled,
    className,
    children,
    ...props
}) => {
    const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none'

    const variantClasses = buttonVariants[variant]
    const sizeClasses = buttonSizes[size]
    const widthClasses = fullWidth ? 'w-full' : ''

    return (
        <button
            className={cn(
                baseClasses,
                variantClasses,
                sizeClasses,
                widthClasses,
                className
            )}
            disabled={disabled || loading}
            {...props}
        >
            {loading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
            {!loading && leftIcon && <span className="mr-2">{leftIcon}</span>}
            <span>{children}</span>
            {!loading && rightIcon && <span className="ml-2">{rightIcon}</span>}
        </button>
    )
}

// Link Button Component
export const LinkButton: React.FC<LinkButtonProps> = ({
    href,
    external = false,
    variant = 'primary',
    size = 'md',
    leftIcon,
    rightIcon,
    fullWidth = false,
    className,
    children,
    ...props
}) => {
    const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2'

    const variantClasses = buttonVariants[variant]
    const sizeClasses = buttonSizes[size]
    const widthClasses = fullWidth ? 'w-full' : ''

    const combinedClasses = cn(
        baseClasses,
        variantClasses,
        sizeClasses,
        widthClasses,
        className
    )

    if (external) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={combinedClasses}
                {...props}
            >
                {leftIcon && <span className="mr-2">{leftIcon}</span>}
                <span>{children}</span>
                {rightIcon && <span className="ml-2">{rightIcon}</span>}
            </a>
        )
    }

    return (
        <Link href={href} className={combinedClasses} {...props}>
            {leftIcon && <span className="mr-2">{leftIcon}</span>}
            <span>{children}</span>
            {rightIcon && <span className="ml-2">{rightIcon}</span>}
        </Link>
    )
}

// Icon Button Component
interface IconButtonProps extends Omit<ButtonProps, 'children'> {
    icon: React.ReactNode
    'aria-label': string
}

export const IconButton: React.FC<IconButtonProps> = ({
    icon,
    variant = 'ghost',
    size = 'md',
    className,
    ...props
}) => {
    const baseClasses = 'inline-flex items-center justify-center rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2'

    const variantClasses = buttonVariants[variant]

    // Icon button specific sizes
    const iconSizes = {
        sm: 'w-8 h-8 p-1.5',
        md: 'w-10 h-10 p-2',
        lg: 'w-12 h-12 p-2.5',
        xl: 'w-14 h-14 p-3'
    }

    return (
        <button
            className={cn(
                baseClasses,
                variantClasses,
                iconSizes[size],
                className
            )}
            {...props}
        >
            {icon}
        </button>
    )
}

// Button Group Component
interface ButtonGroupProps {
    children: React.ReactNode
    className?: string
    orientation?: 'horizontal' | 'vertical'
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
    children,
    className,
    orientation = 'horizontal'
}) => {
    const orientationClasses = {
        horizontal: 'flex flex-row space-x-2',
        vertical: 'flex flex-col space-y-2'
    }

    return (
        <div className={cn(orientationClasses[orientation], className)}>
            {children}
        </div>
    )
}

// Floating Action Button
interface FABProps extends Omit<ButtonProps, 'size' | 'variant'> {
    icon: React.ReactNode
    position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left'
}

export const FloatingActionButton: React.FC<FABProps> = ({
    icon,
    position = 'bottom-right',
    className,
    ...props
}) => {
    const positionClasses = {
        'bottom-right': 'fixed bottom-6 right-6',
        'bottom-left': 'fixed bottom-6 left-6',
        'top-right': 'fixed top-20 right-6',
        'top-left': 'fixed top-20 left-6'
    }

    return (
        <button
            className={cn(
                'w-14 h-14 bg-amber-600 hover:bg-amber-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 z-50',
                positionClasses[position],
                className
            )}
            {...props}
        >
            {icon}
        </button>
    )
}

// Call-to-Action Button with enhanced styling
interface CTAButtonProps extends ButtonProps {
    gradient?: boolean
    pulse?: boolean
}

export const CTAButton: React.FC<CTAButtonProps> = ({
    gradient = true,
    pulse = false,
    className,
    children,
    ...props
}) => {
    const gradientClasses = gradient
        ? 'bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700'
        : 'bg-amber-600 hover:bg-amber-700'

    const pulseClasses = pulse ? 'animate-pulse' : ''

    return (
        <Button
            className={cn(
                gradientClasses,
                pulseClasses,
                'text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300',
                className
            )}
            {...props}
        >
            {children}
        </Button>
    )
}

export default Button