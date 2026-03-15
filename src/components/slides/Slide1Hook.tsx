import SlideLayout from "./SlideLayout";
import collegeLogo from "@/assets/college-logo.jpg";

export default function Slide1Hook() {
  return (
    <SlideLayout slideNumber={1} isFirstSlide showTeamOval={false}>
      <div className="flex flex-col h-full px-8 pt-6">
        {/* Title */}
        <h1
          className="text-center mb-16"
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: 56,
            fontWeight: 700,
            color: "#1B3A5C",
          }}
        >
          BLAZE A TRAIL 3.0
        </h1>

        {/* Bullet points */}
        <ul className="space-y-10 ml-4" style={{ fontSize: 32, fontWeight: 600, color: "#1a1a1a" }}>
          <li className="flex items-start gap-4">
            <span style={{ marginTop: 4 }}>•</span>
            <span>
              Problem Statement -{" "}
              <span style={{ fontWeight: 400 }}>
                Small businesses struggle to understand financial regulations, GST filing, banking issues, and compliance rules.
              </span>
            </span>
          </li>
          <li className="flex items-start gap-4">
            <span style={{ marginTop: 4 }}>•</span>
            <span>
              Problem Statement Title -{" "}
              <span style={{ fontWeight: 400 }}>AI Chatbot for Financial FAQs</span>
            </span>
          </li>
          <li className="flex items-start gap-4">
            <span style={{ marginTop: 4 }}>•</span>
            <span>
              Theme -{" "}
              <span style={{ fontWeight: 400 }}>FinTech / Digital Governance</span>
            </span>
          </li>
          <li className="flex items-start gap-4">
            <span style={{ marginTop: 4 }}>•</span>
            <span>
              PS Category -{" "}
              <span style={{ fontWeight: 400 }}>Software</span>
            </span>
          </li>
          <li className="flex items-start gap-4">
            <span style={{ marginTop: 4 }}>•</span>
            <span>
              Team Name -{" "}
              <span style={{ fontWeight: 400 }}>FinAssist AI</span>
            </span>
          </li>
        </ul>

        {/* College logo section at bottom */}
        <div className="mt-auto flex items-center justify-center pb-4">
          <img
            src={collegeLogo}
            alt="St. Joseph's Institute of Technology"
            style={{ height: 120 }}
          />
        </div>
      </div>
    </SlideLayout>
  );
}
