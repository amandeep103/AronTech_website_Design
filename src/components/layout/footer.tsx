'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, ArrowUpRight } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full pt-16 md:pt-24 bg-black overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 mb-16 md:mb-20">
          {/* Brand Column */}
          <div className="md:col-span-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-[#A41B06] rotate-45 rounded-sm" />
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold">A</div>
              </div>
              <div className="font-bold text-2xl tracking-tighter">
                <span className="text-white">ARON</span>
                <span className="text-[#1C3B90]">TECH</span>
              </div>
            </div>
            <p className="text-slate-400 text-base md:text-lg max-w-xs mx-auto md:mx-0 leading-relaxed">
              Get your business to the new heights with our AI-powered digital solutions.
            </p>
          </div>

          {/* Legal Links */}
          <div className="md:col-span-3 text-center md:text-left">
            <h4 className="text-white font-bold mb-6 flex items-center justify-center md:justify-start gap-2">
              <span className="w-1 h-4 bg-[#1C3B90] rounded-full" />
              Legal
            </h4>
            <ul className="space-y-4">
              {['Terms and Conditions', 'Privacy Policy', 'Verify Certificate', 'About Us', 'Enquiry'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-400 hover:text-[#FAB524] transition-colors flex items-center justify-center md:justify-start group gap-1">
                    {item}
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -translate-y-1" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="md:col-span-5 text-center md:text-right">
            <div className="mb-8">
              <a href="mailto:hello@arontech.co" className="text-xl md:text-3xl font-bold text-white hover:text-[#FAB524] transition-colors inline-flex items-center gap-3">
                hello@arontech.co
                <Mail className="text-slate-500 w-5 h-5 md:w-6 md:h-6" />
              </a>
              <p className="text-slate-500 mt-2 uppercase tracking-widest text-xs md:text-sm">Drop a mail</p>
            </div>

            <div className="space-y-2">
              <div className="text-lg md:text-2xl font-bold text-white flex items-center justify-center md:justify-end gap-3">
                +91 96464 21519
                <Phone size={18} className="text-[#1C3B90] md:w-5 md:h-5" />
              </div>
              <div className="text-lg md:text-2xl font-bold text-white flex items-center justify-center md:justify-end gap-3">
                +91 97807 15195
                <Phone size={18} className="text-[#1C3B90] md:w-5 md:h-5" />
              </div>
              <p className="text-slate-500 mt-2 uppercase tracking-widest text-xs md:text-sm">WhatsApp or Call</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 pb-4 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500">
          <p>© {currentYear} Aron Tech. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {['Terms and Conditions', 'Privacy Policy', 'Verify Certificate', 'About Us', 'Enquiry'].map((item) => (
              <a key={item} href="#" className="hover:text-white transition-colors">{item}</a>
            ))}
          </div>
        </div>
      </div>

      {/* Gigantic Background Typography */}
      <div className="relative w-full mt-12 select-none pointer-events-none overflow-hidden">
        <h2 className="text-[15vw] font-black tracking-tighter text-center leading-none">
          <span className="bg-gradient-to-b from-white/50 via-white/30 to-transparent bg-clip-text text-transparent">
            ARONTECH
          </span>
        </h2>
        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />
      </div>
    </footer>
  );
}