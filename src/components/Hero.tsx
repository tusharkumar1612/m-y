"use client";

import { motion } from "framer-motion";
import { ChevronDown, Play, Star } from "lucide-react";
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Subtle background patterns */}
      <div className="absolute inset-0 hero-pattern-light" />
      <div className="absolute inset-0 grid-pattern-light" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-orange-100 rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-amber-100 rounded-full blur-3xl opacity-40" />
      
      {/* 3D Background */}
      <Scene3D />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100 mb-8"
        >
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="text-sm font-medium text-gray-700">
            Rated #1 Gym in Vaishali Nagar
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-none mb-6"
          style={{ fontFamily: "var(--font-bebas)" }}
        >
          <span className="block text-gray-900">Transform Your</span>
          <span className="block gradient-text">Body & Mind</span>
        </motion.h1>

        {/* Sub-text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Join <span className="text-gray-900 font-semibold">M&Y Fitness Club</span> — 
          Jaipur&apos;s premier fitness destination with expert trainers and world-class facilities.
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
            className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full text-white font-semibold text-lg btn-glow flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Start Free Trial</span>
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.button>

          <motion.button
            className="px-8 py-4 rounded-full border-2 border-gray-200 text-gray-700 font-semibold flex items-center gap-2 hover:border-orange-400 hover:text-orange-600 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Play className="w-5 h-5" />
            <span>Watch Video</span>
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto"
        >
          {[
            { value: "500+", label: "Members" },
            { value: "15+", label: "Trainers" },
            { value: "50+", label: "Classes" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl font-black gradient-text" style={{ fontFamily: "var(--font-bebas)" }}>
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 font-medium mt-1">{stat.label}</div>
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
          <span className="text-xs text-gray-400 tracking-widest font-medium">SCROLL</span>
          <ChevronDown className="w-5 h-5 text-orange-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
