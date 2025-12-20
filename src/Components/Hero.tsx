import { Link } from "@tanstack/react-router";
import { Feather, BookOpen } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative px-4 sm:px-6 py-20 sm:py-24 md:py-36 bg-[#f6faff] text-center overflow-hidden">

      {/* subtle background wash */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(65,137,221,0.08),transparent_70%)]" />

      {/* Content */}
      <div className="relative max-w-4xl mx-auto">

        {/* Label */}
        <span className="inline-flex items-center gap-2 mb-6 sm:mb-8 text-[11px] sm:text-xs tracking-widest uppercase text-[#4189DD]">
          <BookOpen className="w-4 h-4" />
          Suugaan • Dhaqan • Hal-abuur
        </span>

        {/* Title */}
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-8 sm:mb-10"
          style={{
            fontFamily: '"Playfair Display", serif',
            color: "#0f172a",
          }}
        >
          Hal-abuurka Soomaaliyeed  
          <br />
          <span className="text-[#4189DD]">wuu nool yahay</span>
        </h1>

        {/* Divider */}
        <div className="mx-auto mb-8 sm:mb-10 h-px w-20 sm:w-24 bg-[#4189DD]/40" />

        {/* Description */}
        <p
          className="mx-auto max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed text-slate-600"
          style={{ fontFamily: '"Poppins", sans-serif' }}
        >
          <span className="italic text-slate-700">Maanso</span> waa hoyga
          suugaanta Soomaaliyeed — meel ay gabayada, geeraarrada,
          iyo hal-abuurku ku kulmaan, kuna gudbaan xusuus iyo
          jiilal kala dambeeya.
        </p>

        {/* Actions */}
        <div className="mt-10 sm:mt-14 flex flex-col sm:flex-row justify-center gap-5 sm:gap-6">
          <Link
            to="/poems"
            className="inline-flex items-center justify-center gap-3 border border-[#4189DD] px-7 sm:px-8 py-3 text-[#4189DD] hover:bg-[#4189DD] hover:text-white transition-all"
          >
            <Feather size={18} />
            Akhri Gabayo
          </Link>

          <Link
            to="/register"
            className="inline-flex items-center justify-center gap-3 text-slate-700 hover:text-[#4189DD] underline underline-offset-8"
          >
            Ku Biir Maanso
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
