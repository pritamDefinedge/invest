import React from "react";
import Background from "../assets/background.png";

const CourseDuration: React.FC = () => {
  return (
    <section
      className="relative z-10 overflow-hidden bg-black py-16 px-8 shine shine-anim"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundPosition: "50%",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Title */}
        <h4 className="text-3xl font-semibold text-gray-100 mb-4">
          Course Duration
        </h4>

        {/* Course Details */}
        <p className="text-xl text-gray-100">2 Days with Lifetime Support</p>
      </div>
    </section>
  );
};

export default CourseDuration;
