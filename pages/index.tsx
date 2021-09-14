import type { NextPage } from "next";
import { LandingLayout } from "../components/LandingLayout";
import { useRouter } from "next/router";

//components
import { ButtonOne, ButtonTwo } from "../components/Buttons";
import Nav from "../components/Nav";
import { HeaderThree, HeaderTwo } from "../components/Headings";
import { SharedCategory } from "../components/SharedCategory";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const router = useRouter();
  const [black, setBlack] = useState(false);
  useEffect(() => {
    router.prefetch("/product-details/yx1wireless");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setBlack(true);
      } else {
        setBlack(false);
      }
    });
  }, []);
  return (
    <LandingLayout title="home">
      <header className="flex flex-col lg:px-32 h-screen bg-center bg-contain bg-header-mobile md:bg-header-tablet lg:bg-header-desktop text-white">
        <Nav black={black} />
        <div className="flex flex-col flex-grow justify-center items-center lg:items-start px-4 lg:w-1/2">
          <p className="text-gray-400 font-thin text-sm charSpaceWidest">
            NEW PRODUCT
          </p>
          <HeaderTwo extraStyle="mt-4 text-center lg:text-left md:text-6xl ">
            XX99 MARK II <br /> HEADPHONES
          </HeaderTwo>
          <p className="text-center lg:text-left py-6 w-11/12 md:w-5/12 lg:w-8/12 text-gray-300 text-sm lg:text-base font-medium lg:font-normal">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <ButtonOne
            onClick={() => {
              router.push("/product-details/yx1wireless");
            }}
            text="SEE PRODUCT"
            extraStyle="py-4 text-sm "
          />
        </div>
      </header>
      <main>
        <section className="py-20 md:pb-0 shadow-lg lg:shadow-none md:pt-32 px-6 lg:px-0 md:px-12 lg:mx-24 flex flex-col md:flex-row md:justify-around">
          <SharedCategory />
        </section>
        <section className=" bg-primary rounded-md px-6 mx-4 lg:mt-6 lg:mx-24 flex flex-col lg:relative lg:overflow-hidden lg:flex lg:flex-row lg:justify-end justify-center items-center zx9">
          <img
            srcSet="/assets/home/mobile/image-speaker-zx9.png 320w, /assets/home/tablet/image-speaker-zx9.png 366w, /assets/home/desktop/image-speaker-zx9.png 756w"
            src="./assets/home/mobile/image-speaker-zx9.png"
            alt="zx9-speaker"
            className="zx9-img lg:w-1/3 lg:absolute lg:-bottom-6 lg:left-32"
          />
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left pt-8 lg:w-5/12">
            <HeaderThree extraStyle="text-white md:text-5xl md:font-semibold">
              zx9 <br /> speaker
            </HeaderThree>
            <p className="text-mygray py-6 md:w-1/2 lg:w-9/12">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <ButtonTwo
              onClick={() => {
                router.push("/product-details/yx2");
              }}
              text="SEE PRODUCT"
              extraStyle="bg-black w-48 py-3 md:font-normal md:text-sm"
            />
          </div>
        </section>
        <section className="mx-4 lg:mx-24 rounded-md my-6 lg:my-10 bg-zx7-speaker md:bg-zx7-speaker-t lg:bg-zx7-speaker-d md:px-12 h-80 bg-center bg-cover">
          <div className="h-full flex flex-col justify-center ml-6">
            <HeaderThree extraStyle="!font-semibold mb-12">
              ZX7-speaker
            </HeaderThree>
            <ButtonTwo
              text="see product"
              extraStyle="w-48 text-center uppercase py-2"
              inverted
            />
          </div>
        </section>
        <section className="flex flex-col lg:h-96 lg:mx-24 md:flex-row mx-4 bg-white rounded-md pb-24">
          <img
            srcSet="assets/home/mobile/image-earphones-yx1.jpg 654w, assets/home/tablet/image-earphones-yx1.jpg 678w, assets/home/desktop/image-earphones-yx1.jpg 540w"
            src="assets/home/mobile/image-earphones-yx1.jpg"
            className="w-full md:w-1/2 md:mr-4 rounded"
          />
          <div className="my-8 md:mb-0 md:flex-grow px-6 mt-4 bg-mygray py-8 md:mt-0 rounded">
            <HeaderThree extraStyle="mb-12">YX1 EARPHONES</HeaderThree>
            <ButtonTwo
              onClick={() => {
                router.push("/product-details/yx1wireless");
              }}
              text="see product"
              extraStyle="w-48 text-center uppercase py-2"
              inverted
            />
          </div>
        </section>
      </main>

      <style jsx>{`
        .zx9 {
          height: 600px;
        }
        .zx9-img {
          width: 170px;
        }
        .charSpaceWidest {
          letter-spacing: 0.4em;
        }
      `}</style>
    </LandingLayout>
  );
};

export default Home;
