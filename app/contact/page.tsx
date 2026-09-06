'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, ChevronRight } from 'lucide-react';


export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    qualification: '',
    cgpa: '',
    phone: '',
    destination: '',
    service: 'Visa Counseling',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappNumber = "923128188146";
    const message = `*PACE SETTER INTERNATIONAL ASSESSMENT REQUEST*%0A%0A` +
      `*Student Name:* ${formState.name}%0A` +
      `*Qualification:* ${formState.qualification}%0A` +
      `*CGPA:* ${formState.cgpa}%0A` +
      `*Phone Number:* ${formState.phone}%0A` +
      `*Desired Destination:* ${formState.destination}%0A` +
      `*Service Interest:* ${formState.service}%0A%0A` +
      `*Student Inquiry:*%0A${formState.message}`;

    // Redirect to WhatsApp
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');

    alert('Thank you! Redirecting you to WhatsApp for instant consultation.');
    setFormState({ name: '', qualification: '', cgpa: '', phone: '', destination: '', service: 'Visa Counseling', message: '' });
  };

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
            Let&apos;s <span className="text-accent underline decoration-4 underline-offset-8">Talk</span>.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm md:text-base text-white/90 max-w-2xl mx-auto"
          >
            Start your international journey with a free, expert consultation today.
          </motion.p>
        </div>
      </section>

      <section className="section-padding bg-white relative overflow-hidden">
        {/* Animated Background Orbs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-x-1/3 translate-y-1/3"></div>

        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 relative z-10">
          {/* Contact Information & Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="text-accent font-black tracking-[0.2em] uppercase border-l-4 border-accent pl-4 text-xs">Get in Touch</span>
              <h2 className="text-2xl md:text-3xl font-bold text-primary leading-tight">We&apos;re Here to <br />Guide You.</h2>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Whether you have a specific question or just want to explore your options, our team of global experts is ready to help.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: <MapPin className="text-accent" size={20} />, label: "Visit Us", val: "Office 702 2nd Floor Ashrafi Heights Main Market Gulberg 2 Lahore", href: "#" },
                { icon: <Phone className="text-accent" size={20} />, label: "WhatsApp Us", val: "03128188146", href: "https://wa.me/923128188146" },
                { icon: <Mail className="text-accent" size={20} />, label: "Email Us", val: "contact.pacesetterinternational@gmail.com", href: "mailto:contact.pacesetterinternational@gmail.com" },
                { icon: <Clock className="text-accent" size={20} />, label: "Open Hours", val: "Mon - Sat: 10AM - 5PM", href: "#" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="space-y-2 p-5 md:p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-accent/30 transition-all duration-300 shadow-sm"
                >
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-md mb-1">{item.icon}</div>
                  <h4 className="font-bold text-primary uppercase tracking-widest text-[10px]">{item.label}</h4>
                  {item.href !== "#" ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-xs text-slate-600 font-bold hover:text-accent transition-colors break-all leading-relaxed">{item.val}</a>
                  ) : (
                    <p className="text-xs text-slate-600 font-bold leading-relaxed">{item.val}</p>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Embedded Google Map */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-full h-[300px] rounded-2xl overflow-hidden shadow-2xl border-[8px] border-slate-50 group"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1700.515457755523!2d74.34727597790986!3d31.523310831944567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904f9e13c72e7%3A0x90ff9a1e9f70a751!2sAshrafi%20Heights%2C%20Main%20Market%2C%20Lahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1788531265411!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-700"
              ></iframe>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-[0_50px_100px_rgba(3,43,90,0.1)] p-6 md:p-10 border border-slate-50 relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-1.5 bg-accent"></div>
            <div className="space-y-3 mb-8">
              <h3 className="text-2xl font-bold text-primary tracking-tight">Secure Assessment</h3>
                  <p className="text-slate-700 text-sm">Fill in your details for a personalized evaluation by our experts.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[9px] font-black text-primary uppercase tracking-[0.2em] ml-1 opacity-60">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ahmad Raza"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 text-primary text-sm placeholder:text-slate-300 focus:bg-white focus:border-accent focus:shadow-lg focus:shadow-accent/5 outline-none transition-all font-bold"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[9px] font-black text-primary uppercase tracking-[0.2em] ml-1 opacity-60">Qualification</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. A-Levels / Bachelors"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 text-primary text-sm placeholder:text-slate-300 focus:bg-white focus:border-accent focus:shadow-lg focus:shadow-accent/5 outline-none transition-all font-bold"
                    value={formState.qualification}
                    onChange={(e) => setFormState({ ...formState, qualification: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[9px] font-black text-primary uppercase tracking-[0.2em] ml-1 opacity-60">CGPA / Percentage</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 3.8 or 85%"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 text-primary text-sm placeholder:text-slate-300 focus:bg-white focus:border-accent focus:shadow-lg focus:shadow-accent/5 outline-none transition-all font-bold"
                    value={formState.cgpa}
                    onChange={(e) => setFormState({ ...formState, cgpa: e.target.value })}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[9px] font-black text-primary uppercase tracking-[0.2em] ml-1 opacity-60">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+92..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 text-primary text-sm placeholder:text-slate-300 focus:bg-white focus:border-accent focus:shadow-lg focus:shadow-accent/5 outline-none transition-all font-bold"
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[9px] font-black text-primary uppercase tracking-[0.2em] ml-1 opacity-60">Desired Destination</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. UK, USA, Australia"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 text-primary text-sm placeholder:text-slate-300 focus:bg-white focus:border-accent focus:shadow-lg focus:shadow-accent/5 outline-none transition-all font-bold"
                    value={formState.destination}
                    onChange={(e) => setFormState({ ...formState, destination: e.target.value })}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[9px] font-black text-primary uppercase tracking-[0.2em] ml-1 opacity-60">Service Interest</label>
                  <div className="relative">
                    <select
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 text-primary text-sm focus:bg-white focus:border-accent focus:shadow-lg focus:shadow-accent/5 outline-none transition-all appearance-none cursor-pointer font-bold"
                      value={formState.service}
                      onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                    >
                      <option>Visa Counseling</option>
                      <option>University Selection</option>
                      <option>Career Guidance</option>
                      <option>Test Preparation</option>
                      <option>Scholarships</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-primary/60">
                      <ChevronRight size={16} className="rotate-90" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[9px] font-black text-primary uppercase tracking-[0.2em] ml-1 opacity-60">Your Inquiry</label>
                <textarea
                  rows={4}
                  placeholder="How can we assist your global aspirations?"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-100 text-primary text-sm placeholder:text-slate-300 focus:bg-white focus:border-accent focus:shadow-lg focus:shadow-accent/5 outline-none transition-all resize-none font-bold"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary text-white py-3 rounded-xl text-base font-bold shadow-2xl shadow-primary/30 flex items-center justify-center gap-3 mt-2 group hover:bg-accent hover:text-primary transition-all duration-300"
              >
                Send Assessment Request <Send size={18} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
              </motion.button>

              <p className="text-center text-[9px] text-slate-600 font-bold uppercase tracking-widest mt-4">
                ⚡ Responds within 24 hours
              </p>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
