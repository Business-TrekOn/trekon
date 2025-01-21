"use client";
import { ChevronRight } from "lucide-react";
import Carousel from "../../ui/Carousel/Carousel";
import ButtonClient from "@/components/ui/ButtonClient/ButtonClient";
import { useQuery } from "@tanstack/react-query";

const fetchFeaturedTreks = async () => {
  const response = await fetch("http://localhost:5500/api/featured-treks");
  if (!response.ok) {
    throw new Error("Failed to fetch featured treks");
  }
  return response.json();
};

const Featured = () => {
  const {
    data: featuredTreks,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["featuredTreks"],
    queryFn: fetchFeaturedTreks,
    staleTime: 5 * 60 * 1000, // cache for 5 minutes
  });

  if (isLoading) return <p>Loading featured treks...</p>;
  if (isError) return <p>Error fetching featured treks.</p>;

  return (
    <section className="py-16 px-4 overflow-hidden">
      <div className="container mx-auto max-w-7xl flex flex-col gap-10">
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-semibold">Featured Treks</h1>
          <ButtonClient
            variant="flat"
            size="md"
            className="bg-black text-white"
            href="/trek"
          >
            View All
            <ChevronRight className="w-4" />
          </ButtonClient>
        </div>
        <Carousel featuredTreks={featuredTreks} />
      </div>
    </section>
  );
};

export default Featured;
