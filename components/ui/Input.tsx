import React, { forwardRef } from 'react'
import { Eye, EyeOff, AlertCircle, CheckCircle, Search } from 'lucide-react'

// Base Input Props
interface BaseInputProps {
    label?: string
    error?: string
    success?: string
    helperText?: string
    required?: boolean
    fullWidth?: boolean
    leftIcon?: React.ReactNode
    rightIcon?: React.ReactNode
    className?: string
    wrapperClassName?: string
}

// Text Input Component
interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>, BaseInputProps {
    size?: 'sm' | 'md' | 'lg'
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({
    label,
    error,
    success,
    helperText,
    required = false,
    fullWidth = false,
    leftIcon,
    rightIcon,
    size = 'md',
    className,
    wrapperClassName,
    ...props
}, ref) => {
    const inputId = props.id || `input-${Math.random().toString(36).substr(2, 9)}`

    const sizeClasses = {
        sm: 'px-3 py-2 text-sm',
        md: 'px-4 py-3 text-base',
        lg: 'px-5 py-4 text-lg'
    }

    const baseClasses = 'block w-full border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1'

    const stateClasses = error
        ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
        : success
            ? 'border-green-300 focus:border-green-500 focus:ring-green-200'
            : 'border-gray-300 focus:border-amber-500 focus:ring-amber-200 hover:border-gray-400'

    const iconClasses = leftIcon || rightIcon ? 'relative' : ''
    const paddingClasses = leftIcon ? 'pl-12' : rightIcon ? 'pr-12' : ''

    return (
        <div className={`${fullWidth ? 'w-full' : ''}`}>
            {label && (
                <label
                    htmlFor={inputId}
                    className="block text-sm font-semibold text-gray-700 mb-2"
                >
                    {label}
                    {required && <span className="text-red-500 ml-1">*</span>}
                </label>
            )}

            <div className={iconClasses}>
                {leftIcon && (
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                        {leftIcon}
                    </div>
                )}

                <input
                    ref={ref}
                    id={inputId}
                    className={`
                        ${baseClasses}
                        ${sizeClasses[size]}
                        ${stateClasses}
                        ${paddingClasses},
                        ${className}
                    `}
                    {...props}
                />

                {rightIcon && (
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                        {rightIcon}
                    </div>
                )}

                {error && (
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500">
                        <AlertCircle className="w-5 h-5" />
                    </div>
                )}

                {success && !rightIcon && (
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500">
                        <CheckCircle className="w-5 h-5" />
                    </div>
                )}
            </div>

            {/* Helper text, error, or success message */}
            {(error || success || helperText) && (
                <div className="mt-2">
                    {error && (
                        <p className="text-sm text-red-600 flex items-center">
                            <AlertCircle className="w-4 h-4 mr-1" />
                            {error}
                        </p>
                    )}
                    {success && !error && (
                        <p className="text-sm text-green-600 flex items-center">
                            <CheckCircle className="w-4 h-4 mr-1" />
                            {success}
                        </p>
                    )}
                    {helperText && !error && !success && (
                        <p className="text-sm text-gray-500">{helperText}</p>
                    )}
                </div>
            )}
        </div>
    )
})

Input.displayName = 'Input'

// Password Input Component
interface PasswordInputProps extends Omit<InputProps, 'type' | 'rightIcon'> {
    showPasswordToggle?: boolean
}

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(({
    showPasswordToggle = true,
    ...props
}, ref) => {
    const [showPassword, setShowPassword] = React.useState(false)

    const togglePassword = () => setShowPassword(!showPassword)

    return (
        <Input
            ref={ref}
            type={showPassword ? 'text' : 'password'}
            rightIcon={
                showPasswordToggle && (
                    <button
                        type="button"
                        onClick={togglePassword}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                        tabIndex={-1}
                    >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                )
            }
            {...props}
        />
    )
})

PasswordInput.displayName = 'PasswordInput'

// Search Input Component
interface SearchInputProps extends Omit<InputProps, 'leftIcon' | 'type'> {
    onSearch?: (value: string) => void
    searchDelay?: number
}

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(({
    onSearch,
    searchDelay = 300,
    placeholder = "Search...",
    ...props
}, ref) => {
    const [searchValue, setSearchValue] = React.useState('')
    const timeoutRef = React.useRef<NodeJS.Timeout | null>(null)

    React.useEffect(() => {
        if (onSearch) {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }

            timeoutRef.current = setTimeout(() => {
                onSearch(searchValue)
            }, searchDelay)
        }

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
        }
    }, [searchValue, onSearch, searchDelay])

    return (
        <Input
            ref={ref}
            type="search"
            placeholder={placeholder}
            leftIcon={<Search className="w-5 h-5" />}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            {...props}
        />
    )
})

SearchInput.displayName = 'SearchInput'

// Textarea Component
interface TextareaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'>, BaseInputProps {
    size?: 'sm' | 'md' | 'lg'
    resize?: boolean
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({
    label,
    error,
    success,
    helperText,
    required = false,
    fullWidth = false,
    size = 'md',
    resize = true,
    className,
    wrapperClassName,
    rows = 4,
    ...props
}, ref) => {
    const textareaId = props.id || `textarea-${Math.random().toString(36).substr(2, 9)}`

    const sizeClasses = {
        sm: 'px-3 py-2 text-sm',
        md: 'px-4 py-3 text-base',
        lg: 'px-5 py-4 text-lg'
    }

    const baseClasses = 'block w-full border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1'

    const stateClasses = error
        ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
        : success
            ? 'border-green-300 focus:border-green-500 focus:ring-green-200'
            : 'border-gray-300 focus:border-amber-500 focus:ring-amber-200 hover:border-gray-400'

    const resizeClasses = resize ? 'resize-y' : 'resize-none'

    return (
        <div className={`${fullWidth ? 'w-full' : ''}`}>
            {label && (
                <label
                    htmlFor={textareaId}
                    className="block text-sm font-semibold text-gray-700 mb-2"
                >
                    {label}
                    {required && <span className="text-amber-500 ml-1">*</span>}
                </label>
            )}

            <textarea
                ref={ref}
                id={textareaId}
                rows={rows}
                className={`
                    ${baseClasses}
                    ${sizeClasses[size]}
                    ${stateClasses}
                    ${resizeClasses}
                    ${className}`
                }
                {...props}
            />

            {/* Helper text, error, or success message */}
            {(error || success || helperText) && (
                <div className="mt-2">
                    {error && (
                        <p className="text-sm text-red-600 flex items-center">
                            <AlertCircle className="w-4 h-4 mr-1" />
                            {error}
                        </p>
                    )}
                    {success && !error && (
                        <p className="text-sm text-green-600 flex items-center">
                            <CheckCircle className="w-4 h-4 mr-1" />
                            {success}
                        </p>
                    )}
                    {helperText && !error && !success && (
                        <p className="text-sm text-gray-500">{helperText}</p>
                    )}
                </div>
            )}
        </div>
    )
})

Textarea.displayName = 'Textarea'

// Select Component
interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'>, BaseInputProps {
    size?: 'sm' | 'md' | 'lg'
    options: Array<{ value: string; label: string; disabled?: boolean }>
    placeholder?: string
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(({
    label,
    error,
    success,
    helperText,
    required = false,
    fullWidth = false,
    size = 'md',
    options,
    placeholder,
    className,
    wrapperClassName,
    ...props
}, ref) => {
    const selectId = props.id || `select-${Math.random().toString(36).substr(2, 9)}`

    const sizeClasses = {
        sm: 'px-3 py-2 text-sm',
        md: 'px-4 py-3 text-base',
        lg: 'px-5 py-4 text-lg'
    }

    const baseClasses = 'block w-full border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 bg-white cursor-pointer'

    const stateClasses = error
        ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
        : success
            ? 'border-green-300 focus:border-green-500 focus:ring-green-200'
            : 'border-gray-300 focus:border-amber-500 focus:ring-amber-200 hover:border-gray-400'

    return (
        <div className={`${fullWidth ? 'w-full' : ''}`}>
            {label && (
                <label
                    htmlFor={selectId}
                    className="block text-sm font-semibold text-gray-700 mb-2"
                >
                    {label}
                    {required && <span className="text-amber-500 ml-1">*</span>}
                </label>
            )}

            <select
                ref={ref}
                id={selectId}
                className={`
                    ${baseClasses}
                    ${sizeClasses[size]}
                    ${stateClasses}
                    ${className}
                `}
                {...props}
            >
                {placeholder && (
                    <option value="" disabled>
                        {placeholder}
                    </option>
                )}
                {options.map((option) => (
                    <option
                        key={option.value}
                        value={option.value}
                        disabled={option.disabled}
                    >
                        {option.label}
                    </option>
                ))}
            </select>

            {/* Helper text, error, or success message */}
            {(error || success || helperText) && (
                <div className="mt-2">
                    {error && (
                        <p className="text-sm text-red-600 flex items-center">
                            <AlertCircle className="w-4 h-4 mr-1" />
                            {error}
                        </p>
                    )}
                    {success && !error && (
                        <p className="text-sm text-green-600 flex items-center">
                            <CheckCircle className="w-4 h-4 mr-1" />
                            {success}
                        </p>
                    )}
                    {helperText && !error && !success && (
                        <p className="text-sm text-gray-500">{helperText}</p>
                    )}
                </div>
            )}
        </div>
    )
})

Select.displayName = 'Select'

// Number Input with increment/decrement buttons
interface NumberInputProps extends Omit<InputProps, 'type'> {
    min?: number
    max?: number
    step?: number
    showControls?: boolean
}

export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(({
    min,
    max,
    step = 1,
    showControls = true,
    value,
    onChange,
    ...props
}, ref) => {
    const [internalValue, setInternalValue] = React.useState(value || 0)

    const currentValue = value !== undefined ? value : internalValue

    const handleIncrement = () => {
        const newValue = Number(currentValue) + step
        const finalValue = max !== undefined ? Math.min(newValue, max) : newValue

        if (onChange && ref && typeof ref !== 'function' && ref.current) {
            const nativeInput = ref.current;
            const event = Object.create(null);
            Object.defineProperty(event, 'target', { value: nativeInput, writable: false });
            nativeInput.value = String(finalValue);
            onChange(event as React.ChangeEvent<HTMLInputElement>);
        } else {
            setInternalValue(finalValue);
        }
    }

    const handleDecrement = () => {
        const newValue = Number(currentValue) - step
        const finalValue = min !== undefined ? Math.max(newValue, min) : newValue

        if (onChange) {
            const event = {
                ...new Event('change'),
                target: {
                    value: finalValue,
                },
            } as unknown as React.ChangeEvent<HTMLInputElement>;
            onChange(event);
        } else {
            setInternalValue(finalValue);
        }
    }

    return (
        <div className="relative">
            <Input
                ref={ref}
                type="number"
                min={min}
                max={max}
                step={step}
                value={currentValue}
                onChange={onChange || ((e) => setInternalValue(Number(e.target.value)))}
                rightIcon={
                    showControls && (
                        <div className="flex flex-col">
                            <button
                                type="button"
                                onClick={handleIncrement}
                                className="text-gray-400 hover:text-gray-600 p-0.5"
                                tabIndex={-1}
                            >
                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                            <button
                                type="button"
                                onClick={handleDecrement}
                                className="text-gray-400 hover:text-gray-600 p-0.5"
                                tabIndex={-1}
                            >
                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    )
                }
                {...props}
            />
        </div>
    )
})

NumberInput.displayName = 'NumberInput'

export default Input