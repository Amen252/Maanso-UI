"use client";
import { Link, useLocation } from "react-router-dom";
import { Feather, ArrowRight, Fingerprint, Menu, X, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLink = (to: string) =>
    `relative text-sm font-medium tracking-wide transition-all duration-300 hover:text-[#007ACC] px-2 py-1 ${pathname === to
      ? "text-[#007ACC] font-semibold"
      : "text-slate-600"
    }`;

  // Active indicator dot
  const ActiveDot = () => (
    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#007ACC]" />
  );

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${isScrolled
          ? "bg-white/80 backdrop-blur-2xl py-3 border-slate-200/50 shadow-sm supports-[backdrop-filter]:bg-white/60"
          : "bg-transparent border-transparent py-5"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* LOGO: Poetic & Modern */}
          <Link to="/" className="flex items-center gap-3 group relative">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-[#007ACC] to-[#0096FF] text-white shadow-lg shadow-[#007ACC]/25 group-hover:scale-105 transition-transform duration-500">
              <Feather size={20} strokeWidth={2} className="group-hover:-rotate-12 transition-transform duration-500" />
              <div className="absolute -top-1.5 -right-1.5 h-3 w-3 rounded-full bg-white border-[3px] border-[#0096FF] flex items-center justify-center">
                <div className="w-1 h-1 bg-[#0096FF] rounded-full animate-pulse" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-tight text-slate-900 group-hover:text-[#007ACC] transition-colors duration-300 font-serif">
                Maanso
              </span>
              <span className="text-[9px] font-bold text-[#007ACC] tracking-[0.25em] uppercase opacity-80 group-hover:opacity-100 transition-opacity">Archive</span>
            </div>
          </Link>

          {/* DESKTOP NAV: Minimalist & Elegant */}
          <div className="hidden lg:flex items-center gap-8 bg-slate-50/50 px-6 py-2 rounded-full border border-slate-200/50 backdrop-blur-sm">
            <Link to="/" className={navLink("/")}>
              Home
              {pathname === "/" && <ActiveDot />}
            </Link>

            <Link to="/poets" className={navLink("/poets")}>
              Abwaanada
              {pathname === "/poets" && <ActiveDot />}
            </Link>
            <Link to="/contact" className={navLink("/contact")}>
              Contact Us
              {pathname === "/contact" && <ActiveDot />}
            </Link>
          </div>

          {/* DESKTOP ACTIONS */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/login"
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-[#007ACC] transition-colors hover:bg-[#007ACC]/5 px-4 py-2 rounded-lg"
            >
              <Fingerprint size={16} strokeWidth={2} />
              <span className="mt-0.5">Login</span>
            </Link>
            <Link
              to="/register"
              className="group relative flex items-center gap-2 bg-[#007ACC] hover:bg-[#006bb3] text-white px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest shadow-lg shadow-[#007ACC]/20 hover:shadow-[#007ACC]/40 transition-all duration-300 overflow-hidden active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                Register <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-[#007ACC] hover:bg-[#007ACC]/5 rounded-lg transition-colors active:scale-90"
          >
            {isOpen ? <X size={24} strokeWidth={2} /> : <Menu size={24} strokeWidth={2} />}
          </button>
        </div>

        {/* MOBILE MENU OVERLAY */}
        <div
          className={`lg:hidden fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40 transition-opacity duration-500 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
          onClick={() => setIsOpen(false)}
        />

        {/* MOBILE MENU: Side Drawer (Half Width) */}
        <div
          className={`lg:hidden fixed top-0 right-0 h-screen w-[75%] sm:w-[50%] z-50 bg-white transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] shadow-[-20px_0_60px_-15px_rgba(0,0,0,0.1)] ${isOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="flex flex-col h-full">
            {/* Header in drawer to close it */}
            <div className="p-6 flex justify-end border-b border-slate-50">
              <button onClick={() => setIsOpen(false)} className="p-2 text-slate-400 hover:text-[#007ACC] transition-colors">
                <X size={28} />
              </button>
            </div>

            <div className="p-8 pt-12 space-y-6 flex-1 overflow-y-auto">
              <div className="space-y-1">
                {[
                  { to: "/", label: "Home" },
                  { to: "/poets", label: "Abwaanada" },
                  { to: "/contact", label: "Contact Us" },
                ].map((item, i) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setIsOpen(false)}
                    className={`group block py-5 transition-all duration-500 border-b border-slate-50`}
                    style={{
                      opacity: isOpen ? 1 : 0,
                      transform: isOpen ? "translateX(0)" : "translateX(20px)",
                      transitionDelay: `${i * 80}ms`
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`text-2xl font-bold tracking-tight ${pathname === item.to ? "text-[#007ACC]" : "text-slate-900"}`}>
                        {item.label}
                      </span>
                      {pathname === item.to && <div className="w-2 h-2 rounded-full bg-[#007ACC] shadow-sm shadow-[#007ACC]/40" />}
                    </div>
                  </Link>
                ))}
              </div>

              <div className="pt-8 flex flex-col gap-4">
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="flex w-full items-center justify-center gap-2 py-4 rounded-xl text-xs font-bold uppercase tracking-widest text-[#007ACC] bg-[#007ACC]/5 border border-[#007ACC]/10"
                >
                  <Fingerprint size={18} /> Gal Akawnka
                </Link>
                <Link
                  to="/register"
                  onClick={() => setIsOpen(false)}
                  className="flex w-full items-center justify-center gap-2 bg-[#007ACC] text-white py-4 rounded-xl text-xs font-bold uppercase tracking-widest shadow-lg shadow-[#007ACC]/20"
                >
                  Is-Diiwaan Geli <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div className={`${isScrolled ? "h-[64px]" : "h-[80px]"} transition-all duration-300`} />
    </>
  );
};

export default NavBar;