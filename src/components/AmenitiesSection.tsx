"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  Flame,
  Users,
  Gift,
  Music,
  Dumbbell,
  Activity,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

const amenities = [
  {
    icon: <Flame className="w-7 h-7" />,
    title: "Steam Bath",
    description: "Premium steam & recovery zone",
    color: "from-orange-500 to-amber-500",
    slug: "steam-bath",
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: "Personal Trainers",
    description: "Expert certified trainers",
    color: "from-amber-500 to-yellow-500",
    slug: "personal-trainers",
  },
  {
    icon: <Gift className="w-7 h-7" />,
    title: "Free Trial",
    description: "Experience before you commit",
    color: "from-green-500 to-emerald-500",
    slug: "free-trial",
  },
  {
    icon: <Music className="w-7 h-7" />,
    title: "Zumba Classes",
    description: "Dance your way to fitness",
    color: "from-pink-500 to-rose-500",
    slug: "zumba-classes",
  },
  {
    icon: <Dumbbell className="w-7 h-7" />,
    title: "Strength Training",
    description: "Premium equipment & machines",
    color: "from-blue-500 to-cyan-500",
    slug: "strength-training",
  },
  {
    icon: <Activity className="w-7 h-7" />,
    title: "Functional Workouts",
    description: "CrossFit, HIIT & more",
    color: "from-purple-500 to-violet-500",
    slug: "functional-workouts",
  },
];

export default function AmenitiesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="amenities" className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-sm font-semibold text-orange-600 mb-6">
            World-Class Facilities
          </span>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-4"
            style={{ fontFamily: "var(--font-bebas)" }}
          >
            Our <span className="gradient-text">Amenities</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Everything you need to achieve your fitness goals under one roof
          </p>
          {/* Mobile hint */}
          <p className="text-sm text-orange-500 mt-4 sm:hidden flex items-center justify-center gap-1">
            <span>👆</span> Tap any card to learn more
          </p>
        </motion.div>

        {/* Amenities grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenities.map((amenity, index) => (
            <motion.div
              key={amenity.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/amenities/${amenity.slug}`}>
                <motion.div
                  className="group relative p-6 rounded-2xl bg-white border border-gray-200 cursor-pointer overflow-hidden icon-card active:scale-[0.98] transition-transform"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Hover background effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${amenity.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                  
                  {/* Mobile tap indicator - always visible on mobile */}
                  <div className="absolute top-4 right-4 sm:hidden">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${amenity.color} flex items-center justify-center shadow-md`}>
                      <ChevronRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  
                  <div className="relative">
                    {/* Icon */}
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${amenity.color} flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-110 transition-transform`}
                    >
                      {amenity.icon}
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                      {amenity.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{amenity.description}</p>

                    {/* Arrow link - visible on hover for desktop, always visible on mobile */}
                    <div className="flex items-center gap-2 text-sm font-semibold text-orange-500 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
