"use client";

import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import dynamic from "next/dynamic";

const FireworksJS = dynamic(
  () => import("@fireworks-js/react").then((mod) => mod.Fireworks),
  { ssr: false, loading: () => null }
);

const Fireworks = () => {
  const fireworksRef = useRef(null);
  const [isMobile, setIsMobile] = useState(null); // null = not detected yet

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    const checkMobile = () => setIsMobile(mq.matches);
    checkMobile();
    mq.addEventListener("change", checkMobile);

    const updateVisibility = () => {
      const pageScroll = Math.max(
        window.scrollY,
        window.pageYOffset,
        document.documentElement.scrollTop,
        document.body.scrollTop,
      );

      if (fireworksRef.current) {
        fireworksRef.current.style.display = pageScroll === 0 ? "block" : "none";
      }
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    document.addEventListener("scroll", updateVisibility, { passive: true });
    window.visualViewport?.addEventListener("scroll", updateVisibility, {
      passive: true,
    });

    return () => {
      mq.removeEventListener("change", checkMobile);
      window.removeEventListener("scroll", updateVisibility);
      document.removeEventListener("scroll", updateVisibility);
      window.visualViewport?.removeEventListener("scroll", updateVisibility);
    };
  }, []);

  if (typeof document === "undefined") return null;
  if (isMobile === null) return null;

  return createPortal(
    <div
      ref={fireworksRef}
      style={{
        position: "fixed",
        inset: "0 0 auto 0",
        width: "100vw",
        height: isMobile ? "110px" : "min(35vh, 400px)",
        pointerEvents: "none",
        zIndex: 999999,
        overflow: "hidden",
      }}
    >
      <FireworksJS
        options={{
          hue: { min: 30, max: 50 },
          particles: isMobile ? 18 : 80,
          explosion: isMobile ? 2 : 6,
          size: isMobile ? 0.35 : 1,
          traceLength: isMobile ? 1 : 3,
          gravity: isMobile ? 2 : 1.5,
          speed: isMobile ? 0.5 : 1,
          acceleration: isMobile ? 1.01 : 1.02,
          delay: isMobile ? { min: 60, max: 90 } : { min: 40, max: 70 },
        }}
        style={{
          width: "100%",
          height: "100%",
          position: "fixed",
          inset: "0 0 auto 0",
          pointerEvents: "none",
        }}
      />
    </div>,
    document.body
  );
};

export default Fireworks;