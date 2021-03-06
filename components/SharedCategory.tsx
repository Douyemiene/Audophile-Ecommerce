import React from "react";
import HomeShopItem from "./HomeShopItem";
import { HomeShopItemProps } from "./HomeShopItem";

const categories: HomeShopItemProps[] = [
  {
    image: "/assets/shared/mobile/xx99-mark-one-headphones.png",
    imageName: "headphones",
  },
  {
    image: "/assets/shared/mobile/zx9-speaker.png",
    imageName: "speakers",
  },
  {
    image: "/assets/shared/mobile/yx1-earphones.png",
    imageName: "earphones",
  },
];

export const SharedCategory = () => {
  return (
    <React.Fragment>
      {categories.map(({ image, imageName }, index) => (
        <HomeShopItem key={index} image={image} imageName={imageName} />
      ))}
    </React.Fragment>
  );
};
