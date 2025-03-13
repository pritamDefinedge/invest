import React from "react";

const Program: React.FC = () => {
  return (
    <section className="w-full relative overflow-hidden  min-h-[500px] md:min-h-[450px]">
      <div className="container mx-auto relative z-50  px-4">
        <div className="flex flex-col items-center text-center">
        <div className="text-center mb-12">
          <p
            className="text-base sm:text-lg md:text-xl tracking-widest font-bold mb-4 p-2 bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(180deg, #105CFF 0%, #0A3799 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
              ONLINE TRAINING PROGRAMS
          </p>

          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 p-2"
            style={{
              backgroundImage: `linear-gradient(92.35deg, #04ABFF 3.03%, #D86967 27.52%, 
                #CF617E 52.01%, #1048FF 75.02%, #6B84BC 98.03%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Learn, Strategize & Trade With Market Veterans!
          </h1>

          <h6 className="text-sm sm:text-base md:text-lg lg:text-xl font-medium">
          Get Ready For All Market Conditions, Mark your calendar and enroll
          in our events.
          </h6>
        </div>

        

          {/* Image */}
          <div className="relative w-full max-w-full">
            {/* Image Wrapper */}
            <div className="relative">
              <img
                src="./assets/img/program.svg"
                alt="program"
                className="max-w-full h-auto"
              />

              {/* Gradient Overlay */}
              <div
                className="absolute bottom-0 left-0 w-full h-1/2"
                style={{
                  background:
                    "linear-gradient(179.83deg, rgba(217, 217, 217, 0) 0.14%, #FFFFFF 66.33%)",
                }}
              ></div>
            </div>

            {/* Text Below */}
            <p className="md:absolute lg:absolute bottom-0 left-0 w-full text-sm sm:text-base md:text-lg lg:text-xl text-center ">
              Learn actionable strategies, directly from industry experts and
              apply insights in real-time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Program;
