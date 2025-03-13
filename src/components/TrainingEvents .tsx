import React from "react";

const events = [
  {
    day: "22",
    month: "MARCH",
    weekday: "SATURDAY",
    title: "Noiseless Funda-Techno Strategies & Momentum Investing",
    duration: "2-DAYS",
    url: "https://www.definedge.com/event/noiseless-funda-techno-strategies-momentum-investing-online/",
  },
  {
    day: "01",
    month: "APRIL",
    weekday: "TUESDAY",
    title: "Online Traders’ Nest",
    duration: "5-DAYS",
    url: "https://www.definedge.com/online-traders-nest-april-2025/",
  },
  {
    day: "10",
    month: "MAY",
    weekday: "SATURDAY",
    title: "3P Strategy (Price, Performance and Participation)",
    duration: "2-DAYS",
    url: "https://www.definedge.com/3p-strategy-price-performance-and-participation-online-definedge-2025/",
  },
  {
    day: "24",
    month: "MAY",
    weekday: "SATURDAY",
    title: "Online Market Pathshala",
    duration: "7-DAYS",
    url: "https://www.definedge.com/online-market-pathshala-2025/",
  },
];

const TrainingEvents = () => {
  return (
    <section className="w-full px-4 sm:px-6 md:px-12 lg:px-20 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
        {events.map((event, index) => (
          <a
            key={index}
            href={event.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div
              className="relative flex flex-row sm:flex-row items-center bg-white shadow-xl rounded-2xl p-2 sm:p-4 lg:p-5 md-p-4 gap-4"
              style={{
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
              }}
            >
              {/* Date Box */}
              <div
                className="flex flex-col items-center justify-center text-white font-bold p-4 rounded-xl min-w-[80px]"
                style={{
                  background:
                    "linear-gradient(136.26deg, #BD5FFF 0%, #BD4F00 44.57%, #B5B8A7 77.46%, #75A0E1 97.89%)",
                }}
              >
                <span className="text-xs sm:text-xs uppercase">{event.weekday}</span>
                <span className="text-2xl sm:text-3xl">{event.day}</span>
                <span className="text-xs sm:text-xs uppercase">{event.month}</span>
              </div>

              {/* Event Details */}
              <div className="flex flex-row flex-1  sm:text-left">
                <h3
                  className="text-xs sm:text-sm md:text-xl lg:text-xl font-bold bg-clip-text text-transparent"
                  style={{
                    background:
                      "linear-gradient(90.92deg, #00644B 0.23%, #4891D1 14.77%, #BE2664 56.43%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {event.title}
                </h3>
              </div>

              {/* Duration Badge */}
              <span
                className="absolute bottom-3 right-3 text-white text-xs sm:text-sm px-3 py-1 rounded-full"
                style={{
                  background:
                    "linear-gradient(180deg, #BF2764 0%, #0051B9 100%)",
                }}
              >
                {event.duration}
              </span>
            </div>
          </a>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <a
          href="https://www.definedge.com/event-calendar/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm md:text-lg font-semibold text-white px-6 py-3 rounded-md"
          style={{
            background: "linear-gradient(180deg, #00D5C5 0%, #0051B9 100%)",
          }}
        >
          Register Now
        </a>
      </div>
    </section>
  );
};

export default TrainingEvents;