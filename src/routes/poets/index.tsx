import { Link } from "react-router-dom";
import { User, Feather, ArrowRight, Star, Heart } from "lucide-react";
import { POETS } from "../../data/poets";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useState } from "react";

const PoetCard = ({ poet, index }: { poet: typeof POETS[0], index: number }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 400 };
    const dx = useSpring(mouseX, springConfig);
    const dy = useSpring(mouseY, springConfig);

    function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseMove={onMouseMove}
            className="group relative"
        >
            <Link
                to={`/poets/${poet.id}`}
                className="block h-full bg-white rounded-[40px] p-8 border border-slate-100/80 shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-[#007ACC]/10 hover:-translate-y-2 overflow-hidden relative"
            >
                {/* Spotlight effect */}
                <motion.div
                    className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
                    style={{
                        background: useTransform(
                            [dx, dy],
                            ([x, y]) => `radial-gradient(350px circle at ${x}px ${y}px, rgba(0, 122, 204, 0.05), transparent 80%)`
                        ),
                    }}
                />

                {/* Decorative blob */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#007ACC]/5 to-transparent rounded-bl-[100px] -mr-4 -mt-4 transition-transform duration-700 group-hover:scale-110" />

                <div className="relative z-10 flex flex-col h-full">
                    {/* Header: Avatar & Icon */}
                    <div className="flex justify-between items-start mb-6">
                        <div className="relative">
                            <div className="w-16 h-16 rounded-2xl overflow-hidden bg-slate-50 border-2 border-white shadow-lg group-hover:scale-105 transition-transform duration-500">
                                {poet.name.toLowerCase().includes("hadraawi") ? (
                                    <img src="/Hadr.jpeg" alt={poet.name} className="w-full h-full object-cover" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-slate-300">
                                        <User size={28} strokeWidth={1.5} />
                                    </div>
                                )}
                            </div>
                            <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-lg bg-[#007ACC] text-white flex items-center justify-center shadow-lg border-2 border-white transform translate-y-1 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                <Star size={10} fill="currentColor" />
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div className="px-2.5 py-1 rounded-full bg-slate-50 text-slate-400 text-[8px] font-black uppercase tracking-widest border border-slate-100">
                                Verfied
                            </div>
                        </div>
                    </div>

                    {/* Body: Info */}
                    <div className="space-y-4 flex-grow">
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 group-hover:text-[#007ACC] transition-colors leading-tight mb-1">
                                {poet.name}
                            </h3>
                            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-blue-50 text-[#007ACC] text-[10px] font-bold uppercase tracking-wider">
                                <Feather size={10} />
                                {poet.role}
                            </div>
                        </div>

                        <p className="text-slate-500 text-base leading-relaxed line-clamp-2 opacity-80 group-hover:opacity-100 transition-opacity">
                            {poet.bio}
                        </p>
                    </div>

                    {/* Footer: Stats & Action */}
                    <div className="pt-8 mt-8 border-t border-slate-50 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="flex flex-col">
                                <span className="text-lg font-black text-slate-900 leading-none">{poet.poems}</span>
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mt-1">Gabay</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 text-[#007ACC] font-bold text-sm">
                            <span className="opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">Sii Arag</span>
                            <div className="w-10 h-10 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-[#007ACC] group-hover:text-white transition-all duration-500">
                                <ArrowRight size={18} strokeWidth={2.5} />
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

export default function PoetsPage() {
    return (
        <section className="min-h-screen bg-[#fbfcff] py-24 px-6 md:py-32 selection:bg-[#007ACC] selection:text-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03] z-0"
                style={{ backgroundImage: `radial-gradient(#007ACC 1px, transparent 0)`, backgroundSize: '32px 32px' }} />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 text-[#007ACC] text-xs font-bold uppercase tracking-widest mb-6"
                        >
                            <Feather size={14} fill="currentColor" />
                            <span>Hal-abuurka Qaranka</span>
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[0.9]">
                            Abwaanada <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007ACC] to-blue-500 italic font-serif pr-4">Soomaaliyeed</span>
                        </h1>
                    </div>

                    <p className="text-slate-500 text-lg md:text-xl font-medium max-w-sm leading-relaxed border-l-2 border-[#007ACC]/20 pl-8 mb-4">
                        Baro taariikhda iyo suugaanta abwaanada ugu caansan dhulka Soomaalida.
                        Halkan waa keydka murtida soojireenka ah.
                    </p>
                </div>

                {/* Search / Filter simplified for now */}
                <div className="mb-12 flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                    {["Dhammaan", "Sugaanyahan", "Taariikhyahan", "Gabayaa"].map((tab, i) => (
                        <button key={tab} className={`px-6 py-2.5 rounded-2xl text-sm font-bold transition-all shrink-0 ${i === 0 ? 'bg-[#007ACC] text-white shadow-lg shadow-[#007ACC]/20' : 'bg-white text-slate-500 border border-slate-100 hover:border-[#007ACC]/30'}`}>
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Poets Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {POETS.map((poet, index) => (
                        <PoetCard key={poet.id} poet={poet} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
