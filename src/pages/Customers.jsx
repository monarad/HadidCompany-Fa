
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Customers() {
  return (
    <>
      <div className="w-full h-auto mt-10 flex flex-col items-center justify-center align-middle">
        <h1 className="text-4xl  font-bold ">Customers </h1>
        <p className="mt-8 text-center px-9 leading-loose">
          Welcome to the Customers page. Here you can find information about our
          valued customers and their projects.
        </p>
      </div>
      <div className="flex flex-col h-96 md:flex-row gap-12 p-12">
        {/* Box 1 - Tutorials */}
        <div className=" text-gray-900 p-8 border border-gray-600 w-full md:w-1/2 relative transition-colors duration-300 hover:bg-yellow-400">
          {/* آیکون بالا سمت راست */}
          <div className="absolute top-4 right-4 text-gray-800 text-xl">🖼️</div>
          <p className="text-sm uppercase tracking-wide mb-2">CNC Projects</p>
          <h2 className="text-2xl font-bold mb-4">Tutorials</h2>
          <p className="text-lg leading-relaxed">
            Learn more about CNC machining with our tutorials and video
            demonstrations.
          </p>
        </div>

        {/* Box 2 - Filehub */}
        <div className="bg-white text-gray-900 p-8  border  border-gray-600  w-full md:w-1/2 relative transition-colors duration-300 hover:bg-green-color">
          {/* آیکون بالا سمت راست */}
          <div className="absolute top-4 right-4 text-gray-800 text-xl">📁</div>
          <p className="text-sm uppercase tracking-wide mb-2">CNC Projects</p>
          <h2 className="text-2xl font-bold mb-4">Filehub</h2>
          <p className="text-lg leading-relaxed">
            Discover, share and create great projects with our open source file
            downloads.
          </p>
        </div>
      </div>

      <div className="flex flex-col h-96 md:flex-row gap-12 p-12">
        {/* Box 1 - Tutorials */}
        <div className="border border-gray-600 text-gray-900 p-8  w-full md:w-1/2 relative transition-colors duration-300 hover:bg-yellow-400">
          {/* آیکون بالا سمت راست */}
          <div className="absolute top-4 right-4 text-gray-800 text-xl">🖼️</div>
          <p className="text-sm uppercase tracking-wide mb-2">CNC Projects</p>
          <h2 className="text-2xl font-bold mb-4">Tutorials</h2>
          <p className="text-lg leading-relaxed">
            Learn more about CNC machining with our tutorials and video
            demonstrations.
          </p>
        </div>

        {/* Box 2 - Filehub */}
        <div className="bg-white  text-gray-900 p-8   border border-gray-600 w-full md:w-1/2 relative transition-colors duration-300 hover:bg-yellow-400">
          {/* آیکون بالا سمت راست */}
          <div className="absolute top-4 right-4 text-gray-800 text-xl">📁</div>
          <p className="text-sm uppercase tracking-wide mb-2">CNC Projects</p>
          <h2 className="text-2xl font-bold mb-4">Filehub</h2>
          <p className="text-lg leading-relaxed">
            Discover, share and create great projects with our open source file
            downloads.
          </p>
        </div>
      </div>
    </>
  );
}

export default Customers