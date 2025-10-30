import React, { useRef,useState } from "react";
import Arrow from "../../assest/arrowBlack.svg";
import Images from "../../component/service/Image";
import General1 from "../../assest/General1.svg";
import General2 from "../../assest/General2.svg";
import General3 from "../../assest/General3.svg";
import General4 from "../../assest/General4.svg";
import PopupS from   "../../component/popup/PopupS"

const General = () => {
  const containerRef = useRef(null);
    const [showPopup, setShowPopup] = useState(false);
  

  return (
    <section
      ref={containerRef}
      className="w-full h-[95vh] flex justify-center xl:pb-10 bg-white rounded-3xl"
    >
      <div className="w-[95%]   ">
        <div className="flex  flex-col h-full justify-center">
          <div className="flex  justify-between ">
            <div className="text-start space-y-2">
              {" "}
              <span className="xl:text-sm text-xs w-32 font-[Inter] font-medium  px-2 py-1 rounded-lg   bg-[#EAE4D8]">
                What we Offers
              </span>
              <h1 className="text-3xl md:text-[80px] font-bold text-black leading-none">
                General
              </h1>
            </div>
            <div
              className="  text-[60px] md:text-[120px] font-bold
             text-black/10 select-none"
            >
              01
            </div>
          </div>

          <div className="flex xl:flex-row  flex-col-reverse   xl:justify-between  xl:h-[70%] w-full">
            <div className="flex flex-col w-full xl:w-[40%] space-y-4 justify-end">
              <div className=" text-start space-y-4">
                <h2 className="text-sm md:text-2xl  font-semibold leading-snug">
                  Building stronger, happier, and more productive teams through
                  experience-driven activities.
                </h2>
                <p className="text-xs md:text-lg text-black/70 xl:ml-5 xl:w-[95%] font-[Inter] leading-relaxed">
                  We go beyond traditional training by engaging individuals in
                  interactive team experiences that relieve stress, boost
                  morale, and foster job satisfaction — resulting in higher
                  productivity and better outcomes.
                </p>
              </div>

              <button                 onClick={() => setShowPopup(true)}

                className="flex  py-1 items-center font-[Inter] justify-evenly xl:ml-5 w-[35%] xl:w-[25%]  bg-[#FA5424]
               text-white px-1   xl:pl-3 xl:pr-2 xl:py-2 rounded-2xl text-xs xl:text-base xl:font-semibold transition"
              >
                Know More
                <div
                  className="xl:ml-4  bg-white text-black rounded-xl  p-2 xl:p-3 flex justify-center
                 items-center"
                >
                  <img
                    src={Arrow}
                    alt="arrow"
                    className="xl:w-4 xl:h-4 w-2 h-2"
                  />
                </div>
              </button>
            </div>

            <div className="relative w-full md:w-[45%] flex justify-center h-full">
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
