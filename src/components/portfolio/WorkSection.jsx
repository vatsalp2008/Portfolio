import React, { useState } from "react";
import { motion } from "framer-motion";

export default function WorkSection() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      title: "TheManager",
      company: "UWB HACKS 2026",
      year: "2026",
      description: "An AI-powered software factory that turns a product spec into a populated kanban, runs seven specialist agents to deliver each ticket, and shows the reasoning behind every decision for full auditability.",
      tags: ["TypeScript", "React", "Node.js", "Gemma 4", "PostgreSQL", "Tauri"],
      image: "./images/the-manager.png",
      github: "https://github.com/aditya-pandita/theManager",
      live: "https://devpost.com/software/themanager",
    },
    {
      title: "MoodMeals",
      company: "Emotion-Aware Meal PWA",
      year: "2026",
      description: "Emotion-aware meal planning PWA for college students. Uses Google Gemini 2.0 and Spoonacular to map psychological states to nutritional profiles, featuring grocery tracking and Google Calendar sync.",
      tags: ["Next.js 16", "React 19", "TypeScript", "Supabase", "Gemini 2.0", "PWA"],
      image: "./images/mood-meals.png",
      github: "https://github.com/rohanjoshi1399/MoodMeals",
      live: "https://mood-meals-rust.vercel.app",
    },
    {
      title: "F1 Race Predictions 2025",
      company: "Personal Project",
      year: "2025",
      description: "Machine learning model predicting Formula 1 race outcomes using FastF1 API data, historical results, and Gradient Boosting algorithms. Features real-time predictions for the 2025 F1 season.",
      tags: ["Python", "Machine Learning", "FastF1 API", "Gradient Boosting"],
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68fdae81f7836cad567112d4/299a839c1_ferrari_f1_2027-wallpaper-2880x1620.jpg",
      github: "https://github.com/vatsalp2008/f1-predictions-2025",
    },
    {
      title: "Seattle Transit Pathfinding System",
      company: "Northeastern University",
      year: "2025",
      description: "Intelligent pathfinding system using real King County Metro transit data with BFS, DFS, and A* algorithms. Achieved 45% search space reduction and 97% initialization time improvement.",
      tags: ["Python", "A* Algorithm", "Graph Theory", "Optimization"],
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68fdae81f7836cad567112d4/a018287f0_image.png",
      github: "https://github.com/vatsalp2008/seattle-transit-pathfinder",
    },
    {
      title: "Investment Prediction Platform",
      company: "Undergraduate Research",
      year: "2025",
      description: "Comprehensive ML platform for stock and commodity predictions. Achieved 98.8% accuracy combining LSTM networks and Random Forest algorithms.",
      tags: ["Python", "LSTM", "Random Forest", "TensorFlow"],
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68fdae81f7836cad567112d4/435df6d42_image.png",
      github: "https://github.com/vatsalp2008/Investment-Prediction",
    },
    {
      title: "Industrial Automation & Predictive Maintenance",
      company: "Kalini Industries",
      year: "2024",
      description: "Developed IoT-based predictive maintenance solutions for industrial equipment, reducing downtime through ML-powered analytics.",
      tags: ["IoT", "Predictive Maintenance", "Industrial Automation", "Python"],
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200&q=80",
      github: "https://github.com/vatsalp2008",
    },
    {
      title: "LLM-Powered Chess Agent",
      company: "Northeastern University",
      year: "2025",
      description: "Advanced chess agent powered by LLMs (Llama 3.2, Mistral) achieving 85.7% accuracy improvement through prompt engineering, retry logic, and agent workflow orchestration.",
      tags: ["Python", "Ollama", "LLMs", "Prompt Engineering", "Agentic AI"],
      image: "./images/chess-agent.jpg",
      github: "https://github.com/vatsalp2008",
    },
    {
      title: "F1 Analytics Dashboard",
      company: "Personal Project",
      year: "2025",
      description: "Full-stack F1 analytics platform with interactive dashboards for lap telemetry, driver comparisons, and race strategy analysis using the FastF1 API and real-time data pipelines.",
      tags: ["Python", "FastF1", "React", "Data Visualization", "REST API"],
      image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68fdae81f7836cad567112d4/299a839c1_ferrari_f1_2027-wallpaper-2880x1620.jpg",
      github: "https://github.com/vatsalp2008/f1-analytics-dashboard",
    },
  ];

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-xs uppercase tracking-widest text-gray-600 mb-4">Selected Work '25</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl">
            Showcasing academic and professional work in algorithms, machine learning, and system design.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
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
              {/* Safari Browser Window */}
              <div className="relative">
                {/* Browser Chrome */}
                <div className="bg-[#2a2a2a] rounded-t-xl border border-gray-800 border-b-0 px-4 py-3 flex items-center gap-2">
                  {/* Traffic Lights */}
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                    <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                  </div>

                  {/* URL Bar */}
                  <div className="flex-1 ml-12 mr-12">
                    <div className="bg-[#1a1a1a] border border-gray-800 rounded-md px-3 py-1.5 text-xs text-gray-500 text-center">
                      {project.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}.demo
                    </div>
                  </div>
                </div>

                {/* Browser Content - Clickable if GitHub link exists */}
                {project.live || project.github ? (
                  <a
                    href={project.live || project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative aspect-[16/10] overflow-hidden bg-[#0a0a0a] border border-gray-800 rounded-b-xl cursor-pointer"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`w-full h-full object-cover transition-all duration-700 ${hoveredProject === index ? "scale-105" : "scale-100"
                        }`}
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-br from-[#DC0000]/40 to-transparent mix-blend-multiply transition-opacity duration-500 ${hoveredProject === index ? "opacity-0" : "opacity-30"
                        }`}
                    />
                  </a>
                ) : (
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#0a0a0a] border border-gray-800 rounded-b-xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`w-full h-full object-cover transition-all duration-700 ${hoveredProject === index ? "scale-105" : "scale-100"
                        }`}
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-br from-[#DC0000]/40 to-transparent mix-blend-multiply transition-opacity duration-500 ${hoveredProject === index ? "opacity-0" : "opacity-30"
                        }`}
                    />
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div className="mt-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-1 group-hover:text-[#DC0000] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-2">
                      <p className="text-sm text-gray-400">
                        {project.company} · '{project.year.slice(-2)}
                      </p>
                      <div className="flex gap-3">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-gray-500 hover:text-[#DC0000] transition-colors"
                          >
                            GitHub ↗
                          </a>
                        )}
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-gray-500 hover:text-[#DC0000] transition-colors"
                          >
                            Live Demo ↗
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-[#2a2a2a] border border-gray-800 text-gray-500 hover:border-[#DC0000] hover:text-[#DC0000] transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="https://github.com/vatsalp2008"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-lg font-medium hover:text-[#DC0000] transition-colors duration-300"
          >
            View all projects on GitHub →
          </a>
        </motion.div>
      </div>
    </section>
  );
}