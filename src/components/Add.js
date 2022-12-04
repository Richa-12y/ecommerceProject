import React from "react";

const Add = () => {
  /**
   * @buttons i have to work in this part
   * have to add Router
   */
  const buttons = [
    "Today's Deal",
    "New Products",
    "Seller",
    "Home",
    "Coupons",
    "Fashion",
  ];
  return (
    <div className="bg-[#232f3e]">
      <div className="flex items-center justify-between  h-8 sm:max-w-[80vw] md:max-w-[80vw]  lg:max-w-[55vw] mx-auto sm:px-10 text-[12px] sm:text-[16px]">
        {buttons.map((button) => (
          <div className="group whitespace-nowrap">
            <div className="text-gray-200/70  hover:text-white px-[0.7rem] border-solid border-2 border-white-600">
              {button}
            </div>
            <div className="h-[2px] w-full group-hover:bg-white duration-100 ease-out"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Add;
