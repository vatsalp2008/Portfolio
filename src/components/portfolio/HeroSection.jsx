import React from "react";

// Warm dust motes drifting upward — positions/timings spread out for organic feel.
const motes = [
  { left: "12%", bottom: "18%", delay: "0s",   size: 3 },
  { left: "24%", bottom: "10%", delay: "3s",   size: 2 },
  { left: "38%", bottom: "26%", delay: "6s",   size: 4 },
  { left: "52%", bottom: "14%", delay: "1.5s", size: 2 },
  { left: "66%", bottom: "22%", delay: "8s",   size: 3 },
  { left: "78%", bottom: "12%", delay: "4.5s", size: 2 },
  { left: "88%", bottom: "28%", delay: "7s",   size: 4 },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-64px)] overflow-hidden flex flex-col items-center justify-center text-center px-6">

      {/* ── ANIMATED BACKGROUND ── */}
      <div className="absolute inset-0 -z-0" aria-hidden="true">
        {/* dawn sky wash */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FBF8F3] via-[#F7F1E7] to-[#F1E4D3]" />

        {/* sun glow, top-right */}
        <div
          className="absolute top-[6%] right-[8%] w-[280px] h-[280px] rounded-full blur-2xl animate-sun-pulse"
          style={{ background: "radial-gradient(circle, rgba(244,197,144,0.9) 0%, rgba(244,197,144,0) 70%)" }}
        />
        <div className="absolute top-[9%] right-[12%] w-24 h-24 rounded-full bg-[#F6E7CE] blur-sm animate-sun-pulse" />

        {/* drifting warm orbs */}
        <div
          className="absolute top-[24%] left-[10%] w-[340px] h-[340px] rounded-full blur-3xl opacity-50 animate-drift-slow"
          style={{ background: "radial-gradient(circle, rgba(196,118,58,0.28) 0%, rgba(196,118,58,0) 70%)" }}
        />
        <div
          className="absolute bottom-[22%] right-[18%] w-[300px] h-[300px] rounded-full blur-3xl opacity-40 animate-drift-slow2"
          style={{ background: "radial-gradient(circle, rgba(224,163,110,0.3) 0%, rgba(224,163,110,0) 70%)" }}
        />

        {/* floating dust motes */}
        {motes.map((m, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-terra/40 animate-mote"
            style={{
              left: m.left,
              bottom: m.bottom,
              width: m.size,
              height: m.size,
              animationDelay: m.delay,
            }}
          />
        ))}

        {/* rolling hills */}
        <svg
          className="absolute bottom-0 left-0 w-full animate-float-hill"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          style={{ height: "38%" }}
        >
          <path
            fill="#E9D6BE"
            d="M0,224 C240,160 480,272 720,240 C960,208 1200,128 1440,192 L1440,320 L0,320 Z"
          />
        </svg>
        <svg
          className="absolute bottom-0 left-0 w-full animate-float-hill2"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          style={{ height: "28%" }}
        >
          <path
            fill="#DCC29E"
            d="M0,272 C220,224 460,304 720,272 C980,240 1220,288 1440,256 L1440,320 L0,320 Z"
          />
        </svg>
      </div>

      {/* ── CONTENT ── */}
      <div className="relative z-10 flex flex-col items-center gap-6 pb-10">

        {/* availability badge */}
        <div className="inline-flex items-center gap-[9px] bg-white/70 backdrop-blur border border-warm rounded-[30px] px-4 py-[7px] w-fit text-[13px] text-[#444444] animate-rise-in">
          <span className="w-2 h-2 rounded-full bg-[#4CAF50] flex-shrink-0" />
          Open to Fall 2026 internships
        </div>

        {/* eyebrow */}
        <p
          className="text-[12px] font-medium uppercase tracking-[0.35em] text-[#A98B6B] animate-rise-in"
          style={{ animationDelay: "0.05s" }}
        >
          MS Computer Science · Northeastern
        </p>

        {/* giant name */}
        <h1
          className="font-archivo font-extrabold leading-[0.95] tracking-[-0.02em] animate-rise-in"
          style={{ fontSize: "clamp(64px, 13vw, 184px)", animationDelay: "0.12s" }}
        >
          <span className="block text-terra">Vatsal</span>
          <span className="block text-[#1A1A1A]">Patel</span>
        </h1>

        {/* professional tagline */}
        <p
          className="text-[15px] md:text-[17px] font-light text-[#6E6256] leading-[1.6] max-w-[520px] animate-rise-in"
          style={{ animationDelay: "0.2s" }}
        >
          Building thoughtful software, from full-stack systems and ML pipelines
          to agentic AI, often inspired by Formula 1.
        </p>

        {/* buttons */}
        <div
          className="flex gap-3 flex-wrap justify-center mt-2 animate-rise-in"
          style={{ animationDelay: "0.28s" }}
        >
          <a
            href="#work"
            className="bg-[#111111] text-cream px-7 py-3 rounded-[30px] text-sm font-medium hover:opacity-80 transition-opacity duration-200"
          >
            View my work
          </a>
          <a
            href="https://drive.google.com/file/d/1GIchTOz6qFaZNqdPULI8EB8jEt-9x6ec/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/70 backdrop-blur border border-warm text-[#111111] px-7 py-3 rounded-[30px] text-sm font-medium hover:border-terra transition-colors duration-200"
          >
            Download resume
          </a>
        </div>
      </div>

      {/* ── SCROLL CUE ── */}
      <a
        href="#about"
        className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[#A98B6B] hover:text-terra transition-colors duration-200"
      >
        <span className="text-[11px] font-medium uppercase tracking-[0.3em]">Scroll to explore</span>
        <span className="animate-cue-bounce text-lg leading-none">↓</span>
      </a>

    </section>
  );
}
