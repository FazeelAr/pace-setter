'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative pt-24 pb-8 md:py-12 lg:py-14 overflow-hidden bg-primary">
      {/* Background with Image and Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.35 }}
          transition={{ duration: 1.5 }}
          className="relative h-full w-full"
        >
          <Image
            src="/pacesetter_hero.png"
            alt="Pace Setter International Global Education"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/95 via-primary/80 to-primary-dark/90"></div>
      </div>

      <div className="container-custom relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[300px] lg:min-h-[400px]">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left text-white space-y-6 max-w-2xl py-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="inline-block px-4 py-2 mt-4 bg-accent/20 border border-white/25 rounded-full text-white font-bold text-xs tracking-widest uppercase shadow-[0_0_20px_rgba(22,163,74,0.25)]"
          >
            🚀 Rated #1 Consultancy in Pakistan
          </motion.div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-white">
            Guiding <span className="text-white underline decoration-accent decoration-4 underline-offset-8">Your Journey</span>,<br />
            Building <span className="text-white underline decoration-accent decoration-4 underline-offset-8">Your Future</span>.
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-white/90 leading-relaxed max-w-xl">
            Empowering students and professionals to excel on the global stage through expert guidance in education, immigration, and career growth.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link href="/services" className="px-5 md:px-6 py-2.5 md:py-3 bg-accent text-white rounded-full font-bold text-sm md:text-base shadow-[0_20px_50px_rgba(22,163,74,0.3)] hover:bg-white hover:text-primary hover:-translate-y-1 transition-all duration-300">
              Explore Services
            </Link>
            <Link href="/about" className="px-5 md:px-6 py-2.5 md:py-3 rounded-full border-2 border-white/20 text-white font-bold text-sm md:text-base hover:bg-white/10 transition-all duration-300">
              Our Story
            </Link>
          </div>

          <div className="flex gap-8 pt-8 border-t border-white/10">
            {[
              { val: "500+", label: "Universities" },
              { val: "99%", label: "Visa Success" },
              { val: "10+", label: "Years Exp" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + (i * 0.1) }}
              >
                <div className="text-2xl font-black text-white">{stat.val}</div>
                <p className="text-[10px] text-white/80 uppercase tracking-[0.2em] font-bold mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Decorative brand panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative h-[260px] sm:h-[300px] lg:h-[350px]"
        >
          <div className="absolute inset-0 bg-accent/20 rounded-3xl blur-[100px]"></div>
          <div className="relative h-full w-full rounded-2xl overflow-hidden border-[8px] border-white/10 shadow-2xl shadow-black/50 group">
            <Image
              src="/pacesetter_hero_front.png"
              alt="Pace Setter International Students"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-1000"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-secondary/20 to-transparent"></div>
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 p-4 sm:p-5 md:p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
              <p className="text-white/95 text-xs sm:text-sm md:text-base font-bold">&quot;Pace Setter International helped me secure my visa for the UK in record time!&quot;</p>
              <p className="text-white font-bold mt-1 sm:mt-2 text-[10px] sm:text-xs md:text-sm">— Sarah Ahmed, Student</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
