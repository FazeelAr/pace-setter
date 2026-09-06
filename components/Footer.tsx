'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
);

const TwitterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
);

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
);

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
);

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-6 md:py-10 relative overflow-hidden">
      {/* Decorative Background Orb */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container-custom grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 relative z-10 border-b border-white/5 pb-6 md:pb-10">
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-4 group">
            <motion.div
              whileHover={{ rotate: -5, scale: 1.05 }}
              className="relative h-12 w-12 overflow-hidden rounded-xl bg-white p-2 shadow-xl shadow-black/20"
            >
              <Image
                src="/pacesetter_logo.png"
                alt="Pace Setter International Logo"
                fill
                sizes="48px"
                className="object-contain"
                loading="eager"
              />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight leading-none">Pace Setter International</span>
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-accent">Guiding Your Journey, Building Your Future</span>
            </div>
          </Link>
          <p className="text-white/90 leading-relaxed text-sm">
            Empowering students to achieve their global academic and career aspirations through expert guidance and personalized solutions.
          </p>
          <div className="flex gap-3">
            {[
              { icon: <FacebookIcon />, href: "https://www.facebook.com/share/1TwruuvQF4/" },
              { icon: <TwitterIcon />, href: "#" },
              { icon: <LinkedinIcon />, href: "#" },
              { icon: <InstagramIcon />, href: "#" }
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target={social.href !== "#" ? "_blank" : undefined}
                rel={social.href !== "#" ? "noopener noreferrer" : undefined}
                whileHover={{ y: -5 }}
                style={{ backgroundColor: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.95)' }}
                className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center cursor-pointer hover:bg-accent hover:text-primary transition-colors duration-300"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-base md:text-lg font-semibold mb-6 text-accent text-white uppercase tracking-widest">Quick Navigation</h2>
          <ul className="space-y-3 text-white/90 font-medium text-sm">
            <li><Link href="/" className="hover:text-white transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-all"></span> Home</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-all"></span> Services</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-all"></span> About Us</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-all"></span> Contact</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-base md:text-lg font-semibold mb-6 text-white uppercase tracking-widest">Our Focus</h2>
          <ul className="space-y-3 text-white/90 font-medium text-sm">
            <li className="hover:text-white transition-colors cursor-pointer">Student Visa Support</li>
            <li className="hover:text-white transition-colors cursor-pointer">Global Admissions</li>
            <li className="hover:text-white transition-colors cursor-pointer">Career Strategy</li>
            <li className="hover:text-white transition-colors cursor-pointer">Scholarship Access</li>
          </ul>
        </div>

        <div>
          <h2 className="text-base md:text-lg font-semibold mb-6 text-white uppercase tracking-widest">Direct Support</h2>
          <ul className="space-y-4 text-white/90 font-medium text-sm">
            <li className="flex gap-3">
              <MapPin className="text-accent shrink-0" size={18} />
              <span className="leading-relaxed opacity-90">Office 702 2nd Floor Ashrafi Heights Main Market Gulberg 2 Lahore</span>
            </li>
            <li className="flex gap-3 items-center group">
              <Phone className="text-accent shrink-0" size={18} />
              <a href="https://wa.me/923128188146" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                03128188146
                <span className="text-[10px] bg-green-500 text-white px-2 py-0.5 rounded-full font-black uppercase tracking-tighter">WhatsApp</span>
              </a>
            </li>
            <li className="flex gap-3 items-center group">
              <Mail className="text-accent shrink-0" size={18} />
              <a href="mailto:contact.pacesetterinternational@gmail.com" target='_blank' className="hover:text-white transition-colors break-all">contact.pacesetterinternational@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-custom pt-8 flex flex-col md:flex-row justify-between items-center text-white/80 text-[10px] font-bold uppercase tracking-[0.2em] gap-6">
        <p>&copy; {new Date().getFullYear()} Pace Setter International. Designed for Global Success.</p>
        <div className="flex gap-8">
          <Link href="#" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Privacy Policy</Link>
          <Link href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
