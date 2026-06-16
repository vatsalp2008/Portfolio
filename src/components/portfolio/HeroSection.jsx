import React from "react";
import { motion } from "framer-motion";

const stats = [
  { number: "15",  label: "Projects shipped" },
  { number: "2",   label: "Industry internships" },
  { number: "73%", label: "F1 podium prediction accuracy" },
];

export default function HeroSection() {
  return (
    <div className="min-h-[calc(100vh-64px)] px-6 md:px-[52px] pt-16 pb-20 grid md:grid-cols-2 gap-16 items-stretch">

      {/* ── LEFT ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col justify-start gap-7"
      >
        {/* Availability badge */}
        <div className="inline-flex items-center gap-[9px] bg-white border border-warm rounded-[30px] px-4 py-[7px] w-fit text-[13px] text-[#444444]">
          <span className="w-2 h-2 rounded-full bg-[#4CAF50] flex-shrink-0" />
          Open to Fall 2026 internships
        </div>

        {/* H1 */}
        <h1 className="font-display text-[clamp(42px,5.5vw,68px)] font-bold leading-[1.04] tracking-tight text-[#111111]">
          Building{" "}
          <em className="font-display not-italic italic font-light text-terra">thoughtful</em>
          <br />software.
        </h1>

        {/* Body */}
        <p className="text-[15px] font-light text-[#888888] leading-[1.7] max-w-[420px]">
          MS Computer Science at Northeastern, Seattle. I build full-stack systems, ML pipelines, and agentic AI — often inspired by Formula 1.
        </p>

        {/* Buttons */}
        <div className="flex gap-3 flex-wrap">
          <a
            href="#work"
            className="bg-[#111111] text-cream px-6 py-3 rounded-[30px] text-sm font-medium hover:opacity-80 transition-opacity duration-200"
          >
            View my work
          </a>
          <a
            href="https://drive.google.com/file/d/1mBT1K3wxfBn_RZnkIqd0VqjYTwd4sdsq/view?usp=share_link"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-warm text-[#111111] px-6 py-3 rounded-[30px] text-sm font-medium hover:border-terra transition-colors duration-200"
          >
            Download resume
          </a>
        </div>
      </motion.div>

      {/* ── RIGHT — stats ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="flex flex-col justify-end pb-2"
      >
        {stats.map((s) => (
          <div
            key={s.number}
            className="border-t border-warm py-6 flex items-baseline justify-between gap-4"
          >
            <span className="font-display text-[54px] font-bold leading-none tracking-tight text-[#111111]">
              {s.number}
            </span>
            <span className="text-[13px] font-light text-[#888888] text-right max-w-[160px] leading-[1.4]">
              {s.label}
            </span>
          </div>
        ))}
        <p className="mt-5 font-display italic font-light text-sm text-[#BBBBBB]">
          "Code that moves as fast as the cars I admire."
        </p>
      </motion.div>

    </div>
  );
}
