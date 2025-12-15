"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Youtube,
  MessageCircle,
  ArrowUpRight,
  Dumbbell,
} from "lucide-react";

const contactInfo = [
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Visit Us",
    content: "2nd Floor, Vaishali Nagar,\nNear Gurudwara, Jaipur",
    link: "https://maps.google.com/?q=M%26Y+Fitness+Club+Vaishali+Nagar+Jaipur",
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Call Us",
    content: "9660223315",
    link: "tel:9660223315",
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email Us",
    content: "team@mnyfitnessclub.com",
    link: "mailto:team@mnyfitnessclub.com",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Opening Hours",
    content: "Mon - Sat: 5:30 AM - 10:00 PM\nSunday: 6:00 AM - 12:00 PM",
    link: null,
  },
];

const socialLinks = [
  {
    icon: <Instagram className="w-5 h-5" />,
    name: "Instagram",
    href: "#",
    color: "bg-gradient-to-r from-purple-500 to-pink-500",
  },
  {
    icon: <Facebook className="w-5 h-5" />,
    name: "Facebook",
    href: "#",
    color: "bg-blue-600",
  },
  {
    icon: <Youtube className="w-5 h-5" />,
    name: "YouTube",
    href: "#",
    color: "bg-red-600",
  },
  {
    icon: <MessageCircle className="w-5 h-5" />,
    name: "WhatsApp",
    href: "https://wa.me/919660223315",
    color: "bg-green-600",
  },
];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-zinc-950" />
      <div className="absolute inset-0 gym-stripes opacity-30" />
      
      {/* Accent glows */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-red-600/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-700 mb-6">
            <MapPin className="w-4 h-4 text-red-500" />
            <span className="text-sm font-black text-zinc-300 tracking-wider uppercase">Find Us</span>
          </span>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 uppercase tracking-tight"
            style={{ fontFamily: "var(--font-bebas)" }}
          >
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Visit us at our Vaishali Nagar location or reach out through any channel.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="group p-6 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-red-500/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center text-red-500 mb-4 group-hover:bg-red-500/20 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-lg font-black text-white mb-2 uppercase tracking-wide" style={{ fontFamily: "var(--font-oswald)" }}>
                  {item.title}
                </h3>
                <p className="text-zinc-400 whitespace-pre-line text-sm leading-relaxed">
                  {item.content}
                </p>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-3 text-red-400 text-sm font-bold hover:text-orange-400 transition-colors uppercase tracking-wide"
                  >
                    <span>Open</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Map and social */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Map placeholder */}
            <div className="relative h-64 rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-red-600 to-orange-500 rounded-xl flex items-center justify-center fire-glow">
                    <Dumbbell className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-zinc-400 mb-4 font-bold">M&Y Fitness Club</p>
                  <a
                    href="https://maps.google.com/?q=M%26Y+Fitness+Club+Vaishali+Nagar+Jaipur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-orange-500 rounded-lg text-white font-bold hover:scale-105 transition-transform uppercase tracking-wide"
                  >
                    <span>Open in Maps</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="p-6 rounded-xl bg-zinc-900 border border-zinc-800">
              <h3 className="text-lg font-black text-white mb-4 uppercase tracking-wide" style={{ fontFamily: "var(--font-oswald)" }}>
                Follow Us
              </h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-lg ${social.color} text-white font-bold hover:scale-105 transition-transform uppercase text-sm tracking-wide`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                    <span>{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick contact */}
            <div className="p-6 rounded-xl bg-green-900/20 border border-green-700/30">
              <h3 className="text-lg font-black text-white mb-3 uppercase tracking-wide" style={{ fontFamily: "var(--font-oswald)" }}>
                Quick Contact
              </h3>
              <p className="text-zinc-400 text-sm mb-4">
                Have questions? WhatsApp us for instant support!
              </p>
              <a
                href="https://wa.me/919660223315?text=Hi,%20I'm%20interested%20in%20the%20winter%20gym%20offer!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 rounded-lg text-white font-bold hover:bg-green-500 transition-colors uppercase tracking-wide"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
