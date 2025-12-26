import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Arrow from "../../assest/arrow.svg";
import Images from "../../component/service/Image";
import Out1 from "../../assest/Out1.svg";
import Out2 from "../../assest/Out2.svg";
import Out3 from "../../assest/Out3.svg";
import Out4 from "../../assest/Out4.svg";

gsap.registerPlugin(useGSAP);

const Outbound = () => {
  const cardsRef = useRef([]);
  const containerRef = useRef(null);
  const [active, setActive] = useState(null);

  useGSAP(() => {
    const cards = cardsRef.current.filter(Boolean);
    const baseZ = [11, 10, 9, 8];
    const handlers = cards.map((card, i) => {
      const onClick = () => {
        setActive(i); // optional state if you ever need it

        cards.forEach((c, j) => {
          if (j === i) {
            gsap.to(c, {
              zIndex: 12, // <- clicked goes to 12
              y: -10,
              duration: 0.3,
              ease: "power3.out",
            });
          } else {
            gsap.to(c, {
              zIndex: baseZ[j], // <- others reset
              y: 0,
              duration: 0.3,
              ease: "power3.inOut",
            });
          }
        });
      };

      card.addEventListener("click", onClick);
      return { card, onClick };
    });

    // cleanup
    return () => {
      handlers.forEach(({ card, onClick }) =>
        card.removeEventListener("click", onClick)
      );
      gsap.killTweensOf(cards);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-[80%] mx-auto h-[75vh]  flex justify-center  bg-[#0D8DFF] 
      rounded-3xl"
    >
      <div className="w-[95%]   ">
        <div className="flex w-full justify-between  h-full   ">
          <div className="flex flex-col justify-around w-[50%]  ">
            <div className="text-start  space-y-2 md:space-y-6">
              <div
                 className="  text-[50px] md:text-[70px] lg:text-8xl font-semibold
             text-black/10 select-none"
              >
                04
              </div>
            </div>
            <div className="flex flex-col space-y-10 justify-end">
              <h1
                className="text-8xl  font-semibold text-black
               leading-none"
              >
                Outbound
                <br className="hidden lg:block" /> Training
              </h1>
              <div className=" text-start space-y-2">
                <h2 className="xsm:text-base text-sm xl:text-3xl md:text-xl font-semibold leading-snug">
                  Learning through real-world experiences and team challenges.
                </h2>
                <p className="text-xs md:text-base lg:text-xl text-[#161616]  xl:ml-5 xl:w-[90%] leading-relaxed">
                  Our outbound programs immerse participants in hands-on
                  activities and team-based games that promote experiential
                  learning. By solving challenges together and reflecting on
                  outcomes, teams strengthen collaboration, problem-solving, and
                  practical application of skills in their everyday work.
                </p>
              </div>
              <div className="flex justify-end w-full">
                <button
                  className="flex items-center justify-evenly  w-[40%] md:w-[20%] lg:w-[40%] xl:w-[20%]
                px-1 py-1 lg:pl-3 lg:pr-2  bg-white text-black 
                rounded-2xl transition font-[Inter] text-xs lg:text-sm lg:font-semibold "
                >
                  Know More
                  <div
                    className="xl:ml-4  bg-black rounded-xl -rotate-90  p-2 xl:p-3 flex justify-center
                 items-center"
                  >
                    <img
                      src={Arrow}
                      alt="arrow"
                      className="w-2 h-2 lg:w-3 lg:h-3"
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className=" w-[30%] mt-16 flex justify-center items-center h-full">
            <Images
              borderClass="border-orange-500"
              img1={Out1}
              img2={Out2}
              img3={Out3}
              img4={Out4}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Outbound;
