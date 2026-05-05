'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Send, X } from 'lucide-react';
import Header from "./comp/Header/page";
import HeroSection from "./comp/hero/page";
import SkillsShowcase from "./comp/skills/page";
import ProjectSection from "./comp/Projects/page";
import CVSection from "./comp/cv/page";
import ExperienceSection from "./comp/experience/page";
import ContactSection from "./comp/contact/page";
import SpaceBackground from "./comp/SpaceBackground";
import SpaceTravelOverlay from "./comp/SpaceTravelOverlay";

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi there! I can answer questions about this CV. What would you like to know?" }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const messagesEndRef = useRef(null);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;
    setError(null);

    const userMessage = { role: "user", content: inputValue };
    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: inputValue }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to get response');
      }

      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: data.response || "I didn't get a proper response"
      }]);
    } catch (error) {
      console.error("Chat error:", error);
      setError(error.message || "Failed to get response");
      setMessages(prev => [...prev, {
        role: "assistant",
        content: "Sorry, I encountered an error. Please try again."
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => scrollToBottom(), [messages]);

  const [isWarping, setIsWarping] = useState(false);

  useEffect(() => {
    const handleWarp = (e) => {
      setIsWarping(true);
      const data = e.detail || { duration: 5000 };
      setTimeout(() => setIsWarping(false), data.duration);
    };
    window.addEventListener('warp-travel', handleWarp);
    return () => window.removeEventListener('warp-travel', handleWarp);
  }, []);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#020202] text-white relative">
      <SpaceBackground />
      <SpaceTravelOverlay />
      <Header />
      
      <main className={`relative z-10 transition-opacity duration-700 ${isWarping ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <HeroSection />
        <ExperienceSection />
        <SkillsShowcase />
        <ProjectSection />
        <CVSection onOpenChat={() => setIsChatOpen(true)} />
        <ContactSection />
      </main>

      {/* Enhanced Chat Interface */}
      <AnimatePresence>
        {isChatOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-8">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-md" 
              onClick={() => setIsChatOpen(false)} 
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl h-[80vh] glass rounded-[2.5rem] border border-white/10 overflow-hidden flex flex-col shadow-2xl"
            >
              <div className="bg-gradient-to-r from-accent to-primary p-6 flex justify-between items-center">
                <h3 className="font-black text-black text-xl flex items-center gap-3">
                  <MessageCircle className="w-6 h-6" />
                  Neural Assistant
                </h3>
                <button
                  onClick={() => setIsChatOpen(false)}
                  className="text-black/50 hover:text-black transition-colors"
                >
                  <X className="w-7 h-7" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-8 space-y-6 custom-scrollbar bg-black/20">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-2xl rounded-3xl px-6 py-4 ${
                        message.role === "user"
                          ? "bg-accent text-black font-bold rounded-br-none"
                          : "glass border border-white/5 text-gray-200 rounded-bl-none"
                      }`}
                    >
                      <div className="prose prose-invert max-w-none">
                        {message.content.split('\n').map((paragraph, i) => (
                          <p key={i} className="mb-3 last:mb-0 leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="glass border border-white/5 rounded-2xl px-6 py-4 rounded-bl-none">
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 rounded-full bg-accent animate-bounce"></div>
                        <div className="w-2 h-2 rounded-full bg-accent animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                        <div className="w-2 h-2 rounded-full bg-accent animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              <div className="p-6 border-t border-white/5 bg-black/40">
                <div className="flex gap-4">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    placeholder="Ask about my systems..."
                    className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent/50 text-white text-lg transition-all"
                    disabled={isLoading}
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={isLoading || !inputValue.trim()}
                    className="bg-accent hover:scale-105 text-black rounded-2xl px-6 py-4 transition-all disabled:opacity-50 font-black uppercase tracking-widest text-sm"
                  >
                    <Send className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}