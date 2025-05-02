import React from "react";
import pathsalaImg from "../../assets/pathsala.png";
import traderNestImg from "../../assets/tradernest.png";

const UpcomingEvents = () => {
  const events = [
    {
      id: 1,
      title: "ONLINE MARKET पाठशाला",
      image: pathsalaImg,
      url: "https://www.definedge.com/online-market-pathshala-2025/",
      date: "May 15, 2025",
      description:
        "Master the art of online trading with our comprehensive course",
    },
    {
      id: 2,
      title: "Online Traders NEST",
      image: traderNestImg,
      url: "https://www.definedge.com/online-traders-nest-april-2025/",
      date: "June 2, 2025",
      description:
        "Join our exclusive community of traders and elevate your skills",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] animate-float"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-[120px] animate-float-delay"></div>
      <div className="absolute top-1/3 left-1/4 w-40 h-40 bg-amber-500/5 rounded-full blur-[80px] animate-float-reverse"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block mb-3 text-sm font-semibold text-blue-400 bg-blue-900/30 px-4 py-1 rounded-full">
            Don't Miss Out
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Upcoming Events
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Elevate your trading skills with our exclusive events
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {events.map((event) => (
            <div
              key={event.id}
              className="group relative h-full rounded-2xl overflow-hidden"
            >
              {/* Glow effect container */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Main card */}
              <a
                href={event.url}
                className="relative block h-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:border-blue-400/30 hover:shadow-blue-500/20"
              >
                {/* Image with overlay */}
                <div className="relative h-48 overflow-hidden">
                <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

                  {/* Date badge */}
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                    {event.date}
                  </div>

                  {/* Coming soon badge */}
                  <div className="absolute top-4 right-4 bg-gray-900/80 text-white px-3 py-1 rounded-full text-xs font-medium border border-blue-400/30 flex items-center">
                    <span className="relative flex h-2 w-2 mr-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    Coming Soon
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                    {event.description}
                  </p>

                  <div className="flex justify-between items-center mt-6">
                    <span className="inline-flex items-center text-blue-400 text-sm font-medium">
                      Learn more
                      <svg
                        className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>
                    </span>

                    <div className="flex space-x-2">
                      <span className="text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded">
                        Online
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

      
      </div>
    </section>
  );
};

export default UpcomingEvents;
