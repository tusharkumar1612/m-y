"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Check,
  Gift,
  Percent,
  Users,
  Activity,
  Target,
  Zap,
  Snowflake,
  Flame,
} from "lucide-react";

const benefits = [
  {
    icon: <Users className="w-5 h-5" />,
    text: "Personal training & group fitness classes (Zumba, CrossFit, Power Yoga, HIIT)",
  },
  {
    icon: <Activity className="w-5 h-5" />,
    text: "Steam bath, ice bath, recovery zone for complete wellness",
  },
  {
    icon: <Target className="w-5 h-5" />,
    text: "Weight loss, muscle building, body toning programs",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    text: "Heavy iron, premium equipment & world-class facilities",
  },
];

export default function OfferSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="offer" className="relative py-24 overflow-hidden bg-zinc-950">
      {/* Background patterns */}
      <div className="absolute inset-0 gym-stripes" />
      <div className="absolute inset-0 gym-texture" />
      
      {/* Accent glows */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-red-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-700 mb-6">
            <Snowflake className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-black text-zinc-300 tracking-wider uppercase">Winter Special</span>
            <Flame className="w-4 h-4 text-red-500" />
          </span>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 uppercase tracking-tight"
            style={{ fontFamily: "var(--font-bebas)" }}
          >
            Exclusive <span className="gradient-text">Winter Deal</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Transform your body this winter with our unbeatable offer.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Offer cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Free pass card */}
            <div className="p-6 rounded-xl bg-zinc-900 border-2 border-red-500/30 hover:border-red-500/60 transition-colors group">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-red-600 to-orange-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Gift className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tight" style={{ fontFamily: "var(--font-oswald)" }}>
                    1 Day Free Pass
                  </h3>
                  <p className="text-zinc-400">
                    Experience our gym absolutely free. No strings attached!
                  </p>
                </div>
              </div>
            </div>

            {/* Discount card */}
            <div className="p-6 rounded-xl bg-zinc-900 border-2 border-orange-500/30 hover:border-orange-500/60 transition-colors group">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-orange-500 to-yellow-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Percent className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tight" style={{ fontFamily: "var(--font-oswald)" }}>
                    30% Winter Discount
                  </h3>
                  <p className="text-zinc-400">
                    Massive savings on all membership plans. Limited time only!
                  </p>
                </div>
              </div>
            </div>

            {/* Countdown timer */}
            <div className="p-6 rounded-xl bg-zinc-900 border border-zinc-800">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                <span className="text-sm font-black text-red-400 tracking-wider uppercase">Offer Ends Soon</span>
              </div>
              <div className="flex gap-3">
                {[
                  { value: "07", label: "DAYS" },
                  { value: "23", label: "HRS" },
                  { value: "45", label: "MIN" },
                  { value: "12", label: "SEC" },
                ].map((item, index) => (
                  <div key={index} className="flex-1 text-center">
                    <div className="py-3 rounded-lg bg-zinc-800 border border-zinc-700 mb-1">
                      <span className="text-2xl font-black gradient-text" style={{ fontFamily: "var(--font-bebas)" }}>
                        {item.value}
                      </span>
                    </div>
                    <span className="text-[10px] text-zinc-500 font-bold tracking-widest">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Benefits list */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:pl-8"
          >
            <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-tight" style={{ fontFamily: "var(--font-oswald)" }}>
              What You Get:
            </h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-red-500/30 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center text-red-400 group-hover:bg-red-500/20 transition-colors">
                    {benefit.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-zinc-300 leading-relaxed">{benefit.text}</p>
                  </div>
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.button
              onClick={() => document.querySelector("#form")?.scrollIntoView({ behavior: "smooth" })}
              className="mt-8 w-full py-4 bg-gradient-to-r from-red-600 to-orange-500 rounded-xl text-white font-black text-lg fire-glow hover:scale-[1.02] transition-transform uppercase tracking-wide flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Flame className="w-5 h-5" />
              Claim Your Free Pass Now
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
