import React, { ReactNode } from "react";
import Head from "next/head";
//components
import Nav from "../components/Nav";
import BeforeFooter from "../components/BeforeFooter";
import Footer from "../components/Footer";
import Product from "./Product";
import { useRouter } from "next/router";
import { Button, ButtonOne } from "./Buttons";
import { HeaderFour } from "./Headings";
import { singleProductType } from "../data/data";

export type ProductDetails = {
  image: string;
  productName: string;
  newProduct: boolean;
  title: string;
  details: string;
  amount: number;
  features: string;
  inTheBox: string[];
};

const ProductDetailContainer = ({
  productDetails,
}: {
  productDetails: singleProductType;
}) => {
  const router = useRouter();
  // const {
  //   image,
  //   productName,
  //   newProduct,
  //   title,
  //   details,
  //   amount,
  //   features,
  //   inTheBox,
  // } = productDetails;

  const {
    slug,
    name,
    image,
    category,
    categoryImage,
    includes,
    price,
    description,
    features,
  } = productDetails;

  const imageResp = `${image.mobile} 654w, ${image.tablet} 562w, ${image.desktop} 1080w`;

  return (
    <div>
      <Head>
        <title>Product Detail: {slug}</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <Nav black={true} />

      <section className="px-6 pt-6 xl:px-12">
        <button
          className="mb-8 mt-20 md:24 lg:mt-4 md:text-xl"
          onClick={() => router.back()}
        >
          Go back
        </button>
        <Product
          inProductPage
          key={name}
          slug={slug}
          amount={price}
          image={image.mobile}
          imageResponsive={imageResp}
          newProduct={productDetails.new}
          productName={name}
          title={category}
          details={description}
        />
        {/* <p className="font-semibold">${amount}</p>
        <div className="flex justify-between my-4 lg:w-3/4 lg:pl-12">
          <Button text="1" extraStyle="text-center w-32" />
          <ButtonOne text="add to cart" />
        </div> */}
      </section>
      <section className="px-6 pt-12 lg:flex justify-between lg:px-24 lg:py-24">
        <div className="lg:w-5/12">
          <HeaderFour>FEATURES</HeaderFour>
          <p>{features}</p>
        </div>
        <div className="md:flex lg:flex-col md:justify-center mt-12 mb-16 md:text-xl lg:w-1/2 md:px-2">
          <HeaderFour extraStyle="mb-2 md:mr-12 md:font-semibold">
            In the Box
          </HeaderFour>
          <p>
            {includes.map((category, id) => (
              <p key={id}>
                <span className="text-primary font-semibold pr-3">
                  {category.quantity}
                </span>{" "}
                {category.item}
              </p>
            ))}
          </p>
        </div>
      </section>
      <BeforeFooter />
      <Footer />
    </div>
  );
};

export default ProductDetailContainer;
