'use client'

import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ModalProps {
    isOpen: boolean
    onClose: () => void
    title?: string
    children: React.ReactNode
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
    showCloseButton?: boolean
    closeOnOverlayClick?: boolean
    closeOnEscape?: boolean
    className?: string
    overlayClassName?: string
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    title,
    children,
    size = 'md',
    showCloseButton = true,
    closeOnOverlayClick = true,
    closeOnEscape = true,
    className,
    overlayClassName
}) => {
    const modalRef = useRef<HTMLDivElement>(null)
    const firstFocusableElementRef = useRef<HTMLElement | null>(null)
    const lastFocusableElementRef = useRef<HTMLElement | null>(null)

    // Size classes
    const sizeClasses = {
        sm: 'max-w-md',
        md: 'max-w-2xl',
        lg: 'max-w-4xl',
        xl: 'max-w-6xl',
        full: 'max-w-full mx-4'
    }

    // Handle escape key
    useEffect(() => {
        if (!closeOnEscape) return

        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                onClose()
            }
        }

        document.addEventListener('keydown', handleEscape)
        return () => document.removeEventListener('keydown', handleEscape)
    }, [isOpen, onClose, closeOnEscape])

    // Handle focus management
    useEffect(() => {
        if (!isOpen) return

        const modalElement = modalRef.current
        if (!modalElement) return

        // Find focusable elements
        const focusableElements = modalElement.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )

        firstFocusableElementRef.current = focusableElements[0] as HTMLElement
        lastFocusableElementRef.current = focusableElements[focusableElements.length - 1] as HTMLElement

        // Focus first element
        if (firstFocusableElementRef.current) {
            firstFocusableElementRef.current.focus()
        }

        // Trap focus within modal
        const handleTabKey = (e: KeyboardEvent) => {
            if (e.key !== 'Tab') return

            if (e.shiftKey) {
                // Shift + Tab
                if (document.activeElement === firstFocusableElementRef.current) {
                    e.preventDefault()
                    lastFocusableElementRef.current?.focus()
                }
            } else {
                // Tab
                if (document.activeElement === lastFocusableElementRef.current) {
                    e.preventDefault()
                    firstFocusableElementRef.current?.focus()
                }
            }
        }

        document.addEventListener('keydown', handleTabKey)
        return () => document.removeEventListener('keydown', handleTabKey)
    }, [isOpen])

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }

        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    // Handle overlay click
    const handleOverlayClick = (e: React.MouseEvent) => {
        if (closeOnOverlayClick && e.target === e.currentTarget) {
            onClose()
        }
    }

    if (!isOpen) return null

    const modalContent = (
        <div
            className={cn(
                'fixed inset-0 z-50 flex items-center justify-center p-4',
                'bg-black bg-opacity-50 backdrop-blur-sm',
                overlayClassName
            )}
            onClick={handleOverlayClick}
        >
            <div
                ref={modalRef}
                className={cn(
                    'relative bg-white rounded-2xl shadow-2xl max-h-[90vh] overflow-hidden',
                    'transform transition-all duration-300 scale-100',
                    sizeClasses[size],
                    'animate-in fade-in-0 zoom-in-95 duration-300',
                    className
                )}
                role="dialog"
                aria-modal="true"
                aria-labelledby={title ? 'modal-title' : undefined}
            >
                {/* Header */}
                {(title || showCloseButton) && (
                    <div className="flex items-center justify-between p-6 border-b border-gray-200">
                        {title && (
                            <h2 id="modal-title" className="text-xl font-bold text-gray-900">
                                {title}
                            </h2>
                        )}
                        {showCloseButton && (
                            <button
                                onClick={onClose}
                                className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100"
                                aria-label="Close modal"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        )}
                    </div>
                )}

                {/* Content */}
                <div className="overflow-y-auto max-h-[calc(90vh-120px)]">
                    {children}
                </div>
            </div>
        </div>
    )

    // Render modal in portal
    return typeof window !== 'undefined'
        ? createPortal(modalContent, document.body)
        : null
}

// Modal Header Component
interface ModalHeaderProps {
    children: React.ReactNode
    className?: string
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({ children, className }) => {
    return (
        <div className={cn('px-6 py-4 border-b border-gray-200', className)}>
            {children}
        </div>
    )
}

// Modal Body Component
interface ModalBodyProps {
    children: React.ReactNode
    className?: string
}

export const ModalBody: React.FC<ModalBodyProps> = ({ children, className }) => {
    return (
        <div className={cn('px-6 py-4', className)}>
            {children}
        </div>
    )
}

// Modal Footer Component
interface ModalFooterProps {
    children: React.ReactNode
    className?: string
}

export const ModalFooter: React.FC<ModalFooterProps> = ({ children, className }) => {
    return (
        <div className={cn('px-6 py-4 border-t border-gray-200 flex justify-end space-x-3', className)}>
            {children}
        </div>
    )
}

// Confirmation Modal
interface ConfirmationModalProps {
    isOpen: boolean
    onClose: () => void
    onConfirm: () => void
    title: string
    message: string
    confirmText?: string
    cancelText?: string
    variant?: 'danger' | 'warning' | 'info'
    loading?: boolean
}

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
    isOpen,
    onClose,
    onConfirm,
    title,
    message,
    confirmText = 'Confirm',
    cancelText = 'Cancel',
    variant = 'info',
    loading = false
}) => {
    const variantStyles = {
        danger: {
            icon: '🗑️',
            confirmButtonClass: 'bg-red-600 hover:bg-red-700 text-white'
        },
        warning: {
            icon: '⚠️',
            confirmButtonClass: 'bg-amber-600 hover:bg-amber-700 text-white'
        },
        info: {
            icon: 'ℹ️',
            confirmButtonClass: 'bg-blue-600 hover:bg-blue-700 text-white'
        }
    }

    const style = variantStyles[variant]

    return (
        <Modal isOpen={isOpen} onClose={onClose} size="sm">
            <ModalBody>
                <div className="text-center">
                    <div className="text-4xl mb-4">{style.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
                    <p className="text-gray-600 mb-6">{message}</p>
                </div>
            </ModalBody>
            <ModalFooter>
                <button
                    onClick={onClose}
                    disabled={loading}
                    className="px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50"
                >
                    {cancelText}
                </button>
                <button
                    onClick={onConfirm}
                    disabled={loading}
                    className={cn(
                        'px-4 py-2 rounded-lg transition-colors disabled:opacity-50',
                        style.confirmButtonClass
                    )}
                >
                    {loading ? 'Processing...' : confirmText}
                </button>
            </ModalFooter>
        </Modal>
    )
}

// Image Modal for gallery viewing
interface ImageModalProps {
    isOpen: boolean
    onClose: () => void
    imageSrc: string
    imageAlt: string
    caption?: string
}

export const ImageModal: React.FC<ImageModalProps> = ({
    isOpen,
    onClose,
    imageSrc,
    imageAlt,
    caption
}) => {
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            size="full"
            className="bg-black"
            overlayClassName="bg-black bg-opacity-90"
        >
            <div className="relative h-full flex items-center justify-center p-4">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 p-2"
                    aria-label="Close"
                >
                    <X className="w-8 h-8" />
                </button>

                <div className="max-w-full max-h-full">
                    <img
                        src={imageSrc}
                        alt={imageAlt}
                        className="max-w-full max-h-[85vh] object-contain"
                    />
                    {caption && (
                        <div className="text-center mt-4">
                            <p className="text-white text-lg">{caption}</p>
                        </div>
                    )}
                </div>
            </div>
        </Modal>
    )
}

// Hook for managing modal state
export const useModal = (initialState = false) => {
    const [isOpen, setIsOpen] = React.useState(initialState)

    const openModal = React.useCallback(() => setIsOpen(true), [])
    const closeModal = React.useCallback(() => setIsOpen(false), [])
    const toggleModal = React.useCallback(() => setIsOpen(prev => !prev), [])

    return {
        isOpen,
        openModal,
        closeModal,
        toggleModal
    }
}

export default Modal