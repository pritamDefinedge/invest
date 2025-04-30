import React from "react";
import Logo from "../../assets/definedge_logo_light.svg";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-black text-white border-b border-gray-700 py-3 px-4 sm:px-10">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto w-full">
        {/* Logo Left */}
        <a href="#">
          <img src={Logo} alt="logo" className="w-[134px]" />
        </a>

        {/* Enroll Button Right */}
        <a
          href="#formId"
          className="bg-[rgba(255,217,217,1)] hover:bg-[rgba(255,217,217,0.9)] text-black px-5 py-2 rounded-md text-sm font-medium transition-colors"
        >
          Enroll
        </a>
      </div>
    </header>
  );
};

export default Header;
