import React, { useState } from "react";
import { useEffect } from "react";
import { addTocart } from "../redux/appReducer";
import { useAppDispatch } from "../redux/hooks";
import { Button, ButtonOne } from "./Buttons";
import { HeaderTwo } from "./Headings";
import { useAppSelector } from "../redux/hooks";
import { useRouter } from "next/router";

export type ProductType = {
  image: string;
  imageResponsive?: string;
  newProduct?: boolean;
  productName: string;
  title: string;
  details: string;
  inProductPage?: boolean;
  lgReorder?: boolean;
  amount?: number;
  slug: string;
};

const Product = ({
  image,
  imageResponsive,
  newProduct,
  productName,
  title,
  details,
  inProductPage,
  lgReorder,
  amount,
  slug,
}: ProductType) => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.app.cart);
  const router = useRouter();

  let objIndex = "";
  let idx = 0;
  let pric = 0;

  if (inProductPage) {
    idx = cart.findIndex((item) => {
      objIndex = Object.keys(item)[0];
      return objIndex === productName.split(" ")[0].toLowerCase();
    });

    if (idx != -1) {
      pric = Object.values(cart[idx])[0];
    } else {
      pric = 0;
    }
  }

  //styles for product page without add-to-cart
  const [styles, setStyles] = useState({
    center: "text-center lg:text-left",
    container: "pb-20 lg:flex lg:justify-around lg:w-full lg:px-12",
    img: "lg:w-1/2 md:h-96",
    secondItem: `lg:w-4/12 lg:flex lg:flex-col lg:justify-start lg:text-left lg:ml-0`,
    detail: "md:text-lg lg:w-full text-center lg:text-left",
  });

  useEffect(() => {
    if (lgReorder) {
      setStyles({
        ...styles,
        secondItem: `${styles.secondItem} + lg:order-first`,
      });
    }

    if (inProductPage) {
      setStyles({
        ...styles,
        center: "",
        container:
          "md:flex-row items-center pb-4 md:justify-center lg:justify-around lg:px-0",
        img: "w-72 md:pr-12 md:w-80 md:h-96",
        secondItem: "md:w-full xl:w-5/12 ",
        detail: "md:text-lg lg:w-9/12 text-left",
      });
    }
  }, []);

  const { center, img, container, secondItem, detail } = styles;
  return (
    <div className={`flex flex-col lg:flex-row md:px-6  ${container}`}>
      <img src={image} srcSet={imageResponsive} className={`lg:w-1/3 ${img}`} />
      <div className={`w-full md:pt-6 ${secondItem}`}>
        {newProduct && (
          <p
            className={`text-lg font-semibold mt-6 text-primary charSpaceWidest ${center}`}
          >
            NEW PRODUCT
          </p>
        )}
        <HeaderTwo extraStyle={`mt-4 ${center} md:font-medium`}>
          {productName} <br /> {title}
        </HeaderTwo>
        <p className={`py-3 ${detail}`}>{details}</p>
        {!inProductPage && (
          <ButtonOne
            onClick={() => {
              router.push(`/product-details/${slug}`);
            }}
            text="SEE PRODUCT"
            extraStyle="py-4 mt-6 font-bold w-2/3 lg:w-5/12 mx-auto lg:mx-0 text-center"
          />
        )}
        {inProductPage && (
          <div className="pt-3">
            <p className="font-semibold">${amount}</p>
            <div className="flex justify-between my-4 lg:max-w-min h-12 text-xs">
              <Button
                text={`${pric}`}
                extraStyle="w-40 mr-4 max-w-lg flex justify-center items-center"
              />
              <ButtonOne
                onClick={() =>
                  dispatch(addTocart(productName.split(" ")[0].toLowerCase()))
                }
                text="add to cart"
                extraStyle="w-48 flex items-center font-bold uppercase px-0"
              />
            </div>
          </div>
        )}
      </div>

      <style jsx>
        {`
          .charSpaceWidest {
            letter-spacing: 0.4em;
          }
        `}
      </style>
    </div>
  );
};

export default Product;
