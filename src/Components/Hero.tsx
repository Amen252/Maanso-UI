import { Link } from "react-router-dom";
import { BookOpen, Mic, Users, ArrowRight, Search, Sparkles, Trophy } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">

      {/* Background Sophistication */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#007ACC05_2px,transparent_2px)] [background-size:40px_40px] opacity-40" />
      <div className="absolute top-[10%] left-[-5%] w-[500px] h-[500px] bg-[#007ACC]/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Simple Header with High-End Feel */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#007ACC]/5 text-[#007ACC] text-[10px] font-black uppercase tracking-[0.3em] mb-8 border border-[#007ACC]/10"
          >
            <Trophy size={14} />
            <span>Kaydka Suugaanta Soomaaliyeed</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-bold text-slate-900 mb-8 tracking-tighter leading-[0.9]"
          >
            Sahami Kaydka <span className="text-[#007ACC]">Maanso</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-lg md:text-2xl mb-12 leading-relaxed max-w-2xl mx-auto font-medium"
          >
            Goobta ugu weyn ee lagu kaydiyo suugaanta, gabayada, iyo taariikhda hodanka ah ee Soomaaliyeed.
          </motion.p>

          {/* Premium Search - High Fidelity */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative max-w-2xl mx-auto group"
          >
            <div className="absolute -inset-1.5 bg-gradient-to-r from-[#007ACC] to-blue-400 rounded-[30px] opacity-0 group-hover:opacity-10 blur-xl transition-all duration-500" />
            <div className="relative flex items-center bg-white border-2 border-slate-100 rounded-[24px] p-2.5 shadow-2xl shadow-slate-200/50 group-focus-within:border-[#007ACC]/30 transition-all">
              <Search className="ml-5 text-slate-300 group-focus-within:text-[#007ACC] transition-colors" size={24} />
              <input
                type="text"
                placeholder="Raadi gabay, abwaan, ama maanso..."
                className="flex-1 bg-transparent border-none outline-none px-6 text-slate-800 placeholder:text-slate-400 font-bold h-14 text-lg"
              />
              <button className="bg-[#007ACC] text-white px-8 h-14 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#006bb3] hover:shadow-xl hover:shadow-[#007ACC]/20 transition-all active:scale-95 flex items-center gap-2">
                Raadi <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Clean Bento Grid - High End Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              link: "/poems",
              icon: BookOpen,
              title: "Diiwaanka Qorran",
              desc: "Akhriso boqolaal gabay oo qorran kuna kaydsan diiwaanka qaranka.",
              cta: "Akhriso Hadda"
            },
            {
              link: "/poems",
              icon: Mic,
              title: "Maqal & Muuqaal",
              desc: "Dhageyso codadka abwaanada iyo cajalado dhif ah oo leh tayada sare.",
              cta: "Dhageyso Hadda"
            },
            {
              link: "/register",
              icon: Users,
              title: "Bulshada Maanso",
              desc: "Ku biir dooda, falanqaynta iyo wadaagga suugaanta jiilka cusub.",
              cta: "Ku Biir Hadda"
            }
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
            >
              <Link to={card.link} className="group block p-10 rounded-[40px] border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-[#007ACC]/20 hover:shadow-[0_30px_60px_-15px_rgba(0,122,204,0.1)] transition-all duration-500 h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#007ACC]/[0.02] rounded-bl-[100px] transition-all group-hover:bg-[#007ACC]/5" />

                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-[#007ACC] shadow-sm mb-8 border border-slate-50 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <card.icon size={32} strokeWidth={1.5} />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-[#007ACC] transition-colors tracking-tight">{card.title}</h3>
                <p className="text-slate-500 mb-10 leading-relaxed font-medium">{card.desc}</p>

                <div className="flex items-center gap-3 text-[#007ACC] font-black text-[10px] uppercase tracking-[0.2em] group/btn pt-6 border-t border-slate-100">
                  {card.cta}
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hero;