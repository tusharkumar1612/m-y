"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { X, Snowflake, Gift, ArrowRight } from "lucide-react";

export default function WinterOfferModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2500);

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
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="relative w-full max-w-md pointer-events-auto">
              {/* Modal content */}
              <div className="relative overflow-hidden rounded-3xl bg-white shadow-clean-lg breathing-glow">
                {/* Top accent bar - Orange gradient */}
                <div className="h-2 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500" />
                
                {/* Close button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>

                {/* Decorative snowflakes */}
                <div className="absolute top-8 left-8 text-blue-200 opacity-50">
                  <Snowflake className="w-8 h-8" />
                </div>
                <div className="absolute top-16 right-16 text-blue-200 opacity-30">
                  <Snowflake className="w-6 h-6" />
                </div>

                {/* Content */}
                <div className="p-8 pt-6 text-center">
                  {/* Badge */}
                  <motion.div
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-6"
                  >
                    <Snowflake className="w-4 h-4 text-blue-500" />
                    <span className="text-sm font-semibold text-blue-700">Winter Special</span>
                  </motion.div>

                  {/* Main offer */}
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mb-6"
                  >
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <Gift className="w-6 h-6 text-orange-500" />
                      <h2 className="text-2xl font-bold text-gray-900">
                        1 Day Free Pass
                      </h2>
                    </div>
                    <div className="text-5xl font-black gradient-text" style={{ fontFamily: "var(--font-bebas)" }}>
                      + 30% OFF
                    </div>
                    <p className="text-gray-500 mt-2">
                      On All Membership Plans
                    </p>
                  </motion.div>

                  {/* Features */}
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-wrap justify-center gap-2 mb-8"
                  >
                    {["Personal Training", "Steam Bath", "Group Classes"].map((feature, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-700"
                      >
                        ✓ {feature}
                      </span>
                    ))}
                  </motion.div>

                  {/* CTA Button - Orange */}
                  <motion.button
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    onClick={scrollToForm}
                    className="group w-full py-4 px-6 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl text-white font-semibold text-lg flex items-center justify-center gap-2 btn-glow"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Claim Your Free Pass</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>

                  {/* Urgency */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="mt-4 text-sm text-gray-500"
                  >
                    ⏰ Limited time offer — Ends soon!
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
