import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Ensure AOS CSS is imported

const HeroBanner: React.FC = () => {
  // Initialize AOS locally to ensure animations work
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="hero-section"
      className="w-full relative overflow-hidden flex items-center justify-center min-h-screen bg-white"
      style={{ backgroundImage: "url('./assets/img/heroBack.svg')" }}
    >
      {/* Left Hero Image (Bottom Left Corner) */}
      <div
        className="absolute -top-12 left-0 w-1/4 h-1/4 bg-no-repeat bg-contain bg-left-bottom z-10 hidden lg:block "
        style={{ backgroundImage: "url('./assets/img/top-left.svg')" }}
      ></div>

      {/* Right Hero Image (Top Right Corner) */}
      <div
        className="absolute -top-12 -right-20 w-1/4 h-1/4 bg-no-repeat bg-contain bg-left-bottom z-10 hidden lg:block "
        style={{ backgroundImage: "url('./assets/img/top-right.svg')" }}
      ></div>

      {/* Bottom Left Image */}
      <div
        className="absolute bottom-0 left-0 w-[50%] h-1/2 bg-no-repeat bg-contain bg-left-bottom z-10 hidden lg:block "
        style={{ backgroundImage: "url('./assets/img/ladki.svg')" }}
      ></div>

      <div
        className="absolute bottom-0 right-0 w-[70%] h-1/2 bg-no-repeat bg-contain bg-right-bottom z-10 hidden lg:block "
        style={{ backgroundImage: "url('./assets/img/ladka2.svg')" }}
      ></div>

      {/* Main Content */}
      <div className="container mx-auto text-center z-50 relative py-12 md:py-24 px-4">
        <div className="flex justify-center items-center">
          <div
            className="w-full max-w-2xl"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <div className="mb-6 md:mb-8">
              <a
                href="https://dashboard.definedge.com/buy-product"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="./assets/img/colorSaving.svg"
                  alt="Referral Program"
                  className="max-w-full h-auto mx-auto w-[70%]"
                />
              </a>
            </div>
            <p className="text-base font-bold text-blue-800 ">
              This Holi Save 20% on the complete Definedge Product
              Subscriptions, Online Training Programs, Expert-Led Gurukul
              Courses and MoneyAble.
            </p>
            <h1
              className="p-4 px-4 mt-6 text-blue-900 font-bold inline-block text-xl sm:text-xl md:text-2xl border-2 rounded-xl"
              style={{
                background: "#fff",
                borderRadius: "10px",
                borderImageSource:
                  "linear-gradient(96.66deg, #50E6C1, #60ABED, #985BE7, #F057A2, #FBA2C6, #FFFAEA, #FFC169)",
                borderImageSlice: 1,
              }}
            >
              Use Coupon Code: <span className="text-purple-800">HOLI20</span>
            </h1>

            <br />
            <span className="text-xs font-semibold">
              *This coupon code cannot be applied along with another coupon 
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
