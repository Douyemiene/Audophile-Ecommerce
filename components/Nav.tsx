import React, { useEffect, useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import Cart from "../components/Cart";
import { useRouter } from "next/router";
import { FooterIcon } from "./FooterIcon";

const Nav = ({ black }: { black?: boolean }) => {
  const router = useRouter();
  //state
  const [navState, setNavState] = useState("");
  const [cart, setCart] = useState(false);
  const [drop, setdrop] = useState(false);

  //prefetch pages to simulate client side routing
  useEffect(() => {
    router.prefetch("/category/headphones");
    router.prefetch("/category/speakers");
    router.prefetch("/category/earphones");
  }, []);

  let dark = "lg:border-b-1 lg:border-homeTopGray";
  if (black) {
    dark = "bg-black";
  }

  const onToggleNav = () => {
    if (navState) {
      setNavState(" ");
    } else {
      setNavState("open");
    }
    setdrop((drop) => !drop);
  };

  return (
    <div
      className={`${dark} flex text-white justify-between items-center py-6 lg:py-8 px-5 w-full fixed lg:relative z-10`}
    >
      <NavIcon className={navState} onClick={onToggleNav}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </NavIcon>
      <Link href="/">
        <a>
          {" "}
          <img
            src="/assets/shared/mobile/audiophile.svg"
            className="md:jsutify-self-end md:flex-grow mt-2"
          />
        </a>
      </Link>
      <div className="hidden xl:flex xl:flex-grow tracking-widest xl:justify-between xl:px-72 text-sm font-semibold">
        <Link href="/">
          <a>HOME</a>
        </Link>
        <Link href="/category/headphones">
          <a>HEADPHONES</a>
        </Link>
        <Link href="/category/speakers">
          <a>SPEAKERS</a>
        </Link>
        <Link href="/category/earphones">
          <a>EARPHONES</a>
        </Link>
      </div>
      <AiOutlineShoppingCart
        size={23}
        onClick={() => setCart((cart) => !cart)}
      />
      {cart && <Cart />}
      {drop && (
        <div className="fixed py-6 top-0 w-full left-0  h-screen bg-black z-10">
          <div className="pr-6 flex justify-between pl-6 mt-2 ">
            <Link href="/">
              <a>
                {" "}
                <img
                  src="/assets/shared/mobile/audiophile.svg"
                  className="md:jsutify-self-end md:flex-grow mt-2"
                />
              </a>
            </Link>
            <MdClose size={27} onClick={() => setdrop((drop) => !drop)} />
          </div>
          <div className="flex drop flex-col pt-16 text-xl tracking-widest pl-8 ">
            <Link href="/">
              <a>HOME</a>
            </Link>
            <Link href="/category/headphones">
              <a>HEADPHONES</a>
            </Link>
            <Link href="/category/speakers">
              <a>SPEAKERS</a>
            </Link>
            <Link href="/category/earphones">
              <a>EARPHONES</a>
            </Link>
          </div>
          <FooterIcon />
        </div>
      )}
      <style jsx>
        {`
          div.drop a {
            margin-bottom: 3rem;
          }
        `}
      </style>
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

  @media (min-width: 1280px) {
    display: none;
  }
`;

export default Nav;
