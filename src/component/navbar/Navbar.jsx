import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "../../assest/logo.svg";
import Scan from "../../assest/scan.svg";
import Contact from "../contact/contact";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navs = ["About Us", "Services", "Works", "Feedbacks"];
  const [isVisible, setIsVisible] = useState(true);
  const [showContact, setShowContact] = useState(false);
  const contactRef = useRef(null);
  const overlayRef = useRef(null);
  const lastScroll = useRef(0);

  // Hide/show navbar on scroll
  useGSAP(() => {
    const st = ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        const scrollY = window.scrollY;
        const direction = self.direction;

        if (direction === 1 && scrollY > 80) {
          gsap.to({}, { duration: 0.2, onComplete: () => setIsVisible(false) });
        }
        if (direction === -1) {
          gsap.to({}, { duration: 0.2, onComplete: () => setIsVisible(true) });
        }

        lastScroll.current = scrollY;
      },
    });

    return () => st.kill();
  }, []);

  // Slide animation for contact form
  useEffect(() => {
    if (contactRef.current) {
      gsap.to(contactRef.current, {
        x: showContact ? 0 : "100%",
        duration: 0.8,
        ease: "power3.inOut",
      });
    }

    // Animate overlay visibility
    if (overlayRef.current) {
      gsap.to(overlayRef.current, {
        opacity: showContact ? 1 : 0,
        pointerEvents: showContact ? "auto" : "none",
        duration: 0.5,
        ease: "power2.out",
      });
    }
  }, [showContact]);

  return (
    <>
      {/* Navbar */}
      <div
        className={`w-full px-11 py-8 flex items-center justify-between fixed top-0 left-0 right-0 z-30 
        transition-transform duration-500 ease-out 
        ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
      >
        {/* Logo */}
        <div>
          <img src={Image} alt="logo" className="h-10" />
        </div>

        {/* Nav links */}
        <div className="flex items-center bg-white rounded-2xl px-2 justify-evenly gap-x-2 font-semibold">
          {navs.map((a, b) => (
            <p
              key={b}
              className="p-2 cursor-pointer hover:text-[#E61F25] transition"
            >
              {a}
            </p>
          ))}
        </div>

        {/* Contact Button */}
        <div
          onClick={() => setShowContact(true)}
          className="flex justify-center font-semibold items-center bg-[#E61F25] hover:bg-[#8ABF3C] font-[Inter] px-3 p-2 gap-x-2 rounded-xl text-white cursor-pointer transition"
        >
          Contact Us{" "}
          <span>
            <img src={Scan} alt="" />
          </span>
        </div>
      </div>

      {/* Overlay (click outside to close) */}
      <div
        ref={overlayRef}
        onClick={() => setShowContact(false)}
        className="fixed inset-0 bg-black/50  backdrop-blur-sm opacity-0 
        pointer-events-none z-40 transition-opacity"
      />

      {/* Contact Slider Panel */}
      <div
        ref={contactRef}
        className="fixed top-0 right-0 h-full w-[40%] bg-[#FAF4EC]   z-50 translate-x-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setShowContact(false)}
          className="absolute right-5 top-5 py-2 px-3 rounded-2xl border-[1.5px] border-black text-xl font-bold
           text-gray-600 hover:text-red-500 transition"
        >
          close
        </button>

        <div className="p-8">
          <Contact />
        </div>
      </div>
    </>
  );
};

export default Navbar;
