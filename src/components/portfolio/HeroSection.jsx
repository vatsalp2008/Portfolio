import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Hyperspeed from "../Hyperspeed/Hyperspeed";

export default function HeroSection({ scrollToSection }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 md:px-12">
      {/* Hyperspeed Background */}
      <div className="absolute inset-0">
        <Hyperspeed
          effectOptions={{
            onSpeedUp: () => { },
            onSlowDown: () => { },
            distortion: 'turbulentDistortion',
            length: 400,
            roadWidth: 10,
            islandWidth: 2,
            lanesPerRoad: 4,
            fov: 90,
            fovSpeedUp: 150,
            speedUp: 2,
            carLightsFade: 0.4,
            totalSideLightSticks: 20,
            lightPairsPerRoadWay: 40,
            shoulderLinesWidthPercentage: 0.05,
            brokenLinesWidthPercentage: 0.1,
            brokenLinesLengthPercentage: 0.5,
            lightStickWidth: [0.12, 0.5],
            lightStickHeight: [1.3, 1.7],
            movingAwaySpeed: [60, 80],
            movingCloserSpeed: [-120, -160],
            carLightsLength: [400 * 0.03, 400 * 0.2],
            carLightsRadius: [0.05, 0.14],
            carWidthPercentage: [0.3, 0.5],
            carShiftX: [-0.8, 0.8],
            carFloorSeparation: [0, 5],
            colors: {
              roadColor: 0x080808,
              islandColor: 0x0a0a0a,
              background: 0x000000,
              shoulderLines: 0xdc0000,
              brokenLines: 0x666666,
              leftCars: [0xdc0000, 0xff0000, 0xb91c1c],
              rightCars: [0xdc0000, 0xff0000, 0xb91c1c],
              sticks: 0xdc0000
            }
          }}
        />
        <div className="absolute inset-0 bg-[#0a0a0a]/30" /> {/* Overlay for better text readability */}
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
          className="flex flex-wrap justify-center gap-4 text-sm text-gray-300"
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