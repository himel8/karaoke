import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { FaGlassCheers } from "react-icons/fa";
import { timeData } from "./categoryData";

const Category = () => {
  return (
    <section className="py-12" id="times">
      <h2 className="text-[3.5rem] leading-[4.2rem] sm:text-[6rem] font-title text-title text-center">
        <FaGlassCheers className="inline mr-2 text-[4rem]" />
        Forfait Chambre
      </h2>
      {timeData.map((data, index) => (
        <div
          key={index}
          className="w-[95%] sm:w-[80%] mx-auto flex flex-col justify-center items-center my-12"
        >
          <div className="flex flex-col  justify-center items-center gap-4 pb-6">
            <div>
              <img src={data.img} alt="" className="w-40" />
            </div>
            <h3 className="text-5xl font-primary font-extrabold text-white">
              {data.name}
            </h3>
            <p className="text-2xl font-text font-bold text-simple">
              {data.time}
            </p>
            <h3 className="text-4xl font-primary font-bold text-title">
              {data.chname}
            </h3>
          </div>

          {/*  */}
          <div className="flex justify-center items-center gap-10 lg:flex-nowrap flex-wrap px-4">
            {data.category.map((data, index) => (
              <div
                key={index}
                className="bg-heroBg rounded-2xl w-full lg:w-[50%] mx-auto"
              >
                <div className="bg-hero flex flex-col justify-center items-center px-4 sm:px-12 py-6 gap-4">
                  <h3 className="font-primary text-3xl font-bold text-center text-white">
                    {data.name}
                  </h3>
                  <p className="font-text text-lg font-semibold text-simple text-center">
                    {data.desc}
                  </p>
                  {data.price.map((data, index) => (
                    <div
                      key={index}
                      className="flex justify-start items-center gap-2 "
                    >
                      <BsFillArrowRightCircleFill className="text-xl text-title" />
                      <p className="text-2xl font-text font-bold text-white">
                        {data.name}
                      </p>

                      <hr className="w-20 sm:w-80 border border-dashed border-title" />

                      <p className="text-2xl font-text font-bold text-white">
                        {data.amount}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="flex justify-center items-center">
        <a
          href="tel:514-661-1695"
          className="bg-title hover:bg-white hover:text-title text-white hover:scale-105 transform transition-all ease-in-out duration-700 text-xl font-bold font-text px-7 py-4 rounded-tl-3xl rounded-br-3xl"
        >
          Réservations/预约电话
        </a>
      </div>
    </section>
  );
};

export default Category;
