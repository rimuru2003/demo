import React, { useRef, useState } from "react";
import Arrow from "../../assest/arrowBlack.svg";
import Images from "../../component/service/Image";
import General1 from "../../assest/General1.svg";
import General2 from "../../assest/General2.svg";
import General3 from "../../assest/General3.svg";
import General4 from "../../assest/General4.svg";
import PopupS from "../../component/popup/PopupS";

const General = () => {
  const containerRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section
      ref={containerRef}
      className="xl:w-[80%] h-[60vh] mx-auto md:h-[65vh] lg:h-[75vh] w-full  flex justify-center  bg-[#FFFFFF] 
      rounded-3xl"
    >
      <div className="w-[95%] px-2  py-4 ">
        <div className="flex w-full justify-between  h-full   ">
          <div className="flex flex-col justify-evenly w-full sm:w-[50%]  ">
            <div className="text-start  font-[Parkinsans] space-y-2 md:space-y-8">
              <div
                className="  text-4xl md:text-4xl lg:text-6xl xxxl:text-8xl font-semibold
             text-black/10 select-none"
              >
                01
              </div>
            </div>
            <div className="flex flex-col w-full  space-y-10 ">
              <h1
                className="text-4xl md:text-4xl lg:text-6xl xxxl:text-8xl  font-semibold text-black
               leading-none"
              >
                General
              </h1>
              <div className=" text-start space-y-2">
                <h2 className="xsm:text-base md:text-lg text-sm xxxl:text-3xl xl:text-2xl font-semibold leading-snug">
                  Building stronger, happier, and more productive teams through
                  experience-driven activities.
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
                  onClick={() => setShowPopup(true)}
                  className={`
                flex items-center justify-evenly  w-[8rem] lg:w-[10rem]
                px-1 py-1 lg:pl-3 lg:pr-2  bg-[#E16C02] text-white rounded-lg
                 transition font-[Inter] text-xs lg:text-sm lg:font-semibold 
               `}
                >
                  Know More
                  <div className="flex items-center justify-center p-2 xl:p-3 bg-white rounded-xl text-black lg:ml-4">
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
              img1={General1}
              img2={General2}
              img3={General3}
              img4={General4}
            />
          </div>
        </div>
        <PopupS open={showPopup} onClose={() => setShowPopup(false)} />
      </div>
    </section>
  );
};

export default General;
