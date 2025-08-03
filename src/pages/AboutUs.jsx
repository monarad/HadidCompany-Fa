
import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import img1 from '../images/one.JPG'; // مسیر تصویر اول

import img2 from '../images/two.JPG';
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import Icon from "@mui/material/Icon";
const slides = [img1, img2];

function AboutUs() {
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
      <div className="h-300   mt-4 m-6  ">
        <video
          className="h-96 w-full pl-6 pr-6 pb-3 object-cover "
          controls
          autoPlay
          poster="./src/images/picVideo-home.png" // این عکس قبل از پخش نمایش داده میشه
        >
          <source src="./src/images/video-2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* <video className="h-full w-full  rounded-lg pl-6 pr-6" controls autoPlay muted>
          <source src="./src/images/video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}

        <div className="flex flex-col items-center justify-center align-middle bg-white text-center px-4">
          {/* عنوان اصلی */}
          <h1 className="text-2xl sm:text-4xl font-bold text-stone-600  justify-center align-middle mb-8">
            سریع و قابل اعتماد در اراک CNC خدمات برش
          </h1>
          {/* پاراگراف معرفی */}
          <p
            className="text-base sm:text-lg text-black text-center items-center justify-center align-middle  max-w-6xl mb-8"
            dir="rtl"
          >
            ما در فولاد درخشش حدید با بیش از ۱۰ سال تجربه در زمینه طراحی و اجرای
            پروژه‌های برش
            <span dir="ltr" className="mx-1 ">
              CNC
            </span>
            آماده‌ایم تا انواع خدمات برش دقیق روی متریال‌هایی نظیر فلز، چوب،
            پلکسی و
            <span dir="ltr" className="mx-1 ">
              MDF
            </span>
            را با بالاترین کیفیت و دقت ارائه دهیم. با استفاده از دستگاه‌های
            پیشرفته، توانایی انجام پروژه‌هایی در مقیاس صنعتی و خاص را داریم.
          </p>

          {/* پاراگراف معرفی */}
          {/* <p className="text-base sm:text-lg text-black max-w-4xl mb-8">
          با بیش از ۱۰ سال تجربه در حوزه طراحی و تولید (CAD و CAM)، مجموعه CNC
          Projects برای ارائه خدمات ساده و در دسترس برش CNC به تمام صنایع شکل
          گرفته است.
        </p> */}
          <p
            className="text-center text-base sm:text-lg text-black leading-relaxed max-w-4xl mb-8 "
            dir="rtl"
          >
            با بیش از ۱۰ سال تجربه در حوزه طراحی و تولید (
            <span dir="ltr" className="mx-1 ">
              CAD
            </span>
            و
            <span dir="ltr" className="mx-1 ">
              CAM
            </span>
            )، مجموعه
            <span dir="ltr" className="mx-1 ">
              CNC Projects
            </span>
            برای ارائه خدمات ساده و در دسترس برش
            <span dir="ltr" className="mx-1 ">
              CNC
            </span>
            به تمام صنایع شکل گرفته است.
          </p>

          {/* پاراگراف معرفی */}
          <p
            className="text-center text-base sm:text-lg text-black leading-relaxed max-w-3xl mx-auto px-4"
            dir="rtl"
          >
            چه فایل
            <span dir="ltr" className="mx-1">
              CAD
            </span>
            آماده داشته باشید یا فقط یک طرح دستی، ما با ارائه خدمات طراحی
            <span dir="ltr" className="mx-1 ">
              CAD
            </span>
            می‌توانیم طرح شما را از روی کاغذ به ماشین منتقل کنیم.
          </p>

          {/* <p className="text-base sm:text-lg text-black max-w-3xl">
          چه فایل CAD آماده داشته باشید یا فقط یک طرح دستی، ما با ارائه خدمات
          طراحی CAD می‌توانیم طرح شما را از روی کاغذ به ماشین منتقل کنیم.
        </p> */}
        </div>

        <section className="bg-yellow-400">
          <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row justify-between items-start gap-8">
            {/* بخش ساعات کاری */}
            <div className="flex items-start gap-4">
              <div className="text-white text-6xl">⏰</div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  WORKING HOURS
                </h2>
                <p className="text-white">
                  Monday – Friday: 09:00 – 18:00 Hrs (Phone until 17:00 Hrs)
                </p>
                <p className="text-white">Saturday: Closed</p>
                <p className="text-white">Sunday: Closed</p>
              </div>
            </div>

            {/* بخش آدرس و تماس */}
            <div className="flex items-start gap-4">
              <div className="text-white text-6xl">🏢</div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  WE ARE HERE
                </h2>
                <p className="text-white">
                  Unit 12 Forest Business Park Argall Avenue London E10 7FB
                </p>
                <p className="text-white">Phone: +44 0208 521 5533</p>
                <p className="text-white">Email: sales@cncprojects.co.uk</p>
              </div>
            </div>
          </div>

          {/* نقشه گوگل */}
          <div className="w-full">
            <iframe
              title="Company Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.8352503679473!2d-0.00632552335977934!3d51.57654247182304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a7d361dc0a3f%3A0xe1737e7d1a3bb2e6!2sCNC%20Projects!5e0!3m2!1sen!2suk!4v1722000000000!5m2!1sen!2suk"
              width="100%"
              height="450"
              allowFullScreen=""
              loading="lazy"
              className="border-0"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs