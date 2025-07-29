import React from 'react';
import Button from './Button';

const cubeClass = `
  inline-block w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12
  bg-black bg-cover bg-center
  hover:bg-[url('/img/gallery-1.webp')]
  transition-all duration-500 ease-in-out
  transform
  hover:scale-[8]
  md:hover:scale-[6.5]
  hover:rounded-md
  align-middle
  mx-2
  cursor-pointer
`;

const CubeHero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 flex flex-col">
      <p className='flex items-center justify-center'>who are we</p>
      {/* Main Hero Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="text-center max-w-6xl">
          <h1 className="leading-[0.85] tracking-tight font-black text-black space-y-2">
            {/* Line 1 */}
            <div className="text-[clamp(2rem,8vw,6rem)]">
              WE'RE BUILDING
            </div>
            
            {/* Line 2 */}
            <div className="text-[clamp(2rem,8vw,6rem)] flex items-center justify-center flex-wrap">
              <span>A NEW</span>
              <span className={cubeClass}></span>
              <span>REALITY</span>
            </div>
            
            {/* Line 3 */}
            <div className="text-[clamp(2rem,8vw,6rem)]">
              THAT REWARDS
            </div>
            
            {/* Line 4 */}
            <div className="text-[clamp(2rem,8vw,6rem)] flex items-center justify-center flex-wrap">
              <span>PLAYERS</span>
              <span className={cubeClass}></span>
              <span>AND</span>
            </div>
            
            {/* Line 5 */}
            <div className="text-[clamp(2rem,8vw,6rem)]">
              EMPOWERS
            </div>
            
            {/* Line 6 */}
            <div className="text-[clamp(2rem,8vw,6rem)]">
              HUMANS & AI
            </div>
            
            {/* Line 7 */}
            <div className="text-[clamp(2rem,8vw,6rem)] flex items-center justify-center flex-wrap">
              <span>TO</span>
              <span className={cubeClass}></span>
              <span>THRIVE</span>
            </div>
          </h1>
          
          {/* Subtitle */}
          <div className="mt-12 mb-8">
            <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Zentry envisions a future where players, emerging tech, and
              <br />
              a new economy unite at the convergence of gaming and AI.
            </p>
          </div>
          
          {/* CTA Button */}
          <Button
            id="discover"
            title="Discover Who we are"
            containerClass="bg-white text-black px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center gap-3 mx-auto shadow-lg hover:shadow-xl cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default CubeHero;