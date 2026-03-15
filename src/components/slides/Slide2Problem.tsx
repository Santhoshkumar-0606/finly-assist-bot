import SlideLayout from "./SlideLayout";
import problemImg from "@/assets/slide2-problem.jpg";
import { AlertTriangle, FileText, Globe } from "lucide-react";

const problems = [
  {
    icon: FileText,
    title: "Fragmentation",
    desc: "5,000+ PDFs across RBI, GSTN, and Income Tax portals. Information scattered, hard to search.",
  },
  {
    icon: Globe,
    title: "Language Barrier",
    desc: "Legal jargon is inaccessible to the average shopkeeper or small business owner.",
  },
  {
    icon: AlertTriangle,
    title: "Cost of Error",
    desc: "Non-compliance penalties average ₹25,000+ for small errors. Fear prevents formalization.",
  },
];

export default function Slide2Problem() {
  return (
    <SlideLayout>
      <div className="flex h-full">
        <div className="flex-1 flex flex-col justify-center pr-16">
          <span className="text-sm font-medium tracking-widest uppercase text-slide-emerald mb-4">
            The Problem
          </span>
          <h2 className="text-5xl font-bold text-slide-navy mb-12">
            Financial Literacy is a<br />Tax on Growth
          </h2>

          <div className="flex flex-col gap-8">
            {problems.map((p) => (
              <div key={p.title} className="slide-card p-8 flex items-start gap-6">
                <div className="w-14 h-14 rounded-xl bg-slide-emerald-light flex items-center justify-center flex-shrink-0">
                  <p.icon className="w-7 h-7 text-slide-emerald" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slide-navy mb-2">{p.title}</h3>
                  <p className="text-base text-slide-gray-500">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-[550px] flex items-center justify-center">
          <img
            src={problemImg}
            alt="Chaos vs Order - financial compliance"
            className="w-full rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </SlideLayout>
  );
}
