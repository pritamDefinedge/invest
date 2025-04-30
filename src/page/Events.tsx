import React, { useEffect, useState, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FooterBanner from "../components/FooterBanner";
import Hero from "../components/Hero";
import AreYou from "../components/AreYou";
import Introducing from "../components/Introducing";
import WhatYouLearn from "../components/WhatYouLearn";
import Mentors from "../components/Mentors";
import MasterMomentum from "../components/MasterMomentum";
import OpenFree from "../components/OpenFree";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";
import { ArrowUpIcon } from "@heroicons/react/24/solid";
import Lenis from "@studio-freight/lenis";

function App() {
  const [scrollTop, setScrollTop] = useState(false);
  const lenisRef = useRef<Lenis | null>(null);

  // Initialize Lenis and scroll detection
  useEffect(() => {
    // Smooth scrolling with Lenis
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    // RAF loop
    const raf = (time: number) => {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    // Scroll detection for button visibility
    const handleScroll = () => {
      setScrollTop(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      lenisRef.current?.destroy();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    lenisRef.current?.scrollTo(0, {
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <AreYou />
        <Introducing />
        <WhatYouLearn />
        <Mentors />
        <MasterMomentum />
        <OpenFree />
        <Testimonials />
        <Faq />
        <FooterBanner />
      </main>
      <Footer />

      {/* Scroll To Top Button */}
      <button
        className={`fixed ${
          scrollTop ? "visible opacity-100" : "invisible opacity-0"
        } right-4 bottom-4 z-[9999] bg-blue-900 w-12 h-12 rounded-full transition-all duration-300 flex items-center justify-center hover:bg-blue-700 shadow-lg`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <ArrowUpIcon className="w-6 h-6 text-white" />
      </button>
    </div>
  );
}

export default App;
