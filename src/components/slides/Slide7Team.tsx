import SlideLayout from "./SlideLayout";

export default function Slide7Team() {
  return (
    <SlideLayout slideNumber={7}>
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
          RESEARCH, REFERENCES & TEAM
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
            Research & References
          </h4>
          <ul className="space-y-3 ml-4" style={{ fontSize: 26, color: "#333" }}>
            <li className="flex items-start gap-4">
              <span>•</span>
              <span>Reserve Bank of India — rbi.org.in</span>
            </li>
            <li className="flex items-start gap-4">
              <span>•</span>
              <span>Goods and Services Tax Network — gstn.org.in</span>
            </li>
            <li className="flex items-start gap-4">
              <span>•</span>
              <span>Income Tax Department of India — incometaxindia.gov.in</span>
            </li>
            <li className="flex items-start gap-4">
              <span>•</span>
              <span>Ministry of Corporate Affairs — mca.gov.in</span>
            </li>
            <li className="flex items-start gap-4">
              <span>•</span>
              <span>EPFO — epfindia.gov.in</span>
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
            Team Members
          </h4>

          {/* Table */}
          <table style={{ fontSize: 26, color: "#333", borderCollapse: "collapse", width: "80%" }}>
            <thead>
              <tr style={{ borderBottom: "2px solid #1B3A5C" }}>
                <th className="text-left pb-3 pr-16" style={{ fontWeight: 700, color: "#1B3A5C" }}>Name</th>
                <th className="text-left pb-3 pr-16" style={{ fontWeight: 700, color: "#1B3A5C" }}>Year</th>
                <th className="text-left pb-3" style={{ fontWeight: 700, color: "#1B3A5C" }}>Dept</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: "1px solid #ddd" }}>
                <td className="py-3 pr-16">Member 1</td>
                <td className="py-3 pr-16">3rd Year</td>
                <td className="py-3">CSE</td>
              </tr>
              <tr style={{ borderBottom: "1px solid #ddd" }}>
                <td className="py-3 pr-16">Member 2</td>
                <td className="py-3 pr-16">3rd Year</td>
                <td className="py-3">CSE</td>
              </tr>
              <tr style={{ borderBottom: "1px solid #ddd" }}>
                <td className="py-3 pr-16">Member 3</td>
                <td className="py-3 pr-16">3rd Year</td>
                <td className="py-3">IT</td>
              </tr>
              <tr>
                <td className="py-3 pr-16">Member 4</td>
                <td className="py-3 pr-16">3rd Year</td>
                <td className="py-3">CSE</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </SlideLayout>
  );
}
