"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

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

  const height = useTransform(scrollY, [0, 120], [95, 72]);

  const background = useTransform(
    scrollY,
    [0, 120],
    ["rgba(10,10,10,0.05)", "rgba(10,10,10,0.78)"]
  );

  return (
    <>
      <motion.header
        style={{ height, background }}
        className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl border-b border-white/10"
      >
        <div className="max-w-[1600px] mx-auto px-6 h-full flex items-center justify-between">

          {/* LEFT SIDE */}
          <div className="flex items-center gap-16">

            {/* Logo */}
            <a
              href="/"
              className="relative w-[150px] h-[55px] shrink-0"
            >
              <Image
                src="/images/logo.webp"
                alt="Orcutt Construction"
                fill
                priority
                className="object-contain"
              />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-10 text-[14px] text-white/65">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative group overflow-hidden tracking-wide"
                >
                  <span className="group-hover:text-white transition duration-300">
                    {link.name}
                  </span>

                  <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">

            {/* SOCIALS */}
            <ul className="hidden md:flex items-center gap-3">

              {/* LINKEDIN */}
              <li className="icon-content">
                <a
                  data-social="linkedin"
                  aria-label="LinkedIn"
                  href="#"
                >
                  <div className="filled"></div>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M4.98 3.5C4.98 4.604 4.104 5.5 3 5.5S1.02 4.604 1.02 3.5 1.896 1.5 3 1.5s1.98.896 1.98 2zM1.5 8h3V22h-3V8zm7 0h2.877v1.91h.041C11.82 8.828 13.38 7.5 15.8 7.5 20 7.5 21 10.09 21 14.02V22h-3v-6.61c0-1.577-.028-3.607-2.198-3.607-2.2 0-2.537 1.719-2.537 3.493V22h-3V8z" />
                  </svg>
                </a>

                <div className="tooltip">LinkedIn</div>
              </li>

              {/* FACEBOOK */}
              <li className="icon-content">
                <a
                  data-social="facebook"
                  aria-label="Facebook"
                  href="#"
                >
                  <div className="filled"></div>

                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z" />
                  </svg>
                </a>

                <div className="tooltip">Facebook</div>
              </li>

              {/* INSTAGRAM */}
              <li className="icon-content">
                <a
                  data-social="instagram"
                  aria-label="Instagram"
                  href="#"
                >
                  <div className="filled"></div>

                  <svg
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0z" />
                  </svg>
                </a>

                <div className="tooltip">Instagram</div>
              </li>
            </ul>

            {/* MOBILE MENU */}
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden flex flex-col gap-[5px] ml-2"
            >
              <span className="w-7 h-[1.5px] bg-white"></span>
              <span className="w-5 h-[1.5px] bg-white self-end"></span>
            </button>
          </div>
        </div>
      </motion.header>

      {/* MOBILE MENU */}
      {open && (
        <div className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-2xl flex flex-col justify-center items-center">

          <button
            onClick={() => setOpen(false)}
            className="absolute top-8 right-8 text-white/60 text-4xl"
          >
            ×
          </button>

          <div className="flex flex-col items-center gap-8">
            {links.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.4,
                }}
                onClick={() => setOpen(false)}
                className="text-white text-3xl font-light tracking-wide"
              >
                {link.name}
              </motion.a>
            ))}
          </div>
        </div>
      )}

      <style jsx>{`
        .icon-content {
          position: relative;
        }

        .tooltip {
          position: absolute;
          top: -38px;
          left: 50%;
          transform: translateX(-50%);
          color: #fff;
          padding: 6px 10px;
          border-radius: 6px;
          opacity: 0;
          visibility: hidden;
          font-size: 12px;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .icon-content:hover .tooltip {
          opacity: 1;
          visibility: visible;
          top: -48px;
        }

        .icon-content a {
          position: relative;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 42px;
          height: 42px;
          border-radius: 999px;
          color: #ffffff;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.08);
          transition: all 0.3s ease-in-out;
          backdrop-filter: blur(10px);
        }

        .icon-content a:hover {
          transform: translateY(-2px);
        }

        .icon-content a svg {
          position: relative;
          z-index: 2;
          width: 18px;
          height: 18px;
        }

        .filled {
          position: absolute;
          inset: auto 0 0 0;
          width: 100%;
          height: 0;
          transition: all 0.3s ease-in-out;
          z-index: 1;
        }

        .icon-content a:hover .filled {
          height: 100%;
        }

        .icon-content a[data-social="linkedin"] .filled,
        .icon-content a[data-social="linkedin"] ~ .tooltip {
          background: #0077b5;
        }

        .icon-content a[data-social="facebook"] .filled,
        .icon-content a[data-social="facebook"] ~ .tooltip {
          background: #1877f2;
        }

        .icon-content a[data-social="instagram"] .filled,
        .icon-content a[data-social="instagram"] ~ .tooltip {
          background: linear-gradient(
            45deg,
            #405de6,
            #5b51db,
            #b33ab4,
            #c135b4,
            #e1306c,
            #fd1f1f
          );
        }
      `}</style>
    </>
  );
}