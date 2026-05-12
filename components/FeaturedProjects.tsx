"use client";

import { useEffect, useState } from "react";

type FeaturedProjectsProps = {
  title?: string;
  description?: string;
};

const images = [
  "/featured/1.webp",
  "/featured/2.webp",
  "/featured/3.webp",
];

export default function FeaturedProjects({
  title = "Featured Projects",
  description = "",
}: FeaturedProjectsProps) {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // ================= AUTO PLAY =================
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full russo">
      {/* ================= DIVIDER ================= */}
      <div className="relative w-full overflow-hidden leading-none bg-[#1C1C1C] ">
        <svg
          className="block w-full h-[60px]"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path d="M50 0 L0 100 L100 100 Z" fill="#1C1C1C" />
        </svg>
      </div>

      {/* ================= SECTION ================= */}
      <section className="w-full bg-[#1C1C1C] py-20 px-6 md:px-12 text-white">
        <div className="max-w-6xl mx-auto">

          {/* TITLE */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-light tracking-wide">
              {title}
            </h2>

            <p className="mt-5 text-white/60 max-w-xl mx-auto">
              {description}
            </p>
          </div>

          {/* ================= CAROUSEL ================= */}
          <div className="relative overflow-hidden">

            <div
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >

              {images.map((src, i) => (
                <div key={i} className="min-w-full flex justify-center">
                  <div className="w-[90%] h-[80%] rounded-2xl overflow-hidden bg-gray-800">
                    <img
                      src={src}
                      className="w-full h-full object-cover"
                      alt={`slide-${i}`}
                    />
                  </div>
                </div>
              ))}

            </div>

            {/* ================= DOTS ================= */}
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === index ? "bg-white scale-110" : "bg-white/40"
                  }`}
                />
              ))}
            </div>

            {/* ================= PREV ================= */}
            <button
              onClick={prev}
              className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-2"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-black/30 hover:bg-black/50 transition">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </div>
            </button>

            {/* ================= NEXT ================= */}
            <button
              onClick={next}
              className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-2"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-black/30 hover:bg-black/50 transition">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>

          </div>

        </div>
      </section>
    </section>
  );
}