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
      <div className="xl:mt-10 mx-3 flex flex-col items-center space-y-2 relative z-10">
        <h1 className="text-6xl md:text-8xl  xl:text-9xl font-bold xl:text-center ">
          We make things <br />
          possible once and <br />
          always
        </h1>

        <span className="text-xl w-full md:text-2xl flex flex-wrap justify-start lg:justify-center space-x-1 relative mt-4">
          <p className="font-bold">Unleashing Potential</p>
          <p>through experiential programs</p>
          <img
            src={curve}
            alt="curve underline"
            className="absolute xl:left-[35%] lg:left-[20%]  -bottom-4 w-[230px] pointer-events-none"
          />
        </span>
      </div>

      <div className="relative h-[40rem] mt-20 xl:pt-10 w-full">
        <img
          src={tri}
          alt=""
          className="float-img absolute z-[5] md:top-0 md:left-0 md:h-44 xl:top-0 h-28 xl:left-0 xl:h-96
           lg:h-64  "
        />
        <img
          src={tricir}
          alt=""
          className="float-img absolute xl:-left-[12%] md:top-8 md:-left-[22%] md:h-44 h-28 xl:top-1/4 z-[4] xl:h-80 
          lg:h-64 lg:top-8 lg:-left-[20%]"
        />
        <img
          src={circle}
          alt=""
          className="float-img absolute xl:left-[25%]  md:top-0 md:left-[30%] md:h-44  h-28 xl:bottom-1/3 z-[3] xl:h-96 
          lg:h-60 lg:top-0 lg:left-[35%]"
        />
        <img
          src={yellcir}
          alt=""
          className="float-img absolute xl:left-[40%] md:top-20 md:right-[30%] md:h-44 h-28 xl:top-1/4  z-[4] xl:h-[30rem] 
          lg:h-64 lg:right-[25%]  "
        />
        <img
          src={flower}
          alt=""
          className="float-img absolute xl:right-[15%] md:top-20 md:right-[18%] md:h-48 h-28 rotate-6 xl:bottom-5  z-[5]  xl:h-[35rem]
          lg:h-72 lg:right-[5%] 
          "
        />
        <img
          src={semicir}
          alt=""
          className="float-img absolute xl:right-10 md:top-28 md:right-0 md:h-44 h-28 xl:top-1/4  z-[4] xl:h-[30rem] 
          lg:h-64 "
        />
        <img
          src={bluetri}
          alt=""
          className="float-img absolute xl:-right-44 md:top-10 md:-right-24 md:h-40 h-28 xl:top-1/4 -rotate-6  z-[3] xl:h-80 
          lg:h-44 lg:-right-[10%] "
        />
      </div>
    </div>
  );
};

export default Heros;
