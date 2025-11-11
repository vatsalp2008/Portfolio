import React, { useState, useEffect } from "react";
import HeroSection from "../../components/portfolio/HeroSection";
// import InfoSection from "../../components/portfolio/InfoSection";
import AboutSection from "../../components/portfolio/AboutSection";
import WorkSection from "../../components/portfolio/WorkSection";
import SkillsSection from "../../components/portfolio/SkillsSection";
import ExperienceSection from "../../components/portfolio/ExperienceSection";
import EducationSection from "../../components/portfolio/EducationSection";
import ContactSection from "../../components/portfolio/ContactSection";
import { ExternalLink } from "lucide-react";

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-[#0a0a0a] text-[#e5e5e5] min-h-screen">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#DC0000]/20" : "bg-transparent"
      }`}>
        <div className="w-full px-6 md:px-12 py-4">
          <div className="flex justify-between items-center">
            <button 
              onClick={scrollToTop}
              className="text-xl md:text-2xl font-black transition-colors duration-300 cursor-pointer group"
            >
              <span className="text-[#B91C1C] group-hover:text-[#DC0000]">VATSAL</span>
              <span className="text-white group-hover:text-[#DC0000]"> PATEL</span>
            </button>
            
            {/* Centered Navigation Items */}
            <div className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
              {["Work", "Skills", "Experience", "About", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm uppercase tracking-wider text-gray-400 hover:text-[#DC0000] transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
            </div>
            
            {/* Social Links on the right */}
            <div className="hidden md:flex items-center gap-6">
              <a
                href="https://linkedin.com/in/vatsalp20"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-gray-400 hover:text-[#DC0000] transition-colors duration-300 group"
              >
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 opacity-70 group-hover:opacity-100" />
              </a>
              <a
                href="https://github.com/vatsalp2008"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-gray-400 hover:text-[#DC0000] transition-colors duration-300 group"
              >
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 opacity-70 group-hover:opacity-100" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Sections in new order */}
      
      {/* 1. Home/Hero Section */}
      <div id="home">
        <HeroSection scrollToSection={scrollToSection} />
      </div>
      
      {/* 2. Work/Featured Projects Section */}
      <div id="work">
        <WorkSection />
      </div>
      
      {/* 3. Skills Section (What I Do) */}
      <div id="skills">
        <SkillsSection />
      </div>
      
      {/* 4. Experience Section */}
      <div id="experience">
        <ExperienceSection />
      </div>
      
      {/* 5. About Section */}
      <div id="about">
        {/* <InfoSection /> */}
        <AboutSection />
        <EducationSection />
      </div>
      
      {/* 6. Contact Section */}
      <div id="contact">
        <ContactSection />
      </div>

      {/* Footer */}
      <footer className="py-8 px-6 md:px-12 bg-[#0a0a0a] border-t border-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            {/* Left side - Copyright and tagline */}
            <div className="text-left">
              <p className="text-gray-500 text-sm mb-1">
                © 2025 All Rights Reserved.
              </p>
              <p className="text-gray-600 text-xs flex items-center gap-2">
                Made with precision engineering and espresso 
                <span className="text-gray-400">☕</span>
              </p>
            </div>
            
            {/* Right side - Social Links */}
            <div className="flex items-center gap-6">
              <a
                href="https://linkedin.com/in/vatsalp20"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors duration-300 text-sm"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/vatsalp2008"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors duration-300 text-sm"
              >
                GitHub
              </a>
              <a
                href="mailto:vatsalp2008@gmail.com"
                className="text-gray-500 hover:text-white transition-colors duration-300 text-sm"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
