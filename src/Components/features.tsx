import { Lightbulb, BookOpen, Users, Mic, PenTool, Globe2 } from "lucide-react";
import { motion } from "framer-motion";

export default function FeaturesSection() {
  const features = [
    {
      icon: <Lightbulb className="w-8 h-8 text-[#007ACC]" />,
      title: "Hal-abuur Cusub",
      desc: "Ku dhiirrigeli hal-abuurka Soomaaliyeed iyo jiilalka soo socda in ay abuuraan gabayo cusub.",
    },
    {
      icon: <BookOpen className="w-8 h-8 text-[#007ACC]" />,
      title: "Ururinta Gabayada",
      desc: "Maanso waa keyd suugaaneed oo ururiya gabayadii hore iyo kuwa cusub si loo sii ilaaliyo dhaqanka.",
    },
    {
      icon: <Users className="w-8 h-8 text-[#007ACC]" />,
      title: "Bulsho Isku Xiran",
      desc: "Ku biir abwaanno, qoraayaal, iyo akhristayaal jecel suugaanta iyo afka hooyo.",
    },
    {
      icon: <Mic className="w-8 h-8 text-[#007ACC]" />,
      title: "Cod & Muuqaal",
      desc: "Daawo ama dhagayso gabayo si toos ah, si suugaantu u noqoto mid la dareemi karo.",
    },
    {
      icon: <PenTool className="w-8 h-8 text-[#007ACC]" />,
      title: "Tafatir & Qorid",
      desc: "Qor gabayadaada si fudud, tafatir, kuna keydi madasha Maanso.",
    },
    {
      icon: <Globe2 className="w-8 h-8 text-[#007ACC]" />,
      title: "Suugaan Caalami ah",
      desc: "Ku xir hal-abuurka caalamka oo la wadaag suugaanta Soomaaliyeed.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-[#EAF6FF] via-[#FFFFFF] to-[#EAF6FF]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-800 mb-4"
        >
          Astaamaha Maanso 💫
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 max-w-2xl mx-auto mb-12"
        >
          Maanso waxay isku xirtaa suugaan, hal-abuur, iyo bulshada — si afkeennu
          u ahaado mid nool oo kobcaya.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 border border-[#007ACC]/15 rounded-2xl shadow-sm hover:shadow-lg transition duration-300"
            >
              <motion.div
                whileHover={{ rotate: 5 }}
                className="flex justify-center items-center mb-4"
              >
                <div className="bg-[#007ACC]/10 p-3 rounded-full border border-[#007ACC]/20">
                  {item.icon}
                </div>
              </motion.div>
              <h3 className="text-lg font-semibold text-[#007ACC] mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
