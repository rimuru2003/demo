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
      className="w-full h-[95vh] flex justify-center xl:pb-10 bg-[#FCB8FA] rounded-3xl"
    >
      <div className="w-[95%]   ">
        <div className="flex  flex-col h-full justify-evenly">
          <div className="flex  justify-between ">
            <div className="text-start  space-y-2 md:space-y-6">
              <span
                className="xl:text-sm  text-xs w-32 font-[Inter] font-medium 
               px-2 py-1 rounded-lg  
               bg-white"
              >
                What we Offers
              </span>
              <h1
                className="text-xl  md:text-4xl lg:text-[50px] font-bold text-black
               leading-none"
              >
               
                Training Need
                <br className="hidden lg:block" /> Analysis (TNA)
              </h1>
            </div>

              <div
              className="  text-[50px] md:text-[70px] lg:text-[100px] font-semibold
             text-black/10 select-none"
            >
              02
            </div>
          </div>

          <div className="flex lg:flex-row  flex-col-reverse   lg:justify-between  lg:h-[70%] w-full">
            <div className="flex flex-col w-full lg:w-[50%] space-y-4 justify-end">
              <div className=" text-start space-y-2">
                <h2 className="text-sm md:text-xl lg:text-2xl font-semibold leading-snug">
                  Identifying performance gaps to create impactful, goal-driven
                  training programs.
                </h2>
                <p className="text-xs md:text-base lg:text-lg text-black/70 xl:w-[90%]  xl:ml-5 leading-relaxed">
                  We go beyond traditional training by engaging individuals in
                  interactive team experiences that relieve stress, boost
                  morale, and foster job satisfaction — resulting in higher
                  productivity and better outcomes.
                </p>
              </div>

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

            <div className="relative w-full  md:w-[45%] flex justify-center h-full">
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
      </div>
    </section>
  );
};

export default Tna;
