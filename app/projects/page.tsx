"use client"
import React, { useState } from 'react';
import { Anchor, GraduationCap, Droplets, School, Building2, Shield, CheckCircle, Award, Calendar, MapPin, TrendingUp, Star, ArrowRight, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "Pakistan Navy Headquarters",
    client: "Pakistan Navy",
    category: "Construction",
    year: "2023",
    location: "Islamabad, Pakistan",
    description: "Complete professional paint works using marine-grade materials and advanced application techniques for the Navy Headquarters facility",
    icon: Anchor,
    image: "/project1.png",
    color: "from-emerald-500 to-cyan-500",
    achievements: [
      "Marine-grade materials and coatings",
      "Professional application techniques",
      "Quality compliance certification",
      "Timely project delivery"
    ],
    stats: {
      duration: "6 Months",
      budget: "Within Budget",
      team: "25+ Professionals",
      satisfaction: "100%"
    }
  },
  {
    id: 2,
    title: "Naval Academy & PNS Bahadur",
    client: "Pakistan Navy",
    category: "Education & Construction",
    year: "2022",
    location: "Karachi, Pakistan",
    description: "Educational facility construction with integrated technology solutions and comprehensive training infrastructure development",
    icon: GraduationCap,
    image: "/project2.png",
    color: "from-purple-500 to-pink-500",
    achievements: [
      "State-of-the-art educational facilities",
      "Complete technology integration",
      "Advanced training infrastructure",
      "Quality standards compliance"
    ],
    stats: {
      duration: "12 Months",
      budget: "On Budget",
      team: "40+ Professionals",
      satisfaction: "100%"
    }
  },
  {
    id: 3,
    title: "Water Plant Installations - Multiple Sites",
    client: "PMSA & Various Clients",
    category: "Water Systems",
    year: "2021-2023",
    location: "Multiple Locations",
    description: "Advanced water filtration and chilling systems with professional installation, commissioning, and ongoing maintenance services",
    icon: Droplets,
    image: "/project3.png",
    color: "from-blue-500 to-indigo-500",
    achievements: [
      "Advanced filtration technology",
      "Energy-efficient chilling systems",
      "Professional installation services",
      "Comprehensive maintenance support"
    ],
    stats: {
      duration: "3-6 Months Each",
      budget: "Value Engineered",
      team: "15+ Technicians",
      satisfaction: "98%"
    }
  },
  {
    id: 4,
    title: "PMSA Administrative Complex",
    client: "Pakistan Maritime Security Agency",
    category: "Construction & Renovation",
    year: "2022",
    location: "Karachi, Pakistan",
    description: "Complete construction and renovation of administrative blocks with modern facilities and infrastructure upgrades",
    icon: Building2,
    image: "/project4.png",
    color: "from-orange-500 to-red-500",
    achievements: [
      "Modern administrative facilities",
      "Infrastructure modernization",
      "Security system integration",
      "Energy-efficient design"
    ],
    stats: {
      duration: "10 Months",
      budget: "Within Budget",
      team: "35+ Professionals",
      satisfaction: "100%"
    }
  },
  {
    id: 5,
    title: "Educational Institutions Technology Upgrade",
    client: "Multiple Educational Institutions",
    category: "IT & Technology",
    year: "2021-2024",
    location: "Karachi & Islamabad",
    description: "Comprehensive IT equipment supply, installation, and integration including video walls, projectors, computers, and networking systems",
    icon: School,
    image: "/project5.png",
    color: "from-amber-500 to-yellow-500",
    achievements: [
      "500+ devices installed",
      "Complete network infrastructure",
      "Interactive learning systems",
      "Ongoing technical support"
    ],
    stats: {
      duration: "Ongoing",
      budget: "Optimized Costs",
      team: "20+ IT Specialists",
      satisfaction: "99%"
    }
  },
  {
    id: 6,
    title: "PMSA Security Perimeter Upgrade",
    client: "Pakistan Maritime Security Agency",
    category: "Security Infrastructure",
    year: "2023",
    location: "Multiple PMSA Facilities",
    description: "Prefabricated boundary wall installation and comprehensive security perimeter upgrades across multiple facilities",
    icon: Shield,
    image: "/project6.png",
    color: "from-rose-500 to-pink-500",
    achievements: [
      "Prefabricated wall systems",
      "Enhanced security measures",
      "Rapid deployment capability",
      "Durable construction"
    ],
    stats: {
      duration: "8 Months",
      budget: "Cost Effective",
      team: "30+ Workers",
      satisfaction: "100%"
    }
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
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export default function ProjectsPage() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white dark:bg-neutral-950">
      {/* Background Paths */}
      <div className="fixed inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center px-4 pt-24 sm:pt-32 pb-12 sm:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 backdrop-blur-xl mb-6 sm:mb-8"
          >
            <Award className="w-3 h-3 sm:w-4 sm:h-4 text-neutral-600 dark:text-neutral-400" />
            <span className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 font-semibold">
              Our Portfolio
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-8 tracking-tighter px-4"
          >
            <span className="bg-gradient-to-r from-neutral-900 to-neutral-700/80 dark:from-white dark:to-white/80 bg-clip-text text-transparent">
              Our Projects
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4"
          >
            Delivering excellence across government facilities, educational institutions, and critical infrastructure with precision and professionalism
          </motion.p>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="relative py-12 sm:py-20 px-4">
        <motion.div 
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="space-y-16 sm:space-y-24 lg:space-y-32">
            {projects.map((project, idx) => {
              const Icon = project.icon;
              const isEven = idx % 2 === 0;
              
              return (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  className="group"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className={`grid lg:grid-cols-2 gap-8 sm:gap-12 items-center ${isEven ? '' : 'lg:grid-flow-dense'}`}>
                    {/* Content Side */}
                    <div className={`space-y-4 sm:space-y-6 lg:space-y-8 ${isEven ? '' : 'lg:col-start-2'}`}>
                      {/* Icon & Title */}
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <motion.div 
                          className="inline-flex w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-br from-neutral-600 to-neutral-800 items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <Icon className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
                        </motion.div>
                        
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-2 sm:mb-3 text-neutral-900 dark:text-white">
                          {project.title}
                        </h2>
                        
                        <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mb-4 sm:mb-6">
                          <span className="flex items-center gap-1.5 sm:gap-2">
                            <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-neutral-700 dark:text-neutral-300" />
                            <span className="truncate max-w-[120px] sm:max-w-none">{project.client}</span>
                          </span>
                          <span className="flex items-center gap-1.5 sm:gap-2">
                            <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-neutral-700 dark:text-neutral-300" />
                            {project.year}
                          </span>
                          <span className="flex items-center gap-1.5 sm:gap-2">
                            <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-neutral-700 dark:text-neutral-300" />
                            <span className="truncate max-w-[150px] sm:max-w-none">{project.location}</span>
                          </span>
                        </div>
                        
                        <p className="text-sm sm:text-base lg:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                          {project.description}
                        </p>
                      </motion.div>

                      {/* Achievements */}
                      <div className="space-y-2 sm:space-y-3">
                        <h3 className="text-base sm:text-lg lg:text-xl font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                          <Award className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-neutral-700 dark:text-neutral-300" />
                          Key Achievements
                        </h3>
                        {project.achievements.map((achievement, i) => (
                          <motion.div 
                            key={i}
                            className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white/5 dark:bg-black/5 backdrop-blur-xl border border-neutral-300 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 hover:bg-white/10 dark:hover:bg-black/10 transition-all duration-300"
                            whileHover={{ x: 10 }}
                            transition={{ delay: i * 0.1 }}
                          >
                            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-neutral-700 dark:text-neutral-300 flex-shrink-0 mt-0.5" />
                            <span className="text-xs sm:text-sm lg:text-base text-neutral-700 dark:text-neutral-300">{achievement}</span>
                          </motion.div>
                        ))}
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-2 sm:gap-4">
                        {Object.entries(project.stats).map(([key, value], i) => (
                          <motion.div 
                            key={i}
                            className="p-3 sm:p-4 lg:p-6 rounded-xl sm:rounded-2xl bg-white/5 dark:bg-black/5 backdrop-blur-xl border border-neutral-300 dark:border-neutral-800 text-center hover:scale-105 transition-all duration-300"
                            whileHover={{ scale: 1.05, y: -5 }}
                          >
                            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black bg-gradient-to-r from-neutral-900 to-neutral-700/80 dark:from-white dark:to-white/80 bg-clip-text text-transparent mb-1">
                              {value}
                            </div>
                            <div className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 capitalize">{key}</div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Rating */}
                      <motion.div 
                        className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/5 dark:bg-black/5 backdrop-blur-xl border border-neutral-300 dark:border-neutral-800 flex items-center justify-between"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="flex gap-0.5 sm:gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400" />
                          ))}
                        </div>
                        <span className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-semibold">Excellent Rating</span>
                      </motion.div>

                      {/* CTA Button */}
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-bold rounded-full hover:shadow-xl transition-all duration-300 overflow-hidden inline-flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                          <span className="relative z-10">
                            Get Quote
                          </span>
                          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 group-hover:translate-x-2 transition-transform" />
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-neutral-700 to-neutral-900 dark:from-neutral-200 dark:to-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            initial={false}
                          />
                        </button>
                      </motion.div>
                    </div>

                    {/* Visual Side - Real Image */}
                    <div className={`${isEven ? '' : 'lg:col-start-1 lg:row-start-1'}`}>
                      <motion.div 
                        className="relative group"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {/* Main Image Card */}
                        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-neutral-300 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-500 aspect-[4/3] sm:min-h-[400px] lg:min-h-[500px]">
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          
                          {/* Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/70 via-neutral-900/30 to-transparent" />
                          
                          {/* Bottom Info Overlay */}
                          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                            <div className="flex items-center gap-3 mb-2">
                              <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white drop-shadow-lg" />
                              <span className="text-white font-bold text-lg sm:text-xl drop-shadow-lg">{project.category}</span>
                            </div>
                            <p className="text-white/90 text-sm sm:text-base drop-shadow-lg">{project.year}</p>
                          </div>

                          {/* Icon Overlay on Hover */}
                          <motion.div 
                            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-neutral-900/40"
                            initial={false}
                          >
                            <motion.div
                              animate={{ 
                                scale: [1, 1.1, 1],
                              }}
                              transition={{ 
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            >
                              <Icon className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-white drop-shadow-2xl" />
                            </motion.div>
                          </motion.div>
                        </div>

                        {/* Floating Badge */}
                        <motion.div 
                          className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 font-bold text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 shadow-lg"
                          animate={{ 
                            y: [0, -5, 0],
                            scale: [1, 1.05, 1]
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                          whileHover={{ scale: 1.1 }}
                        >
                          {hoveredProject === project.id ? '🔥 Featured' : '⭐ Success'}
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 sm:py-24 lg:py-32 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center"
        >
          <div className="p-8 sm:p-12 lg:p-16 rounded-2xl sm:rounded-3xl bg-white/5 dark:bg-black/5 backdrop-blur-xl border border-neutral-300 dark:border-neutral-800">
            <motion.div
              animate={{ 
                rotate: [0, 10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <TrendingUp className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-auto text-neutral-700 dark:text-neutral-300 mb-6 sm:mb-8" />
            </motion.div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 sm:mb-6 text-neutral-900 dark:text-white px-4">
              Project Success Metrics
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-neutral-600 dark:text-neutral-400 mb-8 sm:mb-10 max-w-2xl mx-auto px-4">
              Consistent delivery excellence across all our engagements with proven results
            </p>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {[
                { icon: Award, value: "21+", label: "Projects Completed", color: "from-neutral-600 to-neutral-800" },
                { icon: Building2, value: "11", label: "Major Construction", color: "from-neutral-600 to-neutral-800" },
                { icon: CheckCircle, value: "100%", label: "Client Satisfaction", color: "from-neutral-600 to-neutral-800" },
                { icon: Zap, value: "50+", label: "Expert Team", color: "from-neutral-600 to-neutral-800" }
              ].map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <motion.div 
                    key={idx}
                    className="group text-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto rounded-xl sm:rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                    </div>
                    <div className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black bg-gradient-to-r from-neutral-900 to-neutral-700/80 dark:from-white dark:to-white/80 bg-clip-text text-transparent mb-1 sm:mb-2">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-semibold px-2">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 sm:py-24 lg:py-32 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center"
        >
          <div className="p-8 sm:p-12 lg:p-16 rounded-2xl sm:rounded-3xl bg-white/5 dark:bg-black/5 backdrop-blur-xl border border-neutral-300 dark:border-neutral-800">
            <motion.div
              animate={{ 
                rotate: [0, 10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Shield className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-auto text-neutral-700 dark:text-neutral-300 mb-6 sm:mb-8" />
            </motion.div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 sm:mb-6 text-neutral-900 dark:text-white px-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-neutral-600 dark:text-neutral-400 mb-8 sm:mb-10 max-w-2xl mx-auto px-4">
              Let's discuss how we can bring your vision to life with the same excellence we've delivered across all our projects.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button className="group relative px-8 sm:px-10 py-4 sm:py-5 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 font-bold rounded-full hover:shadow-xl transition-all duration-300 overflow-hidden inline-flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                <span className="relative z-10">
                  Start Your Project
                </span>
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 relative z-10" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-neutral-700 to-neutral-900 dark:from-neutral-200 dark:to-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              </button>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}