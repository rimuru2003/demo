import React, { useRef, useState } from "react";
import gsap from "gsap";
import CounterBox from "./Counter";
import OurTeam from "../our_team/OurTeam";
import Leafs from "../../assest/leaf.svg"
import { useGSAP } from "@gsap/react";

const About = () => {
  const containerRef = useRef(null);
  const leafref = useRef(null)
  const [showTeam, setShowTeam] = useState(false);
  const goToTeam = () => {
    setShowTeam(true);

    // Slide container
    gsap.to(containerRef.current, {
      x: "-100vw",
      duration: 1,
      ease: "power3.inOut",
    });

    // Rotate leaf 240deg forward
    gsap.to(leafref.current, {
      rotate: "+=240",
      duration: 1,
      ease: "power2.inOut",
    });
  };

  // ---- Slide back to About + leaf rotate backward ----
  const goToAbout = () => {
    gsap.to(containerRef.current, {
      x: "0vw",
      duration: 1,
      ease: "power3.inOut",
      onComplete: () => setShowTeam(false),
    });

    // Rotate leaf -240deg
    gsap.to(leafref.current, {
      rotate: "-=240",
      duration: 1,
      ease: "power2.inOut",
    });
  };



  return (
    <div className="w-full h-screen overflow-hidden relative">
         <div>
        <img
          src={Leafs}
          alt=""
          className="absolute -bottom-28 -right-16 "
          ref={leafref}
        />
      </div>
      <div ref={containerRef} className="flex w-[200vw] h-full">
        {/* ---- ABOUT PAGE ---- */}
        <div className="w-[100vw] h-full bg-[#0ABAB5] text-white">
          <div className="flex">
            <div className="">
              <div className="flex justify-between pt-12 pb-2 items-center border-b-[1.5px] w-[95%] mx-auto">
                <div className="text-lg font-medium">[ About ]</div>
                <div className="flex justify-center items-center gap-x-3 text-xl font-medium">
                  <p>Engage.</p>
                  <p>Hustle.</p>
                  <p>Win.</p>
                  <p>Repeat.</p>
                </div>
              </div>

              <div className="flex mx-11 justify-between">
                <div className="w-[80%] font-medium text-5xl text-start pt-16 tracking-wider">
                  Engage is a multi-faceted services organization that
                  conceptualizes, designs, and delivers world-class people
                  engagement programs — from C-suite curated experiences to
                  transformational workshops with top speakers and trainers,
                  driving measurable organizational change. Rooted in Antworx
                  Experience...
                </div>

                <div className="flex flex-col justify-center items-center">
                  <CounterBox value={13} label="Countries" />
                  <CounterBox value={100} label="Brands" />
                  <CounterBox value={900} label="Projects Worldwide" />
                </div>
              </div>

              <div className="flex flex-col justify-center items-start gap-y-8 w-[95%] mt-14 mx-auto">
                <div className="flex justify-center items-center mb-8 relative">
                  <div className="w-24 h-24 border-2 bg-[#0ABAB5] border-white rounded-2xl absolute left-0 z-10" />
                  <div className="w-24 h-24 border-2 bg-[#0ABAB5] border-white rounded-2xl z-10 absolute left-20" />
                  <div className="w-24 h-24 border-2 bg-[#0ABAB5] border-white rounded-2xl z-40 absolute left-56" />
                  <div className="w-24 h-24 border-2 bg-[#0ABAB5] border-white rounded-2xl z-30 absolute left-40" />
                </div>

                <p
                  onClick={goToTeam}
                  className="text-xl sm:text-2xl font-medium tracking-widest flex items-center gap-[6px] cursor-pointer hover:underline"
                >
                  MEET OUR TEAM
                  <span className="flex gap-[4px]">
                    <span>&gt;</span>
                    <span>&gt;</span>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ---- OUR TEAM PAGE ---- */}
        <div className="w-[100vw] h-full">
          <OurTeam onBackClick={goToAbout} />
        </div>
      </div>
    </div>
  );
};

export default About;
