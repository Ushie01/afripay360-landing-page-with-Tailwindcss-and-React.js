import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as Lnk } from "react-scroll";
import Carousel, {CarouselItem} from './Carousel/Carousel';
import logo from "./assets/afripaylogo.png";
import afri0 from "./assets/afri0.jpg";
import bag from "./assets/bag.png";
import download from "./assets/download.svg";
import happy from "./assets/happy.png";
import remita from "./assets/REMITA-LOGO.jpeg";
import ekedc from "./assets/ekedc.jpg";
import moon from "./assets/moon.png";
import sun from "./assets/sun.png";
import pos1 from './assets/images/pos1.png';
import pos2 from './assets/images/pos2.png';
import pos3 from "./assets/images/pos3.png";
import pos4 from "./assets/images/pos4.png";


const Header = ({ user }) => {
  const [show, setShow] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [menu, setMenu] = useState(false);
  const images = [pos1, pos2, pos3, pos4, afri0];

  const myRef = useRef();
  const [visible, setVisible] = useState();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setVisible(entry.isIntersecting)
    })
    observer.observe(myRef.current);
  })


  const onHandleLight = () => {
    setShow((current) => !current);
    if (localStorage.getItem("color-theme")) {
      // If light, make dark and save in localstorage
      if (localStorage.getItem("color-theme") === "light") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      }
    } else {
      // If not in localstorage
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light");
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark");
      }
    }
  };

  const navToggle = (event) => {
    setMenu((current) => !current);
    event.currentTarget.classList.toggle("open");
  };


  return (
    <>
      <header name="/">
        <nav
          className={
            !visible
              ? `w-full hidden md:block pt-6 pb-6 bg-white top-0 z-50 sticky transition-all duration-700`
              : `w-full hidden md:block pt-6 pb-6 bg-white top-0 z-50 `
          }
        >
          <div className="flex flex-row items-center justify-between space-x-3 pl-32">
            {/* logo */}
            <Lnk
              to="/"
              smooth={true}
              offset={0}
              duration={1000}
              className="pointer"
            >
              <img src={logo} alt={logo} className="h-12 w-32" />
            </Lnk>
            {/* Menu */}
            <div
              className="flex flex-row items-center space-x-6 justify-center 
              text-gold font-sans font-bold text-md"
            >
              {/* <Link activeClass="active"
                to="test1"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onSetActive={this.handleSetActive}
              >
          Test 1
            </Link> */}
              <Lnk
                to="/"
                smooth={true}
                offset={0}
                duration={1000}
                className="hover:text-gray-500 pointer"
              >
                Home
              </Lnk>
              <Lnk
                to="About"
                smooth={true}
                offset={0}
                duration={1000}
                className="hover:text-gray-500 pointer"
              >
                About
              </Lnk>
              <Lnk
                to="Team"
                smooth={true}
                offset={0}
                duration={1000}
                className="hover:text-gray-500 pointer">
                Our Team
              </Lnk>
              <Lnk
                to="TryOut"
                smooth={true}
                offset={0}
                duration={1000}
                className="hover:text-gray-500 pointer">
                Try out
              </Lnk>
              <Lnk
                to="Contact"
                smooth={true}
                offset={0}
                duration={1000}
                className="hover:text-gray-500 pointer"
              >
                Contact
              </Lnk>
            </div>
            <div className="flex flex-row items-center justify-center space-x-5 pr-32">
              <button
                id="theme-toggle"
                onClick={() => setIsActive()}
                className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 
            focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg 
            text-sm p-1"
              >
                {isActive ? (
                  localStorage.getItem("color-theme") === "dark" ||
                  (!("color-theme" in localStorage) &&
                    window.matchMedia("(prefers-color-scheme: dark)")
                      .matches) ? (
                    <img
                      src={show ? moon : sun}
                      alt={show ? moon : sun}
                      id="theme-toggle-sun"
                      className={`w-9 h-9 p-1 rounded-sm`}
                      onClick={onHandleLight}
                    />
                  ) : (
                    <img
                      src={show ? sun : moon}
                      alt={show ? sun : moon}
                      id="theme-toggle-sun"
                      className={`w-9 h-9 p-1 rounded-sm`}
                      onClick={onHandleLight}
                    />
                  )
                ) : (
                  <img
                    src={show ? moon : sun}
                    alt={show ? moon : sun}
                    id="theme-toggle-sun"
                    className={`w-9 h-9 p-1 rounded-sm`}
                    onClick={onHandleLight}
                  />
                )}
              </button>
              <Link className="text-green-700 underline hover:text-green-700">
                Register
              </Link>
              <Link
                to="/Signin"
                className="px-8 py-2 ring-offset-2 ring ease-in duration-300 text-white 
                font-bold hover:font-bold bg-black border-yellow-300 rounded-lg
                shadow-md hover:text-yellow-300 hover:bg-white"
              >
                Sign-In
              </Link>
            </div>
          </div>
        </nav>

        <hr className="border bg-black" />
        {/* mobile */}

        <div className="p-3 bg-black rounded-t-sm w-96 m-auto justify-center block md:hidden rounded-md">
          {/* Hamburger menu */}
          <div className="flex flex-row items-center justify-center space-x-24 mx-auto rounded-sm">
            <div className="flex flex-row items-center justify-center">
              {/* <img
              src={searchIcon}
              alt={searchIcon}
              className="h-5 w-5"
              onClick={onSearch}
            /> */}
              <button
                id="theme-toggle"
                onClick={() => setIsActive()}
                className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 
                  focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg 
                  text-sm"
              >
                {isActive ? (
                  localStorage.getItem("color-theme") === "dark" ||
                  (!("color-theme" in localStorage) &&
                    window.matchMedia("(prefers-color-scheme: dark)")
                      .matches) ? (
                    <img
                      src={show ? moon : sun}
                      alt={show ? moon : sun}
                      id="theme-toggle-sun"
                      className={`w-16 h-7 p-1 rounded-sm`}
                      onClick={onHandleLight}
                    />
                  ) : (
                    <img
                      src={show ? sun : moon}
                      alt={show ? sun : moon}
                      id="theme-toggle-sun"
                      className={`w-16 h-7 p-1 rounded-sm`}
                      onClick={onHandleLight}
                    />
                  )
                ) : (
                  <img
                    src={show ? moon : sun}
                    alt={show ? moon : sun}
                    id="theme-toggle-sun"
                    className={`w-10 h-7 p-1 rounded-sm`}
                    onClick={onHandleLight}
                  />
                )}
              </button>
            </div>

            <Link to="/">
              <img src={logo} alt={logo} className="h-12 w-36" />
            </Link>
            {/* NavToggle  */}
            <div className="flex flex-row space-x-1 items-center justify-center">
              {/* {user ? (
                <Link
                  to="/"
                  className="text-md font-sans text-white font-extrabold hover:text-white"
                >
                  {`Hi, ${user}`}
                </Link>
              ) : (
                ""
              )} */}
              <button
                id="menu-btn"
                className="z-30 block focus:outline-none hamburger"
                onClick={navToggle}
              >
                <span className="hamburger-top"></span>
                <span className="hamburger-middle"></span>
                <span className="hamburger-bottom"></span>
              </button>
            </div>

            {menu ? (
              <div
                id="menu"
                className="fixed inset-0 flex flex-col items-center self-end px-6 py-1 pt-24 pb-4 
           text-white uppercase divide-y tracking-widest divide-gray-500 opacity-90
           bg-green-900 z-20 menu"
              >
                <Link to="/">
                  <img src={logo} alt={logo} className="h-14 w-32 -mt-20" />
                </Link>

                <div className="w-full py-3 text-center mt-20">
                  <Link to="/" className="block hover:text-red-500">
                    Home
                  </Link>
                </div>

                <div className="w-full py-3 text-center">
                  <Link to="/streams/new" className="block hover:text-red-500">
                    About
                  </Link>
                </div>

                <div className="w-full py-3 text-center">
                  <Link to="/" className="block hover:text-red-500">
                    Our Team
                  </Link>
                </div>

                <div className="w-full py-3 text-center">
                  <Link to="/" className="block hover:text-red-500">
                    Contact
                  </Link>
                </div>

                <div className="w-full py-3 text-center">
                  <Link to="/" className="block hover:text-red-500">
                    Try out
                  </Link>
                </div>

                <div className="w-full py-3 text-center">
                  {user ? (
                    <Link to="/sign-up" className="block hover:text-red-500">
                      Sign-Out
                    </Link>
                  ) : (
                    <Link to="/sign-up" className="block hover:text-red-500">
                      Login
                    </Link>
                  )}
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className={`mt-5 md:mt-0 w-96  m-auto md:w-full`} ref={myRef}>
          <div className="flex flex-row rounded shadow-lg bg-yellow-400 md:bg-white">
            <div className="relative flex space-y-5 md:space-y-10 flex-col p-5 md:p-6 md:pl-32 md:w-1/2">
              <div className="flex flex-row items-center justify-start space-x-2">
                <img src={bag} alt={bag} className="h-3 w-3 md:h-5 md:w-5" />
                <p className="text-gray-600 text-xs md:text-sm">
                  {" "}
                  start saving your money
                </p>
              </div>
              <p className="text-4xl  md:text-6xl font-bold md:mt-4">
                online payments <br />
                for <span className="text-gray-400">everyone</span>
              </p>

              <p className="mt-1 md:mt-4 text-xs md:text-sm md:font-bold md:text-gray-700">
                Make more sale by giving customers the ability to <br /> pay the
                way they love it.
              </p>
              <div className="flex flex-row items-center justify-start mt-3 md:mt-20 space-x-2 md:space-x-6">
                <Link
                  to="/sign-up"
                  className="px-3 py-2 md:px-8 md:py-4 bg-green-700 md:bg-green-400 shadow-lg rounded text-white text-md md:text-xl"
                >
                  Get Started
                </Link>
                <Link
                  to='https://play.google.com/store/apps/details?id=com.africanvogue.avg&hl=en&gl=US&pli=1'
                  className="flex flex-row space-x-2"
                >
                  <img
                    src={download}
                    alt={download}
                    className="w-4 h-4 md:w-5 md:h-5"
                  />
                  <p className="text-sm md:text-md text-green-800">
                    Download App
                  </p>
                </Link>
              </div>
              <div className="flex flex-col mt-2 md:mt-5">
                <p className="text-gray-400 text-xs">POPULAR PAYMENT METHOD</p>
                <div className="flex flex-row mt-2 md:mt-7 space-x-3">
                  <img src={ekedc} alt={ekedc} className="h-5 w-12" />
                  <img src={remita} alt={remita} className="h-5 w-12" />
                </div>
              </div>
              <img
                src={happy}
                alt={happy}
                className="absolute hidden mt-40 md:mt-0 mr-8 md:mr-0 md:block md:h-96 md:w-92 md:top-5 md:-right-40"
              />
            </div>
            <div className="hidden md:block w-1/2 md:w-1/2 bg-green-400 clip__path">
              <Carousel>
                {images.map((img) => (
                  <CarouselItem>
                    <div className="flex flex-row items-center justify-center mt-64 imgList">
                      <img src={img} alt={img} className="h-92 w-80  rounded" />
                    </div>
                  </CarouselItem>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <Carousel>
            {images.map((img) => (
              <CarouselItem>
                <div className="flex flex-row items-center justify-center mt-64 imgList">
                  <img src={img} alt={img} className="h-92 w-80 rounded" />
                </div>
              </CarouselItem>
            ))}
          </Carousel>
        </div>
      </header>
    </>
  );
};

export default Header;
