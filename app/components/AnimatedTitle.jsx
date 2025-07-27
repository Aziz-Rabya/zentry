"use client";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clsx from "clsx";

gsap.registerPlugin(ScrollTrigger);

const AnimatedTitle = ({ title, containerClass }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".animated-word", {
        opacity: 0,
        transform: "translate3d(10px, 50px, -60px) rotateY(60deg) rotateX(-40deg)",
        transformOrigin: "50% 50% -150px",
      });

      gsap.to(".animated-word", {
        opacity: 1,
        transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
        ease: "power2.inOut",
        stagger: 0.05,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Support splitting title on newline chars (\n)
  const lines = title.split("\n");

  return (
    <div ref={containerRef} className={clsx("animated-title", containerClass)}>
      {lines.map((line, index) => (
        <div
          key={index}
          className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
        >
          {line.split(" ").map((word, idx) => (
            <span key={idx} className="animated-word">
              {word}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default AnimatedTitle;
