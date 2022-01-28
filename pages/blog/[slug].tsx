import { getPosts, getSinglePost } from "@/api/index";
import { MainLayout } from "@/components/layout";
import { PostOrPage } from "@tryghost/content-api";
import DOMPurify from "isomorphic-dompurify";
import Link from "next/link";
import type { GetStaticPropsContext } from "next";
import styles from "@/styles/blog.module.scss";
export interface PostPageProps {
  post: PostOrPage;
}

const PostPage = (props: PostPageProps) => {
  const cleanedHtml = DOMPurify.sanitize(props?.post?.html || "");
  const { post } = props;

  return (
    <section className={styles["post-page"]}>
      <Link href={"/blog"}>
        <a className={styles.back}>« Go back</a>
      </Link>
      <h1>{post.title}</h1>
      <span className={styles.tags}>
        {post?.tags?.map((tag) => (
          <span key={tag.id}>#{tag.name}</span>
        ))}
      </span>
      <hr />
      <div
        className={styles["post-content"]}
        dangerouslySetInnerHTML={{ __html: cleanedHtml }}
      />
    </section>
  );
};

export const getStaticPaths = async () => {
  const posts = await getPosts(1);

  const paths = posts?.map((post: PostOrPage) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: "blocking" };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  let slug = context?.params?.slug || "";
  if (Array.isArray(slug)) {
    let slugStr = "";
    slug.forEach((s) => (slugStr += s));
    slug = slugStr;
  }
  const post = await getSinglePost(slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post },
    revalidate: 10,
  };
};

PostPage.Layout = MainLayout;

export default PostPage;
