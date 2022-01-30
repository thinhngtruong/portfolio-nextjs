import Avatar from "@/images/avatar.jpeg";
import styles from "@/styles/home.module.scss";
import {
  DownloadOutlined,
  GithubOutlined,
  GoogleOutlined,
} from "@ant-design/icons";
import { Button, Typography } from "antd";
import Image from "next/image";
import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { FacebookIcon, LinkedinIcon } from "@/components/icons";
import { Fade, JackInTheBox, Slide } from "react-awesome-reveal";
import { ConditionalWrapper } from "@/components/common";
import { useDeviceDetect } from "@/hooks/index";

const { Text, Title } = Typography;

interface Props {}

export const HeroSection = (props: Props) => {
  const { isMobile } = useDeviceDetect();
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
        <JackInTheBox delay={300}>
          <Title
            level={1}
            style={{ marginTop: 0, textAlign: isMobile ? "center" : "left" }}
          >
            Software Engineer
          </Title>
        </JackInTheBox>
        <div className={styles.description}>
          <Fade delay={500}>
            <Text>
              {`I have a huge passion on state-of-the-art technology and
                people communication. I'm on my way with energy of youth, great
                resilience, and professional attitude.`}
              <br />
              Strong engineering professional with a{" "}
              <b>Bachelor of Computer Engineering</b> from{" "}
              <b>University of Science.</b>
            </Text>
            <Text className={styles["job-title"]}>
              {" "}
              A Front-end Developer with over 3 years of experience.
            </Text>
          </Fade>
        </div>
        <div className={styles["download-cv-btn"]}>
          <Fade delay={700}>
            <Button size="large" icon={<DownloadOutlined />}>
              Download My CV
            </Button>
          </Fade>
        </div>
      </div>

      <ConditionalWrapper
        condition={!isMobile}
        wrapper={(children) => <Slide direction="right">{children}</Slide>}
      >
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
      </ConditionalWrapper>
    </section>
  );
};
