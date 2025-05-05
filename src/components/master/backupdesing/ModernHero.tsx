import React from "react";
import Banner from "../../../assets/hero.jpg";
import EventCountdown from "../EventCountdown";

const HeroSection: React.FC = () => {
  return (
    <div className="relative overflow-hidden min-h-screen flex items-center justify-center">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 w-full h-full">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${Banner})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-emerald-900/30 to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_60%,rgba(0,10,5,0.9))]" />
      </div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTIwIDIwVjBINHYxNnY0SDB2MjBoMTZ2LTRoNHYxNmgydi0xNmg0di00aDR2LTRoNHYtMmg0di0yaC00di00aC00eiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvc3ZnPg==')] bg-[length:40px_40px]"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/5"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 15 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 text-center w-full max-w-6xl mx-auto">
        <div className="mb-8">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-600/20 to-teal-600/20 border border-emerald-500/30 mb-6">
            <span className="text-sm font-medium text-emerald-300 tracking-wider uppercase">
              Masterclass Launch
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-200 to-teal-300">
              Momentum Trading
            </span>{" "}
            <span className="text-white">Mastery</span>
          </h1>

          {/* Subheading */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Develop winning strategies, identify outperformers, and execute with precision in any market condition
          </h2>

          {/* CTA Button */}
          <div className="flex justify-center mb-12">
            <a
              href="https://dashboard.definedge.com/buy-product/training"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group inline-flex items-center justify-center px-8 py-4 overflow-hidden rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/30 transform hover:-translate-y-1"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
              <span className="relative z-10 flex items-center gap-3">
                <span className="text-lg">Register Now</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
            </a>
          </div>
        </div>

        {/* Countdown */}
        <div className="max-w-2xl mx-auto">
          <EventCountdown />
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-emerald-600/10 blur-[80px] animate-float-slow" />
      <div className="absolute bottom-1/4 left-1/4 w-40 h-40 rounded-full bg-teal-600/10 blur-[100px] animate-float-medium" />
      <div className="absolute top-1/3 left-1/3 w-24 h-24 rounded-full bg-white/5 blur-[60px] animate-float-fast" />
    </div>
  );
};

export default HeroSection;