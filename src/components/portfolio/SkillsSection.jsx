import React from "react";
import { motion } from "framer-motion";

const skillCards = [
  {
    title: "Languages",
    items: ["Python", "TypeScript / JavaScript", "C / C++", "Rust", "SQL", "Java"],
  },
  {
    title: "ML / Data",
    items: ["XGBoost", "LightGBM", "TensorFlow", "PyTorch", "Scikit-learn", "Apache Spark", "SHAP", "Pandas"],
  },
  {
    title: "Frameworks",
    items: ["React", "Next.js", "FastAPI", "Flask", "Node.js", "Express", "Tauri", "D3.js"],
  },
  {
    title: "Tools & Infra",
    items: ["Docker", "Kubernetes", "PostgreSQL", "Redis", "AWS", "GCP", "Git", "GitHub Actions", "MCP"],
  },
];

export default function SkillsSection() {
  return (
    <section className="bg-cream px-6 md:px-[52px] py-[72px]">

      <p className="font-display italic text-[13px] text-[#AAAAAA] mb-7">Skills &amp; tools</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {skillCards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            viewport={{ once: true }}
            className="bg-white border border-warm rounded-2xl p-6"
          >
            <p className="text-[11px] font-medium uppercase tracking-[0.1em] text-terra mb-[18px]">
              {card.title}
            </p>
            <div className="flex flex-col gap-[11px]">
              {card.items.map((item) => (
                <div key={item} className="flex items-center gap-[9px] text-[13px] font-light text-[#444444]">
                  <span className="w-1 h-1 rounded-full bg-terra flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
