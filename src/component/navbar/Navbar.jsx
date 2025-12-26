import React, { useRef, useState, useEffect, useCallback } from "react";
import gsap from "gsap";
import Hamburger from "hamburger-react";
import Image from "../../assest/logo.svg";
import Scan from "../../assest/scan.svg";
import Contact from "../contact/contact";
import Portal from "../../component/portal/Portal";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const navs = [
    { name: "About Us", id: "about" },
    { name: "Services", id: "services" },
    { name: "Works", id: "works" },
    { name: "Feedbacks", id: "feedbacks" },
  ];

  const [showContact, setShowContact] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const contactRef = useRef(null);
  const contactOverlayRef = useRef(null);

  // Smooth scroll
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    const offset = 80;
    const y = el.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  // ✅ ONLY animation: Contact panel
  useEffect(() => {
    if (!contactRef.current || !contactOverlayRef.current) return;

    gsap.to(contactRef.current, {
      x: showContact ? 0 : "100%",
      duration: 0.6,
      ease: "power3.inOut",
    });

    gsap.to(contactOverlayRef.current, {
      opacity: showContact ? 1 : 0,
      pointerEvents: showContact ? "auto" : "none",
      duration: 0.3,
      ease: "power2.out",
    });
  }, [showContact]);

  const closeAll = useCallback(() => {
    setMobileOpen(false);
    setShowContact(false);
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && closeAll();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeAll]);

  const NavItems = ({ onClick }) => (
    <>
      {navs.map((item) => (
        <button
          key={item.id}
          onClick={() => {
            scrollToSection(item.id);
            onClick?.();
          }}
          className=" relative px-3 cursor-pointer rounded-2xl
    text-2xl font-semibold text-left hover:text-[#E61F25]
    after:content-[''] after:absolute after:left-0 after:-bottom-1
    after:h-[3px] after:w-0 after:bg-[#E61F25]
    after:transition-all after:duration-300 after:ease-out
    hover:after:w-full "
        >
          {item.name}
        </button>
      ))}
    </>
  );

  return (
    <>
      {/* Navbar */}
      <div
        className="
fixed top-4 left-1/2 -translate-x-1/2 w-[90%] 
rounded-2xl px-4 py-2 bg-white/60 border border-black/5  flex items-center justify-between z-30
"
      >
        <img src={Image} alt="logo" className="h-9 md:h-10" />

        {/* Desktop Nav */}
        <div className="hidden font-[Inter] xl:flex rounded-2xl py-1 px-4 gap-2">
          <NavItems />
        </div>

        {/* Desktop Contact */}
        <button
          onClick={() => setShowContact(true)}
          className="hidden xl:flex items-center bg-[#E61F25]
          hover:bg-[#8ABF3C] px-3 py-2 gap-2 rounded-xl text-white font-semibold transition"
        >
          Contact Us
          <img src={Scan} alt="" />
        </button>

        {/* Mobile Hamburger */}
        <div className="xl:hidden">
          <Hamburger
            toggled={mobileOpen}
            toggle={setMobileOpen}
            size={26}
            color={mobileOpen ? "#E61F25" : "#000"}
          />
        </div>
      </div>

      {/* Mobile Menu (CSS only) */}
      <Portal>
        <div
          className={`fixed top-0 right-0 h-screen w-full bg-[#FAF4EC] z-[22221]
          xl:hidden transition-transform duration-300
          ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="absolute top-4 right-4">
            <Hamburger
              toggled={mobileOpen}
              toggle={setMobileOpen}
              size={26}
              color="#E61F25"
            />
          </div>

          <div className="h-full flex flex-col justify-evenly items-center">
            <NavItems onClick={() => setMobileOpen(false)} />

            <button
              onClick={() => {
                setMobileOpen(false);
                setShowContact(true);
              }}
              className="bg-[#E61F25] hover:bg-[#8ABF3C]
              px-4 py-3 rounded-xl text-white font-semibold transition"
            >
              Contact Us
            </button>
          </div>
        </div>
      </Portal>

      {/* Contact Panel */}
      <Portal>
        <div
          ref={contactOverlayRef}
          onClick={() => setShowContact(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm
          opacity-0 pointer-events-none z-50"
        />

        <div
          ref={contactRef}
          className="fixed top-0 right-0 h-screen w-full
          sm:w-[70%] md:w-[40%] bg-[#8ABF3C]
          translate-x-full z-[22222]"
        >
          <button
            onClick={() => setShowContact(false)}
            className="absolute right-5 top-5 h-10 w-10
            flex items-center justify-center rounded-2xl
            bg-white/10 hover:bg-white/20 text-white transition"
          >
            <MdClose className="text-3xl" />
          </button>

          <div className="p-6">
            <Contact />
          </div>
        </div>
      </Portal>
    </>
  );
};

export default Navbar;
