import styles from "@/styles/home.module.scss";
import { Button, Typography } from "antd";
import {
  DownloadOutlined,
  GoogleOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import Avatar from "@/images/avatar.jpeg";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import QueueAnim from "rc-queue-anim";
import Link from "next/link";
import { FacebookIcon, LinkedinIcon } from "../svg";
import { isMobile } from "react-device-detect";

const { Text, Title } = Typography;

interface Props {}

export const HeroSection = (props: Props) => {
  const { text } = useTypewriter({
    words: isMobile ? ["Hello, I'm Thinh,"] : ["Hello, I am Thinh Nguyen,"],
    typeSpeed: 80,
  });

  return (
    <section className={styles["hero-section-wrapper"]}>
      <div className={styles["hero-section"]}>
        <Title level={1}>
          {text} <Cursor cursorStyle="_" />
        </Title>
        <QueueAnim type={"right"} delay={200} duration={700}>
          <div key="0">
            <Title
              level={1}
              style={{ marginTop: 0, textAlign: isMobile ? "center" : "left" }}
            >
              Software Engineer
            </Title>
          </div>
        </QueueAnim>
        <div className={styles.description}>
          <QueueAnim type={"right"} delay={200} duration={700}>
            <p key="1">
              <Text>
                As a dynamic, enthusiastic developer with high flexibility to
                adapt to the new working environment, I am seeking opportunities
                to improve myself and contribute to the company.
                <br />
                Strong engineering professional with a{" "}
                <b>Bachelor of Computer Engineering</b> from{" "}
                <b>University of Science.</b>
              </Text>
            </p>
            <p key="2">
              <Text className={styles["job-title"]}>
                {" "}
                A Front-end Developer with over 3 years of experience.
              </Text>
            </p>
          </QueueAnim>
        </div>
        <div className={styles["download-cv-btn"]}>
          <Button size="large" icon={<DownloadOutlined />}>
            Download My CV
          </Button>
        </div>
      </div>

      <div className={styles["profile-img-wrapper"]}>
        <Image src={Avatar} alt="avatar" width={240} height={240} />
        <ul className={styles["list-icon"]}>
          <li>
            <Link href="https://facebook.com/nguyen.tr.thinh">
              <a>
                <FacebookIcon />
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://linkedin.com/in/thinhngtruong">
              <a>
                <LinkedinIcon />
              </a>
            </Link>
          </li>
          <li>
            <Link href="mailto:thinh.ngtruong@gmail.com">
              <a>
                <GoogleOutlined />
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://github.com/thinhngtruong">
              <a>
                <GithubOutlined />
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};
