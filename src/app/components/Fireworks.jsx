"use client";

import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import dynamic from "next/dynamic";

const FireworksJS = dynamic(
  () => import("@fireworks-js/react").then((mod) => mod.Fireworks),
  {
    ssr: false,
    loading: () => null,
  }
);

const Fireworks = () => {
  const fireworksRef = useRef(null);
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");

    const checkMobile = () => {
      setIsMobile(mq.matches);
    };

    checkMobile();

    mq.addEventListener("change", checkMobile);

    const updateVisibility = () => {
      const pageScroll = Math.max(
        window.scrollY,
        window.pageYOffset,
        document.documentElement.scrollTop,
        document.body.scrollTop
      );

      if (fireworksRef.current) {
        fireworksRef.current.style.display =
          pageScroll === 0 ? "block" : "none";
      }
    };

    updateVisibility();

    window.addEventListener("scroll", updateVisibility, {
      passive: true,
    });

    document.addEventListener("scroll", updateVisibility, {
      passive: true,
    });

    window.visualViewport?.addEventListener(
      "scroll",
      updateVisibility,
      {
        passive: true,
      }
    );

    return () => {
      mq.removeEventListener("change", checkMobile);

      window.removeEventListener("scroll", updateVisibility);

      document.removeEventListener("scroll", updateVisibility);

      window.visualViewport?.removeEventListener(
        "scroll",
        updateVisibility
      );
    };
  }, []);

  if (typeof document === "undefined") return null;

  if (isMobile === null) return null;

  return createPortal(
    <div
      ref={fireworksRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,

        width: "100%",
        height: isMobile ? "110px" : "min(35vh, 400px)",

        margin: 0,
        padding: 0,

        pointerEvents: "none",
        zIndex: 999999,

        overflow: "hidden",

        transform: "translate3d(0, 0, 0)",
      }}
    >
      <FireworksJS
        options={{
          hue: {
            min: 30,
            max: 50,
          },

          particles: isMobile ? 20 : 80,

          explosion: isMobile ? 2.5 : 6,

          size: isMobile ? 0.4 : 1,

          traceLength: isMobile ? 2 : 3,

          traceSpeed: isMobile ? 4 : 10,

          intensity: isMobile ? 12 : 30,

          gravity: isMobile ? 1.5 : 1.5,

          acceleration: isMobile ? 1.01 : 1.02,

          // Slightly more gap between mobile fireworks
          delay: isMobile
            ? {
                min: 90,
                max: 130,
              }
            : {
                min: 40,
                max: 70,
              },
        }}
        style={{
          position: "absolute",

          top: 0,
          left: 0,

          width: "100%",
          height: "100%",

          margin: 0,
          padding: 0,

          pointerEvents: "none",
        }}
      />
    </div>,

    document.body
  );
};

export default Fireworks;