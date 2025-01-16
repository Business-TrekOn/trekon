"use client";
import { ChevronRight } from "lucide-react";
import React from "react";
import Carousel from "../Carousel/Carousel";
import { Button } from "@nextui-org/react";

const Featured = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-7xl flex flex-col gap-10">
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-semibold">Featured Treks</h1>
          <Button variant="flat" className="bg-black text-white">
            View All
            <ChevronRight className="w-4" />
          </Button>
        </div>
        <Carousel />
      </div>
    </section>
  );
};

export default React.memo(Featured);
