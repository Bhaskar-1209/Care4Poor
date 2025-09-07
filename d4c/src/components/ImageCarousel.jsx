import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/ImageCarousel/img1.jpeg";
import img2 from "../assets/ImageCarousel/img2.jpeg";
import img3 from "../assets/ImageCarousel/img3.jpeg";
import img4 from "../assets/ImageCarousel/img4.jpeg";
import img5 from "../assets/ImageCarousel/img5.jpeg";
import img6 from "../assets/ImageCarousel/img6.jpeg";
import img7 from "../assets/ImageCarousel/img7.jpeg";

const images = [img1, img2, img3, img4, img5, img6, img7];

const ImageCarousel = () => {
  const loopImages = [...images, ...images]; // duplicate for infinite scroll
  const angleMap = [15, 7, 0, -7, -15]; // repeating curve angles

  return (
    <section className="bg-[#1b1b1b] py-8 overflow-hidden">
      <div style={{ perspective: "1200px" }}>
        <motion.div
          className="flex gap-6 animate-horizontal-scroll"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {loopImages.map((src, i) => {
            const angle = angleMap[i % angleMap.length] || 0;

            return (
              <motion.div
                key={i}
                style={{
                  flex: "0 0 auto",
                  width: "220px",
                  height: "320px",
                  transform: `rotateY(${angle}deg)`,
                  transformStyle: "preserve-3d",
                  borderRadius: "10px",
                  overflow: "hidden",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.5)",
                }}
                whileHover={{
                  scale: 1.08,
                  rotateY: angle + 5,
                  boxShadow: "0 12px 30px rgba(248,225,144,0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <motion.img
                  src={src}
                  alt={`img-${i}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  draggable="false"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Animation styles */}
      <style>
        {`
          @keyframes horizontal-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .animate-horizontal-scroll {
            animation: horizontal-scroll 20s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default ImageCarousel;
