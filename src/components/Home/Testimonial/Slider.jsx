import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../../assets/img/testimonial-1.png";
import img2 from "../../../assets/img/testimonial-2.png";
import img3 from "../../../assets/img/testimonial-3.png";

const sliderData = [
  {
    desc: "“It’s amazing that companies like this are willing to look at people beyond their past mistakes and give them an opportunity to receive a loan”",
    img: img1,
    name: "Alyc Keith",
    company: "Revolve Motors",
  },
  {
    desc: "“I have been able to approve a much higher percentage of people using this system compared to previous lenders I have used”",
    img: img2,
    name: "Karmen Gill",
    company: "Aithrx",
  },
  {
    desc: "“The system is what we use for lending out our capital, and in most cases being over-collateralized makes it risk free”",
    img: img3,
    name: "Arvin Brar e",
    company: "Auto Hous",
  },
];

const Slider = () => {
  return (
    <Swiper
      spaceBetween={20}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1.75,
        },
        1200: {
          slidesPerView: 2.5,
        },
      }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {sliderData.map((data, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col gap-12 justify-between md:h-[28rem] py-12 px-10 sm:px-20 bg-[#2C2B3F] rounded-3xl">
            <p className="font-text font-medium text-white italic text-xl">
              {data.desc}
            </p>
            <div className="flex justify-start gap-3 items-end">
              <div className="w-[80px]">
                <img src={data.img} alt="banner-img" className="w-full" />
              </div>
              <div>
                <h6 className="text-white font-text text-xl font-semibold">
                  {data.name}
                </h6>
                <p className="text-white font-text text-[12px] font-normal mt-2">
                  - {data.company}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
