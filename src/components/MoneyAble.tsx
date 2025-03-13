import React from "react";

const MoneyAble: React.FC = () => {
  return (
    <section className="w-full relative overflow-hidden  md:py-16">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Heading */}
        <div className="text-center">
        <h1
              className="font-bold text-2xl sm:text-2xl md:text-4xl mb-4 p-2"

              style={{
                backgroundImage: `linear-gradient(92.35deg, #04ABFF 3.03%, #D86967 27.52%, 
                      #CF617E 52.01%, #1048FF 75.02%, #6B84BC 98.03%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
        
            Financial Literacy for the Next Generation
          </h1>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Product Details */}
          <div className="flex justify-start">
            <div className="bg-white rounded-xl overflow-hidden p-6 md:p-8 w-full ">
              <div className="flex gap-3 md:gap-4 py-4 items-center">
                <p
                  className="font-semibold px-4 py-1 rounded-xl text-sm md:text-base text-[#002D67] text-center"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(0, 155, 144, 0.32) 0%, rgba(14, 104, 97, 0.048) 94.14%)",
                  }}
                >
                  THE Gamified Financial Education Platform for KIDS
                </p>
              </div>

              <div className="flex justify-start">
                <img
                  src="./assets/img/moneyable.svg"
                  alt="Moneyable"
                  className="w-full max-w-xs md:max-w-md"
                  loading="lazy"
                />
              </div>

              <div className="py-4">
                <p className="text-[#004CA3] py-4 font-semibold text-sm md:text-base leading-relaxed ">
                  Prepare your children for a financially aware future through
                  fun, engaging, interactive lessons designed to teach
                  budgeting, saving, investing, and financial
                  decision-making—starting as early as age 8!
                </p>
              </div>

              <div className="mt-6 flex ">
                <a
                  href="https://www.moneyable.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 sm:py-2 md:py-3 lg:py-3 px-2 sm:px-2 md:px-4 lg:px-4 text-white font-medium text-center rounded-lg w-full md:w-auto"
                  style={{
                    background:
                      "linear-gradient(180deg, #00D5C5 0%, #0051B9 100%)",
                  }}
                >
                  Make Your Little One Moneyable
                </a>
              </div>
            </div>
          </div>

          {/* Product Image */}
          <div className="flex justify-center">
            <img
              src="./assets/img/moneySmart.svg"
              alt="Money Smart"
              className="w-full  h-auto rounded-lg transform hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoneyAble;
