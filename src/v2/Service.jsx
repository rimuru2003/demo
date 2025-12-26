import React, { useRef, useState } from "react";
import General from "../services/general/General";
import Tna from "../services/tna/Tna";
import Training from "../services/training/Training";
import Outbound from "../services/Outbound Training/Outbound";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";

const tabshown = [
  { name: "General", component: General },
  { name: "Need Gap Analysis", component: Tna },
  { name: "Training", component: Training },
  { name: "Outbound training", component: Outbound },
];

const Service = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideToLoop(index);
    }
  };

  return (
    <div className="min-h-screen">
      <div className=" flex flex-col items-center space-y-6 p-0 ">
        <h1 className="text-6xl md:text-8xl font-Parkinsans  xl:text-9xl font-bold px-4 xl:px-0 ">What We Offer</h1>

        <div className="flex text-xs xl:text-2xl px-6  gap-2 font-medium flex-wrap  justify-center xl:space-x-6">
          {tabshown.map((valu, ind) => (
            <div
              key={ind}
              onClick={() => handleTabClick(ind)}
              className={`border-2 px-3 py-1  rounded-lg cursor-pointer 
                transition-colors  ${
                activeIndex === ind
                  ? "bg-[#FA5424] text-white "
                  : "bg-[#EAE4D8]  hover:bg-emerald-100"
              }`}
            >
              {valu.name}
            </div>
          ))}
        </div>
      </div>

      <div className="">
        <Swiper
          ref={swiperRef}
          effect="creative"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          speed={1500}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          creativeEffect={{
            prev: {
              translate: [0, 0, -400],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          modules={[EffectCreative]}
          className="mySwiper"
        >
          {tabshown.map((valu, ind) => {
            const Component = valu.component;
            return (
              <SwiperSlide key={ind}>
                <div className="  p-8">
                  <Component />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Service;