"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

const PhotoGallery = ({ photo_gallery }: { photo_gallery: string[] }) => {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Photo Gallery</h2>
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        dynamicHeight={false}
        className="rounded-lg overflow-hidden"
      >
        {photo_gallery.map((photo, index) => (
          <div key={index} className="relative h-[400px]">
            <Image
              src={photo}
              alt={`Trek image ${index + 1}`}
              fill
              loading="lazy"
              className="object-cover rounded-lg"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default PhotoGallery;
