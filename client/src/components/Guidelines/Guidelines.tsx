"use client";
import React from "react";
import { Button } from "@nextui-org/react";
import Image from "next/image";

const Guidelines = () => {
  return (
    <section className="py-16 px-4 bg-white" aria-labelledby="guidelines-title">
      <div className="container mx-auto max-w-7xl flex md:flex-row flex-col items-center justify-around gap-12 md:gap-8">
        <div
          className="w-full md:w-1/2 flex flex-col md:items-start items-center gap-6"
          data-aos="fade-right"
        >
          <div className="space-y-1 text-center md:text-start">
            <p className="text-2xl sm:text-3xl font-semibold text-gray-900">
              Trekking
            </p>
            <h2
              id="guidelines-title"
              className="text-3xl sm:text-4xl font-semibold text-gray-900"
            >
              Guidelines
            </h2>
          </div>
          <p className="text-gray-600 max-w-md leading-relaxed text-center md:text-start">
            The major Himalayan rivers rise north of the mountain ranges and
            flow through deep gorges that generally reflect some geologic
            structural control, such as a fault line. The rivers of the Indus
            system as a rule follow northwesterly courses, whereas those of the
            Ganges-Brahmaputra systems generally take easterly courses while
            flowing through the mountain region.
          </p>
          <Button
            size="lg"
            className="bg-black text-white hover:opacity-90 transition-opacity"
            aria-label="Learn more about trekking guidelines"
          >
            Learn More
          </Button>
        </div>
        <div className="w-full md:w-1/2" data-aos="fade-left">
          <div className="relative aspect-square max-w-[500px] mx-auto">
            <Image
              src="/Guidelines.jpg"
              alt="Trekking guidelines illustration"
              fill
              className="object-cover rounded-lg shadow-lg"
              sizes="(max-width: 768px) 100vw, 500px"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// Memoize the component to prevent unnecessary re-renders
export default React.memo(Guidelines);
