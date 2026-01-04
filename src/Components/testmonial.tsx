"use client";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Ismail Abdifadil",
      role: "Full-Stack Developer — JTECH",
      quote: "Maanso waa meel aan ku dhiirranaado inaan hal-abuurkeyga la wadaago. Waa hoygii suugaanta Soomaaliyeed.",
      image: "/ismail.jpg",
    },
    {
      name: "Sadak Mohamed",
      role: "Developer & Suugaan-jecel",
      quote: "Waxaan ka helay Maanso fursad aan ku akhriyo gabayo cusub iyo kuwa hore. Waa madal waxbarasho iyo hal-abuur.",
      image: "/sadak.jpg",
    },
    {
      name: "Hodan Ibrahim",
      role: "Data Scientist & Developer",
      quote: "Maanso waxay igu dhiirrigelisay inaan dib u xasuusto suugaantii hore iyo quruxda afkeenna hooyo.",
      image: "/mare.jpg",
    },
  ];

  return (
    <section className="py-24 bg-white relative border-t border-slate-100">
      
      {/* Subtlest possible background grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`, backgroundSize: '100px 100px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header: Focused & Sharp */}
        <div className="mb-20">
          <p className="text-[#007ACC] font-mono text-[10px] tracking-[0.4em] uppercase mb-4">Feedback_01</p>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase italic">
            Codadka <span className="text-slate-300">Bulshada</span>
          </h2>
        </div>

        {/* Cards Grid: Sharp Borders, No Heavy Shadows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-slate-100">
          {testimonials.map((t, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="group p-10 border-r border-b border-slate-100 transition-colors duration-500 hover:bg-slate-50"
            >
              <div className="flex flex-col h-full">
                {/* Minimalist Quote Icon */}
                <div className="mb-8">
                  <div className="w-8 h-[2px] bg-[#007ACC]" />
                </div>

                <div className="flex-1">
                  <p className="text-lg md:text-xl font-meduim text-slate-800 leading-tight tracking-tight mb-12">
                    "{t.quote}"
                  </p>
                </div>

                {/* Author Info: Sharp & Grayscale */}
                <div className="flex items-center gap-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 object-cover grayscale brightness-110"
                  />
                  <div className="min-w-0">
                    <h4 className="font-black text-xs text-slate-900 uppercase tracking-widest">
                      {t.name}
                    </h4>
                    <p className="text-[10px] font-medium text-slate-400 uppercase tracking-tight">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA: Simple & Thin */}
        <div className="mt-16 pt-8 border-t border-slate-100 flex justify-between items-center text-[10px] font-mono text-slate-400 tracking-widest uppercase">
          <span>Maanso Platform // 2026</span>
          <span className="text-[#007ACC]">Verified Testimonials</span>
        </div>
      </div>
    </section>
  );
}