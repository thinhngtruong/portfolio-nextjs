import { HeroSection } from "@/components/home";
import { MainLayout } from "@/components/layout";
import { NextPageWithLayout } from "@/models/common";
import Head from "next/head";

const HomePage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Thinh Nguyen | Portfolio</title>
      </Head>
      <HeroSection />
    </>
  );
};

export default HomePage;

HomePage.Layout = MainLayout;
