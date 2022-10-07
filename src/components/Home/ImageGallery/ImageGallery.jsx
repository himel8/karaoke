import React, { useEffect, useState } from "react";
import { FaGlassCheers } from "react-icons/fa";
import Img1 from "../../../assets/img/img-gallery/img1.png";
import Img10 from "../../../assets/img/img-gallery/img10.png";
import Img11 from "../../../assets/img/img-gallery/img11.png";
import Img12 from "../../../assets/img/img-gallery/img12.png";
import Img13 from "../../../assets/img/img-gallery/img13.png";
import Img14 from "../../../assets/img/img-gallery/img14.png";
import Img15 from "../../../assets/img/img-gallery/img15.png";
import Img16 from "../../../assets/img/img-gallery/img16.png";
import Img17 from "../../../assets/img/img-gallery/img17.png";
import Img18 from "../../../assets/img/img-gallery/img18.png";
import Img2 from "../../../assets/img/img-gallery/img2.png";
import Img3 from "../../../assets/img/img-gallery/img3.png";
import Img4 from "../../../assets/img/img-gallery/img4.png";
import Img5 from "../../../assets/img/img-gallery/img5.png";
import Img6 from "../../../assets/img/img-gallery/img6.png";
import Img7 from "../../../assets/img/img-gallery/img7.png";
import Img8 from "../../../assets/img/img-gallery/img8.png";
import Img9 from "../../../assets/img/img-gallery/img9.png";

import "./ImageGallery.css";

const first = [
  { link: Img1 },
  { link: Img2 },
  { link: Img3 },
  { link: Img4 },
  { link: Img5 },
  { link: Img6 },
  { link: Img7 },
  { link: Img8 },
  { link: Img9 },
  { link: Img1 },
  { link: Img2 },
  { link: Img3 },
  { link: Img4 },
];
const second = [
  { link: Img10 },
  { link: Img11 },
  { link: Img12 },
  { link: Img13 },
  { link: Img14 },
  { link: Img15 },
  { link: Img16 },
  { link: Img17 },
  { link: Img18 },
  { link: Img10 },
  { link: Img11 },
  { link: Img12 },
  { link: Img13 },
];

const ImageGallery = () => {
  // start
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const get = (offsetY * 0.3 - 110) / 10;

  // end
  return (
    <section id="gallery" className="py-28">
      <h2
        className="text-[6rem] font-title  text-title text-center capitalize
      mb-4"
      >
        <FaGlassCheers className="inline mr-2 text-[4rem]" />
        Gallery
      </h2>
      <div
        id="scrolling"
        className="about-2-images-wrap pt-20 -rotate-[3.95deg]"
      >
        {/* 2nd part */}
        <div
          style={{
            transform: `translate3d(${
              get * 0.3 - 15
            }%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
            transition: "all 0.7s ease-out",
          }}
          className="about-2-images-line"
        >
          {first.map((data, index) => (
            <img
              key={index}
              src={data.link}
              alt=""
              className="about-2-image-line-item border border-main rounded-xl bg-[#bdcd5f]"
            />
          ))}
        </div>

        {/* 2nd part */}
        <div
          style={{
            transform: `translate3d(${
              -get * 0.3 - 15
            }%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
            transition: "all 0.7s ease-out",
          }}
          className="about-2-images-line"
        >
          {second.map((data, index) => (
            <img
              key={index}
              src={data.link}
              alt=""
              className="about-2-image-line-item border border-main rounded-xl bg-[#bdcd5f]"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
