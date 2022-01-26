import { getFeaturedPosts, getPosts } from "@/api/index";
import { Post } from "@/components/blog";
import { MainLayout } from "@/components/layout";
import styles from "@/styles/blog.module.scss";
import { PostOrPage } from "@tryghost/content-api";
import { GetStaticProps } from "next";

interface BlogPageProps {
  posts: Array<PostOrPage & { visibility: string }>;
  featuredPosts: Array<PostOrPage & { visibility: string }>;
}

const BlogPage = (props: BlogPageProps) => {
  const { posts, featuredPosts } = props;

  return (
    <div className={styles.blog}>
      <h1 className={styles["blog-title"]}>Blog</h1>
      <h2 className={styles["blog-description"]}>
        A collection of posts I wrote about design process, technology and
        productivity.
      </h2>
      <section>
        <h3>Featured Posts</h3>
        <div className={styles["featured-posts"]}>
          {featuredPosts.map((post) => (
            <Post key={post.id} post={post} isFeaturedPost={true} />
          ))}
        </div>
      </section>
      <section>
        <h3>All Posts</h3>
        {posts.map((post) => (
          <Post key={post.id} post={post} isFeaturedPost={false} />
        ))}
      </section>
    </div>
  );
};

BlogPage.Layout = MainLayout;

export const getStaticProps: GetStaticProps = async () => {
  const [posts, featuredPosts] = await Promise.all([
    getPosts(),
    getFeaturedPosts(),
  ]);

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts, featuredPosts },
  };
};

export default BlogPage;