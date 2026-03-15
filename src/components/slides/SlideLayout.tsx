import { ReactNode } from "react";
import ScaledSlide from "./ScaledSlide";

interface SlideLayoutProps {
  children: ReactNode;
  slideNumber: number;
  showTeamOval?: boolean;
  isFirstSlide?: boolean;
}

export default function SlideLayout({ children, slideNumber, showTeamOval = true, isFirstSlide = false }: SlideLayoutProps) {
  return (
    <ScaledSlide>
      <div className="w-full h-full flex flex-col" style={{ background: "#ffffff" }}>
        {/* Main content area */}
        <div className="flex-1 relative px-16 pt-10 pb-4">
          {/* Team name oval - top left (slides 2-7) */}
          {showTeamOval && !isFirstSlide && (
            <div
              className="absolute top-6 left-10 flex items-center justify-center"
              style={{
                width: 130,
                height: 90,
                borderRadius: "50%",
                border: "3px solid #7B68AE",
              }}
            >
              <span style={{ color: "#7B68AE", fontSize: 22, fontWeight: 500, textAlign: "center", lineHeight: 1.2 }}>
                FinAssist<br />AI
              </span>
            </div>
          )}
          {children}
        </div>

        {/* Blue footer bar (slides 2-7) */}
        {!isFirstSlide && (
          <div
            className="flex items-center justify-center relative"
            style={{ height: 48, background: "#2874A6" }}
          >
            <span style={{ color: "#ffffff", fontSize: 18, fontWeight: 600 }}>
              Blaze a Trail 3.0
            </span>
            <span
              className="absolute right-8"
              style={{ color: "#ffffff", fontSize: 18, fontWeight: 700 }}
            >
              {slideNumber}
            </span>
          </div>
        )}
      </div>
    </ScaledSlide>
  );
}
