import { ChevronRight } from "lucide-react";
import Carousel from "../../ui/Carousel/Carousel";
import ButtonClient from "@/components/ui/ButtonClient/ButtonClient";

const Featured = () => {
  return (
    <section className="py-16 px-4">
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
        <Carousel />
      </div>
    </section>
  );
};

export default Featured;
