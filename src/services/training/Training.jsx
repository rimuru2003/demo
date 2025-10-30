import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Arrow from "../../assest/arrow.svg";
import Images from "../../component/service/Image";

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
      className="w-full h-[90vh] flex justify-center xl:pb-10 bg-[#33C791] rounded-3xl"
    >
      <div className="w-[95%]   ">
        <div className="flex  flex-col h-full justify-center">
          <div className="flex  justify-between ">
            <div className="text-start space-y-2">
              {" "}
              <span className="xl:text-sm text-xs w-32 font-semibold bg-[#EAE4D8] px-1 py-1 rounded-lg">
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
                  <li className="hidden xl:block">
                    Onboarding & Orientation: Immerse new employees in your
                    culture, values, and processes.
                  </li>
                  <li className="hidden xl:block">
                    Soft Skills Training: Enhance creativity, time management,
                    and resilience.
                  </li>
                  <li className="hidden xl:block">
                    Technical Skills Training: Deepen product knowledge and
                    domain expertise.
                  </li>
                  <li className="hidden xl:block">
                    Digital Skills Training: Stay ahead with emerging
                    technologies and digital tools.
                  </li>
                </ul>
              </div>

              <button
                className="flex  py-1 items-center justify-evenly xl:ml-5 w-[35%] xl:w-[25%]  bg-white
               text-black px-1   xl:px-5 xl:py-2 rounded-2xl text-xs xl:text-sm xl:font-semibold transition"
              >
                Know More
                <div
                  className="xl:ml-4  bg-black rounded-xl -rotate-90 p-2 xl:p-3 flex justify-center
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
                img1="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200&auto=format&fit=crop"
                img2="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop"
                img3="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1200&auto=format&fit=crop"
                img4="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200&auto=format&fit=crop"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Training;
