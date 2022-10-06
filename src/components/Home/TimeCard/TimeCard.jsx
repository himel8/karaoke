import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { timeData } from "./timeCardData";

const TimeCard = () => {
  return (
    <section className="py-8">
      {timeData.map((data, index) => (
        <div
          key={index}
          className={`flex justify-center items-center w-[80%] mx-auto gap-6 bg-[#ffffffb3] py-10  px-12 shadow-hero shadow-2xl border border-title my-12 ${
            index === 1
              ? "flex-row-reverse rounded-bl-[4.2rem] rounded-tr-[4.2rem]"
              : "flex rounded-tl-[4.2rem] rounded-br-[4.2rem]"
          }`}
        >
          <div className=" py-12 rounded-xl flex flex-col justify-center items-start gap-6 flex-wrap w-1/2">
            <div>
              <img src={data.img} alt="" className="w-40" />
            </div>
            <h3 className="text-5xl font-primary font-extrabold">
              {data.name}
            </h3>
            <p className="text-2xl font-text font-bold">{data.time}</p>
            <h3 className="text-4xl font-primary font-bold">{data.chname}</h3>
          </div>
          <div className="flex flex-col gap-8 w-1/2">
            {data.category.map((data, index) => (
              <div key={index} className="flex flex-col gap-2">
                <h3 className="font-primary text-3xl font-bold">{data.name}</h3>
                <p className="font-text text-3lg font-semibold text-main">
                  {data.desc}
                </p>
                {data.price.map((data, index) => (
                  <div
                    key={index}
                    className="flex justify-start items-center gap-1 "
                  >
                    <BsFillArrowRightCircleFill className="font-xl text-main" />
                    <p className="text-xl font-text">{data.name}</p>

                    <hr className="w-80 border border-dashed border-main" />

                    <p className="text-xl font-text ">{data.amount}</p>
                  </div>
                ))}
              </div>
            ))}

            <div>
              <a
                href="tel:514-661-1695"
                className="bg-title text-[#802727] text-xl font-bold font-text px-7 py-4 rounded-tl-3xl rounded-br-3xl"
              >
                Réservations/预约电话
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default TimeCard;
