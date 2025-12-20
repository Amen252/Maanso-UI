import { Heart, BookText } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-24 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* RIGHT — IMAGE PANEL (comes first on mobile) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="order-1 lg:order-2"
        >
          <div className="border border-[#4189DD]/15 p-4 md:p-6 bg-white shadow-md">
            <img
              src="/abwan.png"
              alt="Abwaan Soomaaliyeed"
              className="
                w-full 
                max-h-[420px] sm:max-h-[520px] md:max-h-[640px] lg:max-h-[760px]
                object-contain lg:object-cover
                bg-[#f6faff]
              "
            />
          </div>

          {/* Caption */}
          <div className="mt-4 text-sm text-slate-500 italic">
            Abwaan Soomaaliyeed — Dhaxalka suugaanta
          </div>
        </motion.div>

        {/* LEFT — TEXT PANEL */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="relative order-2 lg:order-1"
        >
          {/* Vertical identity line */}
          <div className="absolute -left-6 top-0 h-full w-[3px] bg-[#4189DD]" />

          <span className="inline-flex items-center gap-2 mb-6 text-sm text-[#4189DD] uppercase tracking-widest">
            <BookText className="w-4 h-4" />
            Ku Saabsan
          </span>

          <h2
            className="text-4xl md:text-5xl font-medium text-slate-900 mb-8 leading-tight"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Waa maxay <span className="text-[#4189DD]">Maanso</span>?
          </h2>

          <p className="text-slate-600 leading-relaxed mb-6 max-w-xl">
            Maanso waa madal u heellan ilaalinta, kobcinta, iyo faafinta
            suugaanta Soomaaliyeed. Waxay isu keentaa gabayo, geeraarro,
            iyo hal-abuur ka kala imanaya jiilal kala duwan.
          </p>

          <p className="text-slate-600 leading-relaxed max-w-xl">
            Waa hoy ay ku kulmaan abwaanno, akhristayaal, iyo dhammaan kuwa
            jecel afka hooyo — si erayadu u sii noolaadaan, loona gudbiyo
            jiilalka soo socda si sharaf iyo xushmad leh.
          </p>

          {/* Actions */}
          <div className="mt-10 flex flex-wrap gap-6">
            <button className="px-7 py-3 bg-[#4189DD] text-white font-medium hover:bg-[#3578c8] transition">
              Baro Wax Badan
            </button>

            <button className="inline-flex items-center gap-2 text-[#4189DD] border-b border-[#4189DD]/40 hover:border-[#4189DD] transition">
              <Heart className="w-4 h-4" />
              Ku Soo Biir
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
