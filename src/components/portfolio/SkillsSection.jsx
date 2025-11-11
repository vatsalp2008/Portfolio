import React, { useState } from "react";
import { motion } from "framer-motion";
import { Code2, Database, Cloud, Wrench, Brain, Globe } from "lucide-react";

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("programming");

  const skillCategories = {
    programming: {
      title: "Programming Languages",
      icon: Code2,
      skills: ["Python", "Java", "JavaScript", "C++", "C", "SQL", "TypeScript", "R", "MATLAB"],
    },
    web: {
      title: "Web Development",
      icon: Globe,
      skills: [
        "HTML/CSS",
        "Angular",
        "React",
        "Node.js",
        "jQuery",
        "Bootstrap",
        "REST APIs",
        "JSON",
        "Web API",
        "WebSocket",
      ],
    },
    database: {
      title: "Databases",
      icon: Database,
      skills: ["MySQL", "PostgreSQL", "MongoDB", "SQL Server", "Oracle", "Redis"],
    },
    aiml: {
      title: "AI/ML & Data Science",
      icon: Brain,
      skills: [
        "TensorFlow",
        "PyTorch",
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "Keras",
        "LSTM",
        "Random Forest",
        "XGBoost",
        "Neural Networks",
      ],
    },
    cloud: {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: ["AWS (EC2, S3, Lambda)", "Docker", "Kubernetes", "Git/GitHub", "CI/CD", "Jenkins"],
    },
    frameworks: {
      title: "Frameworks & Tools",
      icon: Wrench,
      skills: [
        "Spring Boot",
        "Flask",
        "Django",
        "Express.js",
        "Selenium",
        "Matplotlib",
        "Plotly",
      ],
    },
  };

  const currentSkills = skillCategories[activeCategory].skills;
  const CurrentIcon = skillCategories[activeCategory].icon;

  // Split skills into 2 rows of 5
  const row1 = currentSkills.slice(0, 5);
  const row2 = currentSkills.slice(5, 10);

  return (
    <section className="relative py-24 md:py-32 px-6 md:px-12 bg-[#1a1a1a] overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Vertical "Skills" Label */}
        

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-[#DC0000] mb-6">What I Do</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Building intelligent, high-performance systems through data, algorithms, and design.
            <br />
            MS Computer Science at Northeastern University. Based in Seattle.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(skillCategories).map(([key, category]) => {
            const Icon = category.icon;
            return (
              <motion.button
                key={key}
                onClick={() => setActiveCategory(key)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-6 py-3 border-2 transition-all duration-300 ${
                  activeCategory === key
                    ? "bg-[#DC0000] border-[#DC0000] text-white"
                    : "bg-[#0a0a0a] border-gray-800 text-gray-400 hover:border-[#DC0000]"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-bold text-sm uppercase tracking-wider">{category.title}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Skills Display - 2 Rows x 5 Columns */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#0a0a0a] border-2 border-[#DC0000]/30 p-12 relative overflow-hidden"
        >
          {/* Racing stripe at top */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-[#DC0000] to-transparent"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />

          {/* Category Header with Icon */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <CurrentIcon className="w-12 h-12 text-[#DC0000]" />
            <h3 className="text-3xl font-black text-[#F5F5F5] uppercase tracking-wider">
              {skillCategories[activeCategory].title}
            </h3>
          </div>

          {/* Row 1 */}
          <div className="grid grid-cols-5 gap-6 mb-6">
            {row1.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative bg-[#1a1a1a] border-2 border-gray-800 hover:border-[#DC0000] p-6 flex items-center justify-center transition-all duration-300 cursor-default"
              >
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-3 h-3 bg-[#DC0000] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#DC0000] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <span className="text-center text-sm md:text-base font-bold text-gray-400 group-hover:text-[#DC0000] transition-colors duration-300 uppercase tracking-wider">
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-5 gap-6">
            {row2.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative bg-[#1a1a1a] border-2 border-gray-800 hover:border-[#DC0000] p-6 flex items-center justify-center transition-all duration-300 cursor-default"
              >
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-3 h-3 bg-[#DC0000] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#DC0000] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <span className="text-center text-sm md:text-base font-bold text-gray-400 group-hover:text-[#DC0000] transition-colors duration-300 uppercase tracking-wider">
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Racing stripe at bottom */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-[#DC0000] to-transparent"
            animate={{ x: ["100%", "-100%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 text-sm uppercase tracking-wider">
            Click on a category to explore different skill sets
          </p>
        </motion.div>
      </div>
    </section>
  );
}