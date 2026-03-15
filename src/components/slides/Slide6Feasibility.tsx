import SlideLayout from "./SlideLayout";

export default function Slide6Feasibility() {
  return (
    <SlideLayout slideNumber={6}>
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
          IMPACT AND BENEFITS
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
            Impact
          </h4>
          <ul className="space-y-4 ml-4" style={{ fontSize: 28, color: "#333" }}>
            <li className="flex items-start gap-4">
              <span>•</span>
              <span>Helps 63M+ small businesses understand financial rules instantly</span>
            </li>
            <li className="flex items-start gap-4">
              <span>•</span>
              <span>90% reduction in time spent searching for regulatory information</span>
            </li>
            <li className="flex items-start gap-4">
              <span>•</span>
              <span>Lowers the barrier for formalizing "Grey Market" businesses</span>
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
            Benefits
          </h4>
          <ul className="space-y-4 ml-4" style={{ fontSize: 28, color: "#333" }}>
            <li className="flex items-start gap-4">
              <span>•</span>
              <span><strong>Social:</strong> Improves financial literacy and awareness for SMB owners</span>
            </li>
            <li className="flex items-start gap-4">
              <span>•</span>
              <span><strong>Economic:</strong> Saves time and reduces compliance errors & penalties (avg ₹25,000+)</span>
            </li>
            <li className="flex items-start gap-4">
              <span>•</span>
              <span><strong>Accessibility:</strong> Multi-language & voice support breaks language barriers</span>
            </li>
            <li className="flex items-start gap-4">
              <span>•</span>
              <span><strong>Cost:</strong> ₹0 search cost — free access to verified regulatory information</span>
            </li>
          </ul>
        </div>
      </div>
    </SlideLayout>
  );
}
