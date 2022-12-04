import React from "react";
import logo from "../assests/logo.png";
import { BsCart } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { GoSettings } from "react-icons/go"; //IoLocationOutline
import { TbWorld } from "react-icons/tb";
import indianLogo from "../assests/indialogo.PNG"; //TiArrowRepeatOutline//AiOutlineLogin
import { TiArrowRepeat } from "react-icons/ti";
import { BiLogInCircle } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="bg-[#131921] p-4 flex item-center justify-between md:px-8">
      {/* left */}
      <div className="flex items-center shrink-0">
        <div className="h-10 flex">
          <img src={logo} className="object-cover" alt="pagelogo" />
        </div>
        <div className="hidden text-white/70 p-1 ml-4 md:flex items-center hover:scale-110 border-solid border-2 border-white-600 justify-center h-full hover:text-white ">
          <TbWorld className="text=[22px] m-1" />
          <p>Location</p>
        </div>
      </div>
      {/* Middle */}
      <div className="flex items-center w-full">
        {/* Input */}
        <div className="hidden sm:flex relative w-full mx-4">
          <input
            type="search"
            className="py-2  rounded-full pl-12 placeholder:text-[#131921] outline-0 w-full"
            placeholder="Search..."
          />
          <button className="absolute bg-orange-500 h-full w-12 right-0 flex items-center justify-center rounded-r-full  text-white">
            <IoSearch className="text-[25px] mr-1" />
          </button>

          <button className="absolute h-full w-12 left-0 flex items-center justify-center rounded-l-full">
            <GoSettings />
          </button>
        </div>
        {/* Flag */}
        <div className="hidden text-white md:flex items-center font-bold cursor-pointer mr-4 shrink-0">
          <img
            src={indianLogo}
            alt="indianflag"
            className="w-10 object-cover mr-1"
          />
          <p>IN</p>
          <TiArrowRepeat className="text-[15px] text-white mt-3 " />
        </div>
      </div>
      {/* right */}
      {/* Login container */}
      <div className="flex items-center justify-center m-1 text-center text-white font-bold shrink-0">
        Login
        <BiLogInCircle />
      </div>
      <div className="relative flex items-center justify-center text-white text-[30px]">
        <BsCart />
        <div className="absolute text-[16px] h-full top-1 right-2.1 text-orange-500">
          <p>0</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
