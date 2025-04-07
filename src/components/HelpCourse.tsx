import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Background from "../assets/background.png";

const HelpCourse: React.FC = () => {
  const textRefs = useRef<HTMLParagraphElement[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    function splitText(element: HTMLElement) {
      const words = element.textContent?.trim().split(" ") || [];
      element.innerHTML = words
        .map((word) => {
          const chars = word
            .split("")
            .map((char) => `<span class="char">${char}</span>`)
            .join("");
          return `<span class="word">${chars} </span>`;
        })
        .join("");
    }

    function createAnimations() {
      textRefs.current.forEach((paragraph) => {
        splitText(paragraph);
        const chars = paragraph.querySelectorAll(".char");

        gsap
          .timeline({
            scrollTrigger: {
              trigger: paragraph,
              start: "top 80%",
              end: "bottom 60%",
              scrub: 1,
              toggleActions: "play none none reverse",
            },
          })
          .fromTo(
            chars,
            { opacity: 0, y: 5 },
            {
              opacity: 1,
              y: 0,
              color: "#fff",
              stagger: 0.03,
              ease: "power2.out",
            }
          );
      });
    }

    createAnimations();

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  return (
    <section
      className="py-24 bg-gray-900 text-white"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundPosition: "50%",
        backgroundSize: "cover",
      }}
    >
      <div className="w-3/4 mx-auto">
        <div className="rounded-lg">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-white">
              How this course will help you!
            </h2>
            
            <div className="w-1/5 h-1 mt-4 bg-gradient-to-r from-white to-purple-500 transform origin-left" />
          </div>
          {[
            "You are interested in making your investments work for you, or you wouldn’t be reading this. Whether you are an experienced trader or anovice, knowing when to trade or not trade, dealing with noise, and achieving consistency are crucial for success in trading. With overa decade of experience in the field of Technical Analysis & Noiseless charting, we have simplified things to help you learn noiseless trading.",
            "There are many methods of trading or investing in the market, with even more people doling out advice on both. To further complicate things, a variety of analysis methods and opinions exist, which can be confusing and distracting. We call these distractions “noise” because they prevent you from focusing on important aspects, potentially leading to emotional trading, overtrading, or uninformed trading – all preventing you from achieving your desired positive results.",
            "At Definedge, we have extensive experience in successful trading and investment. Over the years, we have developed highly methodical and logical techniques that lead to positive outcomes. We call these “Noiseless Trading” techniques because they help you focus and make trading a peaceful, stress-free activity. A noiseless trader is efficient, smart, and achieves the results he wants every time.",
          ].map((text, index) => (
            <p
              key={index}
              ref={(el) => {
                if (el && !textRefs.current.includes(el)) {
                  textRefs.current[index] = el; // Ensures no duplicate refs
                }
              }}
              className="text-lg mb-4 animatedText"
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HelpCourse;
