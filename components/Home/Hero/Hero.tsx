import SearchBox from "@/components/Helper/SearchBox";
import React from "react";

const HeroPage = () => {
  return (
    <div className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#0f0715] overflow-hidden relative bg-[url('/images/hero.jpg')] bg-cover bg-center ">
      {/* Black overlayy */}
      <div className="absolute inset-0 bg-black opacity-70"></div>
      {/* content */}
      <div className="flex justify-center items-center flex-col w-[95%] sm:w-[80%] h-full mx-auto relative z-10 ">
        <h1
          data-aos="fade-left"
          className="text-white text-opacity-80 text-center text-base sm:text-lg uppercase font-medium"
        >
          The Best Way To
        </h1>
        <h1
          data-aos="fade-right"
          data-aos-delay="150"
          className="text-white text-center font-semibold text-3xl sm:text-5xl mt-4 "
        >
          Find Your Dream Home
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-gray-200 mt-4 text-center text-sm sm:text-base"
        >
          We ve more than 745.000 apartmens, place & plot
        </p>
        <div data-aos="zoom-in" data-aos-delay="450" className="mt-12 w-full">
          <SearchBox />
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
