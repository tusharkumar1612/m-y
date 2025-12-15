"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { X, Snowflake, Gift, Flame, ArrowRight, Dumbbell } from "lucide-react";

export default function WinterOfferModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const scrollToForm = () => {
    setIsOpen(false);
    setTimeout(() => {
      document.querySelector("#form")?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="relative w-full max-w-lg pointer-events-auto">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 text-3xl">❄️</div>
              <div className="absolute -top-4 -right-4 text-2xl" style={{ animationDelay: "0.3s" }}>🔥</div>
              <div className="absolute -bottom-4 -left-4 text-2xl">💪</div>
              <div className="absolute -bottom-6 -right-6 text-3xl">❄️</div>

              {/* Modal content */}
              <div className="relative overflow-hidden rounded-2xl border-4 border-red-500 breathing-glow bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950">
                {/* Gym pattern overlay */}
                <div className="absolute inset-0 gym-stripes opacity-30" />
                
                {/* Close button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors border border-zinc-600"
                >
                  <X className="w-5 h-5 text-white" />
                </button>

                {/* Red accent glow */}
                <div className="absolute top-0 left-1/3 w-40 h-40 bg-red-600/30 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/3 w-40 h-40 bg-orange-500/20 rounded-full blur-3xl" />

                {/* Content */}
                <div className="relative p-8 text-center">
                  {/* Badge */}
                  <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800 border border-zinc-600 mb-6"
                  >
                    <Snowflake className="w-4 h-4 text-blue-400 animate-spin" style={{ animationDuration: "4s" }} />
                    <span className="text-sm font-black text-zinc-300 tracking-wider uppercase">Winter Special</span>
                    <Flame className="w-4 h-4 text-red-500 animate-pulse" />
                  </motion.div>

                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.3, type: "spring" }}
                    className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-red-600 to-orange-500 rounded-xl flex items-center justify-center fire-glow"
                  >
                    <Dumbbell className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Main offer */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.4, type: "spring" }}
                    className="mb-6"
                  >
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Gift className="w-6 h-6 text-yellow-400" />
                      <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight" style={{ fontFamily: "var(--font-bebas)" }}>
                        1 Day Free Pass
                      </h2>
                      <Gift className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div className="text-5xl sm:text-6xl font-black gradient-text py-1 tracking-tight" style={{ fontFamily: "var(--font-bebas)" }}>
                      + 30% OFF
                    </div>
                    <p className="text-zinc-400 mt-2 font-medium">
                      On All Membership Plans
                    </p>
                  </motion.div>

                  {/* Features */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-wrap justify-center gap-2 mb-8"
                  >
                    {["Expert Trainers", "Steam Bath", "Group Classes"].map((feature, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-lg bg-zinc-800 border border-zinc-700 text-xs text-zinc-300 font-bold uppercase tracking-wide"
                      >
                        ✓ {feature}
                      </span>
                    ))}
                  </motion.div>

                  {/* CTA Button */}
                  <motion.button
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    onClick={scrollToForm}
                    className="group w-full py-4 px-8 bg-gradient-to-r from-red-600 to-orange-500 rounded-xl text-white font-black text-lg flex items-center justify-center gap-3 hover:from-red-500 hover:to-orange-400 transition-all fire-glow uppercase tracking-wide"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Flame className="w-5 h-5" />
                    <span>Claim Your Free Pass</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>

                  {/* Urgency */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="mt-4 text-sm text-red-400 font-bold uppercase tracking-wide"
                  >
                    ⏰ Limited Time — Don&apos;t Miss Out!
                  </motion.p>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
