'use client'

import React, { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'

type TooltipPosition = 'top' | 'bottom' | 'left' | 'right'

interface TooltipProps {
    children: React.ReactNode
    content: React.ReactNode
    position?: TooltipPosition
    disabled?: boolean
    delay?: number
    className?: string
    contentClassName?: string
}

const Tooltip: React.FC<TooltipProps> = ({
    children,
    content,
    position = 'top',
    disabled = false,
    delay = 200,
    className,
    contentClassName
}) => {
    const [isVisible, setIsVisible] = useState(false)
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 })
    const triggerRef = useRef<HTMLDivElement>(null)
    const tooltipRef = useRef<HTMLDivElement>(null)
    const timeoutRef = useRef<NodeJS.Timeout | null>(null)

    const showTooltip = () => {
        if (disabled) return

        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }

        timeoutRef.current = setTimeout(() => {
            setIsVisible(true)
            updatePosition()
        }, delay)
    }

    const hideTooltip = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
        setIsVisible(false)
    }

    const updatePosition = () => {
        if (!triggerRef.current || !tooltipRef.current) return

        const triggerRect = triggerRef.current.getBoundingClientRect()
        const tooltipRect = tooltipRef.current.getBoundingClientRect()
        const scrollX = window.pageXOffset
        const scrollY = window.pageYOffset

        let x = 0
        let y = 0

        switch (position) {
            case 'top':
                x = triggerRect.left + scrollX + (triggerRect.width / 2) - (tooltipRect.width / 2)
                y = triggerRect.top + scrollY - tooltipRect.height - 8
                break
            case 'bottom':
                x = triggerRect.left + scrollX + (triggerRect.width / 2) - (tooltipRect.width / 2)
                y = triggerRect.bottom + scrollY + 8
                break
            case 'left':
                x = triggerRect.left + scrollX - tooltipRect.width - 8
                y = triggerRect.top + scrollY + (triggerRect.height / 2) - (tooltipRect.height / 2)
                break
            case 'right':
                x = triggerRect.right + scrollX + 8
                y = triggerRect.top + scrollY + (triggerRect.height / 2) - (tooltipRect.height / 2)
                break
        }

        // Ensure tooltip stays within viewport
        const viewport = {
            width: window.innerWidth,
            height: window.innerHeight
        }

        if (x < 0) x = 8
        if (x + tooltipRect.width > viewport.width) x = viewport.width - tooltipRect.width - 8
        if (y < 0) y = 8
        if (y + tooltipRect.height > viewport.height) y = viewport.height - tooltipRect.height - 8

        setTooltipPosition({ x, y })
    }

    useEffect(() => {
        if (isVisible) {
            updatePosition()
            window.addEventListener('scroll', updatePosition)
            window.addEventListener('resize', updatePosition)

            return () => {
                window.removeEventListener('scroll', updatePosition)
                window.removeEventListener('resize', updatePosition)
            }
        }
    }, [isVisible])

    const positionClasses = {
        top: 'mb-2',
        bottom: 'mt-2',
        left: 'mr-2',
        right: 'ml-2'
    }

    const arrowClasses = {
        top: 'top-full left-1/2 transform -translate-x-1/2 border-l-transparent border-r-transparent border-b-transparent border-t-gray-900',
        bottom: 'bottom-full left-1/2 transform -translate-x-1/2 border-l-transparent border-r-transparent border-t-transparent border-b-gray-900',
        left: 'left-full top-1/2 transform -translate-y-1/2 border-t-transparent border-b-transparent border-r-transparent border-l-gray-900',
        right: 'right-full top-1/2 transform -translate-y-1/2 border-t-transparent border-b-transparent border-l-transparent border-r-gray-900'
    }

    const tooltip = isVisible ? (
        <div
            ref={tooltipRef}
            className={`fixed z-50 px-3 py-2 text-sm text-white bg-gray-900 rounded-lg shadow-lg pointer-events-none animate-in fade-in-0 zoom-in-95 duration-200 ${positionClasses[position]} ${contentClassName}`}
            style={{
                left: tooltipPosition.x,
                top: tooltipPosition.y
            }}
        >
            {content}
            {/* Arrow */}
            <div
                className={`absolute w-0 h-0 border-4 ${arrowClasses[position]}`}
            />
        </div>
    ) : null

    return (
        <>
            <div
                ref={triggerRef}
                className={`inline-block ${className}`}
                onMouseEnter={showTooltip}
                onMouseLeave={hideTooltip}
                onFocus={showTooltip}
                onBlur={hideTooltip}
            >
                {children}
            </div>
            {typeof window !== 'undefined' && tooltip && createPortal(tooltip, document.body)}
        </>
    )
}

// Quick tooltip component for simple text tooltips
interface SimpleTooltipProps {
    text: string
    children: React.ReactNode
    position?: TooltipPosition
    className?: string
}

export const SimpleTooltip: React.FC<SimpleTooltipProps> = ({
    text,
    children,
    position = 'top',
    className
}) => {
    return (
        <Tooltip content={text} position={position} className={className}>
            {children}
        </Tooltip>
    )
}

// Icon with tooltip
interface IconTooltipProps {
    icon: React.ReactNode
    tooltip: string
    position?: TooltipPosition
    className?: string
    iconClassName?: string
}

export const IconTooltip: React.FC<IconTooltipProps> = ({
    icon,
    tooltip,
    position = 'top',
    className,
    iconClassName
}) => {
    return (
        <Tooltip content={tooltip} position={position} className={className}>
            <div className={`cursor-help ${iconClassName}`}>
                {icon}
            </div>
        </Tooltip>
    )
}

export default Tooltip