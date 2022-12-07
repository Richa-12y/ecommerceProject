import React from "react";
import Youtube from "../assests/shine-youtube-icon.png";
import Google from "../assests/3d-fluency-chrome-browser.png";
import Facbook from "../assests/flat-facebook-icon.png";
import Twitter from "../assests/flat-twitter-icon.png";
import Instagram from "../assests/3d-fluency-instagram-logo.png";

const Footer = () => {
  /**
   * here firstfooter container h2 tag we map that
   */
  const footerhtwotage = [
    { htwotext: "Get to Know Us" },
    { htwotwo: "Make Money with Us" },
    { htwothree: "Let Us Help You" },
    { htwofour: "Connect with Us" },
    { htwofive: "© Copyright 1986. All Rights Reserved." },
  ];

  const images = [Youtube, Google, Facbook, Twitter, Instagram];
  /**
   * here in top we import all the image from assests folder
   * then assign all the image in const map this in footer logo
   */
  const pages = ["About Us", "Careers", "Press Releases", "Ecommerce Science"];
  const pagestwo = [
    "Sell on Ecommerce",
    "Sell under Ecommerce Accelerator",
    "Protect and Build Your Brand",
    "Ecommerce Global Selling",
    "Become an Affiliate",
    "Fulfilment by Ecommerce",
    "Advertise Your Products",
    "Ecommerce Pay on Merchants",
  ];

  const pagesthree = [
    "COVID-19 and Ecommerce",
    "Your Account",
    "Returns Centre",
    "100% Purchase Protection",
    "Configuration",
    "Ecommerce App Download",
    "Ecommerce Assistant Download",
    "Help",
  ];
  const pagesFoure = ["Facebook", "Twitter", "Instagram", "YouTube"];
  const pageFive = ["Shop", "Idea", "Blog", "Pricing", "Contact"];

  return (
    <div className="mt-4">
      {/* first container footer start here */}
      <footer className="p-6 dark:bg-gray-800 dark:text-gray-100">
        <div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
          <div className="flex flex-col p-2">
            {footerhtwotage.map((el, i) => {
              return (
                <h2
                  key={i}
                  className="font-bold text-white hover:text-orange-500 text-[20px]"
                >
                  {el.htwotext}
                </h2>
              );
            })}
            <div className="flex flex-col space-y-2 text-sm dark:text-white">
              {pages.map((el, i) => {
                return (
                  <a
                    className="text-white hover:text-blue-700 font-medium"
                    key={i}
                    rel="noopener noreferrer"
                    href="/"
                  >
                    {el}
                  </a>
                );
              })}
            </div>
          </div>
          {/* end here first container of footer */}

          {/* second container start here */}
          <div className="flex flex-col p-2">
            {footerhtwotage.map((el, i) => {
              return (
                <h2
                  key={i}
                  className="font-bold text-white hover:text-orange-500 text-[20px]"
                >
                  {el.htwotext}
                </h2>
              );
            })}
            <div className="flex flex-col space-y-2 text-sm dark:white">
              {pagestwo.map((el, i) => {
                return (
                  <a
                    className=" font-medium text-white hover:text-blue-700"
                    key={i}
                    rel="noopener noreferrer"
                    href="/"
                  >
                    {el}
                  </a>
                );
              })}
            </div>
          </div>
          {/* second container end here */}
          {/* third container start here */}

          <div className="flex flex-col p-2">
            {footerhtwotage.map((el, i) => {
              return (
                <h2
                  key={i}
                  className="font-bold text-white hover:text-orange-500 text-[20px]"
                >
                  {el.htwothree}
                </h2>
              );
            })}
            <div className="flex flex-col space-y-2 text-sm dark:text-white">
              {pagesthree.map((el, i) => {
                return (
                  <a
                    className="text-white hover:text-blue-700 font-medium"
                    key={i}
                    rel="noopener noreferrer"
                    href="/"
                  >
                    {el}
                  </a>
                );
              })}
            </div>
          </div>
          {/* third container end here */}
          {/* fourth container start here */}

          <div className="flex flex-col p-2">
            {footerhtwotage.map((el, i) => {
              return (
                <h2
                  key={i}
                  className="font-bold text-white hover:text-orange-500 text-[20px]"
                >
                  {el.htwofour}
                </h2>
              );
            })}
            <div className="flex flex-col space-y-2 text-sm dark:text-white">
              {pagesFoure.map((el, i) => {
                return (
                  <a
                    className="text-white hover:text-blue-700 font-medium"
                    key={i}
                    rel="noopener noreferrer"
                    href="/"
                  >
                    {el}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        {/* fourth container start here */}
      </footer>
      {/* here is another footer container */}
      <footer className="dark:bg-gray-800 dark:text-gray-50">
        <div className="container flex flex-col p-4 mx-auto md:p-8 lg:flex-row divide-gray-400">
          <ul className="self-center py-6 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
            {pageFive.map((el, i) => {
              return (
                <li
                  className=" font-medium text-white hover:text-orange-500"
                  key={i}
                  rel="noopener noreferrer"
                  href="/"
                >
                  {el}
                </li>
              );
            })}
          </ul>

          <div className="flex flex-col justify-center pt-6 lg:pt-0">
            <div className="flex justify-center space-x-4">
              {images.map((el, i) => {
                return (
                  <a
                    className="flex items-center justify-center w-8 h-8 rounded-full sm:w-6 sm:h-6 dark:bg-blue-400 dark:text-gray-900"
                    key={i}
                    rel="noopener noreferrer"
                    href="/"
                  >
                    <img src={el} alt="logo" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </footer>
      <div className="flex items-center justify-center px-6 pt-12 text-sm">
        {footerhtwotage.map((el, i) => {
          return (
            <span key={i} className="text-white hover:text-orange-500">
              {el.htwofive}
            </span>
          );
        })}
      </div>
    </div>
    // here is footer container end
  );
};

export default Footer;
