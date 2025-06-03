'use client';

import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, FileText, Eye, Printer, MessageCircle, Send, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CVSectionWithChat() {
  const cvFilePath = "/Muhammad_Daniyal_Cv.pdf";
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi there! I can answer questions about this CV. What would you like to know?" }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const messagesEndRef = useRef(null);

  // CV Action Handlers
  const handleOpenCV = () => window.open(cvFilePath, "_blank");
  
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = cvFilePath;
    link.download = "Muhammad_Daniyal_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrintCV = () => {
    const printWindow = window.open(cvFilePath, '_blank');
    printWindow?.addEventListener('load', () => {
      setTimeout(() => printWindow.print(), 1000);
    });
  };

  // Chat Handlers
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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: inputValue }),
      });

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      
      const data = await response.json();
      if (data.error) throw new Error(data.error);

      setMessages(prev => [...prev, { role: "assistant", content: data.response }]);
    } catch (error) {
      console.error("Chat error:", error);
      setError(error.message || "Failed to get response");
      setMessages(prev => [...prev, {
        role: "assistant",
        content: "I'm having trouble accessing the CV information."
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => scrollToBottom(), [messages]);

  return (
    <section id="cv" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* CV Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-full px-6 py-3 mb-6">
            <FileText className="w-6 h-6 text-cyan-400 animate-pulse" />
            <span className="text-cyan-400 font-medium">Professional Resume</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Curriculum Vitae
          </h2>
          <p className="text-gray-200 text-xl max-w-3xl mx-auto leading-relaxed">
            Download my CV or view it online to learn more about my professional experience
          </p>
        </div>

        {/* CV Action Cards */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* View Online Card */}
            <Card className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border-cyan-500/30 overflow-hidden relative group hover:scale-105 transition-all duration-300">
              <CardHeader className="relative z-10">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-cyan-400 rounded-full blur-lg opacity-50 animate-pulse"></div>
                    <div className="relative bg-gray-900 p-3 rounded-full border border-cyan-500/30">
                      <Eye className="w-6 h-6 text-cyan-400" />
                    </div>
                  </div>
                  <CardTitle className="text-xl text-cyan-400">View Online</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-gray-200 mb-6">Open my CV in a new tab for easy viewing</p>
                <Button
                  onClick={handleOpenCV}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Open CV
                </Button>
              </CardContent>
            </Card>

            {/* Download Card */}
            <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border-purple-500/30 overflow-hidden relative group hover:scale-105 transition-all duration-300">
              <CardHeader className="relative z-10">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-purple-400 rounded-full blur-lg opacity-50 animate-pulse"></div>
                    <div className="relative bg-gray-900 p-3 rounded-full border border-purple-500/30">
                      <Download className="w-6 h-6 text-purple-400" />
                    </div>
                  </div>
                  <CardTitle className="text-xl text-purple-400">Download PDF</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-gray-200 mb-6">Download a PDF copy of my CV for offline viewing</p>
                <Button
                  onClick={handleDownloadCV}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </Button>
              </CardContent>
            </Card>

            {/* Print Card */}
            <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm border-green-500/30 overflow-hidden relative group hover:scale-105 transition-all duration-300">
              <CardHeader className="relative z-10">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-green-400 rounded-full blur-lg opacity-50 animate-pulse"></div>
                    <div className="relative bg-gray-900 p-3 rounded-full border border-green-500/30">
                      <Printer className="w-6 h-6 text-green-400" />
                    </div>
                  </div>
                  <CardTitle className="text-xl text-green-400">Print CV</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-gray-200 mb-6">Print a physical copy of my CV</p>
                <Button
                  onClick={handlePrintCV}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white"
                >
                  <Printer className="w-4 h-4 mr-2" />
                  Print CV
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Chat Interface */}
        <div className="fixed bottom-8 right-8 z-50">
          <AnimatePresence>
            {isChatOpen ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                transition={{ duration: 0.2 }}
                className="w-80 bg-gray-800 rounded-lg shadow-xl border border-gray-700 overflow-hidden flex flex-col"
                style={{ maxHeight: "500px" }}
              >
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 flex justify-between items-center">
                  <h3 className="font-bold text-white flex items-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    CV Assistant
                  </h3>
                  <button
                    onClick={() => setIsChatOpen(false)}
                    className="text-white hover:text-gray-200 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-xs rounded-lg px-4 py-2 ${
                          message.role === "user"
                            ? "bg-blue-600 text-white rounded-br-none"
                            : "bg-gray-700 text-gray-200 rounded-bl-none"
                        }`}
                      >
                        {message.content}
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-gray-700 text-gray-200 rounded-lg px-4 py-2 rounded-bl-none">
                        <div className="flex space-x-2">
                          <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></div>
                          <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                          <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                  {error && (
                    <div className="text-red-400 text-sm p-2 bg-red-900/30 rounded">
                      {error}
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                <div className="p-4 border-t border-gray-700 bg-gray-900">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                      placeholder="Ask about my CV..."
                      className="flex-1 bg-gray-800 text-white border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      disabled={isLoading}
                    />
                    <button
                      onClick={handleSendMessage}
                      disabled={isLoading || !inputValue.trim()}
                      className="bg-purple-600 hover:bg-purple-700 text-white rounded-lg p-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsChatOpen(true)}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all"
              >
                <MessageCircle className="w-6 h-6" />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}