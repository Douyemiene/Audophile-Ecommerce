import type { NextPage } from "next";
import { LandingLayout } from "../../components/LandingLayout";
import Product from "../../components/Product";

//components
import { SharedCategory } from "../../components/SharedCategory";
import { SharedHeader } from "../../components/SharedHeader";
import { ProductType } from "../../components/Product";

const Earphones: NextPage = () => {
  const products: ProductType[] = [
    {
      image: "/assets/product-yx1-earphones/mobile/image-product.jpg",
      imageResponsive:
        "/assets/product-yx1-earphones/mobile/image-product.jpg 654w, /assets/product-yx1-earphones/tablet/image-product.jpg 562w, /assets/product-yx1-earphones/desktop/image-product.jpg 1080w",
      productName: "YX1 WIRELESS",
      newProduct: true,
      title: "Earphone",
      details:
        "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
    },
  ];
  return (
    <LandingLayout title="Category | Earphones">
      <SharedHeader title="Earphones" />
      <main>
        <section className="py-12 px-6">
          {products.map(
            ({ image, newProduct, productName, title, details }) => (
              <Product
                key={productName}
                image={image}
                newProduct={newProduct}
                productName={productName}
                title={title}
                details={details}
              />
            )
          )}
        </section>

        <section className="py-20 px-6">
          <SharedCategory />
        </section>
      </main>

      <style jsx>{`
        .charSpaceWidest {
          letter-spacing: 0.4em;
        }
      `}</style>
    </LandingLayout>
  );
};

export default Earphones;
