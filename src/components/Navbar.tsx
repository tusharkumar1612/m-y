"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Offer", href: "#offer" },
  { name: "Amenities", href: "#amenities" },
  { name: "Join Now", href: "#form" },
  { name: "Contact", href: "#contact" },
];

// Interactive Logo Component
function Logo({ onClick }: { onClick: () => void }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="flex items-center gap-3 cursor-pointer select-none"
      onClick={onClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Logo Mark */}
      <div className="relative">
        <motion.div
          className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center overflow-hidden"
          animate={{
            boxShadow: isHovered 
              ? "0 8px 30px rgba(249, 115, 22, 0.4)" 
              : "0 4px 15px rgba(249, 115, 22, 0.2)",
          }}
          transition={{ duration: 0.3 }}
        >
          {/* M&Y Letters */}
          <motion.div
            className="text-white font-black text-lg tracking-tighter"
            style={{ fontFamily: "var(--font-bebas)" }}
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.2 }}
          >
            M&Y
          </motion.div>
          
          {/* Animated shine effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            initial={{ x: "-100%" }}
            animate={{ x: isHovered ? "100%" : "-100%" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
        </motion.div>
        
        {/* Decorative dot */}
        <motion.div
          className="absolute -bottom-1 -right-1 w-3 h-3 bg-amber-400 rounded-full border-2 border-white"
          animate={{ 
            scale: isHovered ? [1, 1.2, 1] : 1,
          }}
          transition={{ duration: 0.4 }}
        />
      </div>

      {/* Logo Text */}
      <div className="flex flex-col">
        <motion.span 
          className="text-xl font-black tracking-wide text-gray-900 leading-tight"
          style={{ fontFamily: "var(--font-bebas)" }}
        >
          FITNESS CLUB
        </motion.span>
        <motion.span 
          className="text-[10px] text-gray-500 tracking-[0.2em] font-medium -mt-0.5"
          animate={{ letterSpacing: isHovered ? "0.25em" : "0.2em" }}
          transition={{ duration: 0.3 }}
        >
          VAISHALI NAGAR
        </motion.span>
      </div>
    </motion.div>
  );
}

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
          isScrolled 
            ? "bg-white/95 backdrop-blur-md shadow-clean py-3" 
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Logo onClick={() => scrollToSection("#home")} />

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`relative text-sm font-semibold tracking-wide transition-colors ${
                    link.name === "Join Now"
                      ? "bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-2.5 rounded-full text-white btn-glow hover:from-orange-400 hover:to-amber-400"
                      : "text-gray-600 hover:text-orange-600 underline-animation"
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={link.name === "Join Now" ? { scale: 1.05 } : {}}
                  whileTap={{ scale: 0.98 }}
                >
                  {link.name}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-900" />
              ) : (
                <Menu className="w-6 h-6 text-gray-900" />
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
            <div className="absolute inset-0 bg-white" />
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
                  className={`text-2xl font-semibold tracking-wide ${
                    link.name === "Join Now"
                      ? "bg-gradient-to-r from-orange-500 to-amber-500 px-8 py-3 rounded-full text-white btn-glow"
                      : "text-gray-700 hover:text-orange-600"
                  }`}
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: 20 },
                  }}
                >
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
