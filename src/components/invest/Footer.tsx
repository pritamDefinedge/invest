import React from "react";

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-[rgba(35,33,58,1)] shadow-sm text-white text-base">
      <div className="bg-[rgba(35,33,58,1)] text-center py-4">
        <div className="container mx-auto flex flex-col items-center justify-center px-8">
          <div className="text-gray-200 text-lg text-center">
            &copy; 2025
            <strong>
              <span className="text-amber-300"> Definedge </span>
            </strong>
            | All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
