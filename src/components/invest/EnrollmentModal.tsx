import React, { useState, useEffect } from "react";

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EnrollmentModal: React.FC<EnrollmentModalProps> = ({ isOpen, onClose }) => {
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
    if (isOpen) {
      generateCaptcha();
      setSubmitStatus(null);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        captchaInput: "",
      });
    }
  }, [isOpen]);

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
        setTimeout(() => onClose(), 3000);
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 transition-opacity" aria-hidden="true">
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>

      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="inline-block align-bottom bg-gradient-to-br from-[#091E40] via-[#0A2B5A] to-[#0c3368] rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-16 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="relative p-8 md:p-10">
            <button
              onClick={onClose}
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
              <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-6">
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
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        placeholder="Enter your first name"
                        className="w-full p-3 bg-white/5 text-white placeholder-white/50 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <label className="block text-white/80 mb-2 text-sm font-medium">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Enter your last name"
                        className="w-full p-3 bg-white/5 text-white placeholder-white/50 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200"
                        required
                        value={formData.lastName}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrollmentModal;