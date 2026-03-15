import SlideLayout from "./SlideLayout";
import archImg from "@/assets/slide4-architecture.jpg";

const stack = [
  { label: "Frontend", tech: "React / Next.js", color: "bg-blue-100 text-blue-700" },
  { label: "Backend", tech: "Python / FastAPI", color: "bg-emerald-100 text-emerald-700" },
  { label: "AI Model", tech: "LLMs (GPT-4o / Claude 3.5)", color: "bg-purple-100 text-purple-700" },
  { label: "Vector DB", tech: "FAISS / Pinecone", color: "bg-amber-100 text-amber-700" },
];

export default function Slide4Technical() {
  return (
    <SlideLayout>
      <span className="text-sm font-medium tracking-widest uppercase text-slide-emerald mb-4">
        Technical Architecture
      </span>
      <h2 className="text-5xl font-bold text-slide-navy mb-12">
        Precision Engineering for<br />Financial Accuracy
      </h2>

      <div className="flex gap-12 flex-1">
        <div className="flex-1 flex flex-col gap-6">
          <h3 className="text-2xl font-semibold text-slide-navy mb-2">Technology Stack</h3>
          <div className="grid grid-cols-2 gap-4">
            {stack.map((s) => (
              <div key={s.label} className="slide-card p-6">
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${s.color}`}>
                  {s.label}
                </span>
                <p className="text-lg font-semibold text-slide-navy">{s.tech}</p>
              </div>
            ))}
          </div>

          <div className="slide-card p-6 mt-4">
            <h4 className="text-lg font-semibold text-slide-navy mb-2">Key Performance</h4>
            <p className="text-base text-slide-gray-500">Sub-200ms response times · 10,000+ scraped regulatory clauses · Real-time data updates</p>
          </div>
        </div>

        <div className="w-[650px] flex items-center justify-center">
          <img
            src={archImg}
            alt="Technical architecture flow diagram"
            className="w-full rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </SlideLayout>
  );
}
