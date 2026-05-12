"use client";

export default function Loader() {
  return (
    <>
      <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black overflow-hidden px-4">

        {/* ================= CUBES ================= */}
        <div className="relative flex items-center justify-center w-[180px] h-[180px]">

          {/* Small Cube */}
          <div className="spinner">
            <div></div><div></div><div></div>
            <div></div><div></div><div></div>
          </div>

          {/* Large Cube */}
          <div className="spinner2">
            <div></div><div></div><div></div>
            <div></div><div></div><div></div>
          </div>

        </div>

        {/* ================= TEXT ================= */}
        <div className="loading-text mb-[24px] font-russo text-center">

          {/* Small Text */}
          <div className="small-text">
            {"WELCOME TO".split("").map((char, i) => (
              <span key={i} style={{ animationDelay: `${i * 0.05}s` }}>
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </div>

          {/* Big Text */}
          <div className="big-text">

            <div className="line">
              {"ORCUTT".split("").map((char, i) => (
                <span key={i} style={{ animationDelay: `${0.4 + i * 0.05}s` }}>
                  {char}
                </span>
              ))}
            </div>

            <div className="line">
              {"CONSTRUCTION".split("").map((char, i) => (
                <span key={i} style={{ animationDelay: `${0.8 + i * 0.05}s` }}>
                  {char}
                </span>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* ================= STYLES ================= */}
      <style jsx>{`
        .loading-text {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: white;
          text-transform: uppercase;
        }

        /* ================= TEXT RESPONSIVE ================= */

        .big-text {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 14px;
          font-weight: 900;
          letter-spacing: 0.08em;
          line-height: 0.95;
        }

        .line {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 4px;
        }

        .big-text .line:first-child {
          font-size: clamp(36px, 6vw, 60px);
        }

        .big-text .line:last-child {
          font-size: clamp(16px, 2.6vw, 26px);
        }

        .small-text {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 2px;
          font-size: clamp(10px, 1.5vw, 14px);
          letter-spacing: 0.5em;
          opacity: 0.7;
        }

        .small-text span,
        .big-text span {
          opacity: 0;
          transform: translateY(20px);
          animation: textReveal 0.6s forwards ease;
        }

        @keyframes textReveal {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0px);
          }
        }

        /* ================= CUBES (BIGGER + CLEAN 3D) ================= */

        .spinner {
          width: 32px;
          height: 32px;
          animation: spinner-y0fdc1 15s infinite ease;
          position: absolute;
          transform-style: preserve-3d;
        }

        .spinner > div {
          height: 100%;
          width: 100%;
          position: absolute;
          border: 1px solid #f8c828;
        }

        /* depth = 16px */
        .spinner div:nth-of-type(1) {
          transform: translateZ(-16px) rotateY(180deg);
        }
        .spinner div:nth-of-type(2) {
          transform: rotateY(-270deg) translateX(50%);
          transform-origin: top right;
        }
        .spinner div:nth-of-type(3) {
          transform: rotateY(270deg) translateX(-50%);
          transform-origin: center left;
        }
        .spinner div:nth-of-type(4) {
          transform: rotateX(90deg) translateY(-50%);
          transform-origin: top center;
        }
        .spinner div:nth-of-type(5) {
          transform: rotateX(-90deg) translateY(50%);
          transform-origin: bottom center;
        }
        .spinner div:nth-of-type(6) {
          transform: translateZ(16px);
        }

        .spinner2 {
          width: 72px;
          height: 72px;
          animation: spinner-y0fdc2 15s infinite ease;
          position: absolute;
          transform-style: preserve-3d;
        }

        .spinner2 > div {
          height: 100%;
          width: 100%;
          position: absolute;
          border: 1px solid #282828;
        }

        /* depth = 36px */
        .spinner2 div:nth-of-type(1) {
          transform: translateZ(-36px) rotateY(180deg);
        }
        .spinner2 div:nth-of-type(2) {
          transform: rotateY(-270deg) translateX(50%);
          transform-origin: top right;
        }
        .spinner2 div:nth-of-type(3) {
          transform: rotateY(270deg) translateX(-50%);
          transform-origin: center left;
        }
        .spinner2 div:nth-of-type(4) {
          transform: rotateX(90deg) translateY(-50%);
          transform-origin: top center;
        }
        .spinner2 div:nth-of-type(5) {
          transform: rotateX(-90deg) translateY(50%);
          transform-origin: bottom center;
        }
        .spinner2 div:nth-of-type(6) {
          transform: translateZ(36px);
        }

        /* ================= ANIMATIONS (UNCHANGED) ================= */

        @keyframes spinner-y0fdc1 {
          0% { transform: rotate(0deg) rotateX(0deg) rotateY(0deg); }
          24% { transform: rotate(0deg) rotateX(360deg) rotateY(360deg); }
          50% { transform: rotate(225deg) rotateX(360deg) rotateY(360deg); }
          100% { transform: rotate(0deg) rotateX(0deg) rotateY(0deg); }
        }

        @keyframes spinner-y0fdc2 {
          0% { transform: rotate(45deg) rotateX(0deg) rotateY(0deg); }
          24% { transform: rotate(45deg) rotateX(-360deg) rotateY(-360deg); }
          50% { transform: rotate(-180deg) rotateX(-360deg) rotateY(-360deg); }
          100% { transform: rotate(45deg) rotateX(0deg) rotateY(0deg); }
        }
      `}</style>
    </>
  );
}