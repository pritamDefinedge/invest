import React, { useState, useEffect } from "react";

const OpenFree: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    captchaInput: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  const [captchaText, setCaptchaText] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  // Generate random CAPTCHA text
  const generateCaptcha = () => {
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaText(result);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  useEffect(() => {
    if (submitStatus) {
      setShowPopup(true);
      const timer = setTimeout(() => {
        setShowPopup(false);
        // Clear the status after hiding the popup if it was successful
        if (submitStatus.success) {
          setSubmitStatus(null);
        }
      }, 5000); // Hide after 5 seconds
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const isValidIndianMobile = (number: string): boolean => {
    return /^[6-9]\d{9}$/.test(number);
  };

  const isValidEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "mobile") {
      const digitsOnly = value.replace(/[^0-9]/g, "");
      if (digitsOnly.length <= 10) {
        setFormData((prev) => ({ ...prev, [name]: digitsOnly }));
      }
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus(null);

    if (formData.captchaInput !== captchaText) {
      setSubmitStatus({
        success: false,
        message: "CAPTCHA verification failed. Please try again.",
      });
      generateCaptcha();
      return;
    }

    if (!formData.firstName.trim()) {
      setSubmitStatus({
        success: false,
        message: "Please enter your first name",
      });
      return;
    }
    if (!formData.lastName.trim()) {
      setSubmitStatus({
        success: false,
        message: "Please enter your last name",
      });
      return;
    }

    if (!isValidEmail(formData.email)) {
      setSubmitStatus({
        success: false,
        message: "Please enter a valid email address",
      });
      return;
    }

    if (!isValidIndianMobile(formData.mobile)) {
      setSubmitStatus({
        success: false,
        message:
          "Please enter a valid 10-digit Indian mobile number (starting with 6-9)",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://www.definedge.com/wp-json/custom-api/v1/add-data/?api_key=VmhWIhhXlrubNwvA6czBJR4fPCBU5sch",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phone: formData.mobile,
            additional_data: "Momentum Investing",
          }),
        }
      );

      const responseData = await response.json();

      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: "Thank you for registering!",
        });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          mobile: "",
          captchaInput: "",
        });
      } else {
        setSubmitStatus({
          success: false,
          message:
            responseData.message || "Registration failed. Please try again.",
        });
      }
    } catch (error) {
      console.error("API Error:", error);
      setSubmitStatus({
        success: false,
        message: "Network error. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    if (submitStatus?.success) {
      setSubmitStatus(null);
    }
  };

  return (
    <section
      className="relative bg-[#18152e] text-white py-8 md:py-8"
      id="formId"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[40%] h-[40%] bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.2)_0%,_transparent_70%)] animate-[pulse_12s_ease-in-out_infinite]" />
        <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-[radial-gradient(circle_at_center,_rgba(236,72,153,0.15)_0%,_transparent_70%)] animate-[pulse_15s_ease-in-out_infinite]" />
      </div>

      {/* Popup Modal */}
      {showPopup && submitStatus && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="relative bg-[#18152e] border border-[rgba(255,255,255,0.2)] rounded-xl shadow-2xl max-w-md w-full p-6">
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
              aria-label="Close"
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
            
            <div className="text-center py-4">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                {submitStatus.success ? (
                  <svg
                    className="h-6 w-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {submitStatus.success ? "Success!" : "Error"}
              </h3>
              <p className="text-white/90">{submitStatus.message}</p>
            </div>
          </div>
        </div>
      )}

      <div className="relative max-w-5xl mx-auto z-10 px-4">
        {/* Glass morphism card */}
        <div className="backdrop-blur-xl bg-gradient-to-br from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.1)] rounded-2xl shadow-2xl overflow-hidden">
          {/* Glowing border effect */}
          <div className="absolute inset-0 rounded-2xl p-[1px] bg-[linear-gradient(135deg,_rgba(99,102,241,0.3)_0%,_rgba(168,85,247,0.1)_50%,_transparent_100%)] pointer-events-none" />

          <div className="p-8 md:p-10">
            {/* Header */}
            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold text-white mb-3">
                Join The{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-300">
                  Free
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
                    First Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Enter your first name"
                      className="w-full px-4 py-3 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg text-white placeholder-blue-200/30 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-transparent transition-all duration-200"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-blue-100/80">
                    Last Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Enter your last name"
                      className="w-full px-4 py-3 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg text-white placeholder-blue-200/30 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-transparent transition-all duration-200"
                      required
                    />
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
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg text-white placeholder-blue-200/30 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-transparent transition-all duration-200"
                      required
                    />
                  </div>
                </div>

                {/* Mobile */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-blue-100/80">
                    Mobile Number
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      placeholder="Enter your mobile number"
                      className="w-full px-4 py-3 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg text-white placeholder-blue-200/30 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-transparent transition-all duration-200"
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
                      name="captchaInput"
                      value={formData.captchaInput}
                      onChange={handleInputChange}
                      placeholder="Enter text"
                      className="w-full sm:w-3/5 px-4 py-3 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg text-white placeholder-blue-200/30 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-transparent transition-all duration-200 text-base sm:text-sm"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-500 hover:to-purple-500 text-white px-6 py-3 rounded-lg font-medium text-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-200"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Register"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenFree;