import { Footer, Header } from "@/components/common";
import { LayoutProps } from "@/models/index";
import styles from "@/styles/common.module.scss";
import { useEffect, useState } from "react";
import { BackToTop } from "@/components/icons";
import Image from "next/image";
import MainBackground from "@/images/main-bg.png";
import MainBackground3 from "@/images/main-bg-3.png";

export function MainLayout({ children }: LayoutProps) {
  const [backToTop, setBackToTop] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    console.log(scrolled);
    if (scrolled > 300) {
      setBackToTop(true);
    } else if (scrolled <= 300) {
      setBackToTop(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);

    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  return (
    <div className={styles["main-wrapper"]}>
      <Header />

      <div className={styles["main-bg"]}>
        <Image src={MainBackground} alt="Main background"></Image>
      </div>
      <div className={styles["main-bg-3"]}>
        <Image src={MainBackground3} alt="Main background"></Image>
      </div>

      <BackToTop
        onClick={scrollToTop}
        style={{
          opacity: backToTop ? 1 : 0,
          visibility: backToTop ? "visible" : "hidden",
        }}
      />

      <section className={styles["container-md"]} style={{ flexGrow: 1 }}>
        {children}
      </section>

      <Footer />
    </div>
  );
}
