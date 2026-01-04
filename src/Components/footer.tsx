"use client";
import React from 'react';
import { Facebook, Twitter, Youtube, Mail, Command } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          {/* Brand Identity */}
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-[#007ACC] text-white">
                <Command size={20} strokeWidth={2.5} />
              </div>
              <span className="text-2xl font-semibold tracking-tight text-slate-900">
                Maanso<span className="text-[#007ACC]">.</span>
              </span>
            </div>
            <p className="text-slate-500 text-base font-medium leading-relaxed max-w-sm">
              Maanso waa madal lagu xoojinayo suugaanta Soomaaliyeed — ururinta, dhiirrigelinta iyo wadaagga gabayada iyo hal-abuurka.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-6">Bogagga</h3>
            <ul className="space-y-4 text-slate-500 font-medium">
              <li><a href="/" className="hover:text-[#007ACC] transition-colors">Home</a></li>
              <li><a href="/features" className="hover:text-[#007ACC] transition-colors">Astaamaha</a></li>
              <li><a href="/about" className="hover:text-[#007ACC] transition-colors">Ku Saabsan</a></li>
              <li><a href="/contact" className="hover:text-[#007ACC] transition-colors">La Xiriir</a></li>
            </ul>
          </div>

          {/* Social / Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-6">La Soco Maanso</h3>
            <div className="flex gap-4 mb-6">
              {[
                { Icon: Facebook, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: Youtube, href: "#" },
                { Icon: Mail, href: "mailto:info@maanso.com" }
              ].map(({ Icon, href }, idx) => (
                <a 
                  key={idx} 
                  href={href} 
                  className="w-10 h-10 rounded-lg bg-slate-50 text-slate-400 flex items-center justify-center hover:bg-[#007ACC] hover:text-white transition-all duration-300"
                >
                  <Icon size={18} strokeWidth={2} />
                </a>
              ))}
            </div>
            <p className="text-slate-900 font-semibold tracking-wide underline decoration-[#007ACC] underline-offset-4 decoration-2">
              info@maanso.com
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm font-medium">
            © {new Date().getFullYear()} Maanso Archive. Dhammaan xuquuqdu way xafidan tahay.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-xs font-bold text-slate-400 uppercase tracking-widest hover:text-slate-900 transition-colors">Privacy</a>
            <a href="#" className="text-xs font-bold text-slate-400 uppercase tracking-widest hover:text-slate-900 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}