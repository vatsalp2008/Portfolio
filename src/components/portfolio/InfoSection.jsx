// import React from "react";
// import { motion } from "framer-motion";
// import { Flag, Brain, Rocket, Users, Zap } from "lucide-react";

// export default function InfoSection() {
//   return (
//     <section className="py-24 md:py-32 px-6 md:px-12 bg-[#1a1a1a]">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <p className="text-xs uppercase tracking-widest text-gray-600 mb-8">About Me</p>
//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 max-w-4xl leading-tight">
//             My journey through engineering, innovation, and precision.
//           </h2>
//         </motion.div>

//         {/* 1. The Starting Line */}
//         <div className="grid md:grid-cols-2 gap-16 items-start mt-20">
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <div className="relative aspect-[3/4] bg-gradient-to-br from-[#DC0000]/20 to-[#1a1a1a] border border-[#DC0000]/30 overflow-hidden">
//               {/* Traffic lights countdown visual */}
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <div className="space-y-6">
//                   <div className="flex justify-center gap-6">
//                     <div className="w-16 h-16 rounded-full bg-[#DC0000] animate-pulse" />
//                   </div>
//                   <div className="flex justify-center gap-6">
//                     <div className="w-16 h-16 rounded-full bg-[#DC0000]/70 animate-pulse delay-100" />
//                   </div>
//                   <div className="flex justify-center gap-6">
//                     <div className="w-16 h-16 rounded-full bg-[#DC0000]/40 animate-pulse delay-200" />
//                   </div>
//                 </div>
//               </div>
//               <div className="absolute bottom-8 left-8">
//                 <Flag className="w-12 h-12 text-[#DC0000]" />
//               </div>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="space-y-8"
//           >
//             <div className="flex items-center gap-4 mb-6">
//               <div className="w-12 h-[2px] bg-[#DC0000]" />
//               <span className="text-[#DC0000] font-bold uppercase tracking-wider text-sm">01</span>
//             </div>
//             <div>
//               <h3 className="text-3xl font-bold mb-6 text-[#F5F5F5]">
//                 🏁 The Starting Line — Curiosity in Motion
//               </h3>
//               <p className="text-gray-400 leading-relaxed">
//                 Every engineer has a first lap. Mine began with curiosity — the drive to take things
//                 apart, to understand what makes them move. Coding became my ignition point, algorithms my
//                 first race track.
//               </p>
//               <p className="text-gray-400 leading-relaxed mt-4">
//                 Each bug fixed, each idea tested — a small victory on the road to mastery.
//               </p>
//             </div>
//           </motion.div>
//         </div>

//         {/* 2. The Strategist */}
//         <div className="grid md:grid-cols-2 gap-16 items-start mt-32">
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="space-y-8 md:order-2"
//           >
//             <div className="flex items-center gap-4 mb-6">
//               <div className="w-12 h-[2px] bg-[#DC0000]" />
//               <span className="text-[#DC0000] font-bold uppercase tracking-wider text-sm">02</span>
//             </div>
//             <div>
//               <h3 className="text-3xl font-bold mb-6 text-[#F5F5F5]">
//                 🧠 The Strategist — Precision Meets Logic
//               </h3>
//               <p className="text-gray-400 leading-relaxed">
//                 As I learned to analyze data and craft smarter algorithms, I started seeing systems like
//                 race telemetry — every number telling a story.
//               </p>
//               <p className="text-gray-400 leading-relaxed mt-4">
//                 Machine learning became my control panel, where logic and optimization met intuition.
//               </p>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="md:order-1"
//           >
//             <div className="relative aspect-[3/4] bg-[#0a0a0a] border border-[#DC0000]/30 overflow-hidden">
//               {/* Dashboard/Telemetry visual */}
//               <div className="absolute inset-0 p-8">
//                 <div className="space-y-4">
//                   {[1, 2, 3, 4, 5].map((i) => (
//                     <div key={i} className="flex items-center gap-4">
//                       <div className="w-16 h-2 bg-[#DC0000]/30" />
//                       <div
//                         className="h-2 bg-gradient-to-r from-[#DC0000] to-transparent animate-pulse"
//                         style={{
//                           width: `${Math.random() * 60 + 40}%`,
//                           animationDelay: `${i * 0.2}s`,
//                         }}
//                       />
//                     </div>
//                   ))}
//                 </div>
//                 <div className="absolute top-8 right-8">
//                   <Brain className="w-12 h-12 text-[#DC0000]" />
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>

//         {/* 3. The Innovator */}
//         <div className="grid md:grid-cols-2 gap-16 items-start mt-32">
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <div className="relative aspect-[3/4] bg-[#0a0a0a] border border-[#DC0000]/30 overflow-hidden">
//               {/* Neural network/data lines visual */}
//               <div className="absolute inset-0">
//                 <svg className="w-full h-full" viewBox="0 0 400 600">
//                   {/* Neural network pattern */}
//                   <defs>
//                     <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
//                       <stop offset="0%" stopColor="#DC0000" stopOpacity="0.3" />
//                       <stop offset="100%" stopColor="#DC0000" stopOpacity="0" />
//                     </linearGradient>
//                   </defs>
//                   {[...Array(12)].map((_, i) => (
//                     <motion.path
//                       key={i}
//                       d={`M ${50 + i * 30} 0 Q ${200 + Math.sin(i) * 100} ${
//                         300 + Math.cos(i) * 100
//                       } ${50 + i * 30} 600`}
//                       stroke="url(#lineGradient)"
//                       strokeWidth="2"
//                       fill="none"
//                       initial={{ pathLength: 0 }}
//                       animate={{ pathLength: 1 }}
//                       transition={{
//                         duration: 2,
//                         repeat: Infinity,
//                         delay: i * 0.2,
//                         ease: "linear",
//                       }}
//                     />
//                   ))}
//                 </svg>
//                 <div className="absolute bottom-8 left-8">
//                   <Rocket className="w-12 h-12 text-[#DC0000]" />
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="space-y-8"
//           >
//             <div className="flex items-center gap-4 mb-6">
//               <div className="w-12 h-[2px] bg-[#DC0000]" />
//               <span className="text-[#DC0000] font-bold uppercase tracking-wider text-sm">03</span>
//             </div>
//             <div>
//               <h3 className="text-3xl font-bold mb-6 text-[#F5F5F5]">
//                 🚀 The Innovator — Building Speed with Purpose
//               </h3>
//               <p className="text-gray-400 leading-relaxed">
//                 Once I had traction, I began creating projects that mattered — from an Investment
//                 Prediction App using ML to an ERP system for a Clothing Brand.
//               </p>
//               <p className="text-gray-400 leading-relaxed mt-4">
//                 Each one pushed my limits, teaching me to blend data with design, and engineering with
//                 empathy.
//               </p>
//             </div>
//           </motion.div>
//         </div>

//         {/* 4. The Collaborator */}
//         <div className="grid md:grid-cols-2 gap-16 items-start mt-32">
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="space-y-8 md:order-2"
//           >
//             <div className="flex items-center gap-4 mb-6">
//               <div className="w-12 h-[2px] bg-[#DC0000]" />
//               <span className="text-[#DC0000] font-bold uppercase tracking-wider text-sm">04</span>
//             </div>
//             <div>
//               <h3 className="text-3xl font-bold mb-6 text-[#F5F5F5]">
//                 🧩 The Collaborator — Pit Crew Energy
//               </h3>
//               <p className="text-gray-400 leading-relaxed">
//                 No one wins a race alone. Organizing workshops, mentoring peers, and leading technical
//                 events taught me the power of teamwork.
//               </p>
//               <p className="text-gray-400 leading-relaxed mt-4">
//                 Like a pit crew, every role counts — every second, every decision, every insight.
//               </p>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="md:order-1"
//           >
//             <div className="relative aspect-[3/4] bg-gradient-to-br from-[#DC0000]/10 to-[#1a1a1a] border border-[#DC0000]/30 overflow-hidden">
//               {/* Pit crew/team visual */}
//               <div className="absolute inset-0 flex items-center justify-center p-8">
//                 <div className="grid grid-cols-3 gap-6">
//                   {[...Array(9)].map((_, i) => (
//                     <motion.div
//                       key={i}
//                       className="w-12 h-12 rounded-full bg-[#DC0000]/20 border-2 border-[#DC0000] flex items-center justify-center"
//                       animate={{
//                         scale: [1, 1.2, 1],
//                         opacity: [0.5, 1, 0.5],
//                       }}
//                       transition={{
//                         duration: 2,
//                         repeat: Infinity,
//                         delay: i * 0.2,
//                       }}
//                     >
//                       <Users className="w-6 h-6 text-[#DC0000]" />
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>

//         {/* 5. The Vision Ahead */}
//         <div className="grid md:grid-cols-2 gap-16 items-start mt-32">
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <div className="relative aspect-[3/4] bg-[#0a0a0a] border border-[#DC0000]/30 overflow-hidden">
//               {/* Futuristic racetrack visual */}
//               <div className="absolute inset-0">
//                 <motion.div
//                   className="absolute inset-0"
//                   style={{
//                     background: `repeating-linear-gradient(
//                       90deg,
//                       transparent,
//                       transparent 50px,
//                       rgba(220, 0, 0, 0.1) 50px,
//                       rgba(220, 0, 0, 0.1) 100px
//                     )`,
//                   }}
//                   animate={{
//                     backgroundPosition: ["0px 0px", "100px 0px"],
//                   }}
//                   transition={{
//                     duration: 2,
//                     repeat: Infinity,
//                     ease: "linear",
//                   }}
//                 />
//                 <motion.div
//                   className="absolute top-1/2 left-0 right-0 h-1 bg-[#DC0000]"
//                   animate={{
//                     scaleX: [0, 1, 0],
//                     x: ["-100%", "0%", "100%"],
//                   }}
//                   transition={{
//                     duration: 3,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   }}
//                 />
//                 <div className="absolute bottom-8 right-8">
//                   <Zap className="w-12 h-12 text-[#DC0000]" />
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="space-y-8"
//           >
//             <div className="flex items-center gap-4 mb-6">
//               <div className="w-12 h-[2px] bg-[#DC0000]" />
//               <span className="text-[#DC0000] font-bold uppercase tracking-wider text-sm">05</span>
//             </div>
//             <div>
//               <h3 className="text-3xl font-bold mb-6 text-[#F5F5F5]">
//                 🏎️ The Vision Ahead — Designing the Next Lap
//               </h3>
//               <p className="text-gray-400 leading-relaxed">
//                 I see myself racing toward innovation — building intelligent systems that adapt, learn,
//                 and evolve. The track ahead is filled with turns I can't yet see, but that's what makes
//                 it exciting.
//               </p>
//               <p className="text-gray-400 leading-relaxed mt-4">
//                 Every lap is a chance to go faster, think sharper, and build smarter.
//               </p>
//               <p className="text-gray-400 leading-relaxed mt-8 font-medium">
//                 Thanks for stopping by!
//               </p>
//               <div className="mt-8">
//                 <div className="text-4xl font-black text-[#DC0000] tracking-wider" style={{ fontFamily: 'cursive' }}>
//                   Vatsal Patel
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }