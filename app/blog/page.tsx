'use client';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { Search, ChevronRight, Calendar, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

const blogArticles = [
  {
    id: 1,
    title: "Complete Guide to UK Student Visa 2026",
    category: "Visa Guide",
    date: "December 10, 2025",
    readTime: "8 min read",
    description: "A comprehensive step-by-step guide to applying for UK student visa, including requirements, documents, and interview tips.",
    icon: "🇬🇧"
  },
  {
    id: 2,
    title: "Top 10 Scholarship Opportunities for Pakistani Students",
    category: "Scholarships",
    date: "December 5, 2025",
    readTime: "12 min read",
    description: "Explore the best scholarship opportunities available for Pakistani students across USA, UK, Canada, and Australia.",
    icon: "🎁"
  },
  {
    id: 3,
    title: "How to Write a Winning Statement of Purpose (SOP)",
    category: "Application Tips",
    date: "November 28, 2025",
    readTime: "10 min read",
    description: "Learn the secrets to writing a compelling SOP that catches university attention and increases admission chances.",
    icon: "📝"
  },
  {
    id: 4,
    title: "Canada Student Visa Process: Complete Checklist",
    category: "Visa Guide",
    date: "November 22, 2025",
    readTime: "9 min read",
    description: "Everything you need to know about the Canadian student visa including GIC, LOA, and financial requirements.",
    icon: "🍁"
  },
  {
    id: 5,
    title: "Masters vs MBA: Which Should You Choose?",
    category: "Career Guidance",
    date: "November 18, 2025",
    readTime: "11 min read",
    description: "Compare Masters and MBA programs to help you make the right choice for your career goals.",
    icon: "🎓"
  },
  {
    id: 6,
    title: "5 Common Visa Interview Mistakes to Avoid",
    category: "Visa Guide",
    date: "November 15, 2025",
    readTime: "7 min read",
    description: "Learn the most common mistakes students make in visa interviews and how to avoid them.",
    icon: "❌"
  },
  {
    id: 7,
    title: "IELTS Preparation: Tips for Achieving 7.0+ Band Score",
    category: "Test Prep",
    date: "November 10, 2025",
    readTime: "13 min read",
    description: "Expert tips and strategies to help you score 7.0 or above in IELTS exam.",
    icon: "📖"
  },
  {
    id: 8,
    title: "Student Accommodation Guide: Finding Your Perfect Home",
    category: "Student Life",
    date: "November 5, 2025",
    readTime: "9 min read",
    description: "Complete guide to finding safe, affordable, and convenient accommodation in your study destination.",
    icon: "🏠"
  },
  {
    id: 9,
    title: "How to Build a Strong University Application Profile",
    category: "Application Tips",
    date: "October 30, 2025",
    readTime: "11 min read",
    description: "Tips on extracurricular activities, work experience, and portfolios that strengthen your application.",
    icon: "💪"
  }
];

const categories = ["All", ...Array.from(new Set(blogArticles.map(a => a.category)))];

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

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = blogArticles.filter(article => {
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
            Blog & <span className="text-accent underline decoration-4 underline-offset-8">Resources</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-base text-white/90 max-w-2xl mx-auto"
          >
            Expert guides, tips, and resources to help you succeed in your study abroad journey.
          </motion.p>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="section-padding bg-gradient-to-r from-slate-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3"></div>

        <div className="container-custom relative z-10">
          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-6 py-4 bg-white rounded-2xl border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/10 outline-none transition-all text-slate-700 placeholder:text-slate-400"
              />
            </div>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap gap-3 justify-center"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold text-sm transition-all ${
                  selectedCategory === category
                    ? 'bg-accent text-primary shadow-lg shadow-accent/30'
                    : 'bg-white border border-slate-200 text-slate-700 hover:border-accent/30 hover:bg-slate-50'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Results Count */}
          <div className="text-center mt-8 text-sm text-slate-600">
            Showing <span className="font-bold text-primary">{filteredArticles.length}</span> articles
          </div>
        </div>
      </section>

      {/* Blog Articles */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-x-1/3 translate-y-1/3"></div>

        <div className="container-custom relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article) => (
                <motion.article
                  key={article.id}
                  variants={itemVariants}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:border-accent/30 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
                >
                  {/* Icon Header */}
                  <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 flex items-center justify-center">
                    <div className="text-6xl group-hover:scale-110 transition-transform">{article.icon}</div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-accent/10 text-accent font-black text-xs rounded-full uppercase tracking-widest mb-3">
                        {article.category}
                      </span>
                      <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                    </div>

                    <p className="text-slate-700 text-sm leading-relaxed mb-4 flex-grow">
                      {article.description}
                    </p>

                    <div className="flex items-center gap-4 text-xs text-slate-600 mb-6 pt-4 border-t border-slate-100">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {article.date}
                      </div>
                      <div className="flex items-center gap-1">
                        📖 {article.readTime}
                      </div>
                    </div>

                    <button className="w-full bg-accent text-primary px-4 py-2 rounded-xl font-bold hover:bg-accent/90 transition-all text-sm inline-flex items-center justify-center gap-2 group">
                      Read Article <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.article>
              ))
            ) : (
              <motion.div
                variants={itemVariants}
                className="col-span-full text-center py-12"
              >
                <div className="text-5xl mb-4">🔍</div>
                <p className="text-slate-600 text-lg font-semibold">No articles found</p>
                <p className="text-slate-500 text-sm mt-2">Try adjusting your search or filters</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="section-padding bg-slate-50 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent font-black tracking-[0.2em] uppercase border-l-4 border-accent pl-4 text-xs inline-block">Resources</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 leading-tight">Popular Resources</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🛂",
                title: "Visa Guides",
                desc: "Country-specific visa application guides",
                count: "15+ Guides"
              },
              {
                icon: "🎁",
                title: "Scholarships",
                desc: "Scholarship opportunities and how to apply",
                count: "100+ Options"
              },
              {
                icon: "📚",
                title: "Test Prep",
                desc: "IELTS, TOEFL, GRE, GMAT preparation tips",
                count: "20+ Articles"
              },
              {
                icon: "💼",
                title: "Career Tips",
                desc: "Career planning and job search strategies",
                count: "25+ Articles"
              }
            ].map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 hover:border-accent/30 hover:shadow-lg transition-all group text-center cursor-pointer"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{resource.icon}</div>
                <h4 className="font-bold text-primary mb-2 group-hover:text-accent transition-colors">{resource.title}</h4>
                <p className="text-sm text-slate-600 mb-3">{resource.desc}</p>
                <p className="text-xs font-bold text-accent">{resource.count}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Resources */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3"></div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent font-black tracking-[0.2em] uppercase border-l-4 border-accent pl-4 text-xs inline-block">Downloadable</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-4 leading-tight">Free Resources to Download</h2>
            <p className="text-slate-600 mt-4 text-sm md:text-base max-w-2xl mx-auto">
              Get our comprehensive guides and checklists to help you prepare for your study abroad journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Visa Checklist",
                desc: "Complete checklist of documents needed for study visa applications",
                file: "PDF (2.5 MB)"
              },
              {
                title: "Application Timeline",
                desc: "Month-by-month timeline for preparing your university applications",
                file: "PDF (1.8 MB)"
              },
              {
                title: "SOP Template",
                desc: "Statement of Purpose template with tips and examples",
                file: "DOCX (500 KB)"
              }
            ].map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-6 border border-slate-100 hover:border-accent/30 hover:shadow-lg transition-all group"
              >
                <div className="text-4xl mb-4">📄</div>
                <h4 className="font-bold text-primary mb-2">{resource.title}</h4>
                <p className="text-sm text-slate-600 mb-4">{resource.desc}</p>
                <p className="text-xs text-accent font-semibold mb-4">{resource.file}</p>
                <button className="w-full bg-accent text-primary px-4 py-2 rounded-xl font-bold hover:bg-accent/90 transition-all text-sm inline-flex items-center justify-center gap-2 group">
                  Download <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
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
            Get New Articles in Your Inbox
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/90 max-w-2xl mx-auto"
          >
            Subscribe to our newsletter for regular updates on study abroad guides, visa tips, and scholarship opportunities.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto"
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
        </div>
      </section>
    </div>
  );
}
