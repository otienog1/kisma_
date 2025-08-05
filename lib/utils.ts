// Format currency
export function formatCurrency(
  amount: number,
  currency: string = "USD"
): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(amount);
}

// Format date
export function formatDate(
  date: Date | string,
  options?: Intl.DateTimeFormatOptions
): string {
  const dateObj = typeof date === "string" ? new Date(date) : date;

  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return new Intl.DateTimeFormat("en-US", {
    ...defaultOptions,
    ...options,
  }).format(dateObj);
}

// Slugify string for URLs
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") // Remove special characters
    .replace(/[\s_-]+/g, "-") // Replace spaces and underscores with hyphens
    .replace(/^-+|-+$/g, ""); // Trim hyphens from start and end
}

// Extract excerpt from text
export function getExcerpt(text: string, maxLength: number = 150): string {
  if (text.length <= maxLength) return text;

  const trimmed = text.slice(0, maxLength);
  const lastSpaceIndex = trimmed.lastIndexOf(" ");

  return trimmed.slice(0, lastSpaceIndex) + "...";
}

// Validate email format
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Validate phone number (basic international format)
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^\+?[\d\s\-\(\)]+$/;
  return phoneRegex.test(phone) && phone.replace(/\D/g, "").length >= 7;
}

// Calculate reading time
export function calculateReadingTime(text: string): number {
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

// Generate random ID
export function generateId(): string {
  return Math.random().toString(36).substr(2, 9);
}

// Debounce function
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle function
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;

  interface ThrottleState {
    inThrottle: boolean;
  }

  return function executedFunction(
    this: unknown,
    ...args: Parameters<T>
  ): void {
    const state: ThrottleState = { inThrottle };
    if (!state.inThrottle) {
      func.apply(this, args);
      state.inThrottle = true;
      setTimeout(() => (state.inThrottle = false), limit);
      inThrottle = state.inThrottle;
    }
  };
}

// Local storage helpers
export const storage = {
  get: <T>(key: string): T | null => {
    if (typeof window === "undefined") return null;

    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error(`Error getting item from localStorage:`, error);
      return null;
    }
  },

  set: <T>(key: string, value: T): void => {
    if (typeof window === "undefined") return;

    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error setting item in localStorage:`, error);
    }
  },

  remove: (key: string): void => {
    if (typeof window === "undefined") return;

    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing item from localStorage:`, error);
    }
  },
};

// URL helpers
export function getBaseUrl(): string {
  if (typeof window !== "undefined") return "";
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
}

export function createAbsoluteUrl(path: string): string {
  return `${getBaseUrl()}${path.startsWith("/") ? path : `/${path}`}`;
}

// Array helpers
export function groupBy<T>(array: T[], key: keyof T): Record<string, T[]> {
  return array.reduce((groups, item) => {
    const group = String(item[key]);
    groups[group] = groups[group] || [];
    groups[group].push(item);
    return groups;
  }, {} as Record<string, T[]>);
}

export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Form validation helpers
export interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: any) => boolean;
}

export interface ValidationErrors {
  [key: string]: string;
}

export function validateForm<T extends Record<string, any>>(
  data: T,
  rules: Record<keyof T, ValidationRule>
): ValidationErrors {
  const errors: ValidationErrors = {};

  Object.entries(rules).forEach(([field, rule]) => {
    const value = data[field];

    if (rule.required && (!value || value.toString().trim() === "")) {
      errors[field] = `${field} is required`;
      return;
    }

    if (value && rule.minLength && value.toString().length < rule.minLength) {
      errors[field] = `${field} must be at least ${rule.minLength} characters`;
      return;
    }

    if (value && rule.maxLength && value.toString().length > rule.maxLength) {
      errors[
        field
      ] = `${field} must be no more than ${rule.maxLength} characters`;
      return;
    }

    if (value && rule.pattern && !rule.pattern.test(value.toString())) {
      errors[field] = `${field} format is invalid`;
      return;
    }

    if (value && rule.custom && !rule.custom(value)) {
      errors[field] = `${field} is invalid`;
      return;
    }
  });

  return errors;
}

// Image helpers
export function getOptimizedImageUrl(
  url: string,
  width?: number,
  height?: number,
  quality: number = 80
): string {
  if (!url.includes("unsplash.com")) return url;

  const params = new URLSearchParams();
  if (width) params.set("w", width.toString());
  if (height) params.set("h", height.toString());
  params.set("q", quality.toString());
  params.set("auto", "format");

  return `${url}?${params.toString()}`;
}

// Text helpers
export function capitalizeWords(text: string): string {
  return text.replace(/\b\w/g, (char) => char.toUpperCase());
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).replace(/\s+\S*$/, "") + "...";
}

// Number helpers
export function formatNumber(num: number): string {
  return new Intl.NumberFormat().format(num);
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

// Safari-specific utilities
export function calculateSafariDuration(
  startDate: Date,
  endDate: Date
): number {
  const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

export function formatSafariPrice(
  price: number,
  currency: string = "USD"
): string {
  return `From ${formatCurrency(price, currency)}`;
}

export function getSafariSeason(date: Date): string {
  const month = date.getMonth() + 1; // getMonth() returns 0-11

  if (month >= 7 && month <= 10) return "Dry Season (Peak Safari)";
  if (month >= 12 || month <= 3) return "Dry Season (Good Safari)";
  return "Wet Season (Green Season)";
}

// Error handling
export class AppError extends Error {
  constructor(
    message: string,
    public statusCode: number = 500,
    public code?: string
  ) {
    super(message);
    this.name = "AppError";
  }
}

export function handleApiError(error: unknown): {
  message: string;
  statusCode: number;
} {
  if (error instanceof AppError) {
    return { message: error.message, statusCode: error.statusCode };
  }

  if (error instanceof Error) {
    return { message: error.message, statusCode: 500 };
  }

  return { message: "An unexpected error occurred", statusCode: 500 };
}

export default {
  formatCurrency,
  formatDate,
  slugify,
  getExcerpt,
  isValidEmail,
  isValidPhone,
  calculateReadingTime,
  generateId,
  debounce,
  throttle,
  storage,
  getBaseUrl,
  createAbsoluteUrl,
  groupBy,
  shuffleArray,
  validateForm,
  getOptimizedImageUrl,
  capitalizeWords,
  truncateText,
  formatNumber,
  clamp,
  calculateSafariDuration,
  formatSafariPrice,
  getSafariSeason,
  AppError,
  handleApiError,
};
