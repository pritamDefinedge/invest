import React, { useState, useEffect, useRef } from "react";
import blurimage from "../../assets/blurimage.svg";
import investBanner from "../../assets/investBanner.svg";
import EventCountdown from "./EventCountdown";
import EnrollmentModal from "./EnrollmentModal";

const HeroSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="relative overflow-hidden min-h-[500px] sm:min-h-[550px] md:min-h-[650px] lg:min-h-[750px] flex items-center justify-center">
        {/* Background with parallax effect */}
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
          {/* Background Image with dark base overlay */}
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: `url(${investBanner}),  linear-gradient(0deg, rgb(0, 0, 0) 0%, rgb(2 32 11) 50%, rgba(0, 0, 0, 0) 100%)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "fixed",
              backgroundBlendMode: "overlay",
            }}
          />
        </div>

        {/* Floating particles */}

        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/5"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${
                Math.random() * 15 + 10
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}

        {/* Floating Blurred Blobs */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-full blur-[80px] opacity-30 animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full blur-[100px] opacity-30 animate-float-delay" />

        {/* Text Content with glass morphism effect */}
        <div className="relative z-10 px-4 py-12 sm:py-24 text-center backdrop-blur-sm">
          <div className="max-w-3xl sm:max-w-4xl mx-auto  p-8 sm:p-10  backdrop-blur-md">
            <span className="text-sm sm:text-base md:text-lg font-semibold text-[#FFD9D9] mb-2 tracking-widest">
              {" "}
              Free Webinar{" "}
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 text-white">
              <span className="text-white">
                How to Build an Outperforming Portfolio
              </span>
            </h1>

            <p className="text-md sm:text-lg md:text-xl text-gray-100 mb-8 mx-auto max-w-xl sm:max-w-2xl leading-relaxed">
              Discover the power of{" "}
              <span className="font-semibold text-blue-300">
                Momentum Investing
              </span>{" "}
              in this step-by-step session. Learn practical techniques to build
              a smarter portfolio and take control of your investments —{" "}
              <span className="italic">be your own fund manager</span>.
            </p>

            <div className="flex flex-col items-center gap-6 w-full">
              {/* Enhanced Register Button with pulse effect */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="relative overflow-hidden group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium py-4 px-10 rounded-full transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/30 transform hover:-translate-y-1"
              >
                {/* Pulse effect */}
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400/30 to-blue-400/30 opacity-0 group-hover:opacity-100 group-hover:animate-pulse-once"></span>

                {/* Main button content */}
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span className="font-semibold text-lg">Register Now</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>

                {/* Hover state overlay */}
                {/* <span className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span> */}
              </button>

              <EventCountdown />
            </div>
          </div>
        </div>
      </div>

      <EnrollmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default HeroSection;
