import SlideLayout from "./SlideLayout";

export default function Slide4Technical() {
  return (
    <SlideLayout slideNumber={4}>
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
          TECHNICAL APPROACH
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
            Technologies Used
          </h4>

          <ul className="space-y-4 ml-4" style={{ fontSize: 28, color: "#333" }}>
            <li className="flex items-start gap-4">
              <span>•</span>
              <span><strong>Frontend:</strong> React / Next.js</span>
            </li>
            <li className="flex items-start gap-4">
              <span>•</span>
              <span><strong>Backend:</strong> Python / FastAPI</span>
            </li>
            <li className="flex items-start gap-4">
              <span>•</span>
              <span><strong>AI Model:</strong> Large Language Models (GPT-4o / Claude 3.5 Sonnet)</span>
            </li>
            <li className="flex items-start gap-4">
              <span>•</span>
              <span><strong>Database:</strong> FAISS / Pinecone Vector Database</span>
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
            Methodology
          </h4>

          <ul className="space-y-4 ml-4" style={{ fontSize: 28, color: "#333" }}>
            <li className="flex items-start gap-4">
              <span>1.</span>
              <span>Collect financial data from government portals (RBI, GSTN, EPFO)</span>
            </li>
            <li className="flex items-start gap-4">
              <span>2.</span>
              <span>Convert documents into searchable text & vector embeddings</span>
            </li>
            <li className="flex items-start gap-4">
              <span>3.</span>
              <span>Store data in vector database for fast retrieval</span>
            </li>
            <li className="flex items-start gap-4">
              <span>4.</span>
              <span>AI retrieves relevant information via RAG filter</span>
            </li>
            <li className="flex items-start gap-4">
              <span>5.</span>
              <span>Chatbot generates verified answers with source citations</span>
            </li>
          </ul>
        </div>
      </div>
    </SlideLayout>
  );
}
