import React, { useState } from "react";
import Lenis from "@studio-freight/lenis";

const ProductCard = ({
  title,
  name,
  logo,
  description,
  productLink,
  features,
}: {
  title: string;
  name: string;
  logo: string;
  description: string;
  productLink: string;
  features: { text: string }[];
}) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden p-0 lg:p-4 sm:p-6">
      <div className="flex gap-3 sm:gap-4 py-3 sm:py-4 items-center mb-4 sm:mb-6">
        <p
          className="font-semibold px-2 py-3 sm:px-4 rounded-xl text-xs sm:text-xs md:text-base  text-[#002D67]"
          style={{
            background:
              "linear-gradient(90deg, rgba(0, 155, 144, 0.32) 0%, rgba(14, 104, 97, 0.048) 94.14%)",
          }}
        >
          {title}
        </p>
      </div>

      <div className="flex gap-3 sm:gap-4 px-6 items-center mb-4 sm:mb-6">
        <img src={logo} alt={name} className="w-full md:w-full lg:w-full" />
      </div>

      <div className="flex gap-3 sm:gap-4 items-center">
        <p className="text-[#004CA3] font-semibold py-4 sm:py-8 text-sm sm:text-sm lg:text-base md:text-base">
          {description}
        </p>
      </div>

      <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span
              className="mr-2 w-3 h-3 sm:w-4 sm:h-4 rounded-full"
              style={{
                background:
                  "linear-gradient(131.99deg, #002D67 0%, #1A74DB 27.63%, #1BCEC1 55.25%)",
                display: "inline-block",
              }}
            ></span>
            <span className="text-gray-700 text-xs sm:text-base">
              {feature.text}
            </span>
          </li>
        ))}
      </ul>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        <a
          href={productLink}
          target="_blank"
          rel="noopener noreferrer"
          className="py-2 sm:py-3 px-4 sm:px-6 text-sm sm:text-sm md:text-sm lg:text-base text-white font-medium text-center rounded-lg transition duration-300"
          style={{
            background: "linear-gradient(180deg, #175CC4 0%, #0B2C5E 100%)",
            display: "inline-block",
          }}
        >
          Explore {name}
        </a>

        <a
          href="https://dashboard.definedge.com/buy-product"
          target="_blank"
          rel="noopener noreferrer"
          className="py-2 sm:py-3 px-4 sm:px-6 text-sm sm:text-sm md:text-sm lg:text-base text-white font-medium text-center rounded-lg transition duration-300"
          style={{
            background: "linear-gradient(180deg, #00D5C5 0%, #0051B9 100%)",
            display: "inline-block",
          }}
        >
          Get Subscription Now
        </a>
      </div>
    </div>
  );
};

const ProductsSection: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState(0);

  const products = [
    {
      bgImage: "./assets/img/TradePointWeb.svg",
      logo: "./assets/img/TradePointLogo.svg",
      title: "WEB  Analysis Platform",
      tabName: "TradePoint Web",
      name: "TradePoint Web",
      description:
        "An intuitive web analysis platform with features like D-Sector, D-Index Average, Scrip Report, and more",

      productLink: "https://www.definedge.com/tradepoint-web/",
      features: [
        {
          text: "Unique chart based patterns, tools & indicators ",
        },
        { text: "Tools, patterns & all indicators on all types of charts" },
        { text: "Breadth indicators on all types of charting methods" },
      ],
    },

    {
      bgImage: "./assets/img/OPSTRA_BACKGROUND.svg",
      logo: "./assets/img/OpstraSolutionLogo.svg",
      title: "India’s most popular options analysis terminal",
      tabName: "Options Analysis Platform",
      name: "OPSTRA",
      description:
        "Options analytics platform comprising of several tools that help to find, analyse and track options trading opportunities.",

      productLink: "https://www.definedge.com/opstra/",
      features: [
        {
          text: "Options Simulator for strategy simulation and backtesting",
        },
        { text: "Options Portfolio to track and analyze the options trades" },
        { text: "Multiple Open Interest Charts" },
      ],
    },
    {
      bgImage: "./assets/img/TradePointSolutionD.svg",
      logo: "./assets/img/TradePointLogo.svg",
      title: "Desktop Analysis Platform",
      tabName: "TradePoint Desktop",
      name: "TradePoint Desktop",
      description:
        "TradePoint desktop is one of the most trusted charting platforms  ",
      productLink: "https://www.definedge.com/tradepoint/",
      features: [
        { text: "EOD and Real-time Scanners " },
        { text: "Advanced Back-testing features" },
        { text: "Over 300 tools, indicators, and patterns" },
      ],
    },
  ];

  return (
    <section className="w-full relative overflow-hidden py-16 sm:px-0 lg:px-28 ">
      <div className="container mx-auto sm:lg:px-4">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <p
            className="text-base sm:text-lg md:text-xl tracking-widest font-bold mb-4 p-2 bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(180deg, #105CFF 0%, #0A3799 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            PRODUCT SUBSCRIPTIONS
          </p>

          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 p-2"
            style={{
              backgroundImage: `linear-gradient(92.35deg, #04ABFF 3.03%, #D86967 27.52%, 
                #CF617E 52.01%, #1048FF 75.02%, #6B84BC 98.03%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            The Ultimate Analysis Terminals
          </h1>

          <h6 className="text-sm sm:text-base md:text-lg lg:text-xl font-medium">
            Your Market. Your Strategy. Your Edge. 
          </h6>
        </div>

        {/* Centered Tabs */}
        <div className="flex justify-center flex-wrap gap-2 sm:gap-4 mb-8">
          {products.map((product, index) => (
            <button
              key={index}
              onClick={() => setSelectedProduct(index)}
              className={`relative py-4 px-2 lg:px-6 sm:py-5 sm:px-7 md:py-5 md:px-8 rounded-xl duration-300 text-xs sm:text-sm md:text-base font-medium transition-all
      ${
        selectedProduct === index
          ? "bg-white shadow-lg text-black"
          : "bg-[#F5F5F5] text-gray-700 hover:bg-gray-100"
      }
    `}
            >
              <span className="relative z-10">{product.tabName}</span>

              {selectedProduct === index && (
                <span
                  className="absolute inset-0 rounded-xl p-[4px]"
                  style={{
                    background:
                      "linear-gradient(96.66deg, #50E6C1 0%, #60ABED 15%, #985BE7 30%, #F057A2 45%, #FBA2C6 58%, #FFFAEA 75%, #FFC169 100%)",
                    WebkitMask:
                      "linear-gradient(white, white) content-box, linear-gradient(white, white)",
                    WebkitMaskComposite: "destination-out",
                    maskComposite: "exclude",
                  }}
                ></span>
              )}
            </button>
          ))}
        </div>

        {/* 50-50 Split Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
          {/* Product Details */}
          <div className="flex justify-center px-2 sm:px-6 md:px-0">
            <ProductCard {...products[selectedProduct]} />
          </div>

          {/* Product Image */}
          <div className="flex justify-center items-center  sm:px-6 md:px-0">
            <img
              src={products[selectedProduct].bgImage}
              alt={products[selectedProduct].name}
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto rounded-lg transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
