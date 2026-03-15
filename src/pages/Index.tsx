import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import Slide1Hook from "@/components/slides/Slide1Hook";
import Slide2Problem from "@/components/slides/Slide2Problem";
import Slide3Solution from "@/components/slides/Slide3Solution";
import Slide4Technical from "@/components/slides/Slide4Technical";
import Slide5Implementation from "@/components/slides/Slide5Implementation";
import Slide6Feasibility from "@/components/slides/Slide6Feasibility";
import Slide7Team from "@/components/slides/Slide7Team";

const slides = [
  { component: Slide1Hook, title: "Blaze a Trail 3.0" },
  { component: Slide2Problem, title: "Idea Title" },
  { component: Slide3Solution, title: "Solution Details" },
  { component: Slide4Technical, title: "Technical Approach" },
  { component: Slide5Implementation, title: "Feasibility & Viability" },
  { component: Slide6Feasibility, title: "Impact & Benefits" },
  { component: Slide7Team, title: "References & Team" },
];

export default function Index() {
  const [current, setCurrent] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const goTo = useCallback((i: number) => {
    setCurrent(Math.max(0, Math.min(slides.length - 1, i)));
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
      else if (e.key === "F5") { e.preventDefault(); toggleFullscreen(); }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [next, prev, toggleFullscreen]);

  const CurrentSlide = slides[current].component;

  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden" style={{ background: "#1a1a2e" }}>
      {/* Toolbar */}
      {!isFullscreen && (
        <div className="h-12 flex items-center justify-between px-6 flex-shrink-0" style={{ background: "#16213e" }}>
          <span style={{ color: "#ffffff", fontSize: 14, fontWeight: 600 }}>
            FinAssist AI — Blaze a Trail 3.0
          </span>
          <div className="flex items-center gap-4">
            <button
              onClick={toggleFullscreen}
              className="p-2 rounded hover:opacity-80 transition-opacity"
            >
              <Maximize2 className="w-4 h-4" style={{ color: "#ffffff" }} />
            </button>
            <span style={{ color: "#aaa", fontSize: 13 }}>
              {current + 1} / {slides.length}
            </span>
          </div>
        </div>
      )}

      {/* Main slide area */}
      <div className="flex-1 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={`slide-${current}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0"
          >
            <CurrentSlide />
          </motion.div>
        </AnimatePresence>

        {/* Nav controls */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
          <button
            onClick={prev}
            disabled={current === 0}
            className="w-9 h-9 rounded-full flex items-center justify-center disabled:opacity-20 transition-opacity"
            style={{ background: "rgba(0,0,0,0.6)" }}
          >
            <ChevronLeft className="w-5 h-5" style={{ color: "#fff" }} />
          </button>

          <div className="flex gap-1.5">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="w-2 h-2 rounded-full transition-all"
                style={{
                  background: i === current ? "#2874A6" : "rgba(255,255,255,0.3)",
                  width: i === current ? 20 : 8,
                }}
              />
            ))}
          </div>

          <button
            onClick={next}
            disabled={current === slides.length - 1}
            className="w-9 h-9 rounded-full flex items-center justify-center disabled:opacity-20 transition-opacity"
            style={{ background: "rgba(0,0,0,0.6)" }}
          >
            <ChevronRight className="w-5 h-5" style={{ color: "#fff" }} />
          </button>
        </div>
      </div>

      {/* Thumbnail strip */}
      {!isFullscreen && (
        <div className="h-16 flex items-center gap-2 px-3 overflow-x-auto flex-shrink-0" style={{ background: "#16213e" }}>
          {slides.map((slide, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="relative h-11 aspect-video rounded overflow-hidden flex-shrink-0 transition-all"
              style={{
                border: i === current ? "2px solid #2874A6" : "2px solid transparent",
                opacity: i === current ? 1 : 0.5,
              }}
            >
              <div className="absolute inset-0" style={{ background: "#fff" }}>
                <div
                  className="w-[1920px] h-[1080px] origin-top-left"
                  style={{ transform: `scale(${(11 * 16 / 9) / 1920})` }}
                >
                  <slide.component />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 px-1" style={{ background: "rgba(0,0,0,0.5)" }}>
                <span style={{ fontSize: 7, color: "#fff", fontWeight: 600 }}>{i + 1}</span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
