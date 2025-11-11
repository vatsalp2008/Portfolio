import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      company: "Kalini Industries",
      role: "Software Development Intern",
      period: "Jan. 2024 - April 2024",
      location: "Mumbai, India",
      description: "Developed production software modules and integrated ML models into existing applications.",
      achievements: [
        "Developed predictive maintenance system using Random Forest and Logistic Regression achieving 85% accuracy, reducing equipment downtime by 20% and saving $50K quarterly",
        "Built full-stack monitoring dashboard with React.js frontend and Flask REST API backend, processing real-time sensor data for 5 production lines with sub-second latency",
        "Automated 8 manual workflows using Python scripts and cron jobs, integrating with Slack API for notifications and saving 3.2 hours daily for operations team",
      ],
      tech: ["Python", "JavaScript", "Machine Learning", "Data Pipelines"],
    },
  ];

  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12 bg-[#1a1a1a]">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-1 h-1/2 bg-gradient-to-b from-transparent via-[#DC0000] to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[2px] bg-gradient-to-r from-[#DC0000] to-transparent" />
            <span className="text-sm uppercase tracking-[0.3em] text-[#DC0000] font-bold">
              Professional Journey
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-[#F5F5F5]">
            Experience
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#DC0000] via-[#C0C0C0] to-[#DC0000]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-24"
              >
                {/* Timeline Node */}
                <motion.div
                  className="absolute left-4 top-8 w-8 h-8 rounded-full border-4 border-[#DC0000] bg-[#121212] z-10"
                  whileHover={{ scale: 1.2, borderColor: "#FF4444" }}
                >
                  <div className="absolute inset-0 rounded-full bg-[#DC0000] animate-ping opacity-20" />
                </motion.div>

                {/* Content Card */}
                <motion.div
                  className="bg-[#1a1a1a] border border-[#DC0000]/20 rounded-sm p-8 overflow-hidden relative"
                  whileHover={{ borderColor: "rgba(220, 0, 0, 0.5)" }}
                >
                  {/* Racing Border Animation */}
                  <motion.div
                    className="absolute inset-0 border-2 border-[#DC0000] rounded-sm opacity-0 hover:opacity-100 transition-opacity duration-300"
                    initial={{ clipPath: "inset(0 100% 100% 0)" }}
                    whileHover={{
                      clipPath: [
                        "inset(0 100% 100% 0)",
                        "inset(0 0 100% 0)",
                        "inset(0 0 0 0)",
                        "inset(0 0 0 100%)",
                        "inset(100% 0 0 100%)",
                        "inset(100% 0 0 0)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />

                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-black text-[#F5F5F5] mb-2">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-[#DC0000] font-bold">
                        <Briefcase className="w-4 h-4" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                  </div>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-6 mb-6 text-sm text-[#A0A0A0]">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-[#A0A0A0] mb-6">{exp.description}</p>

                  {/* Achievements */}
                  <div className="pt-6 border-t border-[#DC0000]/20">
                    <h4 className="text-[#C0C0C0] font-bold mb-4 uppercase tracking-wider text-sm">
                      Key Achievements
                    </h4>
                    <ul className="space-y-3 mb-6">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3 text-[#A0A0A0]">
                          <span className="text-[#DC0000] mt-1.5">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-[#DC0000]/10 text-[#DC0000] text-xs uppercase tracking-wider rounded-sm border border-[#DC0000]/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}