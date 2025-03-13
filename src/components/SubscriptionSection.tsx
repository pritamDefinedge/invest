import React from "react";

const SubscriptionSection: React.FC = () => {
  return (
    <section className="w-full relative overflow-hidden py-16 px-0 md:px-28 lg:px-52 bg-white ">
      {/* Main Container */}
      <div className="container mx-auto relative z-10 px-4 sm:px-0 md:px-12 lg:px-16">
        {/* Background Images */}

        {/* Subscription Header Pill */}
        <div
          className="absolute z-10 -top-4 left-1/2 transform -translate-x-1/2 px-2 md:px-4 lg:px-4 sm:px-6 py-2 text-white text-[8px] sm:text-sm md:text-base lg:text-lg font-bold rounded-full border-2 border-[#ffcc00] shadow-[0_0_0_6px_#fff]"
          style={{
            background:
              "linear-gradient(194.36deg, #A52944 9.91%, #891279 67.19%)",
          }}
        >
          Already have an active subscription?
        </div>

        <div
          className="absolute -bottom-12 sm:-bottom-20 md:-bottom-24 left-0 sm:-left-10 md:-left-8 w-24 sm:w-32 md:w-48 lg:w-56 h-24 sm:h-32 md:h-48 lg:h-56 bg-no-repeat bg-contain"
          style={{ backgroundImage: "url('./assets/img/HOLI.svg')" }}
        ></div>
        <div
          className="absolute -top-12 sm:-top-20 md:-top-24 right-0 sm:-right-10 md:-right-20 w-24 sm:w-32 md:w-48 lg:w-72 h-24 sm:h-32 md:h-48 lg:h-64 bg-no-repeat bg-contain"
          style={{ backgroundImage: "url('./assets/img/HOLI.svg')" }}
        ></div>
        {/* Subscription Content */}
        <div
          className="relative flex flex-col md:flex-row items-center justify-between py-12 p-6 sm:p-8 md:p-10 lg:p-12 rounded-xl shadow-lg"
          style={{
            background: "linear-gradient(180deg, #540045 0%, #012D93 100%)",
          }}
        >
          <div className="flex flex-col md:flex-row w-full justify-between items-center gap-2">
            {/* Left Side - Title & Heading */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1
                className="text-4xl text-center sm:text-3xl md:text-6xl lg:text-6xl font-bold bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, #FFA00F 0%, #996009 50%), linear-gradient(90deg, #FFFF00 0%, #FF00FF 100%)",
                  backgroundBlendMode: "overlay",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                No problem!
              </h1>
            </div>

            {/* Right Side - Description */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <p className="text-white text-xs sm:text-sm md:text-base p-4 sm:p-0 md:p-4 lg:p-4 lg:text-lg leading-relaxed">
                Your new subscription will automatically begin after your
                current one expires, ensuring uninterrupted access.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionSection;
