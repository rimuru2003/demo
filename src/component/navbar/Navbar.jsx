import React, { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "../../assest/logo.svg";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navs = ["HOME", "ABOUT US", "SERVICES", "CLIENT", "CONTACT US"];
  const [isVisible, setIsVisible] = useState(true);
  const lastScroll = useRef(0);

  useGSAP(() => {
    const st = ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        const scrollY = window.scrollY;
        const direction = self.direction; // 1 = down, -1 = up

        // Scroll down → hide
        if (direction === 1 && scrollY > 80) {
          gsap.to({}, {
            duration: 0.2,
            onComplete: () => setIsVisible(false),
          });
        }
        // Scroll up → show
        if (direction === -1) {
          gsap.to({}, {
            duration: 0.2,
            onComplete: () => setIsVisible(true),
          });
        }

        lastScroll.current = scrollY;
      },
    });

    return () => st.kill();
  }, []);

  return (
    <div
      className={`w-full px-11 py-4 flex items-center justify-between fixed top-0 left-0 right-0 z-30 
      transition-transform duration-500 ease-out bg-white 
      ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div>
        <img src={Image} alt="logo" className="h-10" />
      </div>

      <div className="flex items-center justify-evenly gap-x-5 font-semibold">
        {navs.map((a, b) => (
          <p
            key={b}
            className="border-2 p-2 text-red-500 hover:bg-red-500 hover:text-neutral-100 cursor-pointer"
          >
            {a}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
