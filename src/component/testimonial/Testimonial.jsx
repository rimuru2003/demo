import React from "react";
import Slider from "react-slick";
import { FaStar, FaRegStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "Creative Studio",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "Working with them was a game-changer! The design and user experience exceeded my expectations — truly professional and creative.",
    rating: 5,
  },
  {
    name: "Michael Lee",
    company: "InnovateX",
    image: "https://randomuser.me/api/portraits/men/23.jpg",
    text: "Amazing collaboration! Their attention to detail and innovative approach really impressed our entire team.",
    rating: 4,
  },
  {
    name: "Priya Mehta",
    company: "Design Hive",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    text: "Loved the smooth process and great results. They understood our brand and vision perfectly!",
    rating: 5,
  },
  {
    name: "David Carter",
    company: "Bright Ideas",
    image: "https://randomuser.me/api/portraits/men/30.jpg",
    text: "Professional, prompt, and creative — a true pleasure to work with.",
    rating: 4,
  },
  {
    name: "Aisha Khan",
    company: "NextGen Solutions",
    image: "https://randomuser.me/api/portraits/women/56.jpg",
    text: "The best UI/UX experience we’ve had so far. Highly recommend their expertise!",
    rating: 5,
  },
  {
    name: "James Miller",
    company: "SkyTech",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
    text: "Their work brought our ideas to life beautifully. Efficient and talented team.",
    rating: 5,
  },
  {
    name: "Emily Davis",
    company: "Brandify",
    image: "https://randomuser.me/api/portraits/women/40.jpg",
    text: "Absolutely loved their modern design sense and quick turnaround time!",
    rating: 4,
  },
  {
    name: "Raj Patel",
    company: "TechVista",
    image: "https://randomuser.me/api/portraits/men/18.jpg",
    text: "Exceeded expectations with great communication and a fantastic final product.",
    rating: 5,
  },
  {
    name: "Olivia Smith",
    company: "VisionWorks",
    image: "https://randomuser.me/api/portraits/women/41.jpg",
    text: "Smooth project from start to finish — creative team with a great eye for design.",
    rating: 4,
  },
];

const TestimonialsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    className: "center",

    slidesToShow: 4.5,
    arrows: false,

    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   arrows: false,
  //   autoplay: true,
  //   autoplaySpeed: 0, // continuous
  //   speed: 5000, // slow transition
  //   cssEase: "linear", // key for smooth motion
  //   slidesToShow: 4.5,
  //   slidesToScroll: 1,
  //   pauseOnHover: false,
  //   responsive: [
  //     { breakpoint: 1024, settings: { slidesToShow: 2 } },
  //     { breakpoint: 640, settings: { slidesToShow: 1 } },
  //   ],
  // };
  return (
    <section className="bg-[#007b7f] py-16 text-white h-screen">
      <div className="text-center m-16">
        <h2 className=" font-bold text-8xl">Customer </h2>
        <h2 className="text-8xl font-bold mb-4"> Experience</h2>
        <p className="uppercase font-semibold tracking-wide text-base text-gray-200">
          Discover real-world success stories from our happy clients! <br />
          Join others in experiencing remarkable transformations firsthand.
        </p>
      </div>

      <div className="w-full ">
        <Slider {...settings}>
          {testimonials.map((t, index) => (
            <div key={index} className="px-3">
              <div className="bg-white/10 backdrop-blur-3xl border border-white/30 rounded-3xl h-[20rem] w-[23rem] p-5 shadow-xl shadow-white/10">
                <div className="h-[80%]">
                  <div className="flex items-center mb-4">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-12 h-12 rounded-full border-2 border-white/40 mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-white">{t.name}</h4>
                      <p className="text-sm text-gray-300">{t.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-200 text-xl text-start font-medium mb-4">
                    “{t.text}”
                  </p>
                </div>

                <div className="flex text-xl">
                  {[...Array(5)].map((_, i) =>
                    i < t.rating ? (
                      <FaStar key={i} className="text-gray-400 mr-1" />
                    ) : (
                      <FaRegStar key={i} className="text-gray-200 mr-1" />
                    )
                  )}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
