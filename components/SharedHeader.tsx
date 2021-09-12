import React from "react";
import { HeaderFive, HeaderFour, HeaderThree, HeaderTwo } from "./Headings";
import Nav from "./Nav";

type Props = {
  title: string;
};

export const SharedHeader = ({ title }: Props) => {
  return (
    <header className="flex flex-col items-center bg-black text-white px-24">
      <Nav black />
      <div className="lg:border-t lg:border-homeTopGray w-11/12" />
      <HeaderFive extraStyle="my-6 font-medium lg:text-3xl lg:py-10 tracking-widest ">
        {title}
      </HeaderFive>
    </header>
  );
};
