import React, { useState } from "react";
import MomentumImg from "../../assets/master_moment_invest.png";

const MasterMomentum: React.FC = () => {
  const [showSharePopup, setShowSharePopup] = useState(false);
  const [copied, setCopied] = useState(false);
  const pageUrl = typeof window !== "undefined" ? window.location.href : "";

  const shareOnPlatform = (platform: string) => {
    let shareUrl = "";
    const title = "Check out this amazing free online webinar on";
    const text = "Momentum Investing";

    switch (platform) {
      case "whatsapp":
        shareUrl = `https://wa.me/?text=${encodeURIComponent(
          `${title} ${text} ${pageUrl}`
        )}`;
        break;
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          pageUrl
        )}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
          `${title} ${text} ${pageUrl}`
        )}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          `${title} ${text} ${pageUrl}`
        )}`;
        break;

      default:
        break;
    }

    window.open(shareUrl, "_blank", "noopener,noreferrer");
    setShowSharePopup(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(pageUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-12 md:py-16 bg-[#18152e] relative">
      {/* Share Popup */}
      {showSharePopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#1e1a3a] rounded-xl p-6 max-w-md w-full border border-[#2d2755] shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-white">
                Share this course
              </h3>
              <button
                onClick={() => setShowSharePopup(false)}
                className="text-gray-400 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="grid grid-cols-4 gap-4 mb-6">
              <button
                onClick={() => shareOnPlatform("whatsapp")}
                className="flex flex-col items-center p-3 rounded-lg bg-[#2d2755] hover:bg-[#3a3465] transition-colors"
              >
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="48px"
                    height="48px"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  >
                    <path
                      fill="#fff"
                      d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"
                    />
                    <path
                      fill="#fff"
                      d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"
                    />
                    <path
                      fill="#cfd8dc"
                      d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"
                    />
                    <path
                      fill="#40c351"
                      d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"
                    />
                    <path
                      fill="#fff"
                      fill-rule="evenodd"
                      d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-xs text-white mt-1">WhatsApp</span>
              </button>

              <button
                onClick={() => shareOnPlatform("facebook")}
                className="flex flex-col items-center p-3 rounded-lg bg-[#2d2755] hover:bg-[#3a3465] transition-colors"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-2">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </div>
                <span className="text-xs text-white mt-1">Facebook</span>
              </button>

              <button
                onClick={() => shareOnPlatform("twitter")}
                className="flex flex-col items-center p-3 rounded-lg bg-[#2d2755] hover:bg-[#3a3465] transition-colors"
              >
                <div className="w-12 h-12  rounded-full flex items-center justify-center mb-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    width="50px"
                    height="50px"
                  >
                    <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z" />
                  </svg>
                </div>
                <span className="text-xs text-white mt-1">Twitter</span>
              </button>

              <button
                onClick={() => shareOnPlatform("linkedin")}
                className="flex flex-col items-center p-3 rounded-lg bg-[#2d2755] hover:bg-[#3a3465] transition-colors"
              >
                <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center mb-2">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <span className="text-xs text-white mt-1">LinkedIn</span>
              </button>
            </div>

            <div className="flex">
              <input
                type="text"
                value={pageUrl}
                readOnly
                className="flex-grow bg-[#2d2755] text-white p-3 rounded-l-lg border border-r-0 border-[#3a3465] focus:outline-none"
              />
              <button
                onClick={copyToClipboard}
                className="bg-[#5928E5] hover:bg-[#4a1fd1] text-white px-4 rounded-r-lg transition-colors"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section with Title and Description */}
        <div className="flex flex-col justify-center items-center text-center mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-4 md:mb-0">
          Join Exclusive Webinar Start with <span className="text-yellow-400">FREE</span>  Learning
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
          Before you explore and invest with Momentify, start with our exclusive webinar. 
          </p>
          <p className="text-gray-300 max-w-2xl mx-auto">
          Understand momentum, how your portfolio can grow with momentum investing and how you can invest with Momentify   
          </p>
        </div>

        {/* Share Button */}
        <div className="flex flex-col md:flex-row justify-end items-end mb-4">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setShowSharePopup(true)}
              className="p-2 text-gray-400 hover:text-white rounded-full transition duration-300"
            >
              <svg
                width="27"
                height="31"
                viewBox="0 0 27 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_28_113)">
                  <path
                    d="M9.92915 13.6554C10.3223 14.8331 10.3469 16.179 9.92495 17.3527L17.8184 22.095C20.0403 18.8982 24.6874 19.3245 26.4015 22.8768C28.4817 27.1876 24.8069 32.0878 20.4754 30.7886C17.6558 29.9431 16.0329 26.5858 17.0664 23.5975L9.14653 18.8501C8.67899 19.641 7.78053 20.3507 6.9661 20.6815C2.70847 22.4121 -1.38712 17.7621 0.451215 13.2369C1.70858 10.1421 5.2376 9.00545 7.88016 10.8284C8.40591 11.191 8.74561 11.6908 9.22395 12.0801L16.9488 7.44375L17.0064 7.31767C15.746 3.0771 19.2534 -0.98669 23.262 0.215616C26.5023 1.18786 28.001 5.33289 26.2149 8.44524C24.3369 11.7181 20.0175 12.006 17.8484 8.93461L17.7668 8.91186L9.92855 13.6561L9.92915 13.6554ZM21.4363 1.77536C17.07 2.28943 17.5333 9.6066 22.0785 9.35899C26.6944 9.10748 26.2923 1.20411 21.4363 1.77536ZM4.69144 11.7188C0.561647 12.2049 0.690684 18.9781 4.85469 19.3024C9.85113 19.691 9.82052 11.115 4.69144 11.7188ZM21.5569 21.6622C16.9896 22.0904 17.543 29.676 22.1979 29.2451C26.7256 28.8266 26.1824 21.228 21.5569 21.6622Z"
                    fill="currentColor"
                  />
                </g>
              </svg>
            </button>
          </div>
        </div>

        {/* Main Card */}
        <div className="bg-black rounded-xl overflow-hidden shadow-2xl border border-gray-800">
          <div className="flex flex-col lg:flex-row">
            {/* Image Section (70%) */}
            <div className="lg:w-7/12 relative overflow-hidden">
              <img
                src={MomentumImg}
                alt="Master Momentum Trading Course"
                className="w-full h-full  transition duration-500 hover:scale-105"
              />
            </div>

            {/* Content Section (30%) */}
            <div className="lg:w-5/12 relative border-l border-white/10 p-6 md:p-8 overflow-hidden bg-gradient-to-b from-[#00000000] via-[#5928E54D] via-30%">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#0e0e0e] to-[#000000] opacity-80 pointer-events-none z-0" />

              {/* Main Content */}
              <div className="relative z-10 space-y-8 leading-relaxed">
                {/* Section Title */}
                <div className="space-y-3">
                  <h3 className="text-xl sm:text-2xl md:text-2xl font-bold text-white leading-snug">
                    Course Details
                  </h3>
                  <div className="space-y-1 text-sm sm:text-base md:text-base text-gray-300 leading-relaxed">
                    <p>📅 Wed, 7th May 2025</p>
                    <p>🕙 07:00 PM – 09:00 PM</p>
                    {/* <p>🎯 For All Trader</p> */}
                    <p>🌐 Online </p>
                    <p>🗣️ English & Hindi</p>
                  </div>
                </div>

                <hr className="border-gray-700" />

                {/* Pricing Section */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:gap-0">
                  <div className="flex flex-col items-center text-center md:text-left">
                    {/* Price Label with Gradient Background */}

                    <span className="text-lg font-medium text-green-500 mt-2">
                      Fee - Free
                    </span>
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href="#formId"
                  className="shine shine-anim w-full bg-[#5928E5] hover:bg-[#4a1fd1] text-white font-bold py-3 px-6 rounded-xl shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl inline-block text-center"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Register Now
                    <svg
                      className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MasterMomentum;
