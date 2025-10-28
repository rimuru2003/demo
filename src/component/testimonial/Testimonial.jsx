import React from "react";
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
    bg: "bg-[#0D8DFF]",
  },
  {
    name: "Aisha Khan",
    company: "NextGen Solutions",
    image: "https://randomuser.me/api/portraits/women/56.jpg",
    text: "My experience with the Antworx team is really excellent. The Red Hat Open Innovation Labs Team engaged them and I can't tell more, they are excellent, very professional and I really enjoyed working with them. I highly recommend them.",
    bg: "bg-[#E16C02]",
  },
  {
    name: "James Miller",
    company: "SkyTech",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
    text: "My experience with the Antworx team is really excellent. The Red Hat Open Innovation Labs Team engaged them and I can't tell more, they are excellent, very professional and I really enjoyed working with them. I highly recommend them.",
    bg: "bg-[#E61F25]",
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
    bg: "bg-[#E61F25]",
  },
];

// ✅ Card component
const Card = ({ text, name, company, image, bg }) => {
  return (
    <div
      className={`${bg} rounded-3xl p-8 text-white w-[30rem] h-[25rem] flex flex-col
         justify-between relative`}
    >
      <span
        className="absolute z-10 text-orange-400 border-2 border-orange-400
  flex justify-center items-center
  top-4 left-6 w-[45px] h-[45px] bg-white rounded-full text-3xl font-serif leading-none shadow-md"
      >
        &ldquo;
      </span>

      <p className="text-lg font-semibold text-start leading-relaxed mt-14 z-10">
        {text}
      </p>

      <div className="flex justify-end text-end space-x-3 items-center mt-6">
        <div>
          <p className="font-semibold text-white text-lg">{name}</p>
          <p className="font-bold text-white text-base opacity-90">{company}</p>
        </div>
        <img src={image} alt={name} className="w-14 h-14 rounded-full " />
      </div>
    </div>
  );
};

// ✅ Main component
const TestimonialsCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000, 
    slidesToShow: 3.5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    pauseOnHover: true, 
    cssEase: "linear", 
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="py-16 mt-20 text-black">
      <div className="w-full">
        <Slider {...settings}>
          {testimonials.map((t, index) => (
            <div key={index} className="px-3 flex justify-center">
              <Card
                text={t.text}
                name={t.name}
                company={t.company}
                image={t.image}
                bg={t.bg}
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
