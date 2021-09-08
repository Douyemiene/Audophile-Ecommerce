import React from "react";
import { HeaderFour } from "../components/Headings";
const BeforeFooter = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:pb-24 px-6 lg:px-0 lg:mx-24">
      <div className="lg:order-last lg:w-1/2">
        <img
          srcSet="/assets/shared/mobile/image-best-gear.jpg 654w, /assets/shared/tablet/image-best-gear.jpg 1378w, /assets/shared/desktop/image-best-gear.jpg 540w"
          src="/assets/shared/mobile/image-best-gear.jpg"
          className="mb-8 lg:mb-0"
        />
      </div>
      <div className="lg:w-1/2 lg:pr-10 ">
        <HeaderFour extraStyle="font-semibold md:text-3xl text-center lg:text-left md:w-2/3 lg:w-full md:mx-auto">
          Bringing you the <span className="text-primary">best </span>audio gear
        </HeaderFour>
        <p className="mt-3 mb-12 text-center lg:text-left md:w-10/12 md:text-lg lg:w-full md:mt-8 lg:mt-3 md:mx-auto lg:mx-0">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </div>
  );
};
export default BeforeFooter;
