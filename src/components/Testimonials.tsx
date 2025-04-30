import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const TestimonialSlider = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Parent",
      quote:
        "It was a very good experience  nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Educator",
      quote:
        "It was a very good experience  nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 3,
      name: "Priya Patel",
      role: "Student",
      quote:
        "It was a very good experience  nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.",
      rating: 4,
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      id: 4,
      name: "David Wilson",
      role: "Financial Advisor",
      quote:
        "It was a very good experience  nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    {
      id: 5,
      name: "Emma Rodriguez",
      role: "Parent",
      quote:
        "It was a very good experience  nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/63.jpg",
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-[#18152e]">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">
            Testimonials
          </h2>
        </div>

        <div className="relative px-2 sm:px-0">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            centeredSlides={true}
            loop={true}
            speed={800}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".testimonial-next",
              prevEl: ".testimonial-prev",
            }}
            pagination={{
              clickable: true,
              el: ".testimonial-pagination",
              type: "bullets", 
              bulletClass: "swiper-pagination-bullet", 
              bulletActiveClass: "swiper-pagination-bullet-active", 
            }}
            modules={[Navigation, Pagination, Autoplay]}
            breakpoints={{
              640: {
                slidesPerView: 1.2,
                spaceBetween: 24,
              },
              768: {
                slidesPerView: 1.5,
                spaceBetween: 28,
              },
              1024: {
                slidesPerView: 2.3,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 32,
              },
            }}
            className="testimonial-swiper"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                {({ isActive }) => (
                  <div
                    className={`h-full px-2 sm:px-4 transition-all duration-500 ${
                      isActive ? "py-0" : "py-6 md:py-8"
                    }`}
                  >
                    <div
                      className={`rounded-xl md:rounded-2xl p-6 md:p-8 relative overflow-hidden transition-all duration-500 ${
                        isActive
                          ? "h-full min-h-[380px] md:min-h-[420px] shadow-2xl border-t-4 border-purple-500 bg-[rgba(35,33,58,1)]"
                          : "h-full min-h-[340px] md:min-h-[360px] shadow-lg opacity-90 bg-[rgba(35,33,58,1)]"
                      }`}
                    >
                      <div className="relative z-10 h-full flex flex-col">
                        <div className="flex items-center mb-4">
                          <div
                            className={`relative transition-all duration-500 ${
                              isActive
                                ? "ring-3 md:ring-4 w-14 h-14 md:w-20 md:h-20"
                                : "ring-1 md:ring-2 ring-gray-600 w-12 h-12 md:w-16 md:h-16"
                            } rounded-full p-0.5 md:p-1`}
                          >
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="w-full h-full rounded-full object-cover"
                            />
                          </div>
                          <div className="ml-3 md:ml-4">
                            <h4
                              className={`font-bold transition-all duration-500 ${
                                isActive
                                  ? "text-xl md:text-2xl text-white"
                                  : "text-lg md:text-lg text-gray-300"
                              }`}
                            >
                              {testimonial.name}
                            </h4>
                            <div className="flex items-center flex-wrap">
                              <span
                                className={`transition-all duration-500  ${
                                  isActive
                                    ? "text-purple-300 text-xs md:text-sm"
                                    : "text-gray-500 text-xs"
                                }`}
                              >
                                {testimonial.role}
                              </span>
                              <div className="ml-2 md:ml-3">
                                {[...Array(5)].map((_, i) => (
                                  <svg
                                    key={i}
                                    className={`inline transition-all duration-500 ${
                                      i < testimonial.rating
                                        ? "text-yellow-400"
                                        : "text-gray-700"
                                    } ${
                                      isActive
                                        ? "w-4 h-4 md:w-5 md:h-5"
                                        : "w-3 h-3 md:w-4 md:h-4"
                                    }`}
                                    width="15"
                                    height="15"
                                    viewBox="0 0 15 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M7.5 1.25L9.43125 5.1625L13.75 5.79375L10.625 8.8375L11.3625 13.1375L7.5 11.1062L3.6375 13.1375L4.375 8.8375L1.25 5.79375L5.56875 5.1625L7.5 1.25Z"
                                      fill={
                                        i < testimonial.rating
                                          ? "#FFA033"
                                          : "#gray"
                                      }
                                      stroke={
                                        i < testimonial.rating
                                          ? "#FFA033"
                                          : "#gray"
                                      }
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    />
                                  </svg>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                        <p
                          className={`italic transition-all duration-500 flex-grow mt-3 md:mt-4 ${
                            isActive
                              ? "text-gray-200 text-base md:text-base"
                              : "text-gray-400 text-sm md:text-sm"
                          }`}
                        >
                          {testimonial.quote}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation - Hidden on mobile */}
          <button className="testimonial-prev absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-gray-800 rounded-full p-2 md:p-3 shadow-xl hover:bg-purple-700 transition-all duration-300 hidden sm:block">
            <svg
              className="w-5 h-5 md:w-6 md:h-6 text-purple-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button className="testimonial-next absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-gray-800 rounded-full p-2 md:p-3 shadow-xl hover:bg-purple-700 transition-all duration-300 hidden sm:block">
            <svg
              className="w-5 h-5 md:w-6 md:h-6 text-purple-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Pagination */}
          <div className="testimonial-pagination text-center mt-6"></div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
