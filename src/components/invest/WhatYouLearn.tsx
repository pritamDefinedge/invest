import React from "react";
import { motion } from "framer-motion";

const WhatYouLearn: React.FC = () => {
  const learningPoints = [
    {
      description: "Access an ecosystem that makes you market-ready ",
    },
    {
      description:
        "For transformative education, actionable analysis & seamless trading, explore 15+ Innovative tool.s  ",
    },
    {
      description:
        "Learn with 3 expert-guided courses worth ₹11,775, for you at no cost ",
    },
    {
      description:
        "Navigate the Definedge ecosystem with your unique GrowthMap ",
    },
    {
      description: "Analyze & trade like a PRO with 2 months’ free trial ",
    },
    {
      description: "Get all your PRO subscriptions, effectively Free! ",
    },
  ];

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-[#18152e] text-white overflow-hidden">
      {/* Enhanced animated background elements */}
      <motion.div
        initial={{ x: -100, y: -100 }}
        animate={{ x: [0, 40, 0], y: [0, 40, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-64 sm:w-72 h-64 sm:h-72 bg-purple-600 rounded-full filter blur-[80px] sm:blur-[100px] opacity-10"
      />
      <motion.div
        initial={{ x: 100, y: 100 }}
        animate={{ x: [0, -40, 0], y: [0, -40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-0 w-56 sm:w-64 h-56 sm:h-64 bg-blue-600 rounded-full filter blur-[70px] sm:blur-[90px] opacity-10"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Enhanced header section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 px-4"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-100 leading-snug mb-4">
            Your Key to Momentify & More Your Super Demat
          </h2>
          <h3 className="text-sm sm:text-base md:text-lg font-semibold text-[#FFD9D9] tracking-widest max-w-3xl mx-auto">
            From one-click momentum investing to expert-guided education,
            everything begins with a Super Demat – the demat that you deserve
          </h3>
        </motion.div>

        {/* Enhanced points grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-2 sm:px-0">
          {learningPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              className="group relative bg-[#1e1a3a]/80 backdrop-blur-sm border border-[#2d2755] rounded-xl p-5 sm:p-6 transition-all duration-500 hover:bg-[#262145] hover:border-[#4a3f8a] hover:shadow-lg hover:shadow-purple-500/10 overflow-hidden"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

              <div className="flex items-start gap-3 relative z-10">
                <div className="flex-shrink-0 mt-1 text-purple-400">
                  <svg
                    className="w-5 h-5"
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
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {point.description}
                </p>
              </div>

              {/* Decorative corners */}
              <div className="absolute top-0 right-0 w-10 h-10 sm:w-12 sm:h-12 border-t border-r border-[#4a3f8a] rounded-tr-xl transition-all duration-300 group-hover:w-14 sm:group-hover:w-16 group-hover:h-14 sm:group-hover:h-16" />
              <div className="absolute bottom-0 left-0 w-10 h-10 sm:w-12 sm:h-12 border-b border-l border-[#4a3f8a] rounded-bl-xl transition-all duration-300 group-hover:w-14 sm:group-hover:w-16 group-hover:h-14 sm:group-hover:h-16" />
            </motion.div>
          ))}
        </div>

        {/* Enhanced CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center py-10 sm:py-12"
        >
          <motion.button
            onClick={() =>
              window.open("https://signup.definedgesecurities.com/", "_blank")
            }
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 text-sm sm:text-base"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Get Your Super Demat
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
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
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatYouLearn;
