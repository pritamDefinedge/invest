import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useGsapAnimation = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  // Gradient Animation (Runs Once)
  useEffect(() => {
    gsap.set("#takeaways", { attr: { x1: -1000, x2: 0 } });
    gsap.to("#takeaways", {
      duration: 1,
      attr: { x1: 1000, x2: 2000 },
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none reset",
      },
    });
  }, []);

  // List Animation (Triggers Every Time Section Comes Into View)
  useEffect(() => {
    if (!listRef.current || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      const items = listRef.current!.children;

      gsap.set(items, { opacity: 0, color: "#4f46e5" });

      gsap.to(items, {
        opacity: 1,
        color: "#1e293b",
        duration: 0.8,
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

export default useGsapAnimation;
