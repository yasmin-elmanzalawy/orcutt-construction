"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

const links = [
  { name: "Home", href: "/" },
  { name: "Past Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms", href: "/terms" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const { scrollY } = useScroll();

  const height = useTransform(scrollY, [0, 120], [92, 72]);
  const background = useTransform(
    scrollY,
    [0, 120],
    ["rgba(10,10,10,0.85)", "rgba(10,10,10,0.78)"]
  );

  return (
    <>
      {/* ================= HEADER ================= */}
      <motion.header
        style={{ height, background }}
        className="fixed top-0 left-0 w-full z-50 border-b border-white/10 backdrop-blur-2xl"
      >
        <div className="max-w-7xl mx-auto px-5 h-full flex items-center justify-between">

          {/* ================= LOGO ================= */}
          <motion.a
            href="/"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-[150px] h-[44px] flex items-center"
          >
            <Image
              src="/images/whitelogo.webp"
              alt="Orcutt Construction"
              fill
              priority
              className="object-contain"
            />
          </motion.a>

          {/* ================= DESKTOP NAV ================= */}
          <nav className="hidden md:flex items-center gap-10 text-sm text-[#DCDCDC] cairo">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative group tracking-wide"
              >
                <span className="group-hover:text-white transition duration-300">
                  {link.name}
                </span>

                <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* ================= MOBILE BUTTON (IMPROVED) ================= */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
          >
            <span className="absolute w-6 h-[2px] bg-white -translate-y-[6px]"></span>
            <span className="absolute w-4 h-[2px] bg-white translate-y-[0px]"></span>
            <span className="absolute w-6 h-[2px] bg-white translate-y-[6px]"></span>
          </button>
        </div>
      </motion.header>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex flex-col items-center justify-center"
          >
            {/* BACKDROP */}
            <div className="absolute inset-0 bg-black/90 backdrop-blur-2xl" />

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-8 right-6 text-white/60 text-4xl hover:text-white transition"
            >
              ×
            </button>

            {/* MENU */}
            <div className="relative flex flex-col items-center gap-8">
              {links.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: i * 0.08,
                    duration: 0.5,
                  }}
                  className="text-white text-3xl font-light tracking-[0.12em] relative group"
                >
                  {link.name}

                  {/* underline animation */}
                  <span className="absolute left-0 -bottom-2 h-[1px] w-0 bg-white/70 group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </div>

            {/* subtle bottom glow */}
            <div className="absolute bottom-0 w-full h-[120px] bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}