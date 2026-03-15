import SlideLayout from "./SlideLayout";
import { TrendingUp, Clock, Shield, DollarSign } from "lucide-react";

const stats = [
  { value: "63M+", label: "SMBs in India", icon: TrendingUp },
  { value: "90%", label: "Reduction in Search Time", icon: Clock },
  { value: "₹0", label: "Search Cost for Users", icon: DollarSign },
  { value: "24/7", label: "Always-On Assistance", icon: Shield },
];

const feasibility = [
  "Government financial data is publicly available — no licensing hurdles",
  "Open-source LLMs keep infrastructure costs low",
  "Chatbot platforms enable rapid deployment across channels",
  "Vector databases provide fast, accurate information retrieval",
];

const challenges = [
  { challenge: "Ensuring accuracy of financial information", solution: "Use only verified sources (RBI, GSTN, IT Dept)" },
  { challenge: "Keeping up with regulatory changes", solution: "Automated daily scraping and re-indexing pipeline" },
];

export default function Slide6Feasibility() {
  return (
    <SlideLayout>
      <span className="text-sm font-medium tracking-widest uppercase text-slide-emerald mb-4">
        Feasibility & Impact
      </span>
      <h2 className="text-5xl font-bold text-slide-navy mb-12">
        Scaling Trust for 63 Million SMBs
      </h2>

      <div className="flex gap-12 flex-1">
        <div className="flex-1">
          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {stats.map((s) => (
              <div key={s.label} className="slide-card p-6 text-center">
                <s.icon className="w-8 h-8 text-slide-emerald mx-auto mb-3" />
                <div className="text-4xl font-bold text-slide-navy" style={{ fontVariantNumeric: "tabular-nums" }}>
                  {s.value}
                </div>
                <p className="text-base text-slide-gray-500 mt-1">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Challenges */}
          <div className="slide-card p-6">
            <h3 className="text-xl font-semibold text-slide-navy mb-4">Challenges & Solutions</h3>
            {challenges.map((c) => (
              <div key={c.challenge} className="mb-4 last:mb-0">
                <p className="text-base text-slide-gray-800 font-medium">⚠️ {c.challenge}</p>
                <p className="text-base text-slide-emerald ml-6">✓ {c.solution}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1">
          <div className="slide-card p-8 h-full">
            <h3 className="text-2xl font-semibold text-slide-navy mb-6">Why It's Feasible</h3>
            <ul className="space-y-5">
              {feasibility.map((f, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-slide-emerald-light flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold text-slide-emerald">{i + 1}</span>
                  </div>
                  <p className="text-lg text-slide-gray-800">{f}</p>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-6 rounded-xl bg-slide-emerald-light">
              <p className="text-lg font-semibold text-slide-navy">Impact Summary</p>
              <p className="text-base text-slide-gray-500 mt-2">
                Lowering the barrier for formalizing "Grey Market" businesses while saving SMBs time and reducing compliance errors significantly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
