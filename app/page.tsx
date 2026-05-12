"use client";

import { useEffect, useState } from "react";

import Loader from "@/components/Loader";
import Header from "@/components/Header";
import SocialDock from "@/components/SocialDock";
import HeroCarousel from "@/components/HeroCarousel";
import WhatWeDo from "@/components/WhatWeDo";
import FeaturedProjects from "@/components/FeaturedProjects";
import LivingSection from "@/components/LivingSection";
import Testimonials from "@/components/Testimonials";
import FounderSection from "@/components/FounderSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-white">
      <div className="relative w-full overflow-hidden leading-none bg-[#DCDCDC]">
  <svg
    className="block w-full h-[60px]"
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
  >
    {/* outline triangle (no fill) */}
    <path
      d="M50 0 L0 100 L100 100 Z"
      fill="none"
      stroke="#1C1C1C"
      strokeWidth="1"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
</div>

      <Header />

      {/* LOADER */}
      {loading && (
        <div className="fixed inset-0 z-[9999] bg-black">
          <Loader />
        </div>
      )}

      {/* CONTENT ALWAYS EXISTS */}
      <main className={`${loading ? "opacity-0" : "opacity-100"} transition duration-500`}>

        {/* HERO */}
        <section className="relative w-full h-screen">
          <HeroCarousel />
        </section>

        {/* WHAT WE DO */}
        <section className="relative w-full bg-white">
          <WhatWeDo />
                <FeaturedProjects />
                      <LivingSection />
                      <Testimonials />
                      <FounderSection />
                      <Footer />
        </section>

      </main>

{!loading && <SocialDock />}    </div>
  );
}