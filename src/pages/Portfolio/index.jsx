import React from "react";
import HeroSection from "../../components/portfolio/HeroSection";
import MarqueeSection from "../../components/portfolio/MarqueeSection";
import WorkSection from "../../components/portfolio/WorkSection";
import AboutSection from "../../components/portfolio/AboutSection";
import SkillsSection from "../../components/portfolio/SkillsSection";
import ContactSection from "../../components/portfolio/ContactSection";
import PillNav from "../../reactbits/PillNav";
import ShinyText from "../../reactbits/ShinyText";

// "VP" monogram used as the PillNav logo.
const logo =
  "data:image/svg+xml," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'><text x='50%' y='55%' font-family='Poppins, sans-serif' font-size='19' font-weight='800' fill='#F7F4EF' text-anchor='middle' dominant-baseline='middle'>VP</text></svg>`
  );

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Resume", href: "https://drive.google.com/file/d/1GIchTOz6qFaZNqdPULI8EB8jEt-9x6ec/view?usp=sharing" },
  { label: "Contact", href: "#contact" },
];

export default function Portfolio() {
  return (
    <div className="bg-cream text-[#111111] min-h-screen">

      {/* ── NAV ── */}
      <PillNav
        logo={logo}
        logoAlt="Vatsal Patel"
        items={navItems}
        activeHref="#hero"
        baseColor="#FFFFFF"
        pillColor="transparent"
        pillTextColor="#111111"
        hoveredPillTextColor="#F7F4EF"
      />

      {/* ── HERO ── */}
      <div id="hero">
        <HeroSection />
      </div>

      {/* ── MARQUEE ── */}
      <MarqueeSection />

      {/* ── ABOUT ── */}
      <div id="about">
        <AboutSection />
      </div>

      {/* ── SKILLS ── */}
      <div id="skills">
        <SkillsSection />
      </div>

      {/* ── WORK ── */}
      <div id="work">
        <WorkSection />
      </div>

      {/* ── CONTACT ── */}
      <div id="contact">
        <ContactSection />
      </div>

      {/* ── FOOTER ── */}
      <footer className="bg-cream border-t border-warm px-6 md:px-[52px] py-6 flex items-center justify-between">
        <span className="text-xs text-[#CCCCCC]">© 2026 Vatsal Patel</span>
        <ShinyText
          text="Built with precision."
          speed={4}
          color="#CCCCCC"
          shineColor="#C4763A"
          className="font-display italic text-sm"
        />
      </footer>

    </div>
  );
}
