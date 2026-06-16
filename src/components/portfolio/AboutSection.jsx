import React from "react";
import { motion } from "framer-motion";

const industry = [
  {
    role: "Machine Learning Intern",
    company: "Kalini Industries",
    date: "Dec 2024 – Mar 2025",
  },
  {
    role: "Software Development Intern",
    company: "Kalini Industries",
    date: "Jan – Apr 2024",
  },
];

// Multi-role entries use `roles` array; single entries use `role` string.
const other = [
  {
    role: "Teaching Assistant, CS 5008",
    company: "Northeastern University",
    date: "Jan – May 2026",
  },
  {
    role: "Event Assistant",
    company: "Northeastern University", // ← update if this is a different org
    date: "May 2026 – present",
  },
  {
    role: "Head Coordinator / AV Specialist",
    company: "BAPS Charities",
    date: "Jan 2018 – present",
  },
];

function SingleRow({ role, company, date, isLast, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      viewport={{ once: true }}
      className={`border-t border-warm py-[18px] grid grid-cols-[1fr_auto] gap-3 items-start ${
        isLast ? "border-b border-warm" : ""
      }`}
    >
      <div>
        <p className="text-[14px] font-medium text-[#111111] mb-[3px]">{role}</p>
        <p className="text-[13px] text-[#555555]">{company}</p>
      </div>
      <p className="text-[12px] text-[#AAAAAA] text-right whitespace-nowrap pt-[2px]">{date}</p>
    </motion.div>
  );
}


export default function AboutSection() {
  return (
    <section className="bg-white px-6 md:px-[52px] py-[72px]">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-16 items-start"
      >

        {/* Left — bio */}
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#AAAAAA] mb-4">
            About me
          </p>
          <h2 className="font-display text-[40px] font-bold text-[#111111] leading-[1.15] tracking-tight mb-7">
            Engineer by training,<br />
            <em className="font-display italic font-light text-terra">curious</em> by nature.
          </h2>
          <div className="text-[14px] font-light text-[#666666] leading-[1.85] space-y-[18px]">
            <p>
              I'm an MS CS student at Northeastern University's Khoury College in Seattle,
              originally from Mumbai. My work sits at the intersection of systems, machine
              learning, and product — I like building things that have both technical depth
              and clear utility.
            </p>
            <p>
              Outside code, I follow Formula 1 obsessively, which has shaped how I think
              about optimization, telemetry data, and building under constraints. I also
              volunteer at BAPS Charities, where I've served as Head Coordinator and AV
              Specialist since 2018.
            </p>
          </div>
        </div>

        {/* Right — two-group timeline */}
        <div className="flex flex-col gap-8">

          {/* Industry */}
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-terra">
                Industry
              </span>
              <span className="flex-1 h-px bg-terra/20" />
            </div>
            {industry.map((item, i) => (
              <SingleRow
                key={item.role}
                role={item.role}
                company={item.company}
                date={item.date}
                index={i}
                isLast={i === industry.length - 1}
              />
            ))}
          </div>

          {/* Academia & Volunteering */}
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#AAAAAA]">
                Academia &amp; Volunteering
              </span>
              <span className="flex-1 h-px bg-[#E5E0D8]" />
            </div>
            {other.map((item, i) => (
              <SingleRow
                key={item.role}
                role={item.role}
                company={item.company}
                date={item.date}
                index={i}
                isLast={i === other.length - 1}
              />
            ))}
          </div>

        </div>

      </motion.div>
    </section>
  );
}
