import React from "react";

import icon1 from "../assets/youare1.svg";
import icon2 from "../assets/youare2.svg";
import icon3 from "../assets/youare3.svg";
import icon4 from "../assets/youare4.svg";
import icon5 from "../assets/youare5.svg";
import icon6 from "../assets/youare6.svg";
const AreYou: React.FC = () => {
  const learningPoints = [
    {
      emoji: icon1,
      description: "Unsure how to identify strong stocks or the right entry points?",
    },
    {
      emoji: icon2,
      description: "Feel overwhelmed by market noise, tips and conflicting signals?",
    },
    {
      emoji: icon3,
      description: "Keep jumping between strategies without clarity or conviction? ",
    },
    {
      emoji: icon4,
      description: "Struggle with inconsistent results or emotional trading? ",
    },
    {
      emoji: icon5,
      description: "Eager to catch strong moves early and exit at the right time?",
    },
    {
      emoji: icon6,
      description: "Want to master a structured momentum trading approach that works across timeframes? ",
    },
  ];

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-[#18152e] text-white overflow-hidden">
      {/* Top blur effect */}
      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-[#0f0c29] via-[#18152e]/90 to-transparent backdrop-blur-lg z-10 pointer-events-none"></div>

      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-600 rounded-full filter blur-[100px] opacity-10 animate-[float_12s_ease-in-out_infinite]" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-600 rounded-full filter blur-[90px] opacity-10 animate-[float_15s_ease-in-out_infinite]" />
      
      <div className="max-w-6xl mx-auto relative z-20">
        {/* Header section */}
        <div className="text-center mb-16 px-2">
          <span className="inline-block text-xs sm:text-sm font-medium tracking-widest text-[#FFD9D9] mb-4 px-4 py-2 rounded-full bg-[#2d2755]/50 border border-[#3a3465]">
            Is This You?
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Are You Facing These Challenges?
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300 text-sm sm:text-base md:text-lg opacity-90">
            Common struggles that traders face – and exactly how we help solve them
          </p>
        </div>

        {/* Points grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {learningPoints.map((point, index) => (
            <div 
              key={index}
              className="group relative bg-[#1e1a3a]/80 backdrop-blur-sm border border-[#2d2755] rounded-xl p-5 sm:p-6 transition-all duration-500 hover:bg-[#262145] hover:border-[#4a3f8a] hover:shadow-lg hover:shadow-purple-500/10 overflow-hidden"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              
              <div className="flex items-start gap-4 sm:gap-5 relative z-10">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#2d2755] flex items-center justify-center text-xl sm:text-2xl group-hover:scale-110 transition-transform">
                  <img src={point.emoji} alt="" className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-10 h-10 sm:w-12 sm:h-12 border-t border-r border-[#4a3f8a] rounded-tr-xl transition-all duration-300 group-hover:w-14 group-hover:h-14" />
            </div>
          ))}
        </div>

        {/* CTA section */}
        <div className="mt-16 text-center px-2">
          <div className="max-w-3xl mx-auto text-gray-300 text-sm sm:text-base md:text-lg opacity-90 mb-8">
            <p>If you answered <span> "Yes"</span>  to any of the above, Master Momentum Trading is for you</p>
          </div>
        </div>
      </div>

      {/* Bottom blur effect */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#18152e] via-[#18152e]/90 to-transparent backdrop-blur-sm z-10"></div>
    </section>
  );
};

export default AreYou;
