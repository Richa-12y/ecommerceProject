import React from "react";
import Headphone from "../assests/headphones.png";
import laptop from "../assests/laptop.png";
import phone from "../assests/phone.png";
import watch from "../assests/watch-removebg-preview.png";

import Product from "./Product";

const Products = () => {
  const productDteails = [
    { title: "Headphones", image: Headphone },
    { title: "Laptop", image: laptop },
    { title: "Phone", image: phone },
    { title: "Phone", image: watch },
  ];
  return (
    <div className="bg-[#eaeded] text-black">
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4  mx-auto w-[80vw] xl:w-[70vw] gap-5">
        {productDteails.map((product) => (
          <Product title={product.title} image={product.image} />
        ))}
      </div>
    </div>
  );
};

export default Products;
