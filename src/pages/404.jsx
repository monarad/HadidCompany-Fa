
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { Button, Box } from "@mui/material";
// import Navbar from "./Navbar"; // توجه کنید که نام کامپوننت باید با حروف بزرگ شروع شود
// import img1 from '../images/one.JPG'; // مسیر تصویر اول
// import img2 from '../images/two.JPG'; // مسیر تصویر دوم


// function PageNotFound() {
//    const [currentIndex, setCurrentIndex] = useState(0);

//    // آرایه‌ای از تصاویر
//    const slides = [img1, img2];

//    const nextSlide = () => {
//      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
//    };

//    const prevSlide = () => {
//      setCurrentIndex(
//        (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
//      );
//    };
//   return (
//     <>
//       <div>
//         <Box
//           sx={{
//             position: "relative",
//             width: "100%",
//             maxWidth: "600px",
//             marginTop: "auto",
//             overflow: "hidden",
//           }}
//         >
//           <Box
//             sx={{
//               display: "flex",
//               transition: "transform 0.5s",
//               transform: `translateX(-${currentIndex * 100}%)`, // اصلاح این خط
//             }}
//           >
//             {slides.map((slide, index) => (
//               <Box
//                 key={index}
//                 sx={{
//                   minWidth: "100%",
//                   padding: "16px",
//                   backgroundColor: "#f0f0f0",
//                   textAlign: "center",
//                 }}
//               >
//                 <img
//                   src={slide}
//                   alt={`Slide ${index}`}
//                   style={{ width: "100%", height: "auto" }}
//                 />{" "}
//                 {/* استفاده از تگ img */}
//               </Box>
//             ))}
//           </Box>
//           <Button
//             onClick={prevSlide}
//             variant="contained"
//             color="primary"
//             sx={{
//               position: "absolute",
//               left: "10px",
//               top: "50%",
//               transform: "translateY(-50%)",
//             }}
//           >
//             Prev
//           </Button>
//           <Button
//             onClick={nextSlide}
//             variant="contained"
//             color="primary"
//             sx={{
//               position: "absolute",
//               right: "10px",
//               top: "50%",
//               transform: "translateY(-50%)",
//             }}
//           >
//             Next
//           </Button>
//         </Box>

//         <ImageList
//           sx={{ width: 500, height: 450 }}
//           variant="woven"
//           cols={3}
//           gap={8}
//         >
//           {itemData.map((item) => (
//             <ImageListItem key={item.img}>
//               <img
//                 srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
//                 src={`${item.img}?w=161&fit=crop&auto=format`}
//                 alt={item.title}
//                 loading="lazy"
//               />
//             </ImageListItem>
//           ))}
//         </ImageList>
//       </div>
//     </>
//   );
// }

// export default PageNotFound
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Box, ImageList, ImageListItem } from "@mui/material"; // اطمینان از وارد کردن ImageList و ImageListItem
import Navbar from "./Navbar"; // توجه کنید که نام کامپوننت باید با حروف بزرگ شروع شود
import img1 from "../images/one.JPG"; // مسیر تصویر اول
import img2 from "../images/two.JPG"; // مسیر تصویر دوم

// داده‌های تصاویر برای ImageList
const itemData = [
  {
    img: img1,
    title: "Image 1",
  },
  {
    img: img2,
    title: "Image 2",
  },
  {
    img: img1,
    title: "Image 1",
  },
  {
    img: img2,
    title: "Image 2",
  },
  {
    img: img1,
    title: "Image 1",
  },
  {
    img: img2,
    title: "Image 2",
  },
  {
    img: img1,
    title: "Image 1",
  },
  {
    img: img2,
    title: "Image 2",
  },
];

function PageNotFound() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // آرایه‌ای از تصاویر
  const slides = [img1, img2];

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
      <div>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: "600px",
            marginTop: "auto",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              display: "flex",
              transition: "transform 0.5s",
              transform: `translateX(-${currentIndex * 100}%)`, // اصلاح این خط
            }}
          >
            {slides.map((slide, index) => (
              <Box
                key={index}
                sx={{
                  minWidth: "100%",
                  padding: "16px",
                  backgroundColor: "#f0f0f0",
                  textAlign: "center",
                }}
              >
                <img
                  src={slide}
                  alt={`Slide ${index}`}
                  style={{ width: "100%", height: "auto" }}
                />
              </Box>
            ))}
          </Box>
          <Button
            onClick={prevSlide}
            variant="contained"
            color="primary"
            sx={{
              position: "absolute",
              left: "10px",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            Prev
          </Button>
          <Button
            onClick={nextSlide}
            variant="contained"
            color="primary"
            sx={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            Next
          </Button>
        </Box>

        <ImageList
          className="bg-yellow-300 w-full"
          sx={{ width: "100%", height: 450 }}
          variant="woven"
          cols={3}
          gap={8}
        >
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=161&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </>
  );
}

export default PageNotFound;