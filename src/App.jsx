import { useEffect, useState } from "react";


import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import HomePage from "./pages/HomePage";

import PageNotFound from "./pages/404";

import Footer from "./pages/Footer";
import Customers from "./pages/Customers";
import AboutUs from "./pages/AboutUs";

import Products from "./pages/Products";
import NavbarTest from "./pages/NavbarTest";
 import AOS from "aos";
 import "aos/dist/aos.css";
import ContactUs from "./pages/ContactUs";
import Gallery from "./pages/Gallery";
import { Helmet } from "react-helmet-async";


function SeoDefaults() {
  return (
    <Helmet prioritizeSeoTags>
      <title> شرکت فولاد درخشش حدید |  CNC</title>
      <meta
        name="description"
        content="شرکت فولاد درخشش حدید: ارائه دهنده خدمات CNC با بالاترین کیفیت."
      />
      {/* اختیاری: هم‌خوان با شبکه‌های اجتماعی */}
      <meta property="og:title" content="شرکت فولاد درخشش حدید | CNC" />
      <meta
        property="og:description"
        content="شرکت فولاد درخشش حدید: ارائه دهنده خدمات CNC با بالاترین کیفیت."
      />
      <meta name="twitter:card" content="summary" />
    </Helmet>
  );
}

function Layout() {
  return (
    <>
      <SeoDefaults />
      <Outlet />
    </>
  );
}

function App() {
  

 

  useEffect(() => {
    AOS.init({
      duration: 1500, // مدت زمان انیمیشن
      once: false, // با هر بار اسکرول هم انیمیشن اجرا شود
    });
  }, []);

  
  return (
    <>
      

      <NavbarTest>
        <Routes>
          <Route element={<Layout />}/>
          <Route index element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<HomePage />} />
         
          <Route path="/تماس با ما" element={<ContactUs/>}/>
          <Route path="/*" element={<PageNotFound />} />
          <Route path="/کارفرمایان" element={<Customers />} />
        
          <Route path="/محصولات" element={<Products />} />
          <Route path="/درباره ما" element={<AboutUs />} />
          <Route path="/صفحه اصلی" element={<HomePage />} />
          <Route path="/گالری" element={<Gallery/>}/>
         
        </Routes>

        <Footer />
      </NavbarTest>
    </>
  );
}

export default App;
