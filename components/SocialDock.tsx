"use client";

import { useEffect, useState } from "react";

export default function SocialDock() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <div className={`social-dock ${mounted ? "show" : ""}`}>

        {/* LinkedIn */}
        <a href="#" data-social="linkedin" aria-label="LinkedIn">
          <div className="filled"></div>
          <svg viewBox="0 0 16 16" fill="currentColor">
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zM4.943 12.248V6.169H2.542v6.079zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 2.079 2.4 2.788c0 .694.521 1.248 1.327 1.248zM13.5 12.248v-3.2c0-2.03-1.083-2.974-2.526-2.974-1.162 0-1.683.64-1.973 1.088v-0.933H6.6c.03.617 0 6.079 0 6.079h2.401V8.9c0-.18.013-.36.066-.489.144-.36.474-.733 1.026-.733.724 0 1.014.553 1.014 1.365v3.205z"/>
          </svg>
        </a>

        {/* Instagram (unchanged icon) */}
        <a href="#" data-social="instagram" aria-label="Instagram">
          <div className="filled"></div>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.65 0 3 1.35 3 3v10c0 1.65-1.35 3-3 3H7c-1.65 0-3-1.35-3-3V7c0-1.65 1.35-3 3-3h10zm-5 3.5A5.5 5.5 0 1 0 17.5 13 5.51 5.51 0 0 0 12 7.5zm0 2A3.5 3.5 0 1 1 8.5 13 3.5 3.5 0 0 1 12 9.5zM18 6.8a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
          </svg>
        </a>

        {/* Facebook */}
        <a href="#" data-social="facebook" aria-label="Facebook">
          <div className="filled"></div>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
          </svg>
        </a>

      </div>

      <style jsx>{`
        .social-dock {
          position: fixed;
          right: 20px;
          bottom: 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          z-index: 49;
        }

        /* ENTRY ANIMATION (stagger from right) */
        .social-dock a {
          position: relative;
          width: 48px;
          height: 48px;
          border-radius: 14px;

          display: flex;
          align-items: center;
          justify-content: center;

          background: rgba(255,255,255,0.9);
          backdrop-filter: blur(10px);

          overflow: hidden;

          transform: translateX(80px);
          opacity: 0;

          transition: transform 0.6s ease, opacity 0.6s ease, box-shadow 0.3s ease;
        }

        .social-dock.show a {
          transform: translateX(0);
          opacity: 1;
        }

.social-dock.show a:nth-child(1) { transition-delay: 0.25s; }
.social-dock.show a:nth-child(2) { transition-delay: 0.15s; }
.social-dock.show a:nth-child(3) { transition-delay: 0.05s; }

        .social-dock a svg {
          width: 20px;
          height: 20px;
          z-index: 2;
          color: #222;
        }

        .social-dock a:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }

        .filled {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 0%;
          transition: 0.3s ease;
          z-index: 1;
        }

        .social-dock a:hover .filled {
          height: 100%;
        }

        .social-dock a:hover svg {
          color: white;
        }

        a[data-social="linkedin"] .filled {
          background: #0274b3;
        }

        a[data-social="instagram"] .filled {
          background: linear-gradient(45deg,#405de6,#833ab4,#e1306c,#fd1f1f);
        }

        a[data-social="facebook"] .filled {
          background: #3C5998;
        }
      `}</style>
    </>
  );
}   