import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const CounterBox = ({ value, label , className }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div
      ref={ref}
      className="flex flex-col items-end justify-center text-center  text-white w-full h-[10rem] md:h-[12rem] transition-all duration-700"
    >
      <h1 className={`text-[4rem] sm:text-[5rem] md:text-[6rem] tracking-wider font-bold leading-none ${className}`}>
        <CountUp start={0} end={inView ? value : 0} duration={2.5} />+
      </h1>
      <p className="text-sm sm:text-base mt-2 font-medium tracking-wide">
        [ {label} ]
      </p>
    </div>
  );
};

export default CounterBox;
