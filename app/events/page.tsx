'use client';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { Calendar, MapPin, Users, Clock, ArrowRight, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const upcomingEvents = [
  {
    id: 1,
    title: "Grand Study Abroad Expo 2026",
    date: "September 15, 2026",
    time: "10:00 AM - 6:00 PM",
    location: "Lahore Convention Center",
    type: "EXPO",
    description: "Meet 50+ top universities from around the world. Get expert counseling and special admission offers.",
    attendees: "500+ Students",
    image: "🎓",
    highlights: [
      "Direct interaction with university representatives",
      "Free counseling sessions",
      "Visa & scholarship guidance",
      "Exclusive admission discounts"
    ]
  },
  {
    id: 2,
    title: "UK & USA Visa Masterclass",
    date: "September 20, 2026",
    time: "2:00 PM - 4:00 PM",
    location: "Pace Setter International Office",
    type: "WEBINAR",
    description: "Expert-led workshop on visa application strategies, interview preparation, and common mistakes to avoid.",
    attendees: "200+ Students",
    image: "🛂",
    highlights: [
      "Visa application strategies",
      "Interview preparation tips",
      "Document requirements",
      "Q&A with visa experts"
    ]
  },
  {
    id: 3,
    title: "Career After Study Abroad",
    date: "September 28, 2026",
    time: "3:00 PM - 5:00 PM",
    location: "Online via Zoom",
    type: "WORKSHOP",
    description: "Learn how to leverage your international degree for a successful career. Hear from successful alumni.",
    attendees: "300+ Students",
    image: "💼",
    highlights: [
      "Career planning after graduation",
      "Alumni success stories",
      "Job search strategies",
      "Professional networking"
    ]
  },
  {
    id: 4,
    title: "IELTS/TOEFL Preparation Bootcamp",
    date: "October 5, 2026",
    time: "9:00 AM - 12:00 PM",
    location: "Pace Setter Offices - Lahore, Karachi",
    type: "BOOTCAMP",
    description: "Intensive preparation for English language tests. Tips, tricks, and practice sessions included.",
    attendees: "150+ Students",
    image: "📚",
    highlights: [
      "Expert trainer guidance",
      "Practice tests & feedback",
      "Time management tips",
      "Speaking fluency tips"
    ]
  },
  {
    id: 5,
    title: "Scholarship Success Stories",
    date: "October 12, 2026",
    time: "6:00 PM - 7:30 PM",
    location: "Online via Zoom",
    type: "SEMINAR",
    description: "Hear from students who secured full scholarships. Learn their strategies and tips for success.",
    attendees: "400+ Students",
    image: "🎁",
    highlights: [
      "Full scholarship success stories",
      "Application writing tips",
      "Essay samples & feedback",
      "Networking with scholarship winners"
    ]
  },
  {
    id: 6,
    title: "Canada Study Visa Process",
    date: "October 18, 2026",
    time: "4:00 PM - 5:30 PM",
    location: "Pace Setter International Office",
    type: "SESSION",
    description: "Complete overview of Canadian student visa process including SOP, financial proofs, and interview tips.",
    attendees: "250+ Students",
    image: "🍁",
    highlights: [
      "Study Permit requirements",
      "Financial documentation",
      "Proof of funds explained",
      "Interview strategy"
    ]
  }
];

const pastEvents = [
  {
    title: "Summer Study Abroad Expo 2026",
    date: "August 20, 2026",
    attendees: "800+ Students",
    universities: "60+ Universities"
  },
  {
    title: "Master's in UK Webinar",
    date: "August 15, 2026",
    attendees: "350+ Students",
    universities: "Top 30 UK Universities"
  },
  {
    title: "Visa Success Workshop",
    date: "August 10, 2026",
    attendees: "500+ Students",
    universities: "Multiple Countries"
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

export default function EventsPage() {
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
            Events & <span className="text-accent underline decoration-4 underline-offset-8">Expos</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-base text-white/90 max-w-2xl mx-auto"
          >
            Join our upcoming events to meet university representatives, get expert guidance, and network with fellow students.
          </motion.p>
        </div>
      </section>

      {/* Upcoming Events */}
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
            <span className="text-accent font-black tracking-[0.2em] uppercase border-l-4 border-accent pl-4 text-xs inline-block">Coming Soon</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 leading-tight">Upcoming Events</h2>
            <p className="text-slate-600 mt-4 text-sm md:text-base max-w-2xl mx-auto">
              Don't miss out! Register for our upcoming events and connect with universities and experts.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                variants={itemVariants}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:border-accent/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 md:p-8">
                  {/* Icon & Type */}
                  <div className="md:col-span-1 flex flex-col items-start">
                    <div className="text-6xl mb-3 group-hover:scale-110 transition-transform">{event.image}</div>
                    <span className={`text-xs font-black tracking-widest uppercase px-3 py-1 rounded-full ${
                      event.type === 'EXPO' ? 'bg-yellow-100 text-yellow-700' :
                      event.type === 'WEBINAR' ? 'bg-blue-100 text-blue-700' :
                      event.type === 'WORKSHOP' ? 'bg-green-100 text-green-700' :
                      event.type === 'BOOTCAMP' ? 'bg-purple-100 text-purple-700' :
                      event.type === 'SEMINAR' ? 'bg-pink-100 text-pink-700' :
                      'bg-orange-100 text-orange-700'
                    }`}>
                      {event.type}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-2 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-slate-700 text-sm leading-relaxed">
                        {event.description}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-3 text-slate-600 text-sm">
                        <Calendar size={16} className="text-accent" />
                        <span className="font-semibold">{event.date}</span>
                      </div>
                      <div className="flex items-center gap-3 text-slate-600 text-sm">
                        <Clock size={16} className="text-accent" />
                        <span className="font-semibold">{event.time}</span>
                      </div>
                      <div className="flex items-center gap-3 text-slate-600 text-sm">
                        <MapPin size={16} className="text-accent" />
                        <span className="font-semibold">{event.location}</span>
                      </div>
                      <div className="flex items-center gap-3 text-slate-600 text-sm">
                        <Users size={16} className="text-accent" />
                        <span className="font-semibold">{event.attendees}</span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="pt-4 border-t border-slate-100">
                      <p className="text-xs font-black text-primary uppercase tracking-widest mb-2">Key Topics</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {event.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                            <div className="w-1 h-1 bg-accent rounded-full"></div>
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="md:col-span-1 flex flex-col justify-between">
                    <div></div>
                    <Link
                      href="/contact"
                      className="w-full bg-accent text-primary px-6 py-3 rounded-xl font-bold hover:bg-accent/90 transition-all text-center inline-flex items-center justify-center gap-2 group text-sm"
                    >
                      Register Now <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Past Events */}
      <section className="section-padding bg-slate-50 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">Past Events</h2>
            <p className="text-slate-600 mt-4 text-sm md:text-base max-w-2xl mx-auto">
              Join the thousands of students who have benefited from our events and expos.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-md border border-slate-100"
              >
                <h4 className="text-lg font-bold text-primary mb-4">{event.title}</h4>
                <div className="space-y-3 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-accent" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={16} className="text-accent" />
                    {event.attendees}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-accent font-black">🏫</span>
                    {event.universities}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Attend */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3"></div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent font-black tracking-[0.2em] uppercase border-l-4 border-accent pl-4 text-xs inline-block">Benefits</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 leading-tight">Why Attend Our Events?</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: "🎯",
                title: "Meet Universities",
                desc: "Direct interaction with representatives from top universities worldwide"
              },
              {
                icon: "💬",
                title: "Expert Guidance",
                desc: "Get personalized advice from experienced counselors and visa experts"
              },
              {
                icon: "🤝",
                title: "Network",
                desc: "Connect with fellow students and build lasting relationships"
              },
              {
                icon: "🎁",
                title: "Special Offers",
                desc: "Exclusive admission discounts and scholarship opportunities"
              },
              {
                icon: "📚",
                title: "Learn",
                desc: "Gain insights on visa processes, programs, and career opportunities"
              },
              {
                icon: "✅",
                title: "Start Your Journey",
                desc: "Begin your study abroad journey with confidence and clarity"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-accent/30 hover:shadow-lg transition-all group"
              >
                <div className="text-4xl group-hover:scale-110 transition-transform">{benefit.icon}</div>
                <div>
                  <h4 className="font-bold text-primary mb-1 group-hover:text-accent transition-colors">{benefit.title}</h4>
                  <p className="text-sm text-slate-600">{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary/90 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2"></div>

        <div className="container-custom relative z-10 text-center space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold"
          >
            Never Miss an Event
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/90 max-w-2xl mx-auto text-base md:text-lg"
          >
            Subscribe to our newsletter to stay updated about upcoming events, webinars, and exclusive offers.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-6 py-3 rounded-xl bg-white/90 text-primary placeholder:text-slate-400 focus:bg-white outline-none transition-all"
            />
            <button className="bg-accent text-primary px-8 py-3 rounded-xl font-bold hover:bg-accent/90 transition-all whitespace-nowrap">
              Subscribe
            </button>
          </motion.div>
          <p className="text-white/80 text-sm">We respect your privacy. Unsubscribe anytime.</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="container-custom relative z-10 text-center space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-primary"
          >
            Ready to Take the Next Step?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 max-w-2xl mx-auto text-base md:text-lg"
          >
            Register for our upcoming events and start your study abroad journey today.
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
              Register Now <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://wa.me/923128188146"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-primary text-primary px-8 py-3 rounded-xl font-bold hover:bg-primary hover:text-white transition-all inline-flex items-center gap-2 group"
            >
              Chat on WhatsApp <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
