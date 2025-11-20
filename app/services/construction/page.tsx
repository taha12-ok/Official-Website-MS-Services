"use client"
import React, { useState } from 'react';
import { Building2, ArrowLeft, CheckCircle, Award, TrendingUp, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function ConstructionPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const service = {
    id: 'construction',
    icon: Building2,
    title: "Construction Services",
    tagline: "Building Tomorrow's Infrastructure Today",
    desc: "Complete building construction, renovation, electrical & plumbing works, water plant installations, and professional project management",
    detailedDescription: "With over 15 years of excellence in construction, M.S Services & Trading Co. delivers comprehensive building solutions that combine innovative design, quality materials, and expert craftsmanship. Our team of PEC-registered professionals has successfully completed 50+ projects across Pakistan, specializing in government facilities, educational institutions, and commercial developments.",
    features: [
      "Building Construction & Civil Works",
      "Renovation & Modernization",
      "Electrical & Plumbing Systems",
      "Water Plant Installation & Filtration",
      "Professional Project Management",
      "Quality Assurance & Safety Compliance"
    ],
    stats: [
      { value: "50+", label: "Projects Completed" },
      { value: "100%", label: "Safety Record" },
      { value: "15+", label: "Years Experience" }
    ],
    benefits: [
      "Turnkey solutions from design to delivery",
      "PEC registered professional teams",
      "ISO-aligned quality management",
      "On-time, on-budget execution"
    ],
    gallery: [
      "/construction1.png",
      "/construction2.png",
      "/construction3.png",
      "/construction4.png",
      "/construction5.png",
      "/construction6.png",
      "/construction7.png",
      "/construction8.png",
    ],
    processSteps: [
      {
        title: "Initial Consultation & Site Assessment",
        description: "We begin with a comprehensive consultation to understand your vision, requirements, and budget. Our team conducts thorough site assessments."
      },
      {
        title: "Design & Planning",
        description: "Our architects and engineers develop detailed plans. We handle all permits and regulatory compliance."
      },
      {
        title: "Pre-Construction Preparation",
        description: "Site preparation, material procurement, and team mobilization with quality control protocols."
      },
      {
        title: "Construction Execution",
        description: "Systematic construction with regular monitoring, quality checks, and stakeholder updates."
      },
      {
        title: "Quality Assurance & Testing",
        description: "Comprehensive testing and final verification to ensure compliance."
      },
      {
        title: "Handover & Support",
        description: "Complete project handover with documentation and ongoing support."
      }
    ]
  };

  const Icon = service.icon;

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % service.gallery.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + service.gallery.length) % service.gallery.length);
    }
  };

  return (
    <div className="relative min-h-screen bg-white dark:bg-neutral-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-8">
            <Link href="/services" className="inline-flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors group">
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Back to Services
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="space-y-6">
              <div className="inline-flex w-20 h-20 rounded-2xl bg-gradient-to-br from-neutral-600 to-neutral-800 dark:from-neutral-200 dark:to-neutral-400 items-center justify-center shadow-lg">
                <Icon size={40} className="text-white dark:text-neutral-900" />
              </div>

              <h1 className="text-5xl md:text-6xl font-black text-neutral-900 dark:text-white">{service.title}</h1>
              <p className="text-2xl font-semibold text-neutral-700 dark:text-neutral-300">{service.tagline}</p>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">{service.desc}</p>

              <div className="grid grid-cols-3 gap-4 pt-6">
                {service.stats.map((stat, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="p-4 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-center">
                    <div className="text-2xl font-black text-neutral-900 dark:text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-neutral-600 dark:text-neutral-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-bold rounded-full hover:scale-105 transition-transform shadow-lg">
                Get a Quote
                <ArrowLeft className="w-5 h-5 rotate-180" />
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative">
              <div className="relative rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-2xl aspect-[4/3]">
                <img src={service.gallery[0]} alt={service.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/50 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-20 px-4 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-black mb-6 text-neutral-900 dark:text-white">About This Service</h2>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-lg">{service.detailedDescription}</p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl font-black mb-12 text-center text-neutral-900 dark:text-white">
            Key Features
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-start gap-4 p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 hover:shadow-lg">
                <CheckCircle className="w-6 h-6 text-neutral-700 dark:text-neutral-300 flex-shrink-0 mt-1" />
                <span className="text-neutral-700 dark:text-neutral-300 font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-4 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl font-black mb-12 text-center text-neutral-900 dark:text-white">
            Project Gallery
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.gallery.map((image, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 cursor-pointer group" onClick={() => setSelectedImage(i)}>
                <img src={image} alt={`${service.title} ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/30 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl font-black mb-12 text-center text-neutral-900 dark:text-white">
            Our Process
          </motion.h2>
          <div className="space-y-6">
            {service.processSteps.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex gap-6 p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 flex items-center justify-center font-bold text-lg">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-white">{step.title}</h3>
                  <p className="text-neutral-600 dark:text-neutral-400">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-12 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
            <div className="flex items-center gap-3 mb-8">
              <Award className="w-8 h-8 text-neutral-700 dark:text-neutral-300" />
              <h2 className="text-3xl font-black text-neutral-900 dark:text-white">Key Benefits</h2>
            </div>
            <div className="space-y-4">
              {service.benefits.map((benefit, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-center gap-4 text-lg text-neutral-700 dark:text-neutral-300">
                  <TrendingUp className="w-6 h-6 text-neutral-600 dark:text-neutral-400 flex-shrink-0" />
                  {benefit}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto text-center p-16 rounded-3xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-neutral-900 dark:text-white">Ready to Get Started?</h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-10 max-w-2xl mx-auto">Contact us today to discuss your construction project.</p>
          <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-bold rounded-full hover:scale-105 transition-transform shadow-xl">
            Contact Us Now
            <ArrowLeft className="w-6 h-6 rotate-180" />
          </Link>
        </motion.div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
            <button onClick={() => setSelectedImage(null)} className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10">
              <X className="w-6 h-6 text-white" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); prevImage(); }} className="absolute left-4 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10">
              <ChevronLeft className="w-8 h-8 text-white" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="absolute right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10">
              <ChevronRight className="w-8 h-8 text-white" />
            </button>
            <motion.img key={selectedImage} initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} src={service.gallery[selectedImage]} alt={`${service.title} ${selectedImage + 1}`} className="max-w-full max-h-full object-contain" onClick={(e: { stopPropagation: () => any; }) => e.stopPropagation()} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}