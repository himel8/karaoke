import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import img2 from "../../../assets/img/testimonial-1.png";
import img1 from "../../../assets/img/testimonial-2.png";
import img3 from "../../../assets/img/testimonial-3.png";

const sliderData = [
  {
    desc: "Amazing cocktails with fruit margarita from a fancy bar, it has it's own place in the cocktail kingdom",
    img: img1,
    name: "Alyc Keith",
    company: "Drinks Reviewer",
  },
  {
    desc: "These are solidly high-end cocktail bar worthy drinks that happen to be affordable",
    img: img2,
    name: "Mary Smith",
    company: "Cocktail Expert",
  },
  {
    desc: "When you taste their cocktails, that's when you know you've just had a cocktail crafted by a master mixologist!",
    img: img3,
    name: "Arvin Brar e",
    company: "Cocktail Magazine",
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
          <div className="bg-heroBg rounded-3xl">
            <div className="flex flex-col gap-12 justify-between md:h-[28rem] py-12 px-10 sm:px-20 bg-hero rounded-3xl">
              <p className="font-text font-medium text-white italic text-xl">
                {data.desc}
              </p>
              <div className="flex justify-start gap-3 items-end">
                <div className="w-[80px]">
                  <img src={data.img} alt="banner-img" className="w-full" />
                </div>
                <div>
                  <h6 className="text-title font-text text-xl font-semibold">
                    {data.name}
                  </h6>
                  <p className="text-white font-text text-[12px] font-normal mt-2">
                    - {data.company}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
