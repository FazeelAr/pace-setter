'use client';

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Quote, Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Bilal Ahmed",
    role: "Student, University of Manchester",
    quote: "Pace Setter International made my dream of studying in the UK a reality. Their guidance on the visa process was flawless, and I received my visa in just 15 days!",
    location: "Lahore",
    image: "/student_1.png",
    stars: 5
  },
  {
    name: "Ayesha Khan",
    role: "Postgraduate, University of Toronto",
    quote: "The personalized attention I received at Pace Setter International was incredible. They helped me choose the right course and university that perfectly aligned with my career goals.",
    location: "Karachi",
    image: "/student_2.png",
    stars: 5
  },
  {
    name: "Zubair Qureshi",
    role: "MBA Student, NYU Stern",
    quote: "From initial counseling to final departure, Pace Setter International was with me every step of the way. Their expertise in scholarship applications helped me secure 50% funding!",
    location: "Islamabad",
    image: "/student_3.png",
    stars: 5
  },
  {
    name: "Mariam Jameel",
    role: "Undergraduate, University of Waikato",
    quote: "I was confused about my destination, but Pace Setter International's detailed comparison of countries helped me decide on New Zealand. Truly the best consultants in Pakistan.",
    location: "Sialkot",
    image: "/student_4.png",
    stars: 5
  },
  {
    name: "Hassan Raza",
    role: "Master's Student, University of Victoria",
    quote: "Thanks to Pace Setter International, my journey to Canada was seamless. The team handled my admission and visa application perfectly, making my dream come true.",
    location: "Faisalabad",
    image: "/student_5.png",
    stars: 5
  },
  {
    name: "Sara Ali",
    role: "Undergraduate, University of Waikato",
    quote: "I am extremely grateful to Pace Setter International for their unwavering support. Their expert advice helped me get accepted into the University of Waikato with ease.",
    location: "Multan",
    image: "/student_6.png",
    stars: 5
  }
];

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 0.5, 1], [80, 0, -30]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.6]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.9, 1, 1, 0.95]);
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [index % 2 === 0 ? 2 : -2, 0, index % 2 === 0 ? -1 : 1]);

  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });
  const smoothScale = useSpring(scale, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      ref={cardRef}
      style={{ y: smoothY, opacity, scale: smoothScale, rotate, position: "relative" }}
      className={`group relative ${index % 2 !== 0 ? 'md:mt-16' : ''}`}
    >
      <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 border border-slate-100">
        {/* Student profile header */}
        <div className="flex items-center gap-3 p-5 md:p-6 pb-4">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-accent/40 shadow-sm shrink-0">
            <Image
              src={testimonial.image}
              alt={`${testimonial.name} profile`}
              fill
              sizes="48px"
              className="object-cover"
            />
          </div>
          <div className="min-w-0 flex-1">
            <h4 className="font-bold text-primary truncate">{testimonial.name}</h4>
            <p className="text-xs text-slate-500 truncate">{testimonial.role}</p>
          </div>
          <div className="w-9 h-9 bg-accent/15 rounded-full flex items-center justify-center shrink-0">
            <Quote size={15} className="text-accent" />
          </div>
        </div>

        {/* Quote content */}
        <div className="px-5 md:px-6 pb-5 md:pb-6 space-y-4">
          {/* Star rating */}
          <div className="flex gap-1">
            {Array.from({ length: testimonial.stars }).map((_, i) => (
              <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
            ))}
          </div>

          <p className="text-sm text-slate-700 leading-relaxed italic">
            &ldquo;{testimonial.quote}&rdquo;
          </p>

          <div className="flex items-center gap-2 pt-2 border-t border-slate-50">
            <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{testimonial.location}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const headerY = useTransform(scrollYProgress, [0, 0.3], [60, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const bgX = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section ref={sectionRef} style={{ position: "relative" }} className="section-padding bg-slate-50 relative overflow-hidden">
      {/* Animated decorative blobs that move on scroll */}
      <motion.div 
        style={{ x: bgX }} 
        className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20"
      >
        <div className="absolute top-20 left-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-dark/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
      </motion.div>

      <div className="container-custom relative z-10">
        {/* Header - scroll reveal */}
        <motion.div 
          style={{ y: headerY, opacity: headerOpacity }} 
          className="text-center space-y-4 mb-12 md:mb-16"
        >
          <span className="text-accent font-black tracking-[0.3em] uppercase text-xs border-b-2 border-accent pb-2 inline-block">
            Real Stories, Real Success
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-primary tracking-tighter">
            What Our <span className="text-accent">Students</span> Say
          </h2>
          <p className="text-slate-500 text-sm max-w-lg mx-auto">
            Hear from our students who transformed their careers with our expert guidance.
          </p>
        </motion.div>

        {/* Testimonial Cards Grid - staggered masonry */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
