import React, { useState, useEffect } from "react";

const OpenFree: React.FC = () => {
  const [mobile, setMobile] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [captchaText, setCaptchaText] = useState("");
  const [userCaptcha, setUserCaptcha] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Generate CAPTCHA
  const generateCaptcha = () => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789";
    let result = "";
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaText(result);
    setUserCaptcha("");
  };

  useEffect(() => generateCaptcha(), []);

  const isValidIndianMobile = (number: string): boolean =>
    /^[6-9]\d{9}$/.test(number);
  const isValidEmail = (email: string): boolean =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!isValidIndianMobile(mobile)) {
      alert(
        "Please enter a valid 10-digit Indian mobile number (starting with 6-9)."
      );
      setIsSubmitting(false);
      return;
    }

    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      setIsSubmitting(false);
      return;
    }

    if (userCaptcha !== captchaText) {
      alert("CAPTCHA verification failed. Please try again.");
      generateCaptcha();
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("YOUR_API_ENDPOINT", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name,
          email: email,
          phone: mobile,
          additional_data: "Momentum Investing",
        }),
      });

      if (response.ok) {
        alert("Thank you for registering!");
        setName("");
        setEmail("");
        setMobile("");
        generateCaptcha();
      } else {
        const responseData = await response.json();
        alert(responseData.message || "Failed to register. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    // <section className="relative py-20 px-4 sm:px-6 bg-[#0a0b1a] overflow-hidden">
    <section
      className="relative bg-[#18152e] text-white py-12 md:py-24"
      id="formId"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[40%] h-[40%] bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.2)_0%,_transparent_70%)] animate-[pulse_12s_ease-in-out_infinite]" />
        <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-[radial-gradient(circle_at_center,_rgba(236,72,153,0.15)_0%,_transparent_70%)] animate-[pulse_15s_ease-in-out_infinite]" />
      </div>

      <div className="relative max-w-5xl mx-auto z-10 px-4">
        {/* Glass morphism card */}
        <div className="backdrop-blur-xl bg-gradient-to-br from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.1)] rounded-2xl shadow-2xl overflow-hidden">
          {/* Glowing border effect */}
          <div className="absolute inset-0 rounded-2xl p-[1px] bg-[linear-gradient(135deg,_rgba(99,102,241,0.3)_0%,_rgba(168,85,247,0.1)_50%,_transparent_100%)] pointer-events-none" />

          <div className="p-8 md:p-10">
            {/* Header */}
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold  text-white mb-3">
                Join Free{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-300">
                  Momentify
                </span>{" "}
                Webinar
              </h2>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-blue-100/80">
                    Your Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg text-white placeholder-blue-200/30 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-transparent transition-all duration-200"
                      required
                    />
                    <div className="absolute inset-0 rounded-lg border border-blue-400/20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-blue-100/80">
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg text-white placeholder-blue-200/30 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-transparent transition-all duration-200"
                      required
                    />
                    <div className="absolute inset-0 rounded-lg border border-blue-400/20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>

                {/* Mobile */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-blue-100/80">
                    Mobile Number
                  </label>
                  <div className="flex relative">
                    <div className="flex items-center px-3 bg-[rgba(99,102,241,0.2)] border border-[rgba(255,255,255,0.1)] rounded-l-lg text-white">
                      +91
                    </div>
                    <input
                      type="tel"
                      value={mobile}
                      onChange={(e) =>
                        setMobile(e.target.value.replace(/[^0-9]/g, ""))
                      }
                      placeholder="Enter mobile number"
                      maxLength={10}
                      className="flex-grow w-full px-4 py-3 bg-[rgba(255,255,255,0.05)] border-t border-b border-r border-[rgba(255,255,255,0.1)] rounded-r-lg text-white placeholder-blue-200/30 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-transparent transition-all duration-200"
                      required
                    />
                  </div>
                </div>

                {/* CAPTCHA */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-blue-100/80">
                    Verification
                  </label>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
                    <div
                      className="w-full sm:w-2/5 mb-2 sm:mb-0 flex items-center justify-center px-4 py-2 bg-[rgba(99,102,241,0.2)] border border-[rgba(255,255,255,0.1)] rounded-lg cursor-pointer hover:bg-[rgba(99,102,241,0.3)] transition-colors duration-200"
                      title="Refresh CAPTCHA"
                    >
                      <span className="font-mono font-bold text-white tracking-widest text-base sm:text-lg lg:text-xl">
                        {captchaText.split("").map((char, i) => (
                          <span
                            key={i}
                            className="inline-block"
                            style={{
                              transform: `rotate(${
                                Math.random() * 15 - 7.5
                              }deg)`,
                              color: i % 2 === 0 ? "#fff" : "#fff",
                            }}
                          >
                            {char}
                          </span>
                        ))}
                      </span>

                      <button
                        type="button"
                        onClick={() => generateCaptcha()}
                        className="ml-3 text-white/70 hover:text-white transition-colors"
                        aria-label="Refresh CAPTCHA"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                          />
                        </svg>
                      </button>
                    </div>
                    <input
                      type="text"
                      value={userCaptcha}
                      onChange={(e) => setUserCaptcha(e.target.value)}
                      placeholder="Enter text"
                      className="w-full sm:w-3/5 px-4 py-3 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg text-white placeholder-blue-200/30 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-transparent transition-all duration-200 text-base sm:text-sm"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-lg font-medium text-white transition-all duration-300 ${
                  isSubmitting
                    ? "bg-[rgba(99,102,241,0.6)] cursor-not-allowed"
                    : "bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 shadow-lg hover:shadow-indigo-500/30"
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
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
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                )}
              </button>
            </form>

            {/* Footer note */}
            <p className="text-center text-blue-200/60 text-sm mt-8">
              Join On – We will send the Webinar Link to all registered
              participants on the registered email ID by 6th May 2025.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenFree;
