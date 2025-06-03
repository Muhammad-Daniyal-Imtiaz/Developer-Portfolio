"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  Code,
  Award,
  Calendar,
  MapPin,
  TrendingUp,
  Users,
  Zap,
  Target,
  BookOpen,
  Lightbulb,
  Trophy,
} from "lucide-react";

const achievements = [
  { icon: Code, label: "Full-stack Applications", value: "8+", color: "text-cyan-400" },
  { icon: Users, label: "Open Source Contributions", value: "15+", color: "text-purple-400" },
  { icon: TrendingUp, label: "Performance Improvement", value: "60%", color: "text-green-400" },
  { icon: Zap, label: "Deployment Time Reduction", value: "75%", color: "text-yellow-400" },
];

const coursework = [
  { name: "Distributed Systems", progress: 95, icon: "🌐" },
  { name: "Artificial Intelligence", progress: 92, icon: "🤖" },
  { name: "Database Management", progress: 90, icon: "🗄️" },
  { name: "Software Engineering", progress: 94, icon: "⚙️" },
  { name: "Web Technologies", progress: 96, icon: "🌍" },
  { name: "Machine Learning", progress: 88, icon: "🧠" },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-800/50 to-gray-900/50 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-cyan-500/5 via-transparent to-purple-500/5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-full px-6 py-3 mb-6">
            <Trophy className="w-6 h-6 text-yellow-400 animate-bounce" />
            <span className="text-cyan-400 font-medium">Journey & Growth</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <p className="text-gray-200 text-xl max-w-3xl mx-auto leading-relaxed">
            Building expertise through academic excellence and hands-on project development with{" "}
            <span className="text-cyan-400 font-semibold">continuous learning</span> and{" "}
            <span className="text-purple-400 font-semibold">innovation</span>
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          <Card className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border-cyan-500/30 overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <CardHeader className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-cyan-400 rounded-full blur-lg opacity-50 animate-pulse"></div>
                  <div className="relative bg-gray-900 p-4 rounded-full border border-cyan-500/30">
                    <GraduationCap className="w-8 h-8 text-cyan-400" />
                  </div>
                </div>
                <div>
                  <CardTitle className="text-2xl text-cyan-400 flex items-center gap-3">
                    Education
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Final Year</Badge>
                  </CardTitle>
                  <div className="flex items-center gap-2 text-gray-200 mt-2">
                    <Calendar className="w-4 h-4" />
                    <span>2021 - 2025</span>
                    <MapPin className="w-4 h-4 ml-4" />
                    <span>Computer Science & Engineering</span>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="relative z-10">
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Bachelor of Engineering - Final Year</h3>
                  <p className="text-white mb-6 leading-relaxed">
                    Pursuing Computer Science & Engineering with a focus on modern web technologies, distributed
                    systems, and artificial intelligence. Maintaining excellent academic performance while building
                    real-world projects.
                  </p>

                  <div className="space-y-4">
                    <h4 className="font-medium text-cyan-400 mb-3 flex items-center gap-2">
                      <BookOpen className="w-5 h-5" />
                      Relevant Coursework:
                    </h4>
                    <div className="grid gap-3">
                      {coursework.map((course) => (
                        <div key={course.name} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-white font-medium text-sm flex items-center gap-2">
                              <span className="text-lg">{course.icon}</span>
                              {course.name}
                            </span>
                            <span className="text-cyan-300 text-sm font-bold">{course.progress}%</span>
                          </div>
                          <Progress value={course.progress} className="h-3 bg-gray-800" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-cyan-400 mb-4 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5" />
                    Key Projects & Research:
                  </h4>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Real-time Auction Platform (Neon-Nexus)",
                        description: "Full-stack application with WebSocket integration and AI features",
                        tech: ["Next.js", "Supabase", "WebSockets", "AI/ML"],
                      },
                      {
                        title: "AI-powered Recommendation System",
                        description: "Machine learning model for personalized product recommendations",
                        tech: ["Python", "TensorFlow", "API Integration"],
                      },
                      {
                        title: "Distributed Database Optimization",
                        description: "Research project on improving query performance in distributed systems",
                        tech: ["PostgreSQL", "Node.js", "Performance Tuning"],
                      },
                      {
                        title: "WebSocket-based Chat Application",
                        description: "Real-time messaging platform with advanced features",
                        tech: ["React", "Socket.io", "MongoDB"],
                      },
                    ].map((project, index) => (
                      <Card
                        key={index}
                        className="bg-gray-800/80 border-gray-600 hover:border-cyan-400/60 transition-colors duration-300 group backdrop-blur-sm"
                      >
                        <CardContent className="p-4">
                          <h5 className="font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-200">
                            {project.title}
                          </h5>
                          <p className="text-gray-200 text-sm mb-3">{project.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech) => (
                              <Badge
                                key={tech}
                                variant="secondary"
                                className="bg-gray-700/80 text-gray-100 text-xs border border-gray-600"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border-purple-500/30 overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <CardHeader className="relative z-10">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-purple-400 rounded-full blur-lg opacity-50 animate-pulse"></div>
                  <div className="relative bg-gray-900 p-4 rounded-full border border-purple-500/30">
                    <Code className="w-8 h-8 text-purple-400" />
                  </div>
                </div>
                <div>
                  <CardTitle className="text-2xl text-purple-400">Technical Experience</CardTitle>
                  <div className="flex items-center gap-2 text-gray-200 mt-2">
                    <Calendar className="w-4 h-4" />
                    <span>2023 - Present</span>
                    <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 ml-4">Active</Badge>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="relative z-10">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                    <Target className="w-5 h-5 text-purple-400" />
                    Full-Stack Developer (Personal Projects)
                  </h3>
                  <p className="text-gray-200 text-sm mb-6">
                    Building innovative solutions and contributing to open-source projects
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-white mb-4">Key Achievements:</h4>
                      <ul className="text-gray-100 space-y-3">
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-100">
                            Developed Neon-Nexus, a real-time auction platform with{" "}
                            <span className="text-cyan-300 font-semibold">1000+ concurrent users</span>
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-100">
                            Integrated Google Vision API for automated product categorization with{" "}
                            <span className="text-purple-300 font-semibold">92% accuracy</span>
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-100">
                            Implemented WebSocket connections for real-time bidding functionality
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-100">
                            Built secure payment processing with Stripe and Google Pay APIs
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-100">
                            Deployed scalable applications on Vercel with{" "}
                            <span className="text-pink-300 font-semibold">99.9% uptime</span>
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium text-white mb-4">Technology Stack:</h4>
                      <div className="flex flex-wrap gap-3">
                        {[
                          "Next.js 15",
                          "React",
                          "TypeScript",
                          "Supabase",
                          "WebSockets",
                          "AI/ML",
                          "Stripe",
                          "Vercel",
                          "Tailwind CSS",
                        ].map((tech) => (
                          <Badge
                            key={tech}
                            className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border-purple-500/30 hover:scale-110 transition-transform duration-200"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm border-green-500/30 overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-emerald-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <CardHeader className="relative z-10">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-green-400 rounded-full blur-lg opacity-50 animate-pulse"></div>
                  <div className="relative bg-gray-900 p-4 rounded-full border border-green-500/30">
                    <Award className="w-8 h-8 text-green-400" />
                  </div>
                </div>
                <CardTitle className="text-2xl text-green-400">Achievements & Certifications</CardTitle>
              </div>
            </CardHeader>

            <CardContent className="relative z-10">
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-medium text-white mb-6 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-400" />
                    Technical Achievements
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    {achievements.map((achievement, index) => {
                      const IconComponent = achievement.icon;
                      return (
                        <div key={index} className="text-center group">
                          <div className="relative inline-block mb-4">
                            <div
                              className={`absolute inset-0 ${achievement.color.replace("text-", "bg-").replace("-400", "-500/20")} rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300`}
                            ></div>
                            <div className="relative bg-gray-900 p-4 rounded-full border border-gray-700 group-hover:border-green-500/50 transition-colors duration-300">
                              <IconComponent className={`w-6 h-6 ${achievement.color} group-hover:animate-pulse`} />
                            </div>
                          </div>
                          <div className="text-2xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">
                            {achievement.value}
                          </div>
                          <div className="text-gray-200 text-sm">{achievement.label}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-white mb-6 flex items-center gap-2">
                    <a href="https://www.linkedin.com/in/muhammad-daniyal-imtiaz-2b3180283/" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">
                      <Trophy className="w-5 h-5 inline-block mr-1" />
                      Certifications & Learning (20+ Certificates Listed on LinkedIn)
                    </a>
                  </h4>
                  <div className="space-y-4">
                    {[
                      {
                        name: "Introduction to Generative AI - Art of the Possible",
                        status: "Completed",
                        progress: 100,
                        color: "text-orange-300",
                        link: "https://drive.google.com/file/d/1KDyuq2pCTR7NKEx2UxcL4Qn7lwyjZiuv/view?usp=sharing"
                      },
                      {
                        name: "Introduction to Front-End Development by Meta",
                        status: "Completed",
                        progress: 100,
                        color: "text-blue-300",
                        link: "https://coursera.org/share/82d4d66418ed351b6c38dd79ab2fd9bd"
                      },
                      {
                        name: "Use Google to get a new Job",
                        status: "Completed",
                        progress: 100,
                        color: "text-green-300",
                        link: "https://drive.google.com/file/d/1vsXiHl93B12owBkPv4XTfj78EbX0jlyW/view?usp=sharing"
                      },
                      {
                        name: "Advanced Theoretical JavaScript by codedamn",
                        status: "Completed",
                        progress: 100,
                        color: "text-cyan-300",
                        link: "https://codedamn.com/certificate/verify/1d6bce6e754a4cf6db8ab82f184f32e0e2d60a9c"
                      },
                    ].map((cert, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          {cert.link ? (
                            <a
                              href={cert.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-white font-medium hover:text-green-300 transition-colors"
                            >
                              {cert.name}
                            </a>
                          ) : (
                            <span className="text-white font-medium">{cert.name}</span>
                          )}
                          <Badge variant="outline" className={`border-gray-500 ${cert.color} text-sm font-medium`}>
                            {cert.status}
                          </Badge>
                        </div>
                        <Progress value={cert.progress} className="h-3 bg-gray-800" />
                        {cert.link && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-green-400 border-green-400 hover:bg-green-400 hover:text-white"
                            onClick={() => window.open(cert.link, '_blank')}
                          >
                            See Certificate
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 p-6 bg-gray-800/80 rounded-xl border border-gray-600 backdrop-blur-sm">
                    <h5 className="font-medium text-green-300 mb-4 text-lg">Recent Accomplishments</h5>
                    <ul className="text-gray-100 space-y-3 text-sm">
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        Contributed to 15+ open-source projects on GitHub
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        Optimized database queries for 50% performance improvement
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        Implemented CI/CD pipelines reducing deployment time by 70%
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        Built responsive applications serving 10k+ monthly users
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
