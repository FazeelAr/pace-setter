'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronRight, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Destinations', href: '/study-destinations' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  // On desktop: transparent only on home hero; always solid on mobile
  const isDesktopTransparent = isHomePage && !isScrolled;

  return (
    <nav className={cn(
      "fixed w-full top-0 z-[100] transition-all duration-500",
      // Always solid on mobile; transparent only on desktop home
      "bg-white/95  border-b border-slate-200 py-3 shadow-lg shadow-black/5",
      isDesktopTransparent && "lg:bg-transparent lg:border-transparent lg:shadow-none lg:py-4"
    )}>
      {/* Mobile: Logo left | Brand text centered | Hamburger right */}
      {/* Desktop: Logo+text left | Nav center | CTA right */}
      <div className="container-custom flex justify-between items-center relative">

        {/* Logo Icon & Brand Text — always left */}
        <Link href="/" className="flex items-center gap-2 md:gap-4 group shrink-0">
          <motion.div
            whileHover={{ rotate: -8, scale: 1.05 }}
            className="relative h-10 w-10 md:h-14 md:w-14 overflow-hidden rounded-xl md:rounded-2xl bg-white shadow-xl p-1.5 border border-slate-100 group-hover:border-accent transition-colors"
          >
            <Image
              src="/pacesetter_logo.png"
              alt="Pace Setter International Logo"
              fill
              sizes="(max-width: 768px) 40px, 56px"
              className="object-contain"
              priority
            />
          </motion.div>

          <div className="flex flex-col text-left">
            <span className={cn(
              "text-base md:text-xl lg:text-2xl font-black leading-none tracking-tight transition-colors duration-500",
              "text-primary",
              isDesktopTransparent && "lg:text-white"
            )}>PACE SETTER</span>
            <span className={cn(
              "text-[8px] md:text-[9px] lg:text-[10px] font-black tracking-[0.25em] lg:tracking-[0.3em] uppercase transition-colors duration-500",
              "text-accent",
              isDesktopTransparent && "lg:text-accent-light"
            )}>INTERNATIONAL</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className={cn(
          "hidden lg:flex items-center gap-0.5 rounded-full p-1 border transition-all duration-500",
          isDesktopTransparent
            ? "bg-white/5 backdrop-blur-md border-white/10 shadow-inner"
            : "bg-slate-100 border-slate-200"
        )}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "px-3 py-2 rounded-full font-semibold text-xs transition-all duration-300 relative group overflow-hidden whitespace-nowrap",
                pathname === link.href
                  ? (isDesktopTransparent ? "bg-white text-primary shadow-xl" : "bg-primary text-white shadow-lg")
                  : (isDesktopTransparent ? "text-white/90 hover:bg-white/10" : "text-slate-700 hover:bg-white")
              )}
            >
              <span className="relative z-10">{link.name}</span>
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 md:gap-5 shrink-0">
          <Link
            href="/contact"
            className={cn(
              "hidden sm:flex items-center gap-2 px-7 py-3 rounded-full font-black text-base shadow-2xl transition-all hover:-translate-y-1 hover:scale-105 active:scale-95",
              // Always gold on mobile; white on desktop transparent hero
              "bg-accent text-white hover:text-primary shadow-accent/20",
              isDesktopTransparent && "lg:bg-white lg:text-primary lg:shadow-white/20"
            )}
          >
            Apply Now <ChevronRight size={16} />
          </Link>

          {/* Always dark toggle on mobile */}
          <button
            className="p-3 rounded-xl transition-all border shadow-sm active:scale-90 lg:hidden text-primary border-slate-200 bg-slate-50/50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-0 bg-primary/90 backdrop-blur-2xl z-[200] flex flex-col lg:hidden"
          >
            <div className="flex justify-between items-center p-6 md:p-8 border-b border-white/5">
              <div className="flex items-center gap-3">
                <Globe className="text-accent animate-pulse" size={24} />
                <span className="text-lg font-black text-white tracking-[0.2em]">PACE SETTER GLOBAL</span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-3.5 bg-white/10 rounded-2xl text-white hover:bg-accent hover:text-primary transition-all active:scale-90 shadow-xl border border-white/10"
              >
                <X size={28} />
              </button>
            </div>

            <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain flex flex-col justify-start px-10 py-8 gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + (i * 0.1) }}
                  key={link.name}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "text-2xl sm:text-3xl font-black transition-all flex items-center justify-between group py-2 border-b border-white/5",
                      pathname === link.href ? "text-accent" : "text-white/90 hover:text-white"
                    )}
                  >
                    <span className="group-hover:translate-x-2 transition-transform duration-300 uppercase tracking-wider">
                      {link.name}
                    </span>
                    <ChevronRight
                      className={cn(
                        "transition-all duration-300",
                        pathname === link.href ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                      )}
                      size={24}
                    />
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="p-8 md:p-12 space-y-8 bg-black/20 border-t border-white/5">
              <Link
                href="/contact"
                className="w-full bg-accent text-primary py-6 rounded-2xl font-black text-xl flex items-center justify-center gap-3 shadow-2xl shadow-accent/20 hover:bg-white transition-all"
              >
                Get Free Consultation <ChevronRight size={20} />
              </Link>
              <div className="flex justify-between items-center text-white/80 text-[10px] font-black tracking-widest uppercase">
                <span>Lahore, Pakistan</span>
                <span>© 2026 Pace Setter International</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
