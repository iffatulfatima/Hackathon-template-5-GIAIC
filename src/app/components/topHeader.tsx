import React from "react";
import { LuPhone } from "react-icons/lu";
import { BiMessage } from "react-icons/bi";
import { IoLogoInstagram, IoLogoYoutube, IoLogoFacebook } from "react-icons/io";
import { CiTwitter } from "react-icons/ci";

const TopHeader = () => {
  return (
    <div className="w-full h-auto bg-[#252B42] flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 py-2">
      {/* Contact Info Section */}
      <div className="flex flex-wrap items-center justify-center text-white gap-4 sm:gap-6">
        <div className="flex items-center gap-2">
          <LuPhone className="text-white" />
          <span className="text-xs sm:text-sm font-semibold leading-[20px] sm:leading-[24px]">
            (225) 555-0118
          </span>
        </div>
        <div className="flex items-center gap-2">
          <BiMessage className="text-white" />
          <span className="text-xs sm:text-sm font-semibold leading-[20px] sm:leading-[24px] text-center">
            michelle.river@example.com
          </span>
        </div>
      </div>

      {/* Promotional Text */}
      <div className="mt-2 sm:mt-0">
        <p className="text-white text-xs sm:text-sm font-semibold leading-[20px] sm:leading-[24px] text-center">
          Follow us and get a chance to win 80% off
        </p>
      </div>

      {/* Social Media Links */}
      <div className="flex items-center justify-center mt-2 sm:mt-0 text-white gap-3">
        <span className="hidden sm:block text-xs sm:text-sm font-semibold leading-[20px] sm:leading-[24px]">
          Follow Us:
        </span>
        <div className="flex items-center gap-3">
          <IoLogoInstagram className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px]" />
          <IoLogoYoutube className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px]" />
          <IoLogoFacebook className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px]" />
          <CiTwitter className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px]" />
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
