import React from "react";

const AreYou: React.FC = () => {
  const leftPoints = [
    "Invest in stocks that beat the market ",
    "Ensure your portfolio recovers every time",
    "Ride momentum trends with no effort ",
  ];

  const rightPoints = [
    "Invest objectively, unfazed by emotions ",
    "Catch trends and exit at the right time ",
  ];

  return (
    <section className="relative py-12 sm:py-8 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0f0c29] to-[#18152e] text-white overflow-hidden">
      {/* Floating gradient orbs with Tailwind animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-purple-600/20 rounded-full blur-[100px] sm:blur-[120px] animate-[float_15s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-blue-600/20 rounded-full blur-[100px] sm:blur-[120px] animate-[float_18s_ease-in-out_infinite]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Markets <span className="text-red-400">Fall</span> &{" "}
            <span className="text-green-400">Recover</span>
            <br className="hidden sm:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              Your Investment May Not!
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300 text-base sm:text-lg md:text-xl opacity-90 leading-relaxed mt-4 sm:mt-6">
            The market has weathered many storms over the years and even as the
            market recovers from each crash, most portfolios don’t.
          </p>
        </div>

        {/* Unified Box */}
        <div className="bg-[#1e1a3a]/70 backdrop-blur-lg p-6 sm:p-8 md:p-10 rounded-2xl border border-[#2d2755] hover:border-[#4a3f8a] transition-all duration-500 shadow-xl hover:shadow-2xl mb-12 sm:mb-16">
          {/* Points Columns */}
          <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-12 mb-10 sm:mb-12">
            {/* Left Column */}
            <div className="lg:w-1/2">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 sm:mb-8 text-center lg:text-left bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-300">
                But what if you could -
              </h3>
              <ul className="space-y-4 sm:space-y-6">
                {leftPoints.map((point, index) => (
                  <li key={index} className="flex items-start group">
                    <div className="flex-shrink-0 mt-1 mr-3 sm:mr-4 text-green-400 group-hover:text-purple-300 transition-colors duration-300">
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-200 text-base sm:text-lg md:text-xl group-hover:text-white transition-colors duration-300">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column */}
            <div className="lg:w-1/2 lg:mt-8">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 sm:mb-8 text-center lg:text-left bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-300">
                {""}
              </h3>
              <ul className="space-y-4 sm:space-y-6">
                {rightPoints.map((point, index) => (
                  <li key={index} className="flex items-start group">
                    <div className="flex-shrink-0 mt-1 mr-3 sm:mr-4 text-green-400 group-hover:text-blue-300 transition-colors duration-300">
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-200 text-base sm:text-lg md:text-xl group-hover:text-white transition-colors duration-300">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Conclusion Section */}
          <div className="text-center sm:text-left">
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mx-auto leading-relaxed">
              You can and all it takes is two things –{" "}
              <span className="font-semibold text-white">
                the right education
              </span>{" "}
              and{" "}
              <span className="font-semibold text-white">the right tool</span>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 sm:h-48 bg-gradient-to-t from-[#0f0c29] via-[#0f0c29]/80 to-transparent backdrop-blur-sm z-0" />
    </section>
  );
};

export default AreYou;
