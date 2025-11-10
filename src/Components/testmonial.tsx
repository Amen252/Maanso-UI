import { Quote } from "lucide-react";
import { motion } from "framer-motion";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Ismail Abdifadil",
      role: "Full stack dev at JTECH",
      quote:
        "Maanso waa meel aan ku dhiirranaado inaan hal-abuurkeyga la wadaago. Waa hoygii suugaanta Soomaaliyeed.",
      image: "/ismail.jpg",
    },
    {
      name: "Sadak Mohamed",
      role: "Developer & Suugaan jecel",
      quote:
        "Waxaan ka helay Maanso fursad aan ku akhriyo gabayo cusub iyo kuwa hore, waa madal waxbarasho iyo hal-abuur.",
      image: "/sadak.jpg",
    },
    {
      name: "Hodan Ibrahim",
      role: "Data Scientist & Developer",
      quote:
        "Maanso waxay igu dhiirrigelisay inaan dib u soo xasuusto suugaantii hore iyo quruxda afkeenna hooyo.",
      image: "/mare.jpg",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-[#EAF6FF] via-[#FFFFFF] to-[#EAF6FF] text-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-[#007ACC]/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-52 h-52 bg-[#007ACC]/10 blur-3xl rounded-full"></div>

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-800 mb-4"
        >
          Fikradaha Bulshada 💭
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 mb-12 max-w-2xl mx-auto"
        >
          Dadka jecel suugaanta Soomaaliyeed waxay ka sheegeen waxa ay ka heleen Maanso.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="bg-white border border-[#007ACC]/15 rounded-2xl px-4 py-9 shadow-sm hover:shadow-lg transition duration-300"
            >
              <Quote className="w-6 h-6 text-[#007ACC] mx-auto mb-4 opacity-70" />
              <p className="text-gray-700 italic mb-6">“{t.quote}”</p>
              <div className="flex flex-col items-center">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover mb-3 border border-[#007ACC]/20"
                />
                <h3 className="font-semibold text-[#007ACC]">{t.name}</h3>
                <p className="text-gray-500 text-sm">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
