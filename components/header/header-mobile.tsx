import styles from "@/styles/common.module.scss";
import classnames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef } from "react";
import { ROUTE_LIST } from "./routes";
import { ThemeStyle } from "./theme-style";

export interface HeaderMobileProps {
  isDarkMode: boolean;
  handleChangeThemeStyle: () => void;
}

const Header = ({ isDarkMode, handleChangeThemeStyle }: HeaderMobileProps) => {
  const menuBtnRef = useRef<HTMLAnchorElement>(null);
  const mainMenuRef = useRef<HTMLElement>(null);
  const router = useRouter();

  const handleClickMenu = () => {
    const menuBtn = menuBtnRef?.current;
    const mainMenu = mainMenuRef?.current;
    let body = document.querySelector("body");
    menuBtn?.classList.toggle(styles.act);
    if (menuBtn?.classList?.contains(styles.act)) {
      mainMenu?.classList.add(styles.act);
      if (body?.style) {
        body.style.overflow = "hidden";
      }
    } else {
      mainMenu?.classList.remove(styles.act);
      if (body?.style) {
        body.style.overflow = "";
      }
    }
  };

  const handleCloseMenu = () => {
    const menuBtn = menuBtnRef?.current;
    const mainMenu = document.querySelectorAll("." + styles["main-menu"])[0];
    let body = document.querySelector("body");
    menuBtn?.classList.remove(styles.act);
    mainMenu.classList.remove(styles.act);
    if (body?.style) {
      body.style.overflow = "";
    }
  };

  return (
    <header
      className={classnames(styles["container-sm"], styles["header-mobile"])}
    >
      <Link href="/">
        <a>
          <span>Thinh</span> <span>Nguyen</span>
        </a>
      </Link>
      <ThemeStyle
        isDarkMode={isDarkMode}
        handleChangeThemeStyle={handleChangeThemeStyle}
      />
      <a
        href="#"
        className={styles["menu-btn"]}
        onClick={handleClickMenu}
        ref={menuBtnRef}
      >
        <span className={styles.lines}></span>
      </a>
      <nav className={styles["main-menu"]} ref={mainMenuRef}>
        <ul onClick={handleCloseMenu}>
          {ROUTE_LIST.map((route, index) => (
            <li key={route.path + index}>
              <Link href={route.path} passHref>
                <a
                  className={classnames(styles["header-link"], {
                    [styles["header-active"]]: router.pathname === route.path,
                  })}
                >
                  {route.label}
                </a>
              </Link>
            </li>
          ))}
          {/* <li>
            <a href="#">Intro</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Team</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
