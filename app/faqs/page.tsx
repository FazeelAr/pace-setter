'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { HelpCircle, MessageCircle, ChevronRight } from 'lucide-react';
import FAQComponent from '@/components/FAQComponent';
import Link from 'next/link';

export default function FAQPage() {
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
            Frequently Asked <span className="text-accent underline decoration-4 underline-offset-8">Questions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-base text-white/90 max-w-2xl mx-auto"
          >
            Find answers to common questions about your study abroad journey.
          </motion.p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="section-padding bg-gradient-to-r from-slate-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3"></div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { number: "50+", label: "FAQs Answered", icon: "❓" },
              { number: "24/7", label: "Support Available", icon: "💬" },
              { number: "95%+", label: "Success Rate", icon: "✅" },
              { number: "2.2M+", label: "Students Guided", icon: "👥" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-2xl shadow-md border border-slate-100 hover:border-accent/30 hover:shadow-lg transition-all group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{stat.icon}</div>
                <p className="text-2xl font-bold text-accent mb-1">{stat.number}</p>
                <p className="text-slate-600 font-semibold text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-x-1/3 translate-y-1/3"></div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent font-black tracking-[0.2em] uppercase border-l-4 border-accent pl-4 text-xs inline-block">Got Questions?</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 leading-tight">Everything You Need to Know</h2>
            <p className="text-slate-600 mt-4 text-sm md:text-base max-w-2xl mx-auto">
              Browse through our comprehensive FAQ section organized by category. Can't find your answer? Contact our team anytime.
            </p>
          </motion.div>

          <FAQComponent />
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="section-padding bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3"></div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-slate-100 relative overflow-hidden"
          >
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-accent/5 rounded-full blur-2xl"></div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">Still Have Questions?</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Our expert counselors are ready to answer any specific questions about your profile, program selection, visa process, or financial planning. Get personalized guidance tailored to your situation.
                </p>
                <div className="space-y-3">
                  {[
                    "One-on-one consultation",
                    "Personalized guidance",
                    "Free assessment & counseling",
                    "Expert visa tips"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 text-slate-700">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="font-medium text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <Link
                  href="/contact"
                  className="w-full bg-accent text-primary px-8 py-4 rounded-xl font-bold hover:bg-accent/90 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
                >
                  <HelpCircle size={20} />
                  Schedule Free Consultation
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="https://wa.me/923128188146"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-green-600 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
                >
                  <MessageCircle size={20} />
                  Chat on WhatsApp
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Overview */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3"></div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">Browse by Category</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Getting Started",
                desc: "Learn about timing, costs, and how we can help",
                icon: "🚀",
                topics: ["Best time to start", "Service costs", "Covered destinations"]
              },
              {
                title: "Applications",
                desc: "Documents, deadlines, and application tips",
                icon: "📝",
                topics: ["Required documents", "Profile requirements", "Timeline"]
              },
              {
                title: "Visa & Immigration",
                desc: "Visa process, timelines, and interview prep",
                icon: "🛂",
                topics: ["Visa processing", "Interview tips", "Document requirements"]
              },
              {
                title: "Funding & Scholarships",
                desc: "Scholarships, financial aid, and work options",
                icon: "💰",
                topics: ["Available scholarships", "Financial aid", "Work opportunities"]
              },
              {
                title: "Post-Arrival Support",
                desc: "Accommodation, career, and ongoing support",
                icon: "🏠",
                topics: ["Accommodation", "Career help", "24/7 support"]
              },
              {
                title: "General Queries",
                desc: "Other questions about our services",
                icon: "❓",
                topics: ["Services", "Our experience", "Success rates"]
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-accent/30 hover:shadow-lg transition-all group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{category.icon}</div>
                <h4 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors text-lg">{category.title}</h4>
                <p className="text-slate-600 text-sm mb-4">{category.desc}</p>
                <ul className="space-y-1">
                  {category.topics.map((topic, i) => (
                    <li key={i} className="text-xs text-slate-500 flex items-center gap-2">
                      <span className="w-1 h-1 bg-accent rounded-full"></span>
                      {topic}
                    </li>
                  ))}
                </ul>
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
            Ready for Personalized Guidance?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/90 max-w-2xl mx-auto text-base md:text-lg"
          >
            Connect with our expert counselors for a free consultation tailored to your dreams and profile.
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
              Book Consultation <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://wa.me/923128188146"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-3 rounded-xl font-bold hover:bg-white hover:text-primary transition-all inline-flex items-center gap-2 group"
            >
              WhatsApp Chat <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
