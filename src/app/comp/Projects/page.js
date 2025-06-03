"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  ExternalLink,
  Github,
  ChevronDown,
  ChevronUp,
  Zap,
  Users,
  CreditCard,
  Eye,
  TrendingUp,
  Shield,
  Clock,
  Star,
  Activity,
  Database,
  Cpu,
  Globe,
} from "lucide-react";

const projectFeatures = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Real-time Bidding",
    description:
      "WebSocket-powered live auction system with instant bid updates and notifications",
    metrics: { performance: 95, users: "1000+", latency: "50ms" },
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: <Eye className="w-6 h-6" />,
    title: "AI Vision Integration",
    description:
      "Google Vision API for automated product categorization and quality assessment",
    metrics: { accuracy: 92, processed: "10k+", speed: "2s" },
    color: "from-purple-400 to-pink-500",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "OAuth Authentication",
    description:
      "Seamless user authentication with Clerk, supporting multiple providers",
    metrics: { security: 99, providers: "5+", uptime: "99.9%" },
    color: "from-blue-400 to-cyan-500",
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: "Payment Processing",
    description:
      "Integrated Stripe and Google Pay for secure, multi-method transactions",
    metrics: { success: 98, methods: "8+", volume: "$50k+" },
    color: "from-green-400 to-emerald-500",
  },
];

const projectStats = [
  {
    icon: TrendingUp,
    label: "Performance Score",
    value: 98,
    color: "text-green-400",
  },
  { icon: Shield, label: "Security Rating", value: 95, color: "text-blue-400" },
  { icon: Clock, label: "Load Time", value: 85, color: "text-yellow-400", suffix: "ms" },
  { icon: Activity, label: "Uptime", value: 99.9, color: "text-purple-400", suffix: "%" },
];

export default function ProjectSection() {
  const [expandedFeatures, setExpandedFeatures] = useState([]);
  const [activeTab, setActiveTab] = useState("overview");

  const toggleFeature = (index) => {
    setExpandedFeatures((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-purple-500/10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-full px-6 py-3 mb-6">
            <Star className="w-6 h-6 text-yellow-400 animate-pulse" />
            <span className="text-cyan-400 font-medium">Featured Work</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Featured Project
          </h2>
          <p className="text-gray-200 text-xl max-w-3xl mx-auto leading-relaxed">
            Neon-Nexus: A cutting-edge real-time auction platform showcasing full-stack expertise with{" "}
            <span className="text-cyan-300 font-semibold">advanced AI integration</span>
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Enhanced Main Project Card */}
          <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border-cyan-500/30 mb-12 overflow-hidden relative group">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <CardHeader className="relative z-10">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-cyan-400 rounded-full blur-lg opacity-50 animate-pulse"></div>
                      <div className="relative bg-gray-900 p-3 rounded-full border border-cyan-500/30">
                        <Cpu className="w-8 h-8 text-cyan-400" />
                      </div>
                    </div>
                    <div>
                      <CardTitle className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                        Neon-Nexus
                      </CardTitle>
                      <p className="text-gray-300 text-lg">Real-time Auction Platform with AI Integration</p>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white group relative overflow-hidden px-6 py-3"
                    onClick={() => window.open("#", "_blank")}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <ExternalLink className="w-5 h-5 group-hover:animate-bounce" />
                      Live Demo
                    </span>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 backdrop-blur-sm px-6 py-3 group"
                    onClick={() => window.open("#", "_blank")}
                  >
                    <Github className="w-5 h-5 mr-2 group-hover:animate-spin" />
                    GitHub
                  </Button>
                </div>
              </div>
            </CardHeader>

            <CardContent className="relative z-10">
              {/* Tab Navigation */}
              <div className="flex gap-4 mb-8 border-b border-gray-700">
                {["overview", "features", "tech-stack", "metrics"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 font-medium capitalize transition-colors duration-200 border-b-2 ${
                      activeTab === tab
                        ? "text-cyan-400 border-cyan-400"
                        : "text-gray-400 border-transparent hover:text-cyan-300"
                    }`}
                  >
                    {tab.replace("-", " ")}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              {activeTab === "overview" && (
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Project Demo/Image */}
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
                    <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 group-hover:border-cyan-500/50 transition-colors duration-300">
                      <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-6 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;40&quot; height=&quot;40&quot; viewBox=&quot;0 0 40 40&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fillOpacity=&quot;0.1&quot;%3E%3Cpath d=&quot;M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z&quot;/%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
                        <div className="text-center relative z-10">
                          <Globe className="w-20 h-20 text-cyan-400 mx-auto mb-4 animate-spin-slow" />
                          <p className="text-cyan-400 font-semibold text-lg">Live Demo Preview</p>
                          <p className="text-gray-400">Interactive auction interface</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-3">
                        {["Next.js 15", "Supabase", "WebSockets", "Stripe", "Google Vision"].map((tech) => (
                          <Badge
                            key={tech}
                            className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border-cyan-500/30 hover:scale-110 transition-transform duration-200"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Project Description */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-white mb-4">Project Overview</h3>
                    <p className="text-gray-200 leading-relaxed text-lg">
                      Neon-Nexus is a sophisticated real-time auction platform that combines modern web technologies
                      with AI-powered features. Built with Next.js 15 and Supabase, it delivers seamless real-time
                      bidding experiences while leveraging Google Vision API for intelligent product analysis.
                    </p>

                    <div className="space-y-4">
                      {[
                        {
                          icon: Activity,
                          text: "Real-time bidding with WebSocket connections",
                          color: "text-cyan-400",
                        },
                        { icon: Eye, text: "AI-powered product categorization", color: "text-purple-400" },
                        { icon: Shield, text: "Secure payment processing with Stripe", color: "text-green-400" },
                        { icon: Users, text: "OAuth authentication with Clerk", color: "text-orange-400" },
                      ].map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                          <div key={index} className="flex items-center gap-4 group">
                            <div
                              className={`p-3 rounded-xl bg-gray-800/80 border border-gray-600 group-hover:border-cyan-400/60 transition-colors duration-200 backdrop-blur-sm`}
                            >
                              <IconComponent className={`w-5 h-5 ${item.color}`} />
                            </div>
                            <span className="text-gray-200 group-hover:text-white transition-colors duration-200 font-medium">
                              {item.text}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "metrics" && (
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {projectStats.map((stat, index) => {
                    const IconComponent = stat.icon;
                    return (
                      <Card
                        key={index}
                        className="bg-gray-800/50 border-gray-700 hover:border-cyan-500/50 transition-colors duration-300 group"
                      >
                        <CardContent className="p-6 text-center">
                          <div className="relative inline-block mb-4">
                            <div
                              className={`absolute inset-0 ${stat.color.replace("text-", "bg-").replace("-400", "-500/20")} rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300`}
                            ></div>
                            <div className="relative bg-gray-900 p-3 rounded-full">
                              <IconComponent className={`w-6 h-6 ${stat.color}`} />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="text-2xl font-bold text-white">
                              {stat.value}
                              {stat.suffix || ""}
                            </div>
                            <div className="text-gray-400 text-sm">{stat.label}</div>
                            <Progress value={typeof stat.value === "number" ? stat.value : 100} className="h-2" />
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Enhanced Feature Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {projectFeatures.map((feature, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border-gray-600 hover:border-cyan-400/60 transition-all duration-300 cursor-pointer group overflow-hidden relative shadow-xl"
                onClick={() => toggleFeature(index)}
              >
                {/* Enhanced Animated Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                ></div>

                <CardContent className="p-6 relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-r ${feature.color} bg-opacity-20 group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm`}
                      >
                        <div className="text-white">{feature.icon}</div>
                      </div>
                      <h3 className="font-bold text-white text-lg group-hover:text-cyan-300 transition-colors duration-200">
                        {feature.title}
                      </h3>
                    </div>
                    {expandedFeatures.includes(index) ? (
                      <ChevronUp className="w-5 h-5 text-gray-300 group-hover:text-cyan-400 transition-colors duration-200" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-300 group-hover:text-cyan-400 transition-colors duration-200" />
                    )}
                  </div>

                  {expandedFeatures.includes(index) && (
                    <div className="space-y-4 animate-in slide-in-from-top duration-300">
                      <p className="text-gray-200 leading-relaxed">{feature.description}</p>
                      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-600">
                        {Object.entries(feature.metrics).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="text-lg font-bold text-cyan-300">{value}</div>
                            <div className="text-xs text-gray-300 capitalize">{key}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Enhanced GitHub Stats */}
          <Card className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border-gray-600 hover:border-cyan-400/60 transition-colors duration-300 shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">
                Project Metrics & Performance
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { label: "Components", value: "25+", icon: Database, color: "text-cyan-400" },
                  { label: "Lines of Code", value: "8k+", icon: Cpu, color: "text-purple-400" },
                  { label: "Test Coverage", value: "98%", icon: Shield, color: "text-green-400" },
                  { label: "Avg Response", value: "45ms", icon: Zap, color: "text-yellow-400" },
                ].map((metric, index) => {
                  const IconComponent = metric.icon;
                  return (
                    <div key={index} className="text-center group">
                      <div className="relative inline-block mb-4">
                        <div
                          className={`absolute inset-0 ${metric.color.replace("text-", "bg-").replace("-400", "-500/30")} rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300`}
                        ></div>
                        <div className="relative bg-gray-900/80 p-4 rounded-full border border-gray-600 group-hover:border-cyan-400/60 transition-colors duration-300 backdrop-blur-sm">
                          <IconComponent className={`w-6 h-6 ${metric.color} group-hover:animate-pulse`} />
                        </div>
                      </div>
                      <div className="text-3xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                        {metric.value}
                      </div>
                      <div className="text-gray-200 text-sm">{metric.label}</div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
