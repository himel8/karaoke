import React from "react";
import { FaGlassCheers } from "react-icons/fa";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import HeroImg from "../../../assets/img/heroimg.png";

const HeroSection = () => {
  return (
    <section className="bg-heroBg">
      <div className=" bg-hero h-screen flex justify-center items-center ">
        <div className="flex justify-center items-center w-[80%] mx-auto gap-10 ">
          <div className="flex flex-col gap-8">
            <h6 className="text-2xl font-medium font-text text-title">
              <FaGlassCheers className="inline mr-2 text-2xl " />
              WELCOME TO KARAOKE LOUNGE
            </h6>
            <h2 className="text-6xl font-primary font-extrabold text-white tracking-wider">
              ENJOY THE ATMOSPHERE
            </h2>
            <p className="text-lg font-medium font-text text-white">
              Tous Les Jours / Everyday / 每日 3:00PM - 3:00AM
            </p>
            <div className="flex justify-start items-center gap-6">
              <a
                href="#!"
                className="bg-title text-[#802727] text-xl font-bold font-text px-7 py-3 rounded-tl-3xl rounded-br-3xl"
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
          <div>
            <img src={HeroImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
