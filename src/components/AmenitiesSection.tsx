"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  Droplets,
  Users,
  Ticket,
  Music,
  Dumbbell,
  Activity,
  Heart,
  Timer,
  Snowflake,
  Flame as FireIcon,
  Sparkles,
  Trophy,
  ArrowRight,
} from "lucide-react";

const amenities = [
  {
    id: "steam-bath",
    icon: <Droplets className="w-6 h-6" />,
    title: "Steam Bath",
    color: "bg-blue-500",
  },
  {
    id: "ice-bath",
    icon: <Snowflake className="w-6 h-6" />,
    title: "Ice Bath",
    color: "bg-cyan-500",
  },
  {
    id: "personal-trainers",
    icon: <Users className="w-6 h-6" />,
    title: "Personal Trainers",
    color: "bg-red-500",
  },
  {
    id: "free-trial",
    icon: <Ticket className="w-6 h-6" />,
    title: "Free Trial",
    color: "bg-green-500",
  },
  {
    id: "zumba-classes",
    icon: <Music className="w-6 h-6" />,
    title: "Zumba Classes",
    color: "bg-pink-500",
  },
  {
    id: "strength-training",
    icon: <Dumbbell className="w-6 h-6" />,
    title: "Strength Training",
    color: "bg-orange-500",
  },
  {
    id: "functional-workouts",
    icon: <Activity className="w-6 h-6" />,
    title: "Functional Workouts",
    color: "bg-yellow-500",
  },
  {
    id: "crossfit",
    icon: <FireIcon className="w-6 h-6" />,
    title: "CrossFit",
    color: "bg-red-600",
  },
  {
    id: "power-yoga",
    icon: <Heart className="w-6 h-6" />,
    title: "Power Yoga",
    color: "bg-purple-500",
  },
  {
    id: "hiit-training",
    icon: <Timer className="w-6 h-6" />,
    title: "HIIT Training",
    color: "bg-amber-500",
  },
  {
    id: "recovery-zone",
    icon: <Sparkles className="w-6 h-6" />,
    title: "Recovery Zone",
    color: "bg-indigo-500",
  },
  {
    id: "body-transform",
    icon: <Trophy className="w-6 h-6" />,
    title: "Body Transform",
    color: "bg-gradient-to-r from-red-500 to-orange-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

export default function AmenitiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="amenities" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 gym-stripes opacity-50" />
      <div className="absolute inset-0 weight-plate-bg opacity-20" />
      
      {/* Accent glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-700 mb-6">
            <Dumbbell className="w-4 h-4 text-red-500" />
            <span className="text-sm font-black text-zinc-300 tracking-wider uppercase">Premium Facilities</span>
          </span>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 uppercase tracking-tight"
            style={{ fontFamily: "var(--font-bebas)" }}
          >
            Our <span className="gradient-text">Amenities</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Click on any amenity to explore in detail
          </p>
        </motion.div>

        {/* Amenities grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {amenities.map((amenity, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Link
                href={`/amenities/${amenity.id}`}
                className="icon-card group relative p-5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-red-500/50 text-center overflow-hidden block cursor-pointer"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-orange-500/0 group-hover:from-red-500/10 group-hover:to-orange-500/5 transition-all duration-500" />
                
                {/* Icon */}
                <div className={`relative w-12 h-12 mx-auto rounded-lg ${amenity.color} flex items-center justify-center text-white mb-3 group-hover:scale-110 transition-transform shadow-lg`}>
                  {amenity.icon}
                </div>

                {/* Title */}
                <h3 className="text-sm font-bold text-white uppercase tracking-wide mb-2">
                  {amenity.title}
                </h3>

                {/* View more indicator */}
                <div className="flex items-center justify-center gap-1 text-xs text-zinc-500 group-hover:text-red-400 transition-colors">
                  <span>View</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-zinc-400 mb-6">
            Ready to experience Jaipur&apos;s best gym?
          </p>
          <motion.button
            onClick={() => document.querySelector("#form")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-orange-500 rounded-xl text-white font-black text-lg hover:scale-105 transition-transform fire-glow uppercase tracking-wide"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <FireIcon className="w-5 h-5" />
            <span>Start Training Today</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
