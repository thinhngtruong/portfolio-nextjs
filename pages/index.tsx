import { MainLayout } from "@/components/layout";
import { NextPageWithLayout } from "@/models/common";
import { HeroSection } from "@/components/home";
import { Space } from "antd";

const HomePage: NextPageWithLayout = () => {
  return <HeroSection />;
};

export default HomePage;

HomePage.Layout = MainLayout;
