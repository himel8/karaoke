import React from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <section className="w-[95%] sm:w-[80%] mx-auto my-20">
      <div className="" id="vin-alcool">
        <h2 className="text-[3.5rem] leading-[4.2rem] sm:text-[6rem] text-title font-title font-bold text-center tracking-wider mb-4">
          Vin & Alcool
        </h2>
        <div className="flex justify-center items-center gap-6 flex-wrap lg:flex-nowrap  px-4">
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </section>
  );
};

export default Products;
