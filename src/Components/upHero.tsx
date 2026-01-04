"use client";
import { ArrowRight, BookOpen, PenTool, Sparkles } from "lucide-react";

const UpHero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-[#007ACC] text-white">
      
      {/* Background Decorative Layer */}
      <div className="absolute inset-0 z-0">
        {/* Subtle Geometric Pattern - reminiscent of Somali weaving */}
        <div 
          className="absolute inset-0 opacity-10" 
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
          }} 
        />
        
        {/* Soft Radial Glow */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-8">
            {/* Animated Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-blue-200" />
              <span className="text-[10px] sm:text-xs font-light tracking-[0.3em] uppercase">
                Kaydka Qaran ee Maanso
              </span>
            </div>

            {/* Headline with Focus on Typography */}
            <h1
              className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] mb-8"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Suugaantu ma aha <br />
              <span className="italic font-light text-blue-200">wax la iloobo —</span>
              <br />
              <span className="relative">
                waa wax la ilaaliyo
                <div className="absolute -bottom-2 left-0 w-1/3 h-1.5 bg-blue-400/50" />
              </span>
            </h1>

            {/* Description with Vertical Line Accent */}
            <div className="flex gap-6 mb-12 max-w-2xl">
              <div className="w-1 bg-white/20 shrink-0" />
              <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed font-light">
                Maanso waa madal casri ah oo ururisa, nidaamisa, kuna faafisa
                suugaanta Soomaaliyeed si ay u gaarto jiil walba una sii noolaato.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-5">
              <button className="group inline-flex items-center justify-center gap-3 bg-white text-[#007ACC] px-10 py-4 font-bold rounded-sm hover:translate-y-[-2px] transition-all shadow-xl shadow-black/10">
                Sahami Gabayo 
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>

              <button className="inline-flex items-center justify-center gap-3 border border-white/40 px-10 py-4 font-semibold hover:bg-white/10 transition-colors">
                <PenTool size={18} className="opacity-70" />
                Baro Abwaanada
              </button>
            </div>
          </div>

          {/* Hidden on Mobile: Visual Ornament */}
          <div className="hidden lg:flex lg:col-span-4 justify-end relative">
             <div className="relative">
                <div className="w-64 h-80 border-2 border-white/20 rounded-t-full flex items-center justify-center p-8">
                   <BookOpen className="w-32 h-32 opacity-20 text-white" />
                </div>
                {/* Floating "Ink" elements */}
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white/10 rounded-full blur-xl" />
                <div className="absolute top-10 -right-4 w-16 h-16 bg-blue-300/20 rounded-full blur-xl" />
             </div>
          </div>

        </div>
      </div>

      {/* Bottom Trim */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
};

export default UpHero;