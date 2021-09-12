import React from "react";
import { HeaderSix } from "./Headings";
import { BiChevronRight } from "react-icons/bi";
import router from "next/router";

export type HomeShopItemProps = {
  image: string;
  imageName: string;
};

const HomeShopItem = ({ image, imageName }: HomeShopItemProps) => (
  <div className="relative md:flex-grow md:mr-6 lg:mx-2 bg-mygray flex flex-col items-center justify-end h-48 pb-6 mb-20 rounded">
    <img className="w-22 absolute -top-12 " src={image} alt={`${imageName}`} />
    <img
      src="/assets/shared/mobile/oval-shadow.png"
      className="absolute top-2"
    />

    <HeaderSix extraStyle="mt-4 font-semibold tracking-wider uppercase">
      {imageName}
    </HeaderSix>

    <div
      className="flex items-center justify-end pt-3 hover:shadow-sm"
      onClick={() => {
        router.push(`/category/${imageName}`);
      }}
    >
      <span className=" text-gray-500">SHOP</span>
      <BiChevronRight className="text-red-400" size={25} />
    </div>
  </div>
);

export default HomeShopItem;
