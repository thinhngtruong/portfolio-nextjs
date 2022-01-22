import { useContext } from "react";
import styles from "@/styles/common.module.scss";
import { Space } from "antd";
import classnames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { ROUTE_LIST } from "./routes";
import { Moon, Sun } from "@/components/icons";
import { ThemeContext } from "@/components/context";
import { LIGHT_MODE, DARK_MODE } from "@/constants/index";

export interface HeaderDesktopProps {}

const Header = (props: HeaderDesktopProps) => {
  const router = useRouter();
  const theme = useContext(ThemeContext);

  const { isDarkMode } = theme.state;

  const handleChangeThemeStyle = () => {
    theme.dispatch({ type: isDarkMode ? LIGHT_MODE : DARK_MODE });
  };

  return (
    <header
      className={classnames(styles["container-md"], styles["header-desktop"])}
    >
      <Link href="/">
        <a>
          <span>Thinh</span> <span>Nguyen</span>
        </a>
      </Link>
      <Space className={styles["header-link-wrapper"]}>
        <div className={styles["theme-style-wrapper"]}>
          <input
            type="checkbox"
            className={styles["theme-style-cb"]}
            id="checkbox"
            onChange={handleChangeThemeStyle}
          />
          <label htmlFor="checkbox" className={styles["theme-style-lb"]}>
            <Moon />
            <Sun />
            <div className={styles["theme-style-ball"]}></div>
          </label>
        </div>
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
