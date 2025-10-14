import React from "react";
import CounterBox from "./Counter";

const About = () => {
  return (
    <div className="h-screen w-full bg-[#0ABAB5] text-white rounded-[2rem]">
      <div className="flex justify-between pt-12 pb-2 items-center border-b-[1.5px] w-[95%] mx-auto">
        <div className="text-lg font-medium">[ About ]</div>
        <div className="flex justify-center items-center gap-x-3 text-xl font-medium">
          <p>Engage.</p>
          <p>Hustle.</p>
          <p>Win.</p>
          <p>Repeat.</p>
        </div>
      </div>
      <div className="flex mx-11  justify-between ">
        <div className="w-[80%] font-medium text-5xl text-start pt-16 tracking-wider ">
          Engage is a multi-faceted services organization that conceptualizes,
          designs, and delivers world-class people engagement programs — from
          C-suite curated experiences to transformational workshops with top
          speakersand trainers, driving measurable organizational change. Rooted
          in Antworx Experience...
        </div>
        <div className="flex flex-col justify-center items-center ">
          <CounterBox value={13} label="Countries" className="mr-0" />
          <CounterBox value={100} label="Brands" className="mr-2" />
          <CounterBox value={900} label="Projects Worldwide" className="mr-4" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-start gap-y-8 w-[95%] mt-14 mx-auto  ">
        <div className="flex justify-center items-center mb-8 relative">
          <div className="w-24 h-24 border-2 bg-[#0ABAB5]  border-white rounded-2xl absolute left-0 z-10" />
          <div className="w-24 h-24 border-2 bg-[#0ABAB5] border-white rounded-2xl z-10  absolute left-20" />
          <div className="w-24 h-24 border-2 bg-[#0ABAB5] border-white rounded-2xl z-40 absolute left-56" />
          <div className="w-24 h-24 border-2 bg-[#0ABAB5] border-white rounded-2xl z-30 absolute left-40" />
        </div>
        <p className="text-xl sm:text-2xl font-medium tracking-widest flex items-center gap-[6px]">
          MEET OUR TEAM
          <span className="flex gap-[4px]">
            <span>&gt;</span>
            <span>&gt;</span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default About;
