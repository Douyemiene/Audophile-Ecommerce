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
  productDetails: ProductDetails;
}) => {
  const router = useRouter();
  const {
    image,
    productName,
    newProduct,
    title,
    details,
    amount,
    features,
    inTheBox,
  } = productDetails;
  return (
    <div className="">
      <Head>
        <title>Product Detail: {title}</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <Nav black={true} />

      <section className="px-6 pt-6">
        <button className="mb-8" onClick={() => router.back()}>
          Go back
        </button>
        <Product
          dontCenter
          key={productName}
          image={image}
          newProduct={newProduct}
          productName={productName}
          title={title}
          details={details}
        />
        <p className="font-semibold">${amount}</p>
        <div className="flex justify-between my-4">
          <Button text="1" extraStyle="text-center w-32" />
          <ButtonOne text="add to cart" />
        </div>
      </section>
      <section className="px-6 pt-12">
        <div>
          <HeaderFour>FEATURES</HeaderFour>
          <p>{features}</p>
        </div>
        <div className="mt-12 mb-16">
          <HeaderFour extraStyle="mb-2">In the Box</HeaderFour>
          <p>
            {inTheBox.map((item, id) => (
              <p key={id}>
                <span className="text-primary font-semibold pr-3">
                  {item.slice(0, 2)}
                </span>{" "}
                {item.slice(2)}
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
