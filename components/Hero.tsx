'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowRight, Search } from 'lucide-react';
import { degreePrograms, destinations, studyLevels } from '@/lib/study-data';

export default function Hero() {
  const router = useRouter();

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const params = new URLSearchParams({
      program: String(formData.get('program')),
      level: String(formData.get('level')),
      destination: String(formData.get('destination')),
    });

    router.push(`/destination/detail?${params.toString()}`);
  };

  return (
    <section className="relative pt-24 pb-8 md:py-12 lg:py-14 overflow-hidden bg-primary">
      <div className="absolute inset-0 z-0">
        <motion.div initial={{ scale: 1.1, opacity: 0 }} animate={{ scale: 1, opacity: 0.35 }} transition={{ duration: 1.5 }} className="relative h-full w-full">
          <Image src="/pacesetter_hero.png" alt="Pace Setter International Global Education" fill sizes="100vw" className="object-cover" priority />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/95 via-primary/80 to-primary-dark/90"></div>
      </div>

      <div className="container-custom relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[300px] lg:min-h-[400px]">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }} className="text-left text-white space-y-6 max-w-2xl py-8">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="inline-block px-4 py-2 mt-4 bg-accent/20 border border-white/25 rounded-full text-white font-bold text-xs tracking-widest uppercase shadow-[0_0_20px_rgba(22,163,74,0.25)]">
            Rated #1 Consultancy in Pakistan
          </motion.div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-white">
            Guiding <span className="text-white underline decoration-accent decoration-4 underline-offset-8">Your Journey</span>,<br />
            Building <span className="text-white underline decoration-accent decoration-4 underline-offset-8">Your Future</span>.
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-white/90 leading-relaxed max-w-xl">
            Empowering students and professionals to excel on the global stage through expert guidance in education, immigration, and career growth.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link href="/services" className="px-5 md:px-6 py-2.5 md:py-3 bg-accent text-white rounded-full font-bold text-sm md:text-base shadow-[0_20px_50px_rgba(22,163,74,0.3)] hover:bg-white hover:text-primary hover:-translate-y-1 transition-all duration-300">Explore Services</Link>
            <Link href="/about" className="px-5 md:px-6 py-2.5 md:py-3 rounded-full border-2 border-white/20 text-white font-bold text-sm md:text-base hover:bg-white/10 transition-all duration-300">Our Story</Link>
          </div>
          <div className="flex gap-8 pt-8 border-t border-white/10">
            {[
              { val: '500+', label: 'Universities' },
              { val: '99%', label: 'Visa Success' },
              { val: '10+', label: 'Years Exp' },
            ].map((stat) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}>
                <div className="text-2xl font-black text-white">{stat.val}</div>
                <p className="text-[10px] text-white/80 uppercase tracking-[0.2em] font-bold mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.9, rotate: 2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1, delay: 0.2 }} className="relative min-h-[420px]">
          <div className="absolute inset-0 bg-accent/20 rounded-3xl blur-[100px]"></div>
          <div className="relative h-full w-full rounded-2xl overflow-hidden border border-white/20 shadow-2xl shadow-black/50 group bg-primary-dark">
            <Image src="/pacesetter_hero_front.png" alt="Students preparing for international study" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover opacity-35 group-hover:scale-105 transition-transform duration-1000" priority />
            <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/80 via-primary/65 to-primary-dark/90"></div>
            <div className="relative z-10 p-5 sm:p-7 h-full flex flex-col justify-center">
              <div className="flex items-center gap-2 text-accent-light text-xs font-black uppercase tracking-[0.2em] mb-3"><Search size={15} /> Find your fit</div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight mb-2">Start with the right course.</h2>
              <p className="text-white/75 text-sm mb-6">Choose your study path and we&apos;ll show you the programs and institutes waiting for you.</p>
              <form onSubmit={handleSearch} className="space-y-3">
                <label className="block">
                  <span className="sr-only">Degree program</span>
                  <select name="program" required defaultValue="" className="w-full rounded-xl border border-white/20 bg-white/95 px-4 py-3 text-sm font-semibold text-primary outline-none focus:ring-2 focus:ring-accent">
                    <option value="" disabled>Choose a degree program</option>
                    {degreePrograms.map((program) => <option key={program.value} value={program.value}>{program.label}</option>)}
                  </select>
                </label>
                <label className="block">
                  <span className="sr-only">Education level</span>
                  <select name="level" required defaultValue="" className="w-full rounded-xl border border-white/20 bg-white/95 px-4 py-3 text-sm font-semibold text-primary outline-none focus:ring-2 focus:ring-accent">
                    <option value="" disabled>Choose your education level</option>
                    {studyLevels.map((level) => <option key={level.value} value={level.value}>{level.label}</option>)}
                  </select>
                </label>
                <label className="block">
                  <span className="sr-only">Study destination</span>
                  <select name="destination" required defaultValue="" className="w-full rounded-xl border border-white/20 bg-white/95 px-4 py-3 text-sm font-semibold text-primary outline-none focus:ring-2 focus:ring-accent">
                    <option value="" disabled>Choose a destination</option>
                    {destinations.map((destination) => <option key={destination.value} value={destination.value}>{destination.flag} {destination.name}</option>)}
                  </select>
                </label>
                <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3.5 text-sm font-black text-white shadow-lg shadow-black/20 transition-all hover:bg-accent-light hover:text-primary hover:-translate-y-0.5">Explore programs <ArrowRight size={17} /></button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
