import { Quote } from "lucide-react";
import { motion } from "framer-motion";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Ismail Abdifadil",
      role: "Full-Stack Developer — JTECH",
      quote:
        "Maanso waa meel aan ku dhiirranaado inaan hal-abuurkeyga la wadaago. Waa hoygii suugaanta Soomaaliyeed.",
      image: "/ismail.jpg",
    },
    {
      name: "Sadak Mohamed",
      role: "Developer & Suugaan-jecel",
      quote:
        "Waxaan ka helay Maanso fursad aan ku akhriyo gabayo cusub iyo kuwa hore. Waa madal waxbarasho iyo hal-abuur.",
      image: "/sadak.jpg",
    },
    {
      name: "Hodan Ibrahim",
      role: "Data Scientist & Developer",
      quote:
        "Maanso waxay igu dhiirrigelisay inaan dib u xasuusto suugaantii hore iyo quruxda afkeenna hooyo.",
      image: "/mare.jpg",
    },
  ];

  return (
    <section className="py-20 sm:py-24 md:py-28 bg-[#f6faff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="max-w-2xl mb-12 sm:mb-16 md:mb-20">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-medium text-slate-900 mb-3 sm:mb-4"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Codadka <span className="text-[#4189DD]">Maanso</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base md:text-lg">
            Dadka jecel suugaanta Soomaaliyeed waxay nala wadaagayaan
            dareenkooda iyo waayo-aragnimadooda.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 lg:gap-14">
          {testimonials.map((t, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="bg-white shadow-sm border border-slate-200 flex flex-col h-full"
            >
              {/* Top blue rule */}
              <div className="h-1 bg-[#4189DD]" />

              {/* Header */}
              <div className="flex items-center gap-4 px-5 sm:px-6 pt-5 sm:pt-6">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg object-cover border border-slate-200 flex-shrink-0"
                />
                <div className="min-w-0">
                  <div className="font-semibold text-slate-900 truncate">
                    {t.name}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500 truncate">
                    {t.role}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="px-5 sm:px-6 pb-7 sm:pb-9 pt-4 sm:pt-5 flex-1">
                <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-[#4189DD]/50 mb-3 sm:mb-4" />
                <p
                  className="text-slate-800 text-sm sm:text-base leading-relaxed"
                  style={{ fontFamily: '"Playfair Display", serif' }}
                >
                  “{t.quote}”
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
