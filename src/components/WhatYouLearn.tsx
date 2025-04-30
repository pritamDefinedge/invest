import React from "react";

const WhatYouLearn: React.FC = () => {
  const learningPoints = [
    {
      emoji: "🔄",
      description: "Your approach will move from random trades to a repeatable, structured process.",
    },
    {
      emoji: "💡",
      description: "You will understand how professionals think, plan and manage momentum trades.",
    },
    {
      emoji: "🎯",
      description: "You will stop being reactive and start trading with clarity and control.",
    },
    {
      emoji: "⚙️",
      description: "You will learn tested techniques that bring objectivity to your analysis.",
    },
    {
      emoji: "📈",
      description: "You will gain confidence in building and executing your own setups.",
    },
    {
      emoji: "📉",
      description: "You will reduce emotional and overtrading tendencies by following logical signals.",
    },
    {
      emoji: "🧭",
      description: "It teaches you when to act and when to stay out – a key element of professional trading.",
    },
    {
      emoji: "📚",
      description: "With insights from mentors who have practiced Noiseless Trading for years, you will avoid common pitfalls and master consistency.",
    },
    {
      emoji: "🧠",
      description: "Most importantly, you will become a Noiseless Trader – focused, composed and consistent.",
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
          <h2 className="text-sm sm:text-base md:text-lg font-semibold text-[#FFD9D9] mb-2 tracking-widest">
            What You Will Learn
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-100 leading-snug">
            Your Evolution as a Power Trader
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
                <span className="text-xl sm:text-xl md:text-xl">{point.emoji}</span>
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
    </section>
  );
};

export default WhatYouLearn;
