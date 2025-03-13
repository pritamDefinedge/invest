import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import ProductsSection from "./components/ProductsSection";
import SubscriptionSection from "./components/SubscriptionSection";
import Signup from "./components/Signup";
import BrokerageRewardsSection from "./components/BrokerageRewardsSection";
import FooterBanner from "./components/FooterBanner";
import Footer from "./components/Footer";
import Programs from "./components/Programs";
import TrainingEvents from "./components/TrainingEvents ";
import MoneyAble from "./components/MoneyAble";
import Gurukul from "./components/Gurukul";
function App() {
  const [scrollTop, setScrollTop] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });

    const handleScroll = () => {
      setScrollTop(window.scrollY > 100);
    };

    // Initialize the scroll button visibility on load
    window.addEventListener("load", handleScroll);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("load", handleScroll);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className=" min-h-screen">
      <HeroBanner />
      <main>
        <ProductsSection />
 
        <SubscriptionSection />
        <Signup />
        <Programs />
        <TrainingEvents />
        <Gurukul />
        <MoneyAble />
        <FooterBanner />
      </main>
      <Footer />
      <a
        href="#"
        className={`fixed ${
          scrollTop ? "visible opacity-100" : "invisible opacity-0"
        } right-4 bottom-4 z-[9999] bg-amber-400 w-10 h-10 rounded transition-all duration-300 flex items-center justify-center hover:bg-amber-500`}
        onClick={(e) => {
          e.preventDefault();
          scrollToTop();
        }}
      >
        <i className="bi bi-arrow-up-short text-xl text-white"></i>
      </a>
    </div>
  );
}

export default App;
