import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Mouse from "../../assest/mouse.svg";
import CounterBox from "./Counter";
import SplitText from "../../animation/scrollRevealHeading";
import antworx from "../../assest/antworx 1video1.2.webm";

const Hero = () => {
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

      cards.forEach((card, i) => {
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            scale: 1.05,
            rotate: 0,
            duration: 0.8,
            ease: "expo.out",
            marginRight: 50,
            marginLeft: 50,
          });

          gsap.to(cards.slice(i + 1), {
            x: 25,
            duration: 0.8,
            ease: "expo.out",
          });
          gsap.to(cards.slice(0, i), {
            x: -25,
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
      className="relative h-screen xl:h-[130vh] w-full overflow-hidden flex flex-col justify-evenly "
    >
      <div
        className=" flex  flex-col font-Parkinsans text-[#1A1A1A]
         xl:px-10 items-start font-bold px-2 text-3xl xl:text-[6rem] leading-[1.05]"
      >
        <SplitText
          text="We Make Things Possible"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="start"
        />
        <SplitText
          text="Once And Always"
          delay={200}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="start"
        />
        <p className="xl:text-3xl text-start  mt-2 text-sm font-semibold">
          Unleashing Potential Through
          <br /> Experiential Programs
        </p>
      </div>

      <div className="flex justify-center items-center font-[Inter]  ">
        <div
          ref={(el) => (cardsRef.current[0] = el)}
          className="xl:w-96 xl:h-[30rem]  h-[15rem] -ml-8 q1 rounded-3xl  bg-[#F9B900]"
        >
          <CounterBox
            value={900}
            mainHeading="Projects Worldwide"
            subHeading="Crafted for Every Culture"
          />
        </div>
        <div
          ref={(el) => (cardsRef.current[1] = el)}
          className="xl:w-96 -ml-8  hidden md:block q3 h-[15rem] rounded-3xl xl:h-[30rem] "
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
          className="xl:w-96 -ml-8 q3 h-[15rem] rounded-3xl xl:h-[30rem] bg-[#0D8DFF]"
        >
          <CounterBox
            value={13}
            mainHeading="Projects Worldwide"
            subHeading="Crafted for Every Culture"
          />
        </div>
        <div
          ref={(el) => (cardsRef.current[3] = el)}
          className="xl:w-96 hidden md:block -ml-8 q3 h-[15rem] rounded-3xl xl:h-[30rem]"
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
          ref={(el) => (cardsRef.current[4] = el)}
          className="xl:w-96 -ml-8 q5 h-[15rem] rounded-3xl xl:h-[30rem] bg-[#33C791]"
        >
          <CounterBox
            value={100}
            mainHeading="Projects Worldwide"
            subHeading="Crafted for Every Culture"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
