import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Mouse from "../../assest/mouse.svg";
import CounterBox from "./Counter";

const Hero = () => {
  const heroRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ---------- TEXT ANIMATION ----------
      const headings = document.querySelectorAll(".hero-text h1, .hero-text p");

      headings.forEach((h1) => {
        const text = h1.textContent;
        const wrapped = text
          .split("")
          .map((char) =>
            char === " "
              ? `<span style="display:inline-block; width:0.5em;">&nbsp;</span>`
              : `<span>${char}</span>`
          )
          .join("");
        h1.innerHTML = wrapped;
      });

      gsap.from(".hero-text h1 span", {
        y: 50,
        stagger: 0.05,
        duration: 1.2,
        opacity: 0,
        ease: "back.out(1.7)",
      });

      const cards = cardsRef.current.filter(Boolean);
      if (!cards.length) return;

      cards.forEach((card) => {
        gsap.set(card, {
          scale: 1,
          rotate: 0,
          transformOrigin: "center center",
        });
      });

      // set margin overlap
      cards.forEach((card, i) => {
        if (i !== 0) gsap.set(card, { marginLeft: -30 });
      });

      const randomTilt = () => (Math.random() > 0.5 ? 8 : -8);

      cards.forEach((card, i) => {
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            scale: 1.05,
            rotate: 0,
            duration: 0.8,
            ease: "expo.out",
            marginRight: 50,
            marginLeft: 50,
          });

          gsap.to(cards.slice(i + 1), {
            x: 25,
            duration: 0.8,
            ease: "expo.out",
          });
          gsap.to(cards.slice(0, i), {
            x: -25,
            duration: 0.8,
            ease: "expo.out",
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            scale: 1,
            rotate: randomTilt(),
            duration: 0.8,
            ease: "expo.out",
            marginRight: -10,
            marginLeft: -10,
          });
          gsap.to(cards, { x: 0, duration: 0.5 });
        });
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative h-[125vh] w-full overflow-hidden flex flex-col space-y-52"
    >
      {/* ---------- TEXT SECTION ---------- */}
      <div
        className="hero-text flex mt-28 flex-col font-Parkinsans text-[#1A1A1A]
         px-10 items-start font-bold text-[6rem] leading-[1.05]"
      >
        <h1 className="">
          We Make Things Possible
        </h1>
        <h1 className="">
          Once And Always
        </h1>
        <p className="text-3xl hero-text font-semibold">
          Unleashing Potential Through Experiential Programs
        </p>
        <style>{`
        .hero-text h1 span, .hero-text p span {
          display: inline-block;
        }
      `}</style>
      </div>

      <div className="flex justify-center font-[Inter] p-4">
        <div
          ref={(el) => (cardsRef.current[0] = el)}
          className="w-80 -ml-8 q1 rounded-3xl h-[28rem] bg-[#F9B900]"
        >
          <CounterBox
            value={900}
            mainHeading="Projects Worldwide"
            subHeading="Crafted for Every Culture"
          />
        </div>
        <div
          ref={(el) => (cardsRef.current[1] = el)}
          className="w-80 -ml-8 q2 rounded-3xl h-[28rem] bg-blue-500"
        >
          <img
            src="https://via.placeholder.com/400x400"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        <div
          ref={(el) => (cardsRef.current[2] = el)}
          className="w-80 -ml-8 q3 rounded-3xl h-[28rem] bg-green-500"
        >
          <CounterBox
            value={13}
            mainHeading="Projects Worldwide"
            subHeading="Crafted for Every Culture"
          />
        </div>
        <div
          ref={(el) => (cardsRef.current[3] = el)}
          className="w-80 -ml-8 q4 rounded-3xl h-[28rem] bg-yellow-500"
        >
          <img
            src="https://via.placeholder.com/400x400"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        <div
          ref={(el) => (cardsRef.current[4] = el)}
          className="w-80 -ml-8 q5 rounded-3xl h-[28rem] bg-purple-500"
        >
          <CounterBox
            value={100}
            mainHeading="Projects Worldwide"
            subHeading="Crafted for Every Culture"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
