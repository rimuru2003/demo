import React, { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
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

const Card = React.forwardRef(
  ({ name, img, onClick, onEnter, onLeave }, ref) => (
    <div
      ref={ref}
      onClick={onClick}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="group bg-white hover:bg-[#E16C02] border border-white rounded-3xl w-[18rem] sm:w-[20rem] h-[26rem] sm:h-[28rem] flex flex-col justify-between overflow-hidden cursor-pointer transition-colors duration-300"
    >
      <div className="flex items-center gap-2 p-4 group-hover:text-white">
        <div className="w-3 h-3 bg-black group-hover:bg-white rounded-sm" />
        <span className="font-semibold">{name}</span>
      </div>
      <img
        src={img}
        alt={name}
        className="w-full scale-105 rounded-3xl object-cover"
      />
    </div>
  )
);

const KnowMoreCursor = React.forwardRef((_, ref) =>
  createPortal(
    <div
      ref={ref}
      className="fixed pointer-events-none z-[9999]"
      style={{ opacity: 0, transform: "scale(0.85)", left: 0, top: 0 }}
    >
      <div className="ml-6 mt-6">
        <div className="flex items-center gap-3 bg-white px-3 py-2 rounded-2xl shadow">
          <img src={Icons} alt="" className="bg-[#E16C02] p-2 rounded-xl" />
          <span className="text-lg font-semibold text-black">know more</span>
        </div>
      </div>
    </div>,
    document.body
  )
);

const OurTeam = ({ onBackClick }) => {
  const containerRef = useRef(null);
  const cursorRef = useRef(null);
  const cardRefs = useRef([]);
  const [isMobile, setIsMobile] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const team = [
    { name: "FAISAL ABBASI", img: FAISAL, rotate: -8, x: 130, y: -60 },
    { name: "RAHUL BHANDARI", img: RAHUL, rotate: -8, x: 15, y: -80 },
    { name: "SYED HYDER", img: SYED, rotate: 0, x: 0, y: -120 },
    { name: "DAVID CHELEKET", img: Devid, rotate: 4, x: -20, y: -80 },
    { name: "MONAM NISHAT", img: MONAM, rotate: 8, x: -80, y: -60 },
  ];

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useGSAP(
    () => {
      if (isMobile) return;
      cardRefs.current.forEach((el) =>
        gsap.set(el, { rotate: 0, x: 0, y: 0, zIndex: 10 })
      );
    },
    { scope: containerRef, dependencies: [isMobile] }
  );

  useGSAP(
    () => {
      if (isMobile || !cursorRef.current) return;
      const move = (e) => {
        gsap.to(cursorRef.current, {
          left: e.clientX,
          top: e.clientY,
          duration: 0.12,
          ease: "power3.out",
        });
      };
      window.addEventListener("mousemove", move);
      return () => window.removeEventListener("mousemove", move);
    },
    { dependencies: [isMobile] }
  );

  const showCursor = () =>
    gsap.to(cursorRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.2,
      ease: "back.out(1.6)",
    });
  const hideCursor = () =>
    gsap.to(cursorRef.current, {
      opacity: 0,
      scale: 0.85,
      duration: 0.2,
      ease: "power2.inOut",
    });

  const handleEnter = (i) => {
    const { rotate, x, y } = team[i];
    gsap.to(cardRefs.current[i], {
      rotate,
      x,
      y,
      duration: 0.4,
      ease: "power3.out",
      zIndex: 20,
    });
    showCursor();
  };

  const handleLeave = (i) => {
    gsap.to(cardRefs.current[i], {
      rotate: 0,
      x: 0,
      y: 0,
      duration: 0.35,
      ease: "power3.inOut",
      zIndex: 10,
    });
    hideCursor();
  };

  return (
    <div
      ref={containerRef}
      className="h-screen bg-[#FAF4EC] overflow-hidden flex flex-col items-center justify-center 
      relative px-6 md:px-24"
    >
      <KnowMoreCursor ref={cursorRef} />
      <h1 className="text-5xl md:text-8xl font-bold  text-center">
        Meet Our Team
      </h1>

      {!isMobile ? (
        <div className="flex gap-6  mt-36">
          {team.map((m, i) => (
            <Card
              key={m.name}
              ref={(el) => (cardRefs.current[i] = el)}
              name={m.name}
              img={m.img}
              onClick={() => setShowPopup(true)}
              onEnter={() => handleEnter(i)}
              onLeave={() => handleLeave(i)}
            />
          ))}
        </div>
      ) : (
        <Swiper
          effect="cards"
          modules={[EffectCards]}
          grabCursor
          className="w-[18rem] h-[28rem]"
        >
          {team.map((m) => (
            <SwiperSlide key={m.name}>
              <Card
                name={m.name}
                img={m.img}
                onClick={() => setShowPopup(true)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      <button
        onClick={onBackClick}
        className="absolute bottom-8 left-8 p-3 rounded-xl border bg-white/70"
      >
        <img src={Back} alt="Back" className="w-6 h-6" />
      </button>

      <Popup open={showPopup} onClose={() => setShowPopup(false)} />
    </div>
  );
};

export default OurTeam;
