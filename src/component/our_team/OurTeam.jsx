import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import Devid from "../../assest/devid_chelekat.webp";
import FAISAL from "../../assest/faisal_abbasi.webp";
import RAHUL from "../../assest/rahul_bhandari.webp";
import SYED from "../../assest/syed_hyder.webp";
import MONAM from "../../assest/monam.webp";

const teamMembers = [
  { name: "FAISAL ABBASI", img: FAISAL },
  { name: "RAHUL BHANDARI", img: RAHUL },
  { name: "SYED HYDER", img: SYED },
  { name: "DAVID CHELEKET", img: Devid },
  { name: "MONAM NISHAT", img: MONAM },
];

const OurTeam = ({ onBackClick, cursorRef }) => {
  const cardRefs = useRef([]);

useEffect(() => {
  if (!cursorRef || !cursorRef.current) return; 
  const cursor = cursorRef.current;

  const handleEnter = (e) => {
    cursor.innerHTML = "KNOW MORE";
    gsap.to(cursor, { opacity: 1, scale: 1, duration: 0.3, ease: "back.out(1.7)" });
  };

  const handleLeave = (e) => {
    gsap.to(cursor, { opacity: 0, scale: 0.8, duration: 0.3, ease: "power2.inOut" });
  };

  cardRefs.current.forEach((card) => {
    if (!card) return;
    card.addEventListener("mouseenter", handleEnter);
    card.addEventListener("mouseleave", handleLeave);
  });

  return () => {
    cardRefs.current.forEach((card) => {
      if (!card) return;
      card.removeEventListener("mouseenter", handleEnter);
      card.removeEventListener("mouseleave", handleLeave);
    });
  };
}, [cursorRef]);


  return (
    <div className="min-h-screen w-full bg-[#0ABAB1] flex flex-col space-y-36 pt-40 px-24 items-start justify-center relative overflow-hidden">
      <div className="flex  w-full justify-center gap-6 px-4">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="group relative bg-[#00AAB1] hover:bg-white border border-white rounded-3xl 
            flex flex-col items-center justify-between w-[20rem] h-[28rem] transition-colors duration-300"
          >
            <div className="flex items-center gap-2 mb-2 p-4 mx-auto self-start">
              <div className="w-3 h-3 rounded-sm bg-white group-hover:bg-red-500 transition-colors duration-300" />
              <span className="text-white group-hover:text-red-500 text-base font-semibold transition-colors duration-300">
                {member.name}
              </span>
            </div>
            <img
              src={member.img}
              alt={member.name}
              className="transition-all duration-300 w-full scale-105 p-2 overflow-hidden rounded-3xl object-cover"
            />
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center gap-3">
        <button className="px-8 py-4 border border-white text-base text-white font-semibold tracking-widest rounded-xl hover:bg-white hover:text-[#00AAB1] transition">
          DETAILS
        </button>
        <p onClick={onBackClick} className="text-white text-sm tracking-wider cursor-pointer hover:underline">
          &lt;&lt; BACK TO ABOUT
        </p>
      </div>
    </div>
  );
};

export default OurTeam;
