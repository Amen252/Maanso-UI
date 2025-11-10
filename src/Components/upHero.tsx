"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const UpHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center  to-white py-20 px-6 overflow-hidden">
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Left Side - Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              kuso Dhawoow <span className="text-[#007ACC]">Maanso</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-lg">
            Maanso waa goobta lagu soo bandhigo suugaanta iyo hal-abuurka
            Abwaanada Soomaaliyeed. Halkan waxaad ka heli doontaa gabayo hodan
            ah, xikmad iyo hal-abuur aan dhamaanayn.
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-2 bg-[#007ACC] text-white px-6 py-3 rounded-md font-medium shadow-md hover:bg-[#005f99] transition-all duration-300"
            >
              Sahami Gabayo <ArrowRight className="w-5 h-5" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-2 border border-gray-300 text-[#007ACC] px-6 py-3 rounded-md font-medium shadow-md hover:bg-gray-100 transition-all duration-300"
            >
              Baro Abwaanada <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="flex justify-center"
        >
          <img
            src="/hadraawi.webp"
            alt="Maanso Hero"
            className="w-full max-w-md md:max-w-lg rounded-2xl shadow-xl object-cover transform hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default UpHero;
