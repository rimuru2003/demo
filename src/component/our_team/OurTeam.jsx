import React, { useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";

import Devid from "../../assest/Devid.svg";
import FAISAL from "../../assest/FAISAL.svg";
import RAHUL from "../../assest/RAHUL.svg";
import SYED from "../../assest/SYED.svg";
import MONAM from "../../assest/MONAM.svg";
import Icons from "../../assest/icon.png";
import Cursor from "../../assest/cursor.png";
import Back from "../../assest/back.svg";

const Card = React.forwardRef(
  ({ name, img, rotate = 0, y = 0, x = 0 }, ref) => (
    <div
      ref={ref}
      className="group relative border bg-[#FFFFFF] hover:bg-[#E16C02] border-white rounded-3xl flex flex-col items-center justify-between w-[18rem] sm:w-[20rem] h-[26rem] sm:h-[28rem] overflow-hidden transition-all duration-300 hover:rotate-0"
      style={{
        transform: `rotate(${rotate}deg) translate(${x}px, ${y}px)`,
        zIndex: rotate === 0 ? 20 : 10, // center card appears on top
      }}
    >
      <div className="flex items-center gap-2 mb-2 p-4 mx-auto self-start transition-all duration-300 group-hover:text-white">
        <div className="w-3 h-3 rounded-sm bg-black transition-all duration-300 group-hover:bg-white" />
        <span className="text-base font-semibold text-black transition-all duration-300 group-hover:text-white">
          {name}
        </span>
      </div>

      <img
        src={img}
        alt={name}
        className="transition-all duration-300 w-full scale-105 rounded-3xl object-cover"
      />
    </div>
  )
);

const KnowMoreCursor = React.forwardRef((props, ref) => {
  const node = (
    <div
      ref={ref}
      className="fixed z-[9999] pointer-events-none"
      style={{
        opacity: 0,
        transform: "scale(0.85)",
        left: 0,
        top: 0,
      }}
    >
      <div className="flex flex-col ml-6 mt-6 items-center gap-2">
        <div
          className="flex items-center gap-4  px-2 py-2 rounded-2xl shadow"
          style={{ background: "#FFFFFF" }}
        >
          <img src={Icons} alt="" />
          <span
            className="text-xl leading-none font-semibold tracking-tight"
            style={{ color: "#111" }}
          >
            know more
          </span>
        </div>
      </div>
    </div>
  );
  return createPortal(node, document.body);
});

const OurTeam = ({ onBackClick }) => {
  const cardRefs = useRef([]);
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;
    const move = (e) => {
      gsap.to(cursor, {
        left: e.clientX + 0,
        top: e.clientY + 0,
        duration: 0.12,
        ease: "power3.out",
      });
    };
    window.addEventListener("mousemove", move);

    const enter = () => {
      gsap.to(cursor, {
        opacity: 1,
        scale: 1,
        duration: 0.2,
        ease: "back.out(1.6)",
      });
    };
    const leave = () => {
      gsap.to(cursor, {
        opacity: 0,
        scale: 0.85,
        duration: 0.2,
        ease: "power2.inOut",
      });
    };
    cardRefs.current.forEach((card) => {
      if (!card) return;
      card.addEventListener("mouseenter", enter);
      card.addEventListener("mouseleave", leave);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      cardRefs.current.forEach((card) => {
        if (!card) return;
        card.removeEventListener("mouseenter", enter);
        card.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return (
    <div className="h-screen w-full bg-[#FAF4EC] flex flex-col space-y-36 px-24 items-end justify-center relative overflow-hidden">
      {/* Cursor is created inside OurTeam BUT portaled to document.body */}
      <KnowMoreCursor ref={cursorRef} />

      <div className="flex w-full space-y-14 flex-col justify-center gap-6 px-4 ">
        <h1 className="text-8xl w-full  font-bold">Meet Our Team</h1>
        <div className="flex justify-center gap-6 px-4">
          <Card
            ref={(el) => (cardRefs.current[0] = el)}
            name="FAISAL ABBASI"
            img={FAISAL}
            rotate={-8}
            x={100}
            y={40}
          />
          <Card
            ref={(el) => (cardRefs.current[1] = el)}
            name="RAHUL BHANDARI"
            img={RAHUL}
            rotate={-8}
            x={15}
            y={60}
          />
          <Card
            ref={(el) => (cardRefs.current[2] = el)}
            name="SYED HYDER"
            img={SYED}
            rotate={0}
            x={0}
            y={-20}
          />
          <Card
            ref={(el) => (cardRefs.current[3] = el)}
            name="DAVID CHELEKET"
            img={Devid}
            rotate={4}
            x={20}
            y={60}
          />
          <Card
            ref={(el) => (cardRefs.current[4] = el)}
            name="MONAM NISHAT"
            img={MONAM}
            rotate={8}
            x={40}
            y={40}
          />
        </div>
      </div>

      <span
        onClick={onBackClick}
        className="text-black border-[1.5px] border-black p-2 rounded-2xl text-sm tracking-wider cursor-pointer hover:underline"
      >
        <img src={Back} alt="" className="w-8 h-8" />
      </span>
    </div>
  );
};

export default OurTeam;
