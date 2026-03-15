import SlideLayout from "./SlideLayout";

export default function Slide3Solution() {
  return (
    <SlideLayout slideNumber={3}>
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
          SOLUTION DETAILS
        </h2>

        <div className="mt-12 ml-4">
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
            How it Addresses the Problem
          </h4>

          <ul className="space-y-4 ml-4" style={{ fontSize: 28, color: "#333" }}>
            <li className="flex items-start gap-4">
              <span>•</span>
              <span>Centralizes financial information in one platform</span>
            </li>
            <li className="flex items-start gap-4">
              <span>•</span>
              <span>Simplifies complex regulations for business owners</span>
            </li>
            <li className="flex items-start gap-4">
              <span>•</span>
              <span>Reduces dependency on accountants for basic queries</span>
            </li>
            <li className="flex items-start gap-4">
              <span>•</span>
              <span>Provides 24/7 assistance for financial queries</span>
            </li>
          </ul>
        </div>

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
            Innovation & Uniqueness
          </h4>

          <ul className="space-y-4 ml-4" style={{ fontSize: 28, color: "#333" }}>
            <li className="flex items-start gap-4">
              <span>•</span>
              <span>AI-based financial knowledge assistant with RAG architecture</span>
            </li>
            <li className="flex items-start gap-4">
              <span>•</span>
              <span>Context-aware chatbot conversation with memory</span>
            </li>
            <li className="flex items-start gap-4">
              <span>•</span>
              <span>Multi-language support for Indian users (Hindi, Tamil, Marathi)</span>
            </li>
            <li className="flex items-start gap-4">
              <span>•</span>
              <span>Voice input & Notice Decoder (upload photo → get explanation)</span>
            </li>
          </ul>
        </div>
      </div>
    </SlideLayout>
  );
}
