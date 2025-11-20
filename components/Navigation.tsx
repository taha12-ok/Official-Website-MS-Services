"use client"
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone, Mail, Sun, Moon, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation'; // Add this import

const services = [
  { name: 'Life Raft & Safety Equipment', href: '/services/life-raft' },
  { name: 'Aviation Parts & Equipment', href: '/services/aviation-parts' },
  { name: 'Marine Electronics & Mechanical Parts', href: '/services/marine-electronics-mechanical' },
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

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services', submenu: services },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' }
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [darkMode, setDarkMode] = useState(false);
  
  // Use usePathname hook to get current route
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]); // Close mobile menu when route changes

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Function to check if a nav item is active
  const isActive = (href: string, hasSubmenu?: boolean) => {
    if (hasSubmenu && href === '/services') {
      return pathname.startsWith('/services');
    }
    return pathname === href;
  };

  return (
    <>
      {/* Animated Top Bar */}
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex items-center justify-between h-8 sm:h-10 text-[10px] sm:text-xs md:text-sm">
            <motion.div 
              className="flex items-center gap-2 sm:gap-4 text-neutral-400"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <a href="tel:+923118305310" className="flex items-center gap-1 sm:gap-2 hover:text-white transition-colors group">
                <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:scale-125 transition-transform" />
                <span className="hidden xs:inline">+92 311 8305310</span>
                <span className="xs:hidden">Call Us</span>
              </a>
              <a href="mailto:msservicesandtrading@gmail.com" className="hidden sm:flex items-center gap-1 sm:gap-2 hover:text-white transition-colors group">
                <Mail className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:scale-125 transition-transform" />
                <span className="hidden md:inline">msservicesandtrading@gmail.com</span>
                <span className="md:hidden">Email</span>
              </a>
            </motion.div>
            <motion.div 
              className="flex items-center gap-1 sm:gap-2 text-emerald-400 text-[10px] sm:text-xs"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 animate-pulse" />
              <span className="hidden xs:inline">Building Excellence Since 2005</span>
              <span className="xs:hidden">Since 2005</span>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Main Glass Navigation */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className={`fixed top-8 sm:top-10 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-white/80 dark:bg-neutral-950/80 backdrop-blur-2xl shadow-2xl border-b border-neutral-200/50 dark:border-white/10' 
            : 'bg-white/60 dark:bg-neutral-950/60 backdrop-blur-xl'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Animated Logo */}
            <a href="/" className="flex items-center gap-2 sm:gap-3 group">
              <motion.div 
                className="relative w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <img 
                  src="/mslogo.png" 
                  alt="MS Logo" 
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
              <div>
                <motion.h1 
                  className="text-xs sm:text-sm md:text-base lg:text-xl font-black bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-900 dark:from-white dark:via-neutral-200 dark:to-white bg-clip-text text-transparent"
                  whileHover={{ scale: 1.05 }}
                >
                  M.S Services
                </motion.h1>
                <p className="text-[8px] sm:text-[10px] md:text-xs text-neutral-600 dark:text-neutral-400">& Trading Co.</p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navItems.map((item, idx) => {
                const active = isActive(item.href, !!item.submenu);
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + idx * 0.1 }}
                    className="relative group"
                    onMouseEnter={() => item.submenu && setActiveSubmenu(item.name)}
                    onMouseLeave={() => setActiveSubmenu(null)}
                  >
                    <a
                      href={item.href}
                      className={`flex items-center gap-1 px-3 xl:px-4 py-2 rounded-xl font-semibold transition-all relative overflow-hidden text-sm ${
                        active
                          ? 'text-white dark:text-neutral-900'
                          : 'text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white'
                      }`}
                    >
                      {active && (
                        <motion.div 
                          layoutId="navbar-active"
                          className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 dark:from-white dark:via-neutral-100 dark:to-white rounded-xl -z-10"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10">{item.name}</span>
                      {item.submenu && (
                        <ChevronDown 
                          size={16} 
                          className={`transition-transform relative z-10 ${activeSubmenu === item.name ? 'rotate-180' : ''}`}
                        />
                      )}
                    </a>

                    {/* Glass Dropdown */}
                    {item.submenu && (
                      <AnimatePresence>
                        {activeSubmenu === item.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-2 w-80 rounded-2xl bg-white/90 dark:bg-neutral-900/90 backdrop-blur-2xl border border-neutral-200/50 dark:border-white/10 shadow-2xl overflow-hidden"
                          >
                            <div className="p-2 max-h-96 overflow-y-auto custom-scrollbar">
                              {item.submenu.map((subitem, subidx) => (
                                <motion.div
                                  key={subidx}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: subidx * 0.05 }}
                                >
                                  <a
                                    href={subitem.href}
                                    className={`block px-4 py-3 rounded-xl text-sm transition-all group ${
                                      pathname === subitem.href
                                        ? 'text-white dark:text-neutral-900 bg-gradient-to-r from-neutral-900 to-neutral-800 dark:from-white dark:to-neutral-100'
                                        : 'text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50'
                                    }`}
                                  >
                                    <span className="flex items-center gap-2">
                                      <span className={`w-1 h-1 rounded-full transition-all ${
                                        pathname === subitem.href
                                          ? 'bg-white dark:bg-neutral-900 w-2 h-2'
                                          : 'bg-neutral-400 dark:bg-neutral-600 group-hover:w-2 group-hover:h-2 group-hover:bg-emerald-500'
                                      }`} />
                                      {subitem.name}
                                    </span>
                                  </a>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Animated Dark Mode Toggle */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setDarkMode(!darkMode)}
                className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-neutral-100/50 dark:bg-neutral-800/50 backdrop-blur-xl border border-neutral-200/50 dark:border-white/10 hover:bg-neutral-200/50 dark:hover:bg-neutral-700/50 transition-all"
              >
                {darkMode ? <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" /> : <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-700" />}
              </motion.button>

              {/* Animated CTA */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden sm:block"
              >
                <a
                  href="/contact"
                  className="flex px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg sm:rounded-xl bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 dark:from-white dark:via-neutral-100 dark:to-white text-white dark:text-neutral-900 font-bold shadow-lg hover:shadow-2xl transition-all relative overflow-hidden group text-xs sm:text-sm"
                >
                  <span className="relative z-10">Get Quote</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                </a>
              </motion.div>

              {/* Mobile Menu */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-neutral-100/50 dark:bg-neutral-800/50 backdrop-blur-xl border border-neutral-200/50 dark:border-white/10"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="px-3 sm:px-4 py-4 sm:py-6 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-2xl border-t border-neutral-200/50 dark:border-white/10 max-h-[70vh] overflow-y-auto custom-scrollbar">
                {navItems.map((item, idx) => {
                  const active = isActive(item.href, !!item.submenu);
                  return (
                    <motion.div 
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="mb-1 sm:mb-2"
                    >
                      <div className="flex items-center justify-between">
                        <a
                          href={item.href}
                          className={`flex-1 px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base ${
                            active
                              ? 'text-white dark:text-neutral-900 bg-gradient-to-r from-neutral-900 to-neutral-800 dark:from-white dark:to-neutral-100'
                              : 'text-neutral-700 dark:text-neutral-300'
                          }`}
                        >
                          {item.name}
                        </a>
                        {item.submenu && (
                          <button
                            onClick={() => setActiveSubmenu(activeSubmenu === item.name ? null : item.name)}
                            className="p-2 sm:p-3"
                          >
                            <ChevronDown 
                              className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform ${activeSubmenu === item.name ? 'rotate-180' : ''}`}
                            />
                          </button>
                        )}
                      </div>
                      {item.submenu && (
                        <AnimatePresence>
                          {activeSubmenu === item.name && (
                            <motion.div 
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="ml-2 sm:ml-4 mt-1 sm:mt-2 space-y-1 overflow-hidden"
                            >
                              {item.submenu.map((subitem, subidx) => (
                                <motion.div
                                  key={subidx}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: subidx * 0.05 }}
                                >
                                  <a
                                    href={subitem.href}
                                    className={`block px-3 sm:px-4 py-2 text-xs sm:text-sm rounded-lg sm:rounded-xl transition-all ${
                                      pathname === subitem.href
                                        ? 'text-white dark:text-neutral-900 bg-gradient-to-r from-neutral-900 to-neutral-800 dark:from-white dark:to-neutral-100'
                                        : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100/50 dark:hover:bg-neutral-800/50'
                                    }`}
                                  >
                                    • {subitem.name}
                                  </a>
                                </motion.div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      )}
                    </motion.div>
                  );
                })}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <a
                    href="/contact"
                    className="block mt-3 sm:mt-4 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-gradient-to-r from-neutral-900 to-neutral-800 dark:from-white dark:to-neutral-100 text-white dark:text-neutral-900 font-bold text-center shadow-lg text-sm sm:text-base"
                  >
                    Get Quote
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer */}
      <div className="h-24 sm:h-30" />

      {/* Custom Scrollbar Styles */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
        @media (max-width: 640px) {
          .custom-scrollbar::-webkit-scrollbar {
            width: 4px;
          }
        }
      `}</style>
    </>
  );
}