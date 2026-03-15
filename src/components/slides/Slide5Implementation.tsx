import SlideLayout from "./SlideLayout";
import { Database, Brain, Smartphone, CheckCircle2 } from "lucide-react";

const phases = [
  {
    icon: Database,
    phase: "Phase 1",
    title: "Data Ingestion",
    desc: "Scrape RBI, GSTN, EPFO, Income Tax portals daily. Convert PDFs to searchable text.",
    status: "In Progress",
  },
  {
    icon: Brain,
    phase: "Phase 2",
    title: "Model Fine-tuning",
    desc: "Train on Indian legal nomenclature. Store 10K+ clauses as vector embeddings.",
    status: "Planned",
  },
  {
    icon: Smartphone,
    phase: "Phase 3",
    title: "Omni-channel Launch",
    desc: "Deploy on WhatsApp Business API, Web App, and Mobile App simultaneously.",
    status: "Planned",
  },
  {
    icon: CheckCircle2,
    phase: "Phase 4",
    title: "Pro-Connect Marketplace",
    desc: "'Talk to a CA' button connects to verified professionals for micro-consultation.",
    status: "Future",
  },
];

export default function Slide5Implementation() {
  return (
    <SlideLayout gradient>
      <span className="text-sm font-medium tracking-widest uppercase text-slide-emerald mb-4">
        Roadmap
      </span>
      <h2 className="text-5xl font-bold text-slide-navy mb-16">
        From Data to Deployment
      </h2>

      {/* Timeline */}
      <div className="relative flex-1">
        {/* Dashed line */}
        <div className="absolute top-[60px] left-0 right-0 h-[2px] border-t-2 border-dashed border-slide-gray-200" />

        <div className="grid grid-cols-4 gap-8 relative">
          {phases.map((p, i) => (
            <div key={p.phase} className="flex flex-col items-center text-center">
              {/* Dot */}
              <div className="w-6 h-6 rounded-full bg-slide-emerald mb-4 relative z-10 shadow-lg" />

              <div className="slide-card p-8 w-full mt-8">
                <div className="w-12 h-12 rounded-xl bg-slide-emerald-light flex items-center justify-center mx-auto mb-4">
                  <p.icon className="w-6 h-6 text-slide-emerald" />
                </div>
                <span className="text-sm font-semibold text-slide-emerald">{p.phase}</span>
                <h3 className="text-xl font-bold text-slide-navy mt-2 mb-3">{p.title}</h3>
                <p className="text-base text-slide-gray-500">{p.desc}</p>
                <div className="mt-4">
                  <span className="citation-badge">{p.status}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}
