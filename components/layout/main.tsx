import { Footer, Header } from "@/components/common";
import { LayoutProps } from "@/models/index";
import styles from "@/styles/common.module.scss";
import { useEffect } from "react";

export function MainLayout({ children }: LayoutProps) {
  useEffect(() => {
    console.log("MainLayout mounting");

    return () => console.log("MainLayout unmounting");
  }, []);

  return (
    <div className={styles["main-wrapper"]}>
      <Header />

      <div className={styles["container-md"]} style={{ flexGrow: 1 }}>
        {children}
      </div>

      <Footer />
    </div>
  );
}
