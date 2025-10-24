import React, { useEffect } from "react";
import gsap from "gsap";
import Mouse from "../../assest/mouse.svg";

const Hero = () => {
  useEffect(() => {
    const headings = document.querySelectorAll(".hero-text h1");

    headings.forEach((h1) => {
      const text = h1.textContent;
      const splitText = text.split("");
      const wrapped = splitText.map((char) => `<span>${char}</span>`).join("");
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
    <div className="h-screen w-full flex flex-col justify-around">
      <div className="hero-text h-[70%] flex flex-col mt-14 px-10 items-start font-bold text-[9rem] text-[#4D4D4D] leading-[8.5rem]">
        <h1>We make things</h1>
        <h1>possible once and</h1>
        <h1>always</h1>
      </div>

      <style>{`
        .hero-text h1 span {
          display: inline-block;
        }
      `}</style>

      <div className="flex justify-between w-full p-10">
        <div className="flex items-center gap-2 whitespace-nowrap text-lg font-medium">
          <img src={Mouse} alt="mouse" className="h-5 w-auto" />
          <p>[Scroll to explore More]</p>
        </div>

        <div className="flex gap-x-3 justify-center items-center">
          <div className="h-5 w-5 bg-red-600"></div>
          <div className="flex gap-x-1 tracking-[0.25em] text-lg">
            <p className="font-bold">Unleashing Potential</p>
            <p className="font-bold text-slate-500">
              Through Experiential Programs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
