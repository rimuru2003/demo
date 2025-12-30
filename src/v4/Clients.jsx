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
    <div className="relative w-[220px] h-[140px] grid place-items-center group py-6">
      <div className="absolute inset-0 rounded-xl transition-colors duration-300 group-hover:bg-[#E61F25]" />

      <img
        src={logo.gray}
        alt=""
        className="absolute w-[120px] transition-opacity duration-300 group-hover:opacity-0"
      />

      <img
        src={logo.color}
        alt=""
        className="absolute w-[120px] opacity-0 group-hover:opacity-100"
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
    <div className="h-screen flex flex-col-reverse lg:flex-row justify-evenly">
      <div className="lg:w-[30%] w-full mx-6 h-full flex  overflow-hidden">
        <LogoColumn direction="up" />
        <LogoColumn direction="down" />
      </div>

      {/* RIGHT SIDE – CONTENT */}
      <div className="lg:w-[50%] w-full mx-6 h-full flex flex-col justify-evenly px-8">
        <div className="text-4xl  text-center font-bold font-Parkinsans lg:text-start xsm:text-5xl sm:text-6xl md:text-8xl xxl:text-[7rem]">
          These brands
          <br /> we worked
          <br /> with.
        </div>

        <div className="flex justify-end space-x-8">
          <span className="border-r-8 text-6xl border-[#E61F25] pr-4">
            <p className="flex font-extrabold">
              900<span className="font-bold">+</span>
            </p>
            <p className="font-semibold text-end text-lg">Projects Worldwide</p>
          </span>

          <span className="border-r-8 text-6xl border-[#F9B900] pr-4">
            <p className="flex font-extrabold">
              13<span className="font-bold">+</span>
            </p>
            <p className="font-semibold text-end text-lg">Countries</p>
          </span>

          <span className="border-r-8 text-6xl border-[#0ABAB5] pr-4">
            <p className="flex font-extrabold">
              100<span className="font-bold">+</span>
            </p>
            <p className="font-semibold text-end text-lg">Brands</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Clients;
