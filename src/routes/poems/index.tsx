import { Link } from "react-router-dom";
import { Quote, ArrowRight, User } from "lucide-react";
import { POEMS } from "../../data/poems";
import { POETS } from "../../data/poets";

export default function PoemsPage() {
  // Helper to get poet info
  const getPoet = (id: string) => POETS.find(p => p.id === id);

  return (
    <section className="min-h-screen bg-slate-50 py-24 px-6 md:px-12 selection:bg-[#007ACC] selection:text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#007ACC]/10 text-[#007ACC] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
            <Quote size={12} />
            <span>Diiwaanka Maansada</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight mb-6">
            Gabayada & <span className="text-[#007ACC]">Maansooyinka</span>
          </h1>

          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Keydka maansada Soomaaliyeed, laga soo bilaabo suugaantii hore ilaa mida casriga ah.
          </p>
        </div>

        {/* Poems Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {POEMS.map((poem) => {
            const poet = getPoet(poem.poetId);
            return (
              <Link
                key={poem.id}
                to={`/poems/${poem.id}`}
                className="group bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-[#007ACC]/5 transition-all duration-300 hover:-translate-y-1 block"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center overflow-hidden">
                      {poet && poet.image ? (
                        <img src={poet.image} alt={poet.name} className="w-full h-full object-cover" />
                      ) : (
                        <User size={20} className="text-slate-400" />
                      )}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#007ACC] transition-colors">{poet?.name || "Abwaan"}</h4>
                      <span className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">{poem.year || "Unknown"}</span>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-[#007ACC] transition-colors">
                    <ArrowRight size={14} className="text-slate-400 group-hover:text-white transition-colors" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#007ACC] transition-colors">{poem.title}</h3>
                <p className="text-slate-500 leading-relaxed line-clamp-2">{poem.description}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
