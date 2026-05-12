"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const slides = [
  { image: "/images/1.webp" },
  { image: "/images/2.webp" },
  { image: "/images/3.webp" },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative isolate h-screen w-full overflow-hidden bg-[#DCDCDC]">
      {/* ===== IMAGES ===== */}
      {slides.map((slide, i) => (
        <motion.div
          key={i}
          className="absolute inset-0"
          animate={{
            opacity: i === index ? 1 : 0,
            scale: i === index ? 1 : 1.08,
          }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          style={{ zIndex: i === index ? 2 : 1 }}
        >
          <Image
            src={slide.image}
            alt="hero"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      ))}

      {/* ===== CONTENT ===== */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center">

        {/* TITLE (UNCHANGED FONTS) */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-white text-3xl md:text-6xl font-light leading-tight max-w-3xl cairo"
        >
          Designed for Living.<br />
          <span className="font-semibold russo">Built for Coming Home.</span>
        </motion.h1>

        {/* ===== NEW BUTTON STYLE ONLY ===== */}
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={mounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
          href="#contact"
          className="
            group relative mt-10
            inline-flex items-center justify-center
            overflow-hidden
            rounded-full
            border-2 border-white
            px-10 py-4
            text-white
            transition-all duration-500
            active:scale-95
            bg-black/40
            "
        >
          {/* expanding circle */}
          <span
            className="
              absolute left-1/2 top-1/2
              h-5 w-5
              -translate-x-1/2 -translate-y-1/2
              rounded-full bg-white
              opacity-0
              transition-all duration-700
              group-hover:h-[100%]
              group-hover:w-[100%]
              group-hover:opacity-100
            "
          />

          {/* left arrow */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="
              absolute left-[-25%]
              z-10 h-6 w-6 fill-white
              transition-all duration-700
              group-hover:left-4
              group-hover:fill-[#1C1C1C]
            "
          >
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
          </svg>

          {/* text (NO FONT CHANGE) */}
          <span className="relative z-10 text-sm tracking-[0.2em] transition-all duration-700 group-hover:translate-x-2 group-hover:text-black">
            GIVE US A CALL
          </span>

          {/* right arrow */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="
              absolute right-4
              z-10 h-6 w-6 fill-white
              transition-all duration-700
              group-hover:right-[-25%]
              group-hover:fill-black
            "
          >
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
          </svg>
        </motion.a>
      </div>

      {/* ===== DOTS ===== */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`
              transition-all duration-300 rounded-full
              ${i === index ? "w-8 h-2 bg-white" : "w-2 h-2 bg-white/40"}
            `}
          />
        ))}
      </div>
    </div>
  );
}