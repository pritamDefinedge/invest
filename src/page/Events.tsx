import React, { useEffect, useState, useRef } from "react";
import Header from "../components/master/Header";
import Footer from "../components/master/Footer";
import FooterBanner from "../components/master/FooterBanner";

import Hero from "../components/master/Hero";
import ModernHero from "../components/master/backupdesing/ModernHero";


import AreYou from "../components/master/AreYou";
import Introducing from "../components/master/Introducing";
import WhatYouLearn from "../components/master/WhatYouLearn";
import Mentors from "../components/master/Mentors";
import MasterMomentum from "../components/master/MasterMomentum";
import OpenFree from "../components/master/OpenFree";
import Testimonials from "../components/master/Testimonials";
import Faq from "../components/master/Faq";

import EndEvent from "../components/master/EndEvent";

import { ArrowUpIcon } from "@heroicons/react/24/solid";
import Lenis from "@studio-freight/lenis";

function App() {
  const [scrollTop, setScrollTop] = useState(false);
  const [showHome, setShowHome] = useState(true);
  const lenisRef = useRef<Lenis | null>(null);

  // Initialize Lenis and scroll events
  useEffect(() => {
    // Set up Lenis smooth scrolling
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    // RAF loop for Lenis
    const raf = (time: number) => {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    // Check event date range
    const currentDate = new Date();
    const startDate = new Date("2025-04-30");
    const endDate = new Date("2025-05-11T12:00:00");
    setShowHome(currentDate >= startDate && currentDate <= endDate);

    // Set up scroll listener
    const handleScroll = () => {
      setScrollTop(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);

    // Cleanup
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
      {showHome ? (
        <>
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
        </>
      ) : (
        <EndEvent />
      )}
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
