"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Connor is honest, reliable, and well organized, making the entire process as smooth as possible. If you're looking for a contractor who's trustworthy, efficient, and easy to work with, I highly recommend Connor Orcutt.",
    name: "Molsey Lare",
  },
  {
    quote:
      "The work was very good quality, the communication was excellent. He was available after hours when we had questions or needs that came up. We don't normally see that from other contractors.",
    name: "Tip Luliucci",
  },
  {
    quote:
      "Honest, timely, reliable. As a house flipper I entrusted Orcutt construction to handle everything, start to finish. Nothing but compliments on the quality of work.",
    name: "Brian Pinder",
  },
  {
    quote:
      "Connor and his team were super easy to work with. They came through on everything they said they would do!",
    name: "Grant Upchurch",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () =>
    setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));

  return (
    <>
      {/* ================= DIVIDER ================= */}
      <div className="relative w-full bg-[#DCDCDC] overflow-hidden">
        <svg
          className="block w-full h-[80px]"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0 100 L50 10 L100 100"
            fill="none"
            stroke="#1C1C1C"
            strokeWidth="4"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>

      {/* ================= SECTION ================= */}
      <section className="w-full bg-[#DCDCDC] py-8 px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* TITLE */}
          <h2 className="text-4xl md:text-6xl font-light text-black russo">
            What Clients Say
          </h2>

          <p className="mt-5 text-gray-600 cairo mb-3">
            Real feedback from real clients
          </p>

          {/* ================= CAROUSEL ================= */}
          <div className="relative flex items-center justify-center min-h-[360px] cairo">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.96 }}
                transition={{ duration: 0.5 }}
                className="
                  w-full max-w-2xl
                  bg-white
                  rounded-[28px]
                  p-10 md:p-12
                  shadow-xl
                  relative
                "
              >
                <Quote className="mx-auto mb-6 opacity-30" size={32} />

                <p className="text-gray-700 text-lg leading-relaxed">
                  “{testimonials[index].quote}”
                </p>

                <div className="mt-8 font-medium text-black">
                  {testimonials[index].name}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* LEFT BUTTON */}
            <button
              onClick={prev}
              className="
                absolute left-0 md:-left-12
                bg-white shadow-md rounded-full p-3
                hover:scale-105 transition
              "
            >
              <ChevronLeft />
            </button>

            {/* RIGHT BUTTON */}
            <button
              onClick={next}
              className="
                absolute right-0 md:-right-12
                bg-white shadow-md rounded-full p-3
                hover:scale-105 transition
              "
            >
              <ChevronRight />
            </button>
          </div>

          {/* DOTS */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-8 bg-black" : "w-2 bg-black/30"
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}