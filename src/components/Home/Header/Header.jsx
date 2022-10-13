import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { FiX } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-scroll";

import logo from "../../../assets/img/logo.png";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const changeBgColor = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  window.addEventListener("scroll", changeBgColor);

  const navItems = [
    {
      name: "Home",
      link: "home",
      offcet: -100,
    },
    {
      name: "About",
      link: "about",
      offcet: -150,
    },
    {
      name: "Our Category",
      link: "ourCategory",
      offcet: -120,
    },
    {
      name: "Gallery",
      link: "gallery",
      offcet: -100,
    },
    {
      name: "Opening Time",
      link: "times",
      offcet: -150,
    },
  ];

  // [#f27200]

  return (
    <>
      <header
        // className={`z-[100] w-full ${
        //   isVisible
        //     ? "bg-[#d43538] fixed shadow-2xl"
        //     : "bg-transparent absolute"
        // } duration-500`}
        className="z-[100] w-full bg-transparent absolute duration-500"
      >
        <div className="py-6 px-4 lgC:w-[80%] sm:w-[90%] w-[98%] m-auto">
          <div
            className={`text-white font-primary font-semibold flex justify-between items-center`}
          >
            <Link to="home">
              <div className="md:w-[16rem] sm:w-[14rem] w-[8rem] cursor-pointer flex ">
                <img src={logo} alt="" />
              </div>
            </Link>
            <div className="flex items-center gap-6">
              <div className="hidden navBreak2:block">
                <div className="flex items-center gap-8">
                  {navItems.map((item, index) => (
                    <Link
                      key={index}
                      className="navItemDesing navItem relative cursor-pointer"
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={item.offcet}
                      duration={500}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <a
                  href="tel:514-661-1695"
                  className="hover:underline hover:text-simple hover:scale-[1.05] transform transition-all ease-in-out duration-700"
                >
                  <div className="flex gap-2 items-center">
                    <BsTelephoneFill className=" text-lg md:text-2xl " />
                    <p className="text-lg md:text-2xl font-text font-extrabold">
                      514-661-1695
                    </p>
                  </div>
                </a>
                <button
                  className={`${
                    !isVisible ? "text-white" : "text-primary"
                  } sm:text-4xl text-3xl navBreak2:hidden`}
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                  <GiHamburgerMenu className="" />
                </button>
              </div>
            </div>
          </div>
          {/* <div className="navBreak2:hidden flex justify-between items-center gap-8">
            <Link to="home">
              <div className="font-courgette text-white text-4xl cursor-pointer">
                The Zoo
              </div>
            </Link>
            <button
              className={`text-white text-4xl`}
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <i class="fa-solid fa-bars"></i>
            </button>
          </div> */}
        </div>
      </header>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="nav"
          className="fixed inset-0 z-[500] flex navBreak2:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex w-full max-w-xs flex-1 flex-col bg-[#d43538] pt-5 pb-4">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex h-10 w-10 items-center justify-center rounded-full text-white text-3xl"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <FiX className="text-white" />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex flex-shrink-0 w-full justify-center px-4">
                <h2
                  className="text-2xl font-bold text-center w-[80%]"
                  onClick={() => setSidebarOpen(false)}
                >
                  <img src={logo} alt="" />
                </h2>
              </div>
              <nav
                className="mt-5 h-full flex-shrink-0 divide-y divide-cyan-800 overflow-y-auto"
                aria-label="Sidebar"
              >
                <div className="space-y-1 p-6 flex flex-col gap-4 font-primary font-medium text-lg">
                  {navItems.map((item, index) => (
                    <Link
                      key={index}
                      className="navItemDesing text-xl navItem block relative cursor-pointer text-white"
                      activeClass="active activeMobile"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={item.offcet}
                      duration={500}
                      onClick={() => setSidebarOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </nav>
            </div>
          </Transition.Child>
          <div className="w-14 flex-shrink-0" aria-hidden="true">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default Header;
