"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube, Twitter } from "lucide-react";

const contactInfo = [
  {
    icon: <MapPin className="w-5 h-5" />,
    title: "Address",
    content: "2nd Floor, Vaishali Nagar, Near Gurudwara, Jaipur",
  },
  {
    icon: <Phone className="w-5 h-5" />,
    title: "Phone",
    content: "9660223315",
    href: "tel:9660223315",
  },
  {
    icon: <Mail className="w-5 h-5" />,
    title: "Email",
    content: "team@mnyfitnessclub.com",
    href: "mailto:team@mnyfitnessclub.com",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: "Timings",
    content: "5:00 AM - 11:00 PM (Mon-Sat)",
  },
];

const socialLinks = [
  { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
  { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
  { icon: <Youtube className="w-5 h-5" />, href: "#", label: "YouTube" },
  { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-sm font-semibold text-orange-600 mb-6">
            Get In Touch
          </span>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-4"
            style={{ fontFamily: "var(--font-bebas)" }}
          >
            Visit <span className="gradient-text">Our Club</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Come experience Jaipur&apos;s best fitness facility
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="card p-5 hover:border-orange-200 group"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500 mb-4 group-hover:bg-orange-100 transition-colors">
                  {info.icon}
                </div>
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">
                  {info.title}
                </h4>
                {info.href ? (
                  <a
                    href={info.href}
                    className="text-gray-900 font-medium hover:text-orange-600 transition-colors"
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="text-gray-900 font-medium">{info.content}</p>
                )}
              </div>
            ))}

            {/* Social links */}
            <div className="sm:col-span-2 card p-5">
              <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                Follow Us
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-orange-500 hover:text-white transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="rounded-2xl overflow-hidden border border-gray-200 h-[400px] shadow-clean"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.8878461847193!2d75.72899231503!3d26.91287668312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3e3c3e3e3e3%3A0x0!2sVaishali%20Nagar%2C%20Jaipur!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="M&Y Fitness Club Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
