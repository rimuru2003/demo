import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const CounterBox = ({ value, mainHeading, subHeading }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div
      ref={ref}
      className="flex flex-col pb-8 pt-10 xl:px-6 px-2 items-start justify-between h-full text-[#1A1A1A]"
    >
      {/* Animated Counter */}
      <div className="xl:text-[5rem] text-xl font-bold text-[#1A1A1A]">
        <CountUp start={0} end={inView ? value : 0} duration={2.5} />+
      </div>

      {/* Headings */}
      <div className="space-y-1 text-start">
        <h1 className="xl:text-2xl text-xs font-semibold">{mainHeading}</h1>
        <div className="border border-black w-[90%]" />
        <h1 className="xl:text-xl text-xs font-medium">{subHeading}</h1>
      </div>
    </div>
  );
};

export default CounterBox;
