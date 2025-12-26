import React, { useRef } from "react";
import curve from "../assest/curve.svg";
import Shapes from "../assest/v2/shapes.svg";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Heros = () => {
  const containerRef = useRef();

  useGSAP(
    () => {
      gsap.fromTo(
        ".float-img",
        {
          y: 300,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 3,
          delay: 0.4,
          ease: "power2.out",
          scrub: 5,
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="pt-16 relative overflow-hidden">
      <div className="xl:mt-10 mx-3 flex flex-col items-center space-y-2 relative z-10">
        <h1 className="text-6xl font-Parkinsans md:text-8xl  xl:text-9xl font-bold xl:text-center ">
          We make things <br />
          possible once and <br />
          always
        </h1>

        <span className="text-xl w-full font-[Inter] md:text-2xl flex flex-wrap justify-start lg:justify-center space-x-1 relative mt-4">
          <span className="relative inline-block font-bold">
            Unleashing Potential
            <img
              src={curve}
              alt="curve underline"
              className="absolute left-0 -bottom-3 w-full pointer-events-none"
            />
          </span>

          <span>through experiential programs</span>
        </span>
      </div>

      <div className="relative w-full xl:-mt-40 overflow-hidden bg-[#FDF6ED]">
        <img
          src={Shapes}
          alt=""
          className="relative w-[135vw] max-w-none -left-[20vw] float-img"
        />
      </div>
    </div>
  );
};

export default Heros;
