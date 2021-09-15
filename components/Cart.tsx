import React, { useState } from "react";
import { ButtonOne } from "./Buttons";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { addTocart, cartItem, removeFromcart } from "../redux/appReducer";
import { singleProductType } from "../data/data";

const Cart = () => {
  const cart = useAppSelector((state) => state.app.cart);
  const pdts = useAppSelector((state) => state.app.products);
  let total = 0;
  const isEmpty = cart.length > 0;

  const end = cart.map((item: cartItem) => {
    const name = Object.keys(item)[0];
    console.log("name", name);
    const value = item[name];
    let price = 0;

    pdts.forEach((product: singleProductType) => {
      const productName = product.slug.split("-")[0];
      if (productName === name) {
        price = product.price;
        total += price * value;
      }
    });

    return { name, value, price };
  });

  console.log("end", end);

  type cartItemProperties = {
    name: string;
    value: number;
    price: number;
  };

  return (
    <>
      {isEmpty ? (
        <div className="absolute w-11/12 md:w-2/3 lg:w-5/12 md:mt-4 md:right-0  pb-6 py-8 px-6 rounded bg-white text-black top-24">
          <div className="flex justify-between pb-6">
            <span className="font-semibold">CART (3)</span>
            <span className="underline text-sm">Remove all</span>
          </div>
          {end
            .filter((pdt) => pdt.value > 0)
            .map(({ name, value, price }: cartItemProperties) => {
              return (
                <Product
                  key={name}
                  name={name}
                  quantity={value}
                  price={price}
                />
              );
            })}
          <div className="flex justify-between pb-6">
            <span className="font-semibold text-gray-400">TOTAL</span>
            <span className="font-semibold">${total}</span>
          </div>
          <ButtonOne
            text="CHECKOUT"
            extraStyle="text-center py-2 text-sm font-semibold"
          />
        </div>
      ) : (
        <div className="absolute w-11/12 pb-6 py-8 px-6 rounded bg-white text-black top-24">
          nothing to show here
        </div>
      )}
    </>
  );
};

const Product = ({
  name,
  quantity,
  price,
}: {
  name: string;
  quantity: number;
  price: number;
}) => {
  const dispatch = useAppDispatch();
  return (
    <div className="flex justify-between items-center px-2 pb-6">
      <img
        className="w-16"
        src="/assets/product-yx1-earphones/mobile/image-product.jpg"
        alt="Product"
      />
      <div>
        <div className="font-semibold">{name}</div>
        <div>{`${price}`}</div>
      </div>
      <div className="flex rounded shadow px-3 justify-between bg-mygray h-8 w-20 items-center">
        <button
          onClick={() => {
            dispatch(removeFromcart(name));
          }}
        >
          -
        </button>
        <button>{quantity}</button>
        <button
          onClick={() => {
            dispatch(addTocart(name));
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Cart;
