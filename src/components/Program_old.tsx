import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
const Program: React.FC = () => {
  const listRef = useRef<HTMLUListElement>(null);

  // useEffect(() => {
  //   if (!listRef.current) return;

  //   const listItems = Array.from(listRef.current.children);
  //   if (listItems.length === 0) return;

  //   const ctx = gsap.context(() => {
  //     gsap.fromTo(
  //       listItems,
  //       {
  //         opacity: 0,
  //         y: 50,
  //       },
  //       {
  //         opacity: 1,
  //         y: 0,
  //         stagger: 0.2,
  //         duration: 0.8,
  //         ease: "power2.out",
  //       }
  //     );
  //   }, listRef);

  //   return () => ctx.revert();
  // }, []);

  // Staggered Fade + Bounce Animation
  // useEffect(() => {
  //   if (!listRef.current) return;

  //   const ctx = gsap.context(() => {
  //     gsap.from(listRef.current!.children, {
  //       duration: 0.8,
  //       opacity: 0,
  //       y: 50,
  //       scale: 0.8,
  //       ease: "elastic.out(1, 0.5)",
  //       stagger: 0.15,
  //     });
  //   }, listRef);

  //   return () => ctx.revert();
  // }, []);

  // 3D Flip Animation
  // useEffect(() => {
  //   if (!listRef.current) return;

  //   const ctx = gsap.context(() => {
  //     gsap.from(listRef.current!.children, {
  //       duration: 1,
  //       rotationX: 90,
  //       transformOrigin: "top center",
  //       opacity: 0,
  //       stagger: 0.2,
  //       ease: "back.out(1.7)",
  //     });
  //   }, listRef);

  //   return () => ctx.revert();
  // }, []);

  // Color Wave Effect
  // useEffect(() => {
  //   if (!listRef.current) return;

  //   const ctx = gsap.context(() => {
  //     const items = listRef.current!.children;

  //     // Initial state
  //     gsap.set(items, {
  //       opacity: 0,
  //       color: "#4f46e5", // purple
  //     });

  //     // Animation
  //     gsap.to(items, {
  //       opacity: 1,
  //       color: "#1e293b", // slate-800
  //       duration: 0.8,
  //       stagger: 0.15,
  //       ease: "sine.inOut",
  //     });
  //   }, listRef);

  //   return () => ctx.revert();
  // }, []);

  // Morphing Background + Scale
  // useEffect(() => {
  //   if (!listRef.current) return;

  //   const ctx = gsap.context(() => {
  //     const items = listRef.current!.children;

  //     // Add background div to each item
  //     Array.from(items).forEach(item => {
  //       const bg = document.createElement('div');
  //       bg.className = 'absolute inset-0 bg-blue-100 rounded-md -z-10';
  //       item.style.position = 'relative';
  //       item.style.zIndex = '1';
  //       item.prepend(bg);
  //     });

  //     // Animation
  //     gsap.from(items, {
  //       scale: 0.95,
  //       duration: 1,
  //       stagger: 0.1,
  //       ease: "back.out(1.7)",
  //     });

  //     gsap.from(".absolute", {
  //       scaleX: 0,
  //       transformOrigin: "left center",
  //       duration: 0.8,
  //       stagger: 0.1,
  //       ease: "power3.out",
  //     });
  //   }, listRef);

  //   return () => ctx.revert();
  // }, []);

  // Scroll-Triggered Animations
  // useEffect(() => {
  //   if (!listRef.current) return;

  //   const ctx = gsap.context(() => {
  //     const items = listRef.current!.children;

  //     gsap.from(items, {
  //       opacity: 0,
  //       y: 100,
  //       duration: 0.8,
  //       stagger: 0.1,
  //       ease: "power2.out",
  //       scrollTrigger: {
  //         trigger: listRef.current,
  //         start: "top 80%",
  //         toggleActions: "play none none none"
  //       }
  //     });
  //   }, listRef);

  //   return () => ctx.revert();
  // }, []);

  return (
    <section className="py-12 bg-gray-100">
      <div className="w-3/4 mx-auto">
        <div className="mb-4">
          <h4 className="text-3xl font-semibold">
            Here are the key takeaways from the program -
          </h4>
        </div>

        <div className="p-8 rounded-md">
          <ul ref={listRef} className="list-disc pl-6 space-y-4">
            <li className="text-md">
              You will completely transform the way you trade and invest!
            </li>
            <li className="text-md">
              Your understanding of noiseless charting techniques will improve,
              helping you learn how to trade.
            </li>
            <li className="text-md">
              You will gain a detailed understanding of relative strength, which
              will help you know what to trade.
            </li>
            <li className="text-md">
              You will understand Breadth indicators that can help you know when
              to trade.
            </li>
            <li className="text-md">
              You will learn what it takes to be a successful trader by managing
              your gains even in volatile market conditions.
            </li>
            <li className="text-md">
              You will develop a keen understanding of market conditions, so you
              can make profits not only from trading but also from NOT trading!
            </li>
            <li className="text-md">
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
