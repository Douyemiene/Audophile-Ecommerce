import { ProductType } from "../components/Product";

type ProductofProductsType = {
  [index: string]: ProductType[];
};

export const productOfProducts: ProductofProductsType = {
  speakers: [
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
  ],
  headphones: [
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
  ],
  earphones: [
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
  ],
};
