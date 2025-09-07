// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { Helmet } from "react-helmet-async";

// function Customers() {
//   const title = "مشتریان | کارفرمایان";
//   const description =
//     "مشتریان ما شامل طیف وسیعی از صنایع و کسب‌وکارها هستند که از خدمات ما بهره‌مند می‌شوند.";
//   return (
//     <>
//       <Helmet>
//         <title>{title.slice(0, 60)}</title>
//         <meta name="description" content={description.slice(0, 160)} />
//       </Helmet>
//       <div className="w-full h-auto mt-10 flex flex-col items-center justify-center align-middle">
//         <h1 className="text-4xl  font-bold ">Customers </h1>
//         <p className="mt-8 text-center px-9 leading-loose">
//           Welcome to the Customers page. Here you can find information about our
//           valued customers and their projects.
//         </p>
//       </div>
//       <div className="flex flex-col h-96 md:flex-row gap-12 p-12">
//         {/* Box 1 - Tutorials */}
//         <div className=" text-gray-900 p-8 border border-gray-600 w-full md:w-1/2 relative transition-colors duration-300 hover:bg-yellow-400">
//           {/* آیکون بالا سمت راست */}
//           <div className="absolute top-4 right-4 text-gray-800 text-xl">🖼️</div>
//           <p className="text-sm uppercase tracking-wide mb-2">CNC Projects</p>
//           <h2 className="text-2xl font-bold mb-4">Tutorials</h2>
//           <p className="text-lg leading-relaxed">
//             Learn more about CNC machining with our tutorials and video
//             demonstrations.
//           </p>
//         </div>

//         {/* Box 2 - Filehub */}
//         <div className="bg-white text-gray-900 p-8  border  border-gray-600  w-full md:w-1/2 relative transition-colors duration-300 hover:bg-green-color">
//           {/* آیکون بالا سمت راست */}
//           <div className="absolute top-4 right-4 text-gray-800 text-xl">📁</div>
//           <p className="text-sm uppercase tracking-wide mb-2">CNC Projects</p>
//           <h2 className="text-2xl font-bold mb-4">Filehub</h2>
//           <p className="text-lg leading-relaxed">
//             Discover, share and create great projects with our open source file
//             downloads.
//           </p>
//         </div>
//       </div>

//       <div className="flex flex-col h-96 md:flex-row gap-12 p-12">
//         {/* Box 1 - Tutorials */}
//         <div className="border border-gray-600 text-gray-900 p-8  w-full md:w-1/2 relative transition-colors duration-300 hover:bg-yellow-400">
//           {/* آیکون بالا سمت راست */}
//           <div className="absolute top-4 right-4 text-gray-800 text-xl">🖼️</div>
//           <p className="text-sm uppercase tracking-wide mb-2">CNC Projects</p>
//           <h2 className="text-2xl font-bold mb-4">Tutorials</h2>
//           <p className="text-lg leading-relaxed">
//             Learn more about CNC machining with our tutorials and video
//             demonstrations.
//           </p>
//         </div>

//         {/* Box 2 - Filehub */}
//         <div className="bg-white  text-gray-900 p-8   border border-gray-600 w-full md:w-1/2 relative transition-colors duration-300 hover:bg-yellow-400">
//           {/* آیکون بالا سمت راست */}
//           <div className="absolute top-4 right-4 text-gray-800 text-xl">📁</div>
//           <p className="text-sm uppercase tracking-wide mb-2">CNC Projects</p>
//           <h2 className="text-2xl font-bold mb-4">Filehub</h2>
//           <p className="text-lg leading-relaxed">
//             Discover, share and create great projects with our open source file
//             downloads.
//           </p>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Customers;
import React from "react";
import { Helmet } from "react-helmet-async";

function Customers() {
  const title = "مشتریان | کارفرمایان";
  const description =
    "مشتریان ما شامل طیف وسیعی از صنایع و کسب‌وکارها هستند که از خدمات ما بهره‌مند می‌شوند.";
  return (
    <>
      <Helmet>
        <title>{title.slice(0, 60)}</title>
        <meta name="description" content={description.slice(0, 160)} />
      </Helmet>

      <div className="w-full h-auto mt-10 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Customers</h1>
        <p className="mt-8 text-center px-6 md:px-9 leading-loose">
          Welcome to the Customers page. Here you can find information about our
          valued customers and their projects.
        </p>
      </div>

      {/* Section 1 */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-12 p-6 md:p-12">
        {/* Box 1 - Tutorials */}
        <div className="border border-gray-600 text-gray-900 p-6 md:p-8 w-full md:w-1/2 relative transition-colors duration-300 hover:bg-yellow-400">
          <div className="absolute top-4 right-4 text-gray-800 text-xl">🖼️</div>
          <p className="text-sm uppercase tracking-wide mb-2">CNC Projects</p>
          <h2 className="text-2xl font-bold mb-4">Tutorials</h2>
          <p className="text-lg leading-relaxed">
            Learn more about CNC machining with our tutorials and video
            demonstrations.
          </p>
        </div>

        {/* Box 2 - Filehub */}
        <div className="border border-gray-600 bg-white text-gray-900 p-6 md:p-8 w-full md:w-1/2 relative transition-colors duration-300 hover:bg-yellow-400">
          <div className="absolute top-4 right-4 text-gray-800 text-xl">📁</div>
          <p className="text-sm uppercase tracking-wide mb-2">CNC Projects</p>
          <h2 className="text-2xl font-bold mb-4">Filehub</h2>
          <p className="text-lg leading-relaxed">
            Discover, share and create great projects with our open source file
            downloads.
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-12 p-6 md:p-12">
        {/* Box 1 - Tutorials */}
        <div className="border border-gray-600 text-gray-900 p-6 md:p-8 w-full md:w-1/2 relative transition-colors duration-300 hover:bg-yellow-400">
          <div className="absolute top-4 right-4 text-gray-800 text-xl">🖼️</div>
          <p className="text-sm uppercase tracking-wide mb-2">CNC Projects</p>
          <h2 className="text-2xl font-bold mb-4">Tutorials</h2>
          <p className="text-lg leading-relaxed">
            Learn more about CNC machining with our tutorials and video
            demonstrations.
          </p>
        </div>

        {/* Box 2 - Filehub */}
        <div className="border border-gray-600 bg-white text-gray-900 p-6 md:p-8 w-full md:w-1/2 relative transition-colors duration-300 hover:bg-yellow-400">
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

export default Customers;
