import React from "react";
import Marquee from "react-fast-marquee";
import Airtel from "../../assest/airtel.svg";

const Client = () => {
  const logos = Array(20).fill(Airtel); // 20 logos for smoother loop

  return (
    <div className="relative w-full h-screen bg-[#F9F6EE] overflow-hidden flex items-center justify-end">
      {/* Pink Band */}
      <div className="absolute top-[25%] left-[-10%] w-[130%] py-4 bg-[#F9A8D4] rotate-[-15deg] z-[5]">
        <Marquee
          speed={60}
          gradient={false}
          loop={0} // 🔁 0 = infinite loop
          pauseOnHover={false}
          autoFill={true} // fills the space automatically for seamless loop
        >
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`logo-${index}`}
              className="h-16 mx-16"
            />
          ))}
        </Marquee>
      </div>

      {/* Blue Band */}
      <div className="absolute bottom-[25%] left-[-10%] w-[130%] py-4 bg-[#3B82F6] rotate-[15deg] z-[3]">
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
              className="h-16 mx-16 invert brightness-0"
            />
          ))}
        </Marquee>
      </div>

      {/* Center Text */}
      <div className="relative pr-8 z-10 text-end">
        <h1 className="text-[6rem]  font-extrabold text-[#1A1A1A] leading-tight">
          These brands <br />
          we worked with.
        </h1>
      </div>
    </div>
  );
};

export default Client;
