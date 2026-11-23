import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import CountUp from "../../reactbits/CountUp";
import SpotlightCard from "../../reactbits/SpotlightCard";
import { featured, openSource, projects } from "../../data/projects";

const INITIAL_COUNT = 9;

export default function WorkSection() {
  const [showAll, setShowAll] = useState(false);
  const gridRef = useRef(null);
  const visible = showAll ? projects : projects.slice(0, INITIAL_COUNT);

  const toggleShowAll = () => {
    if (showAll) gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    setShowAll(!showAll);
  };

  return (
    <section className="px-6 md:px-[52px] pt-[120px] pb-[72px] bg-cream">

      {/* Header */}
      <div className="flex items-center justify-between mb-7">
        <span className="font-display italic text-[13px] text-[#AAAAAA]">Selected work</span>
        <a
          href="https://github.com/vatsalp2008"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-terra underline underline-offset-[3px] hover:opacity-75 transition-opacity duration-200"
        >
          View all projects →
        </a>
      </div>

      {/* Featured card */}
      <motion.a
        href={featured.github}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="block bg-white border border-warm rounded-2xl grid md:grid-cols-2 overflow-hidden mb-3 hover:border-terra transition-colors duration-200"
      >
        {/* Left */}
        <div className="p-10 md:border-r border-warm flex flex-col">
          <p className="text-[11px] font-medium uppercase tracking-[0.09em] text-terra mb-3">{featured.tag}</p>
          <h2 className="font-display text-[30px] font-bold text-[#111111] leading-[1.1] tracking-tight mb-3">
            {featured.title}
          </h2>
          <p className="text-[14px] font-light text-[#666666] leading-[1.75] mb-5 flex-1">
            {featured.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {featured.tech.map((t) => (
              <span key={t} className="bg-cream border border-warm rounded-[30px] px-3 py-1 text-xs text-[#555555]">
                {t}
              </span>
            ))}
          </div>
          <span className="text-sm font-medium text-[#111111] underline underline-offset-[3px] w-fit">
            View project ↗
          </span>
        </div>

        {/* Right — metrics 2×2 */}
        <div
          className="grid grid-cols-2 grid-rows-2 bg-warm"
          style={{ gap: "1px" }}
        >
          {featured.metrics.map((m) => (
            <div key={m.label} className="bg-white p-7 flex flex-col justify-center">
              <div className="font-display text-[38px] font-bold text-terra leading-none tracking-tight mb-2">
                <CountUp to={m.value} duration={1.8} />
                {m.suffix}
              </div>
              <div className="text-xs font-light text-[#888888] leading-[1.45]">{m.label}</div>
            </div>
          ))}
        </div>
      </motion.a>

      {/* Open source */}
      <p className="font-display italic text-[13px] text-[#AAAAAA] mt-12 mb-4">Open source</p>
      <div className="grid md:grid-cols-2 gap-3 mb-12">
        {openSource.map((c, i) => (
          <motion.a
            key={c.repo}
            href={c.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            viewport={{ once: true }}
            className="bg-white border border-warm rounded-2xl p-8 flex flex-col hover:border-terra transition-colors duration-200"
          >
            <div className="flex items-center justify-between gap-3 flex-wrap mb-3">
              <p className="text-[11px] font-medium uppercase tracking-[0.09em] text-terra">
                {c.repo} · {c.meta}
              </p>
              <span className="inline-flex items-center gap-[7px] border border-warm rounded-[30px] px-3 py-[3px] text-[11px] text-[#444444]">
                <span className="w-[6px] h-[6px] rounded-full bg-[#4CAF50] flex-shrink-0" />
                Merged
              </span>
            </div>
            <h3 className="font-display text-[21px] font-bold text-[#111111] leading-[1.2] tracking-tight mb-3">
              {c.title}
            </h3>
            <p className="text-[13px] font-light text-[#666666] leading-[1.7] mb-5 flex-1">{c.desc}</p>
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex flex-wrap gap-[6px]">
                {c.facts.map((f) => (
                  <span key={f} className="text-[11px] text-[#888888] bg-cream border border-warm rounded-[30px] px-[10px] py-[3px]">
                    {f}
                  </span>
                ))}
              </div>
              <span className="text-xs font-medium text-terra whitespace-nowrap">View PR ↗</span>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Project grid */}
      <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 scroll-mt-24">
        {visible.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: Math.min(i % INITIAL_COUNT, 5) * 0.07 }}
            viewport={{ once: true }}
            className="block h-full"
          >
            <SpotlightCard
              className="h-full flex flex-col gap-[10px] transition-shadow duration-200 hover:shadow-[0_4px_20px_rgba(0,0,0,0.07)]"
              spotlightColor="rgba(196, 118, 58, 0.16)"
            >
              <div className="flex items-center gap-2 flex-wrap">
                <p className="text-[10px] font-medium uppercase tracking-[0.09em] text-terra">{p.tag}</p>
                {p.status && (
                  <span className="text-[10px] text-[#888888] border border-warm rounded-[30px] px-2 py-[1px]">
                    {p.status}
                  </span>
                )}
              </div>
              <h3 className="font-display text-[19px] font-bold text-[#111111] leading-[1.2] tracking-tight">
                {p.title}
              </h3>
              <p className="text-[13px] font-light text-[#999999] leading-[1.65] flex-1">{p.desc}</p>
              <div className="border-t border-[#F0EBE3] pt-[14px] mt-1 flex items-center justify-between flex-wrap gap-2">
                <div className="flex flex-wrap gap-[6px]">
                  {p.pills.map((pill) => (
                    <span key={pill} className="text-[11px] text-[#888888] bg-cream border border-warm rounded-[30px] px-[10px] py-[3px]">
                      {pill}
                    </span>
                  ))}
                </div>
                <span className="text-xs font-medium text-terra whitespace-nowrap">
                  {p.linkLabel ?? "View project"} ↗
                </span>
              </div>
            </SpotlightCard>
          </motion.a>
        ))}
      </div>

      {/* Show all toggle */}
      {projects.length > INITIAL_COUNT && (
        <div className="flex justify-center mt-8">
          <button
            type="button"
            onClick={toggleShowAll}
            aria-expanded={showAll}
            className="bg-white border border-warm text-[#111111] px-7 py-3 rounded-[30px] text-sm font-medium hover:border-terra transition-colors duration-200"
          >
            {showAll ? "Show fewer" : `Show all ${projects.length} projects`}
          </button>
        </div>
      )}
    </section>
  );
}
