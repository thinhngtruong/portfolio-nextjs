import React from "react";
import { CaretUpOutlined } from "@ant-design/icons";
import styles from "@/styles/common.module.scss";

interface Props {
  onClick: () => void;
  style: React.CSSProperties;
}

export const BackToTop = ({ onClick, style }: Props) => {
  return (
    <div className={styles["back-to-top"]} onClick={onClick} style={style}>
      <CaretUpOutlined height={30} width={30} />
    </div>
  );
};
