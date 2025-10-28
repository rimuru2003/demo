import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Arrow from "../../assest/arrow.png";
import Hand from "../../assest/hand.png";
import Video from "../../assest/videoplayback.mp4";

gsap.registerPlugin(useGSAP);

const About = ({ goToTeam }) => {
  const cardRef = useRef(null);
  const hoverTween = useRef(null);

  useGSAP(() => {
    // GSAP tween for smooth scaleX animation
    hoverTween.current = gsap.to(cardRef.current, {
      scaleX: 1.2,
      duration: 0.5,
      ease: "power3.out",
      paused: true,
      transformOrigin: "left center",
    });
  }, []);

  return (
    <div className="w-full h-screen text-black flex flex-col overflow-hidden">
      <div className="flex flex-col w-full space-y-40">
        {/* Top Section */}
        <div className="w-[80%] mx-auto font-semibold text-5xl text-start tracking-wider">
          
            Engage is a multi-faceted services organization that conceptualizes,
            designs, and delivers world-class people engagement programs — from
            C-suite curated experiences to transformational workshops with top
            speakers and trainers, driving measurable organizational change.
        </div>

        {/* Video Row */}
        <div className="flex w-[95%] justify-between items-end mx-auto">
          {/* Video Card */}
          <div className="w-[30%] h-[20rem]">
            <div
              ref={cardRef}
              onMouseEnter={() => hoverTween.current?.play()}
              onMouseLeave={() => hoverTween.current?.reverse()}
              className="w-[30rem] h-full rounded-2xl overflow-hidden origin-left 
              will-change-transform"
              style={{
                transform: "scaleX(1)",
                transformOrigin: "left center",
              }}
            >
              <video
                className="w-full h-full object-cover block"
                src={Video}
                muted
                loop
                autoPlay
                playsInline
                controls
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col w-[70%] ml-16">
            <div className="w-[80%] tracking-wider font-semibold text-start text-3xl leading-snug">
           
                Engage is a multi-faceted services organization that
                conceptualizes, designs, and delivers world-class people
                engagement programs — from C-suite curated experiences to
                transformational workshops with top speakers and trainers,
                driving measurable organizational change.
            </div>

            <div className="flex justify-between mt-4">
              <div
                className="flex items-center justify-between border-[1.5px]
                border-black rounded-2xl px-2 py-1 w-fit cursor-pointer
                hover:bg-gray-100 transition"
              >
                <span className="text-xl font-semibold">know more</span>
                <div className="ml-4 bg-black rounded-xl p-3 flex justify-center items-center">
                  <img src={Arrow} alt="arrow" className="w-4 h-4" />
                </div>
              </div>

              <div
                onClick={goToTeam}
                className="border-[1.5px] border-black rounded-xl p-1 flex w-10 h-10 justify-center items-center"
              >
                <img src={Hand} alt="hand" className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
