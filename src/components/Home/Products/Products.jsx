import React from "react";
import { allProducts } from "./allProducts";
import SingleProduct from "./SingleProduct";

const Products = ({ selected }) => {
  return (
    <section className="w-[95%] sm:w-[80%] mx-auto my-20">
      {allProducts.map((data, index) => (
        <div
          key={index}
          className={`py-20 ${selected === data.id ? "block" : "hidden"}`}
          id={data.id}
        >
          <h2 className="text-[3.5rem] leading-[4.2rem] sm:text-[6rem] sm:leading-[6.2rem] text-title font-title font-bold text-center tracking-wider mb-4">
            {data.name}
          </h2>
          {data.products.map((data, index) => (
            <div key={index} className="py-12">
              <h6 className="text-2xl text-white font-text font-bold pb-3">
                {data.group}
              </h6>
              <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                {data.product.map((data, index) => (
                  <SingleProduct key={index} data={data} />
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
};

export default Products;
