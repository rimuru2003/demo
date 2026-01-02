import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Airtel from "../assest/logo/AirtelB.svg";
import AirtelG from "../assest/logo_gray/AirtelG.svg";

gsap.registerPlugin(useGSAP);

const logos = [
  { id: 1, gray: AirtelG, color: Airtel },
  { id: 2, gray: AirtelG, color: Airtel },
  { id: 3, gray: AirtelG, color: Airtel },
  { id: 4, gray: AirtelG, color: Airtel },
  { id: 5, gray: AirtelG, color: Airtel },
  { id: 6, gray: AirtelG, color: Airtel },
  { id: 7, gray: AirtelG, color: Airtel },
  { id: 8, gray: AirtelG, color: Airtel },
  { id: 9, gray: AirtelG, color: Airtel },
  { id: 10, gray: AirtelG, color: Airtel },
  { id: 11, gray: AirtelG, color: Airtel },
];

const LogoCard = ({ logo }) => {
  return (
    <div className="relative lg:w-[220px] w-[180px] h-[100px] lg:h-[140px] grid place-items-center group py-6">
      <div className="absolute inset-0 rounded-xl transition-colors duration-300 group-hover:bg-[#E61F25]" />

      <img
        src={logo.gray}
        alt=""
        className="absolute lg:w-[120px] w-[80px] transition-opacity duration-300 group-hover:opacity-0"
      />

      <img
        src={logo.color}
        alt=""
        className="absolute  opacity-0  lg:w-[120px] w-[80px] group-hover:opacity-100"
      />
    </div>
  );
};

const LogoColumn = ({ direction = "up" }) => {
  const containerRef = useRef(null);
  const listRef = useRef(null);

  useGSAP(
    () => {
      const list = listRef.current;
      if (!list) return;

      const halfHeight = Math.round(list.scrollHeight / 2);

      gsap.set(list, { force3D: true });

      gsap.fromTo(
        list,
        { y: direction === "up" ? 0 : -halfHeight },
        {
          y: direction === "up" ? -halfHeight : 0,
          duration: 20,
          ease: "none",
          repeat: -1,
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="flex-1 h-full overflow-hidden"
      style={{
        WebkitMaskImage: `
          linear-gradient(
            to bottom,
            rgba(0,0,0,0) 0%,
            rgba(0,0,0,0.25) 8%,
            rgba(0,0,0,1) 20%,
            rgba(0,0,0,1) 80%,
            rgba(0,0,0,0.25) 92%,
            rgba(0,0,0,0) 100%
          )
        `,
        maskImage: `
          linear-gradient(
            to bottom,
            rgba(0,0,0,0) 0%,
            rgba(0,0,0,0.25) 8%,
            rgba(0,0,0,1) 20%,
            rgba(0,0,0,1) 80%,
            rgba(0,0,0,0.25) 92%,
            rgba(0,0,0,0) 100%
          )
        `,
      }}
    >
      <div
        ref={listRef}
        className="flex flex-col items-center space-y-40 will-change-transform"
      >
        {[...logos, ...logos].map((logo, i) => (
          <LogoCard key={i} logo={logo} />
        ))}
      </div>
    </div>
  );
};

const Clients = () => {
  return (
    <div className="h-screen flex flex-col-reverse lg:flex-row justify-evenly overflow-hidden">
      <div className="lg:w-[30%] w-[90%] mx-auto h-full flex  overflow-hidden">
        <LogoColumn direction="up" />
        <LogoColumn direction="down" />
      </div>

      {/* RIGHT SIDE – CONTENT */}
      <div className="lg:w-[50%] w-full  h-full flex flex-col justify-evenly px-8">
        <div className="text-4xl  text-center font-bold font-Parkinsans lg:text-start xsm:text-5xl sm:text-6xl md:text-8xl xxl:text-[7rem]">
          These brands
          <br /> we worked
          <br /> with.
        </div>

      
      </div>
    </div>
  );
};

export default Clients;
