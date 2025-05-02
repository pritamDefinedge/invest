import React from "react";
import prashantImg from "../../assets/prashant.svg";
import rajuImg from "../../assets/raju.svg";

const Mentors: React.FC = () => {
  return (
    <section className="bg-[#18152e] text-white py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center mb-16">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#FFD9D9] mb-4">
          Meet Your Mentors
        </h2>
        <p className="text-gray-100 text-3xl sm:text-4xl md:text-5xl font-semibold leading-snug">
          Learn from Market Experts
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
            <a
              href="https://twitter.com/Prashantshah267"
              target="_blank"
              rel="noopener noreferrer"
              className=" mr-2 inline-flex items-center text-gray-50 hover:underline"
            >
              <svg
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
              Mr. Prashant Shah is the Co-founder and CEO of Definedge and the
              first Indian to earn the prestigious MFTA designation from IFTA.
              He also holds CMT, CFTe, and MSTA certifications, making him one
              of the most highly qualified market technicians in the country.
            </p>
            <p className="text-gray-300 text-base sm:text-base md:text-base leading-relaxed">
              Widely respected for his research, Prashant is the author of five
              well-regarded books, including his latest Master Momentum
              Investing & Trading Strategies. His earlier works, such as
              Profitable Trading with Renko, Point & Figure, Relative Strength
              and Breadth Analysis, and more, have helped traders simplify
              complex strategies.
            </p>
            <p className="text-gray-300 text-base sm:text-base md:text-base leading-relaxed">
              Prashant is also the mind behind the Noiseless Trading approach
              and several practical tools used by modern traders. His mission is
              to empower traders with structured, independent thinking, helping
              them move away from noise-driven decisions toward a disciplined,
              rule-based approach.
            </p>
          </div>
        </div>
      </div>

      {/* Mentor: Raju Ranjan */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-10">
          {/* Image */}
          <div className="w-full md:w-3/12">
            <img
              src={rajuImg}
              alt="Raju Ranjan"
              className="w-full h-auto object-cover rounded-xl shadow-2xl"
            />
          </div>

          {/* Content */}
          <div className="w-full md:w-9/12 space-y-6">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
              Raju Ranjan
            </h3>
            <a
              href="https://twitter.com/rajran06"
              target="_blank"
              rel="noopener noreferrer"
              className=" mr-2 inline-flex items-center text-gray-50 hover:underline"
            >
              <svg
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
              @rajran06
            </a>
            <p className="text-gray-300 text-base sm:text-base md:text-base leading-relaxed">
              Raju Ranjan is known for his structured approach to trading. With
              years of hands-on experience in markets, he specializes in
              momentum-based trading using rule-based systems. Raju brings
              clarity to complex market behaviour and empowers traders to filter
              strong opportunities through relative strength, volatility and
              breadth analysis.
            </p>
            <p className="text-gray-300 text-base sm:text-base md:text-base leading-relaxed">
              His sessions are known for bridging the gap between theory and
              execution with a focus on simulations and real-world trade setups.
              He believes in helping traders become independent and objective in
              their decision-making.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentors;
