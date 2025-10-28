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

const Card = React.forwardRef(({ name, img, rotate = 0, y = 0 }, ref) => (
  <div
    ref={ref}
    className="group relative border bg-[#FFFFFF] hover:bg-[#E16C02] border-white rounded-3xl flex flex-col items-center justify-between w-[20rem] h-[28rem] overflow-hidden transition-all duration-300 hover:rotate-0"
    style={{ transform: `rotate(${rotate}deg) translateY(${y}px)` }}
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
));

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
      <div className="flex flex-col items-center gap-2">
        <img src={Cursor} alt="" />
        <div
          className="flex items-center gap-4 ml-40 px-2 py-2 rounded-2xl shadow"
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

    // follow mouse with left/top (not x/y) so it's immune to ancestor transforms
    const move = (e) => {
      gsap.to(cursor, {
        left: e.clientX + 0, // adjust offsets if you want the pill to trail
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

    // attach hover show/hide to cards
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
    <div className="h-screen w-full bg-[#FAF4EC] flex flex-col space-y-36 px-24 items-start justify-center relative overflow-hidden">
      {/* Cursor is created inside OurTeam BUT portaled to document.body */}
      <KnowMoreCursor ref={cursorRef} />

      <div className="flex w-full justify-center gap-6 px-4 cursor-none">
        <Card
          ref={(el) => (cardRefs.current[0] = el)}
          name="FAISAL ABBASI"
          img={FAISAL}
          rotate={-8}
          y={80}
        />
        <Card
          ref={(el) => (cardRefs.current[1] = el)}
          name="RAHUL BHANDARI"
          img={RAHUL}
          rotate={-4}
          y={80}
        />
        <Card
          ref={(el) => (cardRefs.current[2] = el)}
          name="SYED HYDER"
          img={SYED}
          rotate={0}
          y={-30}
        />
        <Card
          ref={(el) => (cardRefs.current[3] = el)}
          name="DAVID CHELEKET"
          img={Devid}
          rotate={4}
          y={80}
        />
        <Card
          ref={(el) => (cardRefs.current[4] = el)}
          name="MONAM NISHAT"
          img={MONAM}
          rotate={8}
          y={80}
        />
      </div>

      <div className="flex flex-col items-center gap-3">
        <button className="px-8 py-4 border border-black text-base text-black font-semibold tracking-widest rounded-xl hover:bg-[#E46002] hover:text-white transition">
          DETAILS
        </button>
        <p
          onClick={onBackClick}
          className="text-black text-sm tracking-wider cursor-pointer hover:underline"
        >
          &lt;&lt; BACK TO ABOUT
        </p>
      </div>
    </div>
  );
};

export default OurTeam;
