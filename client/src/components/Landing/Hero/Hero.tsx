import Image from "next/image";
import CoverImage from "../../../../public/hero-cover.png";
import SearchForm from "@/components/Forms/SearchForm";

const Hero = () => {
  return (
    <section className="relative h-screen">
      {/* Image Background */}
      <div className="absolute inset-0 top-0 z-0">
        <Image
          src={CoverImage}
          alt="background-image"
          className="object-cover h-full w-full"
          loading="lazy"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-800 to-neutral-900 opacity-50 z-1" />

      {/* Content */}
      <div className="absolute z-2 flex flex-col gap-5 h-full w-full items-center justify-center text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white">
          Find Your Trek
        </h1>
        <p className="text-sm md:text-md lg:text-lg text-neutral-300 md:max-w-lg sm:max-w-xs max-w-md mx-auto">
          The journey of a thousand miles begins with a single
          step into the wild.
        </p>
        <SearchForm isDark={true} />
      </div>
    </section>
  );
};

export default Hero;
