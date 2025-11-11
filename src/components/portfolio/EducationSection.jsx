import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, Star } from "lucide-react";

export default function EducationSection() {
  const education = [
    {
      degree: "Master of Science",
      field: "Computer Science",
      institution: "Northeastern University",
      location: "Seattle, WA, USA",
      period: "2025 - 2027",
      gpa: "4.0/4.0",
      highlights: [
        "Specialization in Machine Learning and AI",
        "Building enterprise solutions in interdisciplinary teams",
        "Bridging theory and practice through semester projects",
      ],
      courses: [
        "Advanced Algorithms Analysis",
        "Machine Learning",
        "Natural Language Processing",
        "Computer Vision",
        "Reinforcement Learning",
      ],
    },
    {
      degree: "Bachelor of Engineering",
      field: "Computer Engineering",
      institution: "Thakur College Of Engineering and Technology",
      location: "Mumbai, India",
      period: "2021 - 2025",
      gpa: "3.2/4.0",
      highlights: [
        "Contributed to CSI and RC-TCET technical communities",
        "Led technical workshops and coding bootcamps as Technical Head",
        "Focus area: Data Science and Machine Learning",
      ],
      courses: [
        "Data Structures",
        "Design and Analysis of Algorithms",
        "Operating Systems",
        "Data Warehouse Management",
        "Database Systems",
        "Data Science and Analytics",
      ],
    },
  ];

  const certifications = [
    "AWS Certified Solutions Architect",
    "Google Cloud Professional Developer",
    "Certified Kubernetes Administrator",
    "MongoDB Certified Developer",
  ];

  return (
    <section className="relative min-h-screen py-32 px-6">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#DC0000] blur-[150px] rounded-full" />
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
              Academic Excellence
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-[#F5F5F5]">
            Education & Credentials
          </h2>
        </motion.div>

        {/* Education Cards */}
        <div className="space-y-8 mb-16">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative bg-[#1a1a1a] border border-[#DC0000]/20 rounded-sm overflow-hidden hover:border-[#DC0000]/50 transition-all duration-500"
            >
              {/* Top Accent Strip */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#DC0000] via-[#C0C0C0] to-[#B8860B]" />

              <div className="p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start gap-4">
                    <div className="p-4 bg-[#DC0000]/10 rounded-sm">
                      <GraduationCap className="w-8 h-8 text-[#DC0000]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-[#F5F5F5] mb-1">
                        {edu.degree}
                      </h3>
                      <p className="text-xl text-[#DC0000] font-bold mb-2">{edu.field}</p>
                      <p className="text-[#A0A0A0]">{edu.institution}</p>
                      <p className="text-sm text-[#A0A0A0]">{edu.location}</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="px-4 py-2 bg-[#DC0000]/10 border border-[#DC0000]/30 rounded-sm mb-2">
                      <span className="text-[#DC0000] font-bold">{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-2 justify-end text-[#C0C0C0]">
                      <Star className="w-4 h-4" />
                      <span className="font-bold">GPA: {edu.gpa}</span>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Highlights */}
                  <div>
                    <h4 className="flex items-center gap-2 text-[#C0C0C0] font-bold mb-4 uppercase tracking-wider text-sm">
                      <Award className="w-4 h-4 text-[#DC0000]" />
                      Highlights
                    </h4>
                    <ul className="space-y-2">
                      {edu.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-[#A0A0A0]">
                          <span className="w-1.5 h-1.5 bg-[#DC0000] rounded-full mt-2 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Relevant Coursework */}
                  <div>
                    <h4 className="flex items-center gap-2 text-[#C0C0C0] font-bold mb-4 uppercase tracking-wider text-sm">
                      <BookOpen className="w-4 h-4 text-[#DC0000]" />
                      Relevant Coursework
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-[#121212] text-[#A0A0A0] text-xs border border-[#DC0000]/10 rounded-sm"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#1a1a1a] to-[#121212] border border-[#DC0000]/20 rounded-sm p-8"
        >
          <h3 className="text-2xl font-black text-[#F5F5F5] mb-6 flex items-center gap-3">
            <div className="p-2 bg-[#DC0000]/10 rounded-sm">
              <Award className="w-6 h-6 text-[#DC0000]" />
            </div>
            Professional Certifications
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 p-4 bg-[#121212] border border-[#DC0000]/10 rounded-sm hover:border-[#DC0000]/30 transition-colors duration-300"
              >
                <div className="w-2 h-2 bg-[#DC0000] rounded-full flex-shrink-0" />
                <span className="text-[#A0A0A0] font-medium">{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}