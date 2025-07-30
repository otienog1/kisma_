import { NextRequest, NextResponse } from "next/server";
import { isValidEmail, handleApiError } from "@/lib/utils";

interface NewsletterSubscription {
  email: string;
  source?: string;
  timestamp: string;
}

// Simple in-memory storage for demo (use a real database in production)
const subscribers = new Set<string>();

// Rate limiting for newsletter subscriptions
const newsletterRateLimit = new Map<
  string,
  { count: number; resetTime: number }
>();

function checkNewsletterRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 60 * 1000; // 1 hour
  const maxRequests = 10; // Max 10 newsletter signups per hour

  const record = newsletterRateLimit.get(ip);

  if (!record || now > record.resetTime) {
    newsletterRateLimit.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }

  if (record.count >= maxRequests) {
    return false;
  }

  record.count++;
  return true;
}

async function subscribeToNewsletter(email: string) {
  // In production, integrate with email service like Mailchimp, ConvertKit, etc.

  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Add to our simple storage
  subscribers.add(email.toLowerCase());

  console.log(`Newsletter subscription: ${email}`);

  return { success: true, subscriberId: `sub_${Date.now()}` };
}

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.ip || request.headers.get("x-forwarded-for") || "unknown";

    // Check rate limit
    if (!checkNewsletterRateLimit(ip)) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many subscription attempts. Please try again later.",
        },
        { status: 429 }
      );
    }

    const { email, source } = await request.json();

    // Validate email
    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const normalizedEmail = email.trim().toLowerCase();

    // Check if already subscribed
    if (subscribers.has(normalizedEmail)) {
      return NextResponse.json(
        {
          success: false,
          error: "This email is already subscribed to our newsletter.",
        },
        { status: 409 }
      );
    }

    // Subscribe to newsletter
    await subscribeToNewsletter(normalizedEmail);

    // Log subscription
    const subscription: NewsletterSubscription = {
      email: normalizedEmail,
      source: source || "website",
      timestamp: new Date().toISOString(),
    };

    console.log("Newsletter subscription:", subscription);

    return NextResponse.json({
      success: true,
      message:
        "Thank you for subscribing! You'll receive our latest safari updates and deals.",
    });
  } catch (error) {
    console.error("Newsletter subscription error:", error);

    const { message, statusCode } = handleApiError(error);

    return NextResponse.json(
      { success: false, error: message },
      { status: statusCode }
    );
  }
}

// Get subscription status (for checking if email is already subscribed)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get("email");

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { error: "Valid email parameter required" },
        { status: 400 }
      );
    }

    const isSubscribed = subscribers.has(email.toLowerCase());

    return NextResponse.json({
      email: email.toLowerCase(),
      subscribed: isSubscribed,
    });
  } catch (error) {
    console.error("Newsletter check error:", error);

    const { message, statusCode } = handleApiError(error);

    return NextResponse.json({ error: message }, { status: statusCode });
  }
}

// Unsubscribe endpoint
export async function DELETE(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { success: false, error: "Valid email required" },
        { status: 400 }
      );
    }

    const normalizedEmail = email.trim().toLowerCase();

    if (!subscribers.has(normalizedEmail)) {
      return NextResponse.json(
        { success: false, error: "Email not found in our newsletter list." },
        { status: 404 }
      );
    }

    // Remove from newsletter
    subscribers.delete(normalizedEmail);

    console.log(`Newsletter unsubscribe: ${normalizedEmail}`);

    return NextResponse.json({
      success: true,
      message: "You have been successfully unsubscribed from our newsletter.",
    });
  } catch (error) {
    console.error("Newsletter unsubscribe error:", error);

    const { message, statusCode } = handleApiError(error);

    return NextResponse.json(
      { success: false, error: message },
      { status: statusCode }
    );
  }
}
