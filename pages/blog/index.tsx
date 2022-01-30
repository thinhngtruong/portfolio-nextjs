import { getFeaturedPosts, getPosts } from "@/api/index";
import { Posts } from "@/components/blog";
import { MainLayout } from "@/components/layout";
import styles from "@/styles/blog.module.scss";
import { PostOrPage } from "@tryghost/content-api";
import { GetStaticProps } from "next";
import { Fade, JackInTheBox, Slide } from "react-awesome-reveal";

interface BlogPageProps {
  posts: Array<PostOrPage & { visibility: string }>;
  featuredPosts: Array<PostOrPage & { visibility: string }>;
}

const BlogPage = (props: BlogPageProps) => {
  const { posts, featuredPosts } = props;

  return (
    <div className={styles.blog}>
      <Fade>
        <h1 className={styles["blog-title"]}>Blog</h1>
      </Fade>
      <Fade delay={500}>
        <h2 className={styles["blog-description"]}>
          A collection of posts I wrote about programming tutorials, awesome
          technology and lessons learned.
        </h2>
      </Fade>
      <section>
        <Slide direction="left" delay={500}>
          <h3>Featured Posts</h3>
        </Slide>
        <div className={styles["featured-posts"]}>
          <Posts posts={featuredPosts} isFeaturedPost={true} />
        </div>
      </section>
      <section>
        <Slide direction="left">
          <h3>All Posts</h3>
        </Slide>
        <Posts posts={posts} isFeaturedPost={false} />
      </section>
    </div>
  );
};

BlogPage.Layout = MainLayout;

export const getStaticProps: GetStaticProps = async () => {
  const [posts, featuredPosts] = await Promise.all([
    getPosts(1),
    getFeaturedPosts(1),
  ]);

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts, featuredPosts },
    revalidate: 10,
  };
};

export default BlogPage;
