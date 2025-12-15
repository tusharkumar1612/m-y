"use client";

import { motion } from "framer-motion";
import { Dumbbell } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
              <Dumbbell className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-lg font-bold">M&Y Fitness Club</span>
              <span className="block text-xs text-gray-400">Vaishali Nagar, Jaipur</span>
            </div>
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-gray-400 text-center"
          >
            Best Gym for Personal Training & Group Fitness in Jaipur
          </motion.p>

          {/* Back to top */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="px-6 py-2.5 rounded-lg bg-gray-800 hover:bg-orange-500 text-sm font-medium transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Back to Top ↑
          </motion.button>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gray-800" />

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm">
          <p>© 2025 M&Y Fitness Club, Vaishali Nagar, Jaipur. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
