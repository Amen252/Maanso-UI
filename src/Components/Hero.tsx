import { Link } from "react-router-dom";
import { Feather, BookOpen, ChevronRight, PenTool } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-6 py-20 overflow-hidden bg-[#f8fbff]">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[10%] w-[500px] h-[500px] rounded-full bg-[#4189DD]/5 blur-3xl" />
        <div className="absolute -bottom-[10%] -left-[10%] w-[400px] h-[400px] rounded-full bg-[#4189DD]/5 blur-3xl" />
        
        {/* Subtle Pattern Overlay (Optional: Texture feel) */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/paper-fibers.png")` }} />
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-10 rounded-full bg-white border border-[#4189DD]/20 shadow-sm transition-transform hover:scale-105 cursor-default">
          <PenTool className="w-3.5 h-3.5 text-[#4189DD]" />
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#4189DD]">
            Hoyga Suugaanta & Dhaqanka
          </span>
        </div>

        {/* Main Heading */}
        <h1
          className="text-4xl sm:text-6xl md:text-7xl font-serif mb-8 tracking-tight"
          style={{ 
            fontFamily: '"Playfair Display", serif',
            color: "#0f172a",
            lineHeight: 1.1 
          }}
        >
          Kobci garaadka iyo <br />
          <span className="relative inline-block mt-2">
            <span className="relative z-10 text-[#4189DD] italic">Hal-abuurka</span>
            <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#4189DD]/20 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
            </svg>
          </span>
          <span className="ml-3">Soomaaliyeed</span>
        </h1>

        {/* Description with enhanced legibility */}
        <p
          className="mx-auto max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed text-slate-500 mb-12"
          style={{ fontFamily: '"Poppins", sans-serif' }}
        >
          <span className="text-slate-800 font-medium">Maanso</span> waa madal u taagan daryeelka iyo baahinta hiddaha. Ku dhex jibaax kaydka weyn ee gabayada, kuna biir bahda hal-abuurka.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            to="/poems"
            className="group relative inline-flex items-center justify-center gap-3 bg-[#4189DD] text-white px-10 py-4 rounded-full font-medium overflow-hidden transition-all hover:shadow-lg hover:shadow-[#4189DD]/30 active:scale-95"
          >
            <Feather className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            <span>Akhri Gabayo</span>
          </Link>

          <Link
            to="/register"
            className="group inline-flex items-center gap-2 text-slate-700 font-semibold hover:text-[#4189DD] transition-colors"
          >
            <span>Ku Biir Maanso</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Stats / Proof (Small detail) */}
        <div className="mt-20 pt-10 border-t border-slate-200/60 flex justify-center gap-12 text-slate-400 uppercase text-[10px] tracking-widest">
          <div className="flex flex-col gap-1">
            <span className="text-slate-800 text-lg font-serif">1,000+</span>
            <span>Maansooyin</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-slate-800 text-lg font-serif">500+</span>
            <span>Abwaanno</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;