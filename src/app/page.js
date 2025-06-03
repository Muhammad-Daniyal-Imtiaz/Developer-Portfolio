
'use cleint'

import AIChat from "./comp/aichat/page"
import ContactSection from "./comp/contact/page"
import CVSectionWithChat from "./comp/cv/page"
import ExperienceSection from "./comp/experience/page"
import FloatingElements from "./comp/felement/page"
import Header from "./comp/Header/page"
import HeroSection from "./comp/hero/page"
import ProjectsCarousel from "./comp/mprojects/page"
import ParticleBackground from "./comp/ParticleBackground/page"
import ProjectSection from "./comp/Projects/page"
import SkillsShowcase from "./comp/skills/page"


export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      <ParticleBackground />
      <FloatingElements />
      <Header />
      <main>
        <HeroSection />
        <SkillsShowcase />

        <ProjectSection />
                      <ProjectsCarousel/>
                      <CVSectionWithChat/>

        <ExperienceSection />
        <ContactSection />
      </main>
      {/* <AIChat /> */}
    </div>
  )
}
