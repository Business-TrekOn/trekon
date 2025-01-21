"use client";
import Slider from "react-slick";
import TrekCard from "../Card/TrekCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TrekType } from "@/types/treksType";

type CarouselProps = {
  featuredTreks: TrekType[];
};

const Carousel = ({ featuredTreks }: CarouselProps) => {
  const settings = {
    dots: true,
    dotsClass: "slick-dots ",
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="w-full">
      <Slider {...settings}>
        {featuredTreks.map((trek: TrekType) => (
          <div key={trek.id} className="px-4">
            <TrekCard trek={trek} />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Carousel;
