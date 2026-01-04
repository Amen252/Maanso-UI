"use client";
import { Link, useLocation } from "react-router-dom";
import { Command, ArrowRight, Fingerprint, Menu, X } from "lucide-react"; 
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
    `relative text-[13px] font-medium uppercase tracking-[0.15em] transition-all duration-300 ${
      pathname === to
        ? "text-[#007ACC] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[2px] after:bg-[#007ACC]"
        : "text-slate-500 hover:text-[#007ACC]"
    }`;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
          isScrolled 
          ? "bg-white/95 backdrop-blur-xl py-3 border-slate-100 shadow-sm" 
          : "bg-white border-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* LOGO: Clean & Professional */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-[#007ACC] text-white shadow-md shadow-[#007ACC]/20">
              <Command size={18} strokeWidth={2} />
              <div className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-white border-2 border-[#007ACC]" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-semibold tracking-tight text-slate-900 leading-none">
                Maanso
              </span>
              <span className="text-[9px] font-medium text-[#007ACC] tracking-[0.1em] uppercase">Archive</span>
            </div>
          </Link>

          {/* DESKTOP NAV: Normal Weight */}
          <div className="hidden lg:flex items-center space-x-10">
            <Link to="/" className={navLink("/")}>Hore</Link>
            <Link to="/poems" className={navLink("/poems")}>Gabayo</Link>
            <Link to="/poets" className={navLink("/poets")}>Abwaanada</Link>
            <Link to="/contact" className={navLink("/contact")}>Xiriir</Link>
          </div>

          {/* DESKTOP ACTIONS */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/login" className="flex items-center gap-2 text-[12px] font-medium uppercase tracking-widest text-slate-600 hover:text-[#007ACC] transition-all">
              <Fingerprint size={16} strokeWidth={1.5} className="text-[#007ACC]" />
              Gal
            </Link>
            <Link 
              to="/register" 
              className="group flex items-center gap-2 bg-[#007ACC] px-6 py-2 rounded-lg text-[12px] font-semibold uppercase tracking-widest text-white shadow-md shadow-[#007ACC]/10 hover:bg-[#005fa3] transition-all"
            >
              Ku Biir <ArrowRight size={14} strokeWidth={2} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="lg:hidden p-2 text-[#007ACC] transition-transform active:scale-90"
          >
            {isOpen ? <X size={24} strokeWidth={2} /> : <Menu size={24} strokeWidth={2} />}
          </button>
        </div>

        {/* MOBILE MENU: Simple Top-Down Slide */}
        <div
          className={`lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl transition-all duration-500 ease-in-out ${
            isOpen ? "translate-y-0 opacity-100 visible" : "-translate-y-5 opacity-0 invisible"
          }`}
        >
          <div className="p-6 space-y-5">
            {[
              { to: "/", label: "Hore" },
              { to: "/poems", label: "Gabayo" },
              { to: "/poets", label: "Abwaanada" },
              { to: "/contact", label: "Xiriir" },
            ].map((item, i) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setIsOpen(false)}
                className={`block text-xl font-medium transition-all duration-300 ${
                  pathname === item.to ? "text-[#007ACC] border-l-2 border-[#007ACC] pl-4" : "text-slate-800"
                }`}
                style={{ transitionDelay: isOpen ? `${i * 40}ms` : "0ms" }}
              >
                {item.label}
              </Link>
            ))}

            <div className="pt-6 border-t border-slate-50 flex flex-col gap-4">
              <Link 
                to="/login" 
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 text-[13px] font-medium uppercase tracking-widest text-[#007ACC]"
              >
                <Fingerprint size={16} /> Gal Akawnka
              </Link>
              <Link 
                to="/register" 
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-[#007ACC] text-white py-3.5 rounded-lg font-semibold uppercase tracking-widest text-[13px]"
              >
                Is-Diiwaan Geli
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className={`${isScrolled ? "h-[65px]" : "h-[85px]"} transition-all duration-500`} />
    </>
  );
};

export default NavBar;