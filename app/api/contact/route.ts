import { NextRequest, NextResponse } from "next/server";
import {
  validateForm,
  isValidEmail,
  isValidPhone,
  handleApiError,
} from "@/lib/utils";

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  country?: string;
  travelers: string;
  serviceType: string;
  destination?: string;
  travelDates?: string;
  budget?: string;
  message: string;
}

// Email service configuration (you would use a real service like SendGrid, Mailgun, etc.)
async function sendEmail(data: ContactFormData) {
  // In a real application, you would integrate with an email service
  // For now, we'll simulate the email sending

  const emailContent = `
    New Safari Inquiry from ${data.name}
    
    Contact Information:
    - Name: ${data.name}
    - Email: ${data.email}
    - Phone: ${data.phone || "Not provided"}
    - Country: ${data.country || "Not provided"}
    
    Trip Details:
    - Service Type: ${data.serviceType}
    - Destination: ${data.destination || "Not specified"}
    - Number of Travelers: ${data.travelers}
    - Travel Dates: ${data.travelDates || "Flexible"}
    - Budget: ${data.budget || "Not specified"}
    
    Message:
    ${data.message}
    
    Sent from: Kisima Safaris Website
    Date: ${new Date().toISOString()}
  `;

  // Simulate email sending delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log("Email would be sent:", emailContent);

  // In production, you would return the actual email service response
  return { success: true, messageId: `msg_${Date.now()}` };
}

// Validate contact form data
function validateContactForm(data: ContactFormData) {
  const rules = {
    name: { required: true, minLength: 2, maxLength: 100 },
    email: { required: true, custom: isValidEmail },
    phone: { custom: (value: string) => !value || isValidPhone(value) },
    country: { custom: (value: string) => !value || value.trim().length >= 2 },
    travelers: { required: true },
    serviceType: { required: true },
    destination: { custom: (value: string) => !value || value.trim().length >= 2 },
    travelDates: { custom: (value: string) => !value || value.trim().length >= 3 },
    budget: { custom: (value: string) => !value || value.trim().length >= 1 },
    message: { required: true, minLength: 10, maxLength: 1000 },
  };

  return validateForm(data, rules);
}

// Rate limiting (simple in-memory implementation)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 5; // Max 5 requests per 15 minutes

  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }

  if (record.count >= maxRequests) {
    return false;
  }

  record.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip =
      request.ip || request.headers.get("x-forwarded-for") || "unknown";

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { success: false, error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    // Parse request body
    const body = await request.json();

    // Validate required fields
    const errors = validateContactForm(body);

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { success: false, error: "Validation failed", details: errors },
        { status: 400 }
      );
    }

    // Sanitize data
    const sanitizedData: ContactFormData = {
      name: body.name.trim(),
      email: body.email.trim().toLowerCase(),
      phone: body.phone?.trim(),
      country: body.country?.trim(),
      travelers: body.travelers,
      serviceType: body.serviceType,
      destination: body.destination?.trim(),
      travelDates: body.travelDates?.trim(),
      budget: body.budget,
      message: body.message.trim(),
    };

    // Send email notification
    await sendEmail(sanitizedData);

    // Log the inquiry (in production, save to database)
    console.log("New safari inquiry received:", {
      name: sanitizedData.name,
      email: sanitizedData.email,
      serviceType: sanitizedData.serviceType,
      timestamp: new Date().toISOString(),
    });

    // Return success response
    return NextResponse.json({
      success: true,
      message:
        "Your safari inquiry has been received! We'll contact you within 24 hours.",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    const { message, statusCode } = handleApiError(error);

    return NextResponse.json(
      { success: false, error: message },
      { status: statusCode }
    );
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}

export async function PUT() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}

export async function DELETE() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
