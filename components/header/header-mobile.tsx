import styles from "@/styles/common.module.scss";
import { MenuOutlined } from "@ant-design/icons";
import classnames from "classnames";
import Link from "next/link";


export interface HeaderMobileProps {}

const Header = (props: HeaderMobileProps) => {
  return (
    <header
      className={classnames(styles["container-sm"], styles["header-mobile"])}
    >
      <Link href="/">
        <a>
          <span>Thinh</span>
          {" "}
          <span>Nguyen</span>
        </a>
      </Link>
      <MenuOutlined className={styles.menu} />
    </header>
  );
};

export default Header;
