import { getPosts, getSinglePost } from "@/api/index";
import { MainLayout } from "@/components/layout";
import { PostOrPage } from "@tryghost/content-api";
import DOMPurify from "isomorphic-dompurify";
import type { GetStaticPropsContext } from "next";

export interface PostPageProps {
  post: PostOrPage;
}

const PostPage = (props: PostPageProps) => {
  const cleanedHtml = DOMPurify.sanitize(props?.post?.html || "");
  return (
    <div>
      <h1>{props.post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: cleanedHtml }} />
    </div>
  );
};

export const getStaticPaths = async () => {
  const posts = await getPosts(1);

  const paths = posts?.map((post: PostOrPage) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: 'blocking' };
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
    revalidate: 10
  };
};

PostPage.Layout = MainLayout;

export default PostPage;
