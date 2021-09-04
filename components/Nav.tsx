import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Nav = () => {
  const [navState, setNavState] = useState(""); //typescript typescript typescript
  const onToggleNav = () => {
    if (navState) {
      setNavState("");
    } else {
      setNavState("open");
    }
  };
  return (
    <div className=" flex text-white bg-black justify-between items-center py-6 px-6 w-full">
      <NavIcon className={navState} onClick={onToggleNav}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </NavIcon>
      <img
        src="/assets/shared/mobile/audiophile.svg"
        className="
      mt-2"
      />
      <AiOutlineShoppingCart size={23} className="" />
    </div>
  );
};

const NavIcon = styled.div`
  width: 16px;
  height: 15px;
  position: relative;
  background: #000;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;

  & span {
    display: block;
    position: absolute;
    height: 4px;
    width: 50%;
    background: white;
    opacity: 1;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;
  }

  &:hover {
  }

  & span:nth-child(even) {
    left: 50%;
    border-radius: 0 9px 9px 0;
  }

  & span:nth-child(odd) {
    left: 0px;
    border-radius: 9px 0 0 9px;
  }

  & span:nth-child(1),
  & span:nth-child(2) {
    top: 0px;
  }

  & span:nth-child(3),
  & span:nth-child(4) {
    top: 6px;
  }

  & span:nth-child(5),
  & span:nth-child(6) {
    top: 12px;
  }

  &.open span:nth-child(1),
  &.open span:nth-child(6) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  &.open span:nth-child(2),
  &.open span:nth-child(5) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  &.open span:nth-child(1) {
    left: 2px;
    top: 2px;
  }

  &.open span:nth-child(2) {
    left: calc(50% - 1px);
    top: 2px;
  }

  &.open span:nth-child(3) {
    left: -50%;
    opacity: 0;
  }

  &.open span:nth-child(4) {
    left: 100%;
    opacity: 0;
  }

  &.open span:nth-child(5) {
    left: 2px;
    top: 7.5px;
  }

  &.open span:nth-child(6) {
    left: calc(50% - 1px);
    top: 7.5px;
  }
`;

export default Nav;
