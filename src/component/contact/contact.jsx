import React, { useRef, useState, useEffect, useCallback, useMemo } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Hamburger from "hamburger-react";
import Image from "../../assest/logo.svg";
import Scan from "../../assest/scan.svg";
import Contact from "../contact/contact";

gsap.registerPlugin(ScrollTrigger);

// Reusable Portal helper (renders children to <body>)
function Portal({ children }) {
  const target = useMemo(() => {
    let el = document.getElementById("portal-root");
    if (!el) {
      el = document.createElement("div");
      el.id = "portal-root";
      document.body.appendChild(el);
    }
    return el;
  }, []);
  return createPortal(children, target);
}

const Navbar = () => {
  const navs = ["About Us", "Services", "Works", "Feedbacks"];

  const [isVisible, setIsVisible] = useState(true);
  const [showContact, setShowContact] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Refs for GSAP targets
  const contactRef = useRef(null);
  const contactOverlayRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const mobileOverlayRef = useRef(null);

  // Hide/show navbar on scroll
  useGSAP(() => {
    const st = ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        const direction = self.direction;
        const y = window.scrollY;
        if (direction === 1 && y > 80) setIsVisible(false);
        if (direction === -1) setIsVisible(true);
      },
    });
    return () => st.kill();
  }, []);

  // Contact panel + overlay animation
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

  // Mobile menu + overlay animation
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
    // Lock body scroll when mobile drawer is open
    document.documentElement.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeAllPanels = useCallback(() => {
    setMobileOpen(false);
    setShowContact(false);
  }, []);

  // ESC to close any open panel
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && closeAllPanels();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeAllPanels]);

  const NavItems = ({ onClick }) => (
    <>
      {navs.map((label) => (
        <button
          key={label}
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
      {/* Top bar */}
      <div
        className={`w-full px-5 md:px-11 py-4 md:py-6 flex items-center justify-between fixed top-0 left-0 right-0 z-30 transition-transform duration-500 ease-out bg-[#FAF6F0]/90 backdrop-blur
        ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
      >
        <img src={Image} alt="logo" className="h-9 md:h-10" />

        {/* Desktop nav */}
        <div className="hidden md:flex items-center bg-white rounded-2xl py-1 px-4 gap-x-2 font-semibold shadow-sm">
          <NavItems />
        </div>

        {/* Desktop contact */}
        <button
          onClick={() => setShowContact(true)}
          className="hidden md:flex justify-center font-semibold items-center bg-[#E61F25] hover:bg-[#8ABF3C] px-3 py-2 gap-x-2 rounded-xl text-white transition"
        >
          Contact Us
          <img src={Scan} alt="" />
        </button>

        {/* Mobile hamburger */}
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

      {/* MOBILE DRAWER via Portal (prevents top gap) */}
      <Portal>
        {/* Overlay */}
        <div
          ref={mobileOverlayRef}
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 h-screen w-screen bg-black/50 backdrop-blur-sm opacity-0 pointer-events-none z-[110] transition-opacity md:hidden"
        />
        {/* Drawer */}
        <div
          ref={mobileMenuRef}
          className="fixed top-0 right-0 h-screen w-[86%] max-w-sm bg-[#FAF4EC] z-[120] translate-x-full md:hidden shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between p-4 border-b border-black/10">
            <img src={Image} alt="logo" className="h-8" />
            <Hamburger
              toggled={mobileOpen}
              toggle={setMobileOpen}
              size={22}
              color="#000"
              duration={0.4}
              rounded
              label="Hide menu"
            />
          </div>

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
              <img src={Scan} alt="" />
            </button>
          </div>
        </div>
      </Portal>

      {/* CONTACT PANEL via Portal (prevents top gap) */}
      <Portal>
        {/* Overlay */}
        <div
          ref={contactOverlayRef}
          onClick={() => setShowContact(false)}
          className="fixed inset-0 h-screen w-screen bg-black/50 backdrop-blur-sm opacity-0 pointer-events-none z-[130] transition-opacity"
        />
        {/* Panel */}
        <div
          ref={contactRef}
          className="fixed top-0 right-0 h-screen w-full sm:w-[70%] md:w-[40%] bg-[#8ABF3C] z-[140] translate-x-full"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setShowContact(false)}
            className="absolute right-5 top-5 py-2 px-3 rounded-2xl border border-black text-base md:text-xl font-bold text-gray-700 hover:text-red-500 transition bg-white/70"
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
