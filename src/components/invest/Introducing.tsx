import React from "react";
import { motion } from "framer-motion";

const Introducing: React.FC = () => {
  const learningPoints = [
    {
      title: "Learn Momentum",
      description:
        "Start with an expert-guided module that explores momentum investing from scratch to advanced investment strategies",
    },
    {
      title: "Deploy Strategies",
      description:
        "Choose from expert-created strategies or make your own based on funda-techno insights to best suit your goals",
    },
    {
      title: "Backtest Your Way",
      description:
        "Backtest your strategies over 2 decades to understand the performance and build confidence before you invest",
    },
    {
      title: "Invest Objectively",
      description:
        "Invest in your strategy easily with Momentify and let the system auto-allocate your funds across stocks",
    },
    {
      title: "Automated Rebalancing",
      description:
        "Momentify rebalances your portfolio monthly, so you can execute your investment in just one click",
    },
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0f0c29] to-[#1a1633] text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-[float_15s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-[float_18s_ease-in-out_infinite]" />
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-indigo-600/20 rounded-full blur-[100px] animate-[float_12s_ease-in-out_infinite]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20 px-2">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Invest in{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 animate-gradient">
              Momentum
            </span>{" "}
            in One Click with
          </h2>
          <p className="max-w-4xl mx-auto text-lg sm:text-xl text-gray-300 opacity-90 leading-relaxed">
            From the creators of OPSTRA comes the momentum trading engine that
            lets you analyze, backtest and invest in a few clicks. Faster than
            you can say "Momentify makes Momentum Investing Super-simple".
          </p>
        </div>

        {/* Features Flexbox */}
        <div className="space-y-10 mb-16">
          {/* First Row: 3 Boxes */}
          <div className="flex flex-wrap justify-center gap-8">
            {learningPoints.slice(0, 3).map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="w-full sm:w-[300px] bg-[#1e1a3a]/70 backdrop-blur-sm border border-[#2d2755] rounded-2xl p-8 group relative transition-all duration-500 hover:border-[#4a3f8a] hover:shadow-xl hover:shadow-purple-500/20 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 leading-snug">
                  {point.title}
                </h3>
                <p className="text-gray-300 text-base md:text-lg opacity-90">
                  {point.description}
                </p>
                <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-[#4a3f8a] rounded-tr-2xl transition-all duration-300 group-hover:w-20 group-hover:h-20" />
              </motion.div>
            ))}
          </div>

          {/* Second Row: 2 Boxes Centered */}
          <div className="flex justify-center gap-8">
            {learningPoints.slice(3).map((point, index) => (
              <motion.div
                key={index + 3}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
                viewport={{ once: true }}
                className="w-full sm:w-[300px] bg-[#1e1a3a]/70 backdrop-blur-sm border border-[#2d2755] rounded-2xl p-8 group relative transition-all duration-500 hover:border-[#4a3f8a] hover:shadow-xl hover:shadow-purple-500/20 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 leading-snug">
                  {point.title}
                </h3>
                <p className="text-gray-300 text-base md:text-lg opacity-90">
                  {point.description}
                </p>
                <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-[#4a3f8a] rounded-tr-2xl transition-all duration-300 group-hover:w-20 group-hover:h-20" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <motion.a
            href="#formId"
         
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Start with a FREE Webinar
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
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Introducing;
