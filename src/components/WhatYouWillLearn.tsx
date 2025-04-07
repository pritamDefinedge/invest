import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ArrowIcon from "./ArrowIcon";

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

const WhatYouWillLearn: React.FC = () => {
  const { sectionRef, listRef } = useGsapAnimation();

  return (
    <section ref={sectionRef} className="py-12 bg-gray-100">
      <div className="w-3/4 mx-auto px-4">
        {/* Title */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-black via-gray-400 to-gray-200">
            What You Will Learn in Our Course?
          </h2>
          <div className="w-1/5 h-1 mt-4 bg-gradient-to-r from-gray-100 to-gray-500 transform origin-left" />
        </div>

        {/* Course Details */}
        <div className="p-4 md:p-8">
          <ul ref={listRef} className="space-y-4 text-gray-700">
            <li className="flex items-center gap-2">
              <ArrowIcon />
              You will gain a lot of insights into market analysis and trading
              from our years of experience and expertise in the market.
            </li>
            <li className="flex items-center gap-2">
              <ArrowIcon />
              This course is a complete journey from a confused speculator to a
              competent Noiseless Trader.
            </li>
            <li className="flex items-center gap-2">
              <ArrowIcon />
              The course commences with the basics of charting techniques and
              slowly proceeds to the understanding of advanced patterns and
              system designing.
            </li>
            <li className="flex items-center gap-2">
              <ArrowIcon />
              Our course is customized to suit individual trading styles. We do
              this by using a questionnaire to keep a track of your learning
              curve and your style of trading.
            </li>
            <li className="flex items-center gap-2">
              <ArrowIcon />
              We cover System Trading, Setup Trading, Behavioral Finance, and
              Money management aspects during the session that will make you
              trade any type of market on your own.
            </li>
            <li className="flex items-center gap-2">
              <ArrowIcon />
              We also gear you up to handle different types of market
              situations, unusual events, and emotional trading by sharing
              different methods and techniques to ready you for the same.
            </li>
            <li className="flex items-center gap-2">
              <ArrowIcon />
              We also equip you to bring objectivity to evaluate all
              observations before deciding on the implementation of them.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhatYouWillLearn;
