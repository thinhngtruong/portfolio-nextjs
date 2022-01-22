import React, { useContext } from "react";
import HeaderMobile from "./header-mobile";
import HeaderDesktop from "./header-desktop";
import styles from "@/styles/common.module.scss";
import Particles from "react-tsparticles";
import { AppContext } from "@/components/context";
import { LIGHT_MODE, DARK_MODE } from "@/constants/index";

interface HeaderProps {}

export const Header = (props: HeaderProps) => {
  const theme = useContext(AppContext);

  const { isDarkMode } = theme.state;

  const handleChangeThemeStyle = () => {
    theme.dispatch({ type: isDarkMode ? LIGHT_MODE : DARK_MODE });
  };

  return (
    <div className={styles["header-wrapper"]}>
      <div className={styles["particles-wrapper"]}>
        <Particles
          id="tsparticles"
          height="200px"
          width="100%"
          options={{
            fullScreen: { enable: false },
            background: {
              color: {
                value: "transparent",
              },
            },
            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.8,
                  size: 40,
                },
                push: {
                  quantity: 2,
                },
                repulse: {
                  distance: 80,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: isDarkMode ? "fff" : "#000",
              },
              links: {
                color: isDarkMode ? "fff" : "#000",
                distance: 100,
                enable: true,
                opacity: isDarkMode ? 1 : 0.3,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 3,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 100,
              },
              opacity: {
                value: 0.3,
              },
              shape: {
                type: "circle",
              },
              size: {
                random: true,
                value: 5,
              },
            },
            detectRetina: true,
          }}
        />
      </div>
      <HeaderMobile />
      <HeaderDesktop
        handleChangeThemeStyle={handleChangeThemeStyle}
        isDarkMode={isDarkMode}
      />
    </div>
  );
};
