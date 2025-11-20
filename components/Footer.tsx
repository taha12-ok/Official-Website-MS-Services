"use client"
import React from 'react';
import { Phone, Mail, MapPin, Building2, MessageCircle, Instagram, Heart, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' }
  ];

  const services = [
    { name: 'Life Raft & Safety Equipment', href: '/services/life-raft' },
    { name: 'Aviation Parts & Equipment', href: '/services/aviation-parts' },
    { name: 'Marine Electronics & Mechanical', href: '/services/marine-electronics-mechanical' },
    { name: 'Mechanical Services', href: '/services/mechanical-services' },
    { name: 'Solar System Installation', href: '/services/solar' },
    { name: 'Electrical & Electronics', href: '/services/electrical-electronics' },
    { name: 'General Items & Supplies', href: '/services/supplies' },
    { name: 'Generator Systems & Parts', href: '/services/generator-parts' },
    { name: 'IT Equipment & Educational Solutions', href: '/services/it-solutions' },
    { name: 'Construction Services', href: '/services/construction' },
    { name: 'Transportation Services', href: '/services/transportation' },
    { name: 'Janitorial Services', href: '/services/janitorial' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 dark:from-white dark:via-neutral-50 dark:to-white border-t border-white/10 dark:border-neutral-200/50 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <motion.div 
          className="absolute w-96 h-96 bg-white/5 dark:bg-neutral-900/5 rounded-full blur-[120px] -top-48 -left-48"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute w-96 h-96 bg-white/5 dark:bg-neutral-900/5 rounded-full blur-[120px] -bottom-48 -right-48"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      {/* Main Footer Content */}
      <motion.div 
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12">
          {/* Company Info */}
          <motion.div className="space-y-4 sm:space-y-6" variants={itemVariants}>
            <motion.div 
              className="flex items-center gap-2 sm:gap-3 group"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div 
                className="relative w-10 h-10 sm:w-12 sm:h-12"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <img 
                  src="/mslogo.png" 
                  alt="MS Logo" 
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </motion.div>
              <span className="font-bold text-lg sm:text-xl bg-gradient-to-r from-white via-neutral-200 to-white dark:from-neutral-900 dark:via-neutral-700 dark:to-neutral-900 bg-clip-text text-transparent">
                M.S Services
              </span>
            </motion.div>
            
            <motion.p 
              className="text-sm sm:text-base text-neutral-400 dark:text-neutral-600 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Building Excellence, Delivering Solutions. Your trusted partner for integrated infrastructure solutions.
            </motion.p>

            {/* Social Media */}
            <div className="flex gap-2 sm:gap-3">
              {[
                { 
                  icon: MessageCircle, 
                  href: 'https://wa.me/923118305310', 
                  color: 'hover:bg-green-500',
                  label: 'WhatsApp'
                },
                { 
                  icon: Mail, 
                  href: 'mailto:msservicesandtrading@gmail.com', 
                  color: 'hover:bg-red-500',
                  label: 'Email'
                },
                { 
                  icon: MapPin, 
                  href: 'https://www.google.com/maps/search/?api=1&query=G-48+Falaknaz+Tower+Shahrah-e-Faisal+Karachi', 
                  color: 'hover:bg-blue-500',
                  label: 'Location'
                }
              ].map((social, idx) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.label}
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 dark:bg-neutral-100/50 backdrop-blur-xl border border-white/10 dark:border-neutral-200/50 flex items-center justify-center ${social.color} transition-all duration-300`}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                  >
                    <Icon size={16} className="sm:w-[18px] sm:h-[18px] text-white dark:text-neutral-700" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <motion.h3 
              className="text-base sm:text-lg font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-neutral-200 to-white dark:from-neutral-900 dark:via-neutral-700 dark:to-neutral-900 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              Quick Links
            </motion.h3>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <motion.a
                    href={link.href}
                    className="group flex items-center gap-2 text-sm sm:text-base text-neutral-400 dark:text-neutral-600 hover:text-white dark:hover:text-neutral-900 transition-all duration-300"
                    whileHover={{ x: 10 }}
                  >
                    <ArrowRight size={14} className="sm:w-4 sm:h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    <span className="group-hover:translate-x-2 transition-transform duration-300">
                      {link.name}
                    </span>
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <motion.h3 
              className="text-base sm:text-lg font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-neutral-200 to-white dark:from-neutral-900 dark:via-neutral-700 dark:to-neutral-900 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              Our Services
            </motion.h3>
            <ul className="space-y-2 sm:space-y-3 max-h-[300px] sm:max-h-[400px] overflow-y-auto custom-scrollbar pr-2">
              {services.map((service, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  viewport={{ once: true }}
                >
                  <motion.a
                    href={service.href}
                    className="group flex items-center gap-2 text-neutral-400 dark:text-neutral-600 hover:text-white dark:hover:text-neutral-900 transition-all duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <motion.span 
                      className="w-1 h-1 rounded-full bg-neutral-500 dark:bg-neutral-400 flex-shrink-0"
                      whileHover={{ scale: 2, backgroundColor: 'rgb(255, 255, 255)' }}
                    />
                    <span className="text-xs sm:text-sm group-hover:translate-x-1 transition-transform duration-300">
                      {service.name}
                    </span>
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <motion.h3 
              className="text-base sm:text-lg font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-neutral-200 to-white dark:from-neutral-900 dark:via-neutral-700 dark:to-neutral-900 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              Get in Touch
            </motion.h3>
            <div className="space-y-3 sm:space-y-4">
              {[
                {
                  icon: Mail,
                  label: 'Email',
                  content: 'msservicesandtrading@gmail.com',
                  href: 'mailto:msservicesandtrading@gmail.com',
                  breakAll: true
                },
                {
                  icon: Phone,
                  label: 'Phone',
                  content: '+92 311 8305310',
                  href: 'tel:+923118305310'
                },
                {
                  icon: MapPin,
                  label: 'Office',
                  content: 'G-48, Falaknaz Tower\nShahrah-e-Faisal, Karachi',
                  multiline: true
                }
              ].map((contact, idx) => {
                const Icon = contact.icon;
                return (
                  <motion.div 
                    key={idx}
                    className="group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <motion.div 
                      className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white/5 dark:bg-neutral-100/50 backdrop-blur-xl border border-white/10 dark:border-neutral-200/50 hover:border-white/30 dark:hover:border-neutral-300 hover:bg-white/10 dark:hover:bg-neutral-200/50 transition-all duration-300"
                    >
                      <motion.div
                        whileHover={{ scale: 1.3, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-300 dark:text-neutral-700 flex-shrink-0 mt-0.5" />
                      </motion.div>
                      <div>
                        <p className="text-[10px] sm:text-xs text-neutral-500 dark:text-neutral-500 mb-1">{contact.label}</p>
                        {contact.href ? (
                          <a 
                            href={contact.href} 
                            className={`text-xs sm:text-sm text-neutral-200 dark:text-neutral-700 hover:text-white dark:hover:text-neutral-900 transition-colors ${contact.breakAll ? 'break-all' : ''}`}
                          >
                            {contact.content}
                          </a>
                        ) : (
                          <p className="text-xs sm:text-sm text-neutral-200 dark:text-neutral-700 whitespace-pre-line">
                            {contact.content}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="pt-6 sm:pt-8 border-t border-white/10 dark:border-neutral-200/50"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
            <motion.p 
              className="text-neutral-400 dark:text-neutral-600 text-xs sm:text-sm flex items-center gap-2 text-center md:text-left"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              © {currentYear} M.S Services & Trading Co. Made with 
              <motion.span
                animate={{ 
                  scale: [1, 1.3, 1],
                }}
                transition={{ 
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Heart size={12} className="sm:w-[14px] sm:h-[14px] text-red-500" fill="currentColor" />
              </motion.span>
              in Pakistan
            </motion.p>
            
            <motion.div 
              className="flex gap-4 sm:gap-6 text-xs sm:text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <motion.a 
                href="/privacy" 
                className="text-neutral-400 dark:text-neutral-600 hover:text-white dark:hover:text-neutral-900 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a 
                href="/terms" 
                className="text-neutral-400 dark:text-neutral-600 hover:text-white dark:hover:text-neutral-900 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                Terms of Service
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Animated Bottom Accent Line */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-neutral-800 via-white to-neutral-800 dark:from-neutral-200 dark:via-neutral-800 dark:to-neutral-200"
        animate={{ 
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{ 
          backgroundSize: '200% auto',
          opacity: 0.5
        }}
      />

      {/* Custom Scrollbar Styles */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }

        @media (max-width: 640px) {
          .custom-scrollbar::-webkit-scrollbar {
            width: 3px;
          }
        }
      `}</style>
    </footer>
  );
}
