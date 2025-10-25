import { useEffect, useRef } from "react";

interface TickerProps {
  text: string;
  speed?: number; // pixels per second
}

export default function Ticker({ text, speed = 80 }: TickerProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const content = `${text} \u00A0 \u25CF \u00A0 ${text} \u00A0 \u25CF \u00A0 ${text}`;

  useEffect(() => {
    const track = trackRef.current;
    const contentEl = contentRef.current;
    if (!track || !contentEl) return;

    function updateDuration() {
      const contentWidth = contentEl ? contentEl.getBoundingClientRect().width / 2 : 0; // because duplicated
      // duration in seconds = width / speed (px/s)
      const durationSec = contentWidth / speed;
      // minimum duration guard
      const final = Math.max(durationSec, 6);
      track?.style.setProperty("--ticker-duration", `${final}s`);
    }

    updateDuration();
    // Update on resize for responsiveness
    window.addEventListener("resize", updateDuration);
    return () => window.removeEventListener("resize", updateDuration);
  }, [text, speed]);

  return (
    <div className="overflow-hidden whitespace-nowrap w-full" aria-label="Announcements ticker" role="status">
      <div className="ticker-track" ref={trackRef}>
        <div className="inline-block ticker-content px-4" ref={contentRef}>
          {content}
        </div>
      </div>
    </div>
  );
}
