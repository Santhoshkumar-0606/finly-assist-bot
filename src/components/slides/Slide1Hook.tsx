import SlideLayout from "./SlideLayout";
import heroImg from "@/assets/slide1-hero.jpg";

export default function Slide1Hook() {
  return (
    <SlideLayout gradient>
      <div className="flex h-full">
        {/* Left content */}
        <div className="flex-1 flex flex-col justify-center pr-16">
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="w-3 h-3 rounded-full bg-slide-emerald" />
            <span className="text-sm font-medium tracking-widest uppercase text-slide-gray-500">
              Blaze a Trail 3.0
            </span>
          </div>
          <h1 className="text-6xl font-bold leading-tight text-slide-navy mb-8">
            FinAssist AI
          </h1>
          <p className="text-2xl font-light text-slide-gray-800 leading-relaxed mb-6">
            Bridging the Compliance Gap for Bharat's SMBs
          </p>
          <p className="text-lg text-slide-gray-500 leading-relaxed max-w-[700px]">
            An AI-native regulatory engine turning fragmented government data into actionable business intelligence.
          </p>

          <div className="flex gap-4 mt-12">
            <div className="citation-badge">PS11 · AI Chatbot for Financial FAQs</div>
            <div className="citation-badge">FinTech / Digital Governance</div>
          </div>

          <p className="text-base text-slide-gray-500 mt-8">
            Team: <span className="font-semibold text-slide-navy">FinAssist AI</span> · Software Category
          </p>
        </div>

        {/* Right image */}
        <div className="w-[500px] flex items-center justify-center">
          <img
            src={heroImg}
            alt="WhatsApp AI Financial Assistant mockup"
            className="w-full rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </SlideLayout>
  );
}
