"use client";

import { motion } from "framer-motion";
import { ChevronDown, Flame, Zap } from "lucide-react";
import dynamic from "next/dynamic";

const Scene3D = dynamic(() => import("./Scene3D"), { ssr: false });

export default function Hero() {
  const scrollToForm = () => {
    const element = document.querySelector("#form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Dark gym background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-black" />
      
      {/* Gym texture patterns */}
      <div className="absolute inset-0 gym-stripes" />
      <div className="absolute inset-0 gym-texture" />
      <div className="absolute inset-0 gym-floor opacity-50" />
      
      {/* Red accent glow spots */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-red-600/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-orange-500/15 rounded-full blur-[120px]" />
      
      {/* 3D Background */}
      <Scene3D />

      {/* Bottom gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

      {/* Diagonal accent lines */}
      <div className="absolute top-20 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500/30 to-transparent transform -rotate-3" />
      <div className="absolute bottom-40 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-orange-500/20 to-transparent transform rotate-2" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Power badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-red-500/10 border border-red-500/30 mb-8"
        >
          <Flame className="w-4 h-4 text-red-500 animate-pulse" />
          <span className="text-sm font-bold text-red-400 tracking-wider uppercase">
            Unleash Your Power
          </span>
          <Zap className="w-4 h-4 text-orange-400" />
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-none mb-6 tracking-tight"
          style={{ fontFamily: "var(--font-bebas)" }}
        >
          <span className="block text-white drop-shadow-[0_0_30px_rgba(239,68,68,0.3)]">
            BUILD YOUR
          </span>
          <span className="block gradient-text mt-1 drop-shadow-[0_0_40px_rgba(239,68,68,0.4)]">
            STRONGEST SELF
          </span>
        </motion.h1>

        {/* Sub-text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          <span className="text-white font-semibold">M&Y Fitness Club</span> — 
          Jaipur&apos;s most powerful gym with elite trainers, heavy iron, and results that speak.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            onClick={scrollToForm}
            className="group px-10 py-4 bg-gradient-to-r from-red-600 to-orange-500 rounded-lg text-white font-bold text-lg tracking-wide fire-glow uppercase"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="flex items-center gap-2">
              <Flame className="w-5 h-5" />
              Start Training
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
          </motion.button>

          <motion.a
            href="#offer"
            className="px-10 py-4 rounded-lg border-2 border-zinc-700 text-white font-bold hover:border-red-500 hover:text-red-400 transition-all duration-300 uppercase tracking-wide"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Winter Offer
          </motion.a>
        </motion.div>

        {/* Stats - Gym achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 grid grid-cols-3 gap-8 max-w-xl mx-auto"
        >
          {[
            { value: "500+", label: "MEMBERS" },
            { value: "15+", label: "TRAINERS" },
            { value: "50+", label: "CLASSES" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl sm:text-5xl font-black gradient-text" style={{ fontFamily: "var(--font-bebas)" }}>
                {stat.value}
              </div>
              <div className="text-xs text-zinc-500 font-bold tracking-widest mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => document.querySelector("#offer")?.scrollIntoView({ behavior: "smooth" })}
        >
          <span className="text-xs text-zinc-600 tracking-widest font-bold">SCROLL</span>
          <ChevronDown className="w-5 h-5 text-red-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
