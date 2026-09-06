'use client';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const steps = [
  {
    number: 1,
    title: "Select Your Program",
    description: "Explore thousands of programs across 65+ countries. Our experts help you find the perfect match for your academic goals and career aspirations.",
    icon: "🎓"
  },
  {
    number: 2,
    title: "Submit Application",
    description: "We guide you through the entire application process with documentation, essays, and recommendation letters tailored to each university.",
    icon: "📝"
  },
  {
    number: 3,
    title: "Receive Offer Letter",
    description: "Get accepted to your dream universities. We work with you to compare offers and select the best opportunity for your future.",
    icon: "✉️"
  },
  {
    number: 4,
    title: "Fulfill Conditions",
    description: "Meet any conditional requirements like language proficiency tests or additional documentation with our comprehensive support.",
    icon: "✅"
  },
  {
    number: 5,
    title: "Pay Tuition Deposit",
    description: "We assist with payment processing and financial planning, including scholarship and funding opportunities discussion.",
    icon: "💳"
  },
  {
    number: 6,
    title: "Get Unconditional Offer",
    description: "Secure your unconditional admission with all conditions met. Your acceptance is now confirmed and finalized.",
    icon: "🎉"
  },
  {
    number: 7,
    title: "Apply For Visa",
    description: "Expert visa guidance for UK, USA, Canada, Australia, and 60+ destinations. We handle documentation and interview preparation.",
    icon: "🛂"
  },
  {
    number: 8,
    title: "Start Your Program",
    description: "Begin your international education journey! Pre-arrival support, accommodation help, and ongoing mentorship throughout your studies.",
    icon: "🚀"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function HowItWorks() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-primary py-8 md:py-12 lg:py-14 text-white relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.15, scale: 1 }}
          className="absolute inset-0"
        >
          <Image src="/pacesetter_hero.png" alt="Background" fill className="object-cover" priority loading="eager" />
        </motion.div>
        <div className="container-custom relative z-10 text-center space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold tracking-tighter"
          >
            Your Journey to <span className="text-accent underline decoration-4 underline-offset-8">Global Success</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-base text-white/90 max-w-2xl mx-auto"
          >
            We guide you through every step of your study abroad journey—from program selection to visa approval and beyond.
          </motion.p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-x-1/3 translate-y-1/3"></div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent font-black tracking-[0.2em] uppercase border-l-4 border-accent pl-4 text-xs inline-block">The Process</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 leading-tight">8 Simple Steps to Your Dream University</h2>
            <p className="text-slate-600 mt-4 text-sm md:text-base max-w-2xl mx-auto">
              Follow our proven process designed by experts with 22+ years of international education experience.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={itemVariants}
                className="relative"
              >
                {/* Connector Line */}
                {index < steps.length - 1 && index % 4 !== 3 && (
                  <div className="hidden lg:block absolute top-24 -right-3 w-6 h-1 bg-gradient-to-r from-accent to-accent/30"></div>
                )}
                {index < steps.length - 1 && index % 4 === 3 && (
                  <div className="hidden lg:block absolute -bottom-16 left-1/2 w-1 h-16 bg-gradient-to-b from-accent to-accent/30 -translate-x-1/2"></div>
                )}

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:border-accent/30 hover:shadow-xl transition-all duration-300 h-full group">
                  {/* Step Number Badge */}
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/70 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 shadow-lg group-hover:scale-110 transition-transform">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="text-5xl mb-4">{step.icon}</div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Checkmark */}
                  <div className="mt-4 flex items-center gap-2 text-accent font-semibold text-sm">
                    <CheckCircle size={16} />
                    <span>Step Complete</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline View */}
      <section className="section-padding bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3"></div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent font-black tracking-[0.2em] uppercase border-l-4 border-accent pl-4 text-xs inline-block">Timeline</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 leading-tight">Typical Journey Timeline</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="relative space-y-8">
              {/* Vertical Timeline Line */}
              <div className="hidden md:block absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-accent/50 to-accent/30"></div>

              {[
                { duration: "Months 1-2", title: "Program Selection & Planning", desc: "Research universities, shortlist programs, and plan your application strategy." },
                { duration: "Months 2-4", title: "Application Submission", desc: "Complete applications, submit documents, and await acceptance responses." },
                { duration: "Months 4-5", title: "Offers & Conditions", desc: "Receive conditional offers and work on fulfilling any outstanding requirements." },
                { duration: "Months 5-6", title: "Financial Arrangements", desc: "Pay deposits and finalize scholarship/funding arrangements." },
                { duration: "Months 6-8", title: "Visa Application", desc: "Prepare visa documents and submit applications to relevant embassies." },
                { duration: "Month 8-9", title: "Visa Approval", desc: "Receive visa approval and complete final pre-departure arrangements." },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 md:gap-12 relative"
                >
                  {/* Timeline Dot */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-4 h-4 bg-accent rounded-full shadow-lg border-4 border-white"></div>
                  </div>

                  {/* Content */}
                  <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 flex-1 hover:shadow-lg transition-all">
                    <p className="text-accent font-black text-sm tracking-widest uppercase mb-2">{item.duration}</p>
                    <h4 className="text-lg font-bold text-primary mb-2">{item.title}</h4>
                    <p className="text-slate-600 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Our Process Works */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3"></div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent font-black tracking-[0.2em] uppercase border-l-4 border-accent pl-4 text-xs inline-block">Our Approach</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 leading-tight">Why Our Process Works</h2>
            <p className="text-slate-600 mt-4 text-sm md:text-base max-w-2xl mx-auto">
              Our systematic approach has helped 2.2M+ students achieve their global education dreams.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Guidance",
                desc: "22+ years of international education experience with certified counselors.",
                icon: "👨‍🎓"
              },
              {
                title: "1000+ University Partners",
                desc: "Direct partnerships with top-ranked institutions worldwide.",
                icon: "🏫"
              },
              {
                title: "Proven Track Record",
                desc: "2.2M+ students successfully guided through their journey.",
                icon: "🏆"
              },
              {
                title: "24/7 Support",
                desc: "Continuous mentorship from application to arrival.",
                icon: "💬"
              },
              {
                title: "Global Network",
                desc: "40+ offices across the globe with local expertise.",
                icon: "🌍"
              },
              {
                title: "Personalized Plans",
                desc: "Customized guidance tailored to your goals and profile.",
                icon: "📋"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-accent/30 hover:shadow-lg transition-all group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h4 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">{item.title}</h4>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary/90 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2"></div>

        <div className="container-custom relative z-10 text-center space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold"
          >
            Ready to Start Your Journey?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/90 max-w-2xl mx-auto text-base md:text-lg"
          >
            Get personalized counseling from our experts today and take the first step toward your dream education.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <Link
              href="/contact"
              className="bg-accent text-primary px-8 py-3 rounded-xl font-bold hover:bg-accent/90 transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2 group"
            >
              Start Your Assessment <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://wa.me/923128188146"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-3 rounded-xl font-bold hover:bg-white hover:text-primary transition-all inline-flex items-center gap-2 group"
            >
              Chat with WhatsApp <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
