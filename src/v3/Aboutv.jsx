import React, { useState } from "react";
import Popup from "../component/popup/Popup";
import Arrow from "../assest/arrow.svg";
import Curvesred from "../assest/v3/curvesred.svg";
import { ReactComponent as Hand } from "../assest/hand.svg";

const About = ({ goToTeam }) => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section className="relative w-full min-h-screen  text-black overflow-hidden">
      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 xl:px-16 py-16">
        {/* Label */}
        <span className="inline-block bg-[#EAE4D8] px-4 py-1 rounded-lg text-lg font-semibold mb-10">
          About Us
        </span>

        <div className="flex flex-col items-center text-center">
          {/* Heading */}
          <h2 className="font-bold tracking-tight leading-tight text-3xl md:text-4xl xl:text-5xl max-w-6xl">
            <span className="text-[#E61F25] underline underline-offset-4">
              Engage
            </span>{" "}
            is a multi-faceted services organization that conceptualizes,
            designs, and delivers world-class people engagement programs—from
            C-suite curated experiences to transformational workshops with top
            speakers and trainers, driving measurable organizational change.
          </h2>

          <p className="mt-16 max-w-3xl text-lg md:text-xl xl:text-2xl font-semibold leading-relaxed">
            Rooted in Antworx Experience Pvt. Ltd., we draw strength from a deep
            understanding of enterprise structures and hierarchies; like ants in
            a colony, we work methodically to create meaningful impact across
            every level, delivering clear, auditable ROI.
          </p>

          <div className="mt-10">
            <button
              onClick={() => setShowPopup(true)}
              className="flex items-center gap-3 border border-black rounded-xl px-4 py-2 font-semibold
              hover:bg-black hover:text-white transition"
            >
              Know more
              <span className="p-2">
                <img src={Arrow} alt="arrow" className="w-4 h-4 invert" />
              </span>
            </button>
          </div>
        </div>
      </div>

      <img
        src={Curvesred}
        alt=""
        className="
          pointer-events-none
          absolute
          left-1/2
          bottom-[-3rem]
          -translate-x-1/2
          w-screen
          max-w-none
        "
      />
      <div
        onClick={goToTeam}
        className="group border-2 absolute right-6 bottom-1/5 border-red-100 w-[12rem] lg:w-auto rounded-2xl lg:pl-5 lg:pr-2 py-1 font-semibold 
                lg:text-lg text-sm gap-x-2 flex justify-center items-center cursor-pointer hover:bg-[#E61F25] hover:text-white transition"
      >
        Meet Our team
        <Hand className=" text-[#E61F25] group-hover:text-white transition-colors" />
      </div>
      <Popup open={showPopup} onClose={() => setShowPopup(false)} />
    </section>
  );
};

export default About;
