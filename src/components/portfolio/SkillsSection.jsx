import React from "react";
import { motion } from "framer-motion";
import SpotlightCard from "../../reactbits/SpotlightCard";

const skillCards = [
  {
    title: "Languages",
    items: ["Python", "TypeScript / JavaScript", "Java", "C / C++", "Rust", "Go", "Ruby", "Swift", "Kotlin", "SQL"],
  },
  {
    title: "ML / AI",
    items: ["PyTorch", "TensorFlow", "XGBoost", "Scikit-learn", "SHAP", "LangGraph / LangChain", "TensorRT / ONNX", "Core ML", "MCP"],
  },
  {
    title: "Frameworks",
    items: ["React", "Next.js", "Spring Boot", "FastAPI", "Flask", "Node.js", "SwiftUI", "Jetpack Compose", "Three.js", "D3.js"],
  },
  {
    title: "Data & Infra",
    items: ["Kafka", "Apache Flink", "Apache Spark", "dbt", "PostgreSQL", "Redis", "Docker", "Kubernetes", "Terraform", "AWS / GCP"],
  },
];

export default function SkillsSection() {
  return (
    <section className="bg-cream px-6 md:px-[52px] min-h-[100svh] flex flex-col justify-center pt-[120px] pb-[72px]">

      <p className="font-display italic text-[13px] text-[#AAAAAA] mb-7">Skills &amp; tools</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {skillCards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <SpotlightCard className="h-full" spotlightColor="rgba(196, 118, 58, 0.18)">
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
            </SpotlightCard>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
