import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import img1 from "/images/one.JPG"; // مسیر تصویر اول

import img2 from "/images/two.JPG";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import Icon from "@mui/material/Icon";
import { Helmet } from "react-helmet-async";


const slides = [img1, img2];

function AboutUs() {
  const title = "درباره ما |برش فلزات ";
  const description =
   "ادرس دفتر مرکزی: استان مرکزی، شهرستان اراک، شهرک صنعتی حاجی آباد، انتهای خیابان حدید";
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <>
      <Helmet>
        <title>{title.slice(0, 60)}</title>
        <meta name="description" content={description.slice(0, 160)} />
      </Helmet>
      <div className="h-auto  mt-4 m-6  ">
        <video
         controls
          playsInline
          className="w-full h-auto pl-6 pr-6 pb-3 object-cover "
          preload="none"
          poster="/images/aboutus.png"
          title="About Us Video"
          aria-label="معرفی شرکت فولاد درخشش حدید"
          // className="h-96 w-full pl-6 pr-6 pb-3 object-cover "
        >
          <source src="/images/video-aboutus-compress.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="w-full h-auto mt-10 mb-10 flex flex-col items-center justify-center align-middle">
          <h1 className="text-4xl text-gray-800  font-bold ">درباره ما </h1>
          <h6 className="text-2xl text-gray-700  font-normal mt-8">
            شرکت فولاد درخشش حدید
          </h6>
          <p className="mt-8 text-center text-gray-800 px-9 leading-loose">
            آدرس کارخانه: استان مرکزی٬ شهرستان اراک٬ شهرک صنعتی حاجی آباد٬
            انتهای خیابان حدید
          </p>

          <ul className="items-start text-gray-800 border border-[#008884] p-2 space-y-2 mt-4  hover:bg-[#008884]">
            <li className="flex justify-between gap-4">
              <span>کدپستی : 3819957331</span>
              <span>تلفکس : 08634131249</span>
            </li>
            <li className="flex justify-between gap-4">
              <span>تلفن : 08634131104</span>
              <span>موبایل : 09183625065</span>
            </li>
          </ul>

          <p className="mt-4 text-center text-gray-800 px-9 leading-loose">
            آدرس دفتر فروش: استان مرکزی٬ شهرستان اراک٬ انتهای خیابان
            جوادالائمه(جهرم) ٬ نرسیده به میدان نور
          </p>
          <p></p>
          <p></p>
        </div>

        <section className="bg-[#008884]">
          <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row justify-between items-start gap-8">
            {/* بخش ساعات کاری */}
            <div className="flex items-start gap-4">
              <AccessAlarmIcon style={{ color: "white", fontSize: "100px" }} />
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  WORKING HOURS
                </h2>
                <p className="text-white">Monday – Friday : Open 24Hrs</p>
                {/* <p className="text-white">Saturday: Closed</p>
                <p className="text-white">Sunday: Closed</p> */}
              </div>
            </div>

            {/* بخش آدرس و تماس */}
            <div className="flex items-start gap-4">
              <LocationCityIcon style={{ color: "white", fontSize: "100px" }} />
              <div>
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  WE ARE HERE
                </h2>
                <p className="text-white">
                  Hadid St , Hajiabad Industrial Zone , Arak , Markazi Province
                  , Iran
                </p>
                <p className="text-white">Phone: +98 86 3413 1104</p>
                <p className="text-white">Mobile: +98 918-362-5065</p>
              </div>
            </div>
          </div>

          {/* نقشه گوگل */}
          {/* <img
            src="/images/map.png"
            alt="Map"
            className="w-full h-full object-cover"
          /> */}
          <div className="w-full mt-8 h-full">
            <img src="/images/map.png" alt="Map" className="w-full h-full " />
          </div>
        </section>
      </div>
    </>
  );
}

export default AboutUs;
