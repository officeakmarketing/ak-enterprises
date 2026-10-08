"use client";

import { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send, Minimize2, Maximize2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AriaWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [leadCaptured, setLeadCaptured] = useState(false);
  const [lastMessageTime, setLastMessageTime] = useState(0);
  const messagesEndRef = useRef(null);

  // Lock body scroll when chat is open (prevents background scrolling on mobile & desktop)
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
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

  // Save messages to localStorage whenever they change
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem("aria_chat_history", JSON.stringify(messages));
    }
  }, [messages]);

  // Show button after first scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  const sendLeadHook = async (type = "email", data = {}) => {
    if (leadCaptured) return;
    
    setLeadCaptured(true); // Prevent double firing
    
    try {
      const formData = new URLSearchParams();
      formData.append("action", "lead");
      formData.append("rep_name", "Aria (website)");
      formData.append("source", "website-aria");
      formData.append("event", "Outreach / other");
      
      // Try to parse basic info from conversation history if not explicitly provided
      const userMessages = messages.filter(m => m.role === "user").map(m => m.content).join(" ");
      formData.append("notes", `Aria conversation lead captured via ${type}. User history: ${userMessages.substring(0, 500)}...`);
      
      if (data.email) formData.append("email", data.email);
      if (data.name) formData.append("prospect_name", data.name);
      else formData.append("prospect_name", "Aria Website Lead");
      
      await fetch("https://superagent-5d8a2104.base44.app/functions/akTeamHub", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      });
    } catch (e) {
      console.error("Lead capture error:", e);
    }
  };

  const handleSend = async (text) => {
    if (!text.trim()) return;
    
    // Strip HTML tags for security
    const sanitizedText = text.replace(/<[^>]*>?/gm, '');
    
    // 3-second minimum between calls (Rate limit)
    const now = Date.now();
    if (now - lastMessageTime < 3000) {
      return; // Ignore if sending too fast
    }
    setLastMessageTime(now);

    const userMessage = { role: "user", content: sanitizedText };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setIsTyping(true);

    // Simple email extraction regex
    const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi;
    const emails = text.match(emailRegex);
    if (emails && emails.length > 0) {
      sendLeadHook("email", { email: emails[0] });
    }

    try {
      // Artificial delay for that "considered" feel (min 400ms)
      await new Promise(resolve => setTimeout(resolve, 600));

      const res = await fetch("/api/aria", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });
      
      const data = await res.json();
      
      setIsTyping(false);
      
      if (data.reply) {
        setMessages(prev => [...prev, { role: "assistant", content: data.reply }]);
      }
    } catch (error) {
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
      sendLeadHook("calendly_click");
      window.open("https://calendly.com/ak-enterprises/call", "_blank");
      
      setMessages(prev => [...prev, { role: "user", content: text }]);
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setMessages(prev => [...prev, { role: "assistant", content: "I've opened the booking page for you in a new tab. Looking forward to speaking with you!" }]);
        localStorage.removeItem("aria_chat_history"); // Clear on booking
      }, 800);
      return;
    }
    handleSend(text);
  };

  // Convert URLs to clickable links/buttons in messages
  const renderMessageContent = (content) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = content.split(urlRegex);
    
    return (
      <div className="flex flex-col gap-3">
        <div>
          {parts.map((part, i) => {
            if (part.match(urlRegex)) {
              // Special treatment for calendly link (Booking handoff)
              if (part.includes("calendly.com/ak-enterprises")) {
                return null; // Don't render the raw text link, we'll append a button below
              }
              return (
                <a key={i} href={part} target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:underline font-medium break-all">
                  {part.replace('https://', '')}
                </a>
              );
            }
            return <span key={i}>{part}</span>;
          })}
        </div>
        
        {/* Render Booking Button if Calendly link is present */}
        {content.includes("calendly.com/ak-enterprises") && (
          <button 
            onClick={() => {
              sendLeadHook("calendly_click");
              localStorage.removeItem("aria_chat_history"); // Clear on booking
              window.open("https://calendly.com/ak-enterprises/call", "_blank");
            }}
            className="w-full bg-brand-gold text-ink-black py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors text-center mt-1"
          >
            Book Free Audit
          </button>
        )}
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
            onClick={() => setIsOpen(true)}
            className="relative p-4 rounded-full bg-brand-gold text-ink-black shadow-[0_0_20px_rgba(201,169,97,0.3)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center"
            aria-label="Open Aria Chatbot"
          >
            <span className="absolute inset-0 rounded-full border border-brand-gold animate-ping opacity-20"></span>
            <MessageSquare className="w-6 h-6 relative z-10" />
          </button>
        </div>
      )}

      {/* Chat Panel */}
      {isOpen && (
        <div data-lenis-prevent="true" className="fixed inset-0 w-full h-[100dvh] sm:top-auto sm:left-auto sm:bottom-6 sm:right-6 sm:w-[380px] sm:h-[600px] sm:max-h-[calc(100dvh-4rem)] z-[100] bg-[#0a0a0a] sm:rounded-2xl border border-muted-grey/20 shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
          
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/5 bg-[#0a0a0a] shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 rounded-full bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center overflow-hidden shrink-0">
                <span className="text-brand-gold font-serif italic text-sm">A</span>
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
              onClick={() => setIsOpen(false)}
              className="p-2 text-warm-grey hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto overscroll-contain aria-scrollbar p-5 flex flex-col gap-5 scroll-smooth bg-[#0a0a0a]">
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
          
        </div>
      )}
    </>
  );
}
