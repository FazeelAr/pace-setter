'use client';

import { useState, useEffect, useCallback } from "react";
import { Quote, Star, ChevronLeft, ChevronRight, GraduationCap } from "lucide-react";

interface Testimonial {
  name: string;
  university: string;
  degree: string;
  location: string;
  quote: string;
  stars: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Bilal Ahmed",
    university: "University of Auckland",
    degree: "Master of Data Science",
    location: "Auckland, New Zealand",
    quote: "Pace Setter International made my dream of studying at the University of Auckland a reality. Their guidance on the visa process was flawless, and I received my student visa in just 15 days!",
    stars: 5
  },
  {
    name: "Ayesha Khan",
    university: "University of Auckland",
    degree: "Bachelor of Commerce",
    location: "Auckland, New Zealand",
    quote: "The personalized attention I received at Pace Setter International was incredible. They helped me choose the right course and university that perfectly aligned with my career goals at Auckland.",
    stars: 5
  },
  {
    name: "Zubair Qureshi",
    university: "University of Otago",
    degree: "Master of Finance & Economics",
    location: "Dunedin, New Zealand",
    quote: "From initial counseling to final departure, Pace Setter International was with me every step of the way. Their expertise helped me secure admission and scholarship at the University of Otago!",
    stars: 5
  },
  {
    name: "Zainab Malik",
    university: "University of Otago",
    degree: "Bachelor of Biomedical Sciences",
    location: "Dunedin, New Zealand",
    quote: "The health sciences faculty at University of Otago is world-renowned. Pace Setter handled my application and student visa impeccably, giving me complete peace of mind.",
    stars: 5
  },
  {
    name: "Hassan Raza",
    university: "University of Waikato",
    degree: "Bachelor of Computer Science",
    location: "Hamilton, New Zealand",
    quote: "Thanks to Pace Setter International, my journey to the University of Waikato was seamless. The team handled my admission and visa application with total professionalism.",
    stars: 5
  },
  {
    name: "Mariam Jameel",
    university: "University of Waikato",
    degree: "Master of Management Studies",
    location: "Hamilton, New Zealand",
    quote: "I am extremely grateful to Pace Setter International for their unwavering support. Their expert advice helped me get accepted into the University of Waikato with ease.",
    stars: 5
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);

  // Update cards per page based on window width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerPage(2);
      } else {
        setCardsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - cardsPerPage);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  return (
    <section className="section-padding bg-slate-50 relative overflow-hidden">
      <div className="container-custom relative z-10">
        {/* Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
          <div className="space-y-3">
            <span className="text-accent font-black tracking-[0.25em] uppercase text-xs border-b-2 border-accent pb-1 inline-block">
              Student Success Stories
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-primary tracking-tight">
              What Our <span className="text-accent">New Zealand</span> Students Say
            </h2>
            <p className="text-slate-600 text-sm max-w-xl">
              Real experiences from students who achieved their dreams at New Zealand&apos;s leading universities through Pace Setter International.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2 self-end md:self-auto">
            <button
              onClick={prevSlide}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full bg-white border border-slate-200 text-primary hover:bg-accent hover:text-white hover:border-accent transition-all duration-300 flex items-center justify-center shadow-sm active:scale-95 cursor-pointer"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full bg-white border border-slate-200 text-primary hover:bg-accent hover:text-white hover:border-accent transition-all duration-300 flex items-center justify-center shadow-sm active:scale-95 cursor-pointer"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel Viewport */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsPerPage)}%)`
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="px-3 flex-shrink-0"
                style={{ width: `${100 / cardsPerPage}%` }}
              >
                <div className="bg-white rounded-2xl p-6 md:p-8 h-full flex flex-col justify-between border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="space-y-4">
                    {/* Top row: University badge & quote icon */}
                    <div className="flex items-start justify-between gap-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/5 border border-primary/10 rounded-full text-primary font-bold text-[11px]">
                        <GraduationCap size={13} className="text-accent shrink-0" />
                        {testimonial.university}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                        <Quote size={14} className="text-accent" />
                      </div>
                    </div>

                    {/* Star rating */}
                    <div className="flex gap-1">
                      {Array.from({ length: testimonial.stars }).map((_, i) => (
                        <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                      ))}
                    </div>

                    {/* Quote text */}
                    <p className="text-sm text-slate-700 leading-relaxed italic">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                  </div>

                  {/* Student Details (Names only, no images) */}
                  <div className="pt-6 mt-6 border-t border-slate-100 flex flex-col">
                    <h4 className="font-bold text-primary text-base leading-tight">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-accent font-semibold mt-0.5">
                      {testimonial.degree}
                    </p>
                    <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mt-1">
                      {testimonial.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === i
                  ? "w-8 bg-accent"
                  : "w-2 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
