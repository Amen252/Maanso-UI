import { Link } from "@tanstack/react-router";
import { Sparkles, Menu, X } from "lucide-react";
import { useState } from "react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="bg-gradient-to-b from-white to-[#f5f5f5] shadow-md p-4  sticky top-0 z-50"
    >
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
            Home
          </Link>
          <Link
            to="/poems"
            className="text-[#007ACC] hover:text-blue-800 transition font-medium"
          >
            Poems
          </Link>
          <Link
            to="/poets"
            className="text-[#007ACC] hover:text-blue-800 transition font-medium"
          >
            Poets
          </Link>
          <Link
            to="/about"
            className="text-[#007ACC] hover:text-blue-800 transition font-medium"
          >
            About
          </Link>
          <Link
            to="/features"
            className="text-[#007ACC] hover:text-blue-800 transition font-medium"
          >
            Features
          </Link>
          <Link
            to="/contact"
            className="text-[#007ACC] hover:text-blue-800 transition font-medium"
          >
            Contact
          </Link>
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          {/* Gradient Get Started button: blue -> white with subtle lift on hover */}
          <Link
            to="/register"
            className="px-6 py-2 rounded-md shadow-lg font-semibold transition-transform transform hover:-translate-y-0.5 bg-gradient-to-r from-[#06b6d4] to-[#7c3aed] text-white ring-1 ring-blue-50"
            aria-label="Get started"
          >
            Get Started
          </Link>

          {/* Login button: white background with a cool blue tint on hover */}
          <Link
            to="/register/login"
            className="px-6 py-2 rounded-md shadow transition bg-white text-[#06b6d4] border border-blue-100 hover:bg-gradient-to-r hover:from-white hover:to-[#eef2ff] hover:text-[#2b2140] font-medium"
            aria-label="Login"
          >
            Login
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
          Home
        </Link>
        <Link
          to="/poems"
          className="px-5 py-3 text-[#007ACC] font-medium hover:bg-blue-50 transition"
          onClick={() => setIsOpen(false)}
        >
          Poems
        </Link>
        <Link
          to="/poets"
          className="px-5 py-3 text-[#007ACC] font-medium hover:bg-blue-50 transition"
          onClick={() => setIsOpen(false)}
        >
          Poets
        </Link>
        <Link
          to="/about"
          className="px-5 py-3 text-[#007ACC] font-medium hover:bg-blue-50 transition"
          onClick={() => setIsOpen(false)}
        >
          About
        </Link>

        {/* Mobile Auth Buttons */}
        <div className="flex flex-col gap-2 px-5 py-3 border-t border-gray-200 mt-2">
          {/* Mobile Get Started: compact gradient */}
          <button className="px-6 py-2 rounded-md shadow-md font-semibold transition-transform transform hover:-translate-y-0.5 bg-gradient-to-r from-[#06b6d4] to-[#7c3aed] text-white">
            Get Started
          </button>
          {/* Mobile Login: white with light teal/violet hover tint */}
          <button className="px-6 py-2 rounded-md shadow transition bg-white text-[#06b6d4] border border-blue-100 hover:bg-gradient-to-r hover:from-white hover:to-[#eef2ff] hover:text-[#2b2140]">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
