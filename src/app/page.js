'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import Header from "./comp/Header/page";
import HeroSection from "./comp/hero/page";
import SkillsShowcase from "./comp/skills/page";
import ProjectSection from "./comp/Projects/page";
import HackathonSection from "./comp/hackathons/page";
import CVSection from "./comp/cv/page";
import ExperienceSection from "./comp/experience/page";
import ContactSection from "./comp/contact/page";
import SpaceBackground from "./comp/SpaceBackground";
import SpaceTravelOverlay from "./comp/SpaceTravelOverlay";

export default function Portfolio() {
  const [mounted, setMounted] = useState(false);
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
        <HackathonSection />
        <ProjectSection />
        <CVSection />
        <ContactSection />
      </main>
    </div>
  );
}