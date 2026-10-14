"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { MessageSquare, X, Send, Minimize2, Maximize2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { InlineWidget, useCalendlyEventListener } from "react-calendly";

export default function AriaWidget() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [showCalendly, setShowCalendly] = useState(false);
  const [hasBooked, setHasBooked] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const messagesRef = useRef(messages);
  messagesRef.current = messages;
  const messagesEndRef = useRef(null);
  const messagesContainerRef = useRef(null);
  const isTypingRef = useRef(false);
  const lastMessageTimeRef = useRef(0);
  const sessionIdRef = useRef(null);
  const leadIdRef = useRef(null);
  const isSyncingRef = useRef(false);
  const pendingSyncMessagesRef = useRef(null);
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
      localStorage.setItem("aria_valuation_followup_sent", "true");
      sessionStorage.setItem("aria_valuation_followup_sent", "true");
      if (!bookingCompletedLoggedRef.current) {
        bookingCompletedLoggedRef.current = true;
        logAnalytics("booking_completed", { event_data: e?.data?.payload || {} });
      }
      
      const confirmationMsg = { 
        role: "assistant", 
        content: "Perfect. Your free audit is booked! Redirecting you to your confirmation video..." 
      };

      // Strip any valuation follow-up or error message upon booking
      setMessages(prev => {
        const cleaned = prev.filter(
          (m) =>
            !m.isValuationFollowup &&
            !isErrorMessage(m) &&
            !m.content?.includes("I see you just tested our live valuation system")
        );
        return [...cleaned, confirmationMsg];
      });

      // Synchronize directly into localStorage before navigation
      try {
        const saved = localStorage.getItem("aria_chat_history");
        let list = saved ? JSON.parse(saved) : [];
        if (Array.isArray(list)) {
          list = list.filter(
            (m) =>
              !m.isValuationFollowup &&
              !isErrorMessage(m) &&
              !m.content?.includes("I see you just tested our live valuation system")
          );
          list.push(confirmationMsg);
          localStorage.setItem("aria_chat_history", JSON.stringify(list));
        }
      } catch (err) {}

      // Redirect to thank-you page preserving user activation token for video voice playback
      try {
        router.push("/thank-you");
      } catch (err) {
        window.location.href = "/thank-you";
      }
    },
  });

  useEffect(() => {
    let sid = localStorage.getItem("aria_session_id");
    if (!sid) {
      sid = "sess_" + Math.random().toString(36).substring(2, 15);
      localStorage.setItem("aria_session_id", sid);
    }
    sessionIdRef.current = sid;

    const savedLeadId = localStorage.getItem("aria_lead_id");
    if (savedLeadId) {
      leadIdRef.current = savedLeadId;
    }
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

  // Helper: check if message is an error fallback (never render from or save to stored history)
  const isErrorMessage = (msg) => {
    if (!msg) return true;
    if (msg.isError) return true;
    const content = (msg.content || "").toLowerCase().trim();
    if (!content) return true;
    return (
      content.includes("having a little trouble connecting") ||
      content.includes("trouble connecting") ||
      content.includes("trouble with connection") ||
      content.includes("trouble right now")
    );
  };

  const TWENTY_FOUR_HOURS = 24 * 60 * 60 * 1000; // 86,400,000 ms

  // Start fresh chat session
  const startNewChat = (silent = false) => {
    try {
      // 1. Purge conversation history and valuation followup flags from storage
      localStorage.removeItem("aria_chat_history");
      localStorage.removeItem("aria_valuation_followup_sent");
      localStorage.removeItem("aria_lead_id");
      sessionStorage.removeItem("aria_valuation_followup_sent");
      sessionStorage.removeItem("aria_visited_demo");
      sessionStorage.removeItem("aria_demo_submitted");
      sessionStorage.removeItem("aria_demo_interacted");

      // 2. Refresh session timestamp and ID
      const newSid = "sess_" + Math.random().toString(36).substring(2, 15);
      sessionIdRef.current = newSid;
      leadIdRef.current = null;
      localStorage.setItem("aria_session_id", newSid);
      localStorage.setItem("aria_last_active_timestamp", Date.now().toString());

      // 3. Reset in-memory chat state
      setMessages([
        { role: "assistant", content: "Hi. I'm Aria, AK Enterprises' AI Assistant. How can I help you today?" }
      ]);
      setHasBooked(false);
      setShowCalendly(false);
      setInput("");

      // 4. Reset tracking refs
      emailSentRef.current = false;
      emailProvidedLoggedRef.current = false;
      bookingStartedLoggedRef.current = false;
      bookingCompletedLoggedRef.current = false;
      chatAbandonedLoggedRef.current = false;
      lastSyncedLengthRef.current = 0;
      isSyncingRef.current = false;
      pendingSyncMessagesRef.current = null;

      // 5. Toast feedback
      if (!silent) {
        setToastMessage("New chat started");
        setTimeout(() => setToastMessage(null), 2500);
      }
    } catch (e) {
      console.error("Error starting new chat:", e);
    }
  };

  // Clear all Aria chatbot keys completely
  const clearAriaStorage = () => {
    try {
      const localKeys = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && (key.startsWith("aria_") || key.toLowerCase().includes("aria"))) {
          localKeys.push(key);
        }
      }
      localKeys.forEach((key) => localStorage.removeItem(key));

      const sessionKeys = [];
      for (let i = 0; i < sessionStorage.length; i++) {
        const key = sessionStorage.key(i);
        if (key && (key.startsWith("aria_") || key.toLowerCase().includes("aria"))) {
          sessionKeys.push(key);
        }
      }
      sessionKeys.forEach((key) => sessionStorage.removeItem(key));

      startNewChat(true);
      setToastMessage("Aria storage cleared");
      setTimeout(() => setToastMessage(null), 2500);
    } catch (e) {
      console.error("Error clearing Aria storage:", e);
    }
  };

  // Initialize messages from localStorage, sync booking state, and enforce 24h expiration
  useEffect(() => {
    // 1. Auto-reset if more than 24 hours have elapsed since last activity
    const lastActiveStr = localStorage.getItem("aria_last_active_timestamp");
    const now = Date.now();
    if (lastActiveStr) {
      const lastActive = parseInt(lastActiveStr, 10);
      if (!isNaN(lastActive) && now - lastActive > TWENTY_FOUR_HOURS) {
        startNewChat(true); // Silent auto-reset after 24 hours
        return;
      }
    }
    // Refresh last active timestamp
    localStorage.setItem("aria_last_active_timestamp", now.toString());

    const hasBookedStored = localStorage.getItem("aria_has_booked") === "true";
    if (hasBookedStored) {
      setHasBooked(true);
      localStorage.setItem("aria_valuation_followup_sent", "true");
      sessionStorage.setItem("aria_valuation_followup_sent", "true");
    }

    // Clean up any stale legacy test flags from old sessions
    sessionStorage.removeItem("aria_demo_submitted");
    sessionStorage.removeItem("aria_demo_interacted");

    const saved = localStorage.getItem("aria_chat_history");
    if (saved) {
      try {
        let loaded = JSON.parse(saved);
        if (Array.isArray(loaded)) {
          // Strictly filter out any error fallbacks from stored history
          loaded = loaded.filter((m) => !isErrorMessage(m));

          // If already booked, strictly remove any valuation follow-up pitch from history
          if (hasBookedStored) {
            loaded = loaded.filter(
              (m) =>
                !m.isValuationFollowup &&
                !m.content?.includes("I see you just tested our live valuation system")
            );
          } else {
            // Deduplicate so it never appears multiple times
            let seenValuation = false;
            loaded = loaded.filter((m) => {
              const isVal = m.isValuationFollowup || m.content?.includes("I see you just tested our live valuation system");
              if (isVal) {
                if (seenValuation) return false;
                seenValuation = true;
              }
              return true;
            });
          }
          setMessages(loaded.length > 0 ? loaded : [{ role: "assistant", content: "Hi. I'm Aria, AK Enterprises' AI Assistant. How can I help you today?" }]);
          return;
        }
      } catch (e) {
        setMessages([{ role: "assistant", content: "Hi. I'm Aria, AK Enterprises' AI Assistant. How can I help you today?" }]);
        return;
      }
    }
    setMessages([{ role: "assistant", content: "Hi. I'm Aria, AK Enterprises' AI Assistant. How can I help you today?" }]);
  }, []);

  // Expose helpers to window for console execution as well
  useEffect(() => {
    window.clearAriaStorage = clearAriaStorage;
    window.startNewChat = startNewChat;
    return () => {
      delete window.clearAriaStorage;
      delete window.startNewChat;
    };
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
    
    // If a sync is currently in-flight, queue latest messages to update after it finishes
    if (isSyncingRef.current) {
      pendingSyncMessagesRef.current = currentMessages;
      return;
    }
    isSyncingRef.current = true;

    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
      const currentLeadId = leadIdRef.current || (typeof window !== "undefined" ? localStorage.getItem("aria_lead_id") : null);
      
      // Sync through API route which runs internal LLM extraction for problem/budget
      const res = await fetch("/api/aria/summarize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          session_id: sessionIdRef.current,
          lead_id: currentLeadId || undefined,
          action: currentLeadId ? "UPDATE" : "CREATE",
          timeZone: tz,
          messages: currentMessages,
          send_to_hud: true
        })
      });

      if (res.ok) {
        const data = await res.json().catch(() => ({}));
        if (data?.lead_id) {
          leadIdRef.current = data.lead_id;
          if (typeof window !== "undefined") {
            localStorage.setItem("aria_lead_id", data.lead_id);
          }
        }
      }
    } catch (e) {
      console.error("HUD Sync Error:", e);
    } finally {
      isSyncingRef.current = false;
      if (pendingSyncMessagesRef.current) {
        const nextMsgs = pendingSyncMessagesRef.current;
        pendingSyncMessagesRef.current = null;
        syncSessionToHUD(nextMsgs);
      }
    }
  };

  const triggerFollowUpEmail = async (currentMessages, emailAddress) => {
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
      const currentLeadId = leadIdRef.current || (typeof window !== "undefined" ? localStorage.getItem("aria_lead_id") : null);
      
      // Trigger follow-up email via API route with LLM extraction
      const res = await fetch("/api/aria/summarize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          session_id: sessionIdRef.current,
          lead_id: currentLeadId || undefined,
          action: currentLeadId ? "UPDATE" : "CREATE",
          timeZone: tz,
          contact_details: emailAddress,
          anonymous: false,
          trigger_followup_email: true,
          messages: currentMessages,
          send_to_hud: true
        })
      });

      if (res.ok) {
        const data = await res.json().catch(() => ({}));
        if (data?.lead_id) {
          leadIdRef.current = data.lead_id;
          if (typeof window !== "undefined") {
            localStorage.setItem("aria_lead_id", data.lead_id);
          }
        }
      }
    } catch(e) {
      console.error("Follow-up email error:", e);
    }
  };

  // Save messages to localStorage (never storing error fallbacks) and sync to HUD once assistant finishes answering
  useEffect(() => {
    if (messages.length > 0) {
      const cleanMessages = messages.filter((m) => !isErrorMessage(m));
      if (cleanMessages.length > 0) {
        localStorage.setItem("aria_chat_history", JSON.stringify(cleanMessages));
      }
      localStorage.setItem("aria_last_active_timestamp", Date.now().toString());
    }
    
    // Only sync to HUD once an exchange is completed (assistant finished responding)
    const lastMsg = messages[messages.length - 1];
    const isAssistantDone = lastMsg && lastMsg.role === "assistant" && lastMsg.content && lastMsg.content.trim().length > 0 && !isTyping;
    
    // Only sync to HUD after the first real USER message — prevents junk leads from
    // demo auto-open which injects an assistant pitch with zero user messages
    const hasUserMessage = messages.some(m => m.role === "user");

    if (hasUserMessage && isAssistantDone && messages.length > lastSyncedLengthRef.current) {
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

  // Live Property Demo Follow-up: triggers strictly ONCE when user completes the valuation demo
  useEffect(() => {
    const triggerDemoFollowup = (customDetail = null) => {
      // 1. NEVER trigger if user has already booked an audit
      if (localStorage.getItem("aria_has_booked") === "true") return;

      // 2. Strict ONE-TIME ONLY: never re-fire or spam again
      if (
        sessionStorage.getItem("aria_valuation_followup_sent") === "true" ||
        localStorage.getItem("aria_valuation_followup_sent") === "true"
      ) {
        return;
      }
      sessionStorage.setItem("aria_valuation_followup_sent", "true");
      localStorage.setItem("aria_valuation_followup_sent", "true");

      setIsVisible(true);
      setIsOpen(true); // Open the chat widget so the user sees the reflection!

      const followupMessage = 
        "I see you just tested our live valuation system! How did the numbers look? If you want an automated acquisition system like that capturing and qualifying leads for your business 24/7, grab a free 45-minute audit with our founders: https://calendly.com/ak-enterprises/call";

      setMessages((prev) => {
        // Prevent duplicate if already in conversation history
        const alreadyExists = prev.some(
          (m) => m.isValuationFollowup || m.content === followupMessage
        );
        if (alreadyExists) return prev;

        return [
          ...prev,
          {
            role: "assistant",
            isValuationFollowup: true,
            content: followupMessage,
          },
        ];
      });

      // Smooth scroll to the follow-up message
      setTimeout(() => scrollToBottom("auto"), 50);
      setTimeout(() => scrollToBottom("smooth"), 150);
      setTimeout(() => scrollToBottom("smooth"), 350);
    };

    // Listen ONLY for genuine VALUATION_COMPLETED postMessage strictly from the demo iframe origin
    const handlePostMessage = (event) => {
      try {
        const isFromDemo =
          event.origin?.includes("ariasystem.vercel.app") ||
          (typeof window !== "undefined" && window.location.hostname === "localhost" && event.origin?.includes("localhost"));

        if (!isFromDemo) return;

        let data = event.data;
        if (typeof data === "string") {
          try {
            data = JSON.parse(data);
          } catch (e) {}
        }

        if (data?.type === "VALUATION_COMPLETED") {
          triggerDemoFollowup(data);
        }
      } catch (e) {}
    };

    window.addEventListener("message", handlePostMessage);

    return () => {
      window.removeEventListener("message", handlePostMessage);
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
          isError: true,
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
        isError: true,
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
            }}
            className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-black border-[1.5px] sm:border-2 border-brand-gold hover:scale-105 active:scale-95 transition-transform duration-300 flex items-center justify-center overflow-hidden"
            aria-label="Open Aria Chatbot"
          >
            <div className="relative w-7 h-7 sm:w-8 sm:h-8 z-10 flex items-center justify-center scale-135">
              <Image src="/fav.png" alt="Aria Logo" fill className="object-contain" priority />
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
            <div className="flex items-center gap-2">
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
                aria-label="Close Aria"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Toast Notification */}
          {toastMessage && (
            <div className="bg-brand-gold/15 border-b border-brand-gold/30 px-4 py-2 text-center text-[11px] font-mono text-brand-gold font-bold tracking-wider animate-in fade-in slide-in-from-top-2 duration-200 flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-gold animate-ping"></span>
              <span>{toastMessage}</span>
            </div>
          )}

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
