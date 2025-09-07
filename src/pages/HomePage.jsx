import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function HomePage() {
  const title = "شرکت فولاد درخشش حدید | CNC";
  const description =
    "شرکت فولاد درخشش حدید: ارائه دهنده خدمات CNC با بالاترین کیفیت.";
  return (
    <>
      {/* HomePage */}
      <Helmet>
        <title>{title.slice(0, 60)}</title>
        <meta name="description" content={description.slice(0, 160)} />
      </Helmet>
      <div className="aspect-w-16 aspect-h-9 mt-4 m-6  mx-4 sm:mx-6 p-3">
        <video
          controls // نمایش دکمه‌های پخش/توقف/صدا
          playsInline
          
          className="w-full h-full object-cover"
          preload="none"
          poster="/images/picvideo-home.png"
        >
          <source src="/images/video-logo-compress.mp4" type="video/mp4" />
          مرورگر شما از پخش ویدیو پشتیبانی نمی‌کند.
        </video>
        {/* <video
          autoPlay
          muted
         
          loop
          playsInline
          className="w-full h-full  object-cover "
          preload="none"
          poster="/images/picvideo-home.png"
        >
          <source src="/images/video-logo-compressed.mp4" type="video/mp4" />
          مرورگر شما از پخش ویدیو پشتیبانی نمی‌کند.
        </video> */}
      </div>
      <div className="flex flex-col items-center justify-center align-middle bg-white text-center px-4">
        {/* عنوان اصلی */}
        <h1 className="text-2xl sm:text-4xl font-bold text-black  justify-center align-middle mb-8">
          و برش لیزر فلزات CNC خدمات خم
        </h1>
        {/* پاراگراف معرفی */}
        <p
          className="text-base  sm:text-lg text-black text-center items-center justify-center align-middle  max-w-6xl mb-8"
          dir="rtl"
        >
          ما در فولاد درخشش حدید با تیمی ماهر، و بیش از ۱۰ سال تجربه در زمینه
          طراحی ماشین آلات صنعتی آماده‌ایم تا انواع خدمات طراحی، خمکاری و برش
          دقیق روی فلزات را با بالاترین کیفیت و دقت ارائه دهیم.
        </p>

        <p
          className="text-center text-base  sm:text-lg text-black leading-relaxed max-w-4xl mb-8 "
          dir="rtl"
        >
          با استفاده از دستگاه‌های پیشرفته، توانایی انجام پروژه‌هایی در مقیاس
          بزرگ صنعتی و خاص را داریم.ما با ارائه خدمات طراحی می‌توانیم طرح شما را
          از روی کاغذ به محصول تبدیل کنیم.
        </p>
      </div>
      <div className="h-screen w-full mt-8  ">
        <img
          loading="lazy"
          className="h-screen w-full "
          src="/images/one.JPG"
          alt="CNC"
        />
      </div>
      <div className=" h-300 mt-8  ">
        <div
          className="text-base sm:text-lg text-black max-w-4xl mx-auto px-4 py-8"
          dir="rtl"
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-6 text-gray-800  pb-2 w-fit">
            خدمات ما
          </h2>
          <p className="leading-relaxed text-justify">
            {" "}
            مجموعه ما ارائه‌دهنده خدمات متنوع صنعتی از جمله برش لیزر فلزات تا
            ضخامت ۳۰ میلی‌متر و طول ۷ متر می‌باشد، که با قابلیت ⚡️برش
            آلومینیوم⚡️ نیز همراه است. همچنین خدمات برش لیزر سطحی برای پروفیل،
            لوله و ناودانی، خم CNC شش‌محوره، حکاکی فلزات، و طراحی و ساخت تجهیزات
            و ماشین‌آلات صنعتی از دیگر توانمندی‌های ماست که با دقت و کیفیت بالا
            انجام می‌پذیرد.
          </p>
        </div>

        <br />
      </div>

      <div
        className="part-4 flex flex-col lg:flex-row bg-white h-auto lg:h-[60vh] justify-center px-4 sm:px-8 lg:px-16 mb-16"
        data-aos="fade-left"
        data-aos-delay="0"
      >
        <div
          className="part4-pic w-full lg:w-1/2 h-64 sm:h-80 lg:h-full mb-6 lg:mb-0"
          data-aos="fade-left"
          data-aos-delay="1000"
        >
          <video
            controls // نمایش دکمه‌های پخش/توقف/صدا
            playsInline
          
            poster="/images/picvideo-home.png"
            preload="none"
            className="w-full h-full object-cover"
          >
            <source src="/images/videohomepage-compress.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div
          className="part4-text1 w-full lg:w-1/2 flex flex-col justify-center pr-0 lg:pr-12"
          data-aos="fade-left"
          data-aos-delay="0"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 text-right">
            خمکاری <span dir="ltr">CNC</span> شش محور
          </h2>

          {/* <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 text-right">
            خمکاری CNC شش محور
          </h2> */}
          <p className="text-right leading-loose px-2 sm:px-4 lg:px-0">
            خمکاری با دستگاه ۶ محور، این امکان را به ما می‌دهد که قطعات با
            پیچیدگی‌های بالا را با دقت مطلوب به محصول تبدیل نماییم
          </p>
        </div>
      </div>
      {/* بخش part-5 */}
      <div
        className="part-5 flex flex-col-reverse lg:flex-row bg-white h-auto lg:h-[60vh] justify-center px-4 sm:px-8 lg:px-16 my-16"
        data-aos="fade-right"
        data-aos-delay="0"
      >
        {/* متن سمت راست */}
        <div className="part5-text1 w-full lg:w-1/2 flex flex-col justify-center pr-0 lg:pr-12 mt-6 lg:mt-0">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 text-right">
            دستگاه برش لیزر فایبر
          </h2>
          <p className="text-right leading-loose px-2 sm:px-4 lg:px-0">
            برش لیزر تا ضخامت ۳۰ میلیمتر و طول ۷ متر، همچنین قابلیت برش لیزر فلز
            آلومینیوم. خدمات رسانی بدون وقفه در ۲۴ ساعت هر روز هفته و سه شیفت
            کاری
          </p>
        </div>

        {/* ویدیو سمت چپ */}
        <div
          className="part5-pic w-full lg:w-1/2 h-64 sm:h-80 lg:h-full"
          data-aos="fade-left"
          data-aos-delay="1000"
        >
          <video
           controls
          
           
            playsInline
            className="w-full h-full object-cover "
            preload="none"
            poster="/images/picvideo-home.png"
          >
            <source
              src="/images/video2-homepage-compress.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
}

export default HomePage;
