import { Footer, Header } from "@/components/common";
import { LayoutProps } from "@/models/index";
import styles from "@/styles/common.module.scss";
import { useEffect, useState } from "react";
import { BackToTop } from "@/components/icons";
import Image from "next/image";
import MainBackground from "@/images/main-bg.png";
import MainBackground3 from "@/images/main-bg-3.png";
import Lottie from "react-lottie";
import * as animationData from "@/assets/86396-loading.json";
import { isMobile } from "react-device-detect";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const LOADING_IMG_SIZE = isMobile ? 300 : 400;

export function MainLayout({ children }: LayoutProps) {
  const [backToTop, setBackToTop] = useState(false);
  const [isStopped, setIsStopped] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
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

    setTimeout(() => {
      setIsStopped(true);
    }, 3000);

    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  return (
    <>
      {!isStopped ? (
        <div style={{ display: "flex", alignItems: "center", height: "100vh" }}>
          <Lottie options={defaultOptions} height={LOADING_IMG_SIZE} width={LOADING_IMG_SIZE} />
        </div>
      ) : (
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
      )}
    </>
  );
}
