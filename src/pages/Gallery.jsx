// export default Gallery;
import React from "react";
import ImageSlider from "../components/ImageSlider";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

// تعریف افکت ورود برای کل گالری
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // هر عکس با فاصله ظاهر میشه
    },
  },
};

// تعریف افکت برای هر آیتم (عکس)
const itemVariants = {
  hidden: { opacity: 0, y: 50 }, // کمی پایین و نامرئی
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

function Gallery() {

  const title = "نمونه پروژه‌ها | گالری تصاویر";
  const description =
    "در این بخش تعدادی از پروژه‌های اجراشده را مشاهده می‌کنید.";

  const images = [
    "/1.png",
    "/2.JPG",
    "/3.jpg",
    "/4.JPG",
    "/5.JPG",
    "/6.JPG",
    "/7.JPG",
    "/8.jpg",
    "/9.JPG",
    "/10.jpg",
    "/11.jpg",
    "/12.jpg",
  ];

  return (
    <>
      <Helmet>
        <title>{title.slice(0, 60)}</title>
        <meta name="description" content={description.slice(0, 160)} />
      </Helmet>

      <div className="h-auto mt-4 m-6 mx-4 sm:mx-6">
        <ImageSlider />
      </div>

      <motion.div
        className="mt-12 bg-yellow-400 p-10 h-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        // whileInView="visible"
        viewport={{ once: true, amount: 0.1 }} // وقتی 20% دیده شد تریگر بشه
      >
        {/* --- تیتر و متن معرفی --- */}
        <div className="text-center mt-12 mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            نمونه پروژه‌ها
          </h2>
          <p
            dir="rtl"
            className="mt-10 text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-loose"
          >
            در این بخش تعدادی از پروژه‌های اجراشده را مشاهده می‌کنید. برای
            اطلاعات بیشتر درباره‌ی جزئیات فنی یا فرآیندها، می‌توانید با ما در
            ارتباط باشید.
          </p>
        </div>

        {/* --- گالری عکس‌ها --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
          {images.map((src, index) => (
            <motion.div
              key={index}
              className="relative group overflow-hidden shadow-lg"
              variants={itemVariants}
            >
              <img
                src={src}
                loading="lazy"
                alt={`Gallery image ${index + 1}`}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-30 transition duration-500" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
}

export default Gallery;
