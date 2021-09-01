import React, { ReactNode } from "react";
import Head from "next/head";
//components
import Nav from "../components/Nav";
import BeforeFooter from "../components/BeforeFooter";
import Footer from "../components/Footer";

type Props = {
  title: string;
  children: ReactNode;
  nav?: ReactNode;
};

export const LandingLayout = ({ title, children, nav }: Props) => {
  return (
    <div className="">
      <Head>
        <title>{title}</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      {nav && <Nav />}
      {children}
      <BeforeFooter />
      <Footer />
    </div>
  );
};
