"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Dumbbell, Flame } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Offer", href: "#offer" },
  { name: "Amenities", href: "#amenities" },
  { name: "Join Now", href: "#form" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-black/90 backdrop-blur-md border-b border-zinc-800 py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              className="flex items-center gap-2 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => scrollToSection("#home")}
            >
              <div className="relative">
                <div className="w-11 h-11 bg-gradient-to-br from-red-600 to-orange-500 rounded-lg flex items-center justify-center fire-glow">
                  <Dumbbell className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-wider text-white" style={{ fontFamily: "var(--font-bebas)" }}>
                  M&Y FITNESS
                </span>
                <span className="text-[10px] text-zinc-500 tracking-widest -mt-1 font-bold">
                  VAISHALI NAGAR
                </span>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`relative text-sm font-bold tracking-wide transition-colors uppercase ${
                    link.name === "Join Now"
                      ? "bg-gradient-to-r from-red-600 to-orange-500 px-6 py-2.5 rounded-lg text-white fire-glow hover:scale-105 transform transition-all flex items-center gap-2"
                      : "text-zinc-400 hover:text-white"
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={link.name !== "Join Now" ? { y: -2 } : {}}
                >
                  {link.name === "Join Now" && <Flame className="w-4 h-4" />}
                  {link.name}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 transition-colors border border-zinc-700"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden pt-20"
          >
            <div className="absolute inset-0 bg-black/98" />
            <div className="absolute inset-0 gym-stripes opacity-30" />
            <motion.div
              className="relative flex flex-col items-center justify-center h-full gap-8"
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { transition: { staggerChildren: 0.1 } },
                closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
              }}
            >
              {navLinks.map((link) => (
                <motion.button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`text-2xl font-black tracking-wide uppercase ${
                    link.name === "Join Now"
                      ? "bg-gradient-to-r from-red-600 to-orange-500 px-8 py-3 rounded-lg text-white fire-glow flex items-center gap-2"
                      : "text-zinc-400 hover:text-white"
                  }`}
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: 20 },
                  }}
                >
                  {link.name === "Join Now" && <Flame className="w-5 h-5" />}
                  {link.name}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
