import React from "react";

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-[#175CC4] text-white  text-base ">
      <div className="bg-[#175CC4] text-center  py-4">
        <div className="container mx-auto flex px-8 flex-col md:flex-row justify-center md:justify-between items-center">
          <div className="flex flex-col px-8 items-center md:items-start">
            <div className="text-gray-200 text-lg">
              &copy; 2023
              <strong>
                <span className="text-amber-300"> Definedge </span>
              </strong>
              | All Rights Reserved
            </div>
          </div>

          <div className="order-first md:order-last mb-3 md:mb-0 flex space-x-4">
            <a
              href="https://twitter.com/Definedge"
              className="flex items-center justify-center w-10 h-10 rounded-md border border-[#276ac5] text-gray-300 hover:text-white hover:border-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-twitter text-base"></i>
            </a>
            <a
              href="https://www.facebook.com/DefinedgeSecurities/"
              className="flex items-center justify-center w-10 h-10 rounded-md border border-[#276ac5] text-gray-300 hover:text-white hover:border-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-facebook text-base"></i>
            </a>
            <a
              href="https://www.instagram.com/Definedge_/"
              className="flex items-center justify-center w-10 h-10 rounded-md border border-[#276ac5] text-gray-300 hover:text-white hover:border-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-instagram text-base"></i>
            </a>
            <a
              href="https://in.linkedin.com/company/definedge"
              className="flex items-center justify-center w-10 h-10 rounded-md border border-[#276ac5] text-gray-300 hover:text-white hover:border-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-linkedin text-base"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
