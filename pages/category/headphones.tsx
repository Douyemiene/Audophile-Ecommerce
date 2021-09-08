import type { NextPage } from "next";
import { LandingLayout } from "../../components/LandingLayout";
import Product from "../../components/Product";

//components
import { SharedCategory } from "../../components/SharedCategory";
import { SharedHeader } from "../../components/SharedHeader";
import { ProductType } from "../../components/Product";

const Headpones: NextPage = () => {
  const products: ProductType[] = [
    {
      image:
        "/assets/product-xx99-mark-two-headphones/mobile/image-product.jpg",
      imageResponsive:
        "/assets/product-xx99-mark-two-headphones/mobile/image-product.jpg 654w, /assets/product-xx99-mark-two-headphones/tablet/image-product.jpg 562w, /assets/product-xx99-mark-two-headphones/desktop/image-product.jpg 1080w",
      productName: " XX99 MARK II",
      newProduct: true,
      title: "headpone",
      details:
        "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    },
    {
      image:
        "/assets/product-xx99-mark-one-headphones/mobile/image-product.jpg",
      imageResponsive:
        "/assets/product-xx99-mark-one-headphones/mobile/image-product.jpg 654w, /assets/product-xx99-mark-one-headphones/tablet/image-product.jpg 562w, /assets/product-xx99-mark-one-headphones/desktop/image-product.jpg 1080w",
      productName: "XX99 MARK I",
      newProduct: false,
      title: "headpone",
      details:
        "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
    },
    {
      image: "/assets/product-xx59-headphones/mobile/image-product.jpg",
      imageResponsive:
        "/assets/product-xx59-headphones/mobile/image-product.jpg 654w, /assets/product-xx59-headphones/tablet/image-product.jpg 562w, /assets/product-xx59-headphones/desktop/image-product.jpg 1080w",
      productName: "XX59",
      newProduct: false,
      title: "headpone",
      details:
        "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
    },
  ];
  return (
    <LandingLayout title="Category | Headpones">
      <SharedHeader title="headphones" />
      <main>
        <section className="py-12 px-6">
          {products.map(
            ({
              image,
              imageResponsive,
              newProduct,
              productName,
              title,
              details,
            }) => (
              <Product
                key={productName}
                image={image}
                imageResponsive={imageResponsive}
                newProduct={newProduct}
                productName={productName}
                title={title}
                details={details}
              />
            )
          )}
        </section>

        <section className="py-20 px-6 md:px-10 md:flex md:flex-row">
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

export default Headpones;
