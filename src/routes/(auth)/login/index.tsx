"use client";
import { Mail, ShieldCheck, ArrowRight, User, Lock, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <section className="min-h-screen bg-slate-50 flex items-center justify-center p-6 relative overflow-hidden font-sans pt-32">

      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#007ACC08_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#007ACC]/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-blue-50 rounded-full blur-[80px]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-[1100px] grid lg:grid-cols-2 bg-white rounded-[40px] shadow-2xl border border-slate-100 overflow-hidden relative z-10"
      >

        {/* Left Side: Brand/Visual Section */}
        <div className="hidden lg:flex flex-col justify-between p-16 bg-[#007ACC] text-white relative">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />

          <div className="relative z-10">
            <Link to="/" className="inline-flex items-center gap-2 mb-12">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#007ACC] shadow-lg">
                <Sparkles size={20} fill="currentColor" />
              </div>
              <span className="text-2xl font-black tracking-tighter">Maanso</span>
            </Link>

            <h1 className="text-5xl font-bold leading-tight mb-6">
              Kusoo Dhowow <br /> <span className="text-blue-200">Goleyaasha</span> Murtida.
            </h1>
            <p className="text-blue-50 text-lg opacity-80 leading-relaxed font-medium">
              Soo gal akawnkaaga si aad u hesho dhaxalka suugaaneed ee ummadda Soomaaliyeed.
            </p>
          </div>

          <div className="relative z-10 pt-12 border-t border-white/10">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-full border-2 border-white/20 bg-white/10 flex items-center justify-center">
                <ShieldCheck size={20} className="text-blue-100" />
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-100">Xaqiijinta Sugnaanta</p>
            </div>
            <p className="text-sm text-blue-100/70 font-medium">Gabayo la hubiyey oo laga helay ilaha asalka ah.</p>
          </div>
        </div>

        {/* Right Side: Log-in Form */}
        <div className="p-8 md:p-16 lg:p-20 flex flex-col justify-center">

          <div className="mb-10 text-center lg:text-left">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Soo Gal</h2>
            <p className="text-slate-500 font-medium text-sm">Geli tafaasiishaada si aad u bilowdo.</p>
          </div>

          <form className="space-y-5">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-400 pl-1">Email-ka</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#007ACC] transition-colors" size={18} />
                <input
                  type="email"
                  placeholder="Email-kaaga ..."
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-6 text-slate-700 font-bold focus:border-[#007ACC]/50 focus:ring-4 focus:ring-[#007ACC]/5 outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-end pl-1 pr-1">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400">Erayga Sirta</label>
                <a href="#" className="text-[11px] font-bold text-[#007ACC] hover:underline">Ma ilowday?</a>
              </div>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#007ACC] transition-colors" size={18} />
                <input
                  type="password"
                  placeholder="Erayga sirta ah ..."
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-6 text-slate-700 font-bold focus:border-[#007ACC]/50 focus:ring-4 focus:ring-[#007ACC]/5 outline-none transition-all"
                />
              </div>
            </div>

            <div className="flex items-center gap-2 pl-1 py-2">
              <input type="checkbox" id="remember" className="w-4 h-4 rounded border-slate-200 text-[#007ACC] focus:ring-[#007ACC]" />
              <label htmlFor="remember" className="text-xs font-bold text-slate-500 cursor-pointer">Xasuuso qalabkan</label>
            </div>

            <button type="submit" className="w-full bg-[#007ACC] text-white py-4 rounded-2xl font-bold shadow-lg shadow-[#007ACC]/20 hover:bg-[#006bb3] hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 group">
              <span>Hadda Gal</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-10 pt-8 border-t border-slate-50 text-center">
            <p className="text-sm font-medium text-slate-400">
              Ma haysatid akawn? <Link to="/register" className="text-[#007ACC] font-bold hover:underline">Halkan ka samayso</Link>
            </p>
          </div>
        </div>

      </motion.div>
    </section>
  );
}
