import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import CounterBox from "../component/hero/Counter";
import antworx from "../assest/antworx 1video1.2.webm";
import antworx2 from "../assest/antworx 1video1.3.webm";

const CardAni = () => {
  const heroRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter(Boolean);
      if (!cards.length) return;

      cards.forEach((card) => {
        gsap.set(card, {
          scale: 1,
          rotate: 0,
          transformOrigin: "center center",
        });
      });

      cards.forEach((card, i) => {
        if (i !== 0) gsap.set(card, { marginLeft: -30 });
      });

      const randomTilt = () => (Math.random() > 0.5 ? 8 : -8);

      const getMargins = () => {
        const width = window.innerWidth;
        if (width < 768) {
          return { marginRight: 15, marginLeft: 15, cardShift: 10 };
        } else if (width < 1280) {
          return { marginRight: 35, marginLeft: 35, cardShift: 20 };
        } else {
          return { marginRight: 50, marginLeft: 50, cardShift: 25 };
        }
      };

      cards.forEach((card, i) => {
        card.addEventListener("mouseenter", () => {
          const margins = getMargins();

          gsap.to(card, {
            scale: 1.05,
            rotate: 0,
            duration: 0.8,
            ease: "expo.out",
            marginRight: margins.marginRight,
            marginLeft: margins.marginLeft,
          });

          gsap.to(cards.slice(i + 1), {
            x: margins.cardShift,
            duration: 0.8,
            ease: "expo.out",
          });
          gsap.to(cards.slice(0, i), {
            x: -margins.cardShift,
            duration: 0.8,
            ease: "expo.out",
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            scale: 1,
            rotate: randomTilt(),
            duration: 0.8,
            ease: "expo.out",
            marginRight: -10,
            marginLeft: -10,
          });
          gsap.to(cards, { x: 0, duration: 0.5 });
        });
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative py-20 w-full overflow-hidden flex flex-col 
      justify-around "
    >
      <div className="flex justify-center items-center font-[Inter]  ">
        <div
          ref={(el) => (cardsRef.current[0] = el)}
          className="xl:w-96 xl:h-[32rem]  h-[15rem] md:h-[18rem] md:w-56 w-36 -ml-8 q1 rounded-3xl  bg-[#F9B900]"
        >
          <CounterBox
            value={900}
            mainHeading="Projects Worldwide"
            subHeading="Crafted for Every Culture"
          />
        </div>
        <div
          ref={(el) => (cardsRef.current[1] = el)}
          className="xl:w-96 -ml-8  hidden md:block md:h-[18rem] md:w-56 q3 h-[15rem] rounded-3xl xl:h-[32rem] "
        >
          <video
            className="w-full h-full rounded-3xl object-cover block"
            muted
            loop
            autoPlay
            playsInline
            src={antworx}
          ></video>
        </div>
        <div
          ref={(el) => (cardsRef.current[2] = el)}
          className="xl:w-96 -ml-8 q3 h-[15rem] w-36  md:h-[18rem] md:w-56 rounded-3xl xl:h-[32rem] bg-[#0D8DFF]"
        >
          <CounterBox
            value={13}
            mainHeading="Countries"
            subHeading="United by Vision"
          />
        </div>
        <div
          ref={(el) => (cardsRef.current[3] = el)}
          className="xl:w-96 hidden md:block -ml-8 md:h-[18rem] md:w-56 q3 h-[15rem] rounded-3xl xl:h-[32rem]"
        >
          <video
            className="w-full h-full rounded-3xl object-cover block"
            muted
            loop
            autoPlay
            playsInline
            src={antworx2}
          ></video>
        </div>
        <div
          ref={(el) => (cardsRef.current[4] = el)}
          className="xl:w-96 -ml-8 q5 h-[15rem] w-36 md:h-[18rem] md:w-56 rounded-3xl xl:h-[32rem] bg-[#33C791]"
        >
          <CounterBox
            value={100}
            mainHeading="Brands"
            subHeading="Built for Tomorrow"
          />
        </div>
      </div>
    </div>
  );
};

export default CardAni;
