import React from "react";
import { FaGlassCheers } from "react-icons/fa";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import HeroImg from "../../../assets/img/heroimg.png";

const HeroSection = () => {
  return (
    <section className="bg-heroBg" id="home">
      <div className=" bg-hero min-h-screen flex justify-center items-center ">
        <div className="flex justify-center items-center w-[95%] sm:w-[80%] mx-auto gap-10 lg:flex-nowrap flex-wrap-reverse py-20 lg:py-0">
          <div className="flex flex-col gap-8">
            <h6 className="text-2xl sm:text-3xl font-medium font-title text-title text-center lg:text-left capitalize">
              <FaGlassCheers className="inline mr-2 text-2xl " />
              Welcome To KARAOKE Lounge
            </h6>
            <h2 className="text-[2.75rem] leading-[3rem] sm:text-6xl font-primary font-extrabold text-white tracking-wider text-center lg:text-left">
              ENJOY THE ATMOSPHERE
            </h2>
            <p className="text-lg font-medium font-text text-white text-center lg:text-left">
              Tous Les Jours / Everyday / 每日 3:00PM - 3:00AM
            </p>
            <div className="flex justify-center lg:justify-start items-center gap-6 flex-wrap">
              <a
                href="#!"
                className="bg-title hover:bg-simple hover:text-title text-[#802727] hover:scale-105 transform transition-all ease-in-out duration-700 text-xl font-bold font-text px-7 py-3 rounded-tl-3xl rounded-br-3xl "
              >
                Contact Us
              </a>
              <a
                href="#!"
                className="text-title text-xl font-bold font-text px-7 py-3"
              >
                Book A Table
                <HiOutlineArrowNarrowRight className="inline font-2xl ml-2" />
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center pt-20 lg:pt-0">
            <img src={HeroImg} alt="" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
