import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Arrow from "../../assest/arrow.png";
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
      className="w-full h-[90vh] flex justify-center py-12 bg-[#33C791] rounded-3xl"
    >
      <div className="w-[95%] flex flex-col md:flex-row justify-between items-center ">
        <div className="flex w-[50%] flex-col h-full  justify-between ">
          <div className="flex flex-col items-start space-y-3">
            <span className="text-sm w-32 font-semibold bg-white px-1 py-1 rounded-lg ">
              What we Offers
            </span>

            <h1 className="text-[64px] w-40 md:text-[80px] text-start font-bold text-black leading-none">
              Training Programs
            </h1>
          </div>
          <div>
            <div className="space-y-4 text-start">
              <h2 className="text-xl md:text-2xl  font-semibold leading-snug">
                Empowering individuals with the right skills to lead, adapt, and
                excel.
              </h2>
              <p className="text-base md:text-lg font-medium text-black/70 ml-5 leading-relaxed">
                From leadership development to digital transformation, our
                training modules are designed to strengthen every layer of your
                organization. We offer:
              </p>
              <ul className="list-disc  space-y-2 ml-10 font-medium text-black/80 leading-relaxed">
                <li>
                  Leadership Development: Build managerial and executive
                  excellence.
                </li>
                <li>
                  Onboarding & Orientation: Immerse new employees in your
                  culture, values, and processes.
                </li>
                <li>
                  Soft Skills Training: Enhance creativity, time management, and
                  resilience.
                </li>
                <li>
                  Technical Skills Training: Deepen product knowledge and domain
                  expertise.
                </li>
                <li>
                  Digital Skills Training: Stay ahead with emerging technologies
                  and digital tools.
                </li>
              </ul>
            </div>

            <button
              className="mt-4 flex items-center gap-4 ml-5 bg-white
             text-black px-5 py-2 rounded-2xl font-semibold 
             transition"
            >
              Know More
              <div className="ml-4 bg-black rounded-xl -rotate-90 p-3 flex justify-center items-center">
                <img src={Arrow} alt="arrow" className="w-4 h-4" />
              </div>
            </button>
          </div>
        </div>

        <div className="relative w-full md:w-[45%] flex justify-center  h-full">
          <div
            className="absolute top-0 right-0 z-[4] text-[80px] md:text-[120px] font-extrabold
           text-white/30 select-none"
          >
            03
          </div>

          <Images
            borderClass="border-white"
            img1="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200&auto=format&fit=crop"
            img2="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop"
            img3="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1200&auto=format&fit=crop"
            img4="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200&auto=format&fit=crop"
          />
        </div>
      </div>
    </section>
  );
};

export default Training;
