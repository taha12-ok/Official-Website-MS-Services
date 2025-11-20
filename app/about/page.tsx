    "use client"
    import React, { useState, useRef } from 'react';
    import { Target, Eye, Award, Users, Shield, CheckCircle, TrendingUp, Zap, Building2, Rocket, Heart, Star, Globe, ArrowRight } from 'lucide-react';
    import Link from 'next/link';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';

    const values = [
      {
        icon: Shield,
        title: "Quality Excellence",
        desc: "ISO-aligned processes ensuring superior outcomes in every project",
      },
      {
        icon: Users,
        title: "Client-Focused",
        desc: "Building lasting partnerships through trust and exceptional service",
      },
      {
        icon: Zap,
        title: "Innovation",
        desc: "Leveraging cutting-edge technology and modern methodologies",
      },
      {
        icon: CheckCircle,
        title: "Integrity",
        desc: "Transparent operations with ethical business practices",
      }
    ];

    const milestones = [
      { year: "2005", title: "Company Founded", desc: "Started with a vision to deliver integrated infrastructure solutions" },
      { year: "2010", title: "Major Expansion", desc: "Expanded services to include IT solutions and renewable energy" },
      { year: "2015", title: "50+ Projects", desc: "Successfully completed major government and educational projects" },
      { year: "2020", title: "Industry Leader", desc: "Recognized as a trusted partner for multi-disciplinary services" },
      { year: "2025", title: "Sustainable Future", desc: "Leading the way in green building and solar energy solutions" }
    ];

    const team = [
      {
        name: "Muhammad Shabbir",
        role: "Chief Executive Officer",
        image: "/ownerpic.png",
        desc: "Visionary leader with 20+ years of experience in infrastructure development"
      },
      {
        name: "Engineering Team",
        role: "Technical Excellence",
        desc: "PEC registered engineers ensuring quality and compliance"
      },
      {
        name: "Project Management",
        role: "Delivery Excellence",
        desc: "Experienced managers ensuring on-time, on-budget completion"
      },
      {
        name: "Support Staff",
        role: "Client Success",
        desc: "Dedicated team providing 24/7 support and service"
      }
    ];

    function FloatingPaths({ position }: { position: number }) {
      const paths = Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
          380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
          152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
          684 - i * 5 * position
        } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        color: `rgba(15,23,42,${0.1 + i * 0.03})`,
        width: 0.5 + i * 0.03,
      }));

      return (
        <div className="absolute inset-0 pointer-events-none">
          <svg
            className="w-full h-full text-slate-950 dark:text-white"
            viewBox="0 0 696 316"
            fill="none"
          >
            <title>Background Paths</title>
            {paths.map((path) => (
              <motion.path
                key={path.id}
                d={path.d}
                stroke="currentColor"
                strokeWidth={path.width}
                strokeOpacity={0.1 + path.id * 0.03}
                initial={{ pathLength: 0.3, opacity: 0.6 }}
                animate={{
                  pathLength: 1,
                  opacity: [0.3, 0.6, 0.3],
                  pathOffset: [0, 1, 0],
                }}
                transition={{
                  duration: 20 + Math.random() * 10,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />
            ))}
          </svg>
        </div>
      );
    }

    export default function AboutPage() {
      const [activeValue, setActiveValue] = useState(0);

      React.useEffect(() => {
        const interval = setInterval(() => {
          setActiveValue((prev) => (prev + 1) % values.length);
        }, 3000);
        return () => clearInterval(interval);
      }, []);

      const title = "About M.S Services";
      const words = title.split(" ");

      return (
        <div className="relative min-h-screen w-full overflow-hidden bg-white dark:bg-neutral-950">
          {/* Background Paths */}
          <div className="fixed inset-0">
            <FloatingPaths position={1} />
            <FloatingPaths position={-1} />
          </div>

          {/* Hero Section */}
          <section className="relative min-h-[80vh] flex items-center justify-center px-4 sm:px-6 pt-24 sm:pt-32 pb-16 sm:pb-20">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
              className="max-w-6xl mx-auto text-center"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 backdrop-blur-xl mb-6 sm:mb-8"
              >
                <Building2 className="w-3 h-3 sm:w-4 sm:h-4 text-neutral-600 dark:text-neutral-400" />
                <span className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 font-semibold">
                  Our Story & Vision
                </span>
              </motion.div>

              {/* Title with letter-by-letter animation */}
              <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 tracking-tighter px-2">
                {words.map((word, wordIndex) => (
                  <span
                    key={wordIndex}
                    className="inline-block mr-2 sm:mr-3 md:mr-4 last:mr-0 mb-2 sm:mb-0"
                  >
                    {word.split("").map((letter, letterIndex) => (
                      <motion.span
                        key={`${wordIndex}-${letterIndex}`}
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                          delay: wordIndex * 0.1 + letterIndex * 0.03,
                          type: "spring",
                          stiffness: 150,
                          damping: 25,
                        }}
                        className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-700/80 dark:from-white dark:to-white/80"
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </span>
                ))}
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className="text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed px-2 sm:px-0"
              >
                Since 2005, we've been delivering integrated infrastructure solutions that transform institutions and empower communities through innovation and excellence
              </motion.p>
            </motion.div>
          </section>

          {/* Vision & Mission */}
          <section className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
                {/* Vision */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="group p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl bg-white/5 dark:bg-black/5 backdrop-blur-xl border border-neutral-300 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-500 hover:scale-[1.02] sm:hover:scale-105"
                >
                  <Eye className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-neutral-700 dark:text-neutral-300 mb-4 sm:mb-6 group-hover:scale-105 sm:group-hover:scale-110 transition-all duration-500" />
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-neutral-900 to-neutral-700/80 dark:from-white dark:to-white/80 bg-clip-text text-transparent">
                    Our Vision
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4 sm:mb-6">
                    To be Pakistan's most trusted and comprehensive service provider in infrastructure development, 
                    recognized for innovation, quality, and sustainable solutions.
                  </p>
                  <div className="space-y-2 sm:space-y-3">
                    {[
                      "Industry-leading quality standards",
                      "Sustainable and eco-friendly practices",
                      "Cutting-edge technology integration",
                      "Client satisfaction excellence"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
                        <Star className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-700 dark:text-neutral-300 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Mission */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="group p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl bg-white/5 dark:bg-black/5 backdrop-blur-xl border border-neutral-300 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-500 hover:scale-[1.02] sm:hover:scale-105"
                >
                  <Target className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-neutral-700 dark:text-neutral-300 mb-4 sm:mb-6 group-hover:scale-105 sm:group-hover:scale-110 transition-all duration-500" />
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-neutral-900 to-neutral-700/80 dark:from-white dark:to-white/80 bg-clip-text text-transparent">
                    Our Mission
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4 sm:mb-6">
                    To deliver proactive, comprehensive services associated with health, safety, and quality management 
                    through strategic professional expertise and innovative solutions.
                  </p>
                  <div className="space-y-2 sm:space-y-3">
                    {[
                      "Complete project lifecycle management",
                      "Certified professional teams",
                      "On-time, on-budget delivery",
                      "Long-term client partnerships"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-neutral-600 dark:text-neutral-400">
                        <Rocket className="w-4 h-4 sm:w-5 sm:h-5 text-neutral-700 dark:text-neutral-300 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Core Values */}
          <section className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="max-w-7xl mx-auto"
            >
              <div className="text-center mb-12 sm:mb-16">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-neutral-900 to-neutral-700/80 dark:from-white dark:to-white/80 bg-clip-text text-transparent"
                >
                  Our Core Values
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto px-2 sm:px-0"
                >
                  The principles that guide every project and partnership
                </motion.p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                {values.map((value, idx) => {
                  const Icon = value.icon;
                  const isActive = idx === activeValue;
                  
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: idx * 0.1 }}
                      className={`group p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl md:rounded-3xl bg-white/5 dark:bg-black/5 backdrop-blur-xl border transition-all duration-500 hover:scale-[1.02] sm:hover:scale-105 ${
                        isActive 
                          ? 'border-neutral-400 dark:border-neutral-600 bg-white/10 dark:bg-black/20 scale-[1.02] sm:scale-105' 
                          : 'border-neutral-300 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600'
                      }`}
                    >
                      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg sm:rounded-xl md:rounded-2xl bg-gradient-to-br from-neutral-600 to-neutral-800 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-105 sm:group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                        <Icon size={20} className="sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
                      </div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-neutral-900 dark:text-white">{value.title}</h3>
                      <p className="text-xs sm:text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">{value.desc}</p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </section>

          {/* Timeline */}
          <section className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12 sm:mb-16">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-neutral-900 to-neutral-700/80 dark:from-white dark:to-white/80 bg-clip-text text-transparent"
                >
                  Our Journey
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto px-2 sm:px-0"
                >
                  Two decades of excellence and continuous growth
                </motion.p>
              </div>

              <div className="relative">
                {/* Timeline Line - Hidden on mobile, visible on desktop */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-neutral-600 via-neutral-700 to-neutral-600" />

                <div className="space-y-8 sm:space-y-12 md:space-y-24">
                  {milestones.map((milestone, idx) => {
                    const isLeft = idx % 2 === 0;
                    
                    return (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: idx * 0.2 }}
                        className={`flex items-center gap-4 sm:gap-6 md:gap-8 ${
                          isLeft ? 'flex-row' : 'flex-row-reverse'
                        }`}
                      >
                        {/* Content */}
                        <div className={`flex-1 ${isLeft ? 'md:text-right' : 'md:text-left'} text-center md:text-left`}>
                          <div className={`inline-block p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl md:rounded-3xl bg-white/5 dark:bg-black/5 backdrop-blur-xl border border-neutral-300 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-500 hover:scale-[1.02] md:hover:scale-105 ${
                            isLeft ? 'md:hover:-translate-x-4' : 'md:hover:translate-x-4'
                          }`}>
                            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-r from-neutral-900 to-neutral-700/80 dark:from-white dark:to-white/80 bg-clip-text text-transparent mb-2 sm:mb-4">
                              {milestone.year}
                            </div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-neutral-900 dark:text-white">{milestone.title}</h3>
                            <p className="text-xs sm:text-sm md:text-base text-neutral-600 dark:text-neutral-400">{milestone.desc}</p>
                          </div>
                        </div>

                        {/* Timeline Dot - Hidden on mobile */}
                        <div className="hidden md:block relative">
                          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full bg-gradient-to-br from-neutral-600 to-neutral-800 border-2 sm:border-3 md:border-4 border-white dark:border-neutral-950" />
                        </div>

                        {/* Spacer for desktop layout */}
                        <div className="hidden md:block flex-1" />
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* Leadership */}
          <section className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="max-w-7xl mx-auto"
            >
              <div className="text-center mb-12 sm:mb-16">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-neutral-900 to-neutral-700/80 dark:from-white dark:to-white/80 bg-clip-text text-transparent"
                >
                  Leadership & Team
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto px-2 sm:px-0"
                >
                  Expert professionals driving excellence in every project
                </motion.p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                {team.map((member, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: idx * 0.1 }}
                    className="group p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl md:rounded-3xl bg-white/5 dark:bg-black/5 backdrop-blur-xl border border-neutral-300 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-500 hover:scale-[1.02] sm:hover:scale-105"
                  >
                    {idx === 0 ? (
                      <div className="w-full h-32 sm:h-40 md:h-48 rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden mb-4 sm:mb-6 border border-neutral-300 dark:border-neutral-700">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    ) : (
                      <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-lg sm:rounded-xl md:rounded-2xl bg-gradient-to-br from-neutral-600 to-neutral-800 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-105 sm:group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                        <Users size={24} className="sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
                      </div>
                    )}
                    
                    <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2 text-neutral-900 dark:text-white">{member.name}</h3>
                    <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 font-semibold mb-2 sm:mb-3">{member.role}</p>
                    <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{member.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* Stats */}
          <section className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="max-w-7xl mx-auto"
            >
              <div className="p-6 sm:p-8 md:p-12 lg:p-16 rounded-xl sm:rounded-2xl md:rounded-3xl bg-white/5 dark:bg-black/5 backdrop-blur-xl border border-neutral-300 dark:border-neutral-800">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center">
                  {[
                    { icon: Award, value: "21+", label: "Projects Completed" },
                    { icon: Users, value: "15+", label: "Organizations Served" },
                    { icon: Globe, value: "100%", label: "Client Satisfaction" },
                    { icon: TrendingUp, value: "20+", label: "Years Experience" }
                  ].map((stat, idx) => {
                    const Icon = stat.icon;
                    return (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: idx * 0.1 }}
                        className="group"
                      >
                        <Icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto text-neutral-700 dark:text-neutral-300 mb-2 sm:mb-4 group-hover:scale-105 sm:group-hover:scale-110 transition-all duration-500" />
                        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-r from-neutral-900 to-neutral-700/80 dark:from-white dark:to-white/80 bg-clip-text text-transparent mb-1 sm:mb-2">
                          {stat.value}
                        </div>
                        <div className="text-xs sm:text-sm md:text-base text-neutral-600 dark:text-neutral-400 font-semibold">{stat.label}</div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </section>

          {/* CTA */}
          <section className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="max-w-5xl mx-auto text-center"
            >
              <div className="p-6 sm:p-8 md:p-12 lg:p-16 rounded-xl sm:rounded-2xl md:rounded-3xl bg-white/5 dark:bg-black/5 backdrop-blur-xl border border-neutral-300 dark:border-neutral-800">
                <Heart className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto text-neutral-700 dark:text-neutral-300 mb-4 sm:mb-6 md:mb-8" />
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-black mb-4 sm:mb-6 text-neutral-900 dark:text-white">
                  Join Our Success Story
                </h2>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-neutral-600 dark:text-neutral-400 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto px-2 sm:px-0">
                  Partner with us for your next project and experience the M.S Services difference
                </p>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-block group relative bg-gradient-to-b from-black/10 to-white/10 dark:from-white/10 dark:to-black/10 p-px rounded-xl sm:rounded-2xl backdrop-blur-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <Button
                    variant="ghost"
                    className="rounded-[0.9rem] sm:rounded-[1.15rem] px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-6 text-sm sm:text-base md:text-lg font-semibold backdrop-blur-md bg-white/95 hover:bg-white/100 dark:bg-black/95 dark:hover:bg-black/100 text-black dark:text-white transition-all duration-300 group-hover:-translate-y-0.5 border border-black/10 dark:border-white/10 hover:shadow-md dark:hover:shadow-neutral-800/50"
                    asChild
                  >
                    <Link href="/contact">
                      <span className="opacity-90 group-hover:opacity-100 transition-opacity">
                        Start Your Project
                      </span>
                      <span className="ml-2 sm:ml-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                        →
                      </span>
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </section>
        </div>
      );
    }