import React from "react";
import wallpaper from "../assests/vadim-babenko-8vhu9wtT8ew-unsplash.jpg";
import "../index.css";

const Hero = () => {
  return (
    <>
      <div className="relative w-full bg-[#eaeded] container mx-auto">
        <div className="mx-auto  w-full lg:w-[90vw] xl:w-[70vw]">
          <div className="absolute  grad w-full lg:w-[90vw] flex   h-[15rem] sm:h-[21rem] md:h-[25rem] z-10 xl:w-[70vw]"></div>
          <div className=" w-full  lg:w-[90vw] flex relative  h-[15rem]  sm:h-[21rem] md:h-[25rem] xl:w-[70vw]">
            <img
              src={wallpaper}
              alt="wla"
              className="absolute object-cover w-full  lg:w-[90vw] z-0 h-[15rem] sm:h-[21rem] md:h-[25rem] xl:w-[70vw]"
            />
          </div>
        </div>
      </div>
      {/* Here is post baner start */}
      <div className="p-6 py-12 dark:bg-blue-400 dark:text-white text-white ">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <h2 className="text-center text-6xl tracking-tighter font-bold">
              Up to
              <br className="sm:hidden" />
              35% Off
            </h2>
            <div className="space-x-2 text-center py-2 lg:py-0">
              <span>Plus free shipping! Use code:</span>
              <span className="font-bold text-lg">RIASHC</span>
            </div>
            <a
              href="/"
              rel="noreferrer noopener"
              className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-50 dark:text-white dark:border-gray-400 hover:bg-orange-500"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
