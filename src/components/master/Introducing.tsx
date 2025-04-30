import React from "react";

const Introducing: React.FC = () => {
  const learningPoints = [
    {
      title: "Build Your Momentum Trading Engine",
      description: [
        "How to Build a Custom Momentum Trading Engine",
        "Tools to Identify Momentum in Stocks, Indices and Sectors using Objective Criteria",
        "Price + Relative Strength-Based Strategy Framework",
        "Price, Performance & Participation [3P] Analysis",
      ],
    },
    {
      title: "Execute High-Probability Trades with Confidence",
      description: [
        "Learn Entry & Exit Signals Based on Momentum Filters",
        "Trade Management Rules for Trend Continuation",
        "Momentum Confirmation Techniques",
        "Risk-Controlled Execution Strategies",
      ],
    },
    {
      title: "Practice and Master the System",
      description: [
        "Live Case Studies on Stocks and Indices",
        "Practice Assignments to Internalize Concepts",
        "Trade Review & Performance Analysis",
        "Build Consistency with Repeatable Framework",
      ],
    },
  ];

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-[#18152e] text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-600 rounded-full filter blur-[100px] opacity-10 animate-float1 pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-blue-600 rounded-full filter blur-[90px] opacity-10 animate-float2 pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-48 h-48 bg-indigo-600 rounded-full filter blur-[80px] opacity-10 animate-float3 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header section */}
        <div className="text-center mb-16 px-2">
          <span className="inline-block text-xs sm:text-sm font-medium tracking-widest text-[#FFD9D9] uppercase mb-4 px-4 py-2 rounded-full bg-[#2d2755]/50 border border-[#3a3465]">
            Introducing
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Master{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              Momentum Trading
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-gray-300 opacity-90 leading-relaxed">
            Learn to construct a powerful{" "}
            <span className="font-medium text-white">Momentum Trading Engine</span> and apply it in real markets with precision and discipline.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {learningPoints.map((point, index) => (
            <div
              key={index}
              className="group relative bg-[#1e1a3a]/70 backdrop-blur-sm border border-[#2d2755] rounded-xl p-6 sm:p-8 transition-all duration-500 hover:border-[#4a3f8a] hover:shadow-lg hover:shadow-purple-500/10 overflow-hidden"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

              {/* Content */}
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 leading-snug">
                {point.title}
              </h3>
              <ul className="list-none space-y-3">
                {point.description.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start text-gray-300 text-sm sm:text-base leading-relaxed before:content-[''] before:block before:w-1.5 before:h-1.5 before:rounded-full before:bg-purple-400 before:mt-2 before:mr-3 before:flex-shrink-0"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-[#4a3f8a] rounded-tr-xl transition-all duration-300 group-hover:w-20 group-hover:h-20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Introducing;
