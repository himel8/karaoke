import React from "react";
import { Autoplay } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../../assets/img/testimonial-2.png";
import amilia from "../../../assets/img/testimonial/amilia.png";
import Doha from "../../../assets/img/testimonial/dpng.png";
import hugh from "../../../assets/img/testimonial/h.png";
import Mira from "../../../assets/img/testimonial/M.png";
import Patryk from "../../../assets/img/testimonial/p.png";
import Zavier from "../../../assets/img/testimonial/z.png";

const sliderData = [
  {
    desc: "Honestly the BEST Karaoke in Montreal! All super new equipment and great ambiance!! Very friendly stuff as well. Perfect place for group events with a decent price. Nowadays with the crazy inflation, you can't find anywhere else that provide this level of good quality services. Highly recommended to try and have fun!!!",
    img: img1,
    name: "Tiffany Roh",
  },
  {
    desc: "The rooms are nice and clean, the mics work, but we were disappointed with the karaoke system available in Chinese only with very few songs in English or French. They have YouTube available, but that I can do in my living room. The worst part was the forced tip that nobody asks you about at the end.",
    img: Patryk,
    name: "Patryk Czyż",
  },
  {
    desc: "We had an amazing night :). Drinks, food were good. Everything was perfect. Already made a reservation to come back. Thank you.",
    img: Doha,
    name: "Doha Seddiki",
  },
  {
    desc: "Such a fun experience, the time flew by so fast! I came here on a hen do and the staff were so nice and accommodating. We also got a free round of shots to celebrate the bride! Will definitely be back",
    img: Zavier,
    name: "Zavier Kim",
  },
  {
    desc: "Loved it!!! Incredibly nice staff! Super attentive! Great ac (huge plus as some places I've been to didn't have one). The rooms are comfortable! They also have mic protectors!",
    img: amilia,
    name: "Amylie",
  },
  {
    desc: "Excellent service, reasonable price room. Pay per hour. Lots of access options for Karaoke including tv hookup to the machine or YouTube from your phone. Wifi included for room. Good for big parties. Only two microphones for the big room. Customer service was kind",
    img: Mira,
    name: "Miree Lee",
  },
  {
    desc: "super clean facilities, really good vibe, nice speakers, staff was really nice and accommodating, prices are very reasonable, and they have youtube casting option for the private rooms which means unlimited song selection. Great spot I will be back and so will my friends.",
    img: hugh,
    name: "hugh buchbinder",
  },
];

const Slider = () => {
  return (
    <Swiper
      spaceBetween={20}
      loop={true}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
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
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
