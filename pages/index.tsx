import type { NextPage } from "next";
import { LandingLayout } from "../components/LandingLayout";

//components
import { ButtonOne, ButtonTwo } from "../components/Buttons";
import Nav from "../components/Nav";
import { HeaderThree, HeaderTwo } from "../components/Headings";
import { SharedCategory } from "../components/SharedCategory";

const Home: NextPage = () => {
  return (
    <LandingLayout title="home">
      <header className="flex flex-col h-screen bg-center bg-contain bg-header-mobile md:bg-header-tablet lg:bg-header-desktop text-white">
        <Nav />

        <div className="flex flex-col flex-grow justify-center items-center px-4">
          <p className="text-gray-400 font-thin text-sm charSpaceWidest">
            NEW PRODUCT
          </p>
          <HeaderTwo extraStyle="mt-4 text-center">
            XX99 MARK II <br /> HEADPHONES
          </HeaderTwo>
          <p className="text-center py-6 w-11/12 text-gray-300 text-sm font-medium ">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <ButtonOne text="SEE PRODUCT" extraStyle="py-5 font-bold" />
        </div>
      </header>
      <main>
        <section className="py-20 px-6">
          <SharedCategory />
        </section>
        <section className="bg-primary rounded-md px-6 mx-4 flex flex-col justify-center items-center zx9">
          <img
            src="./assets/home/mobile/image-speaker-zx9.png"
            alt="zx9-speaker"
            className="zx9-img"
          />
          <div className="flex flex-col items-center text-center pt-8">
            <HeaderThree extraStyle="text-white">
              zx9 <br /> speaker
            </HeaderThree>
            <p className="text-white py-6">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <ButtonTwo text="SEE PRODUCT" extraStyle="bg-black w-48 py-3" />
          </div>
        </section>
        <section className="mx-4 rounded-md my-6 bg-zx7-speaker h-80 bg-center bg-cover">
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
        <section className="flex flex-col lg:flex-row mx-4 bg-white rounded-md">
          <img
            src="assets/home/mobile/image-earphones-yx1.jpg"
            className="w-full"
          />
          <div className="my-8 px-6 mt-4 bg-gray py-8">
            <HeaderThree extraStyle="font-semibold mb-12">
              YX1 EARPHONES
            </HeaderThree>
            <ButtonTwo
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
