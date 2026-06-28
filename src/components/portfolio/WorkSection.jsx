import React, { useState } from "react";
import { motion } from "framer-motion";

const featured = {
  tag: "ML · Data Engineering · F1",
  title: "F1 Analytics Dashboard",
  description:
    "End-to-end race prediction and telemetry platform processing 500K+ rows across 70+ engineered features. Combines XGBoost, TensorFlow, and real-time lap data into an interactive race replay.",
  tech: ["XGBoost", "TensorFlow", "Spark", "D3.js", "FastF1", "React"],
  github: "https://github.com/vatsalp2008/f1-analytics-dashboard",
  metrics: [
    { number: "73%",   label: "Podium prediction accuracy" },
    { number: "3.2s",  label: "Mean absolute lap error" },
    { number: "500K+", label: "Rows processed" },
    { number: "70+",   label: "Engineered features" },
  ],
};

const projects = [
  {
    tag: "Distributed Systems",
    title: "StreamLine",
    desc: "High-performance messaging system with real-time WebSocket communication, async JPA persistence, and thread-safe concurrent ops. Includes p99 latency testing and 50-message history replay.",
    pills: ["Java 21", "Spring Boot", "WebSocket"],
    link: "https://github.com/vatsalp2008/StreamLine-Distributed-Messaging-Engine",
  },
  {
    tag: "AI · LLM · Full-stack",
    title: "MoodMeals",
    desc: "Hackathon-built meal recommender using LLM-driven mood inference and real-time dietary context. Deployed on Vercel.",
    pills: ["React", "FastAPI", "LLM"],
    link: "https://moodmeals-two.vercel.app",
  },
  {
    tag: "Agentic AI",
    title: "theManager",
    desc: "MCP-powered desktop productivity agent with context-aware task orchestration built with Tauri and PostgreSQL.",
    pills: ["TypeScript", "Tauri", "MCP"],
    link: "https://github.com/aditya-pandita/theManager",
  },
  {
    tag: "ML · Classification",
    title: "Traffic Accident Severity",
    desc: "Binary classification pipeline on 7.7M records using XGBoost, LightGBM, SHAP explainability, and SMOTE balancing.",
    pills: ["XGBoost", "SHAP", "SMOTE"],
    link: "https://github.com/vatsalp2008/Accidents-Severity",
  },
  {
    tag: "Microservices",
    title: "E-commerce Platform",
    desc: "8-service event-driven platform with choreography-based Sagas, Transactional Outbox, Kafka streaming, and database-per-service isolation. Prometheus + Grafana observability included.",
    pills: ["Java", "Kafka", "Docker"],
    link: "https://github.com/vatsalp2008/E-commerce-Platform",
  },
  {
    tag: "iOS · Native App",
    title: "Wardrobe",
    desc: "Native iOS wardrobe manager using SwiftUI and Core ML for on-device clothing recognition via the Vision framework, with WeatherKit-powered outfit suggestions.",
    pills: ["Swift", "SwiftUI", "Core ML"],
    link: "https://github.com/vatsalp2008/Wardrobe",
  },
];

export default function WorkSection() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="px-6 md:px-[52px] py-[72px] bg-cream">

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
          <a
            href={featured.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-[#111111] underline underline-offset-[3px] hover:text-terra transition-colors duration-200 w-fit"
          >
            View project ↗
          </a>
        </div>

        {/* Right — metrics 2×2 */}
        <div
          className="grid grid-cols-2 grid-rows-2 bg-warm"
          style={{ gap: "1px" }}
        >
          {featured.metrics.map((m) => (
            <div key={m.label} className="bg-white p-7 flex flex-col justify-center">
              <div className="font-display text-[38px] font-bold text-terra leading-none tracking-tight mb-2">
                {m.number}
              </div>
              <div className="text-xs font-light text-[#888888] leading-[1.45]">{m.label}</div>
            </div>
          ))}
        </div>
      </motion.a>

      {/* Project grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {projects.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            viewport={{ once: true }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            className={`bg-white border rounded-2xl p-7 flex flex-col gap-[10px] transition-all duration-200 ${
              hovered === i
                ? "border-terra shadow-[0_4px_20px_rgba(0,0,0,0.07)]"
                : "border-warm"
            }`}
          >
            <p className="text-[10px] font-medium uppercase tracking-[0.09em] text-terra">{p.tag}</p>
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
                View project ↗
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
