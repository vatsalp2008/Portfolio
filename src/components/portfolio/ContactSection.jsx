import React from "react";
import { motion } from "framer-motion";

const links = [
  {
    label: "Email",
    value: "vatsalp2008@gmail.com",
    href: "mailto:vatsalp2008@gmail.com",
    external: false,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/vatsalp20",
    href: "https://linkedin.com/in/vatsalp20",
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/vatsalp2008",
    href: "https://github.com/vatsalp2008",
    external: true,
  },
  {
    label: "Portfolio",
    value: "vatsalp2008.github.io/Portfolio",
    href: "https://vatsalp2008.github.io/Portfolio",
    external: true,
  },
];

export default function ContactSection() {
  return (
    <section className="bg-white border-t border-warm px-6 md:px-[52px] py-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-16 items-start"
      >

        {/* Left */}
        <div>
          <h2 className="font-display text-[48px] font-bold text-[#111111] leading-[1.1] tracking-tight mb-4">
            Let's build<br />something<br />
            <em className="font-display italic font-light text-terra">great.</em>
          </h2>
          <p className="text-[14px] font-light text-[#999999] leading-[1.75] max-w-[380px]">
            I'm actively looking for Fall 2026 internships in SWE, ML, and AI. Always happy
            to talk about F1, distributed systems, or good coffee.
          </p>
        </div>

        {/* Right — link cards */}
        <div className="flex flex-col gap-3">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              viewport={{ once: true }}
              className="group bg-white border border-warm rounded-xl px-5 py-4 flex items-center justify-between gap-4 hover:border-terra transition-colors duration-200"
            >
              <span className="text-[14px] font-medium text-[#111111] min-w-[80px]">
                {link.label}
              </span>
              <span className="text-[13px] text-[#BBBBBB] flex-1 text-center hidden sm:block">
                {link.value}
              </span>
              <span className="text-terra text-[15px] flex-shrink-0">↗</span>
            </motion.a>
          ))}
        </div>

      </motion.div>
    </section>
  );
}
