import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Sparkles } from "lucide-react";

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with real-time inventory management, payment processing, and analytics dashboard.",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      github: "#",
      demo: "#",
      featured: true,
    },
    {
      title: "AI-Powered Chatbot",
      description:
        "Intelligent conversational AI system using NLP and machine learning to provide customer support automation.",
      tech: ["Python", "TensorFlow", "FastAPI", "React", "Docker"],
      github: "#",
      demo: "#",
      featured: true,
    },
    {
      title: "Real-Time Analytics Dashboard",
      description:
        "Interactive data visualization platform processing millions of events per day with sub-second latency.",
      tech: ["Next.js", "GraphQL", "Redis", "D3.js", "WebSockets"],
      github: "#",
      demo: "#",
      featured: false,
    },
    {
      title: "Mobile Fitness Tracker",
      description:
        "Cross-platform mobile app for fitness tracking with social features, workout plans, and progress analytics.",
      tech: ["React Native", "Firebase", "Node.js", "MongoDB"],
      github: "#",
      demo: "#",
      featured: false,
    },
    {
      title: "DevOps Automation Suite",
      description:
        "Comprehensive CI/CD pipeline automation toolkit for containerized applications with monitoring and rollback.",
      tech: ["Kubernetes", "Docker", "Python", "GitHub Actions", "Terraform"],
      github: "#",
      demo: "#",
      featured: false,
    },
    {
      title: "Blockchain Voting System",
      description:
        "Decentralized voting platform ensuring transparency and security using blockchain technology and smart contracts.",
      tech: ["Solidity", "Ethereum", "Web3.js", "React", "IPFS"],
      github: "#",
      demo: "#",
      featured: false,
    },
  ];

  return (
    <section className="relative min-h-screen py-32 px-6 bg-[#0a0a0a]">
      {/* Background Grid */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(#DC0000 1px, transparent 1px), linear-gradient(90deg, #DC0000 1px, transparent 1px)`,
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
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
              Featured Work
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-[#F5F5F5]">
            Project Showcase
          </h2>
          <p className="text-xl text-[#A0A0A0] mt-4">
            High-performance solutions engineered to perfection
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative"
            >
              {/* Project Card */}
              <div className="relative h-full bg-[#121212] border border-[#DC0000]/20 rounded-sm overflow-hidden transition-all duration-500 hover:border-[#DC0000] hover:shadow-2xl hover:shadow-[#DC0000]/20">
                {/* Racing Border Animation */}
                {hoveredProject === index && (
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <motion.div
                      className="absolute top-0 left-0 right-0 h-[2px] bg-[#DC0000]"
                      initial={{ scaleX: 0, originX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div
                      className="absolute top-0 right-0 bottom-0 w-[2px] bg-[#DC0000]"
                      initial={{ scaleY: 0, originY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                    />
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#DC0000]"
                      initial={{ scaleX: 0, originX: 1 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.3, delay: 0.6 }}
                    />
                    <motion.div
                      className="absolute top-0 left-0 bottom-0 w-[2px] bg-[#DC0000]"
                      initial={{ scaleY: 0, originY: 1 }}
                      animate={{ scaleY: 1 }}
                      transition={{ duration: 0.3, delay: 0.9 }}
                    />
                  </motion.div>
                )}

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10 flex items-center gap-2 px-3 py-1 bg-[#DC0000] rounded-sm">
                    <Sparkles className="w-3 h-3 text-white" />
                    <span className="text-xs uppercase tracking-wider text-white font-bold">
                      Featured
                    </span>
                  </div>
                )}

                {/* Content */}
                <div className="p-6 h-full flex flex-col">
                  <h3 className="text-xl font-black text-[#F5F5F5] mb-3 group-hover:text-[#DC0000] transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-[#A0A0A0] text-sm mb-6 leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-[#1a1a1a] text-[#A0A0A0] text-xs rounded-sm border border-[#DC0000]/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 pt-4 border-t border-[#DC0000]/10">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-[#C0C0C0] hover:text-[#DC0000] transition-colors duration-300"
                    >
                      <Github className="w-4 h-4" />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center gap-2 text-[#C0C0C0] hover:text-[#DC0000] transition-colors duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm font-medium">Live Demo</span>
                    </a>
                  </div>
                </div>

                {/* 3D Tilt Effect Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#DC0000]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    transform: hoveredProject === index ? "rotateX(2deg) rotateY(2deg)" : "none",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button className="group relative px-8 py-4 border-2 border-[#DC0000] text-[#DC0000] font-bold uppercase tracking-wider overflow-hidden transition-all duration-300 hover:bg-[#DC0000] hover:text-white">
            <span className="relative z-10">View All Projects on GitHub</span>
            <Github className="inline-block w-5 h-5 ml-2 relative z-10" />
            <motion.div
              className="absolute inset-0 bg-[#DC0000]"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </motion.div>
      </div>
    </section>
  );
}