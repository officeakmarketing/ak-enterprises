"use client";

import React from "react";
import Link from "next/link";
import CustomVideoPlayer from "@/components/ui/CustomVideoPlayer";

export default function ThankYouPage() {
  return (
    <div className="w-full min-h-screen bg-ink-black flex flex-col items-center pt-12 pb-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Background glow effects to match the dark aesthetic */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="w-full max-w-4xl mx-auto flex flex-col items-center relative z-10">
        
        {/* Video Player */}
        <div className="w-full max-w-4xl mb-16">
          <CustomVideoPlayer src="/demo.mp4" />
        </div>

        {/* Confirmation Text Section */}
        <div className="w-full flex flex-col items-center text-center">
          <div className="w-48 h-[2px] bg-white mb-8"></div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-brand-gold mb-6 tracking-wide">
            CONFIRM YOUR CALL.
          </h1>
          
          <p className="text-white text-lg md:text-xl lg:text-2xl font-light mb-16 max-w-3xl leading-relaxed">
            I have sent you confirmation of your calls time and date via email & text,
            please make sure that you put this in your calendar right now.
          </p>

          <p className="text-white text-xl md:text-2xl font-bold mb-10 max-w-4xl leading-tight">
            <span className="text-brand-gold font-serif italic">IMPORTANT:</span> The "invitation from unknown sender" email may
            give the option to click <span className="text-brand-gold">'I know the sender'</span> instead of <span className="text-brand-gold">'Add to
            calendar'</span>. If this is the case, please click <span className="text-brand-gold">'I know the sender'</span>
            <br/>button. Just As Shown Below
          </p>
        </div>

        {/* Mock Calendar Image Block */}
        <div className="w-full max-w-4xl bg-[#eeeeee] rounded-sm p-4 sm:p-6 mb-12 shadow-xl border border-white/20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="text-[#333] text-xs sm:text-sm mb-4">
                This event isn't in your calendar yet. You haven't interacted with hello@cal.com before. Do you want to automatically add this and future invitations from them to your calendar?
              </p>
              <div className="flex items-center gap-4">
                <button className="bg-[#f1f3f4] border border-[#dadce0] hover:bg-[#e8eaed] text-[#3c4043] px-4 py-2 rounded font-medium text-sm transition-colors relative group">
                  Add to calendar
                  {/* Mock red arrows from screenshot */}
                  <div className="absolute -left-12 -top-8 text-red-500 font-bold text-3xl rotate-45 pointer-events-none">↓</div>
                  <div className="absolute -left-12 top-4 text-red-500 font-bold text-3xl -rotate-45 pointer-events-none">↑</div>
                  <div className="absolute left-10 -top-10 text-red-500 font-bold text-3xl rotate-90 pointer-events-none">↓</div>
                  <div className="absolute -right-8 -top-4 text-red-500 font-bold text-3xl -rotate-135 pointer-events-none">←</div>
                  <div className="absolute -right-16 top-4 text-red-500 font-bold text-3xl rotate-180 pointer-events-none">←</div>
                </button>
                <button className="text-[#1a73e8] hover:underline text-sm font-medium">
                  Report spam
                </button>
              </div>
            </div>
            <div className="text-[#5f6368] hidden sm:block">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
            </div>
          </div>
        </div>

        {/* Second Mock Calendar Image Block (RSVP) */}
        <div className="w-full max-w-4xl bg-white rounded-sm p-0 mb-12 shadow-xl border border-white/20 flex flex-col md:flex-row overflow-hidden">
          
          {/* Left / Middle Section */}
          <div className="flex-1 p-6 flex gap-6 border-b md:border-b-0 md:border-r border-[#dadce0]">
            {/* Calendar Icon */}
            <div className="flex flex-col items-center shrink-0 mt-1">
              <div className="bg-[#4285f4] text-white text-[10px] font-bold px-2 py-0.5 rounded-t-sm w-12 text-center uppercase">Apr</div>
              <div className="bg-white text-[#333] text-xl font-normal py-1 border-x border-[#dadce0] w-12 text-center">22</div>
              <div className="bg-[#f1f3f4] text-[#70757a] text-[10px] font-medium py-0.5 border-x border-b border-[#dadce0] rounded-b-sm w-12 text-center">Wed</div>
            </div>

            {/* Event Details */}
            <div className="flex-1 text-[#3c4043] text-sm">
              <h3 className="text-xl font-normal text-[#202124] mb-1">Antonios Gavrilas</h3>
              <a href="#" className="text-[#1a73e8] hover:underline text-xs mb-4 inline-block">View on Google Calendar</a>
              
              <div className="grid grid-cols-[40px_1fr] gap-y-2 mb-6">
                <span className="text-[#70757a]">When</span>
                <span>Wed Apr 22, 2026 12:30am to 1:15am (IST)</span>
                
                <span className="text-[#70757a]">Where</span>
                <a href="#" className="text-[#1a73e8] hover:underline break-all">https://meet.google.com/fxh-trxz-zsp</a>
                
                <span className="text-[#70757a]">Who</span>
                <span>hassam@hramedia.com*</span>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button className="bg-white border border-[#dadce0] hover:bg-[#f1f3f4] text-[#3c4043] px-5 py-1.5 rounded font-medium text-sm transition-colors relative group">
                  Yes
                  {/* Mock red arrows pointing to Yes */}
                  <div className="absolute -left-10 -top-8 text-red-500 font-bold text-3xl rotate-45 pointer-events-none">↓</div>
                  <div className="absolute -left-10 top-2 text-red-500 font-bold text-3xl -rotate-45 pointer-events-none">↑</div>
                  <div className="absolute left-10 -top-8 text-red-500 font-bold text-3xl rotate-90 pointer-events-none">↓</div>
                  <div className="absolute -right-8 top-2 text-red-500 font-bold text-3xl -rotate-135 pointer-events-none">←</div>
                </button>
                <button className="bg-white border border-[#dadce0] hover:bg-[#f1f3f4] text-[#3c4043] px-4 py-1.5 rounded font-medium text-sm transition-colors">
                  Maybe
                </button>
                <button className="bg-white border border-[#dadce0] hover:bg-[#f1f3f4] text-[#3c4043] px-4 py-1.5 rounded font-medium text-sm transition-colors">
                  No
                </button>
                <span className="text-[#5f6368] text-sm ml-2 cursor-pointer hover:underline">
                  More options
                </span>
              </div>
            </div>
          </div>

          {/* Right Section (Agenda) */}
          <div className="w-full md:w-64 p-6 bg-white text-[#3c4043] text-sm">
            <h4 className="text-lg font-normal text-[#202124]">Agenda</h4>
            <p className="text-[#70757a] text-xs mb-4">Wed Apr 22, 2026</p>
            
            <p className="text-[#70757a] text-xs italic mb-3">No earlier events</p>
            
            <div className="flex gap-3 mb-3 font-medium">
              <span className="shrink-0">12:30am</span>
              <span>Antonios Gavrilas</span>
            </div>
            
            <p className="text-[#70757a] text-xs italic">No later events</p>
          </div>
        </div>

      </div>
    </div>
  );
}
