"use client";

import { motion } from "framer-motion";

export default function WhatWeDo() {
  return (
    <section className="relative w-full bg-[#dcdcdc] py-16  px-6 md:px-12 overflow-hidden flex items-center justify-center">

      {/* soft background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-[#dcdcdc] to-[#dcdcdc]" />

      <div className="relative w-full max-w-5xl mx-auto">

        {/* ================= TITLE ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-6xl font-light tracking-wide text-[#1C1C1C] russo ">
            What We Do
          </h2>

          <p className="mt-6 text-gray-600 max-w-xl mx-auto text-base md:text-lg leading-relaxed">
            We create value through thoughtful investment, design, and transformation of real estate.
          </p>
        </motion.div>

        {/* ================= CARDS ================= */}
        <div className="grid md:grid-cols-2 gap-8 cairo">

          {/* CARD 1 */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group relative bg-white/70 backdrop-blur-xl border border-black/5 rounded-3xl p-10 shadow-sm hover:shadow-2xl transition-all duration-300"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-black text-white mb-6 group-hover:scale-110 transition">
              ▲
            </div>

           

            <p className="text-gray-600 leading-relaxed">
              We buy, renovate, and transform homes - bringing new life to every property we sell.
            </p>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group relative bg-white/70 backdrop-blur-xl border border-black/5 rounded-3xl p-10 shadow-sm hover:shadow-2xl transition-all duration-300"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-black text-white mb-6 group-hover:scale-110 transition">
              +
            </div>


            <p className="text-gray-600 leading-relaxed">
              We invest in land to build brand-new homes from the ground up.
            </p>
          </motion.div>
        </div>

        {/* ================= CTA ================= */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="text-center mt-12"
>
  <a
    href="#contact"
    className="
      group relative inline-flex items-center justify-center
      overflow-hidden
      rounded-full
      border-2 border-[#1C1C1C]
      px-10 py-4
      bg-[#1C1C1C]
      transition-all duration-50
      text-white
      active:scale-95
    "
  >
    {/* expanding circle */}
    <span
      className="
        absolute left-1/2 top-1/2
        h-5 w-5
        -translate-x-1/2 -translate-y-1/2
        rounded-full bg-black
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
        z-10 h-5 w-5 fill-black
        transition-all duration-700
        group-hover:left-4
        group-hover:fill-white
      "
    >
      <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
    </svg>

    {/* text (keeps your Cairo font) */}
    <span className="relative z-10 text-sm tracking-[0.2em] uppercase transition-all duration-700 group-hover:translate-x-2 group-hover:text-white">
      Schedule a Consultation
    </span>

    {/* right arrow */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="
        absolute right-4
        z-10 h-5 w-5 fill-white
        transition-all duration-700
        group-hover:right-[-25%]
        group-hover:fill-white
      "
    >
      <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
    </svg>
  </a>
</motion.div>


      </div>
    </section>
  );
}