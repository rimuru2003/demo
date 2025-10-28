import React, { useRef, useEffect } from "react";
import {
  FaLinkedinIn,
  FaYoutube,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { MdOutlineImage } from "react-icons/md";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import yelloStar from "../../assest/yellowStar.svg";
import neoCurve from "../../assest/neoCurve.svg";
gsap.registerPlugin(ScrollTrigger);

const Moments = () => {
  const containerRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const sectionRef = useRef(null);

  const cards = [
    {
      id: 1,
      brand: "Glanbia",
      color: "#FA5424",
      border: "#FA5424",
      img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80",
      logo: "GLan",
    },
    {
      id: 2,
      brand: "Airtel",
      color: "#0D8DFF",
      border: "#0D8DFF",
      img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&w=600&q=80",
      logo: "Airtel",
    },
    {
      id: 3,
      brand: "Glanbia",
      color: "#F9B900",
      border: "#F9B900",
      img: "https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=600&q=80",
      logo: "GLan",
    },
    {
      id: 4,
      brand: "Airtel",
      color: "#0ABAB5",
      border: "#0ABAB5",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
      logo: "Airtel",
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const scrollContainer = scrollContainerRef.current;

    if (!section || !scrollContainer) return;

    const scrollHeight =
      scrollContainer.scrollHeight - scrollContainer.clientHeight;

    const mainTrigger = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: `+=${scrollHeight}`,
      pin: true,
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        gsap.to(scrollContainer, {
          scrollTop: progress * scrollHeight,
          duration: 0.1,
          ease: "none",
        });
      },
    });

    // Animate cards on scroll with fade in/out
    const cards = scrollContainer.querySelectorAll(".card-item");
    cards.forEach((card, index) => {
      ScrollTrigger.create({
        trigger: card,
        start: "top bottom",
        end: "bottom top",
        scroller: scrollContainer,
        onEnter: () =>
          gsap.to(card, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          }),
        onLeave: () =>
          gsap.to(card, {
            opacity: 0,
            y: -100,
            duration: 0.6,
            ease: "power2.in",
          }),
        onEnterBack: () =>
          gsap.to(card, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          }),
        onLeaveBack: () =>
          gsap.to(card, {
            opacity: 0,
            y: 100,
            duration: 0.6,
            ease: "power2.in",
          }),
      });
      gsap.set(card, { opacity: 0, y: 100 });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const Card = ({ card }) => (
    <div
      className="card-item relative w-[23rem] h-[35rem] rounded-3xl justify-center flex overflow-hidden "
      style={{ border: `8px solid ${card.border}` }}
    >
      <img
        src={card.img}
        alt={card.brand}
        className="w-full h-full object-cover"
      />
      <div
        className="absolute bottom-0 mx-auto w-[95%] m-2 h-[30%]
         flex flex-col justify-center  rounded-3xl"
        style={{ backgroundColor: card.color }}
      >
        <div className="flex items-center  justify-around">
          <div className="flex flex-col  text-white font-bold">
            <span className="text-2xl">{card.logo}</span>
          </div>

          <div className="flex gap-2">
            <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center text-white">
              <HiOutlineClipboardDocumentList size={18} />
            </div>
            <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center text-white">
              <MdOutlineImage size={18} />
            </div>
            <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center text-white">
              <FaInfoCircle size={16} />
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
        <div className="relative w-full h-full mt-16 justify-evenly flex px-20 pt-32 pb-28">
          <div
            className="absolute -left-[5%] top-[70%]  -translate-y-1/2 
         rounded-full rotate-0"
          >
            <img src={yelloStar} alt="" />
          </div>
          <div
            className="absolute -right-[3%] top-[5%]   -translate-y-1/2 
         rounded-full rotate-0"
          >
            <img src={neoCurve} alt="" />
          </div>

          <div className="w-[35%] flex flex-col justify-start items-start space-y-10 relative">
            <div className="text-[6rem] text-start  font-bold font-[Inter] leading-tight text-[#1A1A1A]">
              <p>Moments</p>
              <p>of Truth</p>
            </div>

            <div className="flex gap-8 text-4xl text-white">
              <FaLinkedinIn className="bg-[#FA4616] p-1 rounded-lg" />
              <FaYoutube className="bg-[#E16C02] p-1 rounded-lg" />
              <FaFacebookF className="bg-[#E63364] p-1 rounded-lg" />
              <FaInstagram className="bg-[#0ABAB5] p-1 rounded-lg" />
            </div>
          </div>

          <div
            ref={scrollContainerRef}
            className="w-[65%] h-full  z-30 flex flex-col overflow-y-scroll"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div className="flex justify-center gap-12 w-full ">
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

            <div className="flex justify-center gap-12 w-full ">
              <div className="flex flex-col gap-y-36">
                {cards
                  .filter((_, i) => i % 2 === 0)
                  .map((card) => (
                    <Card key={`${card.id}-2`} card={card} />
                  ))}
              </div>
              <div className="flex flex-col gap-y-36 mt-32">
                {cards
                  .filter((_, i) => i % 2 !== 0)
                  .map((card) => (
                    <Card key={`${card.id}-2`} card={card} />
                  ))}
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .w-\[65\%\]::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </>
  );
};

export default Moments;
