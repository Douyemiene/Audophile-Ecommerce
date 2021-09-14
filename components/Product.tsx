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
};

const Product = ({
  image,
  imageResponsive,
  newProduct,
  productName,
  title,
  details,
  inProductPage,
}: ProductType) => {
  const [center, setCenter] = useState("text-center");
  const [styles, setStyles] = useState({
    center: "text-center",
    marginBottom: "pb-20",
    image: "",
  });
  const [marginBottom, setMarginBottom] = useState(" pb-20");
  useEffect(() => {
    if (inProductPage) {
      setCenter("");
      setMarginBottom("md:flex-row items-center pb-4");
      setStyles({ ...styles, image: "w-72 px-6" });
    }
  }, []);
  return (
    <div
      className={`flex flex-col lg:flex-row md:px-6 lg:px-12 ${marginBottom}`}
    >
      <img
        src={image}
        srcSet={imageResponsive}
        className={`lg:w-1/2 md:h-96 ${styles.image}`}
      />
      <div className="md:pt-6">
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
        <p
          className={`py-3 ${center} md:text-lg lg:w-3/4 lg:text-center lg:mx-auto`}
        >
          {details}
        </p>
        {center && (
          <ButtonOne
            text="SEE PRODUCT"
            extraStyle="py-4 mt-6 font-bold w-2/3 lg:w-5/12 mx-auto text-center"
          />
        )}
        {inProductPage && (
          <div className="pt-3">
            <p className="font-semibold">$amount</p>
            <div className="flex justify-between my-4 lg:w-3/4 lg:pl-12 h-12 text-sm">
              <Button
                text="1"
                extraStyle="flex-grow w-30 mr-4 flex justify-center items-center"
              />
              <ButtonOne
                text="add to cart"
                extraStyle="flex items-center uppercase"
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
