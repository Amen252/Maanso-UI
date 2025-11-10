import { Link } from "@tanstack/react-router";
import { Sparkles, Menu, X } from "lucide-react";
import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-b from-white to-[#f5f5f5] shadow-md p-4 sticky top-0 z-50 ">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link
            to="/"
            className="text-3xl tracking-wide flex items-center"
            style={{
              fontFamily: '"Playfair Display", serif',
              color: "#007ACC",
            }}
          >
            Maanso
          </Link>
          <Sparkles className="w-6 h-6 text-[#007ACC] mt-1" />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className="text-[#007ACC] hover:text-blue-800 transition font-medium"
          >
            Bogga Hore
          </Link>
          <Link
            to="/poems"
            className="text-[#007ACC] hover:text-blue-800 transition font-medium"
          >
            Abwaanada
            
          </Link>
          <Link
            to="/poets"
            className="text-[#007ACC] hover:text-blue-800 transition font-medium"
          >
            Gabayo
          </Link>
          <Link
            to="/features"
            className="text-[#007ACC] hover:text-blue-800 transition font-medium"
          >
            Astaamaha
          </Link>
          <Link
            to="/contact"
            className="text-[#007ACC] hover:text-blue-800 transition font-medium"
          >
            Nala Soo Xiriir
          </Link>
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <Link
            to="/register"
            className="px-6 py-2 rounded-md shadow-lg font-semibold transition-transform transform hover:-translate-y-0.5 bg-gradient-to-r from-[#06b6d4] to-[#7c3aed] text-white ring-1 ring-blue-50"
          >
            Is-Diiwaan Geli
          </Link>

          <Link
            to="/login"
            className="px-6 py-2 rounded-md shadow transition bg-white text-[#06b6d4] border border-blue-100 hover:bg-gradient-to-r hover:from-white hover:to-[#eef2ff] hover:text-[#2b2140] font-medium"
          >
            Gal Akawnka
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#007ACC] transition"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden flex flex-col mt-2 bg-gradient-to-b from-white to-[#f8f8f8] border-t border-[#EAD6A9] shadow-sm overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <Link
          to="/"
          className="px-5 py-3 text-[#007ACC] font-medium hover:bg-blue-50 transition"
          onClick={() => setIsOpen(false)}
        >
          Bogga Hore
        </Link>
        <Link 
          to="/poems"
          className="px-5 py-3 text-[#007ACC] font-medium hover:bg-blue-50 transition"
          onClick={() => setIsOpen(false)}
        >
          Gabayo
        </Link>
        <Link
          to="/poets"
          className="px-5 py-3 text-[#007ACC] font-medium hover:bg-blue-50 transition"
          onClick={() => setIsOpen(false)}
        >
          Abwaanada
        </Link>
        <Link
          to="/features"
          className="px-5 py-3 text-[#007ACC] font-medium hover:bg-blue-50 transition"
          onClick={() => setIsOpen(false)}
        >
          Astaamaha
        </Link>
        <Link
          to="/contact"
          className="px-5 py-3 text-[#007ACC] font-medium hover:bg-blue-50 transition"
          onClick={() => setIsOpen(false)}
        >
          Nala Soo Xiriir
        </Link>

        {/* Mobile Auth Buttons */}
        <div className="flex flex-col gap-2 px-5 py-3 border-t border-gray-200 mt-2">
          <Link to="/register"   onClick={() => setIsOpen(false)} className="px-6 py-2 rounded-md shadow-md font-semibold transition-transform transform hover:-translate-y-0.5 bg-gradient-to-r from-[#06b6d4] to-[#7c3aed] text-white">
            Is-Diiwaan Geli
          </Link>
          <Link to="/login"   onClick={() => setIsOpen(false)} className="px-6 py-2 rounded-md shadow transition bg-white text-[#06b6d4] border border-blue-100 hover:bg-gradient-to-r hover:from-white hover:to-[#eef2ff] hover:text-[#2b2140]">
            Gal Akawnka
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
