import React from "react";
import Nav from "../../components/Nav";
import ProductDetailContainer from "../../components/ProductDetailContainer";
import { productDetails } from "../../components/ProductData";
import { ProductDetails } from "../../components/ProductDetailContainer";

type Props = {
  productDescription: ProductDetails;
};

export const Product = ({ productDescription }: Props) => {
  return (
    <div>
      <ProductDetailContainer productDetails={productDescription} />
    </div>
  );
};

export const getStaticPaths = async () => {
  const paths = Object.keys(productDetails).map((productName) => ({
    params: { name: productName },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: { name: string };
}) => {
  const name = params.name;
  const productDescription = productDetails[`${name}`];
  return {
    props: { productDescription },
  };
};
export default Product;
