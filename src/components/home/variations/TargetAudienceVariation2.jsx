"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { Check, X, SlidersHorizontal, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function TargetAudienceVariation2() {
  const [activeTab, setActiveTab] = useState("right"); // "right" | "wrong"

  const rightFitData = {
    title: "Who We Partner With",
    tag: "The Right Fit",
    summary:
      "Established service businesses that generate consistent revenue but are bottlenecked by manual processes, missed leads, and fragmented tools.",
    points: [
      "Consistent £15,000+ monthly revenue with proven client demand",
      "Experiencing lead drop-offs, slow response times, or phone chaos",
      "Ready to own permanent custom infrastructure rather than renting more SaaS apps",
      "Committed to serious operational optimization and scalable growth",
    ],
    ctaText: "Check Your Business Eligibility in 60s",
    ctaLink: "/contact",
    statusBadge: "QUALIFIED CANDIDATE",
  };

  const notRightFitData = {
    title: "Who We Respectfully Decline",
    tag: "Not The Right Fit",
    summary:
      "Early-stage ventures or businesses looking for quick vanity marketing fixes without addressing core operational workflows.",
    points: [
      "Brand-new startups with zero active clients or revenue history",
      "Looking for cheap ad management only without backend CRM / booking systems",
      "Shopping around for the cheapest freelance hourly rate on Fiverr/Upwork",
      "Unwilling to participate in the 20-minute operational audit process",
    ],
    ctaText: "Explore How Business Systems Work",
    ctaLink: "/what-we-build",
    statusBadge: "OUT OF SCOPE",
  };

  const current = activeTab === "right" ? rightFitData : notRightFitData;

  return (
    <section className="w-screen relative left-1/2 -translate-x-1/2 py-16 sm:py-20 lg:py-24 border-b border-muted-grey/20 bg-ink-black overflow-hidden">
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 border border-brand-gold/40 bg-brand-gold/5 px-3.5 py-1 rounded-full text-brand-gold text-[10px] sm:text-xs tracking-widest uppercase mb-4 font-bold">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Interactive Qualification • Option 2</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic text-white leading-tight mb-3">
              This is not for everyone.
            </h2>
            <p className="text-warm-grey/80 text-sm sm:text-base font-light">
              Toggle below to see exactly who we accept and who we turn away.
            </p>
          </div>
        </ScrollReveal>

        {/* Interactive Binary Switcher Bar */}
        <div className="flex justify-center mb-8 sm:mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-[#141416] border border-muted-grey/30 max-w-md w-full">
            <button
              onClick={() => setActiveTab("right")}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeTab === "right"
                  ? "bg-brand-gold text-ink-black shadow-lg shadow-brand-gold/20"
                  : "text-warm-grey hover:text-white"
              }`}
            >
              <Check className="w-4 h-4" />
              <span>The Right Fit</span>
            </button>
            <button
              onClick={() => setActiveTab("wrong")}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeTab === "wrong"
                  ? "bg-red-950/60 border border-red-800/50 text-red-200 shadow-lg shadow-red-950/40"
                  : "text-warm-grey hover:text-white"
              }`}
            >
              <X className="w-4 h-4" />
              <span>Who We Turn Away</span>
            </button>
          </div>
        </div>

        {/* Active Profile Card */}
        <ScrollReveal delay={0.1}>
          <div className="max-w-4xl mx-auto">
            <div
              className={`bg-[#0e0e10]/95 border rounded-3xl p-7 sm:p-10 lg:p-12 transition-all duration-500 shadow-2xl relative overflow-hidden ${
                activeTab === "right"
                  ? "border-brand-gold/50 shadow-[0_20px_60px_rgba(201,169,97,0.05)]"
                  : "border-red-900/40 shadow-[0_20px_60px_rgba(239,68,68,0.03)]"
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <span
                    className={`text-[10px] font-mono font-bold tracking-[0.2em] uppercase block mb-1.5 ${
                      activeTab === "right" ? "text-brand-gold" : "text-red-400"
                    }`}
                  >
                    {current.statusBadge}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif italic text-white font-bold">
                    {current.title}
                  </h3>
                </div>

                <span
                  className={`text-xs font-mono font-bold px-3 py-1.5 rounded-lg inline-block self-start md:self-auto uppercase tracking-wider ${
                    activeTab === "right"
                      ? "bg-brand-gold/15 border border-brand-gold/40 text-brand-gold"
                      : "bg-red-950/40 border border-red-900/40 text-red-400"
                  }`}
                >
                  {current.tag}
                </span>
              </div>

              <p className="text-warm-grey/90 text-sm sm:text-base leading-relaxed font-light mb-8 max-w-3xl">
                {current.summary}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {current.points.map((pt, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-[#141416]/60 border border-muted-grey/15 flex items-start gap-3"
                  >
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                        activeTab === "right"
                          ? "bg-brand-gold/20 text-brand-gold"
                          : "bg-red-950 text-red-400"
                      }`}
                    >
                      {activeTab === "right" ? (
                        <Check className="w-3 h-3" />
                      ) : (
                        <X className="w-3 h-3" />
                      )}
                    </div>
                    <span className="text-xs sm:text-sm text-white/90 font-light leading-snug">
                      {pt}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-muted-grey/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <span className="text-xs font-mono text-warm-grey/70">
                  {activeTab === "right"
                    ? "✓ 4 Guaranteed Deployment Slots / Mo"
                    : "✕ Zero Freelance / Ad-Only Engagements"}
                </span>
                <Link
                  href={current.ctaLink}
                  className={`inline-flex items-center gap-2 font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors ${
                    activeTab === "right"
                      ? "text-brand-gold hover:text-white"
                      : "text-warm-grey hover:text-white"
                  }`}
                >
                  <span>{current.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
