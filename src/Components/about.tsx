"use client";
import { Heart, BookText, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      
      {/* Background Watermark - Keeps the "Cool" Brand Consistency */}
      <div className="absolute -bottom-10 -right-20 text-[20vw] font-black text-[#007ACC]/5 select-none pointer-events-none uppercase">
        Hore
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">

        {/* IMAGE — Modern Editorial Frame */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="order-1 lg:order-2 relative"
        >
          {/* The "Cool" Background Frame */}
          <div className="absolute -top-6 -right-6 w-full h-full border-2 border-[#007ACC]/10 rounded-2xl hidden lg:block" />
          
          <div className="relative border border-slate-100 p-3 bg-white shadow-2xl rounded-2xl overflow-hidden">
            <img
              src="/hadraawi.webp"
              alt="Abwaan Soomaaliyeed"
              className="
                w-full
                max-h-[400px] md:max-h-[500px] lg:max-h-[600px]
                object-cover
                rounded-xl
                bg-[#f6faff]
              "
            />
            {/* Overlay Gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
          </div>

          {/* Floating Stats or Caption */}
          <div className="absolute -bottom-6 -left-6 bg-[#007ACC] text-white p-6 rounded-2xl shadow-xl hidden md:block">
            <p className="text-2xl font-black italic tracking-tighter">Est. 2026</p>
            <p className="text-[10px] uppercase tracking-widest opacity-80">Muqdisho, Soomaaliya</p>
          </div>
        </motion.div>

        {/* TEXT — Clean & Sophisticated */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative order-2 lg:order-1"
        >
          {/* Identity Badge */}
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="w-10 h-[2px] bg-[#007ACC]" />
            <span className="text-[12px] font-bold text-[#007ACC] uppercase tracking-[0.3em]">
              Gole Hal-Abuur
            </span>
          </div>

          <h2
            className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-[0.9] tracking-tighter"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Waa maxay <br /> 
            <span className="text-[#007ACC] italic underline decoration-[#007ACC]/20 decoration-4">Maanso</span>?
          </h2>

          <div className="space-y-6 max-w-xl">
            <p className="text-slate-600 text-lg leading-relaxed font-medium">
              Maanso waa madal u heellan ilaalinta, kobcinta, iyo faafinta
              suugaanta Soomaaliyeed. Waxay isu keentaa gabayo, geeraarro,
              iyo hal-abuur ka kala imanaya jiilal kala duwan.
            </p>

            <p className="text-slate-500 text-base leading-relaxed border-l-4 border-slate-100 pl-6 italic">
              "Waa hoy ay ku kulmaan abwaanno, akhristayaal, iyo dhammaan kuwa
              jecel afka hooyo — si erayadu u sii noolaadaan."
            </p>
          </div>

          {/* Actions — Modern Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-8">
            <button className="group relative px-8 py-4 bg-[#4189DD] text-white font-bold rounded-xl overflow-hidden transition-all hover:bg-[#007ACC]">
              <span className="relative z-10 flex items-center gap-2">
                BARO WAX BADAN <ArrowUpRight className="w-4 h-4" />
              </span>
            </button>

            <button className="flex items-center gap-3 text-slate-900 font-bold text-sm uppercase tracking-widest group">
              <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-[#007ACC] group-hover:text-white group-hover:border-[#007ACC] transition-all">
                <Heart className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
              </div>
              Ku Soo Biir
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;