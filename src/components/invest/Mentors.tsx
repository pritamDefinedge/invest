import React from "react";
import prashantImg from "../../assets/prashant.svg";
import rajuImg from "../../assets/raju.svg";

const Mentors: React.FC = () => {
  return (
    <section className="bg-[#18152e] text-white py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center mb-16">
        {/* <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#FFD9D9] mb-4">
          Meet Your Mentors
        </h2> */}
        <p className="text-gray-100 text-3xl sm:text-4xl md:text-5xl font-semibold leading-snug">
          Our Expert is Your Guide
        </p>
      </div>

      {/* Mentor: Prashant */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-20">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* Image */}
          <div className="w-full md:w-3/12">
            <img
              src={prashantImg}
              alt="Prashant"
              className="w-full h-auto object-cover rounded-xl shadow-2xl"
            />
          </div>

          {/* Content */}
          <div className="w-full md:w-9/12 space-y-2">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
              Prashant Shah
            </h3>

            <a
              href="https://twitter.com/Prashantshah267"
              target="_blank"
              rel="noopener noreferrer"
              className=" mr-2 inline-flex items-center text-gray-50 hover:underline"
            >
              <svg
              className="mr-2"
                width="20"
                height="19"
                viewBox="0 0 20 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.47463 0L10.9824 6.28986L16.5701 0H18.411L18.2902 0.437381L11.9725 7.58596L20 18.7552L19.872 19H13.7773L8.44252 11.719L1.8409 19H0L7.37081 10.4189L0.125965 0H6.47463ZM16.8871 17.3959L16.4834 16.6165L5.52269 1.60407H3.17382L14.5382 17.3969H16.8871V17.3959Z"
                  fill="white"
                />
              </svg>
              @Prashantshah267
            </a>

            <p className="text-gray-300 text-base sm:text-base md:text-base leading-relaxed">
            Prashant Shah is one of the few professionals with a number of coveted and renowned designations in the industry. He has been awarded Chartered Market Technician (CMT®) and a Certified Financial Technician (CFTe) by CMT Association and International Federation of Technical Analysts (IFTA) respectively. He is the first in India to be awarded the Master of Financial Technical Analysis® (MFTA) designation by IFTA, for his original research on swing trading techniques. He is also a Member of Society of Technical Analysts, London.
            </p>
            <p className="text-gray-300 text-base sm:text-base md:text-base leading-relaxed">
            Prashant has authored five books on trading and investing. His work has contributed to the growing popularity of several specialized topics, and he is widely respected for his depth of knowledge and practical approach. Prashant’s interview got published in the popular US magazine, Technical Analysis of Stocks & Commodities.
            </p>
            <p className="text-gray-300 text-base sm:text-base md:text-base leading-relaxed">
            He has worked with various financial firms, and he has been practicing technical analysis, fundamental analysis, quantitative analysis, relative strength, breadth, options strategies and noiseless charts in particular for a number of years. Having worked with financial organizations for many years, Prashant had exposure to business, research, institutions, HNIs, retail traders, investors, fin-tech companies, brokers, and other types of market participants, which enabled him to acquire a comprehensive understanding of the trading and investment industry.
            </p>
            {/* <p className="text-gray-300 text-base sm:text-base md:text-base leading-relaxed">
              He is a pioneer ins Noiseless trading and has helped create
              various platform that help make trading objective. He is focused on
              empowering traders through a disciplined, structured and
              rule-based trading approach, helping them move away from
              noise-ridden charts and emotional trading
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentors;
