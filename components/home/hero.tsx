import styles from "@/styles/home.module.scss";
import { Button, Typography } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import Image from "next/image";
import Avatar from "@/images/avatar.jpeg";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import QueueAnim from "rc-queue-anim";

const { Text, Title } = Typography;

interface Props {}

export const HeroSection = (props: Props) => {
  const { text } = useTypewriter({
    words: ["Hello, I am Thinh Nguyen,"],
    typeSpeed: 80,
  });

  return (
    <section className={styles["hero-section-wrapper"]}>
      <div className={styles["hero-section"]}>
        <Title level={1}>
          {text} <Cursor />
        </Title>
        <QueueAnim type={"right"} delay={200} duration={700}>
          <div key="0">
            <Title level={1} style={{ marginTop: 0 }}>
              Software Engineer
            </Title>
          </div>
        </QueueAnim>
        <div className={styles.description}>
          <QueueAnim type={"right"} delay={200} duration={700}>
            <div key="1">
              <Text>
                As a dynamic, enthusiastic developer with high flexibility to
                adapt to the new working environment, I am seeking opportunities
                to improve myself and contribute to the company.
                <br />
                Strong engineering professional with a{" "}
                <b>Bachelor of Computer Engineering</b> from{" "}
                <b>University of Science.</b>
              </Text>
            </div>
            <div key="2">
              <Text className={styles["job-title"]}>
                {" "}
                A Front-end Developer with over 3 years of experience.
              </Text>
            </div>
          </QueueAnim>
        </div>
        <br />
        <Button size="large" icon={<DownloadOutlined />}>
          Download My Resume
        </Button>
      </div>

      <div className={styles['profile-img-wrapper']}>
        <Image src={Avatar} alt="avatar" width={240} height={240} />
      </div>
    </section>
  );
};
