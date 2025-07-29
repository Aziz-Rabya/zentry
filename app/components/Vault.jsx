"use client";
import React from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";

const Vault = () => {
  return (
    <div className="min-h-screen w-screen bg-[#F0FF42] text-black font-sans relative">
      {/* Main Content */}
      <div className="px-7 py-2">
        {/* Title and Button */}
        <div>
          <h1 className="text-[36px] md:text-[60px] leading-[0.9] font-black uppercase">
            The Universe
            <br />
            Powered By Zent
          </h1>
           <Button
              id="watch-trailer"
              title="Watch trailer"
              leftIcon={<TiLocationArrow />}
              containerClass=" flex-center gap-1 mt-9"
            />
        </div>

        {/* Logo - Centered left */}
        <div className="absolute right-10 top-1/2 transform -translate-y-1/2 hidden md:block">
          <svg width="300" height="300" viewBox="0 0 200 200" fill="black">
            <polygon points="100,0 200,100 100,200 0,100" />
            <polygon points="100,50 150,100 100,150 50,100" fill="#F0FF42" />
          </svg>
        </div>

        {/* Sections List */}
        <div className="absolute bottom-8 left-6 md:left-12 space-y-6">
          <div>
            <p className="font-bold">01 &nbsp; Shaping Zentry Collectively</p>
            <p className="max-w-sm text-gray-900 mt-1">
              Participate in governance, influence key decisions in the
              ever-growing Zentry Universe
            </p>
          </div>
          <p className="text-gray-500">
            02 &nbsp; UNLOCKING ECONOMIC OPPORTUNITY
          </p>
          <p className="text-gray-500">03 &nbsp; SHARING VALUE ACCRUED</p>
        </div>
      </div>
    </div>
  );
};

export default Vault;
