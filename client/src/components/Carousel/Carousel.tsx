"use client";
import React, { useEffect, useState } from "react";
import TrekCard from "../Card/TrekCard";
import { motion, useAnimation } from "framer-motion";
import { treks } from "@/utils/data/treks";

const Carousel = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const controls = useAnimation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setCurrentPage(0);
  }, [itemsPerView]);

  const sponsoredTreks = treks.filter((trek) => trek.isSponsored);
  const totalPages = Math.ceil(sponsoredTreks.length / itemsPerView);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDragEnd = (_event: PointerEvent, info: any) => {
    const dragOffset = info.offset.x;
    const threshold = 100; // Minimum drag distance to change pages

    if (dragOffset < -threshold && currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    } else if (dragOffset > threshold && currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    } else {
      // Snap back to the current page if drag is insufficient
      controls.start({ x: -currentPage * 100 + "%" });
    }
  };

  useEffect(() => {
    controls.start({
      x: -currentPage * 100 + "%",
      transition: {
        duration: 0.8, // Slower animation duration
        ease: [0.6, 0.05, -0.01, 0.9], // Smooth modern easing curve
      },
    });
  }, [currentPage, controls]);

  return (
    <section className="w-full">
      <div className="relative">
        <div className="overflow-hidden">
          {/* Track */}
          <motion.div
            className="flex transition-transform duration-300 ease-out"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            animate={controls}
            style={{
              display: "flex",
            }}
          >
            {/* Individual slides */}
            {sponsoredTreks.map((trek) => (
              <motion.div
                key={trek.id}
                className="w-full flex-none md:w-1/2 lg:w-1/3 px-4"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                }}
              >
                <TrekCard trek={trek} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: totalPages }).map((_, pageIndex) => (
            <button
              key={pageIndex}
              onClick={() => setCurrentPage(pageIndex)}
              className={`transition-all duration-300 ease-out rounded-full ${
                pageIndex === currentPage
                  ? "w-10 h-2 bg-black"
                  : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Page ${pageIndex + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Carousel);
