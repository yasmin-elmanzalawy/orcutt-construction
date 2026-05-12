"use client";

import { motion } from "framer-motion";

export default function FounderSection() {
  return (
    <section className="w-full bg-[#1C1C1C] py-28 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-14 items-center">
          
          {/* IMAGE SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* soft glow */}
            <div className="absolute -inset-8 bg-white/5 blur-3xl rounded-3xl" />

            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="images/connor.webp"
                alt="Connor Orcutt"
                className="w-full h-[520px] object-cover"
              />
            </div>
          </motion.div>

          {/* TEXT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-gray-400 uppercase tracking-widest text-sm cairo">
              Meet the Founder
            </p>

            <h3 className="text-4xl md:text-5xl font-light text-white russo">
              Connor Orcutt
            </h3>

            <p className="text-gray-300 text-lg cairo">
              Founder / Project Manager
            </p>

            <p className="text-gray-400 leading-relaxed text-lg cairo">
              Connor leads every project with precision, transparency, and a
              strong focus on quality execution. With a background in
              construction management and hands-on project delivery, he ensures
              every detail is handled from start to finish.
            </p>

            <div className="pt-6">
              <div className="w-16 h-[2px] bg-white/20 mb-5" />

              <p className="text-gray-500 italic">
                “Build it right. Build it once.”
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}