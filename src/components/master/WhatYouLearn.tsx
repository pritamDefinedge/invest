import React from "react";

const WhatYouLearn: React.FC = () => {
  const learningPoints = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      ),
      description:
        "Your approach will move from random trades to a repeatable, structured process.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      description:
        "You will understand how professionals think, plan and manage momentum trades.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      description:
        "You will stop being impulsive and start trading with clarity and control.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      description:
        "You will learn tested techniques that bring objectivity to your analysis.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
      description:
        "You will gain confidence in building and executing your own setups.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      description:
        "You will reduce emotional and overtrading tendencies by following logical signals.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      description:
        "It teaches you when to act and when to stay out – a key element of professional trading.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
      description:
        "With insights from mentors who have practiced Noiseless Trading for years, you will avoid common pitfalls and master consistency.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      ),
      description:
        "Most importantly, you will become a Noiseless Trader – focused, composed and consistent.",
    },
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0818] overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600 rounded-full filter blur-[100px] opacity-10" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-600 rounded-full filter blur-[90px] opacity-10" />
      <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-pink-600 rounded-full filter blur-[80px] opacity-5" />

      {/* CSS Grid pattern */}
      <div className="absolute inset-0 opacity-5 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header section */}
        <div className="text-center px-4 sm:px-6 lg:px-8 mb-16">
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-900/50 to-blue-900/50 border border-purple-700/30 mb-6">
            <span className="text-sm font-medium text-pink-200 tracking-wider uppercase">
              What Will You Learn ?
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Your Evolution as a{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                Power Trader
              </span>
            </span>
          </h2>

          <div className="max-w-3xl mx-auto">
            <p className="text-xl sm:text-2xl font-medium text-gray-300">
              Remove Emotion.{" "}
              <span className="relative text-yellow-400 font-semibold">
                Automate
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-yellow-400 animate-pulse rounded-full"></span>
              </span>{" "}
              Discipline
            </p>
          </div>
        </div>

        {/* Points grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-2 sm:px-0">
          {learningPoints.map((point, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-b from-[#1e1a3a]/80 to-[#1a1630]/90 backdrop-blur-sm border border-[#2d2755] rounded-xl p-6 transition-all duration-500 hover:border-[#4a3f8a] hover:shadow-xl hover:shadow-purple-500/20 overflow-hidden"
            >
              {/* Animated background */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.1),transparent)]"></div>
              </div>

              {/* Glow effect */}
              <div className="absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-blue-600/10 transition-opacity duration-300"></div>

              <div className="relative z-10 flex items-start gap-5">
                <span className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-purple-900/50 to-blue-900/50 border border-[#3d3670] text-yellow-400 p-3 group-hover:scale-110 transition-transform duration-300">
                  {point.icon}
                </span>
                <p className="text-gray-300 text-sm sm:text-base md:text-base leading-relaxed">
                  {point.description}
                </p>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-[#4a3f8a] rounded-tr-xl transition-all duration-300 group-hover:w-16 group-hover:h-16"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-[#4a3f8a] rounded-bl-xl transition-all duration-300 group-hover:w-12 group-hover:h-12"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouLearn;
