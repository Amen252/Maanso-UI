"use client";
import { ArrowRight, BookOpen } from "lucide-react";

const UpHero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">

      {/* Background Image */}
      {/* Somali blue overlay */}
      <div className="absolute inset-0 bg-[#007ACC]/70" />

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 py-32 text-white">

        {/* Label */}
        <span className="inline-flex items-center gap-2 mb-8 text-sm tracking-widest uppercase text-white/90">
          <BookOpen className="w-4 h-4" />
          Madal Suugaaneed Soomaaliyeed
        </span>

        {/* Headline */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight max-w-3xl mb-10"
          style={{ fontFamily: '"Playfair Display", serif' }}
        >
          Suugaantu ma aha wax la iloobo —
          <br />
          <span className="text-white">
            waa wax la ilaaliyo
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg text-white/90 max-w-2xl leading-relaxed mb-14">
          Maanso waa madal casri ah oo ururisa, nidaamisa,
          kuna faafisa suugaanta Soomaaliyeed si ay u gaarto
          jiil walba una sii noolaato.
        </p>

        {/* Actions */}
        <div className="flex flex-wrap gap-6">
          <button className="inline-flex items-center gap-2 bg-white text-[#007ACC] px-8 py-3 font-medium hover:bg-white/90 transition">
            Sahami Gabayo <ArrowRight size={18} />
          </button>

          <button className="inline-flex items-center gap-2 border border-white/60 px-8 py-3 font-medium hover:bg-white/10 transition">
            Baro Abwaanada
          </button>
        </div>
      </div>
    </section>
  );
};

export default UpHero;
