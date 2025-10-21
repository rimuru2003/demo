import React, { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";
import About from "../aboutus/About";
import OurTeam from "../our_team/OurTeam";
import Leafs from "../../assest/leaf.svg";

const AboutLayout = () => {
  const [showTeam, setShowTeam] = useState(false);
  const containerRef = useRef(null);
  const leafRef = useRef(null);
  const cursorRef = useRef(null);

    useEffect(() => {
    if (!cursorRef.current) return;
    const cursor = cursorRef.current;

    const moveCursor = (e) => {
      gsap.to(cursor, {
        left: e.clientX + 20,
        top: e.clientY + 20,
        duration: 0.25,
        ease: "power3.out",
      });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  const goToTeam = () => {
    setShowTeam(true);
    gsap.to(containerRef.current, { x: "-100vw", duration: 1, ease: "power3.inOut" });
    gsap.to(leafRef.current, { rotate: "+=240", duration: 1, ease: "power2.inOut" });
  };

  const goToAbout = () => {
    gsap.to(containerRef.current, {
      x: "0vw",
      duration: 1,
      ease: "power3.inOut",
      onComplete: () => setShowTeam(false),
    });
    gsap.to(leafRef.current, { rotate: "-=240", duration: 1, ease: "power2.inOut" });
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {createPortal(
        <div
          ref={cursorRef}
          className="fixed z-[9999] pointer-events-none bg-white text-[#0ABAB5] text-sm font-bold px-3 py-1 rounded-full shadow opacity-0 scale-0"
        ></div>,
        document.body
      )}

      <img
        ref={leafRef}
        src={Leafs}
        alt="leaf"
        className="absolute -bottom-28 -right-16 z-50"
      />

      <div ref={containerRef} className="flex w-[200vw] h-full">
        <div className="w-[100vw] h-full">
          <About goToTeam={goToTeam} />
        </div>
        <div className="w-[100vw] h-full">
          <OurTeam onBackClick={goToAbout} cursorRef={cursorRef} />
        </div>
      </div>
    </div>
  );
};

export default AboutLayout;
