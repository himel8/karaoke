import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Img1 from "../../../assets/img/event1.jpg";
import Img2 from "../../../assets/img/event2.jpg";
import Img3 from "../../../assets/img/party.png";

const eventData = [
  {
    img: Img1,
    title: "Private Party",
    desc: "Lorem ipsum dolor sit amet, sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  },
  {
    img: Img2,
    title: "celebration party",
    desc: "Lorem ipsum dolor sit amet, sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  },
  {
    img: Img3,
    title: "Family Party",
    desc: "Lorem ipsum dolor sit amet, sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  },
];

const Event = () => {
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 pt-20 lg:flex-nowrap flex-wrap px-4">
      {eventData.map((data, index) => (
        <div className="bg-heroBg">
          <div className="bg-hero flex flex-col gap-8">
            <div className="h-[20rem]">
              <img
                src={data.img}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-2 p-6">
              <h2 className="font-primary text-3xl fontt-extrabold text-title uppercase">
                {data.title}
              </h2>
              <p className="font-text text-lg text-white">{data.desc}</p>
            </div>
            <a href="#!">
              <div className="bg-[#d43538] py-3 text-center">
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
