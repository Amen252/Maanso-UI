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
        <div className="max-w-2xl mb-14 sm:mb-16 md:mb-20">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-medium text-slate-900 mb-4 sm:mb-6"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Codadka <span className="text-[#4189DD]">Maanso</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Dadka jecel suugaanta Soomaaliyeed waxay nala wadaagayaan
            dareenkooda iyo waayo-aragnimadooda.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-14">
          {testimonials.map((t, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white shadow-sm border border-slate-200 flex flex-col"
            >
              {/* Top blue rule */}
              <div className="h-1 bg-[#4189DD]" />

              {/* Header */}
              <div className="flex items-center gap-4 px-6 sm:px-8 pt-6 sm:pt-8">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg object-cover border border-slate-200 flex-shrink-0"
                />
                <div className="min-w-0">
                  <div className="font-semibold text-slate-900 truncate">
                    {t.name}
                  </div>
                  <div className="text-sm text-slate-500 truncate">
                    {t.role}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="px-6 sm:px-8 pb-8 sm:pb-10 pt-5 sm:pt-6 flex-1">
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
