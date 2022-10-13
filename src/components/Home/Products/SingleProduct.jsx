import React from "react";

const SingleProduct = ({ data }) => {
  return (
    <div className="bg-hero p-4 flex flex-col gap-6">
      <div>
        <h6 className="text-white font-text text-xl">{data.name}</h6>
        <p className="text-gray-300 font-text text-lg text-bold my-1">
          {data?.quantity}
        </p>
      </div>

      <p className="text-title font-text text-xl font-semibold">
        {data.price} $
      </p>
    </div>
  );
};

export default SingleProduct;
