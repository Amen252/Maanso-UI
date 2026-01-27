"use client";
import React from 'react';
import {
  Lightbulb,
  BookOpen,
  Users,
  Mic,
  PenTool,
  Globe2,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Lightbulb,
    title: "Hal-abuurka Cusub",
    desc: "Meel lagu soo bandhigo gabayo aan horay loo arag, loona dhiirigeliyo abwaanada da'da yar.",
    color: "bg-[#007ACC]/10",
    iconColor: "text-[#007ACC]",
    label: "Innovation"
  },
  {
    icon: BookOpen,
    title: "Keydka Qaran",
    desc: "Maanso waa keydka kaliya ee suugaanta Soomaaliyeed ku ururiyo hal qaab oo casri ah.",
    color: "bg-blue-50/50",
    iconColor: "text-[#007ACC]",
    label: "Archive"
  },
  {
    icon: Users,
    title: "Kulanka Bahda",
    desc: "Halkan waa halka ay isku dhex galaan abwaanada caanka ah iyo akhristayaasha suugaanta.",
    color: "bg-[#007ACC]/5",
    iconColor: "text-[#007ACC]",
    label: "Community"
  },
  {
    icon: Mic,
    title: "Maqal Tayo Leh",
    desc: "Dhageyso gabayada oo leh codad cad iyo muuqaallo lagula soconayo qoraalka (Lyrics).",
    color: "bg-blue-50/50",
    iconColor: "text-[#007ACC]",
    label: "Media"
  },
  {
    icon: PenTool,
    title: "Qalabka Qoraalka",
    desc: "Waxaan kuu diyaarinay qalab kuu sahlaya inaad si fudud u qorto oo u nidaamiso maansada.",
    color: "bg-[#007ACC]/10",
    iconColor: "text-[#007ACC]",
    label: "Tools"
  },
  {
    icon: Globe2,
    title: "Gaaritaan Caalami ah",
    desc: "Suugaanteenu hadda waxay diyaar u tahay in laga dhex akhristo dacalada dunida.",
    color: "bg-[#007ACC]/5",
    iconColor: "text-[#007ACC]",
    label: "Global"
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Background pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none"
        style={{ backgroundImage: `radial-gradient(#007ACC 1px, transparent 0)`, backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Balanced Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#007ACC]/10 text-[#007ACC] text-[10px] font-bold uppercase tracking-[0.2em] mb-6"
            >
              <Sparkles size={14} className="fill-[#007ACC]" />
              <span>Maxaa Maanso Gaar u ah?</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]"
            >
              Suugaanta <span className="text-[#007ACC]">Haddaad</span> <br className="hidden md:block" />
              u Baahan tahay.
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-lg max-w-sm leading-relaxed border-l-2 border-[#007ACC]/20 pl-6"
          >
            Waagii hore suugaanta waxay ku koobneyd gole furan, maanta Maanso waxay kuu keentay calaacasha gacantaada.
          </motion.p>
        </div>

        {/* Premium Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative p-10 rounded-[40px] bg-slate-50/50 border border-slate-100 hover:border-[#007ACC]/20 hover:bg-white hover:shadow-2xl hover:shadow-[#007ACC]/5 transition-all duration-500 flex flex-col justify-between"
              >
                <div className="relative z-10">
                  <div className="flex justify-between items-center mb-8">
                    <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center ${item.iconColor} group-hover:scale-110 transition-transform duration-500`}>
                      <Icon size={28} strokeWidth={1.5} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-slate-400">{item.label}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-[#007ACC] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-10 flex items-center gap-2 text-[#007ACC] font-bold text-sm tracking-tight group/btn pointer-events-none">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">Faahfaahin</span>
                  <div className="w-8 h-8 rounded-full border border-[#007ACC]/20 flex items-center justify-center group-hover:bg-[#007ACC] group-hover:text-white transition-all duration-300">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Premium CTA Banner - Primary Blue Theme */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-12 md:p-20 bg-gradient-to-br from-[#007ACC] via-[#0066AA] to-[#005599] rounded-[48px] relative overflow-hidden group shadow-2xl shadow-[#007ACC]/20"
        >
          {/* Animated Mesh Pattern Background */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#ffffff_1.2px,transparent_0)] bg-[size:32px_32px] group-hover:scale-110 transition-transform duration-[20s]" />
            <motion.div
              animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-1/2 -right-1/4 w-full h-full bg-white/10 blur-[120px] rounded-full"
            />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center text-center lg:text-left">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white/90 text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
                <Sparkles size={14} />
                <span>Ku biir Maanso hadda</span>
              </div>
              <h3 className="text-4xl md:text-6xl font-extrabold text-white tracking-tighter mb-6 leading-[1.05]">
                BILOW <br /> <span className="text-blue-100">KACAANKA.</span>
              </h3>
              <p className="text-white/80 text-lg md:text-xl max-w-xl font-medium leading-relaxed">
                Ka mid noqo kumanaanka abwaan iyo akhristayaal ee maalin kasta suugaanta Soomaaliyeed ku dhex milma.
              </p>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row gap-4 shrink-0 w-full lg:w-auto">
              <button className="h-16 px-12 bg-white text-[#007ACC] font-bold text-lg rounded-2xl shadow-2xl hover:bg-blue-50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300">
                Iska Diiwaangeli
              </button>
              <button className="h-16 px-12 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-lg rounded-2xl hover:bg-white/20 transition-all duration-300">
                Baro Wax Badan
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
