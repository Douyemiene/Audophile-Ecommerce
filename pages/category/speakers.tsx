import type { NextPage } from "next";
import { LandingLayout } from "../../components/LandingLayout";
import Product from "../../components/Product";

//components
import { SharedCategory } from "../../components/SharedCategory";
import { SharedHeader } from "../../components/SharedHeader";
import { ProductType } from "../../components/Product";

const Speakers: NextPage = () => {
  const products: ProductType[] = [
    {
      image: "/assets/product-zx9-speaker/mobile/image-product.jpg",
      productName: "ZX9 speaker",
      newProduct: true,
      title: "speaker",
      details:
        "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
    },
    {
      image: "/assets/product-zx7-speaker/mobile/image-product.jpg",
      productName: "ZX7 speaker",
      newProduct: false,
      title: "speaker",
      details:
        "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
    },
  ];
  return (
    <LandingLayout title="Category | Speakers">
      <SharedHeader
        title="speakers
      "
      />
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

export default Speakers;
