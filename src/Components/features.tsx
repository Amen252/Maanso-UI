"use client";
import React from 'react';
import {
  Lightbulb,
  BookOpen,
  Users,
  Mic,
  PenTool,
  Globe2,
  ArrowRight
} from "lucide-react";

const steps = [
  { icon: Lightbulb, title: "Hal-abuur", desc: "Abwaannadu waxay helayaan meel ay ku soo bandhigaan gabayo cusub." },
  { icon: BookOpen, title: "Ururinta", desc: "Maanso waxay noqotaa keyd suugaaneed oo lagu kaydiyo gabayo hore." },
  { icon: Users, title: "Bulsho", desc: "Abwaanno, qoraayaal, iyo akhristayaal ayaa hal meel ku kulmaya." },
  { icon: Mic, title: "Cod & Muuqaal", desc: "Gabayada waxaa lagu dhageysan karaa ama lagu daawan karaa." },
  { icon: PenTool, title: "Qorid", desc: "Qalab kuu sahlaya qorista, tafatirka, iyo kaydinta gabayada." },
  { icon: Globe2, title: "Caalami", desc: "Suugaanta Soomaaliyeed oo gaarta akhristayaal caalami ah." },
];

export default function HorizonFeatures() {
  return (
    <section className="py-24 bg-slate-50/50 selection:bg-[#007ACC] selection:text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. Header Section */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[2px] w-8 bg-[#007ACC]" />
            <span className="text-[#007ACC] text-[11px] font-bold uppercase tracking-[0.3em]">Nidaamka Maanso</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900 leading-tight">
            Sidee ayuu u <span className="text-[#007ACC] font-bold">shaqeeyaa?</span>
          </h2>
        </div>

        {/* 2. White Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                className="group p-10 bg-white border border-slate-100 rounded-[24px] shadow-sm hover:shadow-xl hover:shadow-[#007ACC]/5 transition-all duration-500 hover:-translate-y-1"
              >
                {/* BOLD ACTIVE ICON */}
                <div className="w-14 h-14 rounded-2xl bg-[#007ACC] text-white flex items-center justify-center mb-8 shadow-lg shadow-[#007ACC]/20 transition-transform duration-500 group-hover:rotate-6">
                  <Icon size={24} strokeWidth={2} />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {item.title}
                </h3>
                
                <p className="text-slate-500 leading-relaxed text-[15px] font-medium">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* 3. CTA Banner */}
        <div className="mt-20 p-10 md:p-14 rounded-[32px] bg-slate-100 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#007ACC] opacity-20 blur-[100px]" />
            
            <div className="relative z-10 text-center md:text-left">
                <h3 className="text-3xl font-bold text-[#4189DD] mb-3">Ma doonaysaa inaad qayb ka noqoto?</h3>
                <p className="text-slate-400 text-lg font-medium">Ku soo biir maanta oo dhis mustaqbalka maansada Soomaaliyeed.</p>
            </div>

            <button className="relative z-10 flex items-center gap-3 px-10 py-5 bg-[#007ACC] text-white font-bold rounded-xl hover:bg-white hover:text-[#007ACC] transition-all duration-300 shadow-xl shadow-[#007ACC]/20 active:scale-95 group">
                kuso biir 
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
        </div>

      </div>
    </section>
  );
}