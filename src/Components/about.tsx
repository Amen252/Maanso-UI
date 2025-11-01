import { Heart, BookText } from "lucide-react";
const About = () => {
return (
    <section className="relative py-24 bg-gradient-to-r from-[#EAF6FF] via-[#FFFFFF] to-[#EAF6FF] overflow-hidden">
      {/* Soft decorative shapes */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-[#007ACC]/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-52 h-52 bg-[#007ACC]/10 blur-3xl rounded-full"></div>

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12">
        {/* Left Side - Text */}
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Ku Saabsan <span className="text-[#007ACC]">Maanso</span>
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            Maanso waa madal lagu xoojinayo afka, dhaqanka, iyo suugaanta
            Soomaaliyeed. Ujeedadeedu waa in la keydiyo hal-abuurka jiilalkii
            hore iyo kuwa cusub si ay u sii noolaadaan.  
          </p>

          <p className="text-gray-600 leading-relaxed mb-8">
            Waa meel lagu dhiirrigeliyo hal-abuurka, lagu taageero abwaannada,
            laguna baro quruxda erayada Soomaaliyeed ee dhaxalka ah.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-[#007ACC] text-white font-medium px-6 py-3 rounded-xl shadow hover:bg-[#0062A8] transition">
              Baro Wax Badan
            </button>
            <button className="flex items-center gap-2 text-[#007ACC] border border-[#007ACC]/30 px-6 py-3 rounded-xl hover:bg-[#007ACC]/10 transition">
              <Heart className="w-5 h-5" /> Ku Soo Biir
            </button>
          </div>
        </div>

        {/* Right Side - Image/Illustration */}
        <div className="relative">
          <div className="bg-white border border-[#007ACC]/10 shadow-lg rounded-3xl p-6">
            <img
              src="/man.svg"
              alt="About Maanso"
              className="rounded-2xl w-full h-80 object-contain"
            />
          </div>

          {/* Floating Element */}
          <div className="absolute -bottom-6 -right-6 bg-white border border-[#007ACC]/10 rounded-2xl p-4 shadow-md">
            <BookText className="w-8 h-8 text-[#007ACC]" />
          </div>
        </div>
      </div>
    </section>
  );
}
 
export default About;