"use client"
import React from 'react';
import { motion } from 'framer-motion';
import {
  Bot, Filter, FileText, Workflow, Database, MessageSquare,
  Mail, BookOpen, Cog, CheckCircle, Truck, Building2, Ship, Plane,
  Factory, HeartPulse, ShoppingBag, Home, GraduationCap, Landmark,
} from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';

/**
 * AI Automation page-specific sections (Phase 3 enhancement).
 * Rendered via ServicePageTemplate's `extraContent` slot, so it reuses the
 * existing design system (glass cards, neutral palette, motion) without
 * touching any other service page.
 */

const solutions = [
  { icon: MessageSquare, title: "AI Customer Support Chatbots", desc: "Instant, always-on answers to customer questions.", suitable: "Suitable for: high-volume support teams" },
  { icon: Filter, title: "AI Lead Qualification", desc: "Automatically score and route incoming leads.", suitable: "Suitable for: sales & marketing teams" },
  { icon: FileText, title: "AI Quote Generator", desc: "Generate accurate quotes from customer requests.", suitable: "Suitable for: services & trading businesses" },
  { icon: Workflow, title: "Workflow Automation", desc: "Connect tasks and tools into automated flows.", suitable: "Suitable for: operations-heavy teams" },
  { icon: Database, title: "CRM Automation", desc: "Keep records updated without manual entry.", suitable: "Suitable for: growing client bases" },
  { icon: Bot, title: "WhatsApp Automation", desc: "Automated conversations on WhatsApp Business.", suitable: "Suitable for: customer-facing businesses" },
  { icon: Mail, title: "Email Automation", desc: "Automated replies, follow-ups, and routing.", suitable: "Suitable for: inbound-heavy inboxes" },
  { icon: BookOpen, title: "AI Knowledge Base", desc: "Turn your documents into instant answers.", suitable: "Suitable for: teams with large documentation" },
  { icon: Cog, title: "Business Process Automation", desc: "Automate repetitive back-office processes.", suitable: "Suitable for: enterprises scaling operations" },
];

const technologies = [
  "OpenAI", "Claude", "Google Gemini", "n8n", "LangChain", "MCP",
  "Python", "Next.js", "Node.js", "WhatsApp Business API", "PostgreSQL", "Vector Databases",
];

const businessBenefits = [
  "Reduce manual work",
  "Faster customer support",
  "24/7 availability",
  "Higher lead conversion",
  "Better operational efficiency",
  "Lower operational costs",
];

const caseStudies = [
  {
    industry: "Logistics",
    challenge: "Support team overwhelmed by repetitive shipment-status queries.",
    solution: "AI chatbot + WhatsApp automation answering status questions instantly.",
    outcome: "Faster responses and support staff freed for complex cases.",
  },
  {
    industry: "Construction & Trading",
    challenge: "Manual, slow preparation of quotes from incoming requests.",
    solution: "AI Quote Generator that drafts quotes from customer messages.",
    outcome: "Shorter quote turnaround and more consistent pricing.",
  },
  {
    industry: "Retail",
    challenge: "Leads lost due to slow follow-up across email and WhatsApp.",
    solution: "AI lead qualification with automated CRM and email follow-ups.",
    outcome: "Higher lead conversion and no missed enquiries.",
  },
];

const industries = [
  { icon: Truck, title: "Logistics", desc: "Automated tracking & support workflows." },
  { icon: Building2, title: "Construction", desc: "Quote generation & project coordination." },
  { icon: Ship, title: "Marine", desc: "Documentation & enquiry automation." },
  { icon: Plane, title: "Aviation", desc: "Parts enquiry & support automation." },
  { icon: Factory, title: "Manufacturing", desc: "Process & back-office automation." },
  { icon: HeartPulse, title: "Healthcare", desc: "Appointment & records automation." },
  { icon: ShoppingBag, title: "Retail", desc: "Customer support & lead follow-up." },
  { icon: Home, title: "Real Estate", desc: "Lead qualification & scheduling." },
  { icon: GraduationCap, title: "Education", desc: "Admissions & enquiry automation." },
  { icon: Landmark, title: "Government", desc: "Citizen support & document workflows." },
];

const implementationSteps = [
  { title: "Discovery", desc: "Understand your goals and current workflows." },
  { title: "Requirement Analysis", desc: "Define scope, systems, and success metrics." },
  { title: "AI Workflow Design", desc: "Design the automation and agent logic." },
  { title: "Development", desc: "Build and configure the AI solution." },
  { title: "Testing", desc: "Validate accuracy, safety, and reliability." },
  { title: "Deployment", desc: "Launch into your live environment." },
  { title: "Team Training", desc: "Enable your team to use and manage it." },
  { title: "Continuous Support", desc: "Monitor, optimize, and improve over time." },
];

export default function AIAutomationSections() {
  return (
    <>
      {/* What We Can Build */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl font-black mb-4 text-center text-neutral-900 dark:text-white">
            What We Can Build For Your Business
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-center mb-12">
            Practical AI solutions tailored to how your business actually operates.
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {solutions.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <GlassCard className="p-6 h-full">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neutral-600 to-neutral-800 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <Icon size={22} className="text-white" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-neutral-900 dark:text-white">{s.title}</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-3">{s.desc}</p>
                    <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-300">{s.suitable}</p>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies We Work With */}
      <section className="py-20 px-4 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl font-black mb-4 text-neutral-900 dark:text-white">
            Technologies We Work With
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 mb-10">
            We build on trusted, modern AI and engineering platforms.
          </motion.p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {technologies.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="px-4 py-2 rounded-full text-sm font-semibold bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Why Businesses Choose AI Automation */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl font-black mb-12 text-center text-neutral-900 dark:text-white">
            Why Businesses Choose AI Automation
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {businessBenefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800"
              >
                <CheckCircle className="w-6 h-6 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                <span className="font-semibold text-neutral-800 dark:text-neutral-200">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl font-black mb-4 text-center text-neutral-900 dark:text-white">
            Case Studies
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-center mb-12">
            Illustrative examples of how AI Automation can be applied.
          </motion.p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
            {caseStudies.map((cs, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <GlassCard className="p-6 h-full">
                  <span className="inline-flex items-center gap-1 mb-4 px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-semibold bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">
                    Demo Use Case
                  </span>
                  <h3 className="text-lg font-bold mb-4 text-neutral-900 dark:text-white">{cs.industry}</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold text-neutral-900 dark:text-white">Challenge</p>
                      <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-900 dark:text-white">AI Solution</p>
                      <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">{cs.solution}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-900 dark:text-white">Business Outcome</p>
                      <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">{cs.outcome}</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl font-black mb-12 text-center text-neutral-900 dark:text-white">
            Industries We Serve
          </motion.h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {industries.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="p-5 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-center"
                >
                  <div className="w-11 h-11 mx-auto rounded-xl bg-gradient-to-br from-neutral-600 to-neutral-800 flex items-center justify-center mb-3">
                    <Icon size={20} className="text-white" />
                  </div>
                  <h3 className="text-sm font-bold mb-1 text-neutral-900 dark:text-white">{ind.title}</h3>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">{ind.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Implementation Process */}
      <section className="py-20 px-4 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="max-w-4xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl font-black mb-12 text-center text-neutral-900 dark:text-white">
            AI Implementation Process
          </motion.h2>
          <div className="space-y-6">
            {implementationSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex gap-6 p-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 flex items-center justify-center font-bold text-lg">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1 text-neutral-900 dark:text-white">{step.title}</h3>
                  <p className="text-neutral-600 dark:text-neutral-400">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
