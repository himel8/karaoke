import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
const ProductCard = () => {
  return (
    <div className="my-4 bg-heroBg rounded-xl">
      <div className="bg-hero">
        <h6 className="text-4xl text-main bg-title text-center font-primary font-bold py-2 rounded-tr-xl rounded-tl-xl">
          LIQUOR
        </h6>
        <div className="px-6 py-2">
          <h6 className="text-3xl text-white font-primary font-bold mb-4">
            COGNAC( 白兰地 )
          </h6>
          <div className="flex justify-start items-center gap-3 ">
            <BsFillArrowRightCircleFill className="text-xl text-title" />
            <div>
              <p className="text-xl font-text font-bold">St-Rémy X.O 750ml</p>
              <p className="text-xl font-text font-bold">圣雷米白兰地 X.O</p>
            </div>

            <hr className="w-28 sm:w-80 border border-dashed border-title" />

            <p className="text-xl font-text font-bold">$120</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
