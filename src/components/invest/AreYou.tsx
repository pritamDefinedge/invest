import React from "react";

const AreYou: React.FC = () => {
  const leftPoints = [
    "Learn proven, research-backed momentum investing principles",
    "Invest in stocks that consistently outperform the market",
    "Build a portfolio designed to deliver long-term outperformance",
  ];

  const rightPoints = [
    "Ride momentum trends using smart, data-driven platform",
    "Make objective investment decisions — free from emotions",
    "Automate stock selection with powerful, easy-to-use platform",
  ];

  return (
    <section className="relative py-12 sm:py-8 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0f0c29] to-[#18152e] text-white overflow-hidden">
      {/* Floating gradient orbs with Tailwind animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-purple-600/20 rounded-full blur-[100px] sm:blur-[120px] animate-[float_15s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-blue-600/20 rounded-full blur-[100px] sm:blur-[120px] animate-[float_18s_ease-in-out_infinite]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Animated header */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <div className="inline-block relative">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="relative inline-block">Markets
                <span className="text-red-400 relative z-10"> Fall</span>
                {/* <span className="absolute bottom-0 left-0 h-2 w-full bg-red-400/30 rounded-full animate-pulse" /> */}
              </span>{" "}
              &{" "}
              <span className="relative inline-block">
                <span className="text-green-400 relative z-10">Recover</span>
                {/* <span className="absolute bottom-0 left-0 h-2 w-full bg-green-400/30 rounded-full animate-pulse" /> */}
              </span>
              <br className="hidden sm:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 inline-block mt-4">
                Your Investment May Not!
              </span>
            </h2>
            <div className="absolute -bottom-4 left-1/4 h-1 w-1/2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-width" />
          </div>
          <p className="max-w-3xl mx-auto text-gray-300 text-lg sm:text-xl md:text-2xl mt-8 leading-relaxed">
            The market has weathered many storms over the years and even as the
            market recovers from each crash, most portfolios don't.
          </p>
        </div>

        {/* Glass morphism card */}
        <div className="bg-[#1e1a3a]/50 backdrop-blur-xl rounded-3xl border border-[#2d2755]/50 shadow-2xl overflow-hidden mb-16 transition-all duration-500 hover:border-[#4a3f8a]/70 hover:shadow-[0_20px_50px_rgba(93,71,255,0.15)]">
          {/* Diagonal gradient accent */}
          <div className="h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500" />

          <div className="p-8 sm:p-10 md:p-12">
            <div className="relative">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 text-center lg:text-left">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-300">
                  But what if you could -
                </span>
              </h3>

              {/* Interactive feature matrix */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                <div className="space-y-6">
                  {leftPoints.map((point, index) => (
                    <div key={index} className="flex items-start group">
                      <div className="relative flex-shrink-0 mt-1 mr-4">
                        <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-md group-hover:bg-purple-500/30 transition-all duration-300" />
                        <div className="relative w-6 h-6 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                      </div>
                      <span className="text-gray-200 text-lg group-hover:text-white transition-colors duration-300">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="space-y-6">
                  {rightPoints.map((point, index) => (
                    <div key={index} className="flex items-start group">
                      <div className="relative flex-shrink-0 mt-1 mr-4">
                        <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-md group-hover:bg-blue-500/30 transition-all duration-300" />
                        <div className="relative w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                      </div>
                      <span className="text-gray-200 text-lg group-hover:text-white transition-colors duration-300">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Glowing conclusion */}
              <div className="mt-12 pt-8 border-t border-[#2d2755]/50 relative">
                <div className="absolute -top-px left-1/4 h-px w-1/2 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
                <p className="text-xl sm:text-2xl text-center text-gray-300 leading-relaxed">
                  You can and all it takes is two things –{" "}
                  <span className="font-semibold text-white bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    the right education
                  </span>{" "}
                  and{" "}
                  <span className="font-semibold text-white bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    the right platform
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 sm:h-48 bg-gradient-to-t from-[#0f0c29] via-[#0f0c29]/80 to-transparent backdrop-blur-sm z-0" />
    </section>
  );
};

export default AreYou;
