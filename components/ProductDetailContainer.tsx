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

type Props = {
  title: string;
  children: ReactNode;
};

const placeHolder = {
  image: "/assets/product-yx1-earphones/mobile/image-product.jpg",
  productName: "YX1 WIRELESS",
  newProduct: true,
  title: "Earphone",
  details:
    "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
  amount: 2344,
  features: `As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical
         listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz. 

      From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. 
      Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.`,
  inTheBox: [
    "1x Headphone Unit",
    "1x Headphone unit",
    "2x Replacement earcups",
    "1x User manual",
    "1x 3.5mm 5m audio cable",
    "1x Travel bag ",
  ],
};

const ProductDetailContainer = ({ title, children }: Props) => {
  const router = useRouter();
  const {
    image,
    productName,
    newProduct,
    details,
    amount,
    features,
    inTheBox,
  } = placeHolder;
  return (
    <div className="">
      <Head>
        <title>Product Detail: {title}</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <Nav />

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
            {inTheBox.map((item) => (
              <p>
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
