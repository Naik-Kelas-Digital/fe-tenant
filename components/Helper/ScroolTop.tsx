"use client";
import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScroolTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toogleVisiblity = () => {
      if (window.scrollY > 300) setIsVisible(true);
      if (window.scrollY < 300) setIsVisible(false);
    };
    window.addEventListener("scroll", toogleVisiblity);
  }, []);

  const scroolToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return <div className="fixed bottom-4 animate-pulse right-2">
    {isVisible && <button onClick={scroolToTop} className="bg-blue-700 text-white rounded-full w-12 h-12 flex items-center justify-center focus:outline-none">
        <FaArrowUp />
        </button>}
  </div>;
};

export default ScroolTop;
