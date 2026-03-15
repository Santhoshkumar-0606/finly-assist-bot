import { ReactNode } from "react";
import ScaledSlide from "./ScaledSlide";

interface SlideLayoutProps {
  children: ReactNode;
  gradient?: boolean;
}

export default function SlideLayout({ children, gradient = false }: SlideLayoutProps) {
  return (
    <ScaledSlide>
      <div
        className={`w-full h-full p-20 flex flex-col ${
          gradient
            ? "bg-gradient-to-br from-[hsl(210,33%,97%)] to-[hsl(210,40%,93%)]"
            : "bg-[hsl(210,33%,97%)]"
        }`}
      >
        {children}
      </div>
    </ScaledSlide>
  );
}
