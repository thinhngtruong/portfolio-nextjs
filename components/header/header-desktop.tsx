import React from "react";
import { Typography, Space } from "antd";
import styles from "@/styles/common.module.scss";
import Link from "next/link";
import { ROUTE_LIST } from "./routes";
import classnames from "classnames";
import { useRouter } from "next/router";

const { Title } = Typography;

export interface HeaderDesktopProps {}

const Header = (props: HeaderDesktopProps) => {
  const router = useRouter();

  return (
    <header
      className={classnames(styles["container-md"], styles["header-desktop"])}
    >
      <Space>
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
