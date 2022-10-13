import React from "react";
import { FaGlassCheers } from "react-icons/fa";
import Img1 from "../../../assets/img/cat-p1.png";
import Img2 from "../../../assets/img/cat-p2.png";
import Img3 from "../../../assets/img/cat-p3.png";

const productCategory = [
  { title: "VIN & ALCOOL", mainLink: "alcool", link: "#alcool", img: Img1 },
  {
    title: "BIÈRE & COCKTAILS",
    mainLink: "cocktail",
    link: "#cocktail",
    img: Img2,
  },
  {
    title: "BREUVAGE & LE CASSE-CROÛTE",
    mainLink: "breuvage",
    link: "#breuvage",
    img: Img3,
  },
];

const ProductCategory = ({ setSelected }) => {
  return (
    <section className="w-[85%] mx-auto py-12" id="ourCategory">
      <h2
        className="text-[6rem] font-title  text-title text-center capitalize
      mb-4"
      >
        <FaGlassCheers className="inline mr-2 text-[4rem]" />
        Category
      </h2>
      <div className="flex justify-center items-center gap-12 flex-wrap">
        {/* bg-[#ffffffb3] */}

        {productCategory.map((data, index) => (
          <div key={index} className=" rounded-2xl max-w-[27rem]">
            <div className="bg-hero p-6  rounded-2xl flex flex-col items-center justify-center gap-8 min-h-[38rem]">
              <div className="flex justify-center">
                <img src={data.img} alt="" className="w-[80%]" />
              </div>
              <h4 className="text-[2.25rem] sm:text-5xl font-primary font-extrabold text-white text-center">
                {data.title}
              </h4>
              <a
                href={data.link}
                onClick={() => setSelected(data.mainLink)}
                className="bg-title text-white hover:scale-105 transform transition-all ease-in-out duration-700 text-xl font-bold font-text px-7 py-3 rounded-tl-3xl rounded-br-3xl"
              >
                See More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCategory;
