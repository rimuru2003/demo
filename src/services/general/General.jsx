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
      className="w-full h-[95vh]  flex justify-center xl:pb-10 bg-yellow-300 rounded-3xl"
    >
      <div className="w-[95%]   ">
        <div className="flex   flex-col h-full justify-evenly  ">
          <div className="flex  justify-between ">
            <div className="text-start  space-y-2 md:space-y-6">
              <span
                className="xl:text-sm  text-xs w-32 font-[Inter] font-medium 
               px-2 py-1 rounded-lg  
               bg-[#EAE4D8]"
              >
                What we Offers
              </span>
              <h1
                className="text-xl  md:text-4xl lg:text-[50px] font-bold text-black
               leading-none"
              >
                General
              </h1>
            </div>
            <div
              className="  text-[50px] md:text-[70px] lg:text-[100px] font-semibold
             text-black/10 select-none"
            >
              01
            </div>
          </div>

          <div className="flex lg:flex-row  flex-col-reverse   xl:justify-between  lg:h-[70%] w-full">
            <div className="flex flex-col w-full xl:w-[40%] space-y-4 justify-end">
              <div className=" text-start space-y-2">
                <h2 className="xsm:text-base text-sm lg:text-2xl md:text-xl font-semibold leading-snug">
                  Building stronger, happier, and more productive teams through
                  experience-driven activities.
                </h2>
                <p className="xsm:text-sm text-xs lg:text-lg md:text-base text-black/70 xl:ml-5 xl:w-[95%] font-[Inter] leading-relaxed">
                  We go beyond traditional training by engaging individuals in
                  interactive team experiences that relieve stress, boost
                  morale, and foster job satisfaction — resulting in higher
                  productivity and better outcomes.
                </p>
              </div>

              <button
                onClick={() => setShowPopup(true)}
                className={`
                flex items-center justify-evenly  w-[40%] md:w-[20%] lg:w-[40%] xl:w-[20%]
                px-1 py-1 lg:pl-3 lg:pr-2  bg-[#FA5424] text-white 
                rounded-2xl transition font-[Inter] text-xs lg:text-sm lg:font-semibold 
               `}
              >
                Know More
                <div className="flex items-center justify-center p-2 xl:p-3 bg-white rounded-xl text-black lg:ml-4">
                  <img
                    src={Arrow}
                    alt="arrow"
                    className="w-2 h-2 lg:w-3 lg:h-3"
                  />
                </div>
              </button>
            </div>

            <div className="relative w-full lg:w-[50%] flex justify-start h-full">
              <Images
                borderClass="border-orange-500"
                img1={General1}
                img2={General2}
                img3={General3}
                img4={General4}
              />
            </div>
          </div>
        </div>
        <PopupS open={showPopup} onClose={() => setShowPopup(false)} />
      </div>
    </section>
  );
};

export default General;
