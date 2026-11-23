import React, { useEffect, useState } from "react";
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

const SECTION_IDS = navItems
  .filter((item) => item.href.startsWith("#"))
  .map((item) => item.href.slice(1));

// Scroll-spy: the active section is the last one whose top has crossed 40% of
// the viewport. At the very bottom the last section wins, since Contact is too
// short to ever reach that line.
function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const root = document.documentElement;
      const atBottom = window.innerHeight + window.scrollY >= root.scrollHeight - 2;
      let current = ids[0];

      if (atBottom) {
        current = ids[ids.length - 1];
      } else {
        const line = window.innerHeight * 0.4;
        for (const id of ids) {
          const el = document.getElementById(id);
          if (el && el.getBoundingClientRect().top <= line) current = id;
        }
      }
      setActive(current);
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [ids]);

  return active;
}

// Kept separate so scroll updates re-render only the nav, not the page.
function Nav() {
  const active = useActiveSection(SECTION_IDS);
  return (
    <PillNav
      logo={logo}
      logoAlt="Vatsal Patel"
      items={navItems}
      activeHref={`#${active}`}
      baseColor="#FFFFFF"
      pillColor="transparent"
      pillTextColor="#111111"
      hoveredPillTextColor="#F7F4EF"
    />
  );
}

export default function Portfolio() {
  return (
    <div className="bg-cream text-[#111111] min-h-screen">

      {/* ── NAV ── */}
      <Nav />

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

      {/* ── CONTACT + FOOTER (together they fill the last screen) ── */}
      <div id="contact" className="min-h-[100svh] flex flex-col">
        <ContactSection />

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

    </div>
  );
}
