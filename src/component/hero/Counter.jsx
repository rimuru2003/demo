import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const CounterBox = ({ value, mainHeading, subHeading }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div
      ref={ref}
      className="flex flex-col py-4 px-6 items-start justify-between h-full text-[#1A1A1A]"
    >
      {/* Animated Counter */}
      <div className="text-[3rem] font-bold text-[#1A1A1A]">
        <CountUp start={0} end={inView ? value : 0} duration={2.5} />+
      </div>

      {/* Headings */}
      <div className="space-y-1 text-start">
        <h1 className="text-2xl font-semibold">{mainHeading}</h1>
        <div className="border border-black w-[90%]" />
        <h1 className="text-xl font-medium">{subHeading}</h1>
      </div>
    </div>
  );
};

export default CounterBox;
