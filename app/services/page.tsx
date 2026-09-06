'use client';

import Image from "next/image";
import ServiceCard from "@/components/ServiceCard";
import Link from "next/link";
import { motion } from "framer-motion";
import { FileCheck, GraduationCap, Briefcase, BookOpen, Coins, Home, ChevronRight } from "lucide-react";

export default function ServicesPage() {
  const allServices = [
    {
      title: "Student Visa Assistance",
      description: "Comprehensive guidance on student visa requirements for UK, USA, Canada, Australia, and Europe. We ensure 99% success rate.",
      icon: <FileCheck className="text-accent" size={28} />,
      image: "/service_1.jpg"
    },
    {
      title: "University Admissions",
      description: "Direct partnerships with 500+ top global universities. We handle the entire application process from start to finish.",
      icon: <GraduationCap className="text-accent" size={28} />,
      image: "/service_2.jpg"
    },
    {
      title: "Career Guidance",
      description: "Professional resume building and interview coaching from certified experts to help you land your dream job abroad.",
      icon: <Briefcase className="text-accent" size={28} />,
      image: "/service_3.jpg"
    },
    {
      title: "IELTS/TOEFL Preparation",
      description: "Result-oriented training programs with certified instructors and mock tests to help you achieve your desired band score.",
      icon: <BookOpen className="text-accent" size={28} />,
      image: "/service_4.png"
    },
    {
      title: "Scholarship Assistance",
      description: "Finding and applying for merit-based and need-based scholarships to make your international education affordable.",
      icon: <Coins className="text-accent" size={28} />,
      image: "/service_5.jpg"
    },
    {
      title: "Settlement Services",
      description: "Beyond admissions: we help with accommodation, bank accounts, and local orientation in your destination country.",
      icon: <Home className="text-accent" size={28} />,
      image: "/service_6.jpg"
    }
  ];

  const destinations = [
    {
      name: "United Kingdom",
      description: "Home to world-class institutions like Oxford and Cambridge, offering a rich academic heritage and diverse culture.",
      tag: "Top Choice",
      image: "/dest_uk.png"
    },
    {
      name: "United States",
      description: "The land of opportunity with a vast range of universities and innovative programs tailored to every career goal.",
      tag: "Most Popular",
      image: "/dest_usa.png"
    },
    {
      name: "Canada",
      description: "Known for its high quality of life, friendly environment, and excellent post-graduation work opportunities.",
      tag: "Best Quality of Life",
      image: "/dest_canada.png"
    },
    {
      name: "Europe",
      description: "Explore diverse cultures and affordable education in countries across the continent, from Germany to France.",
      tag: "Cultural Diversity",
      image: "/dest_europe.jpg"
    },
    {
      name: "New Zealand",
      description: "A breathtaking destination offering high-quality education and a unique focus on practical, hands-on learning.",
      tag: "Nature & Adventure",
      image: "/dest_nz.jpg"
    }
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-primary py-8 md:py-12 lg:py-14 text-white relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
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
        
        {/* Animated Orbs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2"></div>

        <div className="container-custom relative z-10 text-center space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold tracking-tight"
          >
            Global <span className="text-accent">Excellence</span>,<br />Local Expertise.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-base text-white/90 max-w-3xl mx-auto"
          >
            We provide specialized consultancy services designed to help students and professionals excel on the global stage.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white relative">
        <div className="container-custom">
          <div className="text-center space-y-3 mb-12">
             <span className="text-accent font-black tracking-widest uppercase text-xs">Our Expertise</span>
             <h2 className="text-2xl md:text-3xl font-bold text-primary tracking-tight">Core Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {allServices.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} priority={index < 3} />
            ))}
          </div>
        </div>
      </section>

      {/* Study Destinations Section */}
      <section className="section-padding bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3"></div>
        
        <div className="container-custom relative z-10">
          <div className="text-center space-y-3 mb-12">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-primary tracking-tighter"
            >
              Study <span className="text-accent">Destinations</span>
            </motion.h2>
            <p className="text-sm md:text-base text-slate-700 max-w-2xl mx-auto">Explore the world&apos;s most prestigious academic hubs with our expert guidance.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {destinations.map((dest, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative h-[300px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary-dark via-secondary to-secondary-light border border-slate-100"
              >
                <Image src={dest.image} alt={dest.name} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" className="object-cover group-hover:scale-105 transition-transform duration-700" priority={i < 2} loading={i < 2 ? "eager" : "lazy"} />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-light/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                
                <div className="absolute top-4 right-4">
                   <span className="px-3 py-1 bg-accent text-primary text-[9px] font-black uppercase tracking-widest rounded-full shadow-lg">
                      {dest.tag}
                   </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2">
                  <h3 className="text-lg md:text-xl font-bold text-white">{dest.name}</h3>
                  <p className="text-xs text-white/90 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2">
                    {dest.description}
                  </p>
                  <div className="pt-1">
                    <Link href="/contact">
                      <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-accent font-bold text-[10px] uppercase tracking-widest flex items-center gap-2 group/btn"
                      >
                        Learn More <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Process Section */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="text-center space-y-3 mb-12">
            <motion.h2 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-primary tracking-tight"
            >
              The Path to Your Future
            </motion.h2>
            <p className="text-sm md:text-base text-slate-700 max-w-2xl mx-auto">Our proven methodology ensures your success every step of the way.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>
            
            {[
              { step: "01", title: "Free Consultation", desc: "Start with a 1-on-1 session to discuss your dreams." },
              { step: "02", title: "Profile Building", desc: "Enhance your profile for top university acceptance." },
              { step: "03", title: "Documentation", desc: "Expert handling of applications and visa files." },
              { step: "04", title: "Destination", desc: "Fly to your destination with total confidence." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative z-10 p-6 bg-white rounded-2xl shadow-sm border border-slate-100 space-y-4 hover:shadow-xl transition-all duration-500 group"
              >
                <div className="w-12 h-12 bg-primary text-white rounded-xl flex items-center justify-center font-bold text-lg group-hover:bg-accent transition-colors shadow-lg shadow-primary/20">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-primary">{item.title}</h3>
                <p className="text-slate-700 leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* High-Impact CTA */}
      <section className="py-10 md:py-12 lg:py-14 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-accent/5 pointer-events-none"></div>
        <div className="container-custom text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8 max-w-4xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
              Ready to <span className="text-accent underline decoration-4 underline-offset-8">Transform</span> Your Life?
            </h2>
              <p className="text-sm md:text-base text-white/90 leading-relaxed">
              Join thousands of successful students who have achieved their dreams with Pace Setter International. Your journey starts with a single click.
            </p>
            <Link href="/contact">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-accent text-white hover:text-primary px-6 py-3 rounded-full font-bold text-sm md:text-base shadow-[0_20px_50px_rgba(22,163,74,0.25)] hover:bg-white transition-all flex items-center justify-center gap-3 mx-auto"
              >
                Start Free Assessment <ChevronRight size={18} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
