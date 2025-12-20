import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Feather } from "lucide-react";
import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // current route
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });

  const navLink = (to: string) =>
    `relative font-medium transition text-slate-700 hover:text-[#007ACC]
     ${
       pathname === to
         ? "text-[#007ACC] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-[#007ACC]"
         : ""
     }`;

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-semibold tracking-wide"
          style={{ fontFamily: '"Playfair Display", serif' }}
        >
          <span className="p-2 rounded-md bg-[#007ACC]/10">
            <Feather className="w-5 h-5 text-[#007ACC]" />
          </span>
          <span className="text-[#007ACC]">Maanso</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className={navLink("/")}>Bogga Hore</Link>
          <Link to="/poems" className={navLink("/poems")}>Gabayo</Link>
          <Link to="/poets" className={navLink("/poets")}>Abwaanada</Link>
          <Link to="/contact" className={navLink("/contact")}>Nala Soo Xiriir</Link>
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/login"
            className="px-5 py-2 text-[#007ACC] font-medium hover:bg-[#007ACC]/10 rounded-md transition"
          >
            Gal Akawnka
          </Link>
          <Link
            to="/register"
            className="px-5 py-2 bg-[#007ACC] text-white rounded-md font-medium hover:bg-[#0062a3] transition"
          >
            Is-Diiwaan Geli
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#007ACC]"
          aria-label="Toggle menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

  {/* Mobile Menu */}
<div
  className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
  ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
>
  <div className="bg-white border-t border-slate-200 px-4 py-6 space-y-2">

    {[
      { to: "/", label: "Bogga Hore" },
      { to: "/poems", label: "Gabayo" },
      { to: "/poets", label: "Abwaanada" },
      { to: "/contact", label: "Nala Soo Xiriir" },
    ].map((item) => (
      <Link
        key={item.to}
        to={item.to}
        onClick={() => setIsOpen(false)}
        className={`block px-4 py-3 rounded-md font-medium transition
          ${
            pathname === item.to
              ? "bg-[#007ACC]/10 text-[#007ACC] border-l-4 border-[#007ACC]"
              : "text-slate-700 hover:bg-slate-100"
          }`}
      >
        {item.label}
      </Link>
    ))}

    {/* Divider */}
    <div className="my-4 h-px bg-slate-200" />

    {/* Auth buttons */}
    <Link
      to="/login"
      onClick={() => setIsOpen(false)}
      className="block w-full text-center px-4 py-3 rounded-md font-medium text-[#007ACC] hover:bg-[#007ACC]/10 transition"
    >
      Gal Akawnka
    </Link>

    <Link
      to="/register"
      onClick={() => setIsOpen(false)}
      className="block w-full text-center px-4 py-3 rounded-md font-medium bg-[#007ACC] text-white hover:bg-[#0062a3] transition"
    >
      Is-Diiwaan Geli
    </Link>
  </div>
</div>

    </nav>
  );
};

export default NavBar;
