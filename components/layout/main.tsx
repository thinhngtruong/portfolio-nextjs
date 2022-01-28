import { Footer, Header } from "@/components/common";
import { LayoutProps } from "@/models/index";
import styles from "@/styles/common.module.scss";
import { useEffect, useState } from "react";
import { BackToTop } from "@/components/icons";
import Image from "next/image";
import MainBackground from "@/images/main-bg.png";
import MainBackground2 from "@/images/main-bg-2.png";
import MainBackground3 from "@/images/main-bg-3.png";
import MainBackground4 from "@/images/main-bg-4.png";
import Lottie from "react-lottie";
import * as animationData from "@/assets/86396-loading.json";
import { isMobile } from "react-device-detect";
import { isProduction } from "@/utils/index";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const LOADING_IMG_SIZE = isMobile ? 300 : 400;

const BACKGROUNDS = [
  {
    src: MainBackground,
    isHidden: false,
  },
  {
    src: MainBackground2,
    isHidden: true,
  },
  {
    src: MainBackground3,
    isHidden: true,
  },
  {
    src: MainBackground4,
    isHidden: true,
  },
];

export function MainLayout({ children }: LayoutProps) {
  const [backToTop, setBackToTop] = useState(false);
  const [isShowLoading, setIsShowLoading] = useState(
    isProduction() ? true : false
  );

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

    if (isProduction()) {
      setTimeout(() => {
        setIsShowLoading(false);
      }, 3000);
    }

    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  return (
    <>
      {isShowLoading ? (
        <div style={{ display: "flex", alignItems: "center", height: "100vh" }}>
          <Lottie
            options={defaultOptions}
            height={LOADING_IMG_SIZE}
            width={LOADING_IMG_SIZE}
          />
        </div>
      ) : (
        <div className={styles["main-wrapper"]}>
          <Header />

          {BACKGROUNDS.map(
            (background, index) =>
              !background.isHidden && (
                <div
                  key={index}
                  className={
                    styles[`main-bg${index === 0 ? "" : "-" + (index + 1)}`]
                  }
                >
                  <Image src={background.src} alt="Main background"></Image>
                </div>
              )
          )}

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
