import React from "react";
import { Typography, Space } from "antd";
import styles from "@/styles/common.module.scss";
import Link from "next/link";
import { ROUTE_LIST } from "./routes";
import classnames from "classnames";
import { useRouter } from "next/router";
import Image from "next/image";
import Logo from "@/images/logo.png";
import Texty from "rc-texty";
import { useIntervalTitle } from "@/hooks/use-interval-title";

const { Title } = Typography;

export interface HeaderDesktopProps {}

const Header = (props: HeaderDesktopProps) => {
  const router = useRouter();
  const { showTitle } = useIntervalTitle();

  // console.log(showTitle)

  return (
    <header
      className={classnames(styles["container-md"], styles["header-desktop"])}
    >
      <Link href="/">
        <a>
          {/* <Image src={Logo} alt="Logo" width={50} height={30} /> */}
          <Texty
            type="scaleX"
            mode="smooth"
            className={styles["header-title"]}
            delay={600}
            interval={250}
          >
            {showTitle ? "Thinh Nguyen" : ""}
          </Texty>
        </a>
      </Link>
      <Space className={styles["header-link-wrapper"]}>
        {ROUTE_LIST.map((route, index) => (
          <Link key={route.path + index} href={route.path} passHref>
            <a
              className={classnames(styles["header-link"], {
                [styles["header-active"]]: router.pathname === route.path,
              })}
            >
              {route.label}
            </a>
          </Link>
        ))}
      </Space>
    </header>
  );
};

export default Header;
