import React from "react";
import Airtel from "../../assest/airtel.svg";

const Client = () => {
  return (
    <div
      className="relative w-full h-screen bg-[#F9F6EE] overflow-hidden
     flex items-center justify-end"
    >
      {/* Pink Band */}
      <div
        className="absolute top-[25%] left-[-10%] w-[130%] py-8
       bg-[#F9A8D4] rotate-[-15deg] flex items-center justify-around  z-[5]"
      >
        {/* Example logos */}
        <img src={Airtel} alt="Airtel" className="h-10" />
        <img src={Airtel} alt="Airtel" className="h-10" />
        <img src={Airtel} alt="Airtel" className="h-10" />
        <img src={Airtel} alt="Airtel" className="h-10" />
        <img src={Airtel} alt="Airtel" className="h-10 invert brightness-0" />
        <img src={Airtel} alt="Airtel" className="h-10 invert brightness-0" />
        <img src={Airtel} alt="Airtel" className="h-10 invert brightness-0" />
        <img
          src={Airtel}
          alt="Airtel"
          className="h-10 invert brightness-0"
        />{" "}
        <img src={Airtel} alt="Airtel" className="h-10 invert brightness-0" />
        <img src={Airtel} alt="Airtel" className="h-10 invert brightness-0" />
        <img src={Airtel} alt="Airtel" className="h-10 invert brightness-0" />
        <img
          src={Airtel}
          alt="Airtel"
          className="h-10 invert brightness-0"
        />{" "}
        <img src={Airtel} alt="Airtel" className="h-10 invert brightness-0" />
        <img src={Airtel} alt="Airtel" className="h-10 invert brightness-0" />
        <img src={Airtel} alt="Airtel" className="h-10 invert brightness-0" />
        <img src={Airtel} alt="Airtel" className="h-10 invert brightness-0" />
      </div>

      {/* Blue Band */}
      <div
        className="absolute bottom-[25%] left-[-10%] w-[130%] py-8
       bg-[#3B82F6] rotate-[15deg] flex items-center justify-around z-[3]"
      >
        <img src={Airtel} alt="Airtel" className="h-10 invert brightness-0" />
        <img src={Airtel} alt="Airtel" className="h-10 invert brightness-0" />
        <img src={Airtel} alt="Airtel" className="h-10 invert brightness-0" />
        <img src={Airtel} alt="Airtel" className="h-10 invert brightness-0" />
        <img src={Airtel} alt="Airtel" className="h-10 invert brightness-0" />
        <img src={Airtel} alt="Airtel" className="h-10 invert brightness-0" />
        <img src={Airtel} alt="Airtel" className="h-10 invert brightness-0" />
        <img
          src={Airtel}
          alt="Airtel"
          className="h-10 invert brightness-0"
        />{" "}
        <img src={Airtel} alt="Airtel" className="h-10 invert brightness-0" />
        <img src={Airtel} alt="Airtel" className="h-10 invert brightness-0" />
        <img src={Airtel} alt="Airtel" className="h-10 invert brightness-0" />
        <img src={Airtel} alt="Airtel" className="h-10 invert brightness-0" />
      </div>

      {/* Center Text */}
      <div className="relative  pr-8  z-10 text-end">
        <h1 className="text-[7rem]   font-extrabold text-[#1A1A1A] leading-tight">
          These brands
          <br />
          got hyped.
        </h1>
      </div>
    </div>
  );
};

export default Client;
