import React from "react";
import { ButtonOne } from "./Buttons";

const Cart = () => {
  return (
    <div className="absolute w-11/12 pb-6 py-8 px-6 rounded bg-white text-black top-24">
      <div className="flex justify-between pb-6">
        <span className="font-semibold">CART (3)</span>
        <span className="underline text-sm">Remove all</span>
      </div>
      <Product />
      <Product />
      <Product />
      <div className="flex justify-between pb-6">
        <span className="font-semibold text-gray-400">TOTAL</span>
        <span className="font-semibold">$5,346</span>
      </div>
      <ButtonOne
        text="CHECKOUT"
        extraStyle="text-center py-2 text-sm font-semibold"
      />
    </div>
  );
};

const Product = () => (
  <div className="flex justify-between items-center px-2 pb-6">
    <img
      className="w-16"
      src="/assets/product-yx1-earphones/mobile/image-product.jpg"
      alt="Product"
    />
    <div>
      <div className="font-semibold">XX99 MK II</div>
      <div>{`${`2,999`}`}</div>
    </div>
    <div className="flex rounded shadow px-3 justify-between bg-mygray h-8 w-20 items-center">
      <button>-</button>
      <button>3</button>
      <button>+</button>
    </div>
  </div>
);

export default Cart;
