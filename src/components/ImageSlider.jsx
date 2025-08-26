import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/s1.JPG",
  "/s2.JPG",
  "/s3.JPG",
  "/s4.JPG",
  "/s5.JPG",
  "/s6.JPG",
  "/s7.JPG", // آدرس عکس‌ها را به دلخواه تنظیم کن
];



export default function ImageSlider() {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const prevImage = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 400);
  };

  const nextImage = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 400);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto h-[500px] overflow-hidden  shadow-lg">
      <img
        src={images[index]}
        alt="slider"
        className="w-full h-full object-cover transition-all duration-500 ease-in-out  filter  "
      />

      {/* Left Button */}
      <motion.button
        whileTap={{ scale: 0.8 }}
        onClick={prevImage}
        className="absolute top-1/2 left-4 -translate-y-1/2 text-white/70 hover:scale-110 transition"
      >
        <ChevronLeft size={60} strokeWidth={1.5} /> {/* آیکون سفید */}
      </motion.button>

      {/* Right Button */}
      <motion.button
        whileTap={{ scale: 0.8 }}
        onClick={nextImage}
        className="absolute top-1/2 right-4 -translate-y-1/2 text-white/70 hover:scale-110 transition"
      >
        <ChevronRight size={60} strokeWidth={1.5} />
      </motion.button>
    </div>
  );
}
