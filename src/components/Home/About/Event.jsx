import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Bottol from "../../../assets/img/bottol.png";
import Img1 from "../../../assets/img/event1.jpg";
import Img2 from "../../../assets/img/event2.jpg";

const eventData = [
  {
    img: Img1,
    title: "EVERY SATURDAY NIGHTS",
    desc: "Lorem ipsum dolor sit amet, sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  },
  {
    img: Img2,
    title: "EVERY SUNDAY NIGHTS",
    desc: "Lorem ipsum dolor sit amet, sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  },
];

const Event = () => {
  return (
    <div className="flex justify-center items-center gap-10 pt-20 lg:flex-nowrap flex-wrap px-4">
      {eventData.slice(0, 1).map((data, index) => (
        <div className="bg-heroBg">
          <div className="bg-hero flex flex-col gap-8">
            <img src={data.img} alt="" />
            <div className="flex flex-col gap-2 p-6">
              <h2 className="font-primary text-3xl fontt-bold text-title">
                {data.title}
              </h2>
              <p className="font-text text-lg text-white">{data.desc}</p>
            </div>
            <a href="#!">
              <div className="bg-[#bfdd0080] py-3 text-center">
                <div className="text-white text-xl font-bold font-text px-7 py-3 ">
                  Book A Table
                  <HiOutlineArrowNarrowRight className="inline font-2xl ml-2" />
                </div>
              </div>
            </a>
          </div>
        </div>
      ))}
      <div>
        <img src={Bottol} alt="" className="min-w-[16rem] 2xl:min-w-[24rem]" />
      </div>
      {eventData.slice(1, 2).map((data, index) => (
        <div className="bg-heroBg">
          <div className="bg-hero flex flex-col gap-8">
            <img src={data.img} alt="" />
            <div className="flex flex-col gap-2 p-6">
              <h2 className="font-primary text-3xl fontt-bold text-title">
                {data.title}
              </h2>
              <p className="font-text text-lg text-white">{data.desc}</p>
            </div>
            <a href="#!">
              <div className="bg-[#bfdd0080] py-3 text-center">
                <div className="text-white text-xl font-bold font-text px-7 py-3 ">
                  Book A Table
                  <HiOutlineArrowNarrowRight className="inline font-2xl ml-2" />
                </div>
              </div>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Event;
