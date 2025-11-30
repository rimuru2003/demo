import React, { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import Popup from "../popup/Popup";

import Devid from "../../assest/Devid.svg";
import FAISAL from "../../assest/FAISAL.svg";
import RAHUL from "../../assest/RAHUL.svg";
import SYED from "../../assest/SYED.svg";
import MONAM from "../../assest/MONAM.svg";
import Icons from "../../assest/detailM.svg";
import Back from "../../assest/back.svg";

// --- Card
const Card = React.forwardRef(
  ({ name, img, rotate = 0, y = 0, x = 0, onClick }, ref) => (
    <div
      ref={ref}
      role="button"
      tabIndex={0}
      aria-label={`Open profile for ${name}`}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onClick?.(e);
      }}
      className="group relative border bg-[#FFFFFF] hover:bg-[#E16C02] border-white rounded-3xl 
      flex flex-col items-center justify-between w-[18rem] sm:w-[20rem] h-[26rem] sm:h-[28rem] 
      overflow-hidden transition-all duration-300 hover:rotate-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"
      style={{
        transform: `rotate(${rotate}deg) translate(${x}px, ${y}px)`,
        zIndex: rotate === 0 ? 20 : 10,
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

// --- Floating "know more" cursor (desktop only)
const KnowMoreCursor = React.forwardRef((props, ref) => {
  const node = (
    <div
      ref={ref}
      className="fixed z-[9999] pointer-events-none "
      style={{ opacity: 0, transform: "scale(0.85)", left: 0, top: 0 }}
    >
      <div className="flex flex-col ml-6 mt-6 items-center gap-2">
        <div
          className="flex items-center gap-4 px-2 py-2 rounded-2xl shadow"
          style={{ background: "#FFFFFF" }}
        >
          <img src={Icons} alt="" className="bg-[#E16C02] p-2 rounded-xl" />
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
  const [isMobile, setIsMobile] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 767);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Desktop-only custom cursor + hover handlers
  useEffect(() => {
    if (isMobile) return;
    const cursor = cursorRef.current;
    if (!cursor) return;

    const move = (e) => {
      gsap.to(cursor, {
        left: e.clientX,
        top: e.clientY,
        duration: 0.12,
        ease: "power3.out",
      });
    };
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

    window.addEventListener("mousemove", move);
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
  }, [isMobile]);

  const teamMembers = [
    { name: "FAISAL ABBASI", img: FAISAL, rotate: -8, x: 130, y: 60 },
    { name: "RAHUL BHANDARI", img: RAHUL, rotate: -8, x: 15, y: 80 },
    { name: "SYED HYDER", img: SYED, rotate: 0, x: 0, y: 0 },
    { name: "DAVID CHELEKET", img: Devid, rotate: 4, x: -20, y: 80 },
    { name: "MONAM NISHAT", img: MONAM, rotate: 8, x: -80, y: 60 },
  ];

  return (
    <div className="h-screen w-full bg-[#FAF4EC] xl:-mt-40 -mt-36 flex flex-col items-center justify-center relative overflow-hidden px-6 md:px-24">
      <KnowMoreCursor ref={cursorRef} />

      <h1 className="text-5xl md:text-8xl font-bold mb-12 text-center">
        Meet Our Team
      </h1>

      {/* Desktop view */}
      {!isMobile ? (
        <div className="flex justify-center gap-6 px-4">
          {teamMembers.map((m, i) => (
            <Card
              key={m.name}
              ref={(el) => (cardRefs.current[i] = el)}
              name={m.name}
              img={m.img}
              rotate={m.rotate}
              x={m.x}
              y={m.y}
              onClick={() => setShowPopup(true)}
            />
          ))}
        </div>
      ) : (
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="w-[18rem] sm:w-[20rem] h-[28rem] rounded-2xl mySwiper"
          cardsEffect={{ slideShadows: false }}
        >
          {teamMembers.map((member) => (
            <SwiperSlide key={member.name}>
              <Card
                name={member.name}
                img={member.img}
                rotate={0}
                x={0}
                y={0}
                onClick={() => setShowPopup(true)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}

    <button
        onClick={onBackClick}
        className="absolute bottom-8 left-8 xl:right-8 flex items-center gap-2 border border-black p-2 h-12 w-12  rounded-2xl 
        text-sm tracking-wider cursor-pointer hover:underline bg-white/50 backdrop-blur"
      >
        <img src={Back} alt="Back" className="w-6 h-6" />
      </button>

      {/* Popup opens when any card is clicked (desktop or mobile) */}
      <Popup open={showPopup} onClose={() => setShowPopup(false)} />
    </div>
  );
};

export default OurTeam;
