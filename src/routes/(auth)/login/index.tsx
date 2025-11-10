import { createFileRoute } from '@tanstack/react-router'
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export const Route = createFileRoute('/(auth)/login/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <section className="relative min-h-screen bg-gradient-to-r from-[#EAF6FF] via-[#FFFFFF] to-[#EAF6FF] py-20 px-6 overflow-hidden mt-30">
      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left - Info */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Soo Gal <span className="text-[#007ACC]">Maanso</span>
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Ku soo dhowow Maanso! Soo gal akawnkaaga si aad u daabacdo gabayadaada, 
            u dhageysato hal-abuurro kale, oo aad uga qayb qaadato 
            kobcinta suugaanta Soomaaliyeed.
          </p>

          <div className="flex flex-wrap gap-4 text-gray-700">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-100 transition"
            >
              <Mail className="w-5 h-5 text-[#007ACC]" />
              <span>info@maanso.com</span>
            </motion.button>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-100 transition"
            >
              <Phone className="w-5 h-5 text-[#007ACC]" />
              <span>+252 618 972 047</span>
            </motion.button>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-100 transition"
            >
              <MapPin className="w-5 h-5 text-[#007ACC]" />
              <span>Mogadishu</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Right - Login Form */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="bg-white border border-[#007ACC]/15 rounded-2xl shadow-md p-8"
        >
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email-kaaga
              </label>
              <input
                type="text"
                placeholder="Geli email-kaaga"
                className="w-full border border-[#007ACC]/20 rounded-xl px-4 py-3 outline-none focus:border-[#007ACC] transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Erayga sirta ah
              </label>
              <input
                type="password"
                placeholder="Password-kaaga"
                className="w-full border border-[#007ACC]/20 rounded-xl px-4 py-3 outline-none focus:border-[#007ACC] transition"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full bg-[#007ACC] text-white font-medium py-3 rounded-xl hover:bg-[#0062A8] transition"
            >
              Soo Gal Akawnka
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
