"use client";

import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import {
  ArrowLeft,
  Check,
  Clock,
  Users,
  Flame,
  ChevronLeft,
  ChevronRight,
  X,
  Dumbbell,
  Droplets,
  Snowflake,
  Ticket,
  Music,
  Activity,
  Heart,
  Timer,
  Sparkles,
  Trophy,
} from "lucide-react";
import { getAmenityBySlug, amenitiesData } from "@/lib/amenities-data";
import Link from "next/link";

const iconMap: Record<string, React.ReactNode> = {
  Droplets: <Droplets className="w-8 h-8" />,
  Snowflake: <Snowflake className="w-8 h-8" />,
  Users: <Users className="w-8 h-8" />,
  Ticket: <Ticket className="w-8 h-8" />,
  Music: <Music className="w-8 h-8" />,
  Dumbbell: <Dumbbell className="w-8 h-8" />,
  Activity: <Activity className="w-8 h-8" />,
  Flame: <Flame className="w-8 h-8" />,
  Heart: <Heart className="w-8 h-8" />,
  Timer: <Timer className="w-8 h-8" />,
  Sparkles: <Sparkles className="w-8 h-8" />,
  Trophy: <Trophy className="w-8 h-8" />,
};

export default function AmenityPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;
  const amenity = getAmenityBySlug(slug);
  
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!amenity) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Amenity Not Found</h1>
          <Link href="/#amenities" className="text-red-500 hover:underline">
            Back to Amenities
          </Link>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % amenity.gallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + amenity.gallery.length) % amenity.gallery.length);
  };

  // Get related amenities
  const relatedAmenities = amenitiesData
    .filter((a) => a.id !== amenity.id)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-black">
      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 p-2 rounded-full bg-zinc-800 hover:bg-zinc-700"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <Image
            src={selectedImage}
            alt="Gallery"
            width={1200}
            height={800}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />
        </motion.div>
      )}

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-black/90 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => router.push("/#amenities")}
              className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-bold uppercase tracking-wide">Back</span>
            </button>
            <div className="flex items-center gap-2">
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${amenity.color} flex items-center justify-center text-white`}>
                {iconMap[amenity.icon]}
              </div>
              <span className="text-white font-bold">{amenity.title}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20">
        <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <Image
            src={amenity.image}
            alt={amenity.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
          
          {/* Hero Content */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r ${amenity.color} mb-4`}>
                  {iconMap[amenity.icon]}
                  <span className="text-white font-bold uppercase tracking-wide">Amenity</span>
                </div>
                <h1
                  className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 uppercase"
                  style={{ fontFamily: "var(--font-bebas)" }}
                >
                  {amenity.title}
                </h1>
                <p className="text-xl text-zinc-300 max-w-2xl">
                  {amenity.shortDesc}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Description & Features */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2
                  className="text-3xl font-black text-white mb-6 uppercase"
                  style={{ fontFamily: "var(--font-bebas)" }}
                >
                  About This Amenity
                </h2>
                <p className="text-lg text-zinc-400 leading-relaxed">
                  {amenity.description}
                </p>
              </motion.div>

              {/* Features Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h2
                  className="text-3xl font-black text-white mb-6 uppercase"
                  style={{ fontFamily: "var(--font-bebas)" }}
                >
                  Features
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {amenity.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      className="flex items-start gap-3 p-4 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-red-500/30 transition-colors group"
                    >
                      <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-red-500/30 transition-colors">
                        <Check className="w-4 h-4 text-red-500" />
                      </div>
                      <span className="text-zinc-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Gallery */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <h2
                  className="text-3xl font-black text-white mb-6 uppercase"
                  style={{ fontFamily: "var(--font-bebas)" }}
                >
                  Gallery
                </h2>
                
                {/* Main Image Slider */}
                <div className="relative rounded-2xl overflow-hidden mb-4 group">
                  <div className="aspect-video relative">
                    <Image
                      src={amenity.gallery[currentImageIndex]}
                      alt={`${amenity.title} gallery`}
                      fill
                      className="object-cover cursor-pointer transition-transform duration-300 group-hover:scale-105"
                      onClick={() => setSelectedImage(amenity.gallery[currentImageIndex])}
                    />
                  </div>
                  
                  {/* Navigation arrows */}
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                  
                  {/* Image indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {amenity.gallery.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentImageIndex ? "bg-red-500" : "bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Thumbnails */}
                <div className="grid grid-cols-3 gap-4">
                  {amenity.gallery.map((img, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`relative aspect-video rounded-xl overflow-hidden border-2 transition-all ${
                        index === currentImageIndex
                          ? "border-red-500"
                          : "border-transparent hover:border-zinc-600"
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Image
                        src={img}
                        alt={`Thumbnail ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column - Benefits & Info */}
            <div className="space-y-8">
              {/* Benefits Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800"
              >
                <h3
                  className="text-2xl font-black text-white mb-6 uppercase flex items-center gap-2"
                  style={{ fontFamily: "var(--font-bebas)" }}
                >
                  <Flame className="w-6 h-6 text-red-500" />
                  Benefits
                </h3>
                <div className="space-y-3">
                  {amenity.benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-red-500 to-orange-500" />
                      <span className="text-zinc-300">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Schedule Card */}
              {amenity.schedule && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20"
                >
                  <h3 className="text-xl font-black text-white mb-3 uppercase flex items-center gap-2">
                    <Clock className="w-5 h-5 text-red-500" />
                    Schedule
                  </h3>
                  <p className="text-zinc-300">{amenity.schedule}</p>
                </motion.div>
              )}

              {/* Trainer Card */}
              {amenity.trainer && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-orange-500/10 to-yellow-500/10 border border-orange-500/20"
                >
                  <h3 className="text-xl font-black text-white mb-3 uppercase flex items-center gap-2">
                    <Users className="w-5 h-5 text-orange-500" />
                    Trainers
                  </h3>
                  <p className="text-zinc-300">{amenity.trainer}</p>
                </motion.div>
              )}

              {/* CTA Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-red-600 to-orange-500"
              >
                <h3
                  className="text-2xl font-black text-white mb-4 uppercase"
                  style={{ fontFamily: "var(--font-bebas)" }}
                >
                  Try This Amenity Free!
                </h3>
                <p className="text-white/80 mb-6">
                  Claim your free 1-day pass and experience all our facilities.
                </p>
                <Link
                  href="/#form"
                  className="block w-full py-4 bg-white text-red-600 rounded-xl font-black text-center uppercase tracking-wide hover:bg-zinc-100 transition-colors"
                >
                  Claim Free Pass
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Amenities */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-3xl font-black text-white mb-8 uppercase text-center"
            style={{ fontFamily: "var(--font-bebas)" }}
          >
            Explore More <span className="gradient-text">Amenities</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedAmenities.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={`/amenities/${item.id}`}
                  className="group block rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 hover:border-red-500/30 transition-all"
                >
                  <div className="relative h-48">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                    <div className={`absolute top-4 left-4 w-10 h-10 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center text-white`}>
                      {iconMap[item.icon]}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-black text-white mb-2 uppercase">
                      {item.title}
                    </h3>
                    <p className="text-zinc-400 text-sm">{item.shortDesc}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
          >
            <Dumbbell className="w-5 h-5" />
            <span className="font-bold">Back to M&Y Fitness Club</span>
          </Link>
        </div>
      </footer>
    </main>
  );
}

