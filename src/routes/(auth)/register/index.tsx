import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/(auth)/register/")({
  component: RegisterPage,
});

function RegisterPage() {
  return (
    <section className="relative min-h-screen bg-gradient-to-r from-[#EAF6FF] via-[#FFFFFF] to-[#EAF6FF] py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
      >
        {/* ✅ Left - Info */}
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Iska Diiwaan Geli <span className="text-[#007ACC]">Maanso</span>
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Ku soo biir Maanso maanta si aad u hesho fursad aad ku daabacdo
            gabayadaada, ku baratid hal-abuurro kale, oo aad qayb uga noqoto
            bulshada suugaanta Soomaaliyeed. Is-diiwaangeli si aad u bilowdo
            safarkaaga hal-abuurka!
          </p>

          <div className="flex flex-col gap-4 text-gray-700">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#007ACC]" />
              <span>info@maanso.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#007ACC]" />
              <span>+252 618 972 047</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-[#007ACC]" />
              <span>Muqdisho, Soomaaliya</span>
            </div>
          </div>
        </div>

        {/* ✅ Right - Registration Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="bg-white border border-[#007ACC]/15 rounded-2xl shadow-md p-8"
        >
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Magacaaga
              </label>
              <input
                type="text"
                placeholder="Geli magacaaga"
                className="w-full border border-[#007ACC]/20 rounded-xl px-4 py-3 outline-none focus:border-[#007ACC] transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Numberkaaga
              </label>
              <input
                type="tel"
                placeholder="+252 618 972 047"
                className="w-full border border-[#007ACC]/20 rounded-xl px-4 py-3 outline-none focus:border-[#007ACC] transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="info@tusaale.com"
                className="w-full border border-[#007ACC]/20 rounded-xl px-4 py-3 outline-none focus:border-[#007ACC] transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="***********"
                className="w-full border border-[#007ACC]/20 rounded-xl px-4 py-3 outline-none focus:border-[#007ACC] transition"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#007ACC] text-white font-medium py-3 rounded-xl hover:bg-[#0062A8] transition-all duration-300 shadow-sm"
            >
              Is Diiwaan Geli
            </button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}
