import {
  Lightbulb,
  BookOpen,
  Users,
  Mic,
  PenTool,
  Globe2,
} from "lucide-react";

const steps = [
  {
    step: "Tallaabo 01",
    title: "Hal-abuur Cusub",
    desc: "Abwaannadu waxay helayaan meel ay ku soo bandhigaan gabayo cusub oo hal-abuur leh.",
    icon: Lightbulb,
  },
  {
    step: "Tallaabo 02",
    title: "Ururinta Gabayada",
    desc: "Maanso waxay noqotaa keyd suugaaneed oo lagu kaydiyo gabayo hore iyo kuwo casri ah.",
    icon: BookOpen,
  },
  {
    step: "Tallaabo 03",
    title: "Bulsho Isku Xiran",
    desc: "Abwaanno, qoraayaal, iyo akhristayaal ayaa hal meel ku kulmaya.",
    icon: Users,
  },
  {
    step: "Tallaabo 04",
    title: "Cod & Muuqaal",
    desc: "Gabayada waxaa lagu dhageysan karaa ama lagu daawan karaa cod iyo muuqaal.",
    icon: Mic,
  },
  {
    step: "Tallaabo 05",
    title: "Qorid & Tafatir",
    desc: "Qalab kuu sahlaya qorista, tafatirka, iyo kaydinta gabayadaada.",
    icon: PenTool,
  },
  {
    step: "Tallaabo 06",
    title: "Suugaan Caalami ah",
    desc: "Suugaanta Soomaaliyeed oo gaarta akhristayaal caalami ah.",
    icon: Globe2,
  },
];

export default function FeaturesTimeline() {
  return (
    <section className="py-28 bg-[#f6faff]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-20 max-w-2xl">
          <h2 className="text-4xl font-semibold text-slate-900 mb-4">
            Sida Maanso u Shaqeyso
          </h2>
          <p className="text-slate-600 text-lg">
            Maanso waa madal nidaamsan oo suugaanta Soomaaliyeed u qaabeysa si
            casri ah oo waara.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-12">
          {steps.map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={index} className="flex gap-6 items-start">
                
                {/* Left icon + line */}
                <div className="relative flex flex-col items-center">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#4189DD] text-white">
                    <Icon className="w-6 h-6" />
                  </div>

                  {index !== steps.length - 1 && (
                    <div className="w-px h-full bg-[#4189DD]/30 mt-2" />
                  )}
                </div>

                {/* Right card */}
                <div className="flex-1 bg-white border border-[#4189DD]/20 rounded-xl p-6 shadow-sm">
                  <span className="text-sm font-medium text-[#4189DD]">
                    {item.step}
                  </span>

                  <h3 className="text-xl font-semibold text-slate-900 mt-1 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
