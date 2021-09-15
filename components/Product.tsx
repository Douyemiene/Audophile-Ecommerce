import React, { useState } from "react";
import { useEffect } from "react";
import { Button, ButtonOne } from "./Buttons";
import { HeaderTwo } from "./Headings";

export type ProductType = {
  image: string;
  imageResponsive?: string;
  newProduct?: boolean;
  productName: string;
  title: string;
  details: string;
  inProductPage?: boolean;
  lgReorder?: boolean;
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
}: ProductType) => {
  //styles for product components with add-to-cart

  const [styles, setStyles] = useState({
    center: "text-center lg:text-left",
    container: "pb-20 lg:flex lg:justify-around lg:w-full",
    img: "lg:w-1/2",
    secondItem: `lg:w-4/12 lg:flex lg:flex-col lg:justify-start lg:text-left ml-48 lg:ml-0`,
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
        center: "lg:",
        container: "md:flex-row items-center pb-4 md:justify-center",
        img: "w-72 pr-16 md:w-64 md:h-96",
        secondItem: "md:w-full xl:w-6/12 ",
        detail: "md:text-lg lg:w-9/12 text-left",
      });
    }
  }, []);

  const { center, img, container, secondItem, detail } = styles;
  return (
    <div className={`flex flex-col lg:flex-row md:px-6 lg:px-12 ${container}`}>
      <img
        src={image}
        srcSet={imageResponsive}
        className={`w-full lg:w-1/3 ${img}`}
      />
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
            text="SEE PRODUCT"
            extraStyle="py-4 mt-6 font-bold w-2/3 lg:w-5/12 mx-auto lg:mx-0 text-center"
          />
        )}
        {inProductPage && (
          <div className="pt-3">
            <p className="font-semibold">$amount</p>
            <div className="flex justify-between my-4 lg:max-w-min h-12 text-sm">
              <Button
                text="1"
                extraStyle="w-40 mr-4 max-w-lg flex justify-center items-center"
              />
              <ButtonOne
                text="add to cart"
                extraStyle="w-44 flex items-center uppercase"
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
