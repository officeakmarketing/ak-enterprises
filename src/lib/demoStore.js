// In-memory ring buffer for demo bookings (holds up to 100 most recent bookings)
let demoBookings = [];

export function addDemoBooking(booking) {
  const item = {
    id: `book_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    timestamp: new Date().toISOString(),
    ref: booking.ref || "DEMO-0000",
    businessName: booking.businessName || "Demo Business",
    trade: booking.trade || "General Service",
    service: booking.service || "Standard Appointment",
    price: booking.price !== undefined ? booking.price : 0,
    date: booking.date || "",
    time: booking.time || "",
    customerName: booking.customerName || "Walk-in Guest",
    customerPhone: booking.customerPhone || "",
    customerEmail: booking.customerEmail || "",
    token: booking.token || "demo-stand",
  };

  // Prepend new booking
  demoBookings.unshift(item);
  // Keep last 100 items
  if (demoBookings.length > 100) {
    demoBookings = demoBookings.slice(0, 100);
  }

  return item;
}

export function getDemoBookings(token) {
  if (!token) return demoBookings;
  // If a specific token is passed, filter by that token or return all if token is 'all' or default
  return demoBookings.filter((b) => b.token === token || token === "all" || !b.token);
}

