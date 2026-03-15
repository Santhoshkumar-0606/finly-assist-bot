import SlideLayout from "./SlideLayout";

export default function Slide5Implementation() {
  return (
    <SlideLayout slideNumber={5}>
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
          FEASIBILITY AND VIABILITY
        </h2>

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
            Feasibility
          </h4>
          <ul className="space-y-4 ml-4" style={{ fontSize: 28, color: "#333" }}>
            <li className="flex items-start gap-4">
              <span>•</span>
              <span>Government financial data is publicly available — no licensing hurdles</span>
            </li>
            <li className="flex items-start gap-4">
              <span>•</span>
              <span>AI tools and open-source LLMs enable fast, low-cost knowledge retrieval</span>
            </li>
            <li className="flex items-start gap-4">
              <span>•</span>
              <span>Chatbot platforms are easy to deploy across WhatsApp, Web, and Mobile</span>
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
            Challenges & Solutions
          </h4>
          <ul className="space-y-4 ml-4" style={{ fontSize: 28, color: "#333" }}>
            <li className="flex items-start gap-4">
              <span>•</span>
              <span>
                <strong>Challenge:</strong> Ensuring accuracy of financial information
                <br />
                <strong>Solution:</strong> Use only verified sources like RBI, GSTN, IT Dept
              </span>
            </li>
            <li className="flex items-start gap-4">
              <span>•</span>
              <span>
                <strong>Challenge:</strong> Updating regulatory changes regularly
                <br />
                <strong>Solution:</strong> Automated daily scraping and re-indexing pipeline
              </span>
            </li>
          </ul>
        </div>
      </div>
    </SlideLayout>
  );
}
