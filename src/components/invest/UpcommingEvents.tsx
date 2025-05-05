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
      description: "Master the art of online trading with our comprehensive course",
    },
    {
      id: 2,
      title: "Online Traders NEST",
      image: traderNestImg,
      url: "https://www.definedge.com/online-traders-nest-april-2025/",
      date: "June 2, 2025",
      description: "Join our exclusive community of traders and elevate your skills",
    },
    {
      id: 3,
      title: "Online Traders NEST",
      image: traderNestImg,
      url: "https://www.definedge.com/online-traders-nest-april-2025/",
      date: "June 2, 2025",
      description: "Join our exclusive community of traders and elevate your skills",
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] animate-[float_15s_ease-in-out_infinite]" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-[120px] animate-[float_18s_ease-in-out_infinite]" />
        <div className="absolute top-1/3 left-1/4 w-40 h-40 bg-amber-500/5 rounded-full blur-[80px] animate-[float_12s_ease-in-out_infinite_reverse]" />
        <div className="absolute inset-0 opacity-5 bg-[length:40px_40px] bg-[linear-gradient(to_right,gray_1px,transparent_1px),linear-gradient(to_bottom,gray_1px,transparent_1px)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block mb-3 text-sm font-semibold text-blue-400 bg-blue-900/30 px-4 py-1 rounded-full backdrop-blur-sm border border-blue-500/20">
            Don't Miss Out
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
              Upcoming Events
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Elevate your trading skills with our exclusive events
          </p>
        </div>

        {/* Events grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event) => (
            <a
              key={event.id}
              href={event.url}
              className="block group bg-gray-800/50 border border-gray-700/50 rounded-2xl overflow-hidden shadow-lg hover:border-blue-400/30 transition-all"
            >
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium shadow backdrop-blur-sm">
                  {event.date}
                </div>
                <div className="absolute top-4 right-4 flex items-center space-x-1 bg-gray-900/80 text-white px-3 py-1 rounded-full text-xs font-medium border border-blue-400/30">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                  <span>Coming Soon</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {event.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                  {event.description}
                </p>
             
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center text-blue-400 text-sm font-medium group-hover:text-blue-300 transition">
                    Learn more
                    <svg
                      className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                  <div className="w-8 h-8 rounded-full bg-blue-600/30 flex items-center justify-center group-hover:bg-blue-600/50 transition">
                    <svg
                      className="w-4 h-4 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-16">
          <a
            href="https://www.definedge.com/event-calendar/"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-full transition hover:from-blue-700 hover:to-purple-700 hover:shadow-lg hover:shadow-blue-500/30"
          >
            View All Events
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
