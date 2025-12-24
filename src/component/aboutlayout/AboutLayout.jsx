import React, { useRef, useState } from "react";
import gsap from "gsap";
import About from "../aboutus/About";
import OurTeam from "../our_team/OurTeam";

const AboutLayout = () => {
  const [showTeam, setShowTeam] = useState(false);
  const containerRef = useRef(null);

  const goToTeam = () => {
    setShowTeam(true);
    gsap.to(containerRef.current, {
      x: "-100vw",
      duration: 1,
      ease: "power3.inOut",
    });
  };

  const goToAbout = () => {
    gsap.to(containerRef.current, {
      x: "0vw",
      duration: 1,
      ease: "power3.inOut",
      onComplete: () => setShowTeam(false),
    });
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <div ref={containerRef} className="flex w-[200vw] h-full">
        <div className="w-[100vw] h-full">
          <About goToTeam={goToTeam} />
        </div>
        <div className="w-[100vw] h-full">
          <OurTeam onBackClick={goToAbout} />
        </div>
      </div>
    </div>
  );
};

export default AboutLayout;
