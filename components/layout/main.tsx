import { Footer, Header } from "@/components/common";
import { LayoutProps } from "@/models/index";
import styles from "@/styles/common.module.scss";
import { useEffect } from "react";
import Image from "next/image";
import MainBackground from "@/images/main-bg.png";

export function MainLayout({ children }: LayoutProps) {
  useEffect(() => {
    console.log("MainLayout mounting");

    return () => console.log("MainLayout unmounting");
  }, []);

  return (
    <div className={styles["main-wrapper"]}>
      <Header />

      <div className={styles["main-bg"]}>
        <Image src={MainBackground} alt="Main background"></Image>
      </div>

      <section className={styles["container-md"]} style={{ flexGrow: 1 }}>
        {children}
      </section>

      <Footer />
    </div>
  );
}
