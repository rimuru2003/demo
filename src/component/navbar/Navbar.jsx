import React from "react";
import Image from "../../assest/logo.svg";

const Navbar = () => {
  const navs = ["HOME", "ABOUT US", "SERVICES", "CLIENT", "CONTACT US"];

  return (
    <div className="flex justify-between items-center py-8 px-11">
      <div>
        <img src={Image} alt="logo" />
      </div>
      <div className="flex items-center justify-evenly gap-x-5 font-semibold">
        {navs.map((a, b) => (
          <p key={b} className="border-2 p-2 hover:bg-red-500 hover:text-neutral-100"> {a}</p>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
