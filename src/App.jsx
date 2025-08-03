import { useEffect, useState } from "react";


import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import PageNotFound from "./pages/404";

import Footer from "./pages/Footer";
import Customers from "./pages/Customers";
import AboutUs from "./pages/AboutUs";
import Contracting from "./pages/Contracting";
import Products from "./pages/Products";
import NavbarTest from "./pages/NavbarTest";
 import AOS from "aos";
 import "aos/dist/aos.css";


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
          <Route index element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/home/:id" element={<DetailsPage />} />
          <Route path="/*" element={<PageNotFound />} />
          <Route path="/کارفرمایان" element={<Customers />} />
          <Route path="/پیمانکاری" element={<Contracting />} />
          <Route path="/محصولات" element={<Products />} />
          <Route path="/درباره ما" element={<AboutUs />} />
          <Route path="/صفحه اصلی" element={<HomePage />} />
          {/* <Route path="/رزومه " element={<Rezume />} /> */}
        </Routes>

        <Footer />
      </NavbarTest>
    </>
  );
}

export default App;
