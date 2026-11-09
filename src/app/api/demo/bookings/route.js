import { NextResponse } from "next/server";
import { addDemoBooking, getDemoBookings } from "@/lib/demoStore";

// In-memory rate limiting map: ip -> array of timestamps
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 10; // Cap 10 per minute per IP

function isRateLimited(ip) {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];
  const validTimestamps = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);

  if (validTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    rateLimitMap.set(ip, validTimestamps);
    return true;
  }

  validTimestamps.push(now);
  rateLimitMap.set(ip, validTimestamps);
  return false;
}

function getClientIp(req) {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  const realIp = req.headers.get("x-real-ip");
  if (realIp) return realIp.trim();
  return "127.0.0.1";
}

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const token = searchParams.get("token");

    // 2) GET with no token returns denied (make no-token mean denied)
    if (!token || !token.trim()) {
      return NextResponse.json(
        { success: false, error: "Access denied. Valid token required." },
        { status: 401 }
      );
    }

    const bookings = getDemoBookings(token);
    if (bookings === null) {
      return NextResponse.json(
        { success: false, error: "Access denied. Valid token required." },
        { status: 401 }
      );
    }

    return NextResponse.json({
      success: true,
      count: bookings.length,
      bookings,
    });
  } catch (err) {
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const ip = getClientIp(req);

    // 1) Rate limit: Cap 10 per minute per IP
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, error: "Rate limit exceeded (max 10 bookings per minute)." },
        { status: 429 }
      );
    }

    const body = await req.json().catch(() => ({}));

    // 1) Require token in POST
    const token = body.token;
    if (!token || typeof token !== "string" || !token.trim()) {
      return NextResponse.json(
        { success: false, error: "Unauthorized. Missing valid demo token." },
        { status: 401 }
      );
    }

    if (!body.customerName || !body.customerPhone) {
      return NextResponse.json(
        { success: false, error: "Missing customer details" },
        { status: 400 }
      );
    }

    // 3 & 4) Sanitized, deduplicated on ref, and clamped in demoStore
    const saved = addDemoBooking(body);

    return NextResponse.json({
      success: true,
      booking: saved,
    });
  } catch (err) {
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}

