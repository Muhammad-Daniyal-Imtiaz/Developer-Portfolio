'use client'
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code2, Server, Brain, Database, Palette, Shield, Zap, Globe, Cpu, Monitor } from "lucide-react";
import Image from "next/image";
import frontendIcon from "../images/13191231.png";
import backendIcon from "../images/backend.png";
import aiIcon from "../images/ai.png";
import devopsIcon from "../images/devops.png";

const skillCategories = [
  {
    title: "Frontend",
    icon: frontendIcon,
    skills: [
      { name: "Next.js 15", level: 95 },
      { name: "React Server Components", level: 90 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Clerk Auth", level: 85 },
    ],
    color: "from-cyan-500 to-blue-500",
    bgColor: "from-cyan-500/10 to-blue-500/10",
  },
  {
    title: "Backend",
    icon: backendIcon,
    skills: [
      { name: "Supabase (PostgreSQL)", level: 90 },
      { name: "WebSockets", level: 85 },
      { name: "Node.js", level: 88 },
      { name: "API Development", level: 92 },
      { name: "Real-time Systems", level: 87 },
    ],
    color: "from-purple-500 to-pink-500",
    bgColor: "from-purple-500/10 to-pink-500/10",
  },
  {
    title: "AI/ML",
    icon: aiIcon,
    skills: [
      { name: "Google Vision API", level: 82 },
      { name: "GitHub Copilot", level: 90 },
      { name: "Amazon Product API", level: 78 },
      { name: "Machine Learning", level: 75 },
      { name: "AI Integration", level: 85 },
    ],
    color: "from-green-500 to-emerald-500",
    bgColor: "from-green-500/10 to-emerald-500/10",
  },
  {
    title: "DevOps",
    icon: devopsIcon,
    skills: [
      { name: "Vercel", level: 95 },
      { name: "Cloudinary", level: 80 },
      { name: "Stripe API", level: 88 },
      { name: "Google Pay API", level: 82 },
      { name: "CI/CD", level: 85 },
    ],
    color: "from-orange-500 to-red-500",
    bgColor: "from-orange-500/10 to-red-500/10",
  },
];

const techIcons = [
  { name: "React", icon: Code2, color: "text-cyan-400" },
  { name: "Next.js", icon: Globe, color: "text-white" },
  { name: "TypeScript", icon: Code2, color: "text-blue-400" },
  { name: "Node.js", icon: Server, color: "text-green-400" },
  { name: "PostgreSQL", icon: Database, color: "text-blue-500" },
  { name: "Supabase", icon: Database, color: "text-green-500" },
  { name: "Tailwind", icon: Palette, color: "text-cyan-300" },
  { name: "Vercel", icon: Zap, color: "text-white" },
  { name: "Stripe", icon: Shield, color: "text-purple-400" },
  { name: "WebSockets", icon: Cpu, color: "text-yellow-400" },
  { name: "AI/ML", icon: Brain, color: "text-pink-400" },
  { name: "Git", icon: Code2, color: "text-orange-400" },
];

export default function SkillsShowcase() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [animatedProgress, setAnimatedProgress] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => {
      const newProgress = {};
      skillCategories.forEach((category) => {
        category.skills.forEach((skill) => {
          newProgress[skill.name] = skill.level;
        });
      });
      setAnimatedProgress(newProgress);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-800/50 to-gray-900/50 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/5 via-transparent to-purple-500/5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-full px-6 py-3 mb-6">
            <Cpu className="w-6 h-6 text-cyan-400 animate-spin-slow" />
            <span className="text-cyan-400 font-medium">Technical Arsenal</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <p className="text-gray-200 text-xl max-w-3xl mx-auto leading-relaxed">
            A comprehensive tech stack spanning modern frontend frameworks, robust backend systems, AI integration, and
            cloud infrastructure with <span className="text-cyan-300 font-semibold">5+ years</span> of hands-on
            experience.
          </p>
        </div>

        {/* Enhanced Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const isImageIcon = typeof category.icon === 'string' || 
                              (typeof category.icon === 'object' && 'src' in category.icon);
            
            return (
              <Card
                key={category.title}
                className={`bg-gradient-to-br ${category.bgColor} backdrop-blur-sm border-gray-600 hover:border-cyan-400/60 transition-all duration-500 cursor-pointer transform relative overflow-hidden group shadow-xl ${
                  hoveredCard === index ? "scale-105 shadow-2xl shadow-cyan-500/30" : "hover:scale-102"
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{ perspective: '1000px' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <CardContent className="p-6 relative z-10">
                  <div className="text-center mb-6">
                    <div className="relative inline-block mb-4">
                      <div className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300`}></div>
                      <div className="relative bg-gray-900/80 p-4 rounded-full border border-gray-600">
                        <div className="w-12 h-12 relative flex items-center justify-center">
                          {isImageIcon ? (
                            <Image
                              src={category.icon}
                              alt={`${category.title} Icon`}
                              width={48}
                              height={48}
                              className="object-contain"
                            />
                          ) : (
                            <category.icon className="w-8 h-8 text-white" />
                          )}
                        </div>
                      </div>
                    </div>
                    <h3 className={`text-2xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-100 text-sm font-medium">{skill.name}</span>
                          <span className="text-cyan-300 text-sm font-bold">{skill.level}%</span>
                        </div>
                        <Progress value={animatedProgress[skill.name] || 0} className="h-3 bg-gray-800" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Interactive Tech Stack Grid */}
        <div className="relative">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4">
              Interactive Tech Stack
            </h3>
            <p className="text-gray-400">Hover over technologies to see them in action</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {techIcons.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <div
                  key={tech.name}
                  className="relative group cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms`, perspective: '1000px' }}
                >
                  <div className={`absolute inset-0 ${tech.color.replace("text-", "bg-").replace("-400", "-500/30").replace("-300", "-500/30").replace("-500", "-500/30")} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-110`}></div>

                  <div className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm border border-gray-600 rounded-2xl p-6 text-center hover:border-cyan-400/60 hover:bg-cyan-500/10 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg group-hover:transform group-hover:translateZ(20px)">
                    <div className="relative">
                      <IconComponent className={`w-12 h-12 ${tech.color} mx-auto mb-3 group-hover:animate-bounce`} />
                      <span className="text-gray-200 group-hover:text-white transition-colors font-medium text-sm">
                        {tech.name}
                      </span>

                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {[...Array(3)].map((_, i) => (
                          <div
                            key={i}
                            className={`absolute w-2 h-2 ${tech.color.replace("text-", "bg-")} rounded-full animate-ping`}
                            style={{
                              top: `${20 + i * 20}%`,
                              left: `${20 + i * 30}%`,
                              animationDelay: `${i * 200}ms`,
                            }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Skill Statistics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Projects Completed", value: "15+", icon: Code2 },
            { label: "Technologies Mastered", value: "20+", icon: Cpu },
            { label: "Years Experience", value: "5+", icon: Zap },
            { label: "Client Satisfaction", value: "100%", icon: Shield },
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={stat.label} className="text-center group">
                <div className="relative inline-block mb-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
                  <div className="relative bg-gray-900/80 p-4 rounded-full border border-gray-600 group-hover:border-cyan-400/60 transition-colors duration-300 backdrop-blur-sm">
                    <IconComponent className="w-8 h-8 text-cyan-400 group-hover:animate-pulse" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-gray-200 text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}