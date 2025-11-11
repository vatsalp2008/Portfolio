import React from "react";
import { motion } from "framer-motion";
import { Code, Trophy, Heart } from "lucide-react";

export default function AboutSection() {
  const stats = [
    { icon: Code, label: "Projects Completed", value: "25+" },
    { icon: Trophy, label: "Awards & Recognition", value: "8" },
    { icon: Heart, label: "Years of Passion", value: "6+" },
  ];

  return (
    <section className="relative min-h-screen py-32 px-6">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#DC0000] blur-[150px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#C0C0C0] blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[2px] bg-gradient-to-r from-[#DC0000] to-transparent" />
            <span className="text-sm uppercase tracking-[0.3em] text-[#DC0000] font-bold">
              About Me
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-[#F5F5F5]">
            Engineering Excellence
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Your Professional Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square rounded-sm overflow-hidden border border-[#DC0000]/20 bg-gradient-to-br from-[#1a1a1a] to-[#121212]">
              {/* Your Professional Photo */}
              <img 
                src="./images/vatsal-profile.jpg" 
                alt="Vatsal Patel"
                className="w-full h-full object-cover"
              />
              
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-[#DC0000]" />
              <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-[#C0C0C0]" />
              <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-[#C0C0C0]" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-[#DC0000]" />
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-6 -right-6 bg-[#DC0000] p-6 rounded-sm shadow-2xl"
            >
              <div className="text-center">
                <div className="text-3xl font-black text-white">MS</div>
                <div className="text-xs uppercase tracking-wider text-white/80">
                  Computer Science
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-[#A0A0A0] leading-relaxed">
              As a <span className="text-[#DC0000] font-semibold">Computer Engineer</span> pursuing
              a Master of Science in Computer Science at Northeastern University, I combine
              technical precision with creative problem-solving to build cutting-edge solutions.
            </p>

            <p className="text-lg text-[#A0A0A0] leading-relaxed">
              My passion extends beyond code—I'm a dedicated{" "}
              <span className="text-[#DC0000] font-semibold">car enthusiast</span> and Formula 1
              fan, drawing inspiration from the precision engineering and high-performance
              optimization of motorsport.
            </p>

            <p className="text-lg text-[#A0A0A0] leading-relaxed">
              I specialize in building scalable applications, implementing innovative algorithms,
              and delivering elegant solutions to complex technical challenges.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <stat.icon className="w-8 h-8 text-[#DC0000] mx-auto mb-2" />
                  <div className="text-2xl font-black text-[#F5F5F5]">{stat.value}</div>
                  <div className="text-xs uppercase tracking-wider text-[#A0A0A0] mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
