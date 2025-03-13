import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const FooterBanner: React.FC = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section
      id="footer-banner"
      className="w-full relative overflow-hidden flex items-center py-10 md:py-20 px-4"
      style={{
        background:
          "linear-gradient(99.35deg, #A2710A 9%, #A40F8A 52%, #0D7A85 100%)",
      }}
    >
      <div className="container mx-auto text-center z-50">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center justify-center">
          <div
            className="md:col-span-8 md:col-start-3 px-4"
            data-aos="zoom-out"
          >
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-white mb-6">
              Need Help? We are Here for You!
            </h2>

            {/* Contact Details */}
            <div className="flex flex-wrap items-center justify-center text-sm sm:text-lg md:text-xl text-white gap-4 md:gap-8 py-4">
              <p className="flex items-center">
                Email us at
                <a
                  href="mailto:info@definedge.com"
                  className="text-white font-semibold ml-1 hover:underline"
                >
                  info@definedge.com
                </a>
              </p>
              <p className="flex items-center">
                Call us at
                <a
                  href="tel:020-61923200"
                  className="text-white font-semibold ml-1 hover:underline"
                >
                  020-61923200
                </a>
              </p>
            </div>

            {/* Availability */}
            <p className="text-sm sm:text-lg md:text-xl text-white mb-4">
              Available: 9 AM – 6 PM (Mon-Fri) & 10 AM – 3 PM (Sat)
            </p>

            {/* Holi Offer */}
            <p className="text-xs sm:text-sm md:text-base text-gray-100 font-medium">
              This Holi, add color to your trading & investment journey with
              Definedge and enjoy 20% savings on everything you need to trade,
              learn, and grow. Don’t miss out – offer ends on 16th March 2025!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterBanner;
