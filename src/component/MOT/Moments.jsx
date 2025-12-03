import React, { useRef, useState, useCallback } from "react";
import {
  FaLinkedinIn,
  FaYoutube,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import InfoMediaCard from "./Pop.jsx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// BG elements
import yelloStar from "../../assest/yellowStar.svg";
import neoCurve from "../../assest/neoCurve.svg";

// Action icons
import VideoM from "../../assest/videom.svg";
import ImgM from "../../assest/imgM.svg";
import detailM from "../../assest/detailM.svg";

// gray logos
import GlanG from "../../assest/logo_gray/GlanbiaG.svg";
import AirtelG from "../../assest/logo_gray/AirtelG.svg";
import AirtelBG from "../../assest/logo_gray/AirtelBG.svg";
import BiraG from "../../assest/logo_gray/BiraG.svg";
import DisneyG from "../../assest/logo_gray/DisneyG.svg";
import HindwareG from "../../assest/logo_gray/HindwareG.svg";
import TargetG from "../../assest/logo_gray/TargetG.svg";
import CloudFG from "../../assest/logo_gray/CloudFG.svg";

// colored logos
import Glan from "../../assest/logo/glan.svg";
import Airtel from "../../assest/logo/airtel.svg";
import AirtelB from "../../assest/logo/AirtelB.svg";
import Bira from "../../assest/logo/Bira.svg";
import Disney from "../../assest/logo/Disney.svg";
import Hindware from "../../assest/logo/Hindware.svg";
import Target from "../../assest/logo/Target.svg";
import CloudF from "../../assest/logo/CloudF.svg";

const Moments = () => {
  gsap.registerPlugin(useGSAP);
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

  // gsap

  // ALL DATA
  const cards = [
    {
      id: 1,
      brand: "Glanbia",
      color: "#FA5424",
      border: "#FA5424",
      gray_logo: GlanG,
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
      gray_logo: AirtelG,
      logo: Airtel,
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
      id: 3,
      brand: "Bira",
      color: "#FA5424",
      border: "#FA5424",
      gray_logo: BiraG,
      logo: Bira,
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
      id: 4,
      brand: "Disney",
      color: "#0D8DFF",
      border: "#0D8DFF",
      gray_logo: DisneyG,
      logo: Disney,
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
      id: 5,
      brand: "AirtelB",
      color: "#FA5424",
      border: "#FA5424",
      gray_logo: AirtelBG,
      logo: AirtelB,
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
      id: 6,
      brand: "Hindware",
      color: "#0D8DFF",
      border: "#0D8DFF",
      gray_logo: HindwareG,
      logo: Hindware,
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
      id: 7,
      brand: "Target",
      color: "#FA5424",
      border: "#FA5424",
      gray_logo: TargetG,
      logo: Target,
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
      id: 8,
      brand: "CloudF",
      color: "#0D8DFF",
      border: "#0D8DFF",
      gray_logo: CloudFG,
      logo: CloudF,
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
  ];

  // CARD COMPONENT
  const Card = ({ card }) => {
    const [hover, setHover] = useState(false);
    const btnRef = useRef(null);

    useGSAP(
      () => {
        if (!hover) return;
        gsap.fromTo(
          btnRef.current.children,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out",
          }
        );
      },
      { dependencies: [hover] }
    );

    return (
      <div
        className="relative w-[20rem] md:w-[22rem] bg-[#FAF4EC] h-[12rem] rounded-3xl
        flex border-[3px] border-solid border-[#E2E2E2]
        items-center justify-around px-4 transition-all duration-300 cursor-pointer"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          backgroundColor: hover ? card.color : "#FAF4EC",
          borderColor: hover ? card.border : "#E2E2E2",
        }}
      >
        <div className="flex flex-col items-end w-[60%]">
          <img
            src={hover ? card.logo : card.gray_logo}
            alt={card.brand}
            className="w-28 h-28 transition-all duration-300"
          />
        </div>

        <div
          ref={btnRef}
          className="flex flex-col items-center justify-center gap-5"
        >
          <button onClick={() => onOpen(card, "details")} className="btn-box">
            <img src={detailM} className="w-8 h-8" />
          </button>
          <button onClick={() => onOpen(card, "videos")} className="btn-box">
            <img src={VideoM} className="w-8 h-8" />
          </button>
          <button onClick={() => onOpen(card, "images")} className="btn-box">
            <img src={ImgM} className="w-8 h-8" />
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        <div className="relative w-full h-full flex flex-col md:flex-row justify-evenly px-4 md:px-20">
          {/* BG elements */}
          <img
            src={yelloStar}
            className="hidden md:block absolute -left-[5%] top-[70%]"
          />
          <img
            src={neoCurve}
            className="hidden md:block absolute -right-[3%] top-[5%]"
          />

          {/* LEFT SECTION */}
          <div className="w-full md:w-[35%] flex flex-col justify-start items-start space-y-10">
            <div className="text-5xl md:text-[7rem] font-bold text-[#1A1A1A]">
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
          <div className="w-[55%] h-full z-30">
            <div className="w-full flex flex-col gap-y-6 ">
              {cards
                .reduce((rows, _, i) => {
                  if (i % 2 === 0) rows.push(cards.slice(i, i + 2));
                  return rows;
                }, [])
                .map((row, index) => (
                  <div
                    key={index}
                    className={`flex gap-12 w-full ${
                      index % 2 === 0 ? "justify-start" : "justify-end"
                    }`}
                  >
                    {row.map((card) => (
                      <Card key={card.id} card={card} />
                    ))}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* POPUP */}
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
