"use client";

import { motion } from "framer-motion";
import { Dumbbell, Heart, ArrowUp, Flame } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-black border-t border-zinc-800">
      {/* Gym pattern */}
      <div className="absolute inset-0 gym-stripes opacity-20" />
      
      {/* Main footer content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo and tagline */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-orange-500 rounded-lg flex items-center justify-center">
                <Dumbbell className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-black tracking-wider text-white uppercase" style={{ fontFamily: "var(--font-bebas)" }}>
                M&Y Fitness Club
              </span>
            </div>
            <p className="text-sm text-zinc-500">
              Best Gym for Personal Training & Group Fitness in Jaipur
            </p>
          </div>

          {/* Quick links */}
          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {["Home", "Offer", "Amenities", "Join Now", "Contact"].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const id = link === "Home" ? "home" : link === "Join Now" ? "form" : link.toLowerCase();
                    document.querySelector(`#${id}`)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-zinc-500 hover:text-red-400 transition-colors font-bold uppercase tracking-wide"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Back to top */}
          <div className="text-center md:text-right">
            <motion.button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900 hover:bg-red-500/20 text-zinc-400 hover:text-red-400 transition-all border border-zinc-800 hover:border-red-500/30"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-sm font-bold uppercase tracking-wide">Back to Top</span>
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-zinc-600 text-center md:text-left">
              © 2025 M&Y Fitness Club, Vaishali Nagar, Jaipur. All rights reserved.
            </p>
            <p className="text-sm text-zinc-600 flex items-center gap-2">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>&</span>
              <Flame className="w-4 h-4 text-orange-500" />
              <span>for fitness lovers</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
