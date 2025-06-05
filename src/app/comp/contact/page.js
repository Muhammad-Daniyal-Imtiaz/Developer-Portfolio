"use client"

import React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  Send,
  MapPin,
  Phone,
  Clock,
  Star,
  Zap,
  Globe,
  Heart,
  Coffee,
  Rocket,
} from "lucide-react"

const contactStats = [
  { icon: Rocket, label: "Projects Delivered", value: "15+", color: "text-cyan-400" },
  { icon: Coffee, label: "Cups of Coffee", value: "500+", color: "text-yellow-400" },
  { icon: Heart, label: "Client Satisfaction", value: "100%", color: "text-red-400" },
  { icon: Zap, label: "Response Time", value: "< 2h", color: "text-green-400" },
]

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("Form submitted:", formData)
    setIsSubmitting(false)
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-purple-500/10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-full px-6 py-3 mb-6">
            <MessageCircle className="w-6 h-6 text-cyan-400 animate-pulse" />
            <span className="text-cyan-400 font-medium">Let&apos;s Connect</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Let&apos;s Connect
          </h2>
          <p className="text-gray-200 text-xl max-w-3xl mx-auto leading-relaxed">
            Ready to collaborate on your next project? Let&apos;s discuss how we can build something{" "}
            <span className="text-cyan-300 font-semibold">amazing</span> together with{" "}
            <span className="text-purple-300 font-semibold">cutting-edge technology</span>.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Enhanced Contact Form */}
          <Card className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border-cyan-400/40 overflow-hidden relative group shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <CardHeader className="relative z-10">
              <CardTitle className="text-2xl text-cyan-300 flex items-center gap-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-cyan-400 rounded-full blur-lg opacity-50 animate-pulse"></div>
                  <div className="relative bg-gray-900 p-2 rounded-full">
                    <Mail className="w-6 h-6 text-cyan-400" />
                  </div>
                </div>
                Send a Message
              </CardTitle>
              <p className="text-gray-200">I&apos;ll get back to you within 24 hours</p>
            </CardHeader>

            <CardContent className="relative z-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-gray-900/50 border-gray-700 text-white placeholder-gray-400 focus:border-cyan-500 transition-colors duration-200"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-gray-900/50 border-gray-700 text-white placeholder-gray-400 focus:border-cyan-500 transition-colors duration-200"
                      required
                    />
                  </div>
                </div>

                <Input
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="bg-gray-900/50 border-gray-700 text-white placeholder-gray-400 focus:border-cyan-500 transition-colors duration-200"
                  required
                />

                <Textarea
                  name="message"
                  placeholder="Your Message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-gray-900/50 border-gray-700 text-white placeholder-gray-400 focus:border-cyan-500 transition-colors duration-200 resize-none"
                  required
                />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-3 relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                        Send Message
                      </>
                    )}
                  </span>
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Enhanced Contact Info & Social Links */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border-purple-500/30 overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <CardHeader className="relative z-10">
                <CardTitle className="text-2xl text-purple-400 flex items-center gap-3">
                  <Globe className="w-6 h-6" />
                  Get In Touch
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-6 relative z-10">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-gray-800/80 rounded-xl border border-gray-600 hover:border-purple-400/60 transition-colors duration-200 group backdrop-blur-sm">
                    <MapPin className="w-6 h-6 text-purple-400 group-hover:animate-bounce" />
                    <div>
                      <div className="text-white font-semibold">Location</div>
                      <div className="text-gray-200 text-sm">Available Worldwide (Remote)</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-gray-800/80 rounded-xl border border-gray-600 hover:border-purple-400/60 transition-colors duration-200 group backdrop-blur-sm">
                    <Clock className="w-6 h-6 text-purple-400 group-hover:animate-spin" />
                    <div>
                      <div className="text-white font-semibold">Response Time</div>
                      <div className="text-gray-200 text-sm">Usually within 2 hours</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-gray-800/80 rounded-xl border border-gray-600 hover:border-purple-400/60 transition-colors duration-200 group backdrop-blur-sm">
                    <Phone className="w-6 h-6 text-purple-400 group-hover:animate-pulse" />
                    <div>
                      <div className="text-white font-semibold">Availability</div>
                      <div className="text-gray-200 text-sm">Mon - Fri, 9 AM - 6 PM EST</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-white font-medium mb-4">Connect on Social</h4>

                  <Button
                    variant="outline"
                    className="w-full justify-start border-gray-600 text-gray-200 hover:border-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/20 transition-all duration-200 group backdrop-blur-sm"
                    onClick={() => window.open("https://www.linkedin.com/in/muhammad-daniyal-imtiaz-2b3180283/", "_blank")}
                  >
                    <Linkedin className="w-5 h-5 mr-3 group-hover:animate-bounce" />
                    LinkedIn Profile
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <Star className="w-4 h-4 text-yellow-400" />
                    </div>
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full justify-start border-gray-700 text-gray-300 hover:border-cyan-500 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-200 group"
                    onClick={() => window.open("https://github.com/Muhammad-Daniyal-Imtiaz", "_blank")}
                  >
                    <Github className="w-5 h-5 mr-3 group-hover:animate-spin" />
                    GitHub Repository
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <Star className="w-4 h-4 text-yellow-400" />
                    </div>
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full justify-start border-gray-700 text-gray-300 hover:border-cyan-500 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-200 group"
                    onClick={() => window.open("mailto:daniyalimtiaz041@gmail.com")}
                  >
                    <Mail className="w-5 h-5 mr-3 group-hover:animate-pulse" />
                    daniyalimtiaz041@gmail.com
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <Star className="w-4 h-4 text-yellow-400" />
                    </div>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* AI Assistant Card */}
            <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm border-green-500/30 overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-emerald-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <CardHeader className="relative z-10">
                <CardTitle className="text-2xl text-green-400 flex items-center gap-3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-green-400 rounded-full blur-lg opacity-50 animate-pulse"></div>
                    <div className="relative bg-gray-900 p-2 rounded-full">
                      <MessageCircle className="w-6 h-6 text-green-400" />
                    </div>
                  </div>
                  AI Assistant
                </CardTitle>
              </CardHeader>

              <CardContent className="relative z-10">
                <p className="text-gray-200 mb-6 leading-relaxed">
                  Have questions about my projects, experience, or technical skills? Chat with my AI assistant for
                  instant, detailed answers about my work and capabilities!
                </p>

                <div className="space-y-4 mb-6">
                  <div className="text-sm text-gray-200">
                    <strong className="text-green-300">Ask me about:</strong>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    {[
                      "Project details",
                      "Tech stack",
                      "Experience",
                      "Availability",
                      "Collaboration",
                      "Code samples",
                    ].map((topic) => (
                      <div key={topic} className="flex items-center gap-2 text-gray-100">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                        {topic}
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold group relative overflow-hidden"
                  onClick={() => {
                    const chatElement = document.querySelector("[data-chat-toggle]")
                    chatElement?.click()
                  }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <MessageCircle className="w-4 h-4 group-hover:animate-bounce" />
                    Start AI Chat
                  </span>
                </Button>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-sm border-orange-500/30 overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-red-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <CardContent className="p-6 relative z-10">
                <h3 className="text-xl font-semibold text-orange-400 mb-6 text-center">Quick Stats</h3>
                <div className="grid grid-cols-2 gap-6">
                  {contactStats.map((stat, index) => {
                    const IconComponent = stat.icon
                    return (
                      <div key={index} className="text-center group">
                        <div className="relative inline-block mb-3">
                          <div
                            className={`absolute inset-0 ${stat.color.replace("text-", "bg-").replace("-400", "-500/20")} rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300`}
                          ></div>
                          <div className="relative bg-gray-900 p-3 rounded-full border border-gray-700 group-hover:border-orange-500/50 transition-colors duration-300">
                            <IconComponent className={`w-5 h-5 ${stat.color} group-hover:animate-pulse`} />
                          </div>
                        </div>
                        <div className="text-2xl font-bold text-white mb-1 group-hover:text-orange-400 transition-colors duration-300">
                          {stat.value}
                        </div>
                        <div className="text-gray-400 text-xs">{stat.label}</div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}