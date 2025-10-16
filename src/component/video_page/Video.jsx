import React, { useRef } from "react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Video from "../../assest/videoplayback.mp4";

// gsap.registerPlugin(ScrollTrigger);

const Videos = () => {
  // const videoRef = useRef();

  // useGSAP(() => {
  //   gsap.to(videoRef.current, {
  //     width: "90%",
  //     height: "90%",
  //     ease: "power2.out",
  //     scrollTrigger: {
  //       trigger: videoRef.current,
  //       start: "top center", 
  //       end: "bottom 80%", 
  //       scrub: 4, 
  //     },
  //   });
  // }, []);

  return (
    <div className="h-screen w-screen   flex items-center justify-center overflow-x-hidden">
      <video
        // ref={videoRef}
        src={Video}
        className="object-cover   w-full h-full"
        autoPlay
        muted
        loop
        controls
      ></video>
    </div>
  );
};

export default Videos;
