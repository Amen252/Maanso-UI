"use client";
import { ArrowRight, BookOpen } from "lucide-react";

const UpHero = () => {
  return (
    <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center overflow-hidden">

      {/* Background Image */}
      <img
        src="/hadraawi.webp"
        alt="Abwaan Soomaaliyeed"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />

      {/* Somali blue overlay */}
      <div className="absolute inset-0 bg-[#007ACC]/70" />

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28 text-white">

        {/* Label */}
        <span className="inline-flex items-center gap-2 mb-5 sm:mb-8 text-[11px] sm:text-sm tracking-widest uppercase text-white/90">
          <BookOpen className="w-4 h-4" />
          Madal Suugaaneed Soomaaliyeed
        </span>

        {/* Headline */}
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight max-w-3xl mb-6 sm:mb-10"
          style={{ fontFamily: '"Playfair Display", serif' }}
        >
          Suugaantu ma aha wax la iloobo —
          <br />
          <span className="text-white">
            waa wax la ilaaliyo
          </span>
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-2xl leading-relaxed mb-8 sm:mb-14">
          Maanso waa madal casri ah oo ururisa, nidaamisa,
          kuna faafisa suugaanta Soomaaliyeed si ay u gaarto
          jiil walba una sii noolaato.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <button className="inline-flex items-center justify-center gap-2 bg-white text-[#007ACC] px-6 sm:px-8 py-3 font-medium hover:bg-white/90 transition">
            Sahami Gabayo <ArrowRight size={18} />
          </button>

          <button className="inline-flex items-center justify-center gap-2 border border-white/60 px-6 sm:px-8 py-3 font-medium hover:bg-white/10 transition">
            Baro Abwaanada
          </button>
        </div>
      </div>
    </section>
  );
};

export default UpHero;
