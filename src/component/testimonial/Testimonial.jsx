import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { ReactComponent as ComaIcon } from "../../assest/coma.svg";

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "Creative Studio",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "My experience with the Antworx team is really excellent. The Red Hat Open Innovation Labs Team engaged them and I can't tell more, they are excellent, very professional and I really enjoyed working with them. I highly recommend them.",
    bg: "bg-[#0D8DFF]",
    color: "#0D8DFF",
  },
  {
    name: "Michael Lee",
    company: "InnovateX",
    image: "https://randomuser.me/api/portraits/men/23.jpg",
    text: "My experience with the Antworx team is really excellent. The Red Hat Open Innovation Labs Team engaged them and I can't tell more, they are excellent, very professional and I really enjoyed working with them. I highly recommend them.",
    bg: "bg-[#E16C02]",
    color: "#E16C02",
  },
  {
    name: "Priya Mehta",
    company: "Design Hive",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    text: "My experience with the Antworx team is really excellent. The Red Hat Open Innovation Labs Team engaged them and I can't tell more, they are excellent, very professional and I really enjoyed working with them. I highly recommend them.",
    bg: "bg-[#E61F25]",
    color: "#E61F25",
  },
  {
    name: "David Carter",
    company: "Bright Ideas",
    image: "https://randomuser.me/api/portraits/men/30.jpg",
    text: "My experience with the Antworx team is really excellent. The Red Hat Open Innovation Labs Team engaged them and I can't tell more, they are excellent, very professional and I really enjoyed working with them. I highly recommend them.",
    bg: "bg-[#0ABAB5]",
    color: "#0ABAB5",
  },
  {
    name: "Aisha Khan",
    company: "NextGen Solutions",
    image: "https://randomuser.me/api/portraits/women/56.jpg",
    text: "My experience with the Antworx team is really excellent. The Red Hat Open Innovation Labs Team engaged them and I can't tell more, they are excellent, very professional and I really enjoyed working with them. I highly recommend them.",
    bg: "bg-[#F9B900]",
    color: "#F9B900",
  },
  {
    name: "James Miller",
    company: "SkyTech",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
    text: "My experience with the Antworx team is really excellent. The Red Hat Open Innovation Labs Team engaged them and I can't tell more, they are excellent, very professional and I really enjoyed working with them. I highly recommend them.",
    bg: "bg-[#FCB8FA]",
    color: "#FCB8FA",
  },
  {
    name: "Emily Davis",
    company: "Brandify",
    image: "https://randomuser.me/api/portraits/women/40.jpg",
    text: "My experience with the Antworx team is really excellent. The Red Hat Open Innovation Labs Team engaged them and I can't tell more, they are excellent, very professional and I really enjoyed working with them. I highly recommend them.",
    bg: "bg-[#0D8DFF]",
    color: "#0D8DFF",
  },
  {
    name: "Raj Patel",
    company: "TechVista",
    image: "https://randomuser.me/api/portraits/men/18.jpg",
    text: "My experience with the Antworx team is really excellent. The Red Hat Open Innovation Labs Team engaged them and I can't tell more, they are excellent, very professional and I really enjoyed working with them. I highly recommend them.",
    bg: "bg-[#E16C02]",
    color: "#E16C02",
  },
  {
    name: "Olivia Smith",
    company: "VisionWorks",
    image: "https://randomuser.me/api/portraits/women/41.jpg",
    text: "My experience with the Antworx team is really excellent. The Red Hat Open Innovation Labs Team engaged them and I can't tell more, they are excellent, very professional and I really enjoyed working with them. I highly recommend them.",
    bg: "bg-[#0ABAB5]",
    color: "#0ABAB5",
  },
];

const Card = ({ text, name, company, image, bg, color }) => {
  return (
    <div
      className={`relative xl:w-[30rem] mx-auto  mt-10  rounded-2xl h-[20rem] sm:h-[24rem] ${bg} lg:h-[26rem]`}
    >
      <span
        className="absolute lg:-top-6 -top-3 -left-3 lg:-left-6 flex items-center justify-center 
        w-14 h-14  lg:w-24  lg:h-24
    rounded-full bg-white"
      >
        <ComaIcon className="w-10 lg:w-28" style={{ color }} />
      </span>

      <div className="flex flex-col justify-between h-full">
        <div
          className={` relative rounded-3xl text-white font-[Poppins]
                  w-full max-w-[30rem] mx-auto p-4 lg:p-8
             flex flex-col justify-between `}
        >
          <p
            className="z-10 mt-10 sm:mt-16 text-start text-xs sm:text-base font-semibold
           leading-relaxed"
          >
            {text}
          </p>
        </div>
        <div className="mt-6 flex items-center justify-end gap-3 text-right ">
          <div className="min-w-0">
            <p className="font-semibold text-white text-xs sm:text-base truncate">
              {name}
            </p>
            <p className="font-bold text-white text-sm sm:text-lg lg:text-xl opacity-90 truncate">
              {company}
            </p>
          </div>

          <img
            src={image}
            alt={`${name} — ${company}`}
            className="w-16 h-16 sm:w-32 sm:h-32 rounded-2xl shrink-0"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </div>
  );
};

const TestimonialsCarousel = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");

    const handleMotionPreference = () => {
      if (mq.matches && swiperRef.current?.autoplay) {
        swiperRef.current.autoplay.stop();
      }
    };

    handleMotionPreference();
    mq.addEventListener?.("change", handleMotionPreference);

    return () => mq.removeEventListener?.("change", handleMotionPreference);
  }, []);

  return (
    <section className="text-black overflow-hidden">
      <div className="mx-auto w-full">
        <Swiper
          modules={[Autoplay]}
          loop
          grabCursor
          freeMode
          freeModeMomentum={false}
          speed={500000000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          spaceBetween={24}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 16 },
            425: { slidesPerView: 1.3, spaceBetween: 20 },

            640: { slidesPerView: 1.5, spaceBetween: 20 },
            1024: { slidesPerView: 2.1, spaceBetween: 24 },
            1480: { slidesPerView: 3, spaceBetween: 24 },
          }}
          className="!px-4"
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <Card {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
    </section>
  );
};

export default TestimonialsCarousel;
