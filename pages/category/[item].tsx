import type { NextPage } from "next";
import { LandingLayout } from "../../components/LandingLayout";
import Product from "../../components/Product";

//components
import { SharedCategory } from "../../components/SharedCategory";
import { SharedHeader } from "../../components/SharedHeader";
import { productOfProducts } from "../../data/productOfProducts";
import { ProductType } from "../../components/Product";

type ItemProps = {
  products: { [item: string]: ProductType[] };
};

const Item = ({ products }: ItemProps) => {
  const title = Object.keys(products)[0];
  return (
    <LandingLayout title={`Category | ${title} `}>
      <SharedHeader title={title} />
      <main>
        <section className="py-12 px-6">
          {Object.values(products)[0].map(
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

export async function getStaticPaths() {
  const paths = Object.keys(productOfProducts).map((product) => ({
    params: { item: product },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { item: string } }) {
  const item = params.item;
  const products = { [item]: productOfProducts[params.item] };
  return {
    props: { products },
  };
}

export default Item;
