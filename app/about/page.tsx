'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Target, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-primary py-8 md:py-12 lg:py-14 text-white relative overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.15 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          <Image 
            src="/pacesetter_hero.png" 
            alt="Background" 
            fill 
            sizes="100vw"
            className="object-cover"
            priority
          />
        </motion.div>
        
        <div className="container-custom relative z-10 text-center space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold tracking-tighter"
          >
            Our <span className="text-accent underline decoration-4 underline-offset-8">Legacy</span>.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-base text-white/90 max-w-2xl mx-auto"
          >
            Building bridges between local talent and global opportunities since 2014.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-3">
              <span className="text-accent font-black tracking-[0.2em] uppercase border-l-4 border-accent pl-4 text-xs">Founded in Excellence</span>
              <h2 className="text-2xl md:text-3xl font-bold text-primary leading-tight">Built on Trust, <br />Driven by Results.</h2>
            </div>
            <div className="space-y-4">
              <p className="text-base text-slate-800 leading-relaxed italic border-l-4 border-slate-100 pl-4">
                &quot;We started with a simple belief: that every ambitious individual deserves an expert partner in their global journey.&quot;
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Founded with a vision to bridge the gap between local talent and global opportunities, Pace Setter International has grown into a premier consultancy firm. Our team consists of former university admissions officers, certified career coaches, and visa specialists.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 pt-2">
              <div className="p-5 md:p-6 bg-slate-50 rounded-2xl border border-slate-100 group hover:bg-primary transition-all duration-500">
                <div className="text-3xl font-black text-accent mb-1">10y+</div>
                <p className="text-primary font-bold group-hover:text-white transition-colors text-sm">Market Leadership</p>
              </div>
              <div className="p-5 md:p-6 bg-slate-50 rounded-2xl border border-slate-100 group hover:bg-primary transition-all duration-500">
                <div className="text-3xl font-black text-accent mb-1">99%</div>
                <p className="text-primary font-bold group-hover:text-white transition-colors text-sm">Visa Success Rate</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[360px] sm:h-[400px] lg:h-[450px] rounded-3xl overflow-hidden shadow-3xl border-[8px] border-slate-50 lg:rotate-2 hover:rotate-0 transition-all duration-700 group"
          >
            <Image 
              src="/team.png" 
              alt="Our Team" 
              fill 
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-1000"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-primary/5"></div>
            <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 bg-white/95 backdrop-blur-md p-4 md:p-6 rounded-2xl shadow-2xl border border-white/20">
               <p className="text-primary font-bold text-sm md:text-lg italic">&quot;Integrity is the core of our consultancy. We don&apos;t just process files; we build futures.&quot;</p>
               <p className="text-accent font-black mt-2 md:mt-3 uppercase tracking-widest text-[10px] md:text-xs">— CEO, Pace Setter International</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-primary relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="text-center space-y-4 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white">Our Core Values</h2>
            <div className="w-16 h-1 bg-accent mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Transparency", icon: <ShieldCheck className="text-accent" size={40} />, desc: "No hidden fees, no false promises. Just honest, expert guidance throughout your journey." },
              { title: "Personalization", icon: <Target className="text-accent" size={40} />, desc: "Every student is unique. We tailor our strategy to your specific academic and career goals." },
              { title: "Excellence", icon: <Award className="text-accent" size={40} />, desc: "We strive for the highest standards in global university and student visa placements." }
            ].map((value, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 md:p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="mb-4 group-hover:scale-110 transition-transform">{value.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-sm text-white/90 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Intro */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom text-center space-y-12">
          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">Meet Our Leadership</h2>
            <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto italic">&quot;Expertise you can trust.&quot;</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {[
              { 
                role: "CEO & Founder", 
                responsibilities: "Drives the strategic vision of Pace Setter International, building global partnerships with top-tier universities and ensuring overall operational excellence." 
              },
              { 
                role: "Head of Global Strategy", 
                responsibilities: "Oversees university alliances, evaluates global academic trends, and designs specialized study abroad pathways for students." 
              },
              { 
                role: "Operations Director & Visa Specialist", 
                responsibilities: "Manages the visa processing division, ensures compliance with international immigration guidelines, and maintains our 99% success rate." 
              }
            ].map((member, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col justify-between text-left relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1.5 bg-accent"></div>
                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent">Leadership Role</span>
                    <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors duration-300 mt-1">
                      {member.role}
                    </h3>
                  </div>
                  <div className="h-px bg-slate-100 w-full"></div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {member.responsibilities}
                  </p>
                </div>
                <div className="mt-6 flex items-center justify-between text-primary/40 group-hover:text-accent transition-colors">
                  <span className="text-[9px] font-black uppercase tracking-widest">Pace Setter Executive</span>
                  <span className="text-lg">→</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
