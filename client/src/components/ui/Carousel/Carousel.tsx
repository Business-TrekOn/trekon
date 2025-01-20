"use client";
import { useEffect, useState } from "react";
import TrekCard from "../Card/TrekCard";
import { motion, useAnimation } from "framer-motion";
import { featuredTreks } from "@/utils/data/featuredTreks";

const Carousel = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const controls = useAnimation();
  const dragThreshold = 50; // Drag distance to change pages (this could be adjusted)
  const totalTreks = featuredTreks.length;

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

  const totalPages = Math.ceil(totalTreks / itemsPerView);

  // Handle the drag start
  const handleDragStart = (event: PointerEvent) => {
    setDragStart(event.clientX);
    controls.stop(); // Stop any ongoing animations
  };

  // Handle the dragging event
  const handleDrag = (event: PointerEvent) => {
    const dragDistance = event.clientX - dragStart;
    setDragOffset(dragDistance);
  };

  // Handle the drag end
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDragEnd = (event: PointerEvent, info: any) => {
    const dragDistance = info.offset.x;

    // When dragging right or left, decide to move to the next or previous page
    if (dragDistance < -dragThreshold) {
      setCurrentPage((prev) => (prev + 1) % totalPages); // Move to next page
    } else if (dragDistance > dragThreshold) {
      setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages); // Move to previous page
    }

    // Reset the drag offset to zero after drag ends
    setDragOffset(0);
  };

  useEffect(() => {
    controls.start({
      x: -currentPage * 100 + "%",
      transition: {
        duration: 0.6, // Smoother transition duration
        ease: [0.25, 0.8, 0.25, 1], // Smooth cubic bezier easing
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
            onDragStart={handleDragStart}
            dragElastic={0}
            onDrag={handleDrag} // Continuous drag update
            onDragEnd={handleDragEnd}
            animate={controls}
            style={{
              display: "flex",
              scrollBehavior: "smooth", // Smooth scroll when user scrolls
              x: `-${currentPage * 100 + dragOffset / 10}%`, // Make the drag move with the user's hand
            }}
          >
            {/* Individual slides */}
            {featuredTreks.map((trek) => (
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

export default Carousel;
