import { ChevronRight } from "lucide-react";
import React from "react";
import Carousel from "../Carousel/Carousel";

const Featured = () => {
  return (
    <section className="w-full bg-white">
      <div className="container max-w-[1422px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-semibold">Featured Treks</h1>
          <button className="bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors duration-200">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        <Carousel />
      </div>
    </section>
  );
};

export default Featured;
