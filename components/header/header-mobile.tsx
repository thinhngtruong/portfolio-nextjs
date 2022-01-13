import React from "react";
import { Typography } from "antd";
import styles from "@/styles/common.module.scss";
import classnames from "classnames";
import { MenuOutlined } from "@ant-design/icons";
const { Title } = Typography;

export interface HeaderMobileProps {}

const Header = (props: HeaderMobileProps) => {
  return (
    <header
      className={classnames(styles["container-sm"], styles["header-mobile"])}
    >
      <MenuOutlined className={styles.menu} />
    </header>
  );
};

export default Header;
