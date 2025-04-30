import React, { useState } from "react";
import Logo from "../assets/definedge_logo_mobile.svg";

const OpenFree: React.FC = () => {
  const [mobile, setMobile] = useState("");

  const isValidIndianMobile = (number: string): boolean => {
    return /^[6-9]\d{9}$/.test(number);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isValidIndianMobile(mobile)) {
      window.location.href = `https://signup.definedgesecurities.com/?dnum=${mobile}&ss=dsec-home`;
    } else {
      alert(
        "Please enter a valid 10-digit Indian mobile number (starting with 6-9)."
      );
    }
  };

  return (
    <section className="py-12 md:py-12 bg-[#18152e]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="shine shine-anim bg-gradient-to-r from-[#091E40] to-[#0A2B5A] rounded-2xl p-6 md:p-8 flex flex-col lg:flex-row items-center gap-8 lg:gap-12 shadow-xl">
          {/* Left side */}
          <div className="flex flex-col md:flex-row items-center gap-6 w-full lg:w-1/2">
            <div className="flex-shrink-0">
              <img
                src={Logo}
                alt="Definedge Logo"
                className="w-24 h-24 md:w-28 md:h-28 object-contain"
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-white">
                Get{" "}
                <span className="text-yellow-400 font-medium animate-pulse">
                  20% Off!
                </span>
              </h2>
              <p className="text-blue-100 mb-4 md:mb-6 text-sm sm:text-base md:text-lg">
                for Definedge Super Demat Account Holder's Only.
              </p>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="w-full lg:w-1/2">
            <div className="rounded-xl p-4 md:p-2">
              <p className="text-lg sm:text-xl md:text-2xl font-medium mb-6 text-white">
                Open your{" "}
                <span className="text-yellow-400 font-light">Free</span> Super
                Demat account
              </p>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex flex-1">
                    <div className="flex items-center px-4 bg-white/10 border border-white/20 rounded-l-lg">
                      <span className="text-white">+91</span>
                    </div>
                    <input
                      type="tel"
                      placeholder="Enter Mobile Number"
                      className="flex-grow p-3 bg-white/10 text-white placeholder-blue-200 border border-white/20 rounded-r-lg focus:outline-none focus:border-transparent transition duration-200"
                      maxLength={10}
                      required
                      inputMode="numeric"
                      value={mobile}
                      onChange={(e) =>
                        setMobile(e.target.value.replace(/[^0-9]/g, ""))
                      }
                    />
                  </div>

                  <button
                    type="submit"
                    className="relative overflow-hidden px-6 py-3 bg-gradient-to-r from-[#256bdd] to-[#1a4fb3] text-white font-medium rounded-lg hover:from-[#1d5ac5] hover:to-[#13439d] transition-all duration-300 group min-w-[150px] shadow-lg"
                  >
                    <span className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition duration-300"></span>
                    <span className="relative flex items-center justify-center">
                      Get Started
                      <svg
                        className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenFree;
