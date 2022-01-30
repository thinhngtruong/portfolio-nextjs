import React from "react";
import styles from "@/styles/common.module.scss";
import { Moon, Sun } from "@/components/icons";

type Props = {
  isDarkMode: boolean;
  handleChangeThemeStyle: () => void;
};

export const ThemeStyle = (props: Props) => {
  const { isDarkMode, handleChangeThemeStyle } = props;
  return (
    <div className={styles["theme-style-wrapper"]}>
      <input
        checked={isDarkMode ? true : false}
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
  );
};
