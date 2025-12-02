import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Images = ({
  img1,
  img2,
  img3,
  img4,
  borderClass = "border-orange-500",
}) => {
  const cardsRef = useRef([]);

  useGSAP(() => {
    const cards = cardsRef.current.filter(Boolean);
    const baseZ = [11, 10, 9, 8];

    cards.forEach((card, i) => {
      card.addEventListener("click", () => {
        cards.forEach((c, j) => {
          if (i === j) {
            gsap.to(c, {
              zIndex: 12,
              y: -10,
              duration: 0.3,
              ease: "power3.out",
              borderColor: "white",
            });
          } else {
            gsap.to(c, {
              zIndex: baseZ[j],
              y: 0,
              duration: 0.3,
              ease: "power3.inOut",
              borderColor: "border-orange-500",
            });
          }
        });
      });
    });

    return () => {
      gsap.killTweensOf(cards);
    };
  }, []);

  return (
    <div
      className="relative w-[30rem]6ml-4 h-full xl:-top-40 md:ml-16 xl:mt-12 ml-4 lg:ml-0
    flex flex-col items-center justify-start"
    >
      {/* Top Row */}
      <div className="flex  relative">
        <div
          ref={(el) => (cardsRef.current[0] = el)}
          className={`xl:w-[18rem] w-[10rem] h-[12rem] md:w-[12rem] md:h-[14rem] lg:h-[18rem]
             lg:w-[14rem] xl:h-[22rem] rotate-[0deg] z-[11]
          border-[5px] ${borderClass} rounded-2xl overflow-hidden shadow-lg cursor-pointer`}
        >
          <img src={img1} alt="card-1" className="w-full h-full object-cover" />
        </div>

        <div
          ref={(el) => (cardsRef.current[1] = el)}
          className={`xl:w-[18rem] w-[10rem] h-[12rem] xl:h-[22rem] md:w-[12rem]
             md:h-[14rem] lg:w-[14rem] lg:h-[18rem] relative top-14 right-20 rotate-[9deg] z-[10]
          border-[5px] ${borderClass} rounded-2xl overflow-hidden shadow-lg cursor-pointer -ml-4`}
        >
          <img src={img2} alt="card-2" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Bottom Row */}
      <div className="flex relative">
        <div
          ref={(el) => (cardsRef.current[2] = el)}
          className={`xl:w-[18rem] w-[10rem] h-[12rem] xl:h-[22rem] md:w-[12rem] 
            md:h-[14rem] lg:w-[14rem] lg:h-[18rem] relative -top-14 rotate-[-8deg] z-[9]
          border-[5px] ${borderClass} rounded-2xl overflow-hidden shadow-lg cursor-pointer`}
        >
          <img src={img3} alt="card-3" className="w-full h-full object-cover" />
        </div>

        <div
          ref={(el) => (cardsRef.current[3] = el)}
          className={`xl:w-[18rem] w-[10rem] h-[12rem] xl:h-[22rem] md:w-[12rem] 
            md:h-[14rem] lg:w-[14rem] lg:h-[17rem] relative -top-14 right-14 rotate-[8deg] z-[8]
          border-[5px] ${borderClass} rounded-2xl overflow-hidden shadow-lg cursor-pointer -ml-4`}
        >
          <img src={img4} alt="card-4" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Images;
