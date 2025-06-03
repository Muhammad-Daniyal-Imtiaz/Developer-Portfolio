"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: "1",
      content:
        "Hi! I'm an AI assistant that can answer questions about the developer's projects, skills, and experience. What would you like to know?",
      role: "assistant",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = {
      id: Date.now().toString(),
      content: input,
      role: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate AI response (replace with actual AI SDK integration)
    setTimeout(() => {
      const responses = [
        "The Neon-Nexus project is a real-time auction platform built with Next.js 15, featuring WebSocket connections for live bidding, Google Vision API for product analysis, and Stripe integration for payments.",
        "The developer specializes in full-stack development with expertise in React, Next.js, TypeScript, Supabase, and AI integration. They're currently in their final year of engineering studies.",
        "Key technologies used include Next.js 15, React Server Components, Supabase for the database, WebSockets for real-time features, and various AI APIs like Google Vision.",
        "The portfolio showcases strong skills in modern web development, real-time systems, AI integration, and payment processing. The developer focuses on creating scalable, user-friendly applications.",
        "You can view the live demo of Neon-Nexus and explore the GitHub repository to see the code implementation and project structure.",
      ];

      const assistantMessage = {
        id: (Date.now() + 1).toString(),
        content: responses[Math.floor(Math.random() * responses.length)],
        role: "assistant",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <Button
        data-chat-toggle
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 shadow-lg z-50"
        size="icon"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-96 h-96 bg-gray-900 border-cyan-500/30 shadow-2xl z-50 flex flex-col">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg text-cyan-400 flex items-center gap-2">
              <Bot className="w-5 h-5" />
              AI Assistant
            </CardTitle>
          </CardHeader>

          <CardContent className="flex-1 flex flex-col p-4 pt-0">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto space-y-3 mb-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex gap-2 ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {message.role === "assistant" && <Bot className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />}
                  <div
                    className={`max-w-[80%] p-3 rounded-lg text-sm ${
                      message.role === "user"
                        ? "bg-cyan-500 text-gray-900"
                        : "bg-gray-800 text-gray-300 border border-gray-700"
                    }`}
                  >
                    {message.content}
                  </div>
                  {message.role === "user" && <User className="w-6 h-6 text-gray-400 mt-1 flex-shrink-0" />}
                </div>
              ))}

              {isLoading && (
                <div className="flex gap-2 justify-start">
                  <Bot className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                  <div className="bg-gray-800 border border-gray-700 p-3 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about projects, skills..."
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 text-sm"
                disabled={isLoading}
              />
              <Button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                size="icon"
                className="bg-cyan-500 hover:bg-cyan-600 text-gray-900"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
}
