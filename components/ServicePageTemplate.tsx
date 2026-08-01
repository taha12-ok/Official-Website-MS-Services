"use client"
import React, { useState } from 'react';
import { ArrowLeft, CheckCircle, Award, TrendingUp, X, ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { getServiceById } from '@/lib/data/services';
import { CountUp } from '@/components/ui/CountUp';

interface ServiceCta {
  label: string;
  href: string;
  external?: boolean;
}

interface ServicePageTemplateProps {
  serviceId: string;
  /** Optional page-specific sections, rendered before the FAQ/CTA. */
  extraContent?: React.ReactNode;
  /** Optional CTA override. When omitted, the default single "Contact Us Now" button is used. */
  primaryCta?: ServiceCta;
  secondaryCta?: ServiceCta;
}

export default function ServicePageTemplate({ serviceId, extraContent, primaryCta, secondaryCta }: ServicePageTemplateProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const service = getServiceById(serviceId);

  if (!service) return null;

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
      <section className="relative pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-8">
            <Link href="/services" className="inline-flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors group focus-ring rounded">
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300 ease-out motion-reduce:transition-none motion-reduce:group-hover:-translate-x-0" />
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
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="p-4 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-center transition-shadow duration-300 hover:shadow-lg motion-reduce:transition-none">
                    <div className="text-2xl font-black text-neutral-900 dark:text-white mb-1"><CountUp value={stat.value} /></div>
                    <div className="text-sm text-neutral-600 dark:text-neutral-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              <Link href="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-bold rounded-full hover:scale-105 transition-transform shadow-lg hover:shadow-xl focus-ring motion-reduce:transition-none motion-reduce:hover:scale-100">
                Get a Quote
                <ArrowLeft className="w-5 h-5 rotate-180" />
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative">
              <div className="relative rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-2xl aspect-[4/3]">
                <Image src={service.gallery[0]} alt={service.title} fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/50 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-black mb-6 text-neutral-900 dark:text-white">About This Service</h2>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-lg">{service.detailedDescription}</p>
          </motion.div>
        </div>
      </section>

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

      <section className="py-20 px-4 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl font-black mb-12 text-center text-neutral-900 dark:text-white">
            Project Gallery
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.gallery.map((image, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 cursor-pointer group" onClick={() => setSelectedImage(i)}>
                <Image src={image} alt={`${service.title} project gallery image ${i + 1} of ${service.gallery.length}`} fill loading="lazy" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/30 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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

      {extraContent}

      {service.faqs && service.faqs.length > 0 && (
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl font-black mb-12 text-center text-neutral-900 dark:text-white">
              Frequently Asked Questions
            </motion.h2>
            <div className="space-y-4">
              {service.faqs.map((faq, i) => (
                <motion.details
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="group rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 overflow-hidden"
                >
                  <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none font-bold text-neutral-900 dark:text-white focus-ring">
                    <span>{faq.question}</span>
                    <Plus className="w-5 h-5 flex-shrink-0 text-neutral-500 dark:text-neutral-400 transition-transform duration-300 group-open:rotate-45 motion-reduce:transition-none" />
                  </summary>
                  <div className="px-6 pb-6 text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.details>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-32 px-4">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto text-center p-16 rounded-3xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-neutral-900 dark:text-white">Ready to Get Started?</h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-10 max-w-2xl mx-auto">{service.ctaText}</p>
          {primaryCta || secondaryCta ? (
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              {primaryCta && (
                <a
                  href={primaryCta.href}
                  {...(primaryCta.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="cta-shimmer group inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-bold rounded-full hover:scale-105 transition-transform shadow-xl hover:shadow-2xl focus-ring motion-reduce:transition-none motion-reduce:hover:scale-100"
                >
                  {primaryCta.label}
                  <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 rotate-180" />
                </a>
              )}
              {secondaryCta && (
                <a
                  href={secondaryCta.href}
                  {...(secondaryCta.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="group inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white border-2 border-neutral-900 dark:border-white font-bold rounded-full hover:scale-105 transition-transform shadow-lg focus-ring motion-reduce:transition-none motion-reduce:hover:scale-100"
                >
                  {secondaryCta.label}
                  <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 rotate-180" />
                </a>
              )}
            </div>
          ) : (
            <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-bold rounded-full hover:scale-105 transition-transform shadow-xl hover:shadow-2xl focus-ring motion-reduce:transition-none motion-reduce:hover:scale-100">
              Contact Us Now
              <ArrowLeft className="w-6 h-6 rotate-180" />
            </Link>
          )}
        </motion.div>
      </section>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
            <button onClick={() => setSelectedImage(null)} aria-label="Close gallery" className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10 focus-ring">
              <X className="w-6 h-6 text-white" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); prevImage(); }} aria-label="Previous image" className="absolute left-4 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10 focus-ring">
              <ChevronLeft className="w-8 h-8 text-white" />
            </button>
            <button onClick={(e) => { e.stopPropagation(); nextImage(); }} aria-label="Next image" className="absolute right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10 focus-ring">
              <ChevronRight className="w-8 h-8 text-white" />
            </button>
            <motion.img key={selectedImage} initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} src={service.gallery[selectedImage]} alt={`${service.title} project gallery image ${selectedImage + 1} of ${service.gallery.length}`} className="max-w-full max-h-full object-contain" onClick={(e) => e.stopPropagation()} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
