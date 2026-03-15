import SlideLayout from "./SlideLayout";
import { ExternalLink, Linkedin } from "lucide-react";

const references = [
  { name: "Reserve Bank of India", url: "rbi.org.in" },
  { name: "Goods and Services Tax Network", url: "gstn.org.in" },
  { name: "Income Tax Department", url: "incometaxindia.gov.in" },
  { name: "Ministry of Corporate Affairs", url: "mca.gov.in" },
  { name: "EPFO", url: "epfindia.gov.in" },
];

const team = [
  { name: "Member 1", role: "AI/ML Lead", year: "3rd Year", dept: "CSE" },
  { name: "Member 2", role: "Backend Developer", year: "3rd Year", dept: "CSE" },
  { name: "Member 3", role: "Frontend Developer", year: "3rd Year", dept: "IT" },
  { name: "Member 4", role: "Data & Research", year: "3rd Year", dept: "CSE" },
];

export default function Slide7Team() {
  return (
    <SlideLayout gradient>
      <div className="flex h-full">
        <div className="flex-1 flex flex-col pr-16">
          <span className="text-sm font-medium tracking-widest uppercase text-slide-emerald mb-4">
            Team & Vision
          </span>
          <h2 className="text-5xl font-bold text-slide-navy mb-4">
            Team FinAssist AI
          </h2>
          <p className="text-lg text-slide-gray-500 mb-10 max-w-[700px]">
            To be the default "Start" button for every new business in India.
          </p>

          {/* Team Grid */}
          <div className="grid grid-cols-2 gap-5 mb-10">
            {team.map((m) => (
              <div key={m.name} className="slide-card p-6 flex items-center gap-5">
                <div className="w-16 h-16 rounded-full bg-slide-emerald-light flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-slide-emerald">
                    {m.name.split(" ").map(w => w[0]).join("")}
                  </span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slide-navy">{m.name}</h4>
                  <p className="text-base text-slide-emerald font-medium">{m.role}</p>
                  <p className="text-sm text-slide-gray-500">{m.year} · {m.dept}</p>
                </div>
                <Linkedin className="w-5 h-5 text-slide-gray-500 ml-auto" />
              </div>
            ))}
          </div>

          <p className="text-base text-slide-gray-500 italic">
            St. Joseph's Institute of Technology, OMR, Chennai
          </p>
        </div>

        {/* References */}
        <div className="w-[500px] flex flex-col justify-center">
          <div className="slide-card p-8">
            <h3 className="text-2xl font-semibold text-slide-navy mb-6">Research & References</h3>
            <div className="space-y-4">
              {references.map((r) => (
                <div key={r.name} className="flex items-center gap-3 p-4 rounded-lg bg-slide-emerald-light/50">
                  <ExternalLink className="w-5 h-5 text-slide-emerald flex-shrink-0" />
                  <div>
                    <p className="text-base font-medium text-slide-navy">{r.name}</p>
                    <p className="text-sm text-slide-gray-500">{r.url}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="citation-badge text-lg px-6 py-2 inline-flex">
              Thank You 🙏
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
