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
      className="xl:w-[80%] h-[60vh] mx-auto md:h-[65vh] lg:h-[75vh]   flex justify-center  bg-[#33C791] 
      rounded-3xl"
    >
      <div className="w-[95%] px-2  py-4  ">
        <div className="flex w-full justify-between  h-full   ">
          <div className="flex flex-col justify-evenly w-full sm:w-[50%]  ">
            <div className="text-start  space-y-2 md:space-y-6">
              <div
                className="  text-4xl md:text-4xl lg:text-6xl xxxl:text-8xl font-semibold
             text-black/10 select-none"
              >
                03
              </div>
            </div>
            <div className="flex flex-col space-y-10 justify-end">
              <h1
                className="text-4xl md:text-4xl lg:text-6xl xxxl:text-8xl  font-semibold text-black
               leading-none"
              >
                Training
                <br className="hidden lg:block" /> Programs
              </h1>
              <div className=" text-start space-y-2 ">
                <h2 className="xsm:text-base md:text-lg text-sm xxxl:text-3xl xl:text-2xl font-semibold leading-snug">
                  Empowering individuals with the right skills to lead, adapt,
                  and excel.
                </h2>
                <p className="xsm:text-sm text-xs  xl:text-lg text-[#161616] font-medium xl:ml-5 xl:w-[95%] font-[Inter] leading-relaxed">
                  From leadership development to digital transformation, our
                  training modules are designed to strengthen every layer of
                  your organization. We offer:
                </p>
                <ul
                  className=" xsm:text-sm text-xs  md:text-base text-[#161616]  font-normal  space-y-2 ml-10
                 xl:font-medium  leading-relaxed"
                >
                  <li className="list-disc">
                    Leadership Development: Build managerial and executive
                    excellence.
                  </li>{" "}
                  <li  className=" list-disc hidden lg:block">
                    Onboarding & Orientation: Immerse new employees in your
                    culture, values, and processes.
                  </li>
                  {/* <li >
                    Soft Skills Training: Enhance creativity, time management,
                    and resilience.
                  </li> */}
                  {/* <li className=" list-disc hidden xxxl:block">
                    Technical Skills Training: Deepen product knowledge and
                    domain expertise.
                  </li>
                  <li className=" list-disc hidden xxxl:block">
                    Digital Skills Training: Stay ahead with emerging
                    technologies and digital tools.
                  </li> */}
                </ul>
              </div>
              <div className="w-full flex justify-end">
                <button
                  className="flex items-center justify-evenly  w-[8rem] lg:w-[10rem]
                px-1 py-1 lg:pl-3 lg:pr-2  bg-white text-black 
                rounded-lg transition font-[Inter] text-xs lg:text-sm lg:font-semibold "
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

          <div className=" w-[30%] lg:w-[40%] hidden sm:flex xxxl:mt-16 mt-20 lg:mt-10 justify-center items-center h-full">
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
    </section>
  );
};

export default Training;
