'use client';

import { motion, Variants } from 'framer-motion';
import { useEffect, useState } from 'react';

const stats = [
  {
    icon: "⏰",
    value: "22",
    suffix: "+",
    label: "Years of Experience",
    description: "Trusted expertise in international education"
  },
  {
    icon: "🎓",
    value: "100",
    suffix: "K+",
    label: "Students Guided",
    description: "Success stories across the globe"
  },
  {
    icon: "🌍",
    value: "65",
    suffix: "+",
    label: "Study Destinations",
    description: "Opportunities worldwide"
  },
  {
    icon: "🏫",
    value: "500",
    suffix: "+",
    label: "University Partners",
    description: "Direct partnerships with top institutions"
  },
  {
    icon: "🌐",
    value: "15",
    suffix: "+",
    label: "Global Offices",
    description: "Local presence, global reach"
  },
  {
    icon: "✅",
    value: "95",
    suffix: "%",
    label: "Success Rate",
    description: "Visa and admission approval"
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

// Counter Component
function Counter({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);

      setCount(Math.floor(end * progress));

      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [end, duration]);

  return <span>{count}</span>;
}

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-x-1/3 translate-y-1/3"></div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent font-black tracking-[0.2em] uppercase border-l-4 border-accent pl-4 text-xs inline-block">Why Choose Pace Setter International</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mt-4 leading-tight">
            By The Numbers
          </h2>
          <p className="text-slate-600 mt-4 text-sm md:text-base max-w-2xl mx-auto">
            Our track record speaks for itself. Join thousands of students who have achieved their global education dreams with our guidance.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:border-accent/30 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>

              {/* Value with Counter */}
              <div className="mb-2">
                <div className="flex items-baseline gap-1">
                  <Counter end={parseInt(stat.value)} duration={2.5} />
                  <span className="text-2xl lg:text-3xl font-bold text-accent">{stat.suffix}</span>
                </div>
              </div>

              {/* Label */}
              <h4 className="text-lg font-bold text-primary mb-1 group-hover:text-accent transition-colors">
                {stat.label}
              </h4>

              {/* Description */}
              <p className="text-sm text-slate-600">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlights Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-8 md:p-12 border border-slate-100"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🎯",
                title: "Personalized Approach",
                desc: "Each student gets a customized roadmap"
              },
              {
                icon: "📊",
                title: "Data-Driven Decisions",
                desc: "Strategic guidance based on market trends"
              },
              {
                icon: "🤝",
                title: "Direct University Relations",
                desc: "Strong partnerships for better outcomes"
              },
              {
                icon: "🚀",
                title: "End-to-End Support",
                desc: "From application to post-arrival support"
              }
            ].map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl mb-3 text-center">{highlight.icon}</div>
                <h4 className="font-bold text-primary mb-2">{highlight.title}</h4>
                <p className="text-sm text-slate-600">{highlight.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
