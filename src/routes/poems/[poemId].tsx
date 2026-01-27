import { useParams, Link } from "react-router-dom";
import { ArrowLeft, User, Calendar, Quote, Share2, Copy } from "lucide-react";
import { POEMS } from "../../data/poems";
import { POETS } from "../../data/poets";
import { useState } from "react";

export default function PoemDetails() {
    const { poemId } = useParams();
    const poem = POEMS.find(p => p.id === poemId);
    const poet = poem ? POETS.find(p => p.id === poem.poetId) : null;
    const [copied, setCopied] = useState(false);

    const handleShare = () => {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    if (!poem) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">Maanso Lama Helin</h2>
                <p className="text-slate-500 mb-6">Waan ka xunnahay, maansada aad raadineyso lagama helin diiwaanka.</p>
                <Link to="/poems" className="flex items-center gap-2 text-[#007ACC] font-medium hover:underline">
                    <ArrowLeft size={16} /> Ku Laabo Liiska
                </Link>
            </div>
        );
    }

    return (
        <section className="min-h-screen bg-slate-50/50 selection:bg-[#007ACC] selection:text-white pb-24">
            {/* Header / Title Section */}
            <div className="bg-white border-b border-slate-100 pt-32 pb-12 px-6">
                <div className="max-w-3xl mx-auto">
                    <Link to={`/poets/${poem.poetId}`} className="inline-flex items-center gap-2 text-slate-500 hover:text-[#007ACC] transition-colors mb-8 text-sm font-medium">
                        <ArrowLeft size={16} />
                        Dib u noqo
                    </Link>

                    <div className="flex flex-col gap-6">
                        <div>
                            <div className="inline-block p-2 bg-[#007ACC]/5 rounded-xl mb-4">
                                <Quote className="text-[#007ACC]" size={24} />
                            </div>
                            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-4">
                                {poem.title}
                            </h1>
                            <p className="text-slate-500 text-lg leading-relaxed max-w-2xl">
                                {poem.description}
                            </p>
                        </div>

                        {/* Meta Data */}
                        <div className="flex flex-wrap items-center gap-4 text-sm">
                            {poet && (
                                <Link to={`/poets/${poet.id}`} className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-1.5 rounded-full transition-colors">
                                    <User size={14} />
                                    <span className="font-semibold">{poet.name}</span>
                                </Link>
                            )}
                            {poem.year && (
                                <div className="flex items-center gap-2 text-slate-500 px-3 py-1.5 border border-slate-100 rounded-full">
                                    <Calendar size={14} />
                                    <span>{poem.year}</span>
                                </div>
                            )}
                            <button onClick={handleShare} className="ml-auto flex items-center gap-2 text-[#007ACC] hover:text-[#005fa3] font-medium transition-colors">
                                {copied ? <Copy size={16} /> : <Share2 size={16} />}
                                <span>{copied ? "La Koobiyey" : "La Wadaag"}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Poem Content */}
            <div className="max-w-3xl mx-auto px-6 py-12">
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden">
                    {/* Background Decoration */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#007ACC]/5 to-transparent rounded-bl-[100px] pointer-events-none" />

                    <div className="space-y-8 relative z-10">
                        {poem.content.map((stanza, index) => (
                            <p key={index} className="text-xl md:text-2xl leading-[1.8] text-slate-700 font-serif whitespace-pre-line">
                                {stanza}
                            </p>
                        ))}
                    </div>

                    <div className="mt-12 pt-8 border-t border-slate-50 flex justify-center">
                        <span className="text-slate-300 text-2xl tracking-[0.5em]">***</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
