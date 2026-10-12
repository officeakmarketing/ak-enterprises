"use client";

import { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send, Minimize2, Maximize2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { InlineWidget, useCalendlyEventListener } from "react-calendly";

export default function AriaWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [showCalendly, setShowCalendly] = useState(false);
  const [hasBooked, setHasBooked] = useState(false);
  const messagesRef = useRef(messages);
  messagesRef.current = messages;
  const messagesEndRef = useRef(null);
  const messagesContainerRef = useRef(null);
  const isTypingRef = useRef(false);
  const lastMessageTimeRef = useRef(0);
  const sessionIdRef = useRef(null);
  const emailSentRef = useRef(false);
  const emailCaptureTimerRef = useRef(null);
  const lastSyncedLengthRef = useRef(0);
  const chatOpenedLoggedRef = useRef(false);
  const emailProvidedLoggedRef = useRef(false);
  const bookingStartedLoggedRef = useRef(false);
  const bookingCompletedLoggedRef = useRef(false);
  const chatAbandonedLoggedRef = useRef(false);

  // Listen for Calendly booking events reliably using the official hook
  useCalendlyEventListener({
    onEventScheduled: (e) => {
      setShowCalendly(false);
      setHasBooked(true);
      localStorage.setItem("aria_has_booked", "true");
      if (!bookingCompletedLoggedRef.current) {
        bookingCompletedLoggedRef.current = true;
        logAnalytics("booking_completed", { event_data: e?.data?.payload || {} });
      }
      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: "Perfect. Your free audit is booked! I've sent a confirmation to your email. Talk to you soon." 
      }]);
    },
  });

  useEffect(() => {
    let sid = localStorage.getItem("aria_session_id");
    if (!sid) {
      sid = "sess_" + Math.random().toString(36).substring(2, 15);
      localStorage.setItem("aria_session_id", sid);
    }
    sessionIdRef.current = sid;
  }, []);

  // Lock body scroll when chat is open (prevents background scrolling on mobile & desktop)
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      if (!chatOpenedLoggedRef.current) {
        chatOpenedLoggedRef.current = true;
        logAnalytics("chat_opened");
      }
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Initialize messages from localStorage or use default
  useEffect(() => {
    const saved = localStorage.getItem("aria_chat_history");
    if (saved) {
      try {
        setMessages(JSON.parse(saved));
      } catch (e) {
        setMessages([{ role: "assistant", content: "Hi. I'm Aria, AK Enterprises' AI Assistant. How can I help you today?" }]);
      }
    } else {
      setMessages([{ role: "assistant", content: "Hi. I'm Aria, AK Enterprises' AI Assistant. How can I help you today?" }]);
    }
  }, []);

  const logAnalytics = (eventName, metadata = {}) => {
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
      const isUS = tz.toLowerCase().includes("america");

      const payload = {
        event: eventName,
        session_id: sessionIdRef.current,
        timeZone: tz,
        routed_to: isUS ? "Christopher Strobach" : "UK team",
        metadata: {
          messages_count: messages.length,
          has_booked: localStorage.getItem("aria_has_booked") === "true",
          ...metadata
        }
      };

      const body = JSON.stringify(payload);
      if (typeof navigator !== "undefined" && navigator.sendBeacon) {
        navigator.sendBeacon("/api/aria/analytics", new Blob([body], { type: "application/json" }));
      } else {
        fetch("/api/aria/analytics", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body,
          keepalive: true
        }).catch(() => {});
      }
    } catch (e) {
      console.warn("Analytics log error:", e);
    }
  };

  const syncSessionToHUD = async (currentMessages) => {
    if (!sessionIdRef.current || !currentMessages || currentMessages.length <= 1) return;
    
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
      
      // Sync through API route which runs internal LLM extraction for problem/budget
      await fetch("/api/aria/summarize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          session_id: sessionIdRef.current,
          timeZone: tz,
          messages: currentMessages,
          send_to_hud: true
        })
      });
    } catch (e) {
      console.error("HUD Sync Error:", e);
    }
  };

  const triggerFollowUpEmail = async (currentMessages, emailAddress) => {
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
      
      // Trigger follow-up email via API route with LLM extraction
      await fetch("/api/aria/summarize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          session_id: sessionIdRef.current,
          timeZone: tz,
          contact_details: emailAddress,
          anonymous: false,
          trigger_followup_email: true,
          messages: currentMessages,
          send_to_hud: true
        })
      });
    } catch(e) {
      console.error("Follow-up email error:", e);
    }
  };

  // Save messages to localStorage and sync to HUD once assistant finishes answering
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem("aria_chat_history", JSON.stringify(messages));
    }
    
    // Only sync to HUD once an exchange is completed (assistant finished responding)
    const lastMsg = messages[messages.length - 1];
    const isAssistantDone = lastMsg && lastMsg.role === "assistant" && lastMsg.content && lastMsg.content.trim().length > 0 && !isTyping;
    
    if (messages.length > 1 && isAssistantDone && messages.length > lastSyncedLengthRef.current) {
      const timeoutId = setTimeout(() => {
        lastSyncedLengthRef.current = messages.length;
        syncSessionToHUD(messages);
      }, 2500); // 2.5s debounce after response finishes
      
      // Email Follow-up & Analytics Logic
      const userText = messages.filter(m => m.role === "user").map(m => m.content).join(" ");
      const emails = userText.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi) || [];
      
      if (emails.length > 0 && !emailProvidedLoggedRef.current) {
        emailProvidedLoggedRef.current = true;
        logAnalytics("email_provided", { email: emails[0] });
      }

      if (emails.length > 0 && !emailSentRef.current && !emailCaptureTimerRef.current) {
        emailCaptureTimerRef.current = setTimeout(async () => {
          // If they booked a call during the 60s window, cancel the email sequence
          if (localStorage.getItem("aria_has_booked") === "true") {
            emailSentRef.current = true;
            return;
          }
          await triggerFollowUpEmail(messages, emails[0]);
          emailSentRef.current = true;
        }, 60000);
      }
      
      return () => clearTimeout(timeoutId);
    }
  }, [messages, isTyping]);

  // Track chat abandonment when user leaves the page without booking
  useEffect(() => {
    const handleBeforeUnload = () => {
      if (
        messages.length > 1 &&
        !hasBooked &&
        localStorage.getItem("aria_has_booked") !== "true" &&
        !chatAbandonedLoggedRef.current
      ) {
        chatAbandonedLoggedRef.current = true;
        logAnalytics("chat_abandoned", { trigger: "page_unload" });
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [messages, hasBooked]);

  // Show button after scroll or initial delay
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    const timer = setTimeout(() => setIsVisible(true), 1500);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  // Live Property Demo Follow-up: triggers when user submits or completes the valuation demo
  useEffect(() => {
    const triggerDemoFollowup = (customDetail = null) => {
      sessionStorage.setItem("aria_visited_demo", "true");
      sessionStorage.setItem("aria_demo_interacted", "true");
      sessionStorage.setItem("aria_demo_submitted", "true");

      setIsVisible(true);
      setIsOpen(true); // Open the chat widget so the user immediately sees the reflection!

      const followupMessage = 
        "I see you just tested our live valuation system! How did the numbers look? If you want an automated acquisition system like that capturing and qualifying leads for your business 24/7, grab a free 45-minute audit with our founders: https://calendly.com/ak-enterprises/call";

      setMessages((prev) => {
        // Prevent duplicate if the last message is already this exact follow-up
        const lastMsg = prev[prev.length - 1];
        if (lastMsg && lastMsg.isValuationFollowup && lastMsg.content === followupMessage) {
          return prev;
        }
        return [
          ...prev,
          {
            role: "assistant",
            isValuationFollowup: true,
            content: followupMessage,
          },
        ];
      });

      // Ensure smooth scroll to reveal the new follow-up and audit button
      setTimeout(() => scrollToBottom("auto"), 50);
      setTimeout(() => scrollToBottom("smooth"), 150);
      setTimeout(() => scrollToBottom("smooth"), 350);
      setTimeout(() => scrollToBottom("smooth"), 600);
    };

    // 1. Listen for custom event when user submits the valuation form in the demo iframe
    const handleDemoSubmitted = (event) => {
      triggerDemoFollowup(event?.detail);
    };

    // 2. Listen for cross-origin postMessage from ariasystem demo iframe if dispatched
    const handlePostMessage = (event) => {
      try {
        let data = event.data;
        if (typeof data === "string") {
          try {
            data = JSON.parse(data);
          } catch (e) {}
        }

        const isValuation = 
          data?.type === "VALUATION_COMPLETED" || 
          (typeof data?.type === "string" && data.type.includes("VALUATION")) ||
          (typeof event.data === "string" && event.data.includes("VALUATION_COMPLETED"));

        const isFromDemo = event.origin?.includes("ariasystem.vercel.app") || event.origin?.includes("localhost");

        if (isValuation || (isFromDemo && data?.offer)) {
          if (data?.address) sessionStorage.setItem("aria_demo_address", data.address);
          if (data?.offer) sessionStorage.setItem("aria_demo_offer", String(data.offer));
          triggerDemoFollowup(data);
        }
      } catch (e) {}
    };

    // 3. Listen for window focus back to page if user interacted with iframe
    const handleWindowFocus = () => {
      if (sessionStorage.getItem("aria_demo_submitted") === "true") {
        triggerDemoFollowup();
      }
    };

    window.addEventListener("aria:demo-submitted", handleDemoSubmitted);
    window.addEventListener("message", handlePostMessage);
    window.addEventListener("focus", handleWindowFocus);

    return () => {
      window.removeEventListener("aria:demo-submitted", handleDemoSubmitted);
      window.removeEventListener("message", handlePostMessage);
      window.removeEventListener("focus", handleWindowFocus);
    };
  }, []);

  const scrollToBottom = (behavior = "smooth") => {
    if (messagesContainerRef.current) {
      if (behavior === "auto") {
        messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
      } else {
        messagesContainerRef.current.scrollTo({
          top: messagesContainerRef.current.scrollHeight,
          behavior
        });
      }
    }
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior, block: "end" });
    }
  };

  // Auto-scroll to bottom of messages whenever chat is opened/reopened, messages change, or typing
  useEffect(() => {
    if (isOpen) {
      scrollToBottom("auto");
      const t1 = setTimeout(() => scrollToBottom("auto"), 50);
      const t2 = setTimeout(() => scrollToBottom("smooth"), 150);
      const t3 = setTimeout(() => scrollToBottom("smooth"), 350);
      const t4 = setTimeout(() => scrollToBottom("smooth"), 500);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
        clearTimeout(t4);
      };
    }
  }, [isOpen, messages.length, isTyping]);

  const handleSend = async (text) => {
    if (!text.trim()) return;
    
    // Prevent concurrent sends (e.g., double-enter or sending while streaming)
    if (isTypingRef.current) return;
    
    // Dynamic Cooldown: 2 seconds minimum between messages
    const now = Date.now();
    if (now - lastMessageTimeRef.current < 2000) return;
    
    lastMessageTimeRef.current = now;
    isTypingRef.current = true;
    
    // Strip HTML tags for security
    const sanitizedText = text.replace(/<[^>]*>?/gm, '');

    const userMessage = { role: "user", content: sanitizedText };
    const newMessages = [...messages, userMessage];
    
    setInput("");
    setIsTyping(true);
    setMessages(newMessages);

    try {
      // Artificial delay for that "considered" feel (min 400ms)
      await new Promise(resolve => setTimeout(resolve, 600));

      const res = await fetch("/api/aria", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });
      
      setIsTyping(false);
      
      if (!res.ok) {
        isTypingRef.current = false;
        const data = await res.json().catch(() => ({}));
        setMessages(prev => [...prev, { 
          role: "assistant", 
          content: data.reply || "I'm having a little trouble connecting. Please book a free audit directly: https://calendly.com/ak-enterprises/call" 
        }]);
        return;
      }
      
      // Initialize empty assistant message for streaming
      setMessages(prev => [...prev, { role: "assistant", content: "" }]);
      
      const reader = res.body.getReader();
      const decoder = new TextDecoder("utf-8");
      let assistantMessage = "";
      
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        
        assistantMessage += decoder.decode(value, { stream: true });
        
        setMessages(prev => {
          const updated = [...prev];
          // Safely target the assistant message, avoiding overwrites if a race condition occurs
          for (let i = updated.length - 1; i >= 0; i--) {
            if (updated[i].role === "assistant") {
              updated[i] = { ...updated[i], content: assistantMessage };
              break;
            }
          }
          return updated;
        });
      }
      
      isTypingRef.current = false;
    } catch (error) {
      isTypingRef.current = false;
      setIsTyping(false);
      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: "I'm having a little trouble connecting. Please book a free audit directly: https://calendly.com/ak-enterprises/call" 
      }]);
    }
  };

  const quickReplies = [
    "What do you build?",
    "How much?",
    "Book the free audit"
  ];

  const handleQuickReply = (text) => {
    if (text === "Book the free audit") {
      if (!hasBooked) setShowCalendly(true);
      return;
    }
    handleSend(text);
  };

  // Convert URLs and Gap Reports to custom UI components
  const renderMessageContent = (content) => {
    const lines = content.split('\n');
    
    return (
      <div className="flex flex-col gap-1.5">
        {lines.map((line, idx) => {
          // 1. Detect Gap Report Header
          if (line.includes("**Leak Cost Estimate:**")) {
            return (
              <div key={idx} className="mt-3 mb-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gold bg-brand-gold/10 px-3 py-1.5 rounded-full border border-brand-gold/20">
                  Leak Cost Estimate
                </span>
              </div>
            );
          }
          
          // 2. Detect Gap Report Rows
          if (line.startsWith("* Missed inquiries:")) {
            const val = line.replace("* Missed inquiries:", "").trim();
            return (
              <div key={idx} className="flex justify-between items-center bg-[#1a1a1c] px-4 py-2.5 rounded-t-xl border border-white/5 border-b-0 text-sm mt-1">
                <span className="text-warm-grey text-xs uppercase tracking-wider font-semibold">Missed Inquiries</span>
                <span className="font-mono text-white font-medium">{val}</span>
              </div>
            );
          }
          if (line.startsWith("* Est. customer value:")) {
            const val = line.replace("* Est. customer value:", "").trim();
            return (
              <div key={idx} className="flex justify-between items-center bg-[#1a1a1c] px-4 py-2.5 border-x border-white/5 text-sm">
                <span className="text-warm-grey text-xs uppercase tracking-wider font-semibold">Est. Customer Value</span>
                <span className="font-mono text-white font-medium">{val}</span>
              </div>
            );
          }
          if (line.startsWith("* **Monthly leak:")) {
            const val = line.replace("* **Monthly leak:", "").replace("**", "").trim();
            return (
              <div key={idx} className="flex justify-between items-center bg-brand-gold/10 px-4 py-3 rounded-b-xl border border-brand-gold/30 text-sm mb-2 shadow-[0_0_15px_rgba(201,169,97,0.1)]">
                <span className="font-bold text-brand-gold text-xs uppercase tracking-wider">Monthly Leak</span>
                <span className="font-bold font-mono text-brand-gold text-base">{val}</span>
              </div>
            );
          }
          
          // Strip any stray markdown bolding
          let cleanLine = line.replace(/\*\*/g, "");
          if (!cleanLine.trim()) return null;

          // Clean up any legacy cached mangled text or robotic phrasing from prior turns
          cleanLine = cleanLine.replace(/https?:\/\/(?:www\.)?akenterprises\.ioon[^\s]*/gi, "");
          cleanLine = cleanLine.replace(/I can't calculate valuations directly inside this chat,?\s*but\s*/gi, "Sure, ");
          cleanLine = cleanLine.replace(/I can't run valuations or look up addresses in this chat,?\s*[^.]*\.\s*/gi, "Sure, ");
          if (!cleanLine.trim()) return null;

          // Normal text rendering with URL replacement
          const urlRegex = /(https?:\/\/[^\s,]+|\/aria#demo)/g;
          const parts = cleanLine.split(urlRegex);
          
          return (
            <div key={idx} className="leading-relaxed">
              {parts.map((part, i) => {
                if (part.match(urlRegex)) {
                  if (part.includes("calendly.com/ak-enterprises")) {
                    return (
                      <button 
                        key={i}
                        onClick={() => {
                          if (!hasBooked) {
                            setShowCalendly(true);
                            if (!bookingStartedLoggedRef.current) {
                              bookingStartedLoggedRef.current = true;
                              logAnalytics("booking_started");
                            }
                          }
                        }}
                        disabled={hasBooked}
                        className={`w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all text-center mt-3 shadow-lg ${
                          hasBooked 
                            ? "bg-white/5 text-white/30 border border-white/10 cursor-not-allowed" 
                            : "bg-brand-gold text-ink-black hover:bg-white hover:scale-[1.02]"
                        }`}
                      >
                        {hasBooked ? "Audit Booked" : "Book Free Audit"}
                      </button>
                    );
                  }
                  if (
                    part.includes("akenterprises.io/aria") || 
                    part.includes("/aria#demo") || 
                    part.includes("ariasystem.vercel.app")
                  ) {
                    return (
                      <a 
                        key={i} 
                        href="https://www.akenterprises.io/aria#demo"
                        onClick={(e) => {
                          sessionStorage.setItem("aria_visited_demo", "true");
                          setIsOpen(false);
                          const el = document.getElementById("demo-iframe") || document.getElementById("property-demo") || document.getElementById("demo");
                          if (el) {
                            e.preventDefault();
                            if (window.location.pathname !== "/aria") {
                              window.history.pushState(null, "", "/aria#demo");
                            }
                            el.scrollIntoView({ behavior: "smooth", block: "center" });
                            const rect = el.getBoundingClientRect();
                            const targetScroll = Math.max(0, rect.top + window.pageYOffset + (rect.height / 2) - (window.innerHeight / 2));
                            window.scrollTo({ top: targetScroll, behavior: "smooth" });
                          } else if (window.location.pathname !== "/aria") {
                            window.location.href = "/aria#demo";
                          }
                        }}
                        className="inline-flex items-center justify-center gap-2 w-full py-3.5 mt-3 rounded-xl bg-brand-gold text-ink-black hover:bg-white hover:scale-[1.02] active:scale-95 transition-all text-xs font-bold uppercase tracking-wider shadow-lg cursor-pointer"
                      >
                        <span>Launch Live Property Demo</span>
                        <span className="text-base leading-none">&rarr;</span>
                      </a>
                    );
                  }
                  return (
                    <a key={i} href={part} target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:underline font-medium break-all">
                      {part.replace('https://', '').replace('http://', '')}
                    </a>
                  );
                }
                return <span key={i}>{part}</span>;
              })}
            </div>
          );
        })}
      </div>
    );
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Floating Action Button */}
      {!isOpen && (
        <div className="group fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center justify-end animate-in fade-in slide-in-from-bottom-4">
          <span className="absolute right-[120%] bg-[#141416] text-brand-gold text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-md border border-brand-gold/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            Aria
          </span>
          <button
            onClick={() => {
              setIsOpen(true);
              const hasInteractedDemo =
                sessionStorage.getItem("aria_demo_submitted") === "true" ||
                sessionStorage.getItem("aria_demo_interacted") === "true";
              if (hasInteractedDemo && !sessionStorage.getItem("aria_valuation_followup_sent")) {
                window.dispatchEvent(new CustomEvent("aria:demo-submitted"));
              }
            }}
            className="relative p-3 rounded-full bg-black border-2 border-brand-gold shadow-[0_4px_20px_rgba(201,169,97,0.25)] hover:shadow-[0_4px_25px_rgba(201,169,97,0.45)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center"
            aria-label="Open Aria Chatbot"
          >
            <div className="relative w-8 h-8 z-10">
              <Image src="/fav.png" alt="Aria Logo" fill className="object-contain" />
            </div>
          </button>
        </div>
      )}

      {/* Chat Panel */}
      {isOpen && (
        <div data-lenis-prevent="true" className="fixed inset-0 w-full h-[100dvh] sm:top-auto sm:left-auto sm:bottom-6 sm:right-6 sm:w-[380px] sm:h-[600px] sm:max-h-[calc(100dvh-4rem)] z-[100] bg-[#0a0a0a] sm:rounded-2xl border border-muted-grey/20 shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-6 duration-300">
          
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/5 bg-[#0a0a0a] shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 rounded-full bg-black border border-brand-gold/60 flex items-center justify-center overflow-hidden shrink-0">
                <Image src="/fav.png" alt="Aria" fill className="object-contain p-1" />
              </div>
              <div>
                <h3 className="text-white font-sans font-bold tracking-wider text-sm uppercase">Aria AI</h3>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-[10px] text-warm-grey uppercase tracking-widest font-mono">Online</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => {
                if (showCalendly) {
                  setShowCalendly(false);
                } else {
                  if (
                    messages.length > 1 &&
                    !hasBooked &&
                    !chatAbandonedLoggedRef.current
                  ) {
                    chatAbandonedLoggedRef.current = true;
                    logAnalytics("chat_abandoned", { trigger: "user_closed_chat" });
                  }
                  setIsOpen(false);
                }
              }}
              className="p-2 text-warm-grey hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {showCalendly ? (
            <div className="flex-1 w-full bg-[#0a0a0a] flex flex-col relative">
              <div className="flex-1 overflow-hidden relative">
                <InlineWidget 
                  url="https://calendly.com/ak-enterprises/call"
                  styles={{ height: "100%", width: "100%", border: "none" }}
                  pageSettings={{
                    backgroundColor: "0a0a0a",
                    hideGdprBanner: true,
                    primaryColor: "c9a961",
                    textColor: "ffffff"
                  }}
                />
              </div>
              <button 
                onClick={() => setShowCalendly(false)}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#141416] text-white px-6 py-2.5 rounded-full font-bold text-[10px] sm:text-xs uppercase tracking-widest border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.8)] hover:bg-white hover:text-ink-black transition-all z-50"
              >
                Back to Chat
              </button>
            </div>
          ) : (
            <>
              {/* Messages Area */}
              <div 
                ref={messagesContainerRef}
                className="flex-1 overflow-y-auto overscroll-contain aria-scrollbar p-5 flex flex-col gap-5 scroll-smooth bg-[#0a0a0a]"
              >
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex w-full ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                        msg.role === "user"
                          ? "bg-brand-gold text-ink-black rounded-br-sm font-medium"
                          : "bg-[#141416] text-white/90 rounded-bl-sm border border-white/5"
                      }`}
                    >
                      {renderMessageContent(msg.content)}
                    </div>
                  </div>
                ))}
                
                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex w-full justify-start">
                    <div className="bg-[#141416] border border-white/5 rounded-2xl rounded-bl-sm px-4 py-3.5 flex gap-1.5 items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold/70 animate-bounce" style={{ animationDelay: "0ms" }}></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold/70 animate-bounce" style={{ animationDelay: "150ms" }}></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold/70 animate-bounce" style={{ animationDelay: "300ms" }}></span>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Replies (Only show if no history and not typing) */}
              {messages.length === 1 && !isTyping && (
                <div className="px-4 py-3 flex flex-wrap gap-2 shrink-0 border-t border-white/5 bg-[#0a0a0a]">
                  {quickReplies.map((reply, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleQuickReply(reply)}
                      className="px-3 py-1.5 rounded-full border border-brand-gold/30 bg-brand-gold/5 text-brand-gold text-[11px] sm:text-xs font-semibold hover:bg-brand-gold/10 hover:border-brand-gold/60 transition-all text-left"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              )}

              {/* Input Area */}
              <div className="p-4 bg-[#0a0a0a] border-t border-white/5 shrink-0">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSend(input);
                  }}
                  className="relative flex items-center"
                >
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onFocus={() => {
                      setTimeout(() => {
                        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
                      }, 300);
                    }}
                    placeholder="Ask Aria a question..."
                    className="w-full bg-[#141416] border border-white/10 rounded-full pl-5 pr-12 py-3.5 sm:py-3 text-sm text-white placeholder:text-warm-grey focus:outline-none focus:border-brand-gold/50 transition-colors"
                    name="aria-chat-message"
                    id="aria-chat-input"
                    autoComplete="off"
                    autoCorrect="off"
                    spellCheck="false"
                    data-form-type="other"
                  />
                  <button
                    type="submit"
                    disabled={!input.trim() || isTyping}
                    className="absolute right-2 p-2 rounded-full bg-brand-gold text-ink-black disabled:opacity-50 disabled:bg-white/10 disabled:text-warm-grey transition-colors"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
                
                <div className="text-center mt-3">
                  <span className="text-[9px] text-warm-grey/50 uppercase tracking-widest font-mono">
                    Aria is AK's AI assistant. Your details are used to respond to your enquiry.
                  </span>
                </div>
              </div>
            </>
          )}
          
        </div>
      )}
    </>
  );
}
