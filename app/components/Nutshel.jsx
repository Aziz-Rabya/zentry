"use client";

import React from "react";
import BentoTilt from "./BentoTilt";
import TextPressure from "./TextPressure";
import BentoCard from "./BentoCard";

const Nutshel = () => {
  return (
    <section className="bg-black px-6 py-20 md:px-16 lg:px-32">
      {/* Header */}
      <div className="text-white mb-20 max-w-4xl">
        <p className="text-xs tracking-widest uppercase text-gray-400 mb-2">
          Our universe in a nutshell
        </p>
        <h1 className="text-4xl sm:text-6xl lg:text-[80px] leading-[0.9] font-black uppercase">
          Zentry at a <br /> glance
        </h1>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
        {/* Products */}
        <BentoTilt className="md:col-span-2">
          <BentoCard
            title="Products"
            description="4+"
            bg="bg-black border-2 border-white"
            media={
              <img
                src="/img/card11.png"
                alt="Products"
                className="w-max h-max mt-4 ml-auto"
              />
            }
            titleSize="text-xs"
            descriptionSize="text-4xl font-bold"
          />
        </BentoTilt>

        {/* +30 Partners */}
        <BentoTilt className="md:row-span-1">
          <BentoCard
            title={
              <div style={{ position: "relative", height: "300px" }}>
                <TextPressure
                  text="+30"
                  flex={true}
                  alpha={false}
                  stroke={false}
                  width={true}
                  weight={true}
                  italic={false}
                  textColor="black"
                  strokeColor="#ff0000"
                  minFontSize={90}
                />
              </div>
            }
            description={<div>Partners</div>}
            bg="bg-yellow-300 text-black"
            titleSize="text-2xl font-bold"
            descriptionSize="text-sm"
          />
        </BentoTilt>

        {/* Receivers – TALL Card */}
        <BentoTilt className="md:col-span-3 row-span-2">
          <BentoCard
            title="Receivers"
            description={
              <div style={{ position: "relative", height: "300px" }}>
                <TextPressure
                  text="+500k"
                  flex={true}
                  alpha={false}
                  stroke={false}
                  width={true}
                  weight={true}
                  italic={false}
                  textColor="black"
                  strokeColor="#ff0000"
                  minFontSize={90}
                />
              </div>
            }
            bg="bg-[#624bff] text-white"
            media={
              <img
                src="/img/gallery-1.webp"
                alt="Receivers"
                className="w-max h-max mt-6 ml-auto"
              />
            }
            titleSize="text-xl"
            descriptionSize="text-3xl"
            subtitleSize="text-base"
            subdescriptionSize="text-sm"
          />
        </BentoTilt>

        {/* Treasury Breakdown */}
        <BentoTilt className="md:col-span-3">
          <BentoCard
            title="Treasury"
            description={
              <div style={{ position: "relative", height: "300px" }}>
                <TextPressure
                  text="+140M"
                  flex={true}
                  alpha={false}
                  stroke={false}
                  width={true}
                  weight={true}
                  italic={false}
                  textColor="black"
                  strokeColor="#ff0000"
                  minFontSize={90}
                />
              </div>
            }
            bg="bg-[#5442fe] text-black"
            media={
              <img
                src="/img/card12.png"
                alt="Treasury"
                className="flex items-center justify-center w-max h-max mt-4 ml-auto"
              />
            }
            titleSize="text-xl"
            descriptionSize="text-4xl font-black"
            content={
              <div className="flex flex-row mt-4 space-y-2 text-sm p-2 gap-4">
                <p>
                  <strong>LEND TO TOREM</strong> 70%
                </p>
                <p>
                  <strong>INVESTMENTS</strong> 50%
                </p>
                <p>
                  <strong>NET ASSETS</strong> 15%
                </p>
              </div>
            }
          />
        </BentoTilt>

        {/* Backers */}
        <BentoTilt className="md:col-span-3">
          <BentoCard
            title="World-Class Backers"
            bg="bg-black border border-gray-700 text-white"
            titleSize="text-sm font-bold uppercase"
            content={
              <div className="mt-4 text-sm space-y-1 opacity-80">
                <p>COINBASE VENTURES</p>
                <p>SPARTAN</p>
                <p>ANIMOCA BRANDS</p>
                <p>PANTERA CAPITAL</p>
                <p>PLAY VENTURES</p>
                <p>SKYVISION CAPITAL</p>
                <p>VESSEL CAPITAL</p>
                <p>DEFIANCE CAPITAL</p>
              </div>
            }
          />
        </BentoTilt>

        {/* Revenue */}
        <BentoTilt className="md:col-span-2">
          <BentoCard
            title="Revenue generated 2024"
            bg="bg-gray-100 text-black"
            titleSize="text-sm"
            description={
              <div style={{ position: "relative", height: "300px" }}>
                <TextPressure
                  text="40m"
                  fontUrl="/fontsgeneral.woff2"
                  flex={true}
                  alpha={false}
                  stroke={false}
                  width={true}
                  weight={true}
                  italic={true}
                  textColor="black"
                  strokeColor="#ff0000"
                  minFontSize={90}
                />
              </div>
            }
          />
        </BentoTilt>
      </div>
    </section>
  );
};

export default Nutshel;
