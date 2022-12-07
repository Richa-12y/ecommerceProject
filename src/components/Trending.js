import imageFiles from "../components/image.json";
import cardFiles from "../components/cardImage.json";

const Trending = () => {
  return (
    <>
      <h1 className="font-bold text-[40px] bg-[#eaeded] flex items-center justify-center">
        Trending
      </h1>
      <div className="bg-[#eaeded] w-full flex items-centers justify-center">
        <div className="relative w-[80vw] xl:w-[70vw] flex gap-4 py-6 overflow-x-auto shrink-0">
          {imageFiles.map((el, i) => {
            return (
              <img
                key={i}
                src={el.image}
                className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500"
                alt="Image 1"
              />
            );
          })}
        </div>
      </div>
      <div className="bg-[#eaeded] w-full flex items-centers justify-center">
        <div className="relative flex items-center justify-centerw-[80vw] xl:w-[70vw] dark:text-gray-50">
          <div className="flex items-center justify-start w-full h-full gap-6 py-4 mx-auto overflow-auto lg:gap-8">
            <div className="relative flex flex-shrink-0 w-full sm:w-auto">
              {cardFiles.map((el, i) => {
                return (
                  <img
                    key={i}
                    src={el.image}
                    className="object-cover object-center h-96 aspect-square dark:bg-gray-500 p-2"
                    alt="Image 1"
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Trending;
