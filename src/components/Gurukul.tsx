import React from "react";

const Gurukul: React.FC = () => {
  return (
    <section className="relative w-full sm:px-0 py-32 pb-16  overflow-hidden">
      {/* Background Overlay */}
      <div
        className="absolute inset-0 left-1/2 transform -translate-x-1/2 h-full bg-cover bg-center opacity-100"
        style={{
          width: "100%", // Default width for small devices
          backgroundImage: "url('./assets/img/Gurukul_background.svg')",
        }}
      ></div>

      {/* Content Container */}
      <div className="container mx-auto relative z-50  px-4 flex flex-col items-center text-center">
        {/* Title Section */}
        <div className="">
          <div className="flex flex-col sm:flex-row  md:flex-row items-center space-x-3">
            <img
              src="./assets/img/Gurukul.svg"
              alt="Gurukul"
              className=" w-auto"
              loading="lazy"
            />
            <h1
              className="font-bold text-2xl sm:text-3xl md:text-4xl p-2"
              style={{
                backgroundImage: `linear-gradient(92.35deg, #04ABFF 3.03%, #D86967 27.52%, 
                      #CF617E 52.01%, #1048FF 75.02%, #6B84BC 98.03%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Courses By Definedge
            </h1>
          </div>

          {/* Subtitle */}
          <h4
            className="font-bold text-lg sm:text-xl md:text-2xl tracking-wide py-4"
            style={{
              backgroundImage:
                "linear-gradient(180deg, #105CFF 0%, #0A3799 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Master the Market at Your Own Pace
          </h4>
        </div>

        {/* Instructor Images with Enhanced Hover Effect */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-center items-center py-8">
          {[
            { src: "prasant.svg", name: "Become a Noiseless Trader", url: "https://gurukul.definedgesecurities.com/courses/become-a-noiseless-trader/" },
            {
              src: "Abhijit.svg",
              name: "A Different Way of Looking at Options",
              url:"https://gurukul.definedgesecurities.com/courses/trading-options-based-on-options-charts/"
            },
            {
              src: "prasant2.svg",
              name: "Turn chaotic markets into trading opportunity",
              url:"https://gurukul.definedgesecurities.com/courses/profitable-trading-with-renko-charts/"
            },
            {
              src: "brijsh.svg",
              name: "Master Harmonic Trading Patterns Today!",
              url:"https://gurukul.definedgesecurities.com/courses/harmonic-trading-patterns-simplified/"
            },
            {
              src: "prasant3.svg",
              name: "Master Options Trading from Scratch!",
              url:"https://gurukul.definedgesecurities.com/courses/learn-trading-options-from-basics/"
            },
            {
              src: "brijsh2.svg",
              name: "Discover the aspects of Candlestick Patterns",
              url:"https://gurukul.definedgesecurities.com/courses/candlestick-patterns-demystified-with-scanners/"
            },
          ].map((img, index) => (
            <a href={img.url} target="_blank" rel="noopener noreferrer">
              <div
                key={index}
                className="relative group overflow-hidden rounded-xl shadow-lg"
              >
                {/* Image with Scale Effect */}
                <img
                  src={`./assets/img/${img.src}`}
                  alt={img.name}
                  className="h-auto w-full rounded-xl transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:blur-sm"
                  loading="lazy"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out rounded-xl">
                  <p className="text-white font-bold text-sm md:text-base px-4 text-center">
                    {img.name}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Description */}
        <div className="w-full sm:w-3/4 md:w-1/2 px-4">
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            A self-paced course for traders to learn technical analysis,
            strategy building, and market execution while staying disciplined.
          </p>
        </div>

        {/* Register Button */}
        <div className="flex justify-center mt-6">
          <a
            href="https://gurukul.definedgesecurities.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm md:text-lg font-semibold text-white px-6 py-3 rounded-md transition-all duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(180deg, #00D5C5 0%, #0051B9 100%)",
            }}
          >
            Start Learning Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gurukul;
