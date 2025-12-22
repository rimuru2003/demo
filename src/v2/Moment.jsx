import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  FaLinkedinIn,
  FaYoutube,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import { gsap } from "gsap";
import InfoMediaCard from "../component/MOT/Pop";

// Action icons
import VideoM from "../assest/videom.svg";
import ImgM from "../assest/imgM.svg";
import detailM from "../assest/detailM.svg";

// gray logos
import GlanG from "../assest/logo_gray/GlanbiaG.svg";
import AirtelG from "../assest/logo_gray/AirtelG.svg";
import AirtelBG from "../assest/logo_gray/AirtelBG.svg";
import BiraG from "../assest/logo_gray/BiraG.svg";
import DisneyG from "../assest/logo_gray/DisneyG.svg";
import HindwareG from "../assest/logo_gray/HindwareG.svg";
import TargetG from "../assest/logo_gray/TargetG.svg";
import CloudFG from "../assest/logo_gray/CloudFG.svg";

// colored logos
import Glan from "../assest/logo/glan.svg";
import Airtel from "../assest/logo/airtel.svg";
import AirtelB from "../assest/logo/AirtelB.svg";
import Bira from "../assest/logo/Bira.svg";
import Disney from "../assest/logo/Disney.svg";
import Hindware from "../assest/logo/Hindware.svg";
import Target from "../assest/logo/Target.svg";
import CloudF from "../assest/logo/CloudF.svg";

const Moment = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("details");
  const [activeCard, setActiveCard] = useState(null);

  const cards = [
    {
      id: 1,
      brand: "Glanbia",
      color: "#E61F25",
      border: "#E61F25",
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
      color: "#F9B900",
      border: "#F9B900",
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
      color: "#0ABAB5",
      border: "##0ABAB5",
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
      color: "#E63364",
      border: "#E63364",
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
      color: "#8ABF3C",
      border: "#8ABF3C",
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
      color: "#008080",
      border: "#008080",
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
      color: "#005BA9",
      border: "#005BA9",
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
      color: "#E16C02",
      border: "#E16C02",
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
  const circleData = {
    left: [
      {
        bgColor: "bg-[#E61F25]",
        grayLogo: GlanG,
        coloredLogo: Glan,
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
        bgColor: "bg-[#F9B900]",
        grayLogo: AirtelG,
        coloredLogo: Airtel,
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
        bgColor: "bg-[#0ABAB5]",
        grayLogo: BiraG,
        coloredLogo: Bira,
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
        bgColor: "bg-[#E63364]",
        grayLogo: DisneyG,
        coloredLogo: Disney,
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
    ],
    right: [
      {
        bgColor: "bg-[#008080]",
        grayLogo: HindwareG,
        coloredLogo: Hindware,
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
        bgColor: "bg-[#005BA9]",
        grayLogo: TargetG,
        coloredLogo: Target,
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
        bgColor: "bg-[#8ABF3C]",
        grayLogo: AirtelBG,
        coloredLogo: AirtelB,
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
        bgColor: "bg-[#E16C02]",
        grayLogo: CloudFG,
        coloredLogo: CloudF,
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
    ],
  };

  const ActionButtons = ({ position, bgColor, isVisible, card }) => {
    const buttonsRef = useRef(null);

    useEffect(() => {
      if (isVisible) {
        gsap.fromTo(
          buttonsRef.current,
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" }
        );
      }
    }, [isVisible]);

    return (
      <div
        ref={buttonsRef}
        className={`absolute ${
          position === "left"
            ? "right-full top-2/4 -mr-8"
            : "left-full top-1/4 -ml-8"
        } ${bgColor} w-40 p-3 -rotate-12 space-x-5
        rounded-lg flex justify-evenly border-2 border-white items-center z-10`}
      >
        <button onClick={() => onOpen(card, "details")} className="btn-box">
          {" "}
          <img
            src={detailM}
            alt=""
            className="cursor-pointer hover:scale-110 transition-transform"
          />
        </button>
        <button onClick={() => onOpen(card, "images")} className="btn-box">
          {" "}
          <img
            src={ImgM}
            alt=""
            className="cursor-pointer hover:scale-110 transition-transform"
          />
        </button>
        <button onClick={() => onOpen(card, "videos")} className="btn-box">
          {" "}
          <img
            src={VideoM}
            alt=""
            className="cursor-pointer hover:scale-110 transition-transform"
          />
        </button>
      </div>
    );
  };

  const CircleWithActions = ({ circle, position, index }) => {
    const isHovered = hoveredIndex === index;

    return (
      <div
        className="relative"
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <div
          className={`h-64 w-64 ${
            isHovered ? circle.bgColor : ""
          } rounded-full cursor-pointer flex border-2 border-[#E4E4E4]
            items-center justify-center overflow-hidden`}
        >
          <img
            src={isHovered ? circle.coloredLogo : circle.grayLogo}
            alt=""
            className="w-32 h-32 -rotate-12 object-contain"
          />
        </div>
        {isHovered && (
          <ActionButtons
            position={position}
            bgColor={circle.bgColor}
            isVisible={isHovered}
            card={circle}
          />
        )}
      </div>
    );
  };

  return (
    <>
      <div className="flex h-screen relative overflow-hidden isolate">
        <div className="w-[30%] h-full flex flex-col relative -left-28 rotate-12 justify-center items-center">
          <CircleWithActions
            circle={circleData.left[0]}
            position="right"
            index="left-0"
          />
          <div className="flex -mt-8">
            <CircleWithActions
              circle={circleData.left[1]}
              position="right"
              index="left-1"
            />
            <CircleWithActions
              circle={circleData.left[2]}
              position="right"
              index="left-2"
            />
          </div>
          <div className="-mt-8">
            <CircleWithActions
              circle={circleData.left[3]}
              position="right"
              index="left-3"
            />
          </div>
        </div>

        <div className="flex flex-col w-[40%] justify-center items-center space-y-3 xl:space-y-10">
          <div className="text-4xl text-center xsm:text-5xl sm:text-6xl md:text-7xl xxl:text-[7rem] font-extrabold text-[#1A1A1A]">
            <p>Moments of</p>
            <p>Truth</p>
          </div>

          <div className="flex gap-2 xl:gap-8 text-xl xl:text-4xl text-white">
            <FaLinkedinIn className="bg-[#FA4616] p-1 rounded-lg" />
            <FaYoutube className="bg-[#E16C02] p-1 rounded-lg" />
            <FaFacebookF className="bg-[#E63364] p-1 rounded-lg" />
            <FaInstagram className="bg-[#0ABAB5] p-1 rounded-lg" />
          </div>
          <div className="flex justify-center items-center space-x-2">
            <span className="bg-red-500 h-4 w-4"></span>
            <p className="font-semibold">MOVE YOUR MOUSE TO SEE OUR WORKS</p>
          </div>
        </div>

        <div className="w-[30%] h-full flex relative -right-28 flex-col rotate-12 justify-center items-center">
          <CircleWithActions
            circle={circleData.right[0]}
            position="left"
            index="right-0"
          />
          <div className="flex -mt-8">
            <CircleWithActions
              circle={circleData.right[1]}
              position="left"
              index="right-1"
            />
            <CircleWithActions
              circle={circleData.right[2]}
              position="left"
              index="right-2"
            />
          </div>
          <div className="-mt-8">
            <CircleWithActions
              circle={circleData.right[3]}
              position="left"
              index="right-3"
            />
          </div>
        </div>
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

export default Moment;
