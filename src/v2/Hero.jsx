import React, { useRef } from "react";
import curve from "../assest/curve.svg";
import yellcir from "../assest/v2/yellcir.svg";
import bluetri from "../assest/v2/bluetri.svg";
import flower from "../assest/v2/flower.svg";
import semicir from "../assest/v2/semicir.svg";
import tri from "../assest/v2/tri.svg";
import circle from "../assest/v2/circle.svg";
import tricir from "../assest/v2/tricir.svg";
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
          delay: 0,
          stagger: 0.3,
          ease: "bounce.out",
          scrub: 5,
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="pt-16 relative overflow-hidden">
      <div className="mt-10 flex flex-col items-center space-y-2 relative z-10">
        <h1 className="text-6xl md:text-8xl font-bold text-center leading-tight">
          We make things <br />
          possible once and <br />
          always
        </h1>

        <span className="text-xl md:text-2xl flex flex-wrap justify-center space-x-1 relative mt-4">
          <p className="font-bold">Unleashing Potential</p>
          <p>through experiential programs</p>
          <img
            src={curve}
            alt="curve underline"
            className="absolute left-0  -bottom-4 w-[230px] pointer-events-none"
          />
        </span>
      </div>

      <div className="relative h-[40rem] pt-10 w-full">
        <img
          src={tri}
          alt=""
          className="float-img absolute z-[5] top-0  left-0 h-96  "
        />
        <img
          src={tricir}
          alt=""
          className="float-img absolute -left-[12%] top-1/4 z-[4] h-80 "
        />
        <img
          src={circle}
          alt=""
          className="float-img absolute left-[25%] bottom-1/3 z-[3] h-96 "
        />
        <img
          src={yellcir}
          alt=""
          className="float-img absolute left-[40%] top-1/4  z-[4] h-[30rem]  "
        />
        <img
          src={flower}
          alt=""
          className="float-img absolute right-[15%] rotate-6 bottom-5  z-[5]  h-[35rem]"
        />
        <img
          src={semicir}
          alt=""
          className="float-img absolute right-10 top-1/4  z-[4] h-[30rem] "
        />
        <img
          src={bluetri}
          alt=""
          className="float-img absolute -right-44  top-1/4 -rotate-6  z-[3] h-80  "
        />
      </div>
    </div>
  );
};

export default Heros;
