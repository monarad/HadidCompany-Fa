import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";

function NavbarTest({ children }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  // Scroll event for sticky/shrink effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Persian menu items (RTL order)
  const menuItems = [
    "صفحه اصلی",
    "محصولات",
    "گالری",
    "درباره ما",
     "کارفرمایان",
      "تماس با ما",
  ];

  // Mobile drawer (RTL)
  const Drawer = () => (
    <div className="fixed inset-0 z-50 bg-gray-800 bg-opacity-60 flex justify-end" dir="rtl">
      <div className="bg-white w-64 h-full p-6 shadow-lg animate-slideInRight relative">
        <button
          className="absolute left-4 top-4 text-gray-500 hover:text-red-500 text-2xl"
          onClick={() => setDrawerOpen(false)}
          aria-label="بستن منو"
        >
          ×
        </button>
        <ul className="mt-12 space-y-4">
          {menuItems.map((label, index) => (
            <li key={index}>
              <Link
                to={`/${label}`}
                className={`block py-2 px-4 rounded-lg text-right transition-colors duration-200 font-medium ${
                  activeIndex === index ? " text-yellow-500" : "hover:bg-gray-100"
                }`}
                onClick={() => {
                  setActiveIndex(index);
                  setDrawerOpen(false);
                }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <>
      {/* Top bar (contact/social) - hidden on mobile */}
      <div className="  hidden md:flex   bala h-14 text-slate-500 text-xs bg-custom-gray    border-t-4 border-green-color border-b border-b-gray-200  items-center max-w-screen-xl mx-auto px-4 ">
        <button className="h-8 w-32 m-20  bg-green-color rounded p-2 text-xs text-black font-bold  hover:bg-yellow-300">
          <a
            href="https://t.me/foulad_fdh"
            target="_blank"
            rel="noopener noreferrer"
          >
            تماس با ما
          </a>
        </button>

        {/* خط جداکننده بین تلگرام و اینستاگرام */}
        <div className="border-l border-gray-300 h-6"></div>

        <div className="flex justify-center items-center space-x-10 space-x-reverse">
          {/* telegram */}
          <div className="mr-10 ml-10">
            <a
              href="https://t.me/foulad_fdh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="[&>svg]:h-5 [&>svg]:w-5 [&>svg]:fill-[#99a9b5]">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                  <path d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z" />
                </svg>
              </span>
            </a>
          </div>

          {/* خط جداکننده بین تلگرام و اینستاگرام */}
          <div className="border-l border-gray-300 h-6"></div>

          {/* //instagramm */}
          <div>
            <a
              href="https://instagram.com/@foulad.derakhshesh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="[&>svg]:h-5 [&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                </svg>
              </span>
            </a>
          </div>

          {/* خط جداکننده بین تلگرام و اینستاگرام */}
          <div className="border-l border-gray-300 h-6"></div>

          <p className="flex p-2 m-6  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-4"
            >
              <path d="M10.5 18.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" />
              <path
                fillRule="evenodd"
                d="M8.625.75A3.375 3.375 0 0 0 5.25 4.125v15.75a3.375 3.375 0 0 0 3.375 3.375h6.75a3.375 3.375 0 0 0 3.375-3.375V4.125A3.375 3.375 0 0 0 15.375.75h-6.75ZM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 0 1 7.5 19.875V4.125Z"
                clipRule="evenodd"
              />
            </svg>
            <a className="mr-9 ml-1" href="#">
              0918-362-5065
            </a>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-4"
            >
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                clipRule="evenodd"
              />
            </svg>
            <a className="ml-1" href="#">
              086 3413 1104
            </a>
          </p>
          <p className="flex p-2 m-6 ">
            <span>اراک، شهرک صنعتی حاجی آباد، خیابان حدید</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5 ml-1 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
          </p>
        </div>
      </div>

      {/* Main sticky header */}
      <header
        className={`w-full z-50 bg-white bg-opacity-95 sticky top-0 transition-all duration-300 ease-in-out ${
          scrolled
            ? "shadow-md border-b border-gray-200"
            : "shadow-none border-b-0"
        }`}
        style={{ direction: "rtl" }}
      >
        <div
          className="max-w-screen-xl mx-auto flex items-center justify-between md:justify-center px-4 md:px-8 transition-all duration-300 h-20 md:h-24"
          style={{ height: scrolled ? "64px" : "88px" }}
        >
          {/* Logo (right in RTL) */}
          <Link
            to="/home"
            className=" m-4 flex-shrink-0 flex items-center md:ml-10"
          >
            <img
              src="/images/logo2.png"
              alt="Logo"
              loading="lazy"
              className={`transition-all duration-300 ease-in-out ${
                scrolled ? "h-12 w-12" : "h-20 w-20"
              }`}
              style={{ minWidth: scrolled ? "48px" : "80px" }}
            />
          </Link>
          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <IconButton onClick={() => setDrawerOpen(true)}>
              <MenuIcon style={{ color: "#364153", margin: "16px" }} />
            </IconButton>
          </div>
          {/* Desktop menu (left in RTL) */}
          <nav className="hidden md:flex items-center justify-center gap-2 ">
            <ul className="flex  items-center justify-center gap-2">
              {menuItems.map((label, index) => (
                <li key={index}>
                  <Link
                    to={`/${label}`}
                    className={`inline-block px-4 py-2  font-semibold transition-colors duration-200 border-b-2 ${
                      activeIndex === index
                        ? "border-yellow-500 text-yellow-500 "
                        : "border-transparent  hover:text-green-color hover:bg-gray-50"
                    }`}
                    onClick={() => setActiveIndex(index)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        {/* Mobile drawer */}
        {drawerOpen && <Drawer />}
      </header>
      <div>{children}</div>
    </>
  );
}

export default NavbarTest;
