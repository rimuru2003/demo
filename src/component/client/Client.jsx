import React from "react";
import Logo2 from "../../assest/logo2.svg";
import Logo3 from "../../assest/logo3.svg";
import Logo4 from "../../assest/logo4.svg";
import Logo5 from "../../assest/logo5.svg";
import Logo6 from "../../assest/logo6.svg";
import Logo7 from "../../assest/logo7.svg";
import Logo8 from "../../assest/logo8.svg";
import Logo9 from "../../assest/logo9.svg";
import Insta from "../../assest/insta.svg";
import Face from "../../assest/face.svg";
import Youtube from "../../assest/youtube.svg";
import X from "../../assest/x.svg";
import Link from "../../assest/link.svg";

export default function Client() {
  const logos = [Logo2, Logo3, Logo4, Logo5, Logo6, Logo7, Logo8, Logo9];
  const company = [Link, Youtube, Insta, Face, X];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#F9B900]">
      <div className="pointer-events-none absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_1px)] [background-size:48px_48px]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-y-14 px-5 pb-20 pt-28 sm:px-6 lg:px-8">
        <div className="mb-12 text-center text-4xl font-extrabold leading-tight text-white sm:text-8xl">
          Moments of Truth
        </div>

        {/* Client Logos */}
        <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="group flex h-[10rem] items-center justify-center rounded-2xl border
               border-white/20 bg-amber-50/80 shadow-[0_6px_20px_rgba(0,0,0,0.08)] 
               transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(0,0,0,0.14)]"
            >
              <img
                src={logo}
                alt={`Client Logo ${i + 1}`}
                className="w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>

        {/* Social Row */}
        <div className="mt-12 flex items-center gap-14 text-white/90">
          {company.map((s, idx) => (
            <a
              key={idx}
              href="#"
              aria-label={`social-${idx}`}
              className="flex  items-center  justify-center  "
            >
              <img src={s} alt={`social-icon-${idx}`} className="h-10 w-10" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
