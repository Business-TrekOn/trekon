"use client";
import React, { useEffect, useState } from "react";
import TrekCard from "../Card/TrekCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Carousel = () => {
  const treks = [
    {
      id: 1,
      title: "Everest Base Camp Trek",
      guide: {
        name: "Pemba Sherpa",
        experience: "15",
        avatar: "/avatar-placeholder.png",
      },
      difficulty: "Advanced",
      duration: "12 days",
      groupSizeMin: "4",
      groupSizeMax: "8",
      nextAvailable: "June 8, 2024",
      price: 1400,
      image: "/card-image-placeholder.png",
    },
    {
      id: 2,
      title: "Everest Base Camp Trek",
      guide: {
        name: "Pemba Sherpa",
        experience: "15",
        avatar: "/avatar-placeholder.png",
      },
      difficulty: "Advanced",
      duration: "12 days",
      groupSizeMin: "4",
      groupSizeMax: "8",
      nextAvailable: "June 8, 2024",
      price: 1400,
      image: "/card-image-placeholder.png",
    },
    {
      id: 3,
      title: "Everest Base Camp Trek",
      guide: {
        name: "Pemba Sherpa",
        experience: "15",
        avatar: "/avatar-placeholder.png",
      },
      difficulty: "Advanced",
      duration: "12 days",
      groupSizeMin: "4",
      groupSizeMax: "8",
      nextAvailable: "June 8, 2024",
      price: 1400,
      image: "/card-image-placeholder.png",
    },
    {
      id: 4,
      title: "Everest Base Camp Trek",
      guide: {
        name: "Pemba Sherpa",
        experience: "15",
        avatar: "/avatar-placeholder.png",
      },
      difficulty: "Advanced",
      duration: "12 days",
      groupSizeMin: "4",
      groupSizeMax: "8",
      nextAvailable: "June 8, 2024",
      price: 1400,
      image: "/card-image-placeholder.png",
    },
    {
      id: 5,
      title: "Everest Base Camp Trek",
      guide: {
        name: "Pemba Sherpa",
        experience: "15",
        avatar: "/avatar-placeholder.png",
      },
      difficulty: "Advanced",
      duration: "12 days",
      groupSizeMin: "4",
      groupSizeMax: "8",
      nextAvailable: "June 8, 2024",
      price: 1400,
      image: "/card-image-placeholder.png",
    },
    {
      id: 6,
      title: "Everest Base Camp Trek",
      guide: {
        name: "Pemba Sherpa",
        experience: "15",
        avatar: "/avatar-placeholder.png",
      },
      difficulty: "Advanced",
      duration: "12 days",
      groupSizeMin: "4",
      groupSizeMax: "8",
      nextAvailable: "June 8, 2024",
      price: 1400,
      image: "/card-image-placeholder.png",
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1); // Small screens - 1 item
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2); // Medium screens - 2 items
      } else {
        setItemsPerView(3); // Large screens - 3 items
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setCurrentPage(0);
  }, [itemsPerView]);

  const totalPages = Math.ceil(treks.length / itemsPerView);
  const translateX = currentPage * itemsPerView * (100 / treks.length);

  return (
    <section className="w-full">
      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex gap-4 md:gap-0 transition-transform duration-300 ease-out"
            style={{
              transform: `translateX(-${translateX}%)`,
              width: `${(treks.length / itemsPerView) * 100}%`,
            }}
          >
            {treks.map((trek) => (
              <div
                key={trek.id}
                className="flex-shrink-0"
                style={{ width: `${100 / treks.length}%` }}
              >
                <div className="px-2">
                  <TrekCard trek={trek} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: totalPages }).map((_, pageIndex) => (
            <button
              key={pageIndex}
              onClick={() => setCurrentPage(pageIndex)}
              className={`transition-all duration-300 ease-out rounded-full ${
                pageIndex === currentPage
                  ? "w-6 h-2 bg-blue-500"
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
