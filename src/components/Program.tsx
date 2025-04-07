import React from "react";
import useGsapAnimation from "../hooks/useGsapAnimation";
import ArrowIcon from "./ArrowIcon";

const Program: React.FC = () => {
  const { sectionRef, listRef } = useGsapAnimation();

  return (
    <section ref={sectionRef} className="py-12 bg-gray-100">
      <div className="w-3/4 mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-black via-gray-400 to-gray-200">
            Here are the key takeaways from the program -
          </h2>
          
          <div className="w-1/5 h-1 mt-4 bg-gradient-to-r from-gray-100 to-gray-500 transform origin-left" />
        </div>
        <div className="rounded-md">
          <ul ref={listRef} className="list-disc pl-6 space-y-4">
            <li className="flex items-center gap-2">
              <ArrowIcon />
              You will completely transform the way you trade and invest!
            </li>
            <li className="flex items-center gap-2">
              <ArrowIcon />
              Your understanding of noiseless charting techniques will improve,
              helping you learn how to trade.
            </li>
            <li className="flex items-center gap-2">
              <ArrowIcon />
              You will gain a detailed understanding of relative strength, which
              will help you know what to trade.
            </li>
            <li className="flex items-center gap-2">
              <ArrowIcon />
              
              You will understand Breadth indicators that can help you know when
              to trade.
            </li>
            <li className="flex items-center gap-2">
              <ArrowIcon />
              You will learn what it takes to be a successful trader by managing
              your gains even in volatile market conditions.
            </li>
            <li className="flex items-center gap-2">
              <ArrowIcon />
              You will develop a keen understanding of market conditions, so you
              can make profits not only from trading but also from NOT trading!
            </li>
            <li className="flex items-center gap-2">
              <ArrowIcon />
              We offer complete hand-holding until you can successfully
              implement your learnings.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Program;
