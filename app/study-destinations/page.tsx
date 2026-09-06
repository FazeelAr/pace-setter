'use client';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { MapPin, Users, DollarSign, GraduationCap, Briefcase, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const destinations = [
  {
    name: "New Zealand",
    flag: "🇳🇿",
    universities: "20+",
    students: "600+",
    programs: "1000+",
    costs: "$15-25K/year",
    highlights: ["Work While Studying", "High Quality of Life", "Post-Study Options"],
    description: "Experience internationally respected education in a safe and welcoming country."
  },
  {
    name: "Europe",
    flag: "🇪🇺",
    universities: "1000+",
    students: "8K+",
    programs: "20000+",
    costs: "$5-25K/year",
    highlights: ["Affordable Tuition", "English-Taught Programs", "Multiple Countries"],
    description: "Explore diverse study opportunities across leading European universities."
  },
  {
    name: "Australia",
    flag: "🇦🇺",
    universities: "43",
    students: "2.5K+",
    programs: "5000+",
    costs: "$15-28K/year",
    highlights: ["Work While Studying", "Globally Ranked Universities", "Post-Study Options"],
    description: "Study at leading universities in a welcoming country with a great lifestyle."
  },
  {
    name: "United Kingdom",
    flag: "🇬🇧",
    universities: "150+",
    students: "4.5K+",
    programs: "3000+",
    costs: "$15-30K/year",
    highlights: ["Russell Group Universities", "1-2 Year Masters", "Post-Study Work Options"],
    description: "Study at world-renowned universities such as Oxford, Cambridge, and LSE."
  },
  {
    name: "Turkey",
    flag: "🇹🇷",
    universities: "200+",
    students: "1.2K+",
    programs: "5000+",
    costs: "$3-12K/year",
    highlights: ["Affordable Tuition", "Scholarship Opportunities", "Rich Culture"],
    description: "Build your future with affordable, high-quality education at the crossroads of Europe and Asia."
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function StudyDestinations() {
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
            Study <span className="text-accent underline decoration-4 underline-offset-8">Destinations</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-base text-white/90 max-w-2xl mx-auto"
          >
            Explore opportunities across 65+ countries worldwide. Find your perfect study destination.
          </motion.p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="section-padding bg-gradient-to-r from-slate-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3"></div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { number: "65+", label: "Study Destinations", icon: "🌍" },
              { number: "3000+", label: "Partner Universities", icon: "🏫" },
              { number: "100K+", label: "Students Placed", icon: "👥" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-2xl shadow-md border border-slate-100 hover:border-accent/30 hover:shadow-lg transition-all"
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <p className="text-2xl font-bold text-accent mb-1">{stat.number}</p>
                <p className="text-slate-600 font-semibold text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 text-center">
            <p className="text-slate-700 font-semibold">
              <span className="text-blue-600">💡 Tip:</span> Not sure which country to choose? Our expert counselors can help you find the perfect destination based on your goals, budget, and profile.
            </p>
            <Link href="/contact" className="text-accent font-bold mt-3 inline-flex items-center gap-2 hover:gap-3 transition-all">
              Get Free Consultation <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-x-1/3 translate-y-1/3"></div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent font-black tracking-[0.2em] uppercase border-l-4 border-accent pl-4 text-xs inline-block">Popular Choices</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 leading-tight">Top Study Destinations</h2>
            <p className="text-slate-600 mt-4 text-sm md:text-base max-w-2xl mx-auto">
              Explore our featured destinations with detailed information about universities, costs, and opportunities.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {destinations.map((destination, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:border-accent/30 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                {/* Header with Flag */}
                <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 border-b border-slate-100">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-5xl mb-2">{destination.flag}</div>
                      <h3 className="text-2xl font-bold text-primary group-hover:text-accent transition-colors">
                        {destination.name}
                      </h3>
                    </div>
                    <div className="text-right text-sm text-slate-600 font-semibold">
                      {destination.universities}<br />Universities
                    </div>
                  </div>
                  <p className="text-slate-700 mt-4 text-sm leading-relaxed">
                    {destination.description}
                  </p>
                </div>

                {/* Stats */}
                <div className="p-6 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-50 rounded-xl p-4">
                      <div className="flex items-center gap-2 text-accent font-bold text-sm mb-1">
                        <Users size={16} />
                        Students
                      </div>
                      <p className="text-xl font-bold text-primary">{destination.students}</p>
                    </div>
                    <div className="bg-slate-50 rounded-xl p-4">
                      <div className="flex items-center gap-2 text-accent font-bold text-sm mb-1">
                        <DollarSign size={16} />
                        Costs
                      </div>
                      <p className="text-xl font-bold text-primary">{destination.costs}</p>
                    </div>
                  </div>

                  <div className="bg-slate-50 rounded-xl p-4">
                    <div className="flex items-center gap-2 text-accent font-bold text-sm mb-2">
                      <GraduationCap size={16} />
                      Programs Available
                    </div>
                    <p className="text-xl font-bold text-primary">{destination.programs}</p>
                  </div>

                  {/* Highlights */}
                  <div className="border-t border-slate-100 pt-4">
                    <div className="font-bold text-primary text-sm mb-3">Key Benefits</div>
                    <div className="space-y-2">
                      {destination.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-slate-700">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="px-6 pb-6">
                  <Link
                    href="/contact"
                    className="w-full bg-accent text-primary px-4 py-2 rounded-xl font-bold hover:bg-accent/90 transition-all text-center inline-flex items-center justify-center gap-2 group text-sm"
                  >
                    Learn More <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="section-padding bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3"></div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent font-black tracking-[0.2em] uppercase border-l-4 border-accent pl-4 text-xs inline-block">Choose Wisely</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 leading-tight">How to Choose Your Destination</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🎯",
                title: "Career Goals",
                desc: "Consider which country offers the best career opportunities in your field"
              },
              {
                icon: "💰",
                title: "Budget",
                desc: "Balance tuition fees, living costs, and financial aid/scholarship options"
              },
              {
                icon: "📚",
                title: "Programs",
                desc: "Check university rankings and program quality in your area of study"
              },
              {
                icon: "🏠",
                title: "Lifestyle",
                desc: "Consider climate, culture, cost of living, and social environment"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 hover:border-accent/30 hover:shadow-lg transition-all text-center group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h4 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">{item.title}</h4>
                <p className="text-sm text-slate-600">{item.desc}</p>
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
            Find Your Perfect Destination
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/90 max-w-2xl mx-auto text-base md:text-lg"
          >
            Our experts will help you choose the right destination based on your goals, budget, and academic profile.
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
              Start Your Journey <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://wa.me/923128188146"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-3 rounded-xl font-bold hover:bg-white hover:text-primary transition-all inline-flex items-center gap-2 group"
            >
              Chat on WhatsApp <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
