import React, { useRef, useState } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Arrow from "../../assest/arrow.svg";
import { ReactComponent as Hand } from "../../assest/hand.svg";
import Video from "../../assest/videoplayback.mp4";
import Vlogo from "../../assest/videologo.svg";

gsap.registerPlugin(ScrollTrigger);

/* ---------------- Cursor ---------------- */
const KnowMoreCursor = React.forwardRef((props, ref) =>
  createPortal(
    <div
      ref={ref}
      className="fixed z-[9999] pointer-events-none"
      style={{ opacity: 0, transform: "scale(0.85)", left: 0, top: 0 }}
    >
      <div className="ml-6 mt-6">
        <div className="flex items-center gap-4 px-3 py-2 rounded-2xl bg-white shadow-lg">
          <img src={Vlogo} alt="video logo" />
          <span className="text-xl font-semibold">Play Video</span>
        </div>
      </div>
    </div>,
    document.body
  )
);
KnowMoreCursor.displayName = "KnowMoreCursor";

/* ---------------- Popup ---------------- */
const Popup = ({ open, onClose }) => {
  if (!open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[10000] bg-black/50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl p-8 max-w-2xl mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-3xl font-bold mb-4">About Engage</h2>
        <p className="text-lg mb-6">
          We create world-class people engagement programs that drive measurable
          organizational change.
        </p>
        <button
          onClick={onClose}
          className="px-6 py-2 bg-black text-white rounded-lg"
        >
          Close
        </button>
      </div>
    </div>,
    document.body
  );
};

/* ---------------- Main ---------------- */
const About = ({ goToTeam = () => {} }) => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const videoContainerRef = useRef(null);
  const textRef = useRef(null);
  const secondTextRef = useRef(null);
  const buttonsRef = useRef(null);
  const cursorRef = useRef(null);

  const [showPopup, setShowPopup] = useState(false);

  useGSAP(() => {
    // if (window.innerWidth < 1024) return;

    const video = videoRef.current;
    const cursor = cursorRef.current;
    if (!video || !cursor) return;

    const enter = () =>
      gsap.to(cursor, { opacity: 1, scale: 1, duration: 0.2 });
    const leave = () =>
      gsap.to(cursor, { opacity: 0, scale: 0.85, duration: 0.2 });
    const move = (e) =>
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
      });

    video.addEventListener("mouseenter", enter);
    video.addEventListener("mouseleave", leave);
    video.addEventListener("mousemove", move);

    return () => {
      video.removeEventListener("mouseenter", enter);
      video.removeEventListener("mouseleave", leave);
      video.removeEventListener("mousemove", move);
    };
  });

  /* ---------- Scroll Animation (lg+) ---------- */
  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const getScrollValues = () => {
          const width = window.innerWidth;
          if (width >= 1536) {
            return { start: "bottom bottom", end: "+=60%" };
          }
          if (width >= 1280) {
            return { start: "bottom bottom", end: "+=85%" };
          }
          return { start: "bottom bottom", end: "+=70%" };
        };

        const scrollValues = getScrollValues();

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: scrollValues.start,
            end: scrollValues.end,
            scrub: 2,
            pin: true,
            anticipatePin: 1,
          },
        });

        tl.to(
          [textRef.current, secondTextRef.current, buttonsRef.current],
          {
            y: () => -window.innerHeight * 1.05,
            ease: "power2.out",
          },
          0
        );

        tl.to(
          videoContainerRef.current,
          {
            x: "50vw",
            xPercent: -55,
            scale: 1.6,
            width: "80vw",
            height: "50vh",
            ease: "power2.out",
          },
          0
        );

        return () => tl.kill();
      });

      if (window.innerWidth < 1024) {
        gsap.set([textRef.current, secondTextRef.current, buttonsRef.current], {
          clearProps: "all",
        });
        gsap.set(videoContainerRef.current, { clearProps: "all" });
      }

      return () => mm.kill();
    },
    { scope: sectionRef }
  );

  return (
    <>
      <section
        ref={sectionRef}
        className="w-full min-h-screen py-28 h-[120vh] flex flex-col overflow-hidden  text-black"
      >
        <KnowMoreCursor ref={cursorRef} />

        <span className="bg-[#EAE4D8] w-36 p-1 mx-4 mb-4 xl:ml-20 text-2xl text-center rounded-lg font-semibold">
          About Us
        </span>

        <div className="flex flex-col w-full lg:mt-24 xl:mt-16 space-y-32">
          <div
            ref={textRef}
            className="xl:w-[60%]  px-20 xl:text-4xl md:text-3xl font-semibold tracking-wide"
          >
            {" "}
            <span className="text-[#E61F25] underline font-[Inter] underline-offset-4">
              Engage
            </span>{" "}
            is a multi-faceted services organization that conceptualizes,
            designs, and delivers world-class people engagement programs—from
            C-suite curated experiences to transformational workshops with top
            speakers and trainers, driving measurable organizational change.
          </div>

          <div className="flex  flex-col lg:flex-row w-[95%] mx-auto gap-10 items-center">
            <div
              ref={videoContainerRef}
              className="xl:w-[30%] w-full md:w-[70%] h-[15rem] xl:h-[20rem] rounded-xl overflow-hidden"
            >
              <video
                ref={videoRef}
                src={Video}
                className="w-full h-full object-cover cursor-pointer"
                muted
                autoPlay
                loop
                playsInline
                controls
              />
            </div>

            <div className="flex flex-col w-full xl:w-[70%] xl:ml-16 px-4">
              <div
                ref={secondTextRef}
                className="xl:w-[70%] font-[Inter] xl:text-3xl md:text-xl font-semibold tracking-wide"
              >
                Rooted in Antworx Experience Pvt. Ltd., we draw strength from a
                deep understanding of enterprise structures and hierarchies;
                like ants in a colony, we work methodically to create meaningful
                impact across every level, delivering clear, auditable ROI.
              </div>

              <div
                ref={buttonsRef}
                className="flex flex-col sm:flex-row gap-4 justify-between mt-6"
              >
                <button
                  onClick={() => setShowPopup(true)}
                  className="flex items-center border border-black rounded-xl px-3 py-1"
                >
                  <span className="font-semibold">Know more</span>
                  <div className="ml-4 bg-black rounded-xl p-2">
                    <img src={Arrow} alt="" />
                  </div>
                </button>

                <button
                  onClick={goToTeam}
                  className="border-2 rounded-2xl px-5 py-1 font-semibold flex items-center gap-2 hover:bg-[#E61F25] hover:text-white"
                >
                  Meet Our Team
                  <Hand />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Popup open={showPopup} onClose={() => setShowPopup(false)} />
    </>
  );
};

export default About;
