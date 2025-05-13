import React, { useState, useEffect } from "react";

const OpenFree: React.FC = () => {
  const [mobile, setMobile] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [captchaText, setCaptchaText] = useState("");
  const [userCaptcha, setUserCaptcha] = useState("");
  const [captchaError, setCaptchaError] = useState("");

  // Generate random CAPTCHA text
  const generateCaptcha = () => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";
    let result = "";
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaText(result);
    setUserCaptcha("");
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const isValidIndianMobile = (number: string): boolean => {
    return /^[6-9]\d{9}$/.test(number);
  };

  const isValidEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCaptchaError("");

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

    if (userCaptcha !== captchaText) {
      setCaptchaError("CAPTCHA verification failed. Please try again.");
      generateCaptcha();
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
        alert("Thank you for registering!");
        setName("");
        setEmail("");
        setMobile("");
        generateCaptcha();
      } else {
        const responseData = await response.json();
        alert(`${responseData.message}` || "Failed to register. Please try again.");
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
            <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-cyan-500/10 rounded-full blur-[80px] animate-[float_12s_ease-in-out_infinite_reverse]" />
          </div>

          <div className="relative z-10">
            {/* Title */}
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">
              Join Free <span className="text-yellow-400">Momentify</span> Webinar
            </h2>
         

            {/* Form Container */}
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Name Field */}
                  <div>
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
                  <div>
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
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Mobile Field */}
                  <div>
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

                  {/* CAPTCHA Field */}
                  <div>
                    <label className="block text-white/80 mb-2 text-sm font-medium">CAPTCHA Verification</label>
                    <div className="flex items-center gap-3">
                      <div className="relative flex-1">
                        <input
                          type="text"
                          placeholder="Enter CAPTCHA"
                          className="w-full p-3 bg-white/5 text-white placeholder-white/50 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200"
                          required
                          value={userCaptcha}
                          onChange={(e) => setUserCaptcha(e.target.value)}
                        />
                        {captchaError && (
                          <p className="absolute text-red-400 text-xs mt-1">{captchaError}</p>
                        )}
                      </div>
                      <div 
                        className="flex items-center justify-center h-12 px-4 bg-white/10 rounded-lg cursor-pointer select-none"
                        onClick={generateCaptcha}
                        title="Click to refresh"
                      >
                        <span className="font-mono text-lg font-bold tracking-wider text-white">
                          {captchaText.split('').map((char, index) => (
                            <span 
                              key={index} 
                              className="inline-block"
                              style={{
                                transform: `rotate(${Math.random() * 20 - 10}deg)`,
                                color: `hsl(${Math.random() * 60 + 200}, 80%, 70%)`
                              }}
                            >
                              {char}
                            </span>
                          ))}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="mt-2 mx-auto">
                  <button
                    type="submit"
                    className="w-full md:w-auto relative overflow-hidden px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 group shadow-lg hover:shadow-xl"
                  >
                    <span className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition duration-300"></span>
                    <span className="relative flex items-center justify-center gap-2 text-lg">
                      Register Now
                      <svg
                        className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
              </div>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenFree;