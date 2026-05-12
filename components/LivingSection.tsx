"use client";

import { motion } from "framer-motion";

export default function LivingSection() {
  return (
    <>
      {/* ================= DIVIDER (TOP OF SECTION) ================= */}
      <div className="relative w-full overflow-hidden leading-none ">
        <svg
          className="block w-full h-[60px] bg-[#1C1C1C]  -mb-[1px]"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {/* pointer UP */}
          <path d="M50 0 L0 100 L100 100 Z" fill="#DCDCDC" />
        </svg>
      </div>

      {/* ================= SECTION ================= */}
      <section className="w-full bg-[#DCDCDC] py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">

          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* ================= IMAGE ================= */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="rounded-2xl overflow-hidden bg-gray-200 h-[420px] md:h-[500px]">
                <img
                  src="/images/1.webp"
                  alt="home"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* ================= TEXT ================= */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-light text-black leading-tight russo">
                Designed for Living. <br />
                Built for Coming Home.
              </h2>

              <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-lg cairo">
                We will buy your house. We can close in as little as 7 days based
                just on photos. No inspections, appraisals, or contingencies.
              </p>

              {/* ================= CTA BUTTON (REPLACED) ================= */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
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
                    transition-all duration-300
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

                  {/* text */}
                  <span className="relative z-10 text-sm tracking-[0.2em] uppercase transition-all duration-700 group-hover:translate-x-2 group-hover:text-white">
                    Sell My Home or Land
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

            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}