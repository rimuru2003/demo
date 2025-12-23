import React from "react";
import Marquee from "react-fast-marquee";
import Airtel from "../../assest/logo/AirtelB.svg";

const Client = () => {
  const logos = Array(20).fill(Airtel); // 20 logos for smoother loop

  return (
    <div
      className=" w-full py-36 bg-[#F9F6EE] overflow-hidden flex flex-col
     items-center space-y-8 lg:space-y-16 "
    >
      <h1 className="xl:pr-8 z-10 text-center text-4xl  xsm:text-5xl sm:text-6xl md:text-7xl xxl:text-[7rem] font-extrabold text-[#1A1A1A] leading-[0.9]">
        These brands we <br /> worked with.
      </h1>

      <div className="w-full xl:w-[90%] space-y-6 lg:space-y-12">
        <div className="relative py-2 bg-[#F9A8D4]">
          <Marquee
            speed={60}
            gradient={false}
            loop={0}
            pauseOnHover={false}
            autoFill={true}
          >
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`logo-${index}`}
                className="xxl:h-24 md:h-10 lg:h-12 xl:h-14 h-8 xl:mx-10 mx-8 "
              />
            ))}
          </Marquee>

          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#F9F6EE] to-transparent pointer-events-none z-10"></div>

          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#F9F6EE] to-transparent pointer-events-none z-10"></div>
        </div>

        <div className="relative py-2 bg-[#3B82F6]">
          <Marquee
            speed={80}
            gradient={false}
            direction="right"
            loop={0}
            pauseOnHover={false}
            autoFill={true}
          >
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`logo-${index}`}
                className="xxl:h-24 md:h-10 lg:h-12 xl:h-14 h-8 xl:mx-10 mx-8 "
              />
            ))}
          </Marquee>

          <div className="absolute  top-0 left-0 w-32 h-full bg-gradient-to-r from-[#F9F6EE] to-transparent pointer-events-none z-10"></div>

          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#F9F6EE] to-transparent pointer-events-none z-10"></div>
        </div>
      </div>
    </div>
  );
};

export default Client;
