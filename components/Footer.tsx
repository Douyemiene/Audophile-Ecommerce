import React from "react";
import Link from "next/link";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillFacebook,
} from "react-icons/ai";

let iconSize = 25;

const Footer = () => {
  return (
    <footer className="bg-black text-white flex flex-col items-center px-6 lg:px-24 py-6 md:py-8">
      <Link href="/">
        <a className=" py-3 md:w-full">
          <img
            src="/assets/shared/mobile/audiophile.svg"
            className="md:jsutify-self-end md:flex-grow mt-2"
          />
        </a>
      </Link>{" "}
      <ul className="text-xs md:text-base md:flex-row  md:w-full list font-semibold md:font-normal md:mt-8  flex flex-col items-center">
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
      </ul>
      <p className="my-6 text-center md:text-left text-sm md:text-lg text-gray-400">
        Audiophile is an all in one stop to fulfill your audio needs. We&apos;re
        a small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>
      <div className="flex flex-col md:justify-between md:w-full md:flex-row items-center md:mt-12 md:mb-6">
        <p className="text-sm md:text-lg mt-4 mb-10 md:m-0">
          Copyright 2021. All Rights Reserved
        </p>
        <div className="flex justify-around w-24">
          <a href="www.facebook.com">
            <AiFillFacebook size={iconSize} />
          </a>
          <a href="www.twitter.com">
            <AiOutlineTwitter size={iconSize} />
          </a>
          <a href="www.instagram.com">
            <AiOutlineInstagram size={iconSize} />
          </a>
        </div>
      </div>
      <style jsx>{`
        .list > a {
          margin-bottom: 0.75rem;
        }
        @media screen and (min-width: 768px) {
          .list > a {
            margin-right: 1.2rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
