import { MainLayout } from "@/components/layout";
import { NextPageWithLayout } from "@/models/common";

const HomePage: NextPageWithLayout = () => {
  return <div>Home page</div>;
};

export default HomePage;

HomePage.Layout = MainLayout;
