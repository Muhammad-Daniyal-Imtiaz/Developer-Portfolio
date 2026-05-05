'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Send, X } from 'lucide-react';
import ParticleBackground from "./comp/ParticleBackground/page";
import Header from "./comp/Header/page";
import HeroSection from "./comp/hero/page";
import SkillsShowcase from "./comp/skills/page";
import ProjectSection from "./comp/Projects/page";
import CVSection from "./comp/cv/page";
import ExperienceSection from "./comp/experience/page";
import ContactSection from "./comp/contact/page";

const FloatingElements = dynamic(
  () => import('./comp/felement/page').then(mod => mod.default),
  { 
    ssr: false,
    loading: () => null
  }
);

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

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      <ParticleBackground />
      <FloatingElements />
      <Header />
      <main>
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
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" onClick={() => setIsChatOpen(false)} />
            
            <motion.div 
              className="relative w-full max-w-4xl h-[80vh] bg-gray-800 rounded-xl shadow-2xl border border-gray-700 overflow-hidden flex flex-col"
              layout
            >
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 flex justify-between items-center">
                <h3 className="font-bold text-white text-xl flex items-center gap-2">
                  <MessageCircle className="w-6 h-6" />
                  CV Assistant
                </h3>
                <button
                  onClick={() => setIsChatOpen(false)}
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-2xl rounded-xl px-5 py-4 ${
                        message.role === "user"
                          ? "bg-blue-600 text-white rounded-br-none"
                          : "bg-gray-700 text-gray-200 rounded-bl-none"
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
                    <div className="bg-gray-700 text-gray-200 rounded-xl px-5 py-3 rounded-bl-none">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-gray-400 animate-bounce"></div>
                        <div className="w-3 h-3 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                        <div className="w-3 h-3 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                      </div>
                    </div>
                  </div>
                )}
                {error && (
                  <div className="text-red-400 text-sm p-3 bg-red-900/30 rounded-lg">
                    {error}
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              <div className="p-4 border-t border-gray-700 bg-gray-900">
                <div className="flex gap-3">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    placeholder="Ask about my CV..."
                    className="flex-1 bg-gray-800 text-white border border-gray-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 text-lg"
                    disabled={isLoading}
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={isLoading || !inputValue.trim()}
                    className="bg-purple-600 hover:bg-purple-700 text-white rounded-xl p-3 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}