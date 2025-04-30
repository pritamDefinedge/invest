import React from "react";
import MomentumImg from "../assets/master_momentum.svg";

const MasterMomentum: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-[#18152e]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-4 md:mb-4">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-semibold text-white mb-4 md:mb-0">
            Master Momentum Trading
          </h2>
          <div className="flex items-center space-x-4">
            <span className="text-gray-300 text-sm sm:text-base md:text-lg">
              41 are interested
            </span>
            <button className="flex items-center space-x-2 border border-[#DD354C] text-[#DD354C] px-4 py-2 rounded-lg hover:bg-[#DD354C] hover:text-white transition duration-300">
              <span>I'm Interested</span>
            </button>
            <button className="p-2 text-gray-400 hover:text-white rounded-full  transition duration-300">
              <svg
                width="27"
                height="31"
                viewBox="0 0 27 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_28_113)">
                  <path
                    d="M9.92915 13.6554C10.3223 14.8331 10.3469 16.179 9.92495 17.3527L17.8184 22.095C20.0403 18.8982 24.6874 19.3245 26.4015 22.8768C28.4817 27.1876 24.8069 32.0878 20.4754 30.7886C17.6558 29.9431 16.0329 26.5858 17.0664 23.5975L9.14653 18.8501C8.67899 19.641 7.78053 20.3507 6.9661 20.6815C2.70847 22.4121 -1.38712 17.7621 0.451215 13.2369C1.70858 10.1421 5.2376 9.00545 7.88016 10.8284C8.40591 11.191 8.74561 11.6908 9.22395 12.0801L16.9488 7.44375L17.0064 7.31767C15.746 3.0771 19.2534 -0.98669 23.262 0.215616C26.5023 1.18786 28.001 5.33289 26.2149 8.44524C24.3369 11.7181 20.0175 12.006 17.8484 8.93461L17.7668 8.91186L9.92855 13.6561L9.92915 13.6554ZM21.4363 1.77536C17.07 2.28943 17.5333 9.6066 22.0785 9.35899C26.6944 9.10748 26.2923 1.20411 21.4363 1.77536ZM4.69144 11.7188C0.561647 12.2049 0.690684 18.9781 4.85469 19.3024C9.85113 19.691 9.82052 11.115 4.69144 11.7188ZM21.5569 21.6622C16.9896 22.0904 17.543 29.676 22.1979 29.2451C26.7256 28.8266 26.1824 21.228 21.5569 21.6622Z"
                    fill="currentColor"
                  />
                </g>
              </svg>
            </button>
          </div>
        </div>

        {/* Main Card */}
        <div className="bg-black rounded-xl overflow-hidden shadow-2xl border border-gray-800">
          <div className="flex flex-col lg:flex-row">
            {/* Image Section (70%) */}
            <div className="lg:w-7/12 relative overflow-hidden">
              <img
                src={MomentumImg}
                alt="Master Momentum Trading Course"
                className="w-full h-full object-cover transition duration-500 hover:scale-105"
              />
            </div>

            {/* Content Section (30%) with black background */}
            <div className="lg:w-5/12 relative border-l border-white/10 p-6 md:p-8 overflow-hidden bg-gradient-to-b from-[#00000000] via-[#5928E54D] via-30%">
              {/* Gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#0e0e0e] to-[#000000] opacity-80 pointer-events-none z-0" />

              {/* Main Content */}
              <div className="relative z-10 space-y-8 leading-relaxed">
                {/* Section Title */}
                <div className="space-y-3">
                  <h3 className="text-xl sm:text-2xl md:text-2xl font-bold text-white leading-snug">
                    Course Details
                  </h3>
                  <div className="space-y-1 text-sm sm:text-base md:text-base text-gray-300 leading-relaxed">
                    <p>📅 Sat 3 May 2025 - Sun 4 May 2025</p>
                    <p>🕙 10:00 AM – 5:00 PM</p>
                    <p>⏱️ 11 Hours</p>
                    <p>🎯 For Beginner Traders</p>
                    <p>🌐 Online </p>
                    <p>🗣️ English & Hindi</p>
                  </div>
                </div>

                <hr className="border-gray-700" />

                {/* Pricing Section */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:gap-0">
                  {/* Pricing Block */}
                  <div>
                    <div>
                      <p className="text-gray-400 line-through text-sm sm:text-base">
                        ₹15,999/-
                      </p>
                      <p className="text-xl font-bold text-white">
                        ₹12,999/- + GST 18%
                      </p>
                    </div>

                    {/* <p className="text-sm text-green-500 mt-1">
                      Save ₹3,000 (18% off)
                    </p> */}
                  </div>

                  {/* Availability Badge */}
                  {/* <span className="text-green-500 bg-[#22c55e29] text-xs sm:text-sm px-3 py-1 rounded-full">
                    Available
                  </span> */}
                </div>

                {/* CTA Button */}
                <button className="shine shine-anim w-full bg-[#5928E5] hover:bg-[#4a1fd1] text-white font-bold py-3 px-6 rounded-xl shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
                  <span className="relative z-10 flex items-center justify-center">
                    Register Now
                    <svg
                      className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
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
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MasterMomentum;
