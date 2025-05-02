import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/navigation";
import "swiper/css/pagination";

const UpcomingEvents = () => {
  const events = [
    {
      id: 1,
      title: "Financial Freedom Workshop",
      date: "15 Oct 2023",
      location: "New York",
      description: "Master personal finance strategies to build wealth",
      image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
    },
    {
      id: 2,
      title: "Crypto Investment Summit",
      date: "22 Nov 2023",
      location: "London",
      description: "Discover next-gen blockchain opportunities",
      image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
    },
    {
      id: 3,
      title: "Retirement Planning Masterclass",
      date: "05 Dec 2023",
      location: "Tokyo",
      description: "Secure your golden years with expert strategies",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
    },
    {
      id: 4,
      title: "AI Trading Symposium",
      date: "12 Jan 2024",
      location: "Singapore",
      description: "Leverage artificial intelligence in your portfolio",
      image: "https://images.unsplash.com/photo-1677442135136-760c813a743d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: `${Math.random() * 10 + 2}px`,
              height: `${Math.random() * 10 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Upcoming <span className="text-blue-400">Events</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Join our exclusive financial events to accelerate your investment journey
          </p>
        </div>

        <Swiper
          grabCursor={true}
          effect={"creative"}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{
            clickable: true,
            el: '.swiper-pagination',
            type: 'bullets',
          }}
          modules={[EffectCreative, Autoplay, Navigation, Pagination]}
          className="h-[500px] w-full"
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 1.2,
            },
          }}
        >
          {events.map((event) => (
            <SwiperSlide key={event.id} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10 rounded-2xl" />
              <img 
                src={event.image} 
                alt={event.title}
                className="absolute inset-0 w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
              />
              
              <div className="relative z-20 h-full flex flex-col justify-end p-8 text-white">
                <div className="mb-4 flex items-center space-x-4">
                  <span className="bg-blue-500/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {event.date}
                  </span>
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {event.location}
                  </span>
                </div>
                
                <h3 className="text-3xl font-bold mb-3 group-hover:text-blue-300 transition-colors duration-300">
                  {event.title}
                </h3>
                <p className="text-gray-300 mb-6 max-w-lg">{event.description}</p>
                
                <button className="self-start bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform group-hover:translate-x-2 group-hover:shadow-xl group-hover:shadow-blue-500/20">
                  Register Now →
                </button>
              </div>
            </SwiperSlide>
          ))}

          {/* Custom Navigation */}
          <div className="swiper-button-next !text-white !right-4 after:!text-2xl" />
          <div className="swiper-button-prev !text-white !left-4 after:!text-2xl" />
          
          {/* Custom Pagination */}
          <div className="swiper-pagination !bottom-4" />
        </Swiper>
      </div>

     
    </section>
  );
};

export default UpcomingEvents;