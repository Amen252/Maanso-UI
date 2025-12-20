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
    <section className="py-28 bg-[#f6faff]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-2xl mb-20">
          <h2
            className="text-4xl md:text-5xl font-medium text-slate-900 mb-6"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Codadka <span className="text-[#4189DD]">Maanso</span>
          </h2>
          <p className="text-slate-600 text-lg">
            Dadka jecel suugaanta Soomaaliyeed waxay nala wadaagayaan
            dareenkooda iyo waayo-aragnimadooda.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
          {testimonials.map((t, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white shadow-sm border border-slate-200"
            >
              {/* Top blue rule */}
              <div className="h-1 bg-[#4189DD]" />

              {/* Header with image */}
              <div className="flex items-center gap-4 px-8 pt-8">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-16 h-16 rounded-lg object-cover border border-slate-200"
                />
                <div>
                  <div className="font-semibold text-slate-900">
                    {t.name}
                  </div>
                  <div className="text-sm text-slate-500">
                    {t.role}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="px-8 pb-10 pt-6">
                <Quote className="w-6 h-6 text-[#4189DD]/50 mb-4" />
                <p
                  className="text-slate-800 leading-relaxed"
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
