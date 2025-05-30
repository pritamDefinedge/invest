import React from "react";
import Banner from "../../assets/hero.jpg";
import EventCountdown from "./EventCountdown";
const HeroSection: React.FC = () => {
  return (
    <div className="relative overflow-hidden min-h-[500px] sm:min-h-[550px] md:min-h-[650px] lg:min-h-[750px] flex items-center justify-center">
      {/* Background Image */}

      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${Banner}),  linear-gradient(0deg, rgb(0, 0, 0) 0%, rgb(2 32 11) 50%, rgba(0, 0, 0, 0) 100%)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundBlendMode: "overlay",
        }}
      />

      {/* Floating Blurred Blobs */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-gray-900 rounded-full blur-[80px] opacity-20 animate-[float_12s_ease-in-out_infinite]" />
      <div className="absolute bottom-1/4 left-1/4 w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 bg-gray-900 rounded-full blur-[100px] opacity-20 animate-[float_15s_ease-in-out_infinite]" />

      {/* Centered Text Content */}
      <div className="relative z-10 px-4 text-center flex flex-col items-center justify-center">
        <div className="max-w-3xl sm:max-w-4xl mx-auto">
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-100 to-blue-100">
              Master Momentum Trading
            </span>
          </h1>

          {/* Subheading */}
          <h4 className="text-base sm:text-lg md:text-2xl font-semibold text-white mb-2">
            Learn & Develop Strategies | Spot & Trade Outperformers | 1-click
            Execution
          </h4>

          {/* Description */}
          {/* <p className="text-sm sm:text-base md:text-base text-gray-50 mb-6 mx-auto max-w-xl sm:max-w-2xl">
            Learn & Develop a Momentum Trading Engine and Execute
            High-Probability Strategies with Clarity
          </p> */}

          {/* CTA Button */}
          <div className="flex my-8 justify-center">
            <a
              href="https://dashboard.definedge.com/buy-product/training"
              target="_blank"
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
            </a>
          </div>
          <EventCountdown />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
