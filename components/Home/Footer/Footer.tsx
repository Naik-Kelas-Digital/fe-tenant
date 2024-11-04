import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="pt-20 pb-12 bg-black">
      <div className="w-[80%] mx-auto grid items-start grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 pb-8 border-b-[1.5px] border-white border-opacity-20 ">
        {/* last */}
        <div className="">
          <div className="flex items-center space-x-2">
            <div className="md:w-10 md:h-10 w-7 h-7 rounded-full bg-blue-700 text-white flex items-center justify-center flex-col">
              <FaHouse />
            </div>
            <h1 className="text-white font-bold text-sm sm:text-base md:text-xl">
              RealEstate project
            </h1>
          </div>
          <p className="text-gray-300 mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
            reiciendis.
          </p>
          <p className="text-gray-300 mt-4 font-semibold">Example@gmail.com</p>
          <p className="text-gray-300 mt-2 font-semibold">08381851233</p>
          {/* Sosial media */}
          <div className="flex items-center space-x-4 mt-6">
            <FaFacebookF className="w-6 h-6 text-blue-600" />
            <FaTwitter className="w-6 h-6 text-sky-500" />
            <FaYoutube className="w-6 h-6 text-red-700" />
            <FaInstagram className="w-6 h-6 text-pink-600" />
          </div>
        </div>
        {/* 2foot */}
        <div className="md:mx-auto">
          <h1 className="footer__heading">Popular Search</h1>
          <p className="footer__link">Apartment for rent</p>
          <p className="footer__link"> Apartment Low To high</p>
          <p className="footer__link">Office for Buy</p>
          <p className="footer__link">Office for rent</p>
        </div>
        {/* 3footer */}
        <div className="lg:mx-auto">
          <h1 className="footer__heading">Quick Link</h1>
          <p className="footer__link">Terms pf use</p>
          <p className="footer__link">Privacy Policy</p>
          <p className="footer__link">Pricing Plans</p>
          <p className="footer__link">Our Services</p>
          <p className="footer__link">Contact Support</p>
          <p className="footer__link">Carrers</p>
          <p className="footer__link">Faq</p>
        </div>
        {/* 4footer */}
        <div className="md:mx-auto">
          <h1 className="footer__heading">Discover</h1>
          <p className="footer__link">Bandung</p>
          <p className="footer__link">Jakarta</p>
          <p className="footer__link">Yogyakarta</p>
          <p className="footer__link">Bogor</p>
        </div>
      </div>
        <p className="text-center mt-4 text-base text-white opacity-70">@acumalaka2024</p>
    </div>
  );
};

export default Footer;
