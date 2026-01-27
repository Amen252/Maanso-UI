"use client";
import { ArrowRight, Feather, Scroll, Play, Search, Command } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const UpHero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-white selection:bg-[#007ACC] selection:text-white pt-20">

      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#007ACC10_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />
      </div>

      {/* Soft Ambient Glows */}
      <div className="absolute top-[-5%] right-[-5%] w-[400px] h-[400px] bg-blue-50 rounded-full blur-[100px]" />
      <div className="absolute bottom-[-5%] left-[-5%] w-[300px] h-[300px] bg-[#007ACC]/5 rounded-full blur-[80px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-12 items-center">

        {/* Left Column: Clean & Balanced (Col: 7) */}
        <div className="lg:col-span-7 space-y-8">

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-50 text-[#007ACC] border border-slate-200/60 shadow-sm"
            >
              <Command size={14} />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                Kaydka Qaran ee Maanso
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1]"
            >
              Dhaxalka <br />
              <span className="text-[#007ACC] italic font-serif">Gobeed</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-500 max-w-lg leading-relaxed font-medium"
            >
              Baro, akhri, oo dhageyso <span className="text-slate-900 font-semibold">murtida iyo suugaanta</span> ugu qanisan ee ummadda Soomaaliyeed.
            </motion.p>
          </div>

          {/* Action Area - Cleaner Search & Button */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Link to="/poems" className="group w-full sm:w-auto px-8 py-4 bg-[#007ACC] text-white rounded-xl font-bold text-sm tracking-wide shadow-lg shadow-[#007ACC]/20 hover:bg-[#006bb3] hover:-translate-y-0.5 transition-all">
              <span className="flex items-center gap-2">
                Sahami Gabayada
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <div className="relative group w-full sm:max-w-xs">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#007ACC] transition-colors" size={18} />
              <input
                type="text"
                placeholder="Raadi gabay ama abwaan..."
                className="w-full bg-white border border-slate-200 rounded-xl py-4 pl-12 pr-4 text-slate-700 font-medium focus:border-[#007ACC]/50 focus:ring-4 focus:ring-[#007ACC]/5 outline-none transition-all shadow-sm"
              />
            </div>
          </motion.div>

          {/* Metrics - Compact */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center gap-6 pt-2"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 overflow-hidden shadow-sm">
                  <img src={`https://i.pravatar.cc/100?img=${i + 25}`} alt="User" className="w-full h-full object-cover" />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-900 text-white flex items-center justify-center text-[10px] font-bold">
                +10k
              </div>
            </div>
            <div className="text-sm font-medium text-slate-400">
              <span className="text-slate-900 font-bold block">Beesha Maanso</span>
              Ku biir taageerayaasheena
            </div>
          </motion.div>

        </div>

        {/* Right Column: Clean Portrait (Col: 5) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 hidden lg:block relative"
        >
          <div className="relative z-10 group">
            <div className="relative aspect-[4/5] w-full max-w-sm ml-auto rounded-[40px] overflow-hidden shadow-2xl shadow-slate-200 border border-slate-100 transition-all duration-500 group-hover:shadow-[#007ACC]/10">
              <img src="/hadraawi.webp" alt="Hadraawi" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

              <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[9px] font-bold uppercase tracking-wider">
                    Abwaanka Maanta
                  </span>
                  <div className="w-10 h-10 rounded-full bg-white text-[#007ACC] flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
                    <Play size={18} fill="currentColor" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold tracking-tight mb-1">Hadraawi</h2>
                <p className="text-slate-100 text-sm font-medium italic opacity-90">"Ragga kale aqoontood..."</p>
              </div>
            </div>

            {/* Subtle Floating Tag */}
            <div className="absolute -top-6 -right-4 bg-white px-5 py-3 rounded-2xl shadow-xl border border-slate-50 flex items-center gap-3 z-30">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[#007ACC]">
                <Scroll size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">Cusuub</p>
                <p className="text-xs font-bold text-slate-900">Beled Weyn</p>
              </div>
            </div>
          </div>

          {/* Background Shape */}
          <div className="absolute top-1/2 -right-12 -translate-y-1/2 w-full h-full bg-[#007ACC]/5 rounded-[40px] -z-10 rotate-3 translate-x-4" />
        </motion.div>

      </div>
    </section>
  );
};

export default UpHero;