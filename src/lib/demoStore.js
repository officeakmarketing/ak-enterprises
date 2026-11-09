// In-memory ring buffer for demo bookings (holds up to 100 most recent bookings)
let demoBookings = [];

// Helper to strip HTML tags and scripts to prevent XSS
export function sanitizeString(input, maxLength = 150) {
  if (typeof input !== "string") return "";
  // Strip tags and quotes/dangerous chars
  const stripped = input
    .replace(/<[^>]*>?/gm, "")
    .replace(/[&<>"']/g, (m) => {
      switch (m) {
        case "&": return "&amp;";
        case "<": return "&lt;";
        case ">": return "&gt;";
        case '"': return "&quot;";
        case "'": return "&#039;";
        default: return m;
      }
    })
    .trim();
  return stripped.slice(0, maxLength);
}

export function addDemoBooking(booking) {
  const ref = sanitizeString(booking.ref || `DEMO-${Math.floor(1000 + Math.random() * 9000)}`, 32);

  // 4) Dedupe on ref: if ref already exists, update it or return existing
  const existing = demoBookings.find((b) => b.ref === ref);
  if (existing) {
    return existing;
  }

  // 4) Clamp price 1 to 9999 and slot 15 to 240
  const rawPrice = Number(booking.price);
  const clampedPrice = isNaN(rawPrice) ? 0 : Math.min(Math.max(Math.round(rawPrice), 1), 9999);

  const rawSlot = Number(booking.slot || booking.duration);
  const clampedSlot = isNaN(rawSlot) ? 30 : Math.min(Math.max(Math.round(rawSlot), 15), 240);

  const item = {
    id: `book_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
    timestamp: new Date().toISOString(),
    ref,
    businessName: sanitizeString(booking.businessName || "Demo Business", 80),
    trade: sanitizeString(booking.trade || "General Service", 80),
    service: sanitizeString(booking.service || "Standard Appointment", 100),
    price: clampedPrice,
    slot: clampedSlot,
    date: sanitizeString(booking.date || "", 30),
    time: sanitizeString(booking.time || "", 20),
    customerName: sanitizeString(booking.customerName || "Walk-in Guest", 80),
    customerPhone: sanitizeString(booking.customerPhone || "", 30),
    customerEmail: sanitizeString(booking.customerEmail || "", 80),
    token: sanitizeString(booking.token || "demo-stand", 50),
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
  // 2) Require token: GET with no token returns denied (empty / unauthorized)
  if (!token || typeof token !== "string" || !token.trim()) {
    return null; // Signals unauthorized/no-token
  }

  // Clear any existing test bookings matching JARVIS-QA-1 or JARVIS-XSS
  demoBookings = demoBookings.filter(
    (b) => !b.ref?.includes("JARVIS-QA-1") && !b.ref?.includes("JARVIS-XSS")
  );

  const trimmedToken = token.trim();
  if (trimmedToken === "all") {
    return demoBookings;
  }

  return demoBookings.filter((b) => b.token === trimmedToken);
}

// Function to clear test bookings explicitly if needed
export function clearTestBookings() {
  demoBookings = demoBookings.filter(
    (b) => !b.ref?.includes("JARVIS-QA-1") && !b.ref?.includes("JARVIS-XSS")
  );
  return demoBookings;
}

