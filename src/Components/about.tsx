"use client";
import React from "react";
import { Heart, ArrowUpRight, Sparkles, BookOpen, Quote, ShieldCheck, History, Landmark } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 md:py-40 bg-white relative overflow-hidden font-sans border-y border-slate-50">

      {/* Visual Identity Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#007ACC]/[0.02] -z-10" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#007ACC]/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 p-24 opacity-[0.03] select-none pointer-events-none">
        <h2 className="text-[15vw] font-black uppercase tracking-tighter leading-none">Maanso</h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

        {/* IMAGE COMPOSITION — (Col 5) */}
        <div className="lg:col-span-5 relative order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-20"
          >
            {/* High-Fidelity Portrait Frame */}
            <div className="relative group">
              <div className="absolute -inset-8 border-2 border-[#007ACC]/5 rounded-[60px] -z-10 scale-95 group-hover:scale-105 transition-transform duration-1000" />
              <div className="relative aspect-[4/5] bg-white rounded-[56px] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,122,204,0.15)] border-8 border-white">
                <img
                  src="/Hadr.jpeg"
                  alt="Hadraawi"
                  className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-110"
                />

                {/* Editorial Overlay */}
                <div className="absolute inset-x-8 bottom-8 p-8 bg-slate-900/60 backdrop-blur-2xl rounded-[32px] border border-white/20 text-white shadow-2xl">
                  <div className="flex items-center gap-3 mb-3">
                    <Quote size={16} className="text-blue-300 fill-current" />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-200">Murtida Maanso</span>
                  </div>
                  <p className="text-sm md:text-base font-medium italic leading-relaxed text-blue-50/90">
                    "Afku waa ammaanada kowaad ee ummaddu leedahay."
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Sophisticated Labels */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute -top-12 -right-6 bg-white p-6 rounded-[32px] shadow-2xl border border-slate-100 flex items-center gap-5 z-30"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#007ACC] text-white flex items-center justify-center shadow-lg shadow-[#007ACC]/30">
                <Landmark size={20} />
              </div>
              <div>
                <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#007ACC] mb-1">Taxanaha</h5>
                <p className="text-base font-bold text-slate-900 tracking-tight">Dhaxalka Qaran</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-10 -left-10 bg-white p-6 rounded-[32px] text-slate-900 shadow-2xl border border-slate-100 flex items-center gap-5 z-30"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center border border-blue-100">
                <ShieldCheck size={24} className="text-[#007ACC]" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-1">Tayada</p>
                <p className="text-base font-bold tracking-tight text-slate-900">100% Sugnaan</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* TEXT CONTENT — High-End Clean (Col 7) */}
        <div className="lg:col-span-7 space-y-12 relative order-1 lg:order-2">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#007ACC] text-white text-[10px] font-black uppercase tracking-[0.3em] shadow-lg shadow-[#007ACC]/20"
            >
              <Sparkles size={14} fill="currentColor" />
              <span>Sahami Maanso</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-6xl md:text-8xl font-bold text-slate-900 tracking-tighter leading-[0.85]"
            >
              Waa Hoyga <br />
              <span className="text-[#007ACC] relative">
                Suugaanta
                <div className="absolute -bottom-3 left-0 w-full h-1.5 bg-[#007ACC]/20 rounded-full" />
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-600 text-xl md:text-2xl leading-relaxed font-medium max-w-xl indent-12"
            >
              Maanso waa madal casri ah oo u heellan ilaalinta, kobcinta, iyo faafinta suugaanta hodanka ah ee Soomaaliyeed iyadoo la adeegsanayo farsamadii <span className="text-slate-900 font-bold border-b-2 border-[#007ACC]">ugu danbeysay</span>.
            </motion.p>
          </div>

          {/* Luxury Feature Pillars */}
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { icon: Heart, title: "Daryeelka Afka", desc: "Hadafkayagu waa inaan ilaalino oo aan daryeelno afka hooyo ee qaaliga ah." },
              { icon: History, title: "Raad-raac Guun ah", desc: "Ururinta gabayadii hore iyo kuwa cusubba si aan loogu lumin waqtiga." }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + (i * 0.1) }}
                className="group space-y-5"
              >
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-[#007ACC] transition-all duration-500 group-hover:bg-[#007ACC] group-hover:text-white group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-[#007ACC]/20">
                  <feature.icon size={28} strokeWidth={1.5} />
                </div>
                <h5 className="text-2xl font-bold text-slate-900 leading-tight tracking-tight">{feature.title}</h5>
                <p className="text-base text-slate-500 leading-relaxed font-medium">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* High-Fidelity Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center gap-10 pt-10 border-t border-slate-100"
          >
            <button className="group relative px-10 py-5 bg-[#007ACC] text-white font-black rounded-[20px] hover:bg-[#006bb3] hover:shadow-2xl hover:shadow-[#007ACC]/30 transition-all active:scale-95 overflow-hidden">
              <span className="relative z-10 flex items-center gap-3 text-xs tracking-[0.2em] uppercase">
                Baro Bahda Maanso <ArrowUpRight size={18} />
              </span>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>

            <button className="flex items-center gap-4 text-slate-950 font-black text-xs uppercase tracking-[0.15em] hover:text-[#007ACC] transition-colors group">
              Ku Soo Biir Maanta
              <div className="w-14 h-14 rounded-full border-2 border-slate-100 flex items-center justify-center transition-all group-hover:border-[#007ACC] group-hover:scale-110">
                <Heart size={20} fill="currentColor" className="text-red-500" />
              </div>
            </button>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;