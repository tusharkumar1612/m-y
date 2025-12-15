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
    text: "Premium equipment & world-class facilities",
  },
];

export default function OfferSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="offer" className="relative py-24 overflow-hidden bg-gray-50">
      {/* Subtle background */}
      <div className="absolute inset-0 hero-pattern-light" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-6">
            <Snowflake className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-semibold text-blue-700">Winter Special</span>
          </span>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-4"
            style={{ fontFamily: "var(--font-bebas)" }}
          >
            Exclusive <span className="gradient-text">Winter Deal</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
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
            <div className="card p-6 hover-lift">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Gift className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    1 Day Free Pass
                  </h3>
                  <p className="text-gray-600">
                    Experience our gym absolutely free. No strings attached!
                  </p>
                </div>
              </div>
            </div>

            {/* Discount card */}
            <div className="card p-6 hover-lift">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Percent className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    30% Winter Discount
                  </h3>
                  <p className="text-gray-600">
                    Massive savings on all membership plans. Limited time only!
                  </p>
                </div>
              </div>
            </div>

            {/* Countdown timer */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                <span className="text-sm font-semibold text-gray-700">Offer Ends Soon</span>
              </div>
              <div className="flex gap-3">
                {[
                  { value: "07", label: "Days" },
                  { value: "23", label: "Hours" },
                  { value: "45", label: "Mins" },
                  { value: "12", label: "Secs" },
                ].map((item, index) => (
                  <div key={index} className="flex-1 text-center">
                    <div className="py-3 rounded-xl bg-gray-100 mb-1">
                      <span className="text-2xl font-black gradient-text" style={{ fontFamily: "var(--font-bebas)" }}>
                        {item.value}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500 font-medium">{item.label}</span>
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
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              What You Get:
            </h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-200 hover:border-orange-200 hover:shadow-md transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center text-orange-500 group-hover:bg-orange-100 transition-colors">
                    {benefit.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 leading-relaxed">{benefit.text}</p>
                  </div>
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                </motion.div>
              ))}
            </div>

            {/* CTA - Orange */}
            <motion.button
              onClick={() => document.querySelector("#form")?.scrollIntoView({ behavior: "smooth" })}
              className="mt-8 w-full py-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl text-white font-semibold text-lg btn-glow hover:from-orange-400 hover:to-amber-400 transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Claim Your Free Pass Now →
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
