import React from "react";
import { ButtonOne } from "./Buttons";
import { HeaderTwo } from "./Headings";

export type ProductType = {
  image: string;
  newProduct?: boolean;
  productName: string;
  title: string;
  details: string;
};

const Product = ({
  image,
  newProduct,
  productName,
  title,
  details,
}: ProductType) => {
  return (
    <div className="flex flex-col pb-20">
      <img src={image} />
      {newProduct && (
        <p className="text-lg text-center font-semibold mt-6 text-primary charSpaceWidest">
          NEW PRODUCT
        </p>
      )}
      <HeaderTwo extraStyle="mt-4 text-center">
        {productName} <br /> {title}
      </HeaderTwo>
      <p className="py-3 text-center">{details}</p>
      <ButtonOne
        text="SEE PRODUCT"
        extraStyle="py-4 mt-6 font-bold w-2/3 mx-auto text-center"
      />

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
