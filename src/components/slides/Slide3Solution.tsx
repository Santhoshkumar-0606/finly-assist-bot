import SlideLayout from "./SlideLayout";
import { Bot, Link2, FileSearch, MessageSquare, Mic, Globe } from "lucide-react";

const features = [
  { icon: Bot, title: "RAG-Powered Q&A", desc: "Retrieval-Augmented Generation ensures zero hallucinations with verified data." },
  { icon: Link2, title: "Source-Linked Answers", desc: "Every response backed by a link to the official gazette or circular." },
  { icon: FileSearch, title: "Notice Decoder", desc: "Upload a photo of a tax notice, get plain-language summary and next steps." },
  { icon: MessageSquare, title: "Context Retention", desc: "Conversational memory within sessions for follow-up questions." },
  { icon: Mic, title: "Voice Input", desc: "Voice notes in Hindi/Tamil/Marathi converted to cited text answers." },
  { icon: Globe, title: "Multi-language", desc: "Supports English and major Indian regional languages." },
];

export default function Slide3Solution() {
  return (
    <SlideLayout gradient>
      <span className="text-sm font-medium tracking-widest uppercase text-slide-emerald mb-4">
        The Solution
      </span>
      <h2 className="text-5xl font-bold text-slide-navy mb-4">
        Your Virtual Chief Financial Officer
      </h2>
      <p className="text-lg text-slide-gray-500 mb-12 max-w-[900px]">
        AI chatbot that answers business finance questions using verified data from official government sources. Helps small businesses get quick and reliable financial guidance.
      </p>

      <div className="grid grid-cols-3 gap-6 flex-1">
        {features.map((f) => (
          <div key={f.title} className="slide-card p-8 flex flex-col">
            <div className="w-14 h-14 rounded-xl bg-slide-emerald-light flex items-center justify-center mb-6">
              <f.icon className="w-7 h-7 text-slide-emerald" />
            </div>
            <h3 className="text-xl font-semibold text-slide-navy mb-3">{f.title}</h3>
            <p className="text-base text-slide-gray-500">{f.desc}</p>
          </div>
        ))}
      </div>
    </SlideLayout>
  );
}
