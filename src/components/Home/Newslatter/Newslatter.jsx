import React from "react";
import { FaGlassCheers, FaTelegramPlane } from "react-icons/fa";

const Newslatter = () => {
  return (
    <div className="w-[80%] mx-auto bg-heroBg mt-6 rounded-tl-[4.2rem] rounded-br-[4.2rem]">
      <div className="bg-hero flex justify-center items-center py-16 px-10 gap-10 ">
        <div className="w-full">
          <h6 className="text-lg font-medium font-text text-title mb-2">
            <FaGlassCheers className="inline mr-2 text-2xl " />
            OUR NEWLETTER
          </h6>
          <h2 className="text-4xl font-primary font-bold text-white tracking-wide">
            GET THE UPDATED NEWS
          </h2>
        </div>
        <div className="w-full flex justify-start items-stretch">
          <input
            class="shadow appearance-none border rounded-tl-3xl w-full py-5 px-5 text-black leading-tight focus:outline-none focus:shadow-outline placeholder:capitalize placeholder:text-main placeholder:font-text placeholder:text-lg placeholder:font-medium"
            id="email"
            type="email"
            placeholder="Your email address"
          />
          <button
            class="bg-title text-main font-bold py-2 px-4 rounded-br-3xl focus:outline-none focus:shadow-outline min-w-[6.5rem] flex justify-center items-center text-3xl"
            type="button"
          >
            <FaTelegramPlane />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newslatter;