import React, { useRef } from "react";
import General from "../../services/general/General";
import Tna from "../../services/tna/Tna";
import Training from "../../services/training/Training";
import Outbound from "../../services/Outbound Training/Outbound";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const container = useRef(null);
  const sectionRefs = useRef([]);

  useGSAP(
    () => {
      const sections = sectionRefs.current.filter(Boolean);

      // 3D depth + better rendering
      gsap.set(container.current, { perspective: 800 });
      gsap.set(sections, {
        transformStyle: "preserve-3d",
        willChange: "transform, opacity",
      });

      // initial state: first section visible/flat, others hidden
      sections.forEach((el, i) => {
        gsap.set(el, {
          opacity: i === 0 ? 1 : 0,
          scale: 1,
          rotationX: 0,
          transformOrigin: "center center",
        });
      });

      sections.forEach((curr, i) => {
        const next = sections[i + 1];
        if (!next) return;

        gsap
          .timeline({
            scrollTrigger: {
              trigger: next,
              start: "top bottom",
              end: "top 50%",
              scrub: 2,
            },
          })
          .to(
            curr,
            {
              scale: 0.8,
              rotationZ: 2,
              opacity: 1,
              ease: "noneback.out(2)",
              transformOrigin: "center center",
            },
            0
          )

          // next section scales in and resets rotation
          .fromTo(
            next,
            { scale: 0.9, rotationZ: -3, opacity: 0 },
            {
              scale: 1,
              rotationZ: 0,
              opacity: 1,
              ease: "back.out(2)",
              scrub: "2",
            },
            0
          );
      });
    },
    { scope: container }
  );

  const components = [General, Tna, Training, Outbound];

  return (
    <div ref={container} className="relative w-[95%] mx-auto font-Parkinsans">
      {components.map((Component, index) => (
        <React.Fragment key={index}>
          {/* Sticky section */}
          <div
            ref={(el) => (sectionRefs.current[index] = el)}
            className="sticky top-0 min-h-screen flex items-center justify-center"
          >
            <Component />
          </div>

          {index < components.length - 1 && (
            <div className="h-[150vh]" aria-hidden="true" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Services;
