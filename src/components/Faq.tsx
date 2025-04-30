import React, { useState } from 'react';

const faqs = [
  {
    question: "Q1. What are mutual funds?",
    answer:
      "Mutual funds schemes are investment avenues where money pooled from various investors is invested in a diverse portfolio of stocks, bonds, and other securities. Mutual funds are managed by professional fund managers who make decisions concerned with investment of the investors’ money.",
  },
  {
    question: "Q2. What is SIP in mutual funds?",
    answer:
      "Systematic Investment Plans (or SIPs) are a kind of mutual fund investment where investors can invest a fixed amount regularly at fixed intervals (like monthly or quarterly). As per SEBI mandate, investors can start investing in SIP with a minimum amount of ₹500.",
  },
  {
    question: "Q3. Are mutual funds safe?",
    answer:
      "Mutual funds are considered a safe investment since they allow investors to diversify their portfolio. However, it is important to remember that mutual funds are subject to market risks and their returns can vary based on the underlying security’s performance.",
  },
  {
    question: "Q4. Are Mutual Funds tax-free?",
    answer:
      "Mutual Funds are not entirely tax-free. However, there are tax saver mutual fund schemes like ELSS that offer you a tax rebate of up to ₹1.5 lakh with a lock-in period of 3 years. The taxation on mutual funds depends on a number of factors like the type of mutual fund, investment duration, and the investor’s tax bracket.",
  },
  {
    question: "Q5. What is NAV?",
    answer:
      "NAV or Net Asset Value of a mutual fund scheme is its per-unit market value. It is the price at which an investor can buy mutual fund units. NAV is calculated by dividing the total assets of the fund after deducting the liabilities by the total number of outstanding units.",
  },
  {
    question: "Q6. What is the difference between SIP and lumpsum investment?",
    answer:
      "SIPs involve regular investment contributions at fixed intervals while lumpsum investment is a one-time investment of a significant amount into the mutual funds.",
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#18152e] text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          FAQ
        </h2>
     
      </div>

      <div className="mt-12 max-w-7xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-700 rounded-xl"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between px-6 py-4 text-left focus:outline-none focus-visible:ring focus-visible:ring-blue-500 rounded-xl"
              aria-expanded={openIndex === index}
              aria-controls={`faq-${index}`}
            >
              <span className="text-lg font-medium">
                {faq.question}
              </span>
              <svg
                className={`h-5 w-5 transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180 text-blue-500' : 'text-gray-400'
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {openIndex === index && (
              <div
                id={`faq-${index}`}
                className="px-6 pb-6 text-gray-400 text-base leading-relaxed space-y-4 transition-all duration-300 ease-in-out"
              >
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
