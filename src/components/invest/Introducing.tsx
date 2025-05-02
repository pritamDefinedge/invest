import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Introducing: React.FC = () => {
  const learningPoints = [
    {
      title: "Learn Momentum",
      description:
        "Start with an expert-guided module that explore momentum investing from scratch to advanced investment strategies ",
    },
    {
      title: "Deploy Strategies",
      description:
        "Choose from expert-created strategies or make your own based on funda-techno insights to best suit your goals ",
    },
    {
      title: "Backtest Your Way",
      description:
        "Backtest your strategies over 2 decades to understand the performance and build confidence before you invest",
    },
    {
      title: "Invest Objectively",
      description:
        "Invest in your strategy easily with Momentify and let the system auto-allocate your funds across stocks",
    },
    {
      title: "Automated Rebalancing",
      description:
        "Momentify rebalances your portfolio monthly, so you can execute your investment in just one click",
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
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

  // Generate random CAPTCHA text
  const generateCaptcha = () => {
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaText(result);
    return result;
  };

  // Initialize CAPTCHA
  useEffect(() => {
    if (isModalOpen) {
      generateCaptcha();
    }
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

    if (formData.captchaInput !== captchaText) {
      setSubmitStatus({
        success: false,
        message: "CAPTCHA verification failed. Please try again.",
      });
      generateCaptcha();
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
          }),
        }
      );

      const responseData = await response.json();

      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: "Thank you for registering!",
        });
        setFormData({ name: "", email: "", mobile: "", captchaInput: "" });
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
    setFormData({ name: "", email: "", mobile: "", captchaInput: "" });
    setSubmitStatus(null);
  };

  return (
    <>
      <section className="relative py-6 sm:py-8 pb-12 lg:py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0f0c29] to-[#1a1633] text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            initial={{ x: -100, y: -100 }}
            animate={{ x: [0, 40, 0], y: [0, 40, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-purple-600/20 rounded-full blur-[80px] sm:blur-[120px]"
          />
          <motion.div
            initial={{ x: 100, y: 100 }}
            animate={{ x: [0, -40, 0], y: [0, -40, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/3 right-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-blue-600/20 rounded-full blur-[80px] sm:blur-[120px]"
          />
          <motion.div
            initial={{ x: 50, y: -50 }}
            animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/3 right-1/3 w-40 sm:w-64 h-40 sm:h-64 bg-indigo-600/20 rounded-full blur-[60px] sm:blur-[100px]"
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 lg:mb-20 px-2"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Invest in{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                Momentum
              </span>{" "}
              in One Click 
            </h2>
            <p className="max-w-4xl mx-auto text-base sm:text-lg md:text-xl text-gray-300 opacity-90 leading-relaxed">
              From the creators of OPSTRA comes the momentum trading engine that
              lets you analyse, backtest and invest in a few clicks. 
            </p>
          </motion.div>

          {/* Flexbox Layout for Features */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-12 sm:mb-16">
            {learningPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "0px 0px -100px 0px" }}
                className="flex-1 min-w-[280px] sm:min-w-[300px] md:min-w-[320px] max-w-[400px] bg-[#1e1a3a]/80 backdrop-blur-sm border border-[#2d2755] rounded-2xl p-6 sm:p-8 group relative transition-all duration-500 hover:border-[#4a3f8a] hover:shadow-lg hover:shadow-purple-500/10 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 leading-snug">
                  {point.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base opacity-90">
                  {point.description}
                </p>

                {/* Bottom-left corner accent (new) */}
                <div className="absolute bottom-0 left-0 w-12 h-12 sm:w-16 sm:h-16 border-b border-l border-[#4a3f8a] rounded-bl-2xl transition-all duration-300 group-hover:w-16 sm:group-hover:w-20 group-hover:h-16 sm:group-hover:h-20" />
                {/* Top-right corner accent */}
                <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 border-t border-r border-[#4a3f8a] rounded-tr-2xl transition-all duration-300 group-hover:w-16 sm:group-hover:w-20 group-hover:h-16 sm:group-hover:h-20" />
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <motion.a
              onClick={() => setIsModalOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative overflow-hidden group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 text-sm sm:text-base"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Start with a FREE Webinar
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
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
              <span className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
            </motion.a>
          </motion.div>
        </div>
      </section>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-black opacity-70"></div>
          </div>

          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="inline-block align-bottom bg-gradient-to-br from-[#091E40] via-[#0A2B5A] to-[#0c3368] rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-16 sm:align-middle sm:max-w-lg sm:w-full">
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

                        {/* Text-based CAPTCHA */}
                        <div className="mt-4">
                          <div className="flex flex-row sm:flex-row items-start sm:items-center gap-4">
                            <div className="flex items-center justify-center bg-white/10 p-3 rounded-lg">
                              <span className="text-white font-mono text-lg tracking-widest select-none">
                                {captchaText}
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
                            <div className="flex-1">
                              <input
                                type="text"
                                name="captchaInput"
                                placeholder="Enter the text"
                                className="w-full p-3 bg-white/5 text-white placeholder-white/50 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200"
                                required
                                value={formData.captchaInput}
                                onChange={handleInputChange}
                              />
                            </div>
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
                        disabled={isSubmitting}
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

export default Introducing;
