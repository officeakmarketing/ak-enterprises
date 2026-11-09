import { NextResponse } from "next/server";
import { addDemoBooking, getDemoBookings } from "@/lib/demoStore";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const token = searchParams.get("token") || "";

    const bookings = getDemoBookings(token);
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
    const body = await req.json().catch(() => ({}));

    if (!body.customerName || !body.customerPhone) {
      return NextResponse.json(
        { success: false, error: "Missing customer details" },
        { status: 400 }
      );
    }

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

