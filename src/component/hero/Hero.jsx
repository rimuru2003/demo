import React, { useEffect } from "react";
import gsap from "gsap";
import Mouse from "../../assest/mouse.svg";
import Ballpit from "../../animation/BallpitCanvas.jsx";

const Hero = () => {
  useEffect(() => {
    const headings = document.querySelectorAll(".hero-text h1");

    headings.forEach((h1) => {
      const text = h1.textContent;
      const wrapped = text
        .split("")
        .map((char) => {
          if (char === " ")
            return `<span style="display:inline-block; width:0.5em;">&nbsp;</span>`;
          return `<span>${char}</span>`;
        })
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
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden flex flex-col justify-around">
      <Ballpit
        count={130}
        gravity={0}
        friction={1 }
        wallBounce={0.95}
        followCursor={true}
        className="absolute inset-0 -z-10 pointer-events-none"
      />
   
      <div className="relative z-10 space-y-48">
        <div className="hero-text h-[70%] flex flex-col text-[#1A1A1A] 
         px-10 items-start font-bold text-[9rem]  leading-[8.5rem]">
          <h1>We make things</h1>
          <h1>possible once and</h1>
          <h1>always</h1>
        </div>

        <style>{`
          .hero-text h1 span { display: inline-block; }
        `}</style>

        <div className="flex justify-between w-full text-[#1A1A1A] p-10">
          <div className="flex items-center gap-2 whitespace-nowrap text-lg font-medium">
            <img src={Mouse} alt="mouse" className="h-5 w-auto" />
            <p>[Scroll to explore More]</p>
          </div>

          <div className="flex gap-x-3 justify-center items-center">
            <div className="h-5 w-5 bg-[#E16C02]"></div>
            <div className="flex gap-x-1 tracking-[0.25em] text-lg">
              <p className="font-bold">Unleashing Potential</p>
              <p className="font-bold text-slate-500">
                Through Experiential Programs
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
