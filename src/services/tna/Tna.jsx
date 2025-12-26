import React, { useRef } from "react";
import Arrow from "../../assest/arrow.svg";
import Images from "../../component/service/Image";
import Tna1 from "../../assest/Tna1.svg";
import Tna2 from "../../assest/Tna2.svg";
import Tna3 from "../../assest/Tna3.svg";
import Tna4 from "../../assest/Tna4.svg";

const Tna = () => {
  const containerRef = useRef(null);

  return (
    <section
      ref={containerRef}
      className="w-[80%] mx-auto h-[75vh]  flex justify-center  bg-[#FCB8FA] 
      rounded-3xl"
    >
      <div className="w-[95%]   ">
        <div className="flex w-full justify-between  h-full   ">
          <div className="flex flex-col justify-around w-[50%]  ">
            <div className="text-start  space-y-2 md:space-y-6">
              <div
                className="  text-[50px] md:text-[70px] lg:text-8xl font-semibold
             text-black/10 select-none"
              >
                04
              </div>
            </div>
            <div className="flex flex-col space-y-10 justify-end">
              <h1
                className="text-8xl  font-semibold text-black
               leading-none"
              >
                Outbound
                <br className="hidden lg:block" /> Training
              </h1>
              <div className=" text-start space-y-2">
                <h2 className="xsm:text-base text-sm xl:text-3xl md:text-xl font-semibold leading-snug">
                  Identifying performance gaps to create impactful, goal-driven
                  training programs.{" "}
                </h2>
                <p className="text-xs md:text-base lg:text-xl text-[#161616]  xl:ml-5 xl:w-[90%] leading-relaxed">
                  We go beyond traditional training by engaging individuals in
                  interactive team experiences that relieve stress, boost
                  morale, and foster job satisfaction — resulting in higher
                  productivity and better outcomes.
                </p>
              </div>
              <div className="flex justify-end w-full">
                <button
                  className="flex items-center justify-evenly  w-[40%] md:w-[20%] lg:w-[40%] xl:w-[20%]
                px-1 py-1 lg:pl-3 lg:pr-2  bg-white text-black 
                rounded-2xl transition font-[Inter] text-xs lg:text-sm lg:font-semibold "
                >
                  Know More
                  <div
                    className="xl:ml-4  bg-black rounded-xl -rotate-90  p-2 xl:p-3 flex justify-center
                 items-center"
                  >
                    <img
                      src={Arrow}
                      alt="arrow"
                      className="w-2 h-2 lg:w-3 lg:h-3"
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div className=" w-[30%] mt-16 flex justify-center items-center h-full">
            <Images
              borderClass="border-orange-500"
              img1={Tna1}
              img2={Tna2}
              img3={Tna3}
              img4={Tna4}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tna;
