import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
//import img1 from "../images/one.JPG"; // مسیر تصویر اول

//import img2 from "../images/two.JPG";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import Icon from "@mui/material/Icon";
import { Helmet } from "react-helmet-async";
import Map from "../components/Map";

const ContactUs = () => {
  const title = "راه ارتباطی| تماس با ما";
  const description =
    "برای ارتباط با ما می‌توانید از طریق فرم زیر اقدام کنید.";
  return (
    <>
      <Helmet>
        <title>{title.slice(0, 60)}</title>
        <meta name="description" content={description.slice(0, 160)} />
      </Helmet>
      <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
        <form
          className="w-full mt-16 mb-16 max-w-2xl bg-white shadow-md  p-6 space-y-4"
          dir="rtl"
        >
          {/* نام */}
          <div>
            <label htmlFor="name" className="block font-medium mb-1">
              نام*
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300  bg-gray-50 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="نام خود را وارد کنید"
            />
          </div>

          {/* ایمیل */}
          <div>
            <label htmlFor="email" className="block font-medium mb-1">
              ایمیل*
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300  bg-gray-50 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="ایمیل خود را وارد کنید"
            />
          </div>

          {/* تلفن */}
          <div>
            <label htmlFor="telephone" className="block font-medium mb-1">
              تلفن
            </label>
            <input
              type="tel"
              dir="rtl"
              id="telephone"
              className="w-full border border-gray-300 bg-gray-50 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="شماره تماس"
            />
          </div>

          {/* پیام */}
          <div>
            <label htmlFor="message" className="block font-medium mb-1">
              پیام*
            </label>
            <textarea
              id="message"
              rows="5"
              className="w-full border border-gray-300  bg-gray-50 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="پیام خود را بنویسید..."
            ></textarea>
          </div>

          {/* دکمه ارسال */}
          <button
            type="submit"
            className="w-full bg-[#008884] hover:bg-[#006f6f] transition-colors text-gray-800 font-bold py-3 "
          >
            ارسال
          </button>
        </form>
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
                Hadid St , Hajiabad Industrial Zone , Arak , Markazi Province ,
                Iran
              </p>
              <p className="text-white">Phone: +98 86 3413 1104</p>
              <p className="text-white">Mobile: +98 918-362-5065</p>
            </div>
          </div>
        </div>

        {/* نقشه گوگل */}
      
         
          <div className="w-full mt-8 h-full">
            <img src="/images/map.png" alt="Map" className="w-full h-full " />
          </div>
          {/* <iframe
            title="Company Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6609.85443245512!2d49.82293367385865!3d34.07138000049823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fecbb832ac15d37%3A0x67d85911615a6f6d!2z2YHZiNmE2KfYryDYr9ix2K7YtNi0INit2K_bjNiv!5e0!3m2!1sen!2sus!4v1755522128663!5m2!1sen!2sus"
            width="100%"
            height="450"
            className="border-0"
            allowFullScreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe> */}
        
      </section>
    </>
  );
};

export default ContactUs;
