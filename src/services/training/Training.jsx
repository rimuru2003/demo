import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Arrow from "../../assest/arrow.svg";
import Images from "../../component/service/Image";
import Training1 from "../../assest/Training1.svg";
import Training2 from "../../assest/Training2.svg";
import Training3 from "../../assest/Training3.svg";
import Training4 from "../../assest/Training4.svg";

gsap.registerPlugin(useGSAP);

const Training = () => {
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
      className="w-full h-[95vh] flex justify-center xl:pb-10 bg-[#33C791] rounded-3xl"
    >
      <div className="w-[95%]   ">
        <div className="flex  flex-col h-full justify-center">
          <div className="flex  justify-between ">
            <div className="text-start space-y-2">
              {" "}
              <span className="x bg-white xl:text-sm text-xs w-32 font-[Inter] font-medium  px-2 py-1 rounded-lg ">
                What we Offers
              </span>
              <h1 className="text-3xl md:text-[80px] font-bold text-black leading-none">
                Training
                <br className="hidden md:block" /> Programs
              </h1>
            </div>

            <div
              className="  text-[60px] md:text-[120px] font-bold
             text-black/10 select-none"
            >
              02
            </div>
          </div>

          <div className="flex xl:flex-row  flex-col-reverse   xl:justify-between  xl:h-[70%] w-full">
            <div className="flex flex-col w-full xl:w-[50%] space-y-4 justify-end">
              <div className=" text-start space-y-4">
                <h2 className="text-sm md:text-2xl  font-semibold leading-snug">
                  Empowering individuals with the right skills to lead, adapt,
                  and excel.
                </h2>
                <p className="text-xs md:text-lg text-black/70  xl:ml-5 leading-relaxed">
                  From leadership development to digital transformation, our
                  training modules are designed to strengthen every layer of
                  your organization. We offer:
                </p>
                <ul className="list-disc text-xs xl:text-base font-normal  space-y-2 ml-10 xl:font-medium text-black/80 leading-relaxed">
                  <li>
                    Leadership Development: Build managerial and executive
                    excellence.
                  </li>
                  <div className="hidden xl:block space-y-2">
                    {" "}
                    <li className="">
                      Onboarding & Orientation: Immerse new employees in your
                      culture, values, and processes.
                    </li>
                    <li className="">
                      Soft Skills Training: Enhance creativity, time management,
                      and resilience.
                    </li>
                    <li className="">
                      Technical Skills Training: Deepen product knowledge and
                      domain expertise.
                    </li>
                    <li className="">
                      Digital Skills Training: Stay ahead with emerging
                      technologies and digital tools.
                    </li>
                  </div>
                </ul>
              </div>

             <button
                className="flex  py-1 items-center font-[Inter] justify-evenly xl:ml-5 w-[35%] xl:w-[20%]  bg-white
               text-black px-1   xl:pl-3 xl:pr-2 xl:py-2 rounded-2xl text-xs xl:text-base xl:font-semibold transition"
              >
                Know More
                <div
                  className="xl:ml-4  bg-black rounded-xl -rotate-90  p-2 xl:p-3 flex justify-center
                 items-center"
                >
                  <img
                    src={Arrow}
                    alt="arrow"
                    className="xl:w-4 xl:h-4 w-2 h-2"
                  />
                </div>
              </button>
            </div>

            <div className="relative w-full md:w-[45%] flex justify-center h-full">
              <Images
                borderClass="border-orange-500"
                img1={Training1}
                img2={Training2}
                img3={Training3}
                img4={Training4}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Training;
