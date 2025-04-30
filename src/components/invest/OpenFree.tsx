import React, { useState } from "react";

const OpenFree: React.FC = () => {
  const [mobile, setMobile] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const isValidIndianMobile = (number: string): boolean => {
    return /^[6-9]\d{9}$/.test(number);
  };

  const isValidEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isValidIndianMobile(mobile)) {
      alert("Please enter a valid 10-digit Indian mobile number (starting with 6-9).");
      return;
    }

    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (name.trim() === "") {
      alert("Please enter your name.");
      return;
    }

    try {
      const response = await fetch(
        "https://www.definedge.com/wp-json/custom-api/v1/add-data/?api_key=VmhWIhhXlrubNwvA6czBJR4fPCBU5sch",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            email: email,
            phone: mobile,
            additional_data: "Momentum Investing",
          }),
        }
      );

      if (response.ok) {
        alert("Thank you for registering! Check your email for the webinar link.");
        setName("");
        setEmail("");
        setMobile("");
      } else {
        alert("There was a problem submitting the form. Please try again later.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Network error. Please try again later.");
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 bg-gradient-to-b from-[#0f0c29] to-[#1a1633]" id="formId">
      <div className="max-w-6xl mx-auto">
        <div className="relative overflow-hidden bg-gradient-to-br from-[#091E40] via-[#0A2B5A] to-[#0c3368] rounded-2xl p-8 md:p-10 shadow-2xl">
          {/* Floating background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] animate-[float_15s_ease-in-out_infinite]" />
            <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-[120px] animate-[float_18s_ease-in-out_infinite]" />
          </div>

          <div className="relative z-10">
            {/* Title */}
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
              Join Free <span className="text-yellow-400">Momentify</span> Webinar
            </h2>

            {/* Form Container */}
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row gap-4 items-end">
                {/* Name Field */}
                <div className="flex-1 w-full">
                  <label className="block text-white/80 mb-2 text-sm font-medium">Your Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full p-3 bg-white/5 text-white placeholder-white/50 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                {/* Email Field */}
                <div className="flex-1 w-full">
                  <label className="block text-white/80 mb-2 text-sm font-medium">Email Address</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full p-3 bg-white/5 text-white placeholder-white/50 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                {/* Mobile Field */}
                <div className="flex-1 w-full">
                  <label className="block text-white/80 mb-2 text-sm font-medium">Mobile Number</label>
                  <div className="flex">
                    <div className="flex items-center px-3 bg-white/10 border border-white/20 rounded-l-lg">
                      <span className="text-white">+91</span>
                    </div>
                    <input
                      type="tel"
                      placeholder="Enter mobile number"
                      className="flex-grow p-3 bg-white/5 text-white placeholder-white/50 border border-white/20 rounded-r-lg focus:outline-none transition duration-200"
                      maxLength={10}
                      required
                      inputMode="numeric"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value.replace(/[^0-9]/g, ""))}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="flex-1 md:flex-none w-full md:w-auto relative overflow-hidden px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 group shadow-lg"
                >
                  <span className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition duration-300"></span>
                  <span className="relative flex items-center justify-center gap-2">
                    Register Now
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </form>

            {/* Bottom Note */}
            <p className="text-white/60 text-sm text-center mt-6">
              Join On – We will send the Webinar Link to all registered participants on the registered email ID by 6th May 2025.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenFree;
