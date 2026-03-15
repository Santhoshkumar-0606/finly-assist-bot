import SlideLayout from "./SlideLayout";

export default function Slide2Problem() {
  return (
    <SlideLayout slideNumber={2}>
      <div className="flex flex-col h-full">
        {/* Title */}
        <h2
          className="text-center ml-32"
          style={{
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: 48,
            fontWeight: 700,
            color: "#1a1a1a",
          }}
        >
          IDEA TITLE
        </h2>

        {/* Subtitle with diamond */}
        <div className="mt-12 flex items-start gap-3 ml-4">
          <span style={{ color: "#2874A6", fontSize: 28 }}>◆</span>
          <h3
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: 34,
              fontWeight: 700,
              color: "#1B3A5C",
              textDecoration: "underline",
            }}
          >
            FinAssist AI – Financial Assistant Chatbot
          </h3>
        </div>

        {/* Section: Proposed Solution */}
        <div className="mt-10 ml-4">
          <h4
            className="mb-6"
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: 30,
              fontWeight: 700,
              color: "#1B3A5C",
              textDecoration: "underline",
            }}
          >
            Proposed Solution
          </h4>

          <ul className="space-y-5 ml-4" style={{ fontSize: 28, color: "#333" }}>
            <li className="flex items-start gap-4">
              <span>•</span>
              <span>AI chatbot that answers business finance questions</span>
            </li>
            <li className="flex items-start gap-4">
              <span>•</span>
              <span>Uses verified data from official government sources (RBI, GSTN, IT Dept)</span>
            </li>
            <li className="flex items-start gap-4">
              <span>•</span>
              <span>Provides instant responses with source references</span>
            </li>
            <li className="flex items-start gap-4">
              <span>•</span>
              <span>Supports conversational interaction for easy use</span>
            </li>
          </ul>

          <p className="mt-8 ml-4" style={{ fontSize: 26, color: "#555", fontStyle: "italic" }}>
            Helps small businesses get quick and reliable financial guidance.
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}
