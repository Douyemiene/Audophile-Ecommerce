import React from "react";
import { HeaderFive, HeaderFour, HeaderThree, HeaderTwo } from "./Headings";
import Nav from "./Nav";

export const SharedHeader = () => {
  return (
    <header className="flex flex-col items-center bg-black text-white">
      <Nav />
      <HeaderFive extraStyle="my-6 font-bold">HEADPHONES</HeaderFive>
    </header>
  );
};
