import React from "react";
import { FaGlassCheers } from "react-icons/fa";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HeroImg from "../../../assets/img/heroimg.jpg";

const HeroSection = () => {
  const message = () =>
    toast.success("Comming Soon...!!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  return (
    <section className="" id="home">
      <div className=" bg-main min-h-screen flex justify-center items-center pt-20 lg:pt-0">
        <div className="flex justify-center items-center w-[95%] sm:w-[80%] mx-auto gap-10 lg:flex-nowrap flex-wrap-reverse py-20 lg:py-0 pt-0 lg:pt-20 mt-28 lg:mt-0">
          <div className="flex flex-col gap-8 lg:w-1/2 w-full">
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
            <div className="flex justify-center lg:justify-start items-center gap-6 flex-wrap ">
              <a
                href="https://lemic.orderluck.com/"
                className="bg-title hover:bg-white hover:text-title text-white hover:scale-105 transform transition-all ease-in-out duration-700 text-xl font-bold font-text px-12 py-3 rounded-tl-3xl rounded-br-3xl "
              >
                Menu
              </a>
              <p
                onClick={message}
                className="text-title text-xl font-bold font-text px-7 py-3 cursor-pointer hover:scale-110 duration-700 ease-in-out transform transition-all"
              >
                Book A Room
                <HiOutlineArrowNarrowRight className="inline font-2xl ml-2" />
              </p>
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
              />
            </div>
          </div>
          <div className="flex justify-center items-center  lg:pt-0 lg:w-1/2 w-fulle about-second-shadow">
            <img src={HeroImg} alt="" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
