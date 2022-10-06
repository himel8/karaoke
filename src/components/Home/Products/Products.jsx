import React from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <section className="w-[80%] mx-auto my-20">
      <div className="" id="vin-alcool">
        <h2 className="text-6xl text-title font-text font-bold text-center tracking-wider">
          VIN & ALCOOL
        </h2>
        <div className="flex justify-center items-center gap-6 flex-wrap lg:flex-nowrap">
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </section>
  );
};

export default Products;
