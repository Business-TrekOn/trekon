"use client";
import React, { useState } from "react";
import { motion, PanInfo } from "framer-motion";
import Image from "next/image";

const PhotoGallery = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "/card-image-placeholder.png",
    "/photo-carousel-placeholder.jpeg",
    "/card-image-placeholder.png",
    "/photo-carousel-placeholder.jpeg",
  ];

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -100) {
      setCurrentImage((prev) => (prev + 1) % images.length);
    } else if (info.offset.x > 100) {
      setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Photo Gallery</h2>
      <motion.div
        className="relative h-[400px] rounded-lg overflow-hidden"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragEnd={handleDragEnd}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={images[currentImage]}
          alt={`Trek image ${currentImage + 1}`}
          fill
          loading="lazy"
          className="object-cover"
        />
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full ${
                currentImage === index ? "bg-white" : "bg-white/50"
              }`}
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default PhotoGallery;
