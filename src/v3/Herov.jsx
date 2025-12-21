import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Vid from "../assest/v3/vid.svg";
import curve from "../assest/curve.svg";

gsap.registerPlugin(ScrollTrigger);

const Heroanimation = () => {
  const containerRef = useRef(null);
  const videoContainerRef = useRef(null);
  const videoRef = useRef(null);
  const imageRef = useRef(null);

  const isMobile = window.innerWidth < 640;

  const getBaseDimensions = () => {
    const w = window.innerWidth;
    if (w < 375) return [130, 70];
    if (w < 550) return [150, 80];
    if (w < 768) return [140, 70];
    if (w < 991) return [190, 60];
    if (w < 1200) return [200, 75];
    return [200, 90];
  };

  const [baseW, baseH] = getBaseDimensions();

  const maxW = window.innerWidth * 0.9;
  const maxH = window.innerHeight * 0.7;
  const finalW = maxW / (16 / 9) <= maxH ? maxW : maxH * (16 / 9);
  const finalH = maxW / (16 / 9) <= maxH ? maxW / (16 / 9) : maxH;

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: isMobile ? "+=700" : "+=2000",
        scrub: true,
        pin: true,
        onUpdate: (self) => {
          if (self.progress > 0.02) {
            videoRef.current?.play();
          } else {
            videoRef.current?.pause();
            videoRef.current.currentTime = 0;
          }
        },
      },
    });

    tl.to(videoContainerRef.current, {
      width: finalW,
      height: finalH,
      ease: "power2.inOut",
    })
      .to(imageRef.current, { opacity: 0, duration: 0.2 }, 0)
      .to(videoRef.current, { opacity: 1, duration: 0.2 }, 0);
  }, []);

  return (
    <div className="min-h-screen ">
      <div
        ref={containerRef}
        className="relative flex flex-col justify-start  w-full h-screen overflow-hidden"
      >
        <div
          className="flex flex-col sm:items-center mt-14 sm:text-center px-4 text-black 
text-[2.25rem] sm:text-[3.75rem] md:text-[4.5rem] lg:text-[9rem] 
font-bold tracking-wider leading-[0.9] z-10"
        >
          <p>We</p>
          <p>make things</p>

          <div className="flex items-center justify-center mr-36 space-x-10">
            <p className=" whitespace-nowrap">possible</p>

            <div className="relative flex items-center justify-center">
              <div style={{ width: baseW, height: baseH }} />

              <div
                ref={videoContainerRef}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl overflow-hidden shadow-lg"
                style={{
                  width: baseW,
                  height: baseH,
                  maxWidth: "90vw",
                  maxHeight: "70vh",
                }}
              >
                <img
                  ref={imageRef}
                  src={Vid}
                  alt="Video placeholder"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* VIDEO (VISIBLE WHEN SCALING STARTS) */}
                <video
                  ref={videoRef}
                  className="absolute inset-0 w-full h-full object-cover opacity-0"
                  loop
                  muted
                  playsInline
                  preload="auto"
                >
                  <source
                    src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </div>

          <p>once and</p>
          <p>always</p>

          <span className="text-xl md:text-2xl flex tracking-normal flex-wrap justify-center space-x-1 relative mt-4">
            <p className="font-bold">Unleashing Potential</p>
            <p className="font-normal">through experiential programs</p>
            <img
              src={curve}
              alt="curve underline"
              className="absolute left-0  -bottom-4 w-[230px] pointer-events-none"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Heroanimation;
