"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  User,
  Phone,
  Mail,
  Calendar,
  MapPin,
  CheckCircle2,
  Loader2,
  UserCircle,
  Flame,
  Dumbbell,
} from "lucide-react";

const areas = [
  "Vaishali Nagar",
  "Mansarovar",
  "Malviya Nagar",
  "Jagatpura",
  "Raja Park",
  "C-Scheme",
  "Tonk Road",
  "Jhotwara",
  "Pratap Nagar",
  "Sodala",
  "Other",
];

export default function LeadForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    gender: "",
    date: "",
    area: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }
    
    if (!formData.gender) {
      newErrors.gender = "Please select your gender";
    }
    
    if (!formData.date) {
      newErrors.date = "Please select a preferred date";
    }
    
    if (!formData.area) {
      newErrors.area = "Please select your area";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/submitLead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          fullName: "",
          phone: "",
          email: "",
          gender: "",
          date: "",
          area: "",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <section id="form" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />
      <div className="absolute inset-0 gym-stripes opacity-30" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-red-600/15 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-[120px]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-700 mb-6">
            <Flame className="w-4 h-4 text-red-500" />
            <span className="text-sm font-black text-zinc-300 tracking-wider uppercase">Claim Your Free Pass</span>
          </span>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 uppercase tracking-tight"
            style={{ fontFamily: "var(--font-bebas)" }}
          >
            Start Your <span className="gradient-text">Transformation</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Fill out the form to claim your free 1-day pass and 30% winter discount.
          </p>
        </motion.div>

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="rounded-2xl overflow-hidden bg-zinc-900 border-2 border-zinc-800"
        >
          <div className="p-8 md:p-12">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-3xl font-black text-white mb-4 uppercase" style={{ fontFamily: "var(--font-bebas)" }}>
                  You&apos;re In! 💪
                </h3>
                <p className="text-zinc-400 text-lg mb-6">
                  Your free pass has been claimed! Our team will contact you shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-3 rounded-lg border border-zinc-600 text-white hover:bg-zinc-800 transition-colors font-bold uppercase tracking-wide"
                >
                  Submit Another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-bold text-zinc-400 mb-2 uppercase tracking-wide">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-500" />
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className={`w-full pl-12 pr-4 py-4 rounded-lg bg-zinc-800 border-2 ${
                          errors.fullName ? "border-red-500" : "border-zinc-700"
                        } text-white placeholder-zinc-500 transition-colors`}
                      />
                    </div>
                    {errors.fullName && (
                      <p className="mt-1 text-sm text-red-400">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-bold text-zinc-400 mb-2 uppercase tracking-wide">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-500" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        className={`w-full pl-12 pr-4 py-4 rounded-lg bg-zinc-800 border-2 ${
                          errors.phone ? "border-red-500" : "border-zinc-700"
                        } text-white placeholder-zinc-500 transition-colors`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-400">{errors.phone}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-bold text-zinc-400 mb-2 uppercase tracking-wide">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-500" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className={`w-full pl-12 pr-4 py-4 rounded-lg bg-zinc-800 border-2 ${
                          errors.email ? "border-red-500" : "border-zinc-700"
                        } text-white placeholder-zinc-500 transition-colors`}
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                    )}
                  </div>

                  {/* Gender */}
                  <div>
                    <label className="block text-sm font-bold text-zinc-400 mb-2 uppercase tracking-wide">
                      Gender *
                    </label>
                    <div className="relative">
                      <UserCircle className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-500" />
                      <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className={`w-full pl-12 pr-4 py-4 rounded-lg bg-zinc-800 border-2 ${
                          errors.gender ? "border-red-500" : "border-zinc-700"
                        } text-white appearance-none cursor-pointer transition-colors`}
                      >
                        <option value="" className="bg-zinc-800">Select gender</option>
                        <option value="male" className="bg-zinc-800">Male</option>
                        <option value="female" className="bg-zinc-800">Female</option>
                        <option value="other" className="bg-zinc-800">Other</option>
                      </select>
                    </div>
                    {errors.gender && (
                      <p className="mt-1 text-sm text-red-400">{errors.gender}</p>
                    )}
                  </div>

                  {/* Date Picker */}
                  <div>
                    <label className="block text-sm font-bold text-zinc-400 mb-2 uppercase tracking-wide">
                      Preferred Visit Date *
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-500" />
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        min={new Date().toISOString().split("T")[0]}
                        className={`w-full pl-12 pr-4 py-4 rounded-lg bg-zinc-800 border-2 ${
                          errors.date ? "border-red-500" : "border-zinc-700"
                        } text-white transition-colors [color-scheme:dark]`}
                      />
                    </div>
                    {errors.date && (
                      <p className="mt-1 text-sm text-red-400">{errors.date}</p>
                    )}
                  </div>

                  {/* Area Dropdown */}
                  <div>
                    <label className="block text-sm font-bold text-zinc-400 mb-2 uppercase tracking-wide">
                      Your Area *
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-500" />
                      <select
                        name="area"
                        value={formData.area}
                        onChange={handleChange}
                        className={`w-full pl-12 pr-4 py-4 rounded-lg bg-zinc-800 border-2 ${
                          errors.area ? "border-red-500" : "border-zinc-700"
                        } text-white appearance-none cursor-pointer transition-colors`}
                      >
                        <option value="" className="bg-zinc-800">Select your area</option>
                        {areas.map((area) => (
                          <option key={area} value={area} className="bg-zinc-800">
                            {area}
                          </option>
                        ))}
                      </select>
                    </div>
                    {errors.area && (
                      <p className="mt-1 text-sm text-red-400">{errors.area}</p>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-5 bg-gradient-to-r from-red-600 to-orange-500 rounded-xl text-white font-black text-lg fire-glow disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 uppercase tracking-wide"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <Dumbbell className="w-5 h-5" />
                      <span>Claim Free Pass</span>
                    </>
                  )}
                </motion.button>

                {/* Privacy note */}
                <p className="text-center text-sm text-zinc-500">
                  By submitting, you agree to receive communication from M&Y Fitness Club.
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
