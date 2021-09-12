import React, { useState } from "react";
import { useEffect } from "react";
import { ButtonOne } from "./Buttons";
import { HeaderTwo } from "./Headings";

export type ProductType = {
  image: string;
  imageResponsive?: string;
  newProduct?: boolean;
  productName: string;
  title: string;
  details: string;
  dontCenter?: boolean;
};

const Product = ({
  image,
  imageResponsive,
  newProduct,
  productName,
  title,
  details,
  dontCenter,
}: ProductType) => {
  const [center, setCenter] = useState("text-center");
  const [marginBottom, setMarginBottom] = useState("pb-20");
  useEffect(() => {
    if (dontCenter) {
      setCenter("");
      setMarginBottom("pb-4");
    }
  }, []);
  return (
    <div
      className={`flex flex-col lg:flex-row md:px-10 lg:px-12 ${marginBottom}`}
    >
      <img src={image} srcSet={imageResponsive} className="lg:w-1/2 md:h-96" />
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
        <p className={`py-3 ${center} md:text-lg`}>{details}</p>
        {center && (
          <ButtonOne
            text="SEE PRODUCT"
            extraStyle="py-4 mt-6 font-bold w-2/3 lg:w-5/12 mx-auto text-center"
          />
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
