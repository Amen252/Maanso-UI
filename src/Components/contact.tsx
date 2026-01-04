"use client";
import React from 'react';
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="relative min-h-screen bg-white py-24 px-6 selection:bg-[#007ACC] selection:text-white">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -z-10" />

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Side: Clean Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="pt-10"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="h-[2px] w-8 bg-[#007ACC]" />
            <span className="text-[#007ACC] text-[11px] font-bold uppercase tracking-[0.3em]">Xiriirka</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900 mb-6 leading-tight">
            Nala soo xiriir <br />
            <span className="text-[#007ACC] font-bold underline decoration-slate-100 underline-offset-8">Maanso Archive</span>
          </h2>

          <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-md mb-12">
            Su’aalo, soo jeedin ama wada shaqeyn? Waxaan jeclaan lahayn inaan kaa maqalno. Buuxi foomka ama nala soo xiriir si toos ah.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-5 group">
              <div className="w-12 h-12 rounded-xl bg-[#007ACC] text-white flex items-center justify-center shadow-lg shadow-[#007ACC]/20 transition-transform group-hover:rotate-6">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Email-ka</p>
                <p className="text-slate-900 font-semibold">info@maanso.com</p>
              </div>
            </div>

            <div className="flex items-center gap-5 group">
              <div className="w-12 h-12 rounded-xl bg-[#007ACC] text-white flex items-center justify-center shadow-lg shadow-[#007ACC]/20 transition-transform group-hover:rotate-6">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Telefoonka</p>
                <p className="text-slate-900 font-semibold">+252 618 972 047</p>
              </div>
            </div>

            <div className="flex items-center gap-5 group">
              <div className="w-12 h-12 rounded-xl bg-[#007ACC] text-white flex items-center justify-center shadow-lg shadow-[#007ACC]/20 transition-transform group-hover:rotate-6">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Goobta</p>
                <p className="text-slate-900 font-semibold">Mogadishu, Somalia</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side: The Floating Form Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-slate-100 rounded-[32px] shadow-2xl shadow-slate-200/50 p-10 lg:p-12 relative overflow-hidden"
        >
          {/* Subtle Accent Glow */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#007ACC]/5 blur-[80px] rounded-full" />

          <form className="space-y-8 relative z-10">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-widest text-slate-400 ml-1">Magacaaga</label>
                <input
                  type="text"
                  placeholder="Geli magacaaga"
                  className="w-full bg-slate-50 border-none rounded-xl px-5 py-4 text-slate-900 font-medium placeholder:text-slate-300 focus:ring-2 focus:ring-[#007ACC]/20 transition-all outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-widest text-slate-400 ml-1">Email-ka</label>
                <input
                  type="email"
                  placeholder="info@tusaale.com"
                  className="w-full bg-slate-50 border-none rounded-xl px-5 py-4 text-slate-900 font-medium placeholder:text-slate-300 focus:ring-2 focus:ring-[#007ACC]/20 transition-all outline-none"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[11px] font-bold uppercase tracking-widest text-slate-400 ml-1">Fariintaada</label>
              <textarea
                rows={5}
                placeholder="Qor fariintaada halkan..."
                className="w-full bg-slate-50 border-none rounded-2xl px-5 py-4 text-slate-900 font-medium placeholder:text-slate-300 focus:ring-2 focus:ring-[#007ACC]/20 transition-all outline-none resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#007ACC] text-white font-bold py-5 rounded-xl hover:bg-slate-900 transition-all shadow-xl shadow-[#007ACC]/25 flex items-center justify-center gap-3 active:scale-95 group"
            >
              DIR FARIINTA 
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;