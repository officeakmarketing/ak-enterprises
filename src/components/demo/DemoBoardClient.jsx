"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Logo from "@/components/ui/Logo";

export default function DemoBoardClient() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token") || "demo-stand";

  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [autoPoll, setAutoPoll] = useState(true);

  const fetchBookings = async () => {
    try {
      const res = await fetch(`/api/demo/bookings?token=${encodeURIComponent(token)}&_t=${Date.now()}`);
      if (res.ok) {
        const data = await res.json();
        if (data.success && Array.isArray(data.bookings)) {
          setBookings(data.bookings);
          setLastUpdated(new Date().toLocaleTimeString("en-GB"));
        }
      }
    } catch (err) {
      console.warn("Poll fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();

    if (!autoPoll) return;

    // Polling interval every 3 seconds for zero-refresh instant reaction
    const interval = setInterval(fetchBookings, 3000);
    return () => clearInterval(interval);
  }, [token, autoPoll]);

  return (
    <div className="min-h-screen bg-[#070708] text-white flex flex-col font-sans selection:bg-[#C9A961] selection:text-black">
      
      {/* Top Header */}
      <header className="border-b border-white/[0.08] bg-[#0C0C0E]/95 backdrop-blur-md px-4 sm:px-8 py-3.5 flex items-center justify-between sticky top-0 z-30">
        <div className="flex items-center gap-3 sm:gap-4">
          <Link href="/demo" className="inline-flex items-center">
            <Logo compactMobile={true} />
          </Link>
          <div className="h-4 w-px bg-white/10 hidden sm:block" />
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-warm-grey">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-white">Live Booking Board</span>
            <span className="text-warm-grey/50 hidden md:inline">&bull; Read Only</span>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Active Status Badge */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-[11px] font-mono text-warm-grey/70">
            <span>Auto-polling (3s)</span>
            {lastUpdated && <span>&bull; {lastUpdated}</span>}
          </div>

          <button
            type="button"
            onClick={fetchBookings}
            className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] text-xs font-mono uppercase tracking-wider text-warm-grey hover:text-white transition-colors"
          >
            Refresh
          </button>

          <Link
            href="/demo"
            className="px-3.5 py-1.5 rounded-lg bg-brand-gold text-ink-black font-bold text-xs font-mono uppercase tracking-wider hover:opacity-95 transition-opacity"
          >
            Stand Configurator &rarr;
          </Link>
        </div>
      </header>

      {/* Main Board Content */}
      <main className="flex-1 max-w-6xl w-full mx-auto p-4 sm:p-8 space-y-6">
        
        {/* Board KPI Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          <div className="bg-[#101012] border border-white/[0.08] rounded-2xl p-4 shadow-lg">
            <span className="text-[10px] font-mono uppercase tracking-widest text-warm-grey/60 block font-semibold">
              Total Captured
            </span>
            <div className="text-2xl sm:text-3xl font-mono font-bold text-white mt-1">
              {bookings.length}
            </div>
            <span className="text-[10px] font-mono text-emerald-400 mt-1 block">
              100% Zero Stripe Fee
            </span>
          </div>

          <div className="bg-[#101012] border border-white/[0.08] rounded-2xl p-4 shadow-lg">
            <span className="text-[10px] font-mono uppercase tracking-widest text-warm-grey/60 block font-semibold">
              Active Stand Stream
            </span>
            <div className="text-sm sm:text-base font-mono font-bold text-brand-gold mt-2 truncate">
              {token}
            </div>
            <span className="text-[10px] font-mono text-warm-grey/50 mt-1 block">
              Direct phone sink
            </span>
          </div>

          <div className="bg-[#101012] border border-white/[0.08] rounded-2xl p-4 shadow-lg col-span-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-warm-grey/60 block font-semibold">
              Live Flow Status
            </span>
            <p className="text-xs text-warm-grey/90 mt-1.5 leading-relaxed">
              When a prospect scans the QR and books on their phone, their reservation lands right here in under 3 seconds without refreshing.
            </p>
          </div>
        </div>

        {/* Live Bookings Table / Feed */}
        <div className="bg-[#101012] border border-white/[0.08] rounded-2xl overflow-hidden shadow-2xl">
          <div className="p-4 sm:p-5 border-b border-white/[0.08] flex items-center justify-between">
            <div>
              <h2 className="text-base sm:text-lg font-serif text-white font-semibold">
                Incoming Demo Reservations
              </h2>
              <p className="text-xs text-warm-grey/60 font-mono mt-0.5">
                Real-time push from phone prototypes
              </p>
            </div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full font-bold">
              Live Stream
            </span>
          </div>

          {loading ? (
            <div className="p-12 text-center text-warm-grey/60 font-mono text-xs">
              Connecting to live feed...
            </div>
          ) : bookings.length === 0 ? (
            <div className="p-12 text-center space-y-3">
              <div className="w-12 h-12 rounded-full mx-auto bg-white/[0.03] border border-white/10 flex items-center justify-center text-warm-grey/60">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <h3 className="text-sm font-semibold text-white">No demo bookings received yet</h3>
              <p className="text-xs text-warm-grey/60 max-w-sm mx-auto">
                Open <Link href="/demo" className="text-brand-gold underline">the Stand Configurator</Link>, scan the QR with any smartphone, and complete a test reservation. It will appear here instantly.
              </p>
            </div>
          ) : (
            <div className="divide-y divide-white/[0.06]">
              {bookings.map((booking) => (
                <div
                  key={booking.id}
                  className="p-4 sm:p-5 hover:bg-white/[0.02] transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-brand-gold/15 border border-brand-gold/30 flex items-center justify-center text-brand-gold font-mono font-bold text-xs shrink-0 mt-0.5">
                      #{booking.ref?.slice(-4) || "0000"}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-semibold text-white text-sm sm:text-base">
                          {booking.customerName}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-warm-grey/70">
                          {booking.trade}
                        </span>
                        <span className="text-[10px] font-mono text-brand-gold font-bold">
                          {booking.ref}
                        </span>
                      </div>

                      <div className="text-xs text-warm-grey/80 mt-1 flex items-center gap-2 flex-wrap">
                        <span className="text-white font-medium">{booking.service}</span>
                        <span className="text-white/20">&bull;</span>
                        <span className="font-mono text-brand-gold">
                          {booking.price === 0 ? "Free" : `£${booking.price}`}
                        </span>
                        <span className="text-white/20">&bull;</span>
                        <span className="font-mono">{booking.date} at {booking.time}</span>
                      </div>

                      <div className="text-[11px] font-mono text-warm-grey/60 mt-1.5 flex items-center gap-3">
                        <span>📱 {booking.customerPhone}</span>
                        {booking.customerEmail && <span>✉️ {booking.customerEmail}</span>}
                      </div>
                    </div>
                  </div>

                  <div className="text-right shrink-0 flex md:flex-col items-center md:items-end justify-between border-t md:border-0 border-white/[0.04] pt-2 md:pt-0">
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                      Pay on Arrival
                    </span>
                    <span className="text-[10px] font-mono text-warm-grey/50 mt-1">
                      {booking.timestamp ? new Date(booking.timestamp).toLocaleTimeString("en-GB") : ""}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </main>
    </div>
  );
}

