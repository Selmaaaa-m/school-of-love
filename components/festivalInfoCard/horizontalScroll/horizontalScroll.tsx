"use client"
import { useEffect, useRef, ReactNode } from "react";
import { HorizontalScrollProps } from "./types";

const HorizontalScroll: React.FC<HorizontalScrollProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollTop, offsetHeight } = document.documentElement;
      if (scrollTop <= container.scrollWidth - offsetHeight) {
        container.scrollLeft = scrollTop;
        document.documentElement.scrollTop = 0;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="horizontal-scroll-container overflow-x-scroll whitespace-nowrap h-screen">
      <div className="flex">
        {children}
      </div>
    </div>
  );
};

export default HorizontalScroll;