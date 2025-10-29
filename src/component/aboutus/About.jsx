import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Arrow from "../../assest/arrow.png";
import Hand from "../../assest/hand.png";
import Video from "../../assest/videoplayback.mp4";

gsap.registerPlugin(useGSAP);

const About = ({ goToTeam }) => {
  const cardRef = useRef(null);

  useGSAP(() => {}, []);

  return (
    <div className="w-full h-screen text-black flex flex-col overflow-hidden">
      <div className="flex flex-col w-full space-y-14 xl:space-y-40">
        {/* Top Section */}
        <div className="xl:w-[80%] w-full mx-auto font-semibold px-3 xl:text-5xl text-start tracking-wider">
          Engage is a multi-faceted services organization that conceptualizes,
          designs, and delivers world-class people engagement programs — from
          C-suite curated experiences to transformational workshops with top
          speakers and trainers, driving measurable organizational change.
        </div>

        {/* Video Row */}
        <div className="flex xl:flex-row flex-col w-[95%] items-center space-y-5 xl:justify-between xl:items-end mx-auto">
          {/* Video Card */}
          <div className="xl:w-[30%] w-full h-[15rem] xl:h-[20rem] rounded-2xl overflow-hidden">
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

          {/* Right Side */}
          <div className="flex flex-col w-full px-3 xl:w-[70%] xl:ml-16">
            <div className="xl:w-[70%] w-full tracking-wider font-semibold text-start
             xl:text-3xl leading-snug">
              Engage is a multi-faceted services organization that
              conceptualizes, designs, and delivers world-class people
              engagement programs — from C-suite curated experiences to
              transformational workshops with top speakers and trainers, driving
              measurable organizational change.
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
