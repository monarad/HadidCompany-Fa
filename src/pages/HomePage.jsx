import React, { useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {
 

  return (
    <>
      {/* HomePage */}
      <div className="h-300 mt-4 m-6  mx-4 sm:mx-6 ">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-auto pl-6 pr-6 pb-3 object-cover "
          poster="./src/images/picVideo-home.png"
        >
          <source
            src="./src/images/video-logo-compressed.mp4"
            type="video/mp4"
          />
          مرورگر شما از پخش ویدیو پشتیبانی نمی‌کند.
        </video>
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
        <img className="h-screen w-full " src="./src/images/one.JPG" alt="" />
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
          {/* <ul className=" sm:grid-cols-2 ">
            <li className=" p-2   ">
              <p>
                برش لیزر فلزات تا ضخامت ۳۰ میلیمتر - طول ۷ متر
                <br />
                <span className="text-sm p-2 text-gray-600">
                  ⚡️با قابلیت برش آلومینیوم⚡️
                </span>
              </p>
            </li>
            <li className="p-2 ">
              <p>برش لیزر سطحی پروفیل، لوله و ناودانی</p>
            </li>
            <li className=" p-2">
              <p>ارائه خدمات خم CNC شش محور</p>
            </li>
            <li className="p-2 ">
              <p>ارائه خدمات حک فلزات</p>
            </li>
            <li className="   p-2 ">
              <p>طراحی و ساخت تجهیزات و ماشین‌آلات صنعتی</p>
            </li>
          </ul> */}
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
            autoPlay
            muted
            loop
            playsInline
            poster="./src/images/picVideo-home.png"
            className="w-full h-full object-cover"
          >
            <source src="./src/images/video1homepage.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div
          className="part4-text1 w-full lg:w-1/2 flex flex-col justify-center pr-0 lg:pr-12"
          data-aos="fade-left"
          data-aos-delay="0"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 text-right">
            خمکاری CNC شش محور
          </h2>
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
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover "
            poster="./src/images/picVideo-home.png"
          >
            <source src="./src/images/video2-Homepage.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      
      {/* <div
        className="part-4 flex bg-white h-80  justify-center ml-16 mr-16"
        data-aos="fade-left"
        data-aos-delay="0"
      >
        <div
          className="part4-pic h-full w-1/2"
          data-aos="fade-left"
          data-aos-delay="1000"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="./src/images/picVideo-home.png"
            className="h-full w-full object-cover  "
          >
            <source src="./src/images/video1homepage.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div
          className="part4-text1 w-1/2 h-full bg-white pr-12  flex flex-col  "
          data-aos="fade-left"
          data-aos-delay="0"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mt-20 mb-10 text-right">
            خمکاری CNC شش محور
          </h2>

          <p className="part4-lorem text-right ml-20 leading-loose">
            خمکاری با دستگاه ۶ محور، این امکان را به ما می‌دهد که قطعات با
            پیچیدگی‌های بالا را با دقت مطلوب به محصول تبدیل نماییم
          </p>
        </div>
      </div>
      <div
        className="part-5 flex bg-white h-80 mx-auto my-40 justify-center ml-16 mr-16"
        data-aos="fade-right"
        data-aos-delay="0"
      >
       

        <div className="part5-text1 w-1/2 h-full bg-white  mr-20">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mt-20 mb-10 text-right">
            دستگاه برش لیزر فایبر
          </h2>
          <p className="part5-lorem text-right leading-loose">
            برش لیزر تا ضخامت ۳۰ میلیمتر و طول ۷ متر، همچنین قابلیت برش لیزر فلز
            آلومینیوم. خدمات رسانی بدون وقفه در ۲۴ ساعت هر روز هفته و سه شیفت
            کاری
          </p>
        </div>
      
        <div className="part5-pic h-full w-1/2">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-auto pl-6 pr-6 pb-3 object-cover"
            data-aos="fade-left"
            data-aos-delay="1000"
            poster="./src/images/picVideo-home.png"
          >
            <source src="./src/images/video2-Homepage.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div> */}
    </>
  );
}

export default HomePage;
