import React from "react";
import { HeaderFive, HeaderSix, HeaderThree } from "./Headings";
import { BiChevronRight } from "react-icons/bi";

export type HomeShopItemProps = {
  image: string;
  imageName: string;
};

export const HomeShopItem = ({ image, imageName }: HomeShopItemProps) => (
  <div className="relative bg-gray flex flex-col items-center justify-end h-40 pb-6 mb-20 rounded">
    <img
      className="w-16 h-24 absolute -top-12"
      src={image}
      alt={`${imageName}`}
    />
    <HeaderSix>{imageName}</HeaderSix>

    <div className="flex items-center justify-end pt-3">
      <span className="font-semibold">SHOP</span>
      <BiChevronRight className="text-red-600" size={25} />
    </div>
  </div>
);
