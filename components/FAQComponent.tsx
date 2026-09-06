'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  // Getting Started
  {
    category: "Getting Started",
    question: "What is the best time to start preparing for study abroad?",
    answer: "Ideally, you should start planning 12-18 months before your intended intake. This gives you time to research programs, improve academic credentials, prepare for language tests (IELTS/TOEFL), and submit applications before deadlines. However, we can assist with applications even with shorter timelines."
  },
  {
    category: "Getting Started",
    question: "How much does it cost to use your services?",
    answer: "Our counseling is absolutely FREE for students. We work directly with universities, so they cover our costs. You only pay university tuition and visa fees. We help you find scholarships and financial aid to reduce your expenses."
  },
  {
    category: "Getting Started",
    question: "Which countries and universities can you help with?",
    answer: "We assist with applications to universities in 65+ countries including UK, USA, Canada, Australia, Europe, Asia, and more. We have partnerships with 1000+ universities worldwide. Our experts are familiar with admission requirements for all major study destinations."
  },

  // Applications
  {
    category: "Applications",
    question: "What documents do I need to prepare for university applications?",
    answer: "Typically required documents include: academic transcripts, English language test scores (IELTS/TOEFL), CV/resume, statement of purpose (SOP), letters of recommendation, passport copy, and sometimes GMAT/GRE scores for postgraduate programs. We guide you through the complete documentation process."
  },
  {
    category: "Applications",
    question: "Can you help if I don't have strong academic credentials?",
    answer: "Yes! We work with students of all academic backgrounds. We help you present your strengths effectively, find programs that match your profile, and demonstrate your potential through strong essays and recommendations. Many of our students with average grades have been accepted to top universities."
  },
  {
    category: "Applications",
    question: "How long does the application process take?",
    answer: "The typical process takes 2-4 months from initial consultation to receiving offers. However, timelines vary depending on university deadlines, your preparation level, and the number of applications. We help prioritize applications strategically."
  },

  // Visas
  {
    category: "Visa & Immigration",
    question: "Will you help with visa applications?",
    answer: "Absolutely! Our visa experts guide you through the entire process including document collection, application filling, visa interviews, and preparation. We have dedicated teams for UK, USA, Canada, Australia, Europe, and other major destinations with 95%+ visa success rates."
  },
  {
    category: "Visa & Immigration",
    question: "What is the typical visa processing time?",
    answer: "Processing times vary by country: UK Visas (2-4 weeks), Schengen (2-3 weeks), USA F-1 (2 weeks), Canada (4-8 weeks), Australia (1-2 weeks). We keep you updated at every stage and prepare you for any potential delays."
  },
  {
    category: "Visa & Immigration",
    question: "What are the visa rejection reasons, and can you help avoid them?",
    answer: "Common reasons include incomplete documents, insufficient financial proof, unclear purpose of visit, and poor interview performance. We help by: verifying all documents, preparing strong financial explanations, conducting mock interviews, and ensuring your profile is presentation-ready."
  },

  // Funding & Scholarships
  {
    category: "Funding & Scholarships",
    question: "Are scholarships available for Pakistani students?",
    answer: "Yes, many universities offer scholarships based on merit, need, or both. We identify scholarships matching your profile—ranging from partial tuition waivers to full scholarships covering tuition and living expenses. Our database includes 1000+ scholarship opportunities."
  },
  {
    category: "Funding & Scholarships",
    question: "What's the difference between scholarships and financial aid?",
    answer: "Scholarships are merit/need-based grants you don't repay. Financial aid includes grants, loans, and work-study. We help explore all options including government loans, bank education loans, and sponsor support to create an affordable study plan."
  },
  {
    category: "Funding & Scholarships",
    question: "Can I work while studying abroad?",
    answer: "Yes, most countries allow international students to work part-time (15-20 hours/week during studies, full-time during breaks). We guide you on work permit procedures and help identify on-campus jobs. Combined with planning, part-time income can significantly offset living costs."
  },

  // Post-Arrival
  {
    category: "Post-Arrival & Support",
    question: "Do you provide accommodation assistance?",
    answer: "Yes, we help with finding and securing accommodation through our university partners. We can arrange university hostels, private rentals, or homestays. Our team provides pre-arrival orientation, travel arrangements, and airport pickup coordination."
  },
  {
    category: "Post-Arrival & Support",
    question: "What support do you provide after I arrive at the university?",
    answer: "We provide 24/7 support including: local orientation, emergency assistance, visa extension guidance, career mentoring, internship placement, and keeping in touch with our growing alumni network of 50K+ professionals worldwide."
  },
  {
    category: "Post-Arrival & Support",
    question: "Can you help with internships and career placement?",
    answer: "Yes! We offer career coaching, internship placement assistance through partner companies, interview preparation, resume building, and networking opportunities. Our career counselors help align your studies with post-graduation opportunities."
  }
];

const categories = Array.from(new Set(faqData.map(item => item.category)));

interface ExpandedItemsState {
  [key: string]: boolean;
}

export default function FAQComponent() {
  const [expandedItems, setExpandedItems] = useState<ExpandedItemsState>({});
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0]);

  const toggleItem = (question: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [question]: !prev[question]
    }));
  };

  const filteredFAQs = faqData.filter(item => item.category === selectedCategory);

  return (
    <div className="space-y-6">
      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
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
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>

      {/* FAQ Items */}
      <div className="space-y-3">
        <AnimatePresence mode="sync">
          {filteredFAQs.map((item, index) => (
            <motion.div
              key={item.question}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ delay: index * 0.05 }}
              className="border border-slate-200 rounded-xl overflow-hidden hover:border-accent/30 transition-all"
            >
              <motion.button
                onClick={() => toggleItem(item.question)}
                className="w-full px-6 py-4 bg-white hover:bg-slate-50 transition-colors flex items-center justify-between group"
              >
                <span className="text-left font-semibold text-primary group-hover:text-accent transition-colors text-sm md:text-base">
                  {item.question}
                </span>
                <motion.div
                  animate={{ rotate: expandedItems[item.question] ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 ml-4"
                >
                  <ChevronDown className="text-accent" size={20} />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {expandedItems[item.question] && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-slate-100 bg-slate-50 px-6 py-4"
                  >
                    <p className="text-slate-700 text-sm md:text-base leading-relaxed">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
