import React, { useState } from "react";

const faqs = [
  {
    question: "Q1. Who is this program for?",
    answer:
      "Anyone serious about trading momentum objectively and consistently. Basic market understanding is recommended. ",
  },
  {
    question: "Q2. What is the level of this training?",
    answer:
      "Beginner-friendly but insightful for experienced traders as well.",
  },
  {
    question: "Q3. Is this a live or recorded session?",
    answer: " It is a live, online training conducted over GoToWebinar. ",
  },
  {
    question: "Q4. Will I get access to recordings? ",
    answer:
      "Yes, session recordings will be provided within 7 days of the training, unless delayed due to any technical issues.",
  },
  {
    question: "Q5. Will there be live interaction with mentors?",
    answer: "Yes, the session includes interactive Q&A with mentors. ",
  },
  {
    question: "Q6. Can I join without a Definedge Demat Account",
    answer:
      "Yes, but you won’t be eligible for the 20% discount or exclusive benefits.",
  },
  {
    question: "Q7. What if I am not based in India? ",
    answer: "You can attend from anywhere with a stable internet connection. ",
  },
  {
    question: "Q8. Will I get post-training support? ",
    answer:
      "Yes, guidance will be provided on how to practice further and use the Definedge Ecosystem effectively. ",
  },
  {
    question:
      "Q9. Will these strategies work across timeframes or instruments? ",
    answer:
      "Absolutely. The techniques are timeframe-neutral and work across stocks, indices and commodities. ",
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#18152e] text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">FAQs</h2>
      </div>

      <div className="mt-12 max-w-7xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-700 rounded-xl">
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between px-6 py-4 text-left focus:outline-none focus-visible:ring focus-visible:ring-blue-500 rounded-xl"
              aria-expanded={openIndex === index}
              aria-controls={`faq-${index}`}
            >
              <span className="text-lg font-medium">{faq.question}</span>
              <svg
                className={`h-5 w-5 transition-transform duration-300 ${
                  openIndex === index
                    ? "rotate-180 text-blue-500"
                    : "text-gray-400"
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
