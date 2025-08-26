import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function PageNotFound() {
  const title = "404 - Page Not Found";
  const description = "صفحه مورد نظر پیدا نشد.";
  return (
    <>
      <Helmet>
        <title>{title.slice(0, 60)}</title>
        <meta name="description" content={description.slice(0, 160)} />
      </Helmet>
      <div className="page-not-found bg-yellow-400 w-full h-screen flex flex-col align-middle justify-center text-center leading-loose text-white">
        <h1 className="text-5xl font-bold mb-10">404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Link
          className="w-full text-xl font-bold mt-10 border border-white p-2 hover:bg-[#008884]"
          to="/"
        >
          Go back to Home
        </Link>
      </div>
    </>
  );
}

export default PageNotFound;
