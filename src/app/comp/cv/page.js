'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, FileText, Eye, Printer,MessageCircle } from "lucide-react";

export default function CVSection({ onOpenChat }) {
  const cvFilePath = "/Muhammad_Daniyal_Cv.pdf";

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

        {/* Chat Button */}
        <div className="fixed bottom-8 right-8 z-50">
          <button
            onClick={onOpenChat}
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95"
          >
            <MessageCircle className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}