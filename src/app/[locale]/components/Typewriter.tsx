"use client";
import { useEffect, useState } from "react";

interface TypewriterProps {
  text: string;
  speed?: number;
  startDelay?: number;
}

// Types `text` one character at a time. An invisible copy reserves the final
// size (no layout shift) and screen readers get the full text at once.
export const Typewriter = ({
  text,
  speed = 55,
  startDelay = 300,
}: TypewriterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(text.length);
      return;
    }
    setCount(0);
    let i = 0;
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      i += 1;
      setCount(i);
      if (i < text.length) timer = setTimeout(tick, speed);
    };
    timer = setTimeout(tick, startDelay);
    return () => clearTimeout(timer);
  }, [text, speed, startDelay]);

  return (
    <span className="inline-grid">
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="invisible col-start-1 row-start-1">
        {text}
      </span>
      <span aria-hidden="true" className="col-start-1 row-start-1">
        {text.slice(0, count)}
        <span className="typing-caret inline-block w-[2px] h-[1.1em] ml-0.5 align-[-0.2em] bg-accent" />
      </span>
    </span>
  );
};
