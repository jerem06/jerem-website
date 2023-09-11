"use client";
import { useState } from "react";
import { ICarouselProps } from "./Carousel.props";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

export const Carousel = ({ data, ...props }: ICarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <div className="absolute z-20 -left-2 text-primary-900 lg:top-[48%] top-[46%]">
        <IoChevronBackOutline size={50} />
      </div>
      <div className="hidden sm:block absolute lg:max-w-xl max-w-lg  w-full top-[25%] px-4 left-0">
        <div
          style={{ backgroundImage: `url(${data[currentIndex + 1].url})` }}
          className="aspect-[4/3] rounded-2xl bg-center bg-cover duration-500"
        ></div>
      </div>
      <div className="lg:max-w-2xl max-w-xl w-full lg:py-8 py-10 px-4 z-10">
        <div
          style={{ backgroundImage: `url(${data[currentIndex].url})` }}
          className="aspect-[4/3] rounded-2xl bg-center bg-cover duration-500"
        ></div>
      </div>
      <div className="hidden sm:block absolute lg:max-w-xl max-w-lg  w-full top-[25%] px-4 right-0">
        <div
          style={{ backgroundImage: `url(${data[currentIndex + 2].url})` }}
          className="aspect-[4/3] rounded-2xl bg-center bg-cover duration-500"
        ></div>
      </div>
      <div className="absolute z-20 -right-2 text-primary-900 lg:top-[48%] top-[46%]">
        <IoChevronForwardOutline size={50} />
      </div>
    </>
  );
};
