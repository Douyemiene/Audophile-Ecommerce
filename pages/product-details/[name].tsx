import React from "react";
import ProductDetailContainer from "../../components/ProductDetailContainer";
import { productDetailsData } from "../../components/ProductData";
import { ProductDetails } from "../../components/ProductDetailContainer";
import products, { singleProductType } from "../../data/data";
// import singleProductType from "../../data/data";

// type Props = {
//   productDescription: ProductDetails;
// };

export const Product = ({
  productDescription,
}: {
  productDescription: singleProductType;
}) => {
  return (
    <div>
      <ProductDetailContainer productDetails={productDescription} />
    </div>
  );
};

export const getStaticPaths = async () => {
  // const paths = Object.keys(productDetailsData).map((productName) => ({
  //   params: { name: productName },
  // }));

  const paths = products.map((pdt) => ({
    params: { name: pdt.slug },
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
  // const productDescription = productDetailsData[`${name}`];

  const idx = products.findIndex((pdt) => {
    return pdt.slug == name;
  });

  return {
    props: { productDescription: products[idx] },
  };
};

// export const getStaticProps = async ({
//   params,
// }: {
//   params: { name: string };
// }) => {
//   const name = params.name;
//   const productDescription = productDetailsData[`${name}`];

//   return {
//     props: { productDescription },
//   };
//};
export default Product;
