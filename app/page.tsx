'use client';

import { useState, useEffect, useCallback } from "react";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import Link from "next/link";
import Image from "next/image";
import {
  FileCheck,
  GraduationCap,
  Briefcase,
  BookOpen,
  Coins,
  Home as HomeIcon,
  Compass,
  Building2,
  Users,
  CheckCircle,
  Library,
  Trophy,
  Rocket,
  ChevronRight,
  ChevronLeft
} from "lucide-react";

export default function Home() {
  const allServices = [
    {
      title: "Student Visa Assistance",
      description: "Expert guidance on visa applications and legal documentation for top destinations with 99% success rate.",
      icon: <FileCheck className="text-accent" size={28} />,
      image: "/service_1.jpg"
    },
    {
      title: "Global University Selection",
      description: "Direct partnerships with 500+ top-tier global universities to find the perfect academic match for your future career.",
      icon: <GraduationCap className="text-accent" size={28} />,
      image: "/service_2.jpg"
    },
    {
      title: "Career & Profile Coaching",
      description: "Professional resume building and interview coaching to help you land high-paying roles in competitive international markets.",
      icon: <Briefcase className="text-accent" size={28} />,
      image: "/service_3.jpg"
    },
    {
      title: "IELTS & Language Preparation",
      description: "Result-oriented test preparation with certified instructors and mock tests to achieve your required band score.",
      icon: <BookOpen className="text-accent" size={28} />,
      image: "/service_4.png"
    },
    {
      title: "Scholarship & Funding Access",
      description: "Comprehensive support finding and applying for merit and need-based international scholarships.",
      icon: <Coins className="text-accent" size={28} />,
      image: "/service_5.jpg"
    },
    {
      title: "Settlement & Orientation Support",
      description: "Pre-departure briefings, airport reception guidance, accommodation assistance, and bank account setup.",
      icon: <HomeIcon className="text-accent" size={28} />,
      image: "/service_6.jpg"
    }
  ];

  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [servicesPerPage, setServicesPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setServicesPerPage(1);
      } else if (window.innerWidth < 1024) {
        setServicesPerPage(2);
      } else {
        setServicesPerPage(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxServiceIndex = Math.max(0, allServices.length - servicesPerPage);

  const prevService = useCallback(() => {
    setCurrentServiceIndex((prev) => (prev === 0 ? maxServiceIndex : prev - 1));
  }, [maxServiceIndex]);

  const nextService = useCallback(() => {
    setCurrentServiceIndex((prev) => (prev >= maxServiceIndex ? 0 : prev + 1));
  }, [maxServiceIndex]);

  return (
    <main>
      <Hero />

      {/* Services Slider Section */}
      <section className="section-padding bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

        <div className="container-custom relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10">
            <div className="space-y-3 w-full md:w-auto">
              <span className="text-accent font-black tracking-widest uppercase text-xs border-b-2 border-accent pb-1 inline-block">
                All Our Services
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-primary leading-tight">
                Premier Study Abroad Solutions
              </h2>
              <p className="text-slate-600 text-sm max-w-xl">
                Explore our full suite of personalized international education and visa services.
              </p>
            </div>

            <div className="flex items-center gap-4 self-end md:self-auto">
              <Link href="/services" className="group hidden sm:flex items-center gap-2 font-bold text-primary hover:text-accent transition-colors text-sm mr-2">
                Discover All
                <span className="text-xs">→</span>
              </Link>

              {/* Slider Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevService}
                  aria-label="Previous service"
                  className="w-10 h-10 rounded-full bg-white border border-slate-200 text-primary hover:bg-accent hover:text-white hover:border-accent transition-all duration-300 flex items-center justify-center shadow-sm active:scale-95 cursor-pointer"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextService}
                  aria-label="Next service"
                  className="w-10 h-10 rounded-full bg-white border border-slate-200 text-primary hover:bg-accent hover:text-white hover:border-accent transition-all duration-300 flex items-center justify-center shadow-sm active:scale-95 cursor-pointer"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Carousel Viewport */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentServiceIndex * (100 / servicesPerPage)}%)`
              }}
            >
              {allServices.map((service, index) => (
                <div
                  key={index}
                  className="px-3 flex-shrink-0"
                  style={{ width: `${100 / servicesPerPage}%` }}
                >
                  <ServiceCard {...service} index={index} priority={index < 3} />
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {Array.from({ length: maxServiceIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentServiceIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  currentServiceIndex === i
                    ? "w-8 bg-accent"
                    : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section with Simple Cards */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative h-[300px] md:h-[350px] rounded-2xl overflow-hidden shadow-xl border border-slate-100 group bg-gradient-to-br from-primary-dark via-secondary to-secondary-light">
            <Image src="/trust_section.png" alt="Trust Section" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-primary/10"></div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-accent font-black tracking-widest uppercase border-b-2 border-accent pb-1 text-xs inline-block">
                Why Partner With Us?
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-primary leading-tight">
                Your Dreams Are <br /> Our Mission.
              </h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                We don&apos;t just process applications; we architect global careers. With Pace Setter International, you&apos;re not a case number—you&apos;re a success story in the making.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { title: "Strategic Study Roadmap", desc: "We build a personalized 5-year academic plan for your global success and career growth.", icon: <Compass className="text-accent" size={20} /> },
                { title: "Direct University Access", desc: "Preferred partnerships with 500+ top-tier institutions worldwide for faster admissions.", icon: <Building2 className="text-accent" size={20} /> },
                { title: "Elite Alumni Network", desc: "Join a community of successful Pace Setter alumni thriving in careers across the globe.", icon: <Users className="text-accent" size={20} /> }
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-4 rounded-xl border border-slate-100 hover:border-accent/30 hover:shadow-md transition-all duration-300 bg-slate-50/50 group"
                >
                  <div className="w-12 h-12 bg-white border border-slate-100 rounded-xl flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-sm shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-primary group-hover:text-accent transition-colors">{item.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Slider Section */}
      <Testimonials />

      {/* Why Choose Us Stats Section */}
      <WhyChooseUs />

      {/* Simple Stats Section */}
      <section className="py-12 md:py-16 bg-primary relative overflow-hidden">
        <div className="container-custom grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
          {[
            { label: "Visas Approved", val: "5k+", icon: <CheckCircle className="text-accent mx-auto" size={24} /> },
            { label: "Partner Universities", val: "500+", icon: <Library className="text-accent mx-auto" size={24} /> },
            { label: "Years Excellence", val: "10+", icon: <Trophy className="text-accent mx-auto" size={24} /> },
            { label: "Success Rate", val: "99%", icon: <Rocket className="text-accent mx-auto" size={24} /> }
          ].map((stat, i) => (
            <div key={i} className="space-y-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-accent/40 transition-all duration-300">
              <div className="mb-2">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-black text-white">{stat.val}</div>
              <div className="text-white/80 font-black uppercase tracking-[0.2em] text-[9px] md:text-[10px]">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-slate-50 relative">
        <div className="container-custom">
          <div className="bg-primary rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden shadow-[0_30px_70px_rgba(3,43,90,0.25)]">
            <div className="absolute inset-0 bg-accent/5 mix-blend-overlay"></div>
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/20 rounded-full blur-[100px]"></div>
            <div className="relative z-10 space-y-6 max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight">
                Ready to Claim Your <span className="text-accent">Global</span> Future?
              </h2>
              <p className="text-sm md:text-base text-white/90 font-medium leading-relaxed">
                Stop wishing. Start acting. Join the elite league of international students who chose Pace Setter International for their global journey.
              </p>
              <div className="pt-2">
                <Link href="/contact" className="px-6 py-3 bg-accent text-white hover:bg-white hover:text-primary rounded-full font-bold text-sm md:text-base shadow-lg shadow-accent/20 hover:scale-105 transition-all duration-300 inline-flex items-center gap-3 cursor-pointer">
                  Start Your Journey Now <ChevronRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
