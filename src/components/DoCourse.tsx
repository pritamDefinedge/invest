import React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useGsapAnimation = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!listRef.current || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(listRef.current!.children);

      gsap.set(items, { opacity: 0, color: "#000000" });

      gsap.to(items, {
        opacity: 1,
        color: "#1E293B", // Transition to Dark Gray
        duration: 1.5,
        stagger: 0.15,
        ease: "sine.inOut",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reset",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return { sectionRef, listRef };
};

const DoCourse: React.FC = () => {
  const { sectionRef, listRef } = useGsapAnimation();

  return (
    <section ref={sectionRef} className="py-12">
      <div className="w-3/4 mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-black via-gray-400 to-gray-200">
            Who should do this course?
          </h2>
          <div className="w-28 h-1 mt-4 bg-gradient-to-r from-gray-100 to-gray-500 transform origin-left" />
        </div>
        <div className="p-4 rounded-md">
          <ul ref={listRef} className="list-none pl-6 space-y-4">
            <li className="text-md">
              If you have a basic understanding of how the stock market
              functions and wish to learn complete trading to improve your
              investment and trading decisions, you should grab this
              opportunity!
            </li>
            <li className="text-md">
              The knowledge is applicable to any type of market, including
              stocks, commodities, and any type of time-frame. Strategies for
              very short-term intraday trading to momentum and long-term
              investing will be discussed.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DoCourse;
