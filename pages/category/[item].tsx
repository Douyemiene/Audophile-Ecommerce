import type { NextPage } from "next";
import { LandingLayout } from "../../components/LandingLayout";
import Product from "../../components/Product";
import products, { singleProductType } from "../../data/data";

//components
import { SharedCategory } from "../../components/SharedCategory";
import { SharedHeader } from "../../components/SharedHeader";
// import { ProductType } from "../../components/Product";
// import { useAppSelector } from "../../redux/hooks";

// type ItemProps = {
//   products: { [item: string]: ProductType[] };
// };

const Item = ({ products }: { products: singleProductType[] }) => {
  //const title = Object.keys(products)[0];
  const title = products[0].category;
  //const AppProducts = useAppSelector((state) => state.app.products);

  return (
    <LandingLayout title={`Category | ${title} `}>
      <SharedHeader title={title} />
      <main>
        <section className="py-12 px-6">
          {products.map((pdtCategory, idx) => {
            const { slug, name, categoryImage, category, price, description } =
              pdtCategory;
            const imageResp = `${categoryImage.mobile} 654w, ${categoryImage.tablet} 562w, ${categoryImage.desktop} 1080w`;
            let reOrder = false;

            if ((idx + 1) % 2 == 0) {
              console.log("works", idx);
              reOrder = true;
            }

            return (
              <Product
                key={name}
                slug={slug}
                amount={price}
                image={categoryImage.mobile}
                imageResponsive={imageResp}
                newProduct={pdtCategory.new}
                productName={name}
                title={category}
                details={description}
                lgReorder={reOrder}
              />
            );
          })}
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
  // const paths = Object.keys(productOfProducts).map((product) => ({
  //   params: { item: product },
  // }));
  let categories: Array<string> = [];
  //add the category if its not in the path
  products.forEach((pdt) => {
    if (!categories.includes(pdt.category)) {
      categories.push(pdt.category);
    }
  });

  const paths = categories.map((category) => ({ params: { item: category } }));
  //return ;

  console.log("paths", categories);

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { item: string } }) {
  const item = params.item;

  const category = products
    .filter((pdt) => {
      return pdt.category == item;
    })
    .map((pdt) => {
      if (pdt.category == item) {
        console.log("pdt.id", pdt.name, pdt.category);
        return pdt;
      }
    });

  //console.log("category", category.);
  // const products = { [item]: productOfProducts[params.item] };
  return {
    props: { products: category },
  };
}

export default Item;
