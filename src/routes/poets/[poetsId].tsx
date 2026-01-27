import { useParams, Link } from "react-router-dom";
import { ArrowLeft, User, Feather, Share2, Copy, ArrowRight } from "lucide-react";
import { POETS } from "../../data/poets";
import { POEMS } from "../../data/poems";
import { useState } from "react";

export default function PoetDetails() {
  const { poetsId } = useParams();
  const poet = POETS.find(p => p.id === poetsId);
  // Filter poems for this poet
  const poems = POEMS.filter(p => p.poetId === poetsId);

  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!poet) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Abwaan Lama Helin</h2>
        <p className="text-slate-500 mb-6">Waan ka xunnahay, abwaanka aad raadineyso lagama helin diiwaanka.</p>
        <Link to="/poets" className="flex items-center gap-2 text-[#007ACC] font-medium hover:underline">
          <ArrowLeft size={16} /> Ku Laabo Liiska
        </Link>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-white selection:bg-[#007ACC] selection:text-white pb-24">
      {/* Hero Header */}
      <div className="bg-slate-50 pt-32 pb-16 px-6 border-b border-slate-100">
        <div className="max-w-4xl mx-auto">
          <Link to="/poets" className="inline-flex items-center gap-2 text-slate-500 hover:text-[#007ACC] transition-colors mb-8 text-sm font-medium">
            <ArrowLeft size={16} />
            Dib u noqo
          </Link>

          <div className="flex flex-col md:flex-row gap-10 items-start md:items-center">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-[32px] overflow-hidden bg-white shadow-xl shadow-slate-200/50 flex-shrink-0 border-4 border-white">
              {poet.name.toLowerCase().includes("hadraawi") ? (
                <img src="/Hadr.jpeg" alt={poet.name} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-slate-300 bg-slate-100">
                  <User size={64} strokeWidth={1} />
                </div>
              )}
            </div>

            <div className="flex-1 space-y-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="h-[1px] w-8 bg-[#007ACC]" />
                  <span className="text-[#007ACC] text-[10px] font-bold uppercase tracking-[0.2em]">{poet.role}</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
                  {poet.name}
                </h1>
              </div>

              <div className="flex items-center gap-6 text-sm font-medium text-slate-500">
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100">
                  <Feather size={16} className="text-[#007ACC]" />
                  <span>{poet.poems} Gabay</span>
                </div>
                <button onClick={handleShare} className="flex items-center gap-2 hover:text-[#007ACC] transition-colors relative">
                  {copied ? <Copy size={16} /> : <Share2 size={16} />}
                  <span>{copied ? "La Koobiyey" : "La Wadaag"}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Body */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="prose prose-slate prose-lg max-w-none">
          <h3 className="text-xl font-bold text-slate-900 mb-4">Taariikh Nololeedkii</h3>
          <p className="text-slate-600 leading-relaxed mb-8">
            {poet.fullBio || poet.bio}
          </p>

          <h3 className="text-xl font-bold text-slate-900 mb-4">Gabayada Ugu Caansan</h3>
          <div className="not-prose grid gap-4">
            {/* Mock Poems List */}
            {/* Actual Poems List */}
            {poems.length > 0 ? (
              poems.map((poem) => (
                <Link
                  key={poem.id}
                  to={`/poems/${poem.id}`}
                  className="p-4 rounded-2xl border border-slate-100 hover:border-[#007ACC]/30 hover:bg-slate-50 transition-all cursor-pointer group flex items-center justify-between"
                >
                  <span className="font-medium text-slate-700 group-hover:text-[#007ACC]">{poem.title} - {poem.year}</span>
                  <ArrowRight size={16} className="text-slate-300 group-hover:text-[#007ACC] -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              ))
            ) : (
              <div className="p-8 text-center bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                <p className="text-slate-500">Weli laguma darin gabayo abwaankan.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
