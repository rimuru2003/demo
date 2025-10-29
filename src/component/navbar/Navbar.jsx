import React, { useRef, useState, useEffect, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Hamburger from "hamburger-react";
import Image from "../../assest/logo.svg";
import Scan from "../../assest/scan.svg";
import Contact from "../contact/contact";
import Portal from "../../component/portal/Portal";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navs = ["About Us", "Services", "Works", "Feedbacks"];

  const [isVisible, setIsVisible] = useState(true);
  const [showContact, setShowContact] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const contactRef = useRef(null);
  const contactOverlayRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const mobileOverlayRef = useRef(null);
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

  // Contact panel + overlay
  useEffect(() => {
    if (contactRef.current) {
      gsap.to(contactRef.current, {
        x: showContact ? 0 : "100%",
        duration: 0.8,
        ease: "power3.inOut",
      });
    }
    if (contactOverlayRef.current) {
      gsap.to(contactOverlayRef.current, {
        opacity: showContact ? 1 : 0,
        pointerEvents: showContact ? "auto" : "none",
        duration: 0.5,
        ease: "power2.out",
      });
    }
  }, [showContact]);

  // Mobile menu + overlay
  useEffect(() => {
    if (mobileMenuRef.current) {
      gsap.to(mobileMenuRef.current, {
        x: mobileOpen ? 0 : "100%",
        duration: 0.6,
        ease: "power3.inOut",
      });
    }
    if (mobileOverlayRef.current) {
      gsap.to(mobileOverlayRef.current, {
        opacity: mobileOpen ? 1 : 0,
        pointerEvents: mobileOpen ? "auto" : "none",
        duration: 0.4,
        ease: "power2.out",
      });
    }
    document.documentElement.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeAllPanels = useCallback(() => {
    setMobileOpen(false);
    setShowContact(false);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") closeAllPanels();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeAllPanels]);

  const NavItems = ({ onClick }) => (
    <>
      {navs.map((label, idx) => (
        <button
          key={idx}
          className="p-2 cursor-pointer hover:text-[#E61F25] transition text-base font-semibold text-left"
          onClick={onClick}
        >
          {label}
        </button>
      ))}
    </>
  );

  return (
    <>
      {/* Navbar */}
      <div
        className={`w-full px-5 md:px-11 py-4 md:py-8 flex items-center justify-between fixed top-0 left-0 right-0 z-30 
        transition-transform duration-500 ease-out bg-transparent
        ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={Image} alt="logo" className="h-9 md:h-10" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center bg-white rounded-2xl py-1 px-4 gap-x-2 font-semibold shadow-sm">
          <NavItems />
        </div>

        {/* Desktop Contact */}
        <div
          onClick={() => setShowContact(true)}
          className="hidden md:flex justify-center font-semibold items-center bg-[#E61F25] hover:bg-[#8ABF3C] px-3 py-2 gap-x-2 rounded-xl text-white cursor-pointer transition"
        >
          Contact Us
          <span>
            <img src={Scan} alt="" />
          </span>
        </div>

        {/* Mobile Hamburger (replaces close button) */}
        <div className="md:hidden">
          <Hamburger
            toggled={mobileOpen}
            toggle={setMobileOpen}
            size={24}
            color={mobileOpen ? "#E61F25" : "#000"}
            duration={0.4}
            rounded
            label="Show menu"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileOverlayRef}
        onClick={() => setMobileOpen(false)}
        className="fixed inset-0 bg-black/50 m-0 backdrop-blur-sm opacity-0 pointer-events-none z-40 transition-opacity md:hidden"
      />
      <div
        ref={mobileMenuRef}
        className="fixed top-0 right-0 h-screen w-[86%] max-w-sm bg-[#FAF4EC] z-[22221] translate-x-full md:hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-5 space-y-6">
          <div className="flex flex-col gap-2">
            <NavItems onClick={() => setMobileOpen(false)} />
          </div>

          <button
            onClick={() => {
              setMobileOpen(false);
              setShowContact(true);
            }}
            className="w-full flex justify-center items-center bg-[#E61F25] hover:bg-[#8ABF3C] px-4 py-3 gap-x-2 rounded-xl text-white font-semibold transition"
          >
            Contact Us
            <span className="inline-block">
              <img src={Scan} alt="" />
            </span>
          </button>
        </div>
      </div>

      <Portal>
        <div
          ref={contactOverlayRef}
          onClick={() => setShowContact(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm opacity-0 pointer-events-none z-50 transition-opacity"
        />
        <div
          ref={contactRef}
          className="fixed top-0 right-0 h-screen w-full sm:w-[70%] md:w-[40%] bg-[#8ABF3C] z-[22222] translate-x-full"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setShowContact(false)}
            className="absolute right-5 top-5 py-2 px-3 rounded-2xl border-[1.5px] border-black text-base md:text-xl font-bold text-gray-600 hover:text-red-500 transition"
          >
            close
          </button>

          <div className="p-5 md:p-8">
            <Contact />
          </div>
        </div>
      </Portal>
    </>
  );
};

export default Navbar;
