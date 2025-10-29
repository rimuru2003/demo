import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { FiSend } from "react-icons/fi";

const Contact = () => {
  const formRef = useRef(null);

  useEffect(() => {
    // Animate form appearance
    gsap.fromTo(
      formRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="h-[100vh] bg-[#8ABF3C]  flex justify-center items-center xl:px-6 ">
      <div ref={formRef} className="w-full max-w-2xl  xl:p-10 ">
        <h1 className="xl:text-[3rem] text-4xl text-start font-bold text-white ">
          Let’s Engage
        </h1>
        <p className="mb-10 text-start text-white">
          Engaging Naturally, Get A Great Experience
        </p>

        <form className="space-y-3 text-start">
          {/* Full Name */}
          <div>
            <label className="block font-semibold mb-2 text-white">
              First Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              //   placeholder="Wie ben je?"
              className="w-full border border-[#d8d8d8] rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#ff6b6b] bg-white"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-semibold mb-2 text-white">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              //   placeholder="Hoe kunnen we je bereiken?"
              className="w-full border border-[#d8d8d8] rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#ff6b6b] bg-white"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block font-semibold mb-2 text-white">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              //   placeholder="Je telefoonnummer (optioneel)"
              className="w-full border border-[#d8d8d8] rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#ff6b6b] bg-white"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block font-semibold mb-2 text-white">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              //   placeholder="Vertel ons wat je zoekt (of gewoon iets leuks)."
              className="w-full border border-[#d8d8d8] rounded-md p-3 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#ff6b6b] bg-white"
            ></textarea>
          </div>

          {/* Placeholder CAPTCHA */}
          <div className="xl:w-[40%] w-[60%] border rounded-lg flex items-center justify-between px-4 py-3 bg-[#f9f9f9] shadow-sm">
            <div className="flex items-center gap-3">
              <input type="checkbox" className="w-5 h-5 accent-[#ff6b6b]" />
              <p className="text-sm text-[#111]">I'm not a robot</p>
            </div>

            <div className="flex flex-col items-center justify-center text-gray-500 text-[10px] leading-tight">
              <p className="font-semibold">reCAPTCHA</p>
              <p>Privacy • Terms</p>
            </div>
          </div>

          {/* Button + Phone */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="submit"
              className="flex items-center gap-2 bg-[#ff6b6b] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#ff4a4a] transition-all duration-300"
            >
              <FiSend /> SEND YOUR MESSAGE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;