import React from "react";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillFacebook,
} from "react-icons/ai";

const iconSize = 20;

const Footer = () => {
  return (
    <footer className="bg-black text-white flex flex-col items-center px-6 py-6">
      <p className="text-2xl font-bold mb-12">audiophile</p>
      <ul className="text-xs list font-semibold flex flex-col items-center">
        <li>HOME</li>
        <li>HEADPHONES</li>
        <li>SPEAKERS</li>
        <li>EARPHONES</li>
      </ul>
      <p className="my-6 text-center text-sm">
        Audiophile is an all in one stop to fulfill your audio needs. We&apos;re
        a small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>
      <p className="text-sm mt-4 mb-10">Copyright 2021. All Rights Reserved</p>
      <div className="flex justify-around w-24">
        <AiFillFacebook size={iconSize} />
        <AiOutlineTwitter size={iconSize} />
        <AiOutlineInstagram size={iconSize} />
      </div>
      <style jsx>{`
        .list > li {
          margin-bottom: 0.75rem;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
