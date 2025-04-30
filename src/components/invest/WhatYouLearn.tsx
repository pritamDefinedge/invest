import React from "react";

const WhatYouLearn: React.FC = () => {
  const learningPoints = [
    {
      description: "Access an ecosystem that makes you market-ready",
    },
    {
      description:
        "Explore 15+ tools for transformative education, actionable analysis & seamless trading ",
    },
    {
      description:
        "Learn with 3 expert-guided courses worth ₹11,775, for you at no cost",
    },
    {
      description:
        "Navigate the Definedge ecosystem with your unique GrowthMap",
    },
    {
      description: "Analyze & trade like a PRO with 2 months’ free trial ",
    },
    {
      description: "Get all your PRO subscriptions, effectively Free! ",
    },
  ];

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-[#18152e] text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600 rounded-full filter blur-[100px] opacity-10 animate-float1" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-600 rounded-full filter blur-[90px] opacity-10 animate-float2" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header section */}
        <div className="text-center mb-12 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-gray-100 leading-snug">
            Your Key to Momentify & More  Your Super Demat 
          </h2>
          <h3 className="text-sm sm:text-base md:text-lg font-semibold text-[#FFD9D9] mb-2 tracking-widest">
            From one-click momentum investing to expert-guided education,
            everything begins with a Super Demat – the demat that you deserve 
          </h3>
        </div>

        {/* Points grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2 sm:px-0">
          {learningPoints.map((point, index) => (
            <div
              key={index}
              className="group relative bg-[#1e1a3a]/80 backdrop-blur-sm border border-[#2d2755] rounded-xl p-5 sm:p-6 transition-all duration-500 hover:bg-[#262145] hover:border-[#4a3f8a] hover:shadow-lg hover:shadow-purple-500/10 overflow-hidden"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

              <div className="flex items-start gap-4 relative z-10">
                <p className="text-gray-300 text-sm sm:text-sm md:text-base leading-relaxed">
                  {point.description}
                </p>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-[#4a3f8a] rounded-tr-xl transition-all duration-300 group-hover:w-16 group-hover:h-16" />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center py-12">
        <button
          onClick={() =>
            window.open(
              "https://dashboard.definedge.com/buy-product/training",
              "_blank"
            )
          }
          className="relative overflow-hidden group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30"
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
          Get Your Super Demat
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
          <span className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
        </button>
      </div>
    </section>
  );
};

export default WhatYouLearn;
