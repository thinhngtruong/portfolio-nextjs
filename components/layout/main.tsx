import { LayoutProps } from "@/models/index";
import React, { useEffect } from "react";
import Link from "next/link";
import { Header, Footer } from "@/components/common";
import { Space } from "antd";
import styles from "@/styles/common.module.scss";
import classnames from "classnames";

export function MainLayout({ children }: LayoutProps) {
  useEffect(() => {
    console.log("MainLayout mounting");

    return () => console.log("MainLayout unmounting");
  }, []);

  return (
    <div className={styles["main-wrapper"]}>
      <Header />
      <h1>Main Layout</h1>

      <div
        style={{ backgroundColor: "red" }}
        className={classnames(styles["container"],styles["container-sm"])}
      >
        Container 1
      </div>
      <div
        style={{ backgroundColor: "red" }}
        className={classnames(styles["container"],styles["container-md"])}
      >
        Container 2
      </div>

      <main style={{ flexGrow: 1 }}>
        <Space>
          <Link href="/">
            <a>Home</a>
          </Link>

          <Link href="/blog">
            <a>Blog</a>
          </Link>

          <Link href="/works">
            <a>Works</a>
          </Link>
        </Space>
      </main>

      <div style={{ flexGrow: 1 }}>{children}</div>

      <Footer />
    </div>
  );
}
