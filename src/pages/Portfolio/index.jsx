import React from "react";
import HeroSection from "../../components/portfolio/HeroSection";
import MarqueeSection from "../../components/portfolio/MarqueeSection";
import WorkSection from "../../components/portfolio/WorkSection";
import AboutSection from "../../components/portfolio/AboutSection";
import SkillsSection from "../../components/portfolio/SkillsSection";
import ContactSection from "../../components/portfolio/ContactSection";

export default function Portfolio() {
  return (
    <div className="bg-cream text-[#111111] min-h-screen">

      {/* ── NAV ── */}
      <nav className="sticky top-0 z-50 bg-cream border-b border-warm h-16 px-6 md:px-[52px] flex items-center justify-between">
        <a href="#hero" className="font-display text-base font-bold text-[#111111] tracking-tight">
          Vatsal Patel
        </a>
        <div className="flex items-center gap-8">
          <a href="#work"  className="hidden md:block text-sm text-[#888888] hover:text-[#111111] transition-colors duration-200">Work</a>
          <a href="#about" className="hidden md:block text-sm text-[#888888] hover:text-[#111111] transition-colors duration-200">About</a>
          <a
            href="https://drive.google.com/file/d/1mBT1K3wxfBn_RZnkIqd0VqjYTwd4sdsq/view?usp=share_link"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block text-sm text-[#888888] hover:text-[#111111] transition-colors duration-200"
          >
            Resume
          </a>
          <a href="#contact" className="bg-[#111111] text-cream text-sm font-medium px-5 py-[9px] rounded-[30px] hover:opacity-80 transition-opacity duration-200">
            Get in touch
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <div id="hero">
        <HeroSection />
      </div>

      {/* ── MARQUEE ── */}
      <MarqueeSection />

      {/* ── WORK ── */}
      <div id="work">
        <WorkSection />
      </div>

      {/* ── ABOUT ── */}
      <div id="about">
        <AboutSection />
      </div>

      {/* ── SKILLS ── */}
      <div id="skills">
        <SkillsSection />
      </div>

      {/* ── CONTACT ── */}
      <div id="contact">
        <ContactSection />
      </div>

      {/* ── FOOTER ── */}
      <footer className="bg-cream border-t border-warm px-6 md:px-[52px] py-6 flex items-center justify-between">
        <span className="text-xs text-[#CCCCCC]">© 2026 Vatsal Patel</span>
        <span className="font-display italic text-sm text-[#CCCCCC]">Built with precision.</span>
      </footer>

    </div>
  );
}
