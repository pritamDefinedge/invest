import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const FooterBanner: React.FC = () => {
  return (
    <footer className="bg-[rgba(35,33,58,1)] text-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12">
        {/* Definedge Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-600">Definedge</h2>
          <p className="text-gray-400">
            3rd floor, Ambashish, Plot no. 3-4, Lane number 9, Pakharbag, NDA
            Pashan Road, Bavdhan, Pune - 411021.
          </p>
          <div className="space-y-3">
            <a
              href="tel:02061923200"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faPhone} className="text-xl" />
              020-61923200
            </a>
            <a
              href="mailto:info@definedge.com"
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300"
            >
              <i className="fa fa-envelope text-xl"></i> info@definedge.com
            </a>
          </div>
        </div>

        {/* Products Section */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-600">Products</h2>
          <ul className="space-y-3 text-gray-400">
            <li>
              <a
                href="https://www.definedge.com/tradepoint/"
                target="_blank"
                className="hover:text-white transition-colors duration-300"
              >
                TradePoint
              </a>
            </li>
            <li>
              <a
                href="https://www.definedge.com/opstra/"
                target="_blank"
                className="hover:text-white transition-colors duration-300"
              >
                OPSTRA
              </a>
            </li>
            <li>
              <a
                href="https://www.definedge.com/tradepoint-web/"
                target="_blank"
                className="hover:text-white transition-colors duration-300"
              >
                TradePoint Web
              </a>
            </li>
            <li>
              <a
                href="https://www.definedge.com/traders-nest/"
                target="_blank"
                className="hover:text-white transition-colors duration-300"
              >
                Trader's Nest 
              </a>
            </li>
        
            <li>
              <a
                href="https://insight.definedge.com/"
                target="_blank"
                className="hover:text-white transition-colors duration-300"
              >
                Insight
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-600">Quick Links</h2>
          <ul className="space-y-3 text-gray-400">
            <li>
              <a
                href="https://conference.definedge.com/"
                target="_blank"
                className="hover:text-white transition-colors duration-300"
              >
                Conference
              </a>
            </li>
            <li>
              <a
                href="https://www.definedge.com/career/"
                target="_blank"
                className="hover:text-white transition-colors duration-300"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="https://www.definedge.com/event-calendar/"
                className="hover:text-white transition-colors duration-300"
              >
                Events
              </a>
            </li>
          </ul>
        </div>

        {/* Policies Section */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-600">Policies</h2>
          <ul className="space-y-3 text-gray-400">
            <li>
              <a
                href="https://www.definedge.com/privacy-policy/"
                target="_blank"
                className="hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Disclaimer
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Terms &amp; Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Get In Touch Section */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-600">Get In Touch</h2>
          <ul className="space-y-3 text-gray-400">
            <li>
              <a
                href="https://www.definedge.com/contact-us/"
                className="hover:text-white transition-colors duration-300"
              >
                Contact Us
              </a>
            </li>
          </ul>
          <div className="mt-6 flex space-x-6 justify-center">
            <a
              href="https://www.facebook.com/definedge/"
              target="_blank"
              className="text-gray-400 hover:text-amber-300 transition-colors duration-300"
            >
              <img
                src="https://www.definedge.com/wp-content/uploads/2023/07/Facebook.svg"
                alt="Facebook"
                width="24"
                className="transform hover:scale-110 transition-transform duration-300"
              />
            </a>
            <a
              href="https://www.instagram.com/definedge_/"
              target="_blank"
              className="text-gray-400 hover:text-amber-300 transition-colors duration-300"
            >
              <img
                src="https://www.definedge.com/wp-content/uploads/2023/07/Instagram.svg"
                alt="Instagram"
                width="24"
                className="transform hover:scale-110 transition-transform duration-300"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/definedge/mycompany/"
              target="_blank"
              className="text-gray-400 hover:text-amber-300 transition-colors duration-300"
            >
              <img
                src="https://www.definedge.com/wp-content/uploads/2023/07/LinkedIn.svg"
                alt="LinkedIn"
                width="24"
                className="transform hover:scale-110 transition-transform duration-300"
              />
            </a>
            <a
              href="https://twitter.com/Definedge/"
              target="_blank"
              className="text-gray-400 hover:text-amber-300 transition-colors duration-300"
            >
              <img
                src="https://www.definedge.com/wp-content/uploads/2023/07/X.svg"
                alt="Twitter"
                width="24"
                className="transform hover:scale-110 transition-transform duration-300"
              />
            </a>
            <a
              href="https://www.youtube.com/c/DefinedgeSolutions"
              target="_blank"
              className="text-gray-400 hover:text-amber-300 transition-colors duration-300"
            >
              <img
                src="https://www.definedge.com/wp-content/uploads/2023/07/YouTube.svg"
                alt="YouTube"
                width="24"
                className="transform hover:scale-110 transition-transform duration-300"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterBanner;
