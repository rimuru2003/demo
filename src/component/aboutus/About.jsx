import React, { useRef, useState } from "react";
import { createPortal } from "react-dom";
import Popup from "../popup/Popup";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Arrow from "../../assest/arrow.svg";
import { ReactComponent as Hand } from "../../assest/hand.svg";
import Video from "../../assest/videoplayback.mp4";
import Vlogo from "../../assest/videologo.svg";

gsap.registerPlugin(useGSAP);

const KnowMoreCursor = React.forwardRef((props, ref) => {
  const node = (
    <div
      ref={ref}
      className="fixed z-[9999] pointer-events-none"
      style={{
        opacity: 0,
        transform: "scale(0.85)",
        left: 0,
        top: 0,
      }}
    >
      <div className="flex flex-col ml-6 mt-6 items-center gap-2">
        <div
          className="flex items-center gap-4 px-2 py-2 rounded-2xl shadow-lg"
          style={{ background: "#FFFFFF" }}
        >
          <img src={Vlogo} alt="" />
          <span
            className="text-xl leading-none font-semibold tracking-tight"
            style={{ color: "#111" }}
          >
            Play Video
          </span>
        </div>
      </div>
    </div>
  );
  return createPortal(node, document.body);
});

const About = ({ goToTeam }) => {
  const cursorRef = useRef(null);
  const videoRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);

  useGSAP(() => {
    const video = videoRef.current;
    const cursor = cursorRef.current;

    if (!video || !cursor) return;

    const onMouseEnter = () => {
      gsap.to(cursor, {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const onMouseLeave = () => {
      gsap.to(cursor, {
        opacity: 0,
        scale: 0.85,
        duration: 0.3,
        ease: "power2.in",
      });
    };

    const onMouseMove = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: "power2.out",
      });
    };


    video.addEventListener("mouseenter", onMouseEnter);
    video.addEventListener("mouseleave", onMouseLeave);
    video.addEventListener("mousemove", onMouseMove);
    

    return () => {
      video.removeEventListener("mouseenter", onMouseEnter);
      video.removeEventListener("mouseleave", onMouseLeave);
      video.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div className="w-full h-screen text-black flex flex-col overflow-hidden">
      <KnowMoreCursor ref={cursorRef} />
      <span className="bg-[#EAE4D8]  w-36 text-center p-1 mx-4 mb-4  xl:ml-20 text-2xl
       rounded-lg font-semibold">
        <h1>About Us</h1>
      </span>

      <div className="flex flex-col w-full lg:mt-24 xl:mt-16  space-y-14 lg:space-y-32 xl:space-y-40">
        <div
          className="xl:w-[80%] w-full mx-auto font-semibold px-3 md:px-8 
        xl:text-4xl  md:text-3xl text-start tracking-wider"
        >
          Engage is a multi-faceted services organization that conceptualizes,
          designs, and delivers world-class people engagement programs — from
          C-suite curated experiences to transformational workshops with top
          speakers and trainers, driving measurable organizational change.
        </div>

        <div
          className="flex lg:flex-row flex-col w-[95%] items-center space-y-5 xl:justify-between
         xl:items-end mx-auto"
        >
          <div
            ref={videoRef}
            className="xl:w-[30%] w-full  h-[15rem] sm:w-[80%] xl:h-[20rem] md:h-[17rem] rounded-2xl overflow-hidden "
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

          {/* Right Side */}
          <div className="flex flex-col w-full px-3 xl:w-[70%] xl:ml-16">
            <div
              className="xl:w-[70%] w-full tracking-wider md:text-xl  lg:text-2xl font-semibold 
              text-start
             xl:text-3xl leading-snug"
            >
              Rooted in Antworx Experience Pvt. Ltd., we draw strength from a
              deep understanding of enterprise structures and hierarchies; like
              ants in a colony, we work methodically to create meaningful impact
              across every level, delivering clear, auditable ROI.
            </div>

            <div className="flex sm:flex-row flex-col space-y-3 sm:items-center justify-between mt-4">
              <div
                onClick={() => setShowPopup(true)}
                className="flex items-center justify-between border-[1.5px] h-10 sm:h-auto
                border-black rounded-[14px] lg:px-2 lg:py-1 px-1 py-1 w-fit cursor-pointer
                hover:bg-gray-100 transition"
              >
                <span className="lg:text-xl  ml-2  font-semibold">
                  know more
                </span>
                <div className="ml-4 bg-black rounded-xl lg:p-3 p-2  flex justify-center items-center">
                  <img src={Arrow} alt="arrow" className="lg:w-4 lg:h-4" />
                </div>
              </div>

              <div
                onClick={goToTeam}
                className="group border-2 border-red-100 w-[12rem] lg:w-auto rounded-2xl lg:pl-5 lg:pr-2 py-1 font-semibold 
                lg:text-lg text-sm gap-x-2 flex justify-center items-center cursor-pointer hover:bg-[#E61F25] hover:text-white transition"
              >
                Meet Our team
                <Hand className=" text-[#E61F25] group-hover:text-white transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Popup open={showPopup} onClose={() => setShowPopup(false)} />
    </div>
  );
};

export default About;
