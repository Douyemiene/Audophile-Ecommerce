import React from "react";
import { HeaderFive, HeaderFour, HeaderThree, HeaderTwo } from "./Headings";
import Nav from "./Nav";

type Props = {
  title: string;
};

export const SharedHeader = ({ title }: Props) => {
  return (
    <header className="flex flex-col items-center bg-black text-white">
      <Nav black />
      <HeaderFive extraStyle="my-6 font-bold">{title}</HeaderFive>
    </header>
  );
};
