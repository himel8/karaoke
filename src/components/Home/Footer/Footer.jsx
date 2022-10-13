import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsTelephoneFill,
  BsTwitter,
} from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import Img from "../../../assets/img/logo.png";

const Footer = () => {
  return (
    <section className="bg-heroBg ">
      <div className="bg-hero text-white">
        <div className="py-10 w-[95%] sm:w-[80%] mx-auto flex justify-center items-center gap-20 flex-wrap">
          {/* 1st div */}
          <div>
            <div>
              <img src={Img} alt="" />
            </div>
            <h6 className="text-2xl text-title font-primary font-extrabold">
              KARAOKE LOUNGE
            </h6>
          </div>

          {/* 2nd div */}
          <div className="flex flex-col gap-6">
            <div>
              <h6 className="text-2xl font-primary font-extrabold text-title">
                HAPPY HOUR
              </h6>
              <p className="text-xl font-text font-extrabold">
                3:00 PM TO 8:00 PM
              </p>
            </div>
            <div>
              <h6 className="text-2xl font-primary font-extrabold text-title">
                LES SOIRÉES
              </h6>
              <p className="text-xl font-text font-extrabold">
                8:00 PM TO 3:00 AM
              </p>
            </div>
          </div>

          {/* 3rd div */}
          <div>
            <h6 className="text-2xl font-primary font-extrabold text-title">
              Quick Links
            </h6>
            <div className="flex flex-col gap-2">
              <a
                href="#!"
                className="text-xl font-text font-extrabold hover:underline"
              >
                About us
              </a>
              <a
                href="#!"
                className="text-xl font-text font-extrabold hover:underline"
              >
                Contact us
              </a>
              <a
                href="#!"
                className="text-xl font-text font-extrabold hover:underline"
              >
                Tearms & Conditions
              </a>
              <a
                href="#!"
                className="text-xl font-text font-extrabold hover:underline"
              >
                Privacy Policy
              </a>
            </div>
          </div>

          {/* 4th div */}
          <div className="flex flex-col gap-6">
            <div>
              <h6 className="text-2xl font-primary font-extrabold mb-1 text-title">
                Réservation
              </h6>
              <a href="tel:514-661-1695" className="hover:underline">
                <div className="flex gap-2 items-center">
                  <BsTelephoneFill className="text-2xl hover:text-main hover:scale-125 transform transition-all ease-in-out duration-700" />
                  <p className="text-2xl font-text font-extrabold">
                    514-661-1695
                  </p>
                </div>
              </a>
            </div>
            <div>
              <h6 className="text-2xl font-primary font-extrabold mb-1 text-title">
                Social Links
              </h6>
              <div className="flex gap-4">
                <a
                  href="#!"
                  className="text-2xl hover:text-main hover:scale-125 transform transition-all ease-in-out duration-700"
                >
                  <BsFacebook />
                </a>
                <a
                  href="#!"
                  className="text-2xl hover:text-main hover:scale-125 transform transition-all ease-in-out duration-700"
                >
                  <BsTwitter />
                </a>
                <a
                  href="#!"
                  className="text-2xl hover:text-main hover:scale-125 transform transition-all ease-in-out duration-700"
                >
                  <BsInstagram />
                </a>
                <a
                  href="#!"
                  className="text-2xl hover:text-main hover:scale-125 transform transition-all ease-in-out duration-700"
                >
                  <FaTiktok />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
