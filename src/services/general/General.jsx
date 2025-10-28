import React, { useRef } from "react";
import Arrow from "../../assest/arrow.png";
import Images from "../../component/service/Image"; 

const General = () => {
  const containerRef = useRef(null);

  return (
    <section
      ref={containerRef}
      className="w-full h-[90vh] flex justify-center py-12 bg-white rounded-3xl"
    >
      <div className="w-[95%] flex flex-col md:flex-row justify-between items-center ">
        {/* LEFT CONTENT */}
        <div className="flex w-[50%] flex-col h-full justify-between">
          <div className="flex flex-col items-start space-y-3">
            <span className="text-sm w-32 font-semibold bg-[#EAE4D8] px-1 py-1 rounded-lg">
              What we Offers
            </span>

            <h1 className="text-[64px] md:text-[80px] font-bold text-black leading-none">
              General
            </h1>
          </div>

          <div>
            <div className="space-y-4 text-start">
              <h2 className="text-xl md:text-2xl font-semibold leading-snug">
                Building stronger, happier, and more productive teams through
                experience-driven activities.
              </h2>
              <p className="text-base md:text-lg text-black/70 ml-5 leading-relaxed">
                We go beyond traditional training by engaging individuals in
                interactive team experiences that relieve stress, boost morale,
                and foster job satisfaction — resulting in higher productivity
                and better outcomes.
              </p>
            </div>

            <button className="mt-4 flex items-center gap-4 ml-5 bg-[#FA5424] text-white px-5 py-2 rounded-2xl font-semibold transition">
              Know More
              <div className="ml-4 bg-black rounded-xl -rotate-90 p-3 flex justify-center items-center">
                <img src={Arrow} alt="arrow" className="w-4 h-4" />
              </div>
            </button>
          </div>
        </div>

        {/* RIGHT IMAGES */}
        <div className="relative w-full md:w-[45%] flex justify-center h-full">
          <div className="absolute top-0 right-0 z-[4] text-[80px] md:text-[120px] font-extrabold text-black/10 select-none">
            01
          </div>

          <Images
            borderClass="border-orange-500" // ✅ only change border color
            img1="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200&auto=format&fit=crop"
            img2="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop"
            img3="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1200&auto=format&fit=crop"
            img4="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200&auto=format&fit=crop"
          />
        </div>
      </div>
    </section>
  );
};

export default General;
