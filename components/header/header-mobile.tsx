import styles from "@/styles/common.module.scss";
import { MenuOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import classnames from "classnames";
import Link from "next/link";
import Image from "next/image";
import Logo from '@/images/logo.png';
import Texty from "rc-texty";
import { useIntervalTitle } from "@/hooks/use-interval-title";

const { Title } = Typography;

export interface HeaderMobileProps {}

const Header = (props: HeaderMobileProps) => {
  const { showTitle } = useIntervalTitle();

  return (
    <header
      className={classnames(styles["container-sm"], styles["header-mobile"])}
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
      <MenuOutlined className={styles.menu} />
    </header>
  );
};

export default Header;
