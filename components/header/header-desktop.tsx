import styles from "@/styles/common.module.scss";
import { Space } from "antd";
import classnames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { ROUTE_LIST } from "./routes";

export interface HeaderDesktopProps {}

const Header = (props: HeaderDesktopProps) => {
  const router = useRouter();

  return (
    <header
      className={classnames(styles["container-md"], styles["header-desktop"])}
    >
      <Link href="/">
        <a>
          <span>Thinh</span>
          {" "}
          <span>Nguyen</span>
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
