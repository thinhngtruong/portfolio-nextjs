import React from "react";
import styles from "@/styles/404.module.scss";
import Link from "next/link";
import Img404 from "@/images/404.svg";
import Image from "next/image";

interface Page404Props {}

const Page404 = (props: Page404Props) => {
  return (
    <section className={styles["error-area"]}>
      <div className={styles.container}>
        <h3>Page not found!</h3>
        <p>
          We’re sorry, the page you have looked for does not exist in our
          database!
          <br />
          Maybe go to our home page or try to use a search?
        </p>
        <Link href="/">
          <a>Go Back to home Page</a>
        </Link>
        <br />
        <h1>404</h1>
        <Image className={styles.img} src={Img404} alt="404 Page Image"></Image>
      </div>
    </section>
  );
};

export default Page404;
