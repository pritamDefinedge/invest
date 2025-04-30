import React from "react";

const AreYou: React.FC = () => {
  const leftPoints = [
    "Invest in stocks that beat the market",
    "Ensure your portfolio recovers every time",
    "Ride momentum trends with no effort",
  ];

  const rightPoints = [
    "Invest objectively, unfazed by emotions",
    "Catch trends and exit at the right time",
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0f0c29] to-[#18152e] text-white overflow-hidden">
      {/* Floating gradient orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-[float_15s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-[float_18s_ease-in-out_infinite]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Markets <span className="text-red-400">Fall</span> &{" "}
            <span className="text-green-400">Recover</span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              Your Investment May Not!
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg md:text-xl opacity-90 leading-relaxed">
            The market has weathered many storms over the years and even as the
            market recovers from each crash, most portfolios don't.
          </p>
        </div>

        {/* Unified Box: Points + Conclusion */}
        <div className="bg-[#1e1a3a]/50 backdrop-blur-sm p-8 rounded-2xl border border-[#2d2755] hover:border-[#4a3f8a] transition-all duration-300 mb-16">
          {/* Points Columns */}
          <div className="flex flex-col lg:flex-row gap-12 mb-12">
            {/* Left Column */}
            <div className="lg:w-1/2">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center lg:text-left bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-300">
                But what if you could -
              </h3>
              <ul className="space-y-6">
                {leftPoints.map((point, index) => (
                  <li key={index} className="flex items-start group">
                    <div className="flex-shrink-0 mt-1 mr-4 text-green-400 group-hover:text-purple-300 transition-colors duration-300">
                      <svg
                        className="w-6 h-6"
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
                    <span className="text-gray-200 text-lg md:text-xl group-hover:text-white transition-colors duration-300">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column */}
            <div className="lg:w-1/2 mt-8 ">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center lg:text-left bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-300">
                {""}
              </h3>
              <ul className="space-y-6">
                {rightPoints.map((point, index) => (
                  <li key={index} className="flex items-start group">
                    <div className="flex-shrink-0 mt-1 mr-4 text-green-400 group-hover:text-blue-300 transition-colors duration-300">
                      <svg
                        className="w-6 h-6"
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
                    <span className="text-gray-200 text-lg md:text-xl group-hover:text-white transition-colors duration-300">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Conclusion Section */}
          <div className="text-left">
            <p className="text-xl  text-gray-300  mx-auto leading-relaxed">
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
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#0f0c29] via-[#0f0c29]/90 to-transparent backdrop-blur-sm z-0" />
    </section>
  );
};

export default AreYou;
