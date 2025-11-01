import { Facebook, Twitter, Youtube, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#EAF6FF] via-[#FFFFFF] to-[#EAF6FF] border-t border-[#007ACC]/10 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-[#007ACC] mb-3">Maanso</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Maanso waa madal lagu xoojinayo suugaanta Soomaaliyeed —
            ururinta, dhiirrigelinta iyo wadaagga gabayada iyo hal-abuurka.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Bogagga Degdegga ah</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li><a href="/" className="hover:text-[#007ACC] transition">Home</a></li>
            <li><a href="/features" className="hover:text-[#007ACC] transition">Astaamaha</a></li>
            <li><a href="/about" className="hover:text-[#007ACC] transition">Ku Saabsan</a></li>
            <li><a href="/contact" className="hover:text-[#007ACC] transition">La Xiriir</a></li>
          </ul>
        </div>

        {/* Social / Contact */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">La Soco Maanso</h3>
          <div className="flex gap-4 mb-4">
            <a href="#" className="text-[#007ACC] hover:text-[#005E99] transition">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-[#007ACC] hover:text-[#005E99] transition">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-[#007ACC] hover:text-[#005E99] transition">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="mailto:info@maanso.com" className="text-[#007ACC] hover:text-[#005E99] transition">
              <Mail className="w-5 h-5" />
            </a>
          </div>
          <p className="text-gray-600 text-sm">info@maanso.com</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-[#007ACC]/10 py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Maanso — Dhammaan xuquuqdu way xafidan tahay.
      </div>
    </footer>
  );
}
