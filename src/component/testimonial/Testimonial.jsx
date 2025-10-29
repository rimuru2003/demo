import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "Creative Studio",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "My experience with the Antworx team is really excellent. The Red Hat Open Innovation Labs Team engaged them and I can't tell more, they are excellent, very professional and I really enjoyed working with them. I highly recommend them.",
    bg: "bg-[#0D8DFF]",
  },
  {
    name: "Michael Lee",
    company: "InnovateX",
    image: "https://randomuser.me/api/portraits/men/23.jpg",
    text: "My experience with the Antworx team is really excellent. The Red Hat Open Innovation Labs Team engaged them and I can't tell more, they are excellent, very professional and I really enjoyed working with them. I highly recommend them.",
    bg: "bg-[#E16C02]",
  },
  {
    name: "Priya Mehta",
    company: "Design Hive",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    text: "My experience with the Antworx team is really excellent. The Red Hat Open Innovation Labs Team engaged them and I can't tell more, they are excellent, very professional and I really enjoyed working with them. I highly recommend them.",
    bg: "bg-[#E61F25]",
  },
  {
    name: "David Carter",
    company: "Bright Ideas",
    image: "https://randomuser.me/api/portraits/men/30.jpg",
    text: "My experience with the Antworx team is really excellent. The Red Hat Open Innovation Labs Team engaged them and I can't tell more, they are excellent, very professional and I really enjoyed working with them. I highly recommend them.",
    bg: "bg-[#0ABAB5]",
  },
  {
    name: "Aisha Khan",
    company: "NextGen Solutions",
    image: "https://randomuser.me/api/portraits/women/56.jpg",
    text: "My experience with the Antworx team is really excellent. The Red Hat Open Innovation Labs Team engaged them and I can't tell more, they are excellent, very professional and I really enjoyed working with them. I highly recommend them.",
    bg: "bg-[#F9B900]",
  },
  {
    name: "James Miller",
    company: "SkyTech",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
    text: "My experience with the Antworx team is really excellent. The Red Hat Open Innovation Labs Team engaged them and I can't tell more, they are excellent, very professional and I really enjoyed working with them. I highly recommend them.",
    bg: "bg-[#FCB8FA]",
  },
  {
    name: "Emily Davis",
    company: "Brandify",
    image: "https://randomuser.me/api/portraits/women/40.jpg",
    text: "My experience with the Antworx team is really excellent. The Red Hat Open Innovation Labs Team engaged them and I can't tell more, they are excellent, very professional and I really enjoyed working with them. I highly recommend them.",
    bg: "bg-[#0D8DFF]",
  },
  {
    name: "Raj Patel",
    company: "TechVista",
    image: "https://randomuser.me/api/portraits/men/18.jpg",
    text: "My experience with the Antworx team is really excellent. The Red Hat Open Innovation Labs Team engaged them and I can't tell more, they are excellent, very professional and I really enjoyed working with them. I highly recommend them.",
    bg: "bg-[#E16C02]",
  },
  {
    name: "Olivia Smith",
    company: "VisionWorks",
    image: "https://randomuser.me/api/portraits/women/41.jpg",
    text: "My experience with the Antworx team is really excellent. The Red Hat Open Innovation Labs Team engaged them and I can't tell more, they are excellent, very professional and I really enjoyed working with them. I highly recommend them.",
    bg: "bg-[#0ABAB5]",
  },
];

const Card = ({ text, name, company, image, bg }) => {
  return (
    <div
      className={`${bg} relative rounded-3xl text-white font-[Poppins]
                  w-full max-w-[30rem] mx-auto
                  p-6 sm:p-8 lg:p-10
                  min-h-[22rem] sm:min-h-[24rem] lg:min-h-[26rem]
                  flex flex-col justify-between shadow-lg`}
    >
      <span
        className="absolute z-10 text-orange-400 border-2 border-orange-400
                   flex justify-center items-center
                   top-4 left-4 sm:left-6 w-10 h-10 sm:w-12 sm:h-12
                   bg-white rounded-full text-2xl sm:text-3xl font-serif leading-none shadow-md"
        aria-hidden="true"
      >
        &ldquo;
      </span>

      <p className="z-10 mt-12 text-start sm:mt-14 text-base sm:text-lg lg:text-lg font-semibold leading-relaxed">
        {text}
      </p>

      <div className="mt-6 flex items-center justify-end gap-3 text-right">
        <div className="min-w-0">
          <p className="font-semibold text-white text-sm sm:text-base truncate">
            {name}
          </p>
          <p className="font-bold text-white text-base sm:text-lg lg:text-xl opacity-90 truncate">
            {company}
          </p>
        </div>
        <img
          src={image}
          alt={`${name} — ${company}`}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full shrink-0"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  );
};

const TestimonialsCarousel = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches && sliderRef.current?.slickPause) {
      sliderRef.current.slickPause();
    }
  }, []);

  const settings = {
    // 👇 Start mobile-first
    mobileFirst: true,
    dots: false,
    infinite: true,
    speed: 6000,
    slidesToShow: 3, 
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    pauseOnHover: true,
    cssEase: "linear",
    // 👇 Scale up as viewport grows (min-width style since mobileFirst: true)
    responsive: [
      { breakpoint: 440, settings: { slidesToShow: 1 } }, // ≥640px (sm)

      { breakpoint: 640, settings: { slidesToShow: 2.5 } }, // ≥640px (sm)
      { breakpoint: 1024, settings: { slidesToShow: 2 } }, // ≥1024px (lg/desktop)
    ],
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 mt-10 lg:mt-20 text-black overflow-hidden">
      <div className="mx-auto w-full ">
        <Slider ref={sliderRef} {...settings}>
          {testimonials.map((t, index) => (
            <div key={index} className="px-2 sm:px-3">
              <Card {...t} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
