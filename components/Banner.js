import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

const slideData = [
  {
    id: 101,
    url: "/asset/images/slide-1.png",
  },
  {
    id: 102,
    url: "/asset/images/slide-2.png",
  },
  {
    id: 103,
    url: "/asset/images/slide-3.png",
  },
];
const Banner = () => {
  return (
    <div className="relative text-white w-full max-w-[1200px] mx-auto text-[20px] my-3">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        renderArrowPrev={(clickHandler, hasPrev) => (
          <div
            onClick={clickHandler}
            className="absolute right-[31px] md:right-[51px] bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
          >
            <ArrowLeftIcon className="w-6 h-6" />
          </div>
        )}
        renderArrowNext={(clickHandler, hasNext) => (
          <div
            onClick={clickHandler}
            className="absolute right-0 bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
          >
            <ArrowRightIcon className="w-6 h-6" />
          </div>
        )}
      >
        {slideData.map((item) => {
          return (
            <div key={item.id}>
              <img
                src={item.url}
                className="aspect-[16/10] md:aspect-auto object-cover"
              />
              <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
                Shop now
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Banner;
