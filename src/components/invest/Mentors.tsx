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
          <div className="w-full md:w-9/12 space-y-6">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
              Prashant Shah
            </h3>
            <p className="text-gray-300 text-base sm:text-base md:text-base leading-relaxed">
              The brain behind Definedge and a pioneer in momentum investing –
              Prashant Shah will be your guide on this webinar.
            </p>
            <p className="text-gray-300 text-base sm:text-base md:text-base leading-relaxed">
              Prashant Shah, the Co-founder and CEO of Definedge is the first
              Indian to earn the prestigious MFTA designation from IFTA his
              pioneering work on swing trading strategies. He also has many
              accolades including CMT, CFTe, and MSTA certifications, making him
              one of the most highly qualified trading professionals in the
              country.
            </p>
            <p className="text-gray-300 text-base sm:text-base md:text-base leading-relaxed">
              He has authored various books on trading and investing, including
              five best sellers and his recent contribution to Momentum
              Investing has been through his book – <span className="font-semibold text-yellow-500"> Master Momentum Investing &
              Trading Strategies</span> 
            </p>
            <p className="text-gray-300 text-base sm:text-base md:text-base leading-relaxed">
              He is a pioneer ins Noiseless trading and has helped create
              various tools that help make trading objective. He is focused on
              empowering traders through a disciplined, structured and
              rule-based trading approach, helping them move away from
              noise-ridden charts and emotional trading
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentors;
