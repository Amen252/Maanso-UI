import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-[#007ACC]/10 via-[#EAF4FC]/20 to-[#FFFFFF] backdrop-blur-sm px-6 py-12 md:p-40 text-center transition-all duration-300 mt-10">
      <h1
        className="text-3xl sm:text-4xl font-semibold mb-4 leading-tight"
        style={{
          fontFamily: '"Playfair Display", serif',
          color: "#b007e9ff",
        }}
      >
        Hal-abuurka Soomaaliyeed Wuu Nool Yahay 💡
      </h1>

      <p
        className="text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto px-2"
        style={{
          color: "#1381d5ff",
          fontFamily: '"Poppins", sans-serif',
        }}
      >
        Maanso waa madal lagu xoojinayo afka, dhaqanka, iyo suugaanta Soomaaliyeed.  
        Kani waa meeshii gabaygu ku nool yahay.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
        <Link
          to="/poems"
          className="bg-[#007ACC] text-white font-semibold px-8 py-3 rounded-md hover:opacity-90  transition-transform duration-300"
        >
          Daawo Gabayo
        </Link>
        <Link to="/register" className="flex space-x-2 items-center sm:text-center bg-blue-500/10 border border-blue-500/20 rounded-md px-8 py-2 text-blue-900 font-medium hover:bg-blue-500/20 transition-colors duration-300">
          <Sparkles className="text-blue-900" />
          <span>Nagu so Biir</span>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
