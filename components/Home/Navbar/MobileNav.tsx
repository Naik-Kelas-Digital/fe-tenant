import React from "react";

import Link from "next/link";
import { navLinks } from "@/constant/contants";
import { CgClose } from "react-icons/cg";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div>
      {/* overlay */}
      <div className={`transform ${navOpen} fixed transition-all duration-500 inset-0 z-[1000] bg-black opacity-70 w-full h-screen`}></div>
      {/* Nav link */}
      <div className={`text-white ${navOpen} transform transition-all duration-500 delay-300 fixed flex justify-center flex-col h-full w-[80%] sm:w-[60%] bg-[#3e20c1] space-y-6 z-[1000] `}>
        {navLinks.map((navLink) => {
          return (
            <Link key={navLink.id} href={navLink.url}>
              <p className="text-[20px] ml-12 border-b-[1.5px] pb-1 w-fit border-white sm:text-[30px] font-medium hover:text-blue-300">
                {navLink.label}
              </p>
            </Link>
          );
        })}
        {/* Close button */}
        <CgClose
          onClick={closeNav}
          className="absolute top-[0.7rem] right-[1.4rem] sm:h-0 w-6 h-6 text-white "
        />
      </div>
    </div>
  );
};

export default MobileNav;
