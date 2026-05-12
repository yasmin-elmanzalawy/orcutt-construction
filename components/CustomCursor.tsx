"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <>
      {/* SMALL DOT */}
      <div
        className="fixed top-0 left-0 z-[9999] h-2 w-2 pointer-events-none rounded-full bg-black"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
        }}
      />

      {/* BIG SMOOTH CIRCLE */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] h-8 w-8 pointer-events-none rounded-full border border-black/40"
        animate={{
          x: position.x - 16,
          y: position.y - 16,
        }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 20,
          mass: 0.5,
        }}
      />
    </>
  );
}