import React from "react";
import Slider from "./Slider";

const Testimonial = () => {
  return (
    <div className="bg-primary py-20">
      <div className="w-[90%] mx-auto">
        <h2 className="font-text font-semibold text-4xl sm:text-5xl text-white leading-[3.5rem] sm:leading-[4.5rem] mb-12">
          What Our Customers have
          <br /> to say about us
        </h2>
        <Slider />
      </div>
    </div>
  );
};

export default Testimonial;
