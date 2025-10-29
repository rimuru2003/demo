import React, { useRef, useEffect, useState, useCallback } from "react";
import {
  FaLinkedinIn,
  FaYoutube,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import { gsap } from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import yelloStar from "../../assest/yellowStar.svg";
import neoCurve from "../../assest/neoCurve.svg";
import InfoMediaCard from "./Pop.jsx";
import VideoM from "../../assest/videom.svg";
import ImgM from "../../assest/imgM.svg";
import detailM from "../../assest/detailM.svg";
import Glan from "../../assest/glan.svg";
import Airtel from "../../assest/airtel.svg";

gsap.registerPlugin(ScrollTrigger);

const Moments = () => {
  const scrollContainerRef = useRef(null);
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Popup state
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("details");
  const [activeCard, setActiveCard] = useState(null);

  const onOpen = useCallback((card, tab) => {
    setActiveCard(card);
    setActiveTab(tab);
    setOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const onClose = useCallback(() => {
    setOpen(false);
    setActiveCard(null);
    document.body.style.overflow = "";
  }, []);

  // Check screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Data (8 cards)
  const cards = [
    {
      id: 1,
      brand: "Glanbia",
      color: "#FA5424",
      border: "#FA5424",
      img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
      logo: Glan,
      details: [
        "Our genesis has evolved from Antworx, where we, like Ants in an colony, ensure methodical delivery of solutions, impacting every function and person, with auditable ROI outcomes.",
        "Our genesis has evolved from Antworx, where we, like Ants in an colony, ensure methodical delivery of solutions, impacting every function and person, with auditable ROI outcomes.",
        "It helped us design and develop people-centric and engagement oriented experiences, that is sure to empower enterprise-wide change.",
      ],
      images: [
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1200&auto=format&fit=crop",
      ],
      videos: ["https://www.w3schools.com/html/mov_bbb.mp4"],
    },
    {
      id: 2,
      brand: "Airtel",
      color: "#0D8DFF",
      border: "#0D8DFF",
      img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&w=1200&q=80",
      logo: Airtel,
      details: [
        "Our genesis has evolved from Antworx, where we, like Ants in an colony, ensure methodical delivery of solutions, impacting every function and person, with auditable ROI outcomes.",
      ],
      images: [
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200&auto=format&fit=crop",
      ],
      videos: ["https://www.w3schools.com/html/mov_bbb.mp4"],
    },
    {
      id: 3,
      brand: "Glanbia",
      color: "#F9B900",
      border: "#F9B900",
      img: "https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=1200&q=80",
      logo: Glan,
      details: ["Our genesis has evolved from Antworx."],
      images: [
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200&auto=format&fit=crop",
      ],
      videos: ["https://www.w3schools.com/html/mov_bbb.mp4"],
    },
    {
      id: 4,
      brand: "Airtel",
      color: "#0ABAB5",
      border: "#0ABAB5",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
      logo: Airtel,
      details: ["Our genesis has evolved from Antworx."],
      images: [
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200&auto=format&fit=crop",
      ],
      videos: ["https://www.w3schools.com/html/mov_bbb.mp4"],
    },
    {
      id: 5,
      brand: "Glanbia",
      color: "#FA5424",
      border: "#FA5424",
      img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
      logo: Glan,
      details: ["Our genesis has evolved from Antworx."],
      images: [
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200&auto=format&fit=crop",
      ],
      videos: ["https://www.w3schools.com/html/mov_bbb.mp4"],
    },
    {
      id: 6,
      brand: "Airtel",
      color: "#0D8DFF",
      border: "#0D8DFF",
      img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&w=1200&q=80",
      logo: Airtel,
      details: ["Our genesis has evolved from Antworx."],
      images: [
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200&auto=format&fit=crop",
      ],
      videos: ["https://www.w3schools.com/html/mov_bbb.mp4"],
    },
    {
      id: 7,
      brand: "Glanbia",
      color: "#F9B900",
      border: "#F9B900",
      img: "https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=1200&q=80",
      logo: Glan,
      details: ["Our genesis has evolved from Antworx."],
      images: [
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200&auto=format&fit=crop",
      ],
      videos: ["https://www.w3schools.com/html/mov_bbb.mp4"],
    },
    {
      id: 8,
      brand: "Airtel",
      color: "#0ABAB5",
      border: "#0ABAB5",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
      logo: Airtel,
      details: ["Our genesis has evolved from Antworx."],
      images: [
        "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200&auto=format&fit=crop",
      ],
      videos: ["https://www.w3schools.com/html/mov_bbb.mp4"],
    },
  ];

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const section = sectionRef.current;
      const scroller = scrollContainerRef.current;
      if (!section || !scroller) return;

      const updateScroll = () => {
        const scrollHeight = scroller.scrollHeight - scroller.clientHeight;

        const mainTrigger = ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: `+=${scrollHeight}`,
          pin: true,
          scrub: 1,
          onUpdate: (self) => {
            gsap.to(scroller, {
              scrollTop: self.progress * scrollHeight,
              duration: 0.1,
              ease: "none",
            });
          },
        });

        // Card animations
        const cardEls = scroller.querySelectorAll(".card-item");
        cardEls.forEach((el) => {
          gsap.set(el, { opacity: 0, y: 100 });
          ScrollTrigger.create({
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scroller, 
            onEnter: () =>
              gsap.to(el, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out",
              }),
            onLeave: () =>
              gsap.to(el, {
                opacity: 0,
                y: -100,
                duration: 0.6,
                ease: "power2.in",
              }),
            onEnterBack: () =>
              gsap.to(el, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out",
              }),
            onLeaveBack: () =>
              gsap.to(el, {
                opacity: 0,
                y: 100,
                duration: 0.6,
                ease: "power2.in",
              }),
          });
        });

        return () => {
          // Kill only the triggers created in this scope
          ScrollTrigger.getAll().forEach((t) => t.kill());
        };
      };

      const cleanup = updateScroll();
      return () => {
        if (cleanup) cleanup();
      };
    });

    return () => mm.revert();
  }, []);

  // Card Component
  const Card = ({ card }) => (
    <div
      className="card-item relative w-[20rem] md:w-[23rem] h-[28rem] md:h-[32rem] rounded-3xl 
      justify-center
       flex overflow-hidden"
      style={{ border: `8px solid ${card.border}` }}
    >
      <img
        src={card.img}
        alt={card.brand}
        className="w-full h-full object-cover"
      />
      <div
        className="absolute bottom-0 mx-auto w-[95%] m-2 h-[30%] flex flex-col justify-center rounded-3xl"
        style={{ backgroundColor: card.color }}
      >
        <div className="flex items-center justify-around">
          <div className="flex flex-col text-white font-bold">
            <img className="text-2xl" src={card.logo} alt="" />
          </div>
          <div className="relative w-20 rotate-12 h-40">
            <div
              className="absolute inset-0 bg-gradient-to-br"
              style={{
                clipPath: "ellipse(60% 50% at 0% 50%)",
                borderTopRightRadius: "100px",
                borderBottomRightRadius: "100px",
              }}
            />
            <div className="absolute inset-0 ml-12 flex flex-col items-center justify-center gap-3 z-10">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onOpen(card, "details");
                }}
                className="md:w-10 md:h-10 h-8 w-8 rounded-full border border-white flex items-center 
                justify-center text-white bg-white/20 transition hover:bg-white/30"
                aria-label="Open details"
                title="Details"
              >
                <img src={detailM} alt="" className="p-2" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onOpen(card, "images");
                }}
                className="md:w-10 md:h-10 h-8 w-8  rounded-full border mr-6 border-white flex items-center 
                justify-center text-white bg-white/20 transition hover:bg-white/30"
                aria-label="Open images"
                title="Images"
              >
                <img src={ImgM} alt="" className="p-2" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onOpen(card, "videos");
                }}
                className="md:w-10 md:h-10 h-8 w-8  rounded-full border mr-24 border-white flex items-center justify-center
              text-white bg-white/20 transition hover:bg-white/30"
                aria-label="Open videos"
                title="Videos"
              >
                <img src={VideoM} alt="" className="p-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div
        ref={sectionRef}
        className="relative w-full h-screen overflow-hidden"
      >
        <div className="relative w-full h-full mt-8 md:mt-16 flex flex-col md:flex-row justify-evenly px-4 md:px-20 pt-16 md:pt-32 pb-14 md:pb-28">
          <div className="hidden md:block absolute -left-[5%] top-[70%] -translate-y-1/2 rounded-full">
            <img src={yelloStar} alt="" />
          </div>
          <div className="hidden md:block absolute -right-[3%] top-[5%] -translate-y-1/2 rounded-full">
            <img src={neoCurve} alt="" />
          </div>

          {/* Left heading */}
          <div className="w-full md:w-[35%] flex flex-col justify-start items-start space-y-6 md:space-y-10 relative mb-8 md:mb-0">
            <div className="text-5xl md:text-[6rem] text-start font-bold font-[Inter] leading-tight text-[#1A1A1A]">
              <p>Moments</p>
              <p>of Truth</p>
            </div>

            <div className="flex gap-4 md:gap-8 text-2xl md:text-4xl text-white">
              <FaLinkedinIn className="bg-[#FA4616] p-1 rounded-lg" />
              <FaYoutube className="bg-[#E16C02] p-1 rounded-lg" />
              <FaFacebookF className="bg-[#E63364] p-1 rounded-lg" />
              <FaInstagram className="bg-[#0ABAB5] p-1 rounded-lg" />
            </div>
          </div>

          {/* Desktop: Right scroll columns */}
          {!isMobile && (
            <div
              ref={scrollContainerRef}
              className="w-[65%] h-full z-30 flex flex-col overflow-y-scroll"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <div className="flex justify-center gap-12 w-full">
                <div className="flex flex-col gap-y-36">
                  {cards
                    .filter((_, i) => i % 2 === 0)
                    .map((card) => (
                      <Card key={card.id} card={card} />
                    ))}
                </div>

                <div className="flex flex-col gap-y-36 mt-32">
                  {cards
                    .filter((_, i) => i % 2 !== 0)
                    .map((card) => (
                      <Card key={card.id} card={card} />
                    ))}
                </div>
              </div>

              <div className="flex justify-center gap-12 w-full">
                <div className="flex flex-col gap-y-36">
                  {cards
                    .filter((_, i) => i % 2 === 0)
                    .map((card) => (
                      <Card key={`${card.id}-dupe`} card={card} />
                    ))}
                </div>
                <div className="flex flex-col gap-y-36 mt-32">
                  {cards
                    .filter((_, i) => i % 2 !== 0)
                    .map((card) => (
                      <Card key={`${card.id}-dupe`} card={card} />
                    ))}
                </div>
              </div>
            </div>
          )}

          {/* Mobile: Swiper Carousel */}
          {isMobile && (
            <div className="w-full flex justify-center">
              <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="w-[90%] max-w-[400px]"
                cardsEffect={{ slideShadows: false }} 
              >
                {cards.map((card) => (
                  <SwiperSlide key={card.id}>
                    <Card card={card} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
        </div>

        <style jsx>{`
          .w-\[65\%\]::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>

      <InfoMediaCard
        open={open}
        onClose={onClose}
        card={activeCard}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
    </>
  );
};

export default Moments;
