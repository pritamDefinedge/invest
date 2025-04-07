import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ArrowIcon from "./ArrowIcon";

gsap.registerPlugin(ScrollTrigger);

const useGsapAnimation = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const listRef1 = useRef<HTMLUListElement>(null);
  const listRef2 = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!listRef1.current || !listRef2.current || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      const animateList = (list: HTMLUListElement, direction: number) => {
        const items = gsap.utils.toArray(list.children);
        gsap.set(items, { opacity: 0, x: 50 * direction });

        gsap.to(items, {
          opacity: 1,
          x: 0,
          duration: 1.2,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reset",
          },
        });
      };

      animateList(listRef1.current!, -1); // Slide in from left
      animateList(listRef2.current!, 1); // Slide in from right
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return { sectionRef, listRef1, listRef2 };
};

const TopicsCovered: React.FC = () => {
  const { sectionRef, listRef1, listRef2 } = useGsapAnimation();

  return (
    <section ref={sectionRef} className="py-16 bg-gray-100">
      <div className="w-3/4 mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-4xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-black via-gray-400 to-gray-200">
            Topics Covered
          </h2>
          <div className="w-24 h-1 mt-4 bg-gradient-to-r from-gray-100 to-gray-500 transform origin-left" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="p-6">
            <ul ref={listRef1} className="space-y-4 text-gray-700">
              {[
                "Know Point & Figure charts",
                "How to identify & trade patterns on these charts",
                "High probable and well-tested price formations and trade setups",
                "Advanced formations",
                "Trend identification and projection techniques",
                "How to identify low-risk trade setups",
                "Relative strength",
                "Relative Strength indicator analysis",
                "Ratio charts",
                "Ratio chart analysis",
              ].map((topic, index) => (
                <li key={index} className="flex items-center gap-2">
                  <ArrowIcon />
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column */}
          <div className="p-6">
            <ul ref={listRef2} className="space-y-4 text-gray-700">
              {[
                "Relative strength patterns",
                "Top-down and bottom-up approach",
                "Trading leaders",
                "Price and RS trading strategies",
                "Portfolio building using RS techniques",
                "Defining exit strategies based on RS analysis",
                "RS Matrix",
                "Breadth analysis",
                "Timing the trades using Breadth analysis",
              ].map((topic, index) => (
                <li key={index} className="flex items-center gap-2">
                  <ArrowIcon />
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopicsCovered;
