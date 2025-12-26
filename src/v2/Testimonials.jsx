import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import TestimonialCard from "./TestimonialCard";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Creative Director",
    companyName: "Creative Studio",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    feedback:
      "My experience with the Antworx team is really excellent. The Red Hat Open Innovation Labs Team engaged them and I can't tell more, they are excellent, very professional and I really enjoyed working with them. I highly recommend them.",
    bg: "bg-[#0D8DFF]",
    color: "bg-[#0D8DFF]",
  },
  {
    id: 2,
    name: "Michael Lee",
    position: "CEO",
    companyName: "InnovateX",
    image: "https://randomuser.me/api/portraits/men/23.jpg",
    feedback:
      "My experience with the Antworx team is really excellent. The Red Hat Open Innovation Labs Team engaged them and I can't tell more, they are excellent, very professional and I really enjoyed working with them. I highly recommend them.",
    bg: "bg-[#E16C02]",
    color: "bg-[#E16C02]",
  },
  {
    id: 3,
    name: "Priya Mehta",
    position: "Lead Designer",
    companyName: "Design Hive",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    feedback:
      "My experience with the Antworx team is really excellent. The Red Hat Open Innovation Labs Team engaged them and I can't tell more, they are excellent, very professional and I really enjoyed working with them. I highly recommend them.",
    bg: "bg-[#E61F25]",
    color: "bg-[#E61F25]",
  },
  {
    id: 4,
    name: "David Carter",
    position: "Founder",
    companyName: "Bright Ideas",
    image: "https://randomuser.me/api/portraits/men/30.jpg",
    feedback:
      "My experience with the Antworx team is really excellent. The Red Hat Open Innovation Labs Team engaged them and I can't tell more, they are excellent, very professional and I really enjoyed working with them. I highly recommend them.",
    bg: "bg-[#0ABAB5]",
    color: "bg-[#0ABAB5]",
  },
  {
    id: 5,
    name: "Aisha Khan",
    position: "Product Manager",
    companyName: "NextGen Solutions",
    image: "https://randomuser.me/api/portraits/women/56.jpg",
    feedback:
      "My experience with the Antworx team is really excellent. The Red Hat Open Innovation Labs Team engaged them and I can't tell more, they are excellent, very professional and I really enjoyed working with them. I highly recommend them.",
    bg: "bg-[#F9B900]",
    color: "bg-[#F9B900]",
  },
  {
    id: 6,
    name: "James Miller",
    position: "CTO",
    companyName: "SkyTech",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
    feedback:
      "My experience with the Antworx team is really excellent. The Red Hat Open Innovation Labs Team engaged them and I can't tell more, they are excellent, very professional and I really enjoyed working with them. I highly recommend them.",
    bg: "bg-[#FCB8FA]",
    color: "bg-[#FCB8FA]",
  },
  {
    id: 7,
    name: "Emily Davis",
    position: "Brand Strategist",
    companyName: "Brandify",
    image: "https://randomuser.me/api/portraits/women/40.jpg",
    feedback:
      "My experience with the Antworx team is really excellent. The Red Hat Open Innovation Labs Team engaged them and I can't tell more, they are excellent, very professional and I really enjoyed working with them. I highly recommend them.",
    bg: "bg-[#0D8DFF]",
    color: "bg-[#0D8DFF]",
  },
  {
    id: 8,
    name: "Raj Patel",
    position: "VP Engineering",
    companyName: "TechVista",
    image: "https://randomuser.me/api/portraits/men/18.jpg",
    feedback:
      "My experience with the Antworx team is really excellent. The Red Hat Open Innovation Labs Team engaged them and I can't tell more, they are excellent, very professional and I really enjoyed working with them. I highly recommend them.",
    bg: "bg-[#E16C02]",
    color: "bg-[#E16C02]",
  },
  {
    id: 9,
    name: "Olivia Smith",
    position: "Design Lead",
    companyName: "VisionWorks",
    image: "https://randomuser.me/api/portraits/women/41.jpg",
    feedback:
      "My experience with the Antworx team is really excellent. The Red Hat Open Innovation Labs Team engaged them and I can't tell more, they are excellent, very professional and I really enjoyed working with them. I highly recommend them.",
    bg: "bg-[#0ABAB5]",
    color: "bg-[#0ABAB5]",
  },
];

const TestimonialSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col justify-center  h-screen items-center space-y-5">
      <p
        data-aos="fade-up"
        className="text-6xl md:text-8xl  xl:text-9xl font-bold text-center   font-Parkinsans px-10"
      >
        Reviews 
      </p>

      <div className="w-full  py-20">
        <Swiper
          modules={[Autoplay, EffectCoverflow]}
          effect="coverflow"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          spaceBetween={20}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          breakpoints={{
            0: { slidesPerView: 1.2 },
            470: { slidesPerView: 1.5 },
            650: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={item.id}>
              <TestimonialCard {...item} isActive={index === activeIndex} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialSlider;
