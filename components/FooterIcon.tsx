import React from "react";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillFacebook,
} from "react-icons/ai";

const iconSize = 25;

export const FooterIcon = () => {
  return (
    <div className="flex flex-col md:justify-between md:w-full md:flex-row items-center md:mt-12 md:mb-6 absolute bottom-0 pb-4 w-full">
      <p className="text-sm md:text-lg mt-4 mb-10 md:m-0">
        Copyright 2021. All Rights Reserved
      </p>
      <div className="flex justify-around w-24">
        <AiFillFacebook size={iconSize} />
        <AiOutlineTwitter size={iconSize} />
        <AiOutlineInstagram size={iconSize} />
      </div>
    </div>
  );
};
