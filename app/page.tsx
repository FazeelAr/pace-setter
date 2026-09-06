'use client';

import { useRef } from "react";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  FileCheck,
  GraduationCap,
  Briefcase,
  Compass,
  Building2,
  Users,
  CheckCircle,
  Library,
  Trophy,
  Rocket,
  ChevronRight
} from "lucide-react";

export default function Home() {
  const featuredServices = [
    {
      title: "Student Visa Counseling",
      description: "Expert guidance on visa applications and legal documentation for top global destinations like UK, USA, and Canada.",
      icon: <FileCheck className="text-accent" size={28} />,
      image: "/service_visa.jpg"
    },
    {
      title: "Global University Selection",
      description: "Access to 500+ top-tier global universities to find the perfect academic match for your future career.",
      icon: <GraduationCap className="text-accent" size={28} />,
      image: "/service_univ.jpg"
    },
    {
      title: "Career & Profile Coaching",
      description: "Professional coaching and profile building to help you land high-paying roles in competitive international markets.",
      icon: <Briefcase className="text-accent" size={28} />,
      image: "/service_career.jpg"
    }
  ];

  // Scroll refs for each section
  const servicesRef = useRef<HTMLElement>(null);
  const trustRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);

  // Services section scroll
  const { scrollYProgress: servicesProgress } = useScroll({
    target: servicesRef,
    offset: ["start end", "end start"]
  });
  const servicesHeaderY = useTransform(servicesProgress, [0, 0.3], [60, 0]);
  const servicesHeaderOpacity = useTransform(servicesProgress, [0, 0.25], [0, 1]);

  // Trust section scroll
  const { scrollYProgress: trustProgress } = useScroll({
    target: trustRef,
    offset: ["start end", "end start"]
  });
  const trustImageX = useTransform(trustProgress, [0, 0.5], [-80, 0]);
  const trustImageScale = useTransform(trustProgress, [0, 0.4], [0.85, 1]);
  const trustTextX = useTransform(trustProgress, [0, 0.5], [80, 0]);
  const trustOpacity = useTransform(trustProgress, [0, 0.3], [0, 1]);

  const smoothTrustImageX = useSpring(trustImageX, { stiffness: 80, damping: 25 });
  const smoothTrustTextX = useSpring(trustTextX, { stiffness: 80, damping: 25 });

  // Stats section scroll
  const { scrollYProgress: statsProgress } = useScroll({
    target: statsRef,
    offset: ["start end", "end start"]
  });
  const statsScale = useTransform(statsProgress, [0, 0.4], [0.9, 1]);
  const statsOpacity = useTransform(statsProgress, [0, 0.3], [0, 1]);

  // CTA section scroll
  const { scrollYProgress: ctaProgress } = useScroll({
    target: ctaRef,
    offset: ["start end", "end start"]
  });
  const ctaY = useTransform(ctaProgress, [0, 0.5], [100, 0]);
  const ctaScale = useTransform(ctaProgress, [0, 0.4], [0.85, 1]);
  const ctaOpacity = useTransform(ctaProgress, [0, 0.3], [0, 1]);
  const smoothCtaY = useSpring(ctaY, { stiffness: 80, damping: 25 });

  return (
    <main>
      <Hero />

      {/* Dynamic Services Overview */}
      <section ref={servicesRef} style={{ position: "relative" }} className="section-padding bg-slate-50 relative overflow-hidden">
        {/* Animated Background Element */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>

        <div className="container-custom relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
            <motion.div
              style={{ y: servicesHeaderY, opacity: servicesHeaderOpacity }}
              className="space-y-3 w-full md:w-auto"
            >
              <span className="text-accent font-black tracking-widest uppercase text-xs">Global Expertise</span>
              <h2 className="text-2xl md:text-3xl font-bold text-primary leading-tight">Premier Study <br /> Abroad Solutions</h2>
            </motion.div>
            <motion.div
              style={{ opacity: servicesHeaderOpacity }}
            >
              <Link href="/services" className="group flex items-center gap-3 font-bold text-primary hover:text-accent transition-colors text-sm">
                Discover All Services
                <span className="w-8 h-8 bg-white shadow-sm rounded-full flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all text-xs">→</span>
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {featuredServices.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} priority={index === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section with Scroll Animations */}
      <section ref={trustRef} style={{ position: "relative" }} className="section-padding bg-white relative overflow-hidden">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            style={{ x: smoothTrustImageX, scale: trustImageScale, opacity: trustOpacity }}
            className="relative h-[300px] rounded-2xl overflow-hidden shadow-3xl border border-slate-100 group bg-gradient-to-br from-primary-dark via-secondary to-secondary-light"
          >
            <Image src="/trust_section.png" alt="Trust Section" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-primary/10"></div>
          </motion.div>

          <motion.div style={{ x: smoothTrustTextX, opacity: trustOpacity }} className="space-y-8">
            <div className="space-y-4">
              <span className="text-accent font-black tracking-widest uppercase border-b-2 border-accent pb-1 text-xs">Why Partner With Us?</span>
              <h2 className="text-2xl md:text-3xl font-bold text-primary leading-tight">Your Dreams Are <br /> Our Mission.</h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                We don&apos;t just process applications; we architect global careers. With Pace Setter International, you&apos;re not a case number—you&apos;re a success story in the making.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { title: "Strategic Study Roadmap", desc: "We build a personalized 5-year academic plan for your global success and career growth.", icon: <Compass className="text-accent" size={20} /> },
                { title: "Direct University Access", desc: "Preferred partnerships with 500+ top-tier institutions worldwide for faster admissions.", icon: <Building2 className="text-accent" size={20} /> },
                { title: "Elite Alumni Network", desc: "Join a community of successful Pace Setter alumni thriving in careers across the globe.", icon: <Users className="text-accent" size={20} /> }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="flex gap-4 group"
                >
                  <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-sm shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-primary group-hover:text-accent transition-colors">{item.title}</h4>
                    <p className="text-slate-700 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Success Stories Section */}
      <Testimonials />

      {/* Why Choose Us Stats Section */}
      <WhyChooseUs />

      {/* Modern Stats Section */}
      <section ref={statsRef} style={{ position: "relative" }} className="py-12 md:py-16 bg-primary relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>
        <div className="container-custom grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
          {[
            { label: "Visas Approved", val: "5k+", icon: <CheckCircle className="text-accent mx-auto" size={24} /> },
            { label: "Partner Universities", val: "500+", icon: <Library className="text-accent mx-auto" size={24} /> },
            { label: "Years Excellence", val: "10+", icon: <Trophy className="text-accent mx-auto" size={24} /> },
            { label: "Success Rate", val: "99%", icon: <Rocket className="text-accent mx-auto" size={24} /> }
          ].map((stat, i) => (
            <motion.div
              key={i}
              style={{ scale: statsScale, opacity: statsOpacity }}
              className="space-y-3"
            >
              <div className="mb-2">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-black text-white">{stat.val}</div>
              <div className="text-white/80 font-black uppercase tracking-[0.2em] text-[9px] md:text-[10px]">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Cinematic CTA */}
      <section ref={ctaRef} style={{ position: "relative" }} className="section-padding bg-slate-50 relative">
        <div className="container-custom">
          <motion.div
            style={{ y: smoothCtaY, scale: ctaScale, opacity: ctaOpacity }}
            className="bg-primary rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden shadow-[0_50px_100px_rgba(3,43,90,0.25)]"
          >
            <div className="absolute inset-0 bg-accent/5 mix-blend-overlay"></div>
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/20 rounded-full blur-[100px]"></div>
            <div className="relative z-10 space-y-8 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
                Ready to Claim Your <span className="text-accent">Global</span> Future?
              </h2>
              <p className="text-sm md:text-base text-white/90 font-medium leading-relaxed">
                Stop wishing. Start acting. Join the elite league of international students who chose Pace Setter International for their global journey.
              </p>
              <div className="pt-4">
                <Link href="/contact" className="px-6 py-3 bg-accent text-white hover:text-primary rounded-full font-bold text-sm md:text-base shadow-[0_20px_60px_rgba(2,132,199,0.28)] hover:bg-white hover:scale-105 transition-all duration-300 inline-flex items-center gap-3">
                  Start Your Journey Now <ChevronRight size={20} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
