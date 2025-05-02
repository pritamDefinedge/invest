import React, { useState, useEffect, useRef } from "react";
import Banner from "../../assets/investBanner.svg";

declare global {
  interface Window {
    grecaptcha?: {
      render: (container: HTMLElement | string, parameters: any) => number;
      reset: (widgetId?: number) => void;
      getResponse: (widgetId?: number) => string;
    };
    onRecaptchaLoad?: () => void;
    onRecaptchaSuccess?: (token: string) => void;
    onRecaptchaExpired?: () => void;
  }
}

const HeroSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<HTMLDivElement>(null);

  // Initialize callbacks
  useEffect(() => {
    window.onRecaptchaSuccess = (token: string) => {
      setRecaptchaToken(token);
    };
    window.onRecaptchaExpired = () => {
      setRecaptchaToken(null);
    };

    return () => {
      delete window.onRecaptchaSuccess;
      delete window.onRecaptchaExpired;
    };
  }, []);

  // Load reCAPTCHA script
  useEffect(() => {
    if (!isModalOpen) return;

    const script = document.createElement("script");
    script.src =
      "https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    window.onRecaptchaLoad = () => {
      if (recaptchaRef.current && window.grecaptcha) {
        window.grecaptcha.render(recaptchaRef.current, {
          sitekey: "6LeydysrAAAAACgJRbgd-EOZmQ53zrwQCr0K14DB",
          callback: "onRecaptchaSuccess",
          "expired-callback": "onRecaptchaExpired",
          size: "normal",
          theme: "light",
        });
      }
    };

    return () => {
      document.body.removeChild(script);
      delete window.onRecaptchaLoad;
      if (window.grecaptcha) {
        // Reset any existing reCAPTCHA widget
        const widgets = document.querySelectorAll(".g-recaptcha");
        widgets.forEach((widget) => {
          const widgetId = widget.getAttribute("data-widget-id");
          if (widgetId) {
            window.grecaptcha?.reset(parseInt(widgetId));
          }
        });
      }
    };
  }, [isModalOpen]);

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

    if (!recaptchaToken) {
      setSubmitStatus({
        success: false,
        message: "Please verify you're not a robot",
      });
      return;
    }

    if (!formData.name.trim()) {
      setSubmitStatus({ success: false, message: "Please enter your name" });
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
            name: formData.name,
            email: formData.email,
            phone: formData.mobile,
            additional_data: "Momentum Investing",
            recaptcha_token: recaptchaToken,
          }),
        }
      );

      const responseData = await response.json();

      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: "Thank you for registering!",
        });
        setFormData({ name: "", email: "", mobile: "" });
        setRecaptchaToken(null);
        setTimeout(() => setIsModalOpen(false), 3000);
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

  const closeModal = () => {
    setIsModalOpen(false);
    setFormData({ name: "", email: "", mobile: "" });
    setSubmitStatus(null);
    setRecaptchaToken(null);
  };

  return (
    <>
      <div className="relative overflow-hidden min-h-[500px] sm:min-h-[550px] md:min-h-[650px] lg:min-h-[750px] flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 w-full h-full z-0"
          style={{
            backgroundImage: `url(${Banner})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Dark Blur Overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0" />

        {/* Floating Blurred Blobs */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 bg-gray-900 rounded-full blur-[80px] opacity-20 animate-[float_12s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/4 left-1/4 w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 bg-gray-900 rounded-full blur-[100px] opacity-20 animate-[float_15s_ease-in-out_infinite]" />

        {/* Text Content */}
        <div className="relative z-10 px-4 pb-4 sm:pb-24 md:pb-24 text-center">
          <div className="max-w-3xl sm:max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-2xl md:text-3xl lg:text-5xl font-bold leading-tight mb-4 text-white">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-100 to-blue-100">
                Invest in Momentum, Not Stocks
              </span>
            </h1>

            <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2">
              1 Webinar | 1 Tool | Momentum Investing Revolutionized
            </h4>

            <p className="text-sm my-6 sm:text-base md:text-md text-gray-50 mb-6 mx-auto max-w-xl sm:max-w-2xl">
              Invest in outperformers with Momentify in 1-click with quick,
              clear analysis. But first, begin with learning about momentum from
              the expert who made Momentify
            </p>

            <div className="flex justify-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="relative overflow-hidden group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium py-3 px-6 sm:px-8 rounded-md transition-all duration-300 hover:shadow-md hover:shadow-purple-500/30"
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
                <span className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-black opacity-70"></div>
          </div>

          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="inline-block align-bottom bg-gradient-to-br from-[#091E40] via-[#0A2B5A] to-[#0c3368] rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="relative p-8 md:p-10">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
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

                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">
                    Join Free <span className="text-yellow-400">Momentify</span>{" "}
                    Webinar
                  </h2>

                  {submitStatus?.success ? (
                    <div className="text-center py-8">
                      <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
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
                      </div>
                      <p className="text-lg font-medium text-white">
                        {submitStatus.message}
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-white/80 mb-2 text-sm font-medium">
                            Your Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="w-full p-3 bg-white/5 text-white placeholder-white/50 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                          />
                        </div>

                        <div>
                          <label className="block text-white/80 mb-2 text-sm font-medium">
                            Email Address
                          </label>
                          <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="w-full p-3 bg-white/5 text-white placeholder-white/50 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                          />
                        </div>

                        <div>
                          <label className="block text-white/80 mb-2 text-sm font-medium">
                            Mobile Number
                          </label>
                          <div className="flex">
                            <div className="flex items-center px-3 bg-white/10 border border-white/20 rounded-l-lg">
                              <span className="text-white">+91</span>
                            </div>
                            <input
                              type="tel"
                              name="mobile"
                              placeholder="Enter mobile number"
                              className="flex-grow w-full p-3 bg-white/5 text-white placeholder-white/50 border border-white/20 rounded-r-lg focus:outline-none transition duration-200"
                              maxLength={10}
                              required
                              inputMode="numeric"
                              value={formData.mobile}
                              onChange={handleInputChange}
                            />
                          </div>
                        </div>

                        {/* reCAPTCHA v2 Checkbox */}
                        <div className="w-full justify-start md:justify-start">
                          <div className="flex w-full justify-center md:justify-start">
                            <div
                              ref={recaptchaRef}
                              className="scale-[0.85] sm:scale-1 transform origin-top" 
                            ></div>
                          </div>
                        </div>
                      </div>

                      {submitStatus && (
                        <div
                          className={`mt-4 p-3 rounded-lg ${
                            submitStatus.success
                              ? "bg-green-900/50 text-green-300"
                              : "bg-red-900/50 text-red-300"
                          }`}
                        >
                          {submitStatus.message}
                        </div>
                      )}

                      <button
                        type="submit"
                        className={`w-full mt-6 relative overflow-hidden px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 group shadow-lg ${
                          isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                        }`}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center">
                            <svg
                              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
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
                        )}
                      </button>
                    </form>
                  )}

                  <p className="text-white/60 text-sm text-center mt-6">
                    Join On – We will send the Webinar Link to all registered
                    participants on the registered email ID by 6th May 2025.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroSection;
