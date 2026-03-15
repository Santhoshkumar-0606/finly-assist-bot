import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, Grid3X3 } from "lucide-react";
import Slide1Hook from "@/components/slides/Slide1Hook";
import Slide2Problem from "@/components/slides/Slide2Problem";
import Slide3Solution from "@/components/slides/Slide3Solution";
import Slide4Technical from "@/components/slides/Slide4Technical";
import Slide5Implementation from "@/components/slides/Slide5Implementation";
import Slide6Feasibility from "@/components/slides/Slide6Feasibility";
import Slide7Team from "@/components/slides/Slide7Team";

const slides = [
  { component: Slide1Hook, title: "The Hook" },
  { component: Slide2Problem, title: "The Problem" },
  { component: Slide3Solution, title: "The Solution" },
  { component: Slide4Technical, title: "Technical Architecture" },
  { component: Slide5Implementation, title: "Implementation & Roadmap" },
  { component: Slide6Feasibility, title: "Feasibility & Impact" },
  { component: Slide7Team, title: "Team & Vision" },
];

export default function Index() {
  const [current, setCurrent] = useState(0);
  const [showGrid, setShowGrid] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const goTo = useCallback((i: number) => {
    setCurrent(Math.max(0, Math.min(slides.length - 1, i)));
    setShowGrid(false);
  }, []);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }, []);

  useEffect(() => {
    const handleFS = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", handleFS);
    return () => document.removeEventListener("fullscreenchange", handleFS);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); next(); }
      else if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
      else if (e.key === "Escape" && showGrid) { setShowGrid(false); }
      else if (e.key === "g" || e.key === "G") { setShowGrid((v) => !v); }
      else if (e.key === "F5") { e.preventDefault(); toggleFullscreen(); }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [next, prev, showGrid, toggleFullscreen]);

  const CurrentSlide = slides[current].component;

  return (
    <div className="h-screen w-screen flex flex-col bg-slide-navy overflow-hidden">
      {/* Toolbar */}
      {!isFullscreen && (
        <div className="h-14 flex items-center justify-between px-6 bg-foreground text-primary-foreground flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-slide-emerald" />
            <span className="text-sm font-semibold tracking-wide">FinAssist AI</span>
            <span className="text-xs text-slide-gray-500 ml-2">Blaze a Trail 3.0</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowGrid((v) => !v)}
              className="p-2 rounded-lg hover:bg-slide-gray-800 transition-colors"
              title="Grid view (G)"
            >
              <Grid3X3 className="w-4 h-4" />
            </button>
            <button
              onClick={toggleFullscreen}
              className="p-2 rounded-lg hover:bg-slide-gray-800 transition-colors"
              title="Fullscreen (F5)"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
            <span className="text-xs text-slide-gray-500 ml-3">
              {current + 1} / {slides.length}
            </span>
          </div>
        </div>
      )}

      {/* Main area */}
      <div className="flex-1 relative">
        <AnimatePresence mode="wait">
          {showGrid ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 overflow-auto p-8"
            >
              <div className="grid grid-cols-3 gap-6 max-w-[1400px] mx-auto">
                {slides.map((slide, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className={`relative aspect-video rounded-xl overflow-hidden border-2 transition-all hover:scale-[1.02] ${
                      i === current ? "border-slide-emerald shadow-lg" : "border-transparent"
                    }`}
                  >
                    <div className="absolute inset-0 bg-background">
                      <slide.component />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                      <span className="text-xs font-medium text-primary-foreground">
                        {i + 1}. {slide.title}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key={`slide-${current}`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="absolute inset-0"
            >
              <CurrentSlide />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation controls */}
        {!showGrid && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
            <button
              onClick={prev}
              disabled={current === 0}
              className="w-10 h-10 rounded-full bg-foreground/80 backdrop-blur flex items-center justify-center text-primary-foreground disabled:opacity-30 transition-opacity hover:bg-foreground"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === current ? "bg-slide-emerald w-6" : "bg-primary-foreground/40 hover:bg-primary-foreground/60"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              disabled={current === slides.length - 1}
              className="w-10 h-10 rounded-full bg-foreground/80 backdrop-blur flex items-center justify-center text-primary-foreground disabled:opacity-30 transition-opacity hover:bg-foreground"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>

      {/* Thumbnail strip */}
      {!isFullscreen && !showGrid && (
        <div className="h-20 bg-foreground flex items-center gap-2 px-4 overflow-x-auto flex-shrink-0">
          {slides.map((slide, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`relative h-14 aspect-video rounded-md overflow-hidden flex-shrink-0 border-2 transition-all ${
                i === current ? "border-slide-emerald" : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <div className="absolute inset-0 bg-background scale-[0.99]">
                <div className="w-[1920px] h-[1080px] origin-top-left" style={{ transform: `scale(${14 * (16/9) / 1920})` }}>
                  <div className="slide-content w-[1920px] h-[1080px]">
                    <slide.component />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 px-1">
                <span className="text-[8px] text-primary-foreground font-medium">{i + 1}</span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
