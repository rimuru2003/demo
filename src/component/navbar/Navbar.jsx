import React, { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "../../assest/logo.svg";
import Scan from "../../assest/scan.svg"

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navs = [ "About Us", "Services", "Works", "Feedbacks" ];
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
      className={`w-full px-11 py-8 flex items-center justify-between fixed top-0 left-0 right-0 z-30 
      transition-transform duration-500 ease-out 
      ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div>
        <img src={Image} alt="logo" className="h-10" />
      </div>

      <div className="flex items-center bg-white rounded-2xl px-2 justify-evenly gap-x-2 font-semibold">
        {navs.map((a, b) => (
          <p
            key={b}
            className=" p-2  
              cursor-pointer"
          >
            {a}
          </p>
        ))}
      </div>
      <div className="flex justify-center items-center bg-[#E61F25] font-[Inter] px-3 p-2 gap-x-2 rounded-xl text-white">
        Contact Us <span><img src={Scan} alt="" /></span>
      </div>
    </div>
  );
};

export default Navbar;
