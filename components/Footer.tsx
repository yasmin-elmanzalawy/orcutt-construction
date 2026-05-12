"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="w-full bg-[#1C1C1C] text-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        
        {/* TOP GRID */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-light russo">
              Contact Us
            </h2>

            <div className="text-gray-400 space-y-2 text-lg cairo">
              <p className="hover:text-white transition">
                (585) 831-9388
              </p>

              <p className="hover:text-white transition cairo">
                connor@orcuttconstructionllc.com
              </p>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex md:justify-end items-end"
          >
            <p className="text-gray-500 text-sm md:text-right max-w-sm leading-relaxed cairo">
              Dedicated to delivering high-quality construction services with
              transparency, trust, and precision from start to finish.
            </p>
          </motion.div>
        </div>

        {/* DIVIDER */}
        <div className="w-full h-[1px] bg-white/10 my-10 " />

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 cairo">
          
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} 2026 Created by Yasmin Elmanzalawy
          </p>

          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>

            <span className="text-gray-600">|</span>

            <a href="#" className="hover:text-white transition">
              Terms and Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}