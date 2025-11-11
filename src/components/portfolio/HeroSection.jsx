import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function HeroSection({ scrollToSection }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 md:px-12">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(#B91C1C 1px, transparent 1px), linear-gradient(90deg, #B91C1C 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight mb-3 tracking-tight">
            Tuning software like an
            <br />
            <span className="text-[#B91C1C]">F1 pit crew</span> —
            <br />
            <span className="text-3xl md:text-4xl lg:text-4xl">faster, leaner, smarter.</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl text-[#A0A0A0] mb-4 max-w-3xl mx-auto leading-relaxed mt-6"
        >
          Building intelligent, high-performance systems through data, algorithms, and design.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base md:text-lg text-[#A0A0A0] mb-16 max-w-2xl mx-auto"
        >
          MS Computer Science at Northeastern University.
          <br />
          Based in Seattle. Formula 1 enthusiast.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4 text-sm text-gray-500"
        >
          {["React", "Python", "Machine Learning", "System Design", "AWS", "TypeScript"].map(
            (tech, i) => (
              <span
                key={tech}
                className="px-4 py-2 border border-gray-800 hover:border-[#B91C1C] hover:text-[#B91C1C] transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            )
          )}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <button
          onClick={() => scrollToSection("work")}
          className="flex flex-col items-center gap-2 text-gray-600 hover:text-[#B91C1C] transition-colors duration-300"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </button>
      </motion.div>
    </section>
  );
}