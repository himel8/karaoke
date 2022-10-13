import React from "react";
import Key from "../../../assets/img/key-bg.png";
import Img2 from "../../../assets/img/KTV-9.jpeg";
import Img1 from "../../../assets/img/KTVBAR.jpeg";
import Event from "./Event";

const aboutData = [
  {
    id: 1,
    title: "NIGHT OUT",
    desc: "Logical problems and puzzles. No physical effort . Only wit and observation. Everything is in your head.",
  },
  {
    id: 3,
    title: "SMOKE AREA",
    desc: "For the whole family and for your friends ! Your team - the key to a successful passing game . Trust and partner nayditie output.",
  },
  {
    id: 2,
    title: "music",
    desc: "Exactly 1 hour to find a way out and get out of the quest of the room , thinking all the fun and interesting puzzles on your heroic journey.",
  },
  {
    id: 4,
    title: "IMPRESSION",
    desc: "This is an unforgettable adventure in the exciting world of mystery. Only positive emotions and vivid feeling for the entire company.",
  },
];

const aboutDesc = [
  {
    id: 1,
    heading: "Welcome!",
    title: "MAKING THE BEST BEER POSSIBLE",
    desc: "Beciegast nveriti vitaesaert asety kertya aset aplicaboserde nerorem asipsumod itaut. Monsequntur magni dolores eonqui ratione voluptate msequise kertyias nesciunt, neque porro quisquam seridolore nuyfasas. Vertyu erauas aitaesa ertyasneo eniptaiades.",
    img: Img1,
  },
  {
    id: 2,
    heading: "Welcome!",
    title: "Wish you were here",
    desc: "Beciegast nveriti vitaesaert asety kertya aset aplicaboserde nerorem asipsumod itaut. Monsequntur magni dolores eonqui ratione voluptate msequise kertyias nesciunt, neque porro quisquam seridolore nuyfasas. Vertyu erauas aitaesa ertyasneo eniptaiades.",
    img: Img2,
  },
];

const About = () => {
  return (
    <section
      className="min-h-screen flex justify-center items-center flex-col gap-8 py-10"
      id="about"
    >
      <div>
        {aboutDesc.map((data, index) => (
          <div
            key={index}
            className={`flex justify-center items-center gap-24 md:flex-nowrap ${
              index % 2 === 0
                ? "flex-wrap-reverse md:flex-row"
                : "flex-wrap md:flex-row-reverse"
            }  w-[95%] md:w-[80%] mx-auto my-12`}
          >
            <div className="w-full md:w-1/2 flex flex-col gap-8 px-6">
              <h4 className="font-title text-6xl text-title ">
                {data.heading}
              </h4>
              <h3 className="font-primary text-4xl text-white uppercase font-medium tracking-wider">
                {data.title}
              </h3>
              <p className="font-text text-xl text-white ">{data.desc}</p>
            </div>
            <div className="w-full md:w-1/2">
              <img src={data.img} alt="" className="w-full" />
            </div>
          </div>
        ))}
      </div>

      {/* 2nd */}

      <div className="w-[95%] sm:w-[80%] mx-auto">
        <h4 className="font-title text-6xl text-title text-center my-8">
          Jz In Reality
        </h4>
        <div className="flex justify-center items-end gap-20 md:flex-nowrap flex-wrap px-4">
          <div className="flex flex-col gap-8">
            {aboutData.slice(0, 2).map((data, index) => (
              <div className="text-center md:text-right" key={index}>
                <h6 className="text-2xl font-primary text-title font-bold">
                  <span className="font-text">{data.id}. </span>
                  {data.title}
                </h6>
                <p className="text-xl font-text text-primary text-white">
                  {data.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="md:block hidden">
            <img src={Key} alt="" className="min-w-[5rem]" />
          </div>
          <div className="flex flex-col gap-8">
            {aboutData.slice(2, 4).map((data, index) => (
              <div key={index} className="text-center md:text-left">
                <h6 className="text-2xl font-primary text-title uppercase font-bold">
                  <span className="font-text">{data.id}. </span>
                  {data.title}
                </h6>
                <p className="text-xl font-text text-primary text-white">
                  {data.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* 3rd */}
        <Event />
      </div>
    </section>
  );
};

export default About;
