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
      className="relative lg:py-20 w-full overflow-hidden flex flex-col 
      justify-around "
    >
      <div className="md:flex py-16 justify-center items-center font-[Inter] hidden  ">
        <div
          ref={(el) => (cardsRef.current[0] = el)}
          className="xl:w-80 xxxl:w-96 xxxl:h-[32rem] xl:h-[28rem]  h-[15rem] md:h-[18rem] md:w-56 w-36 -ml-8 q1 rounded-3xl  bg-[#F9B900]"
        >
          <CounterBox
            value={900}
            mainHeading="Projects Worldwide"
            subHeading="Crafted for Every Culture"
          />
        </div>
        <div
          ref={(el) => (cardsRef.current[1] = el)}
          className="xl:w-80 -ml-8 xxxl:w-96  hidden md:block xl:h-[28rem] md:h-[18rem] md:w-56 q3 h-[15rem] rounded-3xl xxxl:h-[32rem] "
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
          className="xl:w-80 -ml-8 xxxl:w-96 q3 h-[15rem] w-36 xl:h-[28rem]  md:h-[18rem] md:w-56 rounded-3xl xxxl:h-[32rem] bg-[#0D8DFF]"
        >
          <CounterBox
            value={13}
            mainHeading="Countries"
            subHeading="United by Vision"
          />
        </div>
        <div
          ref={(el) => (cardsRef.current[3] = el)}
          className="xl:w-80 hidden xxxl:w-96 md:block -ml-8 xl:h-[28rem] md:h-[18rem] md:w-56 q3 h-[15rem] rounded-3xl xxxl:h-[32rem]"
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
          className="xl:w-80 -ml-8 xxxl:w-96 q5 h-[15rem] w-36 xl:h-[28rem] md:h-[18rem] md:w-56 rounded-3xl xxxl:h-[32rem] bg-[#33C791]"
        >
          <CounterBox
            value={100}
            mainHeading="Brands"
            subHeading="Built for Tomorrow"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row w-full  mx-auto justify-evenly items-center  space-y-4 font-[Inter] md:hidden">
        <div className="bg-[#F9B900] lg:px-4 lg:py-8 py-4  rounded-xl space-x-3 flex justify-around items-center sm:w-[70%] w-[90%] md:w-[60%]">
          <p className="lg:text-8xl xsm:text-5xl text-3xl text-start w-[30%]  font-bold">900+</p>
          <span className="space-y-1 flex flex-col items-start w-[50%]">
            <p className="xsm:text-xl text-lg font-bold border-b-4 border-black py-2">
              Projects Worldwide
            </p>
            <p className="font-medium text-sm">Crafted for Every Culture</p>
          </span>
        </div>
        <div className="bg-[#0D8DFF] lg:px-4 lg:py-8  rounded-xl py-4 justify-around items-center space-x-3 sm:w-[70%] flex w-[90%] md:w-[60%]">
          <p className="lg:text-8xl xsm:text-5xl text-3xl text-start w-[30%] font-bold">13+</p>
          <span className="space-y-1 flex flex-col items-start w-[50%]">
            <p className="xsm:text-xl text-lg font-bold border-b-4 border-black py-2">
              Countries
            </p>
            <p className="font-medium text-sm">United by Vision</p>
          </span>
        </div>
        <div className="bg-[#33C791] lg:px-4 lg:py-8  rounded-xl py-4 justify-around items-center space-x-3 sm:w-[70%] flex w-[90%] md:w-[60%]">
          <p className="lg:text-8xl xsm:text-5xl text-3xl text-start w-[30%]  font-bold">100+</p>
          <span className="space-y-1 flex flex-col items-start w-[50%]">
            <p className="xsm:text-xl text-lg font-bold border-b-4 border-black py-2">
              Brands
            </p>
            <p className="font-medium text-sm">Built for Tomorrow</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardAni;
