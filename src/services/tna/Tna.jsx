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
      className="xl:w-[80%] h-[60vh] mx-auto md:h-[65vh] lg:h-[75vh] w-full  flex justify-center  bg-[#FCB8FA] 
      rounded-3xl"
    >
      <div className="w-[95%] px-2  py-4 ">
        <div className="flex w-full justify-between  h-full   ">
          <div className="flex flex-col justify-evenly w-full sm:w-[50%]  ">
            <div className="text-start  space-y-2 md:space-y-6">
              <div
                className="  text-4xl md:text-4xl lg:text-6xl xxxl:text-8xl font-semibold
             text-black/10 select-none"
              >
                02
              </div>
            </div>
            <div className="flex flex-col space-y-10 justify-end">
              <h1
                className="text-4xl md:text-4xl lg:text-6xl xxxl:text-8xl  font-semibold text-black
               leading-none"
              >
                Training Need <br className="hidden lg:block" /> Analysis (TNA)
              </h1>
              <div className=" text-start space-y-2">
                <h2 className="xsm:text-base md:text-lg text-sm xxxl:text-3xl xl:text-2xl font-semibold leading-snug">
                  Identifying performance gaps to create impactful, goal-driven
                  training programs.{" "}
                </h2>
                <p className="xsm:text-sm text-xs  xl:text-lg text-[#161616] font-medium xl:ml-5 xl:w-[95%] font-[Inter] leading-relaxed">
                  We go beyond traditional training by engaging individuals in
                  interactive team experiences that relieve stress, boost
                  morale, and foster job satisfaction — resulting in higher
                  productivity and better outcomes.
                </p>
              </div>
              <div className="flex justify-end w-full">
                <button
                  className="flex items-center justify-evenly w-[8rem] lg:w-[10rem]
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
                      className="w-3 h-3 lg:w-4 lg:h-4"
                    />
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div className=" w-[30%] lg:w-[40%] hidden sm:flex xxxl:mt-16 mt-20 lg:mt-10 justify-center items-center h-full">
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
