import React, { useState } from "react";

const Signup: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");

  // Handle input changes & validate real-time
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/[^0-9]/g, ""); // Allow only numbers
    value = value.slice(0, 10); // Limit to 10 digits

    setPhoneNumber(value);

    // Show error only when user stops typing
    if (value.length > 0 && value.length < 10) {
      setError("Enter a valid 10-digit mobile number.");
    } else {
      setError("");
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (phoneNumber.length !== 10) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }

    // Redirect to the defined URL
    const redirectUrl = `https://signup.definedgesecurities.com/?dnum=${phoneNumber}&ss=dsec-home`;
    window.location.href = redirectUrl;
  };

  return (
    <section
      className="w-full relative overflow-hidden min-h-[500px] my-0 md:my-24 sm:my-18 lg:my-24 py-24 md:min-h-[450px] flex items-center "
      style={{
        background:
          "linear-gradient(273.7deg, #8C0069 0.73%, #00439A 50.06%, #005868 99.39%)",
      }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-right z-10 opacity-90"
        style={{
          backgroundImage:
            "url('./assets/img/diwali-images/diwali-design-4.png')",
        }}
      ></div>

      {/* Content Container */}
      <div className="container mx-auto relative z-50 px-4  md:px-6 lg:px-8">
        <p
          className="text-4xl text-center sm:text-3xl md:text-5xl py-8 lg:text-5xl font-bold bg-clip-text text-transparent"
          style={{
            background: "linear-gradient(180deg, #FEDC31 0%, #D6B200 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Save much more on PRO Products With
        </p>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Image Section */}
          <div className="w-full flex flex-col md:w-1/2  justify-center items-center sm:items-center md:items-end lg:items-end">
            <img
              src="./assets/img/LeftMobile.svg"
              alt="Left Section"
              className="w-[70%] sm:w-[70%] "
            />
            <div className="w-full mt-4 flex flex-col  items-center  justify-center align-center sm:items-center md:items-end lg:items-end gap-4 text-center">
              <p className="text-white text-center  text-md">OPSTRA MOBILE APP</p>

              <div className="flex gap-4">
                <a
                  href="https://play.google.com/store/apps/details?id=com.definedge.opstra&pcampaignid=web_share"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="./assets/img/OpstraPlayStore.svg"
                    alt="Opstra Play Store"
                    className="w-28 sm:w-36"
                  />
                </a>
                <a
                  href="https://apps.apple.com/in/app/opstra-definedge-analysis/id6502280354"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="./assets/img/OpstraAppStore.svg"
                    alt="Opstra App Store"
                    className="w-28 sm:w-36"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Middle Content Section */}
          <div className="w-full md:w-1/2 mt-28  sm:mt-24 md:mt-0 lg:md-0 text-center flex flex-col items-center">
            <img
              src="./assets/img/DefinedgeLogo.svg"
              alt="Definedge Logo"
              className=" mb-4 -mt-24"
            />
            <h1 className="text-base sm:text-base md:text-xl lg:text-2xl xl:text-2xl font-bold text-white my-4">
              Get Free access to:
            </h1>

            <ul className="space-y-2 flex flex-col sm:space-y-3 leading-[2.5rem] mb-6 sm:mb-8 text-white text-sm sm:text-base">
              {[
                "All the Pro Products for 2 months, worth ₹4,598",
                "2 Gurukul courses worth ₹7,887",
                "4 Bestselling books by Prashant Shah, worth ₹4,347",
              ].map((item, index) => (
                <li key={index} className="flex items-center  leading-[2.5rem]">
                  {/* Bullet only for medium (md) and large (lg) devices */}
                  <span
                    className="mr-2 hidden md:block lg:block w-3 h-3 sm:w-4 sm:h-4 rounded-full"
                    style={{
                      background:
                        "linear-gradient(180deg, #FDC347 0%, #97742A 100%)",
                    }}
                  ></span>

                  {/* Text with bullet for small (sm) and below */}
                  {item}
                </li>
              ))}
            </ul>

            <div className="w-full ">
              <form onSubmit={handleSubmit} className="">
                <div className="flex flex-wrap gap-4 items-center  justify-center">
                  {/* Phone number input */}
                  <div className="flex w-full sm:w-auto">
                    <input
                      type="text"
                      name="country-code"
                      className="w-14 h-12 p-3 rounded-l-lg  border-2 border-white text-center focus:outline-none focus:ring-2 focus:ring-primary-500"
                      value="+91"
                      readOnly
                      style={{
                        background:
                          "linear-gradient(180deg, #FEDC31 0%, #FA2CD7 100%)",
                      }}
                    />

                    <input
                      type="tel"
                      name="mobile-number"
                      className="w-1/2  h-12 text-left p-3 border rounded-r-lg border-l-0  focus:outline-none focus:border-white focus:ring-0"
                      placeholder=" Mobile Number"
                      required
                      maxLength={10}
                      value={phoneNumber}
                      onChange={handleInputChange}
                      pattern="[0-9]{10}"
                      onInput={(e) =>
                        (e.currentTarget.value = e.currentTarget.value.replace(
                          /[^0-9]/g,
                          ""
                        ))
                      }
                    />
                    <button
                      type="submit"
                      className="py-2 ml-4 w-1/2 sm:py-3 h-12  text-xs sm:text-xs md:text-sm lg:text-xs text-white font-medium text-center rounded-lg transition duration-300"
                      style={{
                        background:
                          "linear-gradient(180deg, #00D4C5 0%, #0051B9 100%), linear-gradient(180deg, #FFD502 0%, #FFAE02 100%)",
                      }}
                    >
                      Get Your SuperDemat
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:justify-end  lg:justify-end ">
            {/* w-full flex flex-col md:w-1/2  justify-center */}
            <img
              src="./assets/img/RightMobile.svg"
              alt="Right Section"
              className="w-[70%] sm:w-[70%] "
            />
            <div className="w-full mt-4 flex flex-col items-start justify-center align-center gap-4 text-center sm:items-center md:items-end lg:items-end">
            {/* w-full mt-4 flex flex-col  items-center  justify-center align-center sm:items-center md:items-end lg:items-end gap-4 text-center */}

              <p className="text-white  mx-auto  text-md">ZONE MOBILE APP</p>

              <div className="flex gap-4 mx-auto">
                <a
                  href=" https://play.google.com/store/apps/details?id=com.definedge.zone"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="./assets/img/ZonePlayStore.svg"
                    alt="Zone Play Store"
                    className="w-28 sm:w-36"
                  />
                </a>
                <a
                  href="https://apps.apple.com/in/app/zone-definedge-trading-app/id1659365110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="./assets/img/ZoneAppStore.svg"
                    alt="Zone App Store"
                    className="w-28 sm:w-36 "
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
