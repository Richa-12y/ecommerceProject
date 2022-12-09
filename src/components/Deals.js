import React, { useEffect, useState } from "react";
import axios from "axios";

const Deals = () => {
  const [takeimage, setTakeimage] = useState([]);
  const featchImageDetailsfromApi = async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products/");
    setTakeimage(data);
    console.log(data);
  };
  useEffect(() => {
    featchImageDetailsfromApi();
  }, []);

  return (
    <div className="bg-[#eaeded] w-full">
      <div className="mx-auto w-[80vw] xl:w-[70vw] bg-[#eaeded] text-black">
        <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
          <h1 className="text-black font-bold text-[40px] flex items-center justify-center">
            Deals
          </h1>
          <div className="grid grid-cols-none gap-4 p-4 mx-auto md:grid-cols-4">
            {takeimage.map((el, i) => {
              return (
                <>
                  <img
                    key={i}
                    src={el.image}
                    alt="dete"
                    className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-1 dark:bg-gray-500 aspect-square hover:opacity-5"
                  />
                  <img
                    alt="dete"
                    className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
                    src={el.image}
                  />
                  <img
                    src={el.image}
                    alt="dete"
                    className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-1 dark:bg-gray-500 aspect-square"
                  />
                </>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Deals;
