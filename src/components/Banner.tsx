import React, { lazy, Suspense } from "react";
import bannerSvg from "../assets/banner.svg"; // Import as a static file

const Banner: React.FC = () => {
  return (
    <section className="relative">
      {/* Content - Heading and Text */}
      <div className="text-center text-black bg-opacity-50 py-12">
        <h4 className="text-2xl md:text-2xl mx-auto font-semibold mb-4">
          Get Ready for a Mega-Training Event by Definedge on 3P Strategy (
          Price, Performance, and Participation)
        </h4>
      </div>

      {/* Background SVG - 80% width and centered */}
      <div className="w-3/4 mx-auto bg-cover bg-center h-[500px] relative overflow-hidden mt-0">
        <Suspense
          fallback={<div className="w-full h-full bg-gray-300 animate-pulse" />}
        >
          <img
            src={bannerSvg}
            alt="Banner"
            className="w-full h-full object-cover"
          />
        </Suspense>
      </div>
    </section>
  );
};

export default Banner;
