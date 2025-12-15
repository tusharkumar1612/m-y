"use client";

import { motion } from "framer-motion";
import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, Clock, Users, Award, ArrowRight, Star } from "lucide-react";
import { amenitiesData } from "@/lib/amenities-data";

export default function AmenityPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const amenity = amenitiesData[resolvedParams.slug];

  if (!amenity) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Amenity Not Found</h1>
          <Link href="/#amenities" className="text-orange-500 hover:text-orange-600 font-medium">
            ← Back to Amenities
          </Link>
        </div>
      </div>
    );
  }

  const otherAmenities = Object.entries(amenitiesData)
    .filter(([slug]) => slug !== resolvedParams.slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <Image
          src={amenity.heroImage}
          alt={amenity.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        
        {/* Content */}
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link
                href="/#amenities"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span>Back to Amenities</span>
              </Link>
              
              <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r ${amenity.color} text-white text-sm font-semibold mb-4`}>
                {amenity.icon}
                <span>{amenity.category}</span>
              </div>
              
              <h1
                className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4"
                style={{ fontFamily: "var(--font-bebas)" }}
              >
                {amenity.title}
              </h1>
              
              <p className="text-xl text-white/90 max-w-2xl">
                {amenity.tagline}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                About This <span className="gradient-text">Facility</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {amenity.description}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {amenity.longDescription}
              </p>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {amenity.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-5 rounded-xl bg-white border border-gray-200 hover:border-orange-200 hover:shadow-md transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center text-orange-500 mb-3 group-hover:bg-orange-100 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-500">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Facility <span className="gradient-text">Gallery</span>
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Take a visual tour of our world-class facilities
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {amenity.gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative h-64 rounded-xl overflow-hidden group cursor-pointer"
              >
                <Image
                  src={image}
                  alt={`${amenity.title} gallery ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Info Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-2 bg-white rounded-2xl p-8 border border-gray-200 shadow-clean"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center">
                  <Award className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Key Benefits</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {amenity.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Schedule & Trainer Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Schedule */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-clean">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-orange-500" />
                  <h4 className="font-bold text-gray-900">Schedule</h4>
                </div>
                <div className="space-y-2">
                  {amenity.schedule.map((item, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span className="text-gray-500">{item.day}</span>
                      <span className="text-gray-900 font-medium">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trainer */}
              {amenity.trainer && (
                <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-clean">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="w-5 h-5 text-orange-500" />
                    <h4 className="font-bold text-gray-900">Lead Trainer</h4>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white font-bold text-lg">
                      {amenity.trainer.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{amenity.trainer.name}</p>
                      <p className="text-sm text-gray-500">{amenity.trainer.experience}</p>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-br from-orange-500 to-amber-500 rounded-3xl p-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Experience {amenity.title}?
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
              Join M&Y Fitness Club today and get access to all our premium facilities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#form"
                className="px-8 py-4 bg-white text-orange-600 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                Claim Free Trial
              </Link>
              <Link
                href="/#contact"
                className="px-8 py-4 bg-white/20 text-white rounded-full font-semibold hover:bg-white/30 transition-colors border border-white/30"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Amenities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Explore More <span className="gradient-text">Facilities</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6">
            {otherAmenities.map(([slug, data], index) => (
              <motion.div
                key={slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={`/amenities/${slug}`}>
                  <div className="group relative h-64 rounded-2xl overflow-hidden">
                    <Image
                      src={data.heroImage}
                      alt={data.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-bold text-white mb-2">{data.title}</h3>
                      <div className="flex items-center gap-2 text-white/80 text-sm">
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
