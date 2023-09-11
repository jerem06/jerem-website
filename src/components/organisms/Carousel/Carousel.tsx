"use client";
import { useEffect, useState } from "react";
import { ICarouselProps } from "./Carousel.props";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

export const Carousel = ({ data, ...props }: ICarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const prevSlide = () => {
    if (currentIndex === 0) setCurrentIndex(data.length - 1);
    setCurrentIndex((current) => current - 1);
  };

  const nextSlide = () => {
    if (currentIndex === data.length - 1) setCurrentIndex(0);
    setCurrentIndex((current) => current + 1);
  };

  const handleIndexToDisplay = (relativeIndex: number) => {
    let indexToDisplay = relativeIndex;
    if (relativeIndex === -1) {
      indexToDisplay = data.length - 1;
    }
    if (relativeIndex === data.length) {
      indexToDisplay = 0;
    }
    return indexToDisplay;
  };

  return (
    <div className="relative w-full flex justify-between items-center">
      <div onClick={prevSlide} className="z-10 -ml-2 text-primary-900">
        <IoChevronBackOutline size={50} />
      </div>
      <div className="hidden sm:block absolute lg:max-w-xl max-w-lg  w-full lg:top-[8%] top-[6%] px-4 left-0">
        <div
          style={{
            backgroundImage: `url(${
              data[handleIndexToDisplay(currentIndex - 1)].url
            })`,
          }}
          className="aspect-[4/3] rounded-2xl bg-center bg-cover duration-500"
        ></div>
      </div>
      <div className="lg:max-w-2xl max-w-xl w-full spx-4 z-10">
        <div
          style={{
            backgroundImage: `url(${
              data[handleIndexToDisplay(currentIndex)].url
            })`,
          }}
          className="aspect-[4/3] rounded-2xl bg-center bg-cover duration-500"
        ></div>
      </div>
      <div className="hidden sm:block absolute lg:max-w-xl max-w-lg  w-full lg:top-[8%] top-[6%] px-4 right-0">
        <div
          style={{
            backgroundImage: `url(${
              data[handleIndexToDisplay(currentIndex + 1)].url
            })`,
          }}
          className="aspect-[4/3] rounded-2xl bg-center bg-cover duration-500"
        ></div>
      </div>
      <div onClick={nextSlide} className="z-10 -mr-2 text-primary-900">
        <IoChevronForwardOutline size={50} />
      </div>
    </div>
  );
};
