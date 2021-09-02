import React from "react";
import { HeaderFour } from "../components/Headings";
const BeforeFooter = () => {
  return (
    <div className="flex-col px-6">
      <div>
        <img src="/assets/shared/mobile/image-best-gear.jpg" className="mb-8" />
        <HeaderFour extraStyle="font-semibold text-center">
          Bringing you the <span className="text-primary">best </span>audio gear
        </HeaderFour>
      </div>
      <p className="mt-3 mb-12 text-center">
        Located at the heart of New York City, Audiophile is the premier store
        for high end headphones, earphones, speakers, and audio accessories. We
        have a large showroom and luxury demonstration rooms available for you
        to browse and experience a wide range of our products. Stop by our store
        to meet some of the fantastic people who make Audiophile the best place
        to buy your portable audio equipment.
      </p>
    </div>
  );
};
export default BeforeFooter;
