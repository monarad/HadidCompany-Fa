import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
     const [activeIndex, setActiveIndex] = useState(null);
     const [click, setClick] = useState(false);
     const handleClick = () => setClick(!click);
     const closeMobileMenu = () => setClick(false);

     const handleLinkClick = (index) => {
       setActiveIndex(index);
       closeMobileMenu();
     };

    return (
      <>
        {/* <nav className="h-50 relative   bg-white  sticky top-0 z-50 mb-5"> */}
        <nav className="h-50    bg-white   z-50 mb-5 ">
          <div className=" bala h-14 text-slate-500 text-sm bg-custom-gray mb-5 border-t-4 border-green-color border-b border-b-gray-300 flex justify-between items-center max-w-screen-xl mx-auto px-4">
            <button className="h-8 w-32 m-20 bg-green-color rounded p-2 text-xs text-black font-bold  hover:bg-yellow-300">
              تماس با ما
            </button>

            {/* telegram */}
            <div className="mr-2">
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

            <p>اراک، شهرک صنعتی حاجی آباد، خیابان حدید</p>
            <p className="flex p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-4"
              >
                <path d="M10.5 18.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" />
                <path
                  fill-rule="evenodd"
                  d="M8.625.75A3.375 3.375 0 0 0 5.25 4.125v15.75a3.375 3.375 0 0 0 3.375 3.375h6.75a3.375 3.375 0 0 0 3.375-3.375V4.125A3.375 3.375 0 0 0 15.375.75h-6.75ZM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 0 1 7.5 19.875V4.125Z"
                  clip-rule="evenodd"
                />
              </svg>
              <a href="#">0918-362-5065</a>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-4"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                  clip-rule="evenodd"
                />
              </svg>
              <a href="#">086 3413 1104</a>
            </p>
            <p>
              <a className="m-20" href=" https://eitaa.com/FDH_dxf">
                کانال ایتا (طرح های برش لیزر در و نرده)
              </a>
            </p>
          </div>

          <div className="flex bg-white paeen justify-between  sticky top-0 z-50 text-lg font-medium text-center text-gray-500 ">
            <ul
              className={`flex flex-wrap ml-40 mt-10 -mb-px  ${
                click ? "active" : ""
              }`}
            >
              {[
                "محصولات",
                "نمایندگی ها",
                "رزومه",
                "درباره ما",
                "پیمانکاری",
                "کارفرمایان",
                "صفحه اصلی",
              ].map((label, index) => (
                <li key={index} className="me-2">
                  <Link
                    to={`/${label}`}
                    className={`inline-block cursor-pointer p-4 border-b-2 ${
                      activeIndex === index
                        ? "border-yellow-500 text-yellow-500"
                        : "border-transparent hover:text-green-color"
                    }`}
                    onClick={() => handleLinkClick(index)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link to={"/home"}>
              <img
                className="h-28 w-28 mr-40 mt-5"
                src="./src/images/logo2.png"
                alt="image description"
              />
            </Link>
          </div>
        </nav>
      </>

      // <>
      //   <nav className=" h-50  bg-white  top-0 z-50 mb-5">
      //     <div className=" h-14 text-slate-500 text-sm bg-custom-gray mb-5   border-t-4 border-green-color  border-b border-b-gray-300 flex   justify-between items-center max-w-screen-xl mx-auto px-4">
      //       <button className="h-8 w-28 m-20 bg-green-color hover:bg-yellow-300 rounded p-2 text-xs text-black font-bold">
      //         <a>تماس با ما</a>
      //       </button>
      //       <p className="">
      //         Unit 12 Forest Business Park Argall Avenue London E10 7FB
      //       </p>
      //       <p>
      //         <a href="tel:020 8521 5533">020 8521 5533</a>
      //       </p>
      //       <p>
      //         <a className="m-20" href="mailto:sales@cncprojects.co.uk">
      //           sales@cncprojects.co.uk
      //         </a>
      //       </p>
      //     </div>

      //     <div className="  flex justify-between  text-sm font-medium text-center text-gray-500  ">
      //       <ul
      //         className={
      //           click
      //             ? "flex flex-wrap ml-40 mt-10 -mb-px active"
      //             : "flex flex-wrap ml-40 mt-10 -mb-px"
      //         }
      //       >
      //         <li className="inline-block cursor-pointer p-4 border-b-2 border-transparent  hover:text-green-color">
      //           <Link to="/" onClick={closeMobileMenu}></Link>
      //           {/* <a
      //             href="#"
      //             className="inline-block cursor-pointer p-4 border-b-2 border-transparent  hover:text-green-color"
      //           > */}
      //             محصولات
      //           {/* </a> */}
      //         </li>
      //         <li className="me-2">
      //           <a
      //             href="#"
      //             className="inline-block cursor-pointer p-4 pb-6 text-green-color border-b-2 border-green-color  active "
      //             aria-current="page"
      //           >
      //             نمایندگی ها
      //           </a>
      //         </li>
      //         <li className="me-2">
      //           <a
      //             href="#"
      //             className="inline-block cursor-pointer p-4 border-b-2 border-transparent  hover:text-green-color "
      //           >
      //             رزومه
      //           </a>
      //         </li>
      //         <li className="me-2">
      //           <a
      //             href="#"
      //             className="inline-block cursor-pointer p-4 border-b-2 border-transparent  hover:text-green-color  "
      //           >
      //             درباره ما
      //           </a>
      //         </li>
      //         <li>
      //           <a className="inline-block cursor-pointer p-4 border-b-2 border-transparent    hover:text-green-color   ">
      //             پیمانکاری
      //           </a>
      //         </li>
      //         <li>
      //           <a className="inline-block cursor-pointer p-4 border-b-2 border-transparent    hover:text-green-color   ">
      //             کارفرمایان
      //           </a>
      //         </li>
      //       </ul>
      //       <img
      //         className="h-28 w-28 mr-40  mt-5"
      //         src="./src/images/logo2.png"
      //         alt="image description"
      //       ></img>
      //     </div>
      //   </nav>
      // </>
    );
};

export default Navbar;
