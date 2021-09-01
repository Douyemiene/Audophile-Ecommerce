import type { NextPage } from "next";
import { LandingLayout } from "../../components/LandingLayout";
import Product from "../../components/Product";

//components
import { SharedCategory } from "../../components/SharedCategory";
import { SharedHeader } from "../../components/SharedHeader";
import { ProductType } from "../../components/Product";

const Home: NextPage = () => {
  const products: ProductType[] = [
    {
      image:
        "/assets/product-xx99-mark-two-headphones/mobile/image-product.jpg",
      productName: " XX99 MARK II",
      newProduct: true,
      title: "headpones",
      details:
        "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    },
    {
      image:
        "/assets/product-xx99-mark-one-headphones/mobile/image-product.jpg",
      productName: "XX99 MARK I",
      newProduct: false,
      title: "headpones",
      details:
        "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
    },
    {
      image: "/assets/product-xx59-headphones/mobile/image-product.jpg",
      productName: "XX59",
      newProduct: false,
      title: "headpones",
      details:
        "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
    },
  ];
  return (
    <LandingLayout title="Category | Headpones">
      <SharedHeader />
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

export default Home;
