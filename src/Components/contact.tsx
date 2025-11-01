import { Mail, Phone, MapPin } from "lucide-react";
const Contact = () => {
return (
    <section className="relative min-h-screen bg-gradient-to-r from-[#EAF6FF] via-[#FFFFFF] to-[#EAF6FF] py-20 px-6">
      {/* Decorative background shapes */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-[#007ACC]/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-52 h-52 bg-[#007ACC]/10 blur-3xl rounded-full"></div>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left - Info */}
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Nala Soo Xiriir <span className="text-[#007ACC]">Maanso</span>
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Su’aalo, soo jeedin ama wada shaqeyn?  
            Waxaan jeclaan lahayn inaan kaa maqalno.  
            Buuxi foomka ama nala soo xiriir si toos ah.
          </p>

          <div className="space-y-4 text-gray-700">
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
              <span>Mogadishu, Somalia</span>
            </div>
          </div>
        </div>

        {/* Right - Contact Form */}
        <div className="bg-white border border-[#007ACC]/15 rounded-2xl shadow-md p-8">
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
                Fariintaada
              </label>
              <textarea type="text"
                rows="5"
                placeholder="Qor fariintaada halkan..."
                className="w-full border border-[#007ACC]/20 rounded-xl px-4 py-3 outline-none focus:border-[#007ACC] transition"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#007ACC] text-white font-medium py-3 rounded-xl hover:bg-[#0062A8] transition"
            >
              Dir Fariinta 💌
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
 
export default Contact;