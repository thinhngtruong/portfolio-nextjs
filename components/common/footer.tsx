import React from "react";
import { Typography } from "antd";
import styles from "@/styles/common.module.scss";
import Link from "next/link";

const { Text } = Typography;

interface FooterProps {}

export const Footer = (props: FooterProps) => {
  return (
    <footer className={styles.footer}>
      <div className={styles["container-md"]}>
        <Text>
          This Website is built by <b>NextJS</b>, <b>NodeJS</b> with <b>Typescript</b>.
          <br />
          Copyright © 2022
          <Link href="https://facebook.com/nguyen.tr.thinh">
            <a> Thinh Nguyen</a>
          </Link>
          . All rights reserved.
        </Text>
      </div>
    </footer>
  );
};
