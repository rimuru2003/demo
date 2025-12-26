import React from "react";
import { FaLinkedinIn, FaTiktok, FaInstagram, FaYoutube } from "react-icons/fa";
import Image from "../../assest/logo.svg";

const Footer = () => {
  return (
    <div className="bg-[#FAF6F0] px-2 md:px-4 py-16 mt-20 flex flex-col space-y-4 h-[50vh]">
      {/* Top Section - Menu + Socials */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Menu */}
        <div className="flex  justify-center md:justify-start gap-2  md:gap-3">
          {["Expertises", "Work", "About", "Contact"].map((item) => (
            <button
              key={item}
              className="px-2 py-2 hover:bg-black hover:text-white transition  
              rounded-2xl text-base  font-semibold  "
            >
              {item}
            </button>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4 sm:space-x-2 flex-col sm:flex-row justify-center items-center ">
          <p className="font-semibold text-lg mb-2">Follow us</p>
          <div className="flex gap-5 md:gap-3">
            {[FaLinkedinIn, FaTiktok, FaInstagram, FaYoutube].map(
              (Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-12 h-12 text-xl border rounded-full flex items-center 
                  justify-center
                   hover:bg-black hover:text-white transition"
                >
                  <Icon />
                </a>
              )
            )}
          </div>
        </div>
      </div>
      <div>
        <div className="h-[2px] mx-auto w-full bg-[#E61F25]"></div>
      </div>
      <div className="flex flex-col-reverse xl:flex-row pb-4 justify-between  items-end  gap-10">
        <img
          src={Image}
          alt="Engage Logo"
          className="xl:w-[70%] w-full grayscale hover:grayscale-0 transition-all duration-150 ease-linear "
        />

        <div className="text-end space-y-4">
          <div className="flex flex-col ">
            <p className="font-bold text-2xl  mb-1">Contact</p>
            <p className="font-medium text-lg">antworxengage.com</p>
            <p className="font-mfont-medium text-lg">+91 987654321</p>
          </div>

          {/* Address */}
          <div className="flex flex-col ">
            <p className="font-bold text-2xl mb-1">Address</p>
            <p className="font-medium text-lg">
              B-1, 4th Floor, Greater Kailash Enclave II
            </p>
            <p className="font-medium text-lg">
              Greater Kailash, New Delhi, Delhi 110048
            </p>
            <p className=" font-medium text-base mt-2">
              engageantworx@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
