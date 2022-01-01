import type { GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";

export interface PostListPageProps {
  posts: any[];
}

const PostListPage = ({ posts }: PostListPageProps) => {
  return (
    <div>
      <h1>Post list page</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps: GetStaticProps<PostListPageProps> = async (
  context: GetStaticPropsContext
) => {
  const response = await fetch(
    "https://js-post-api.herokuapp.com/api/posts?_page=1"
  );
  const data = await response.json();
  return {
    props: {
      posts: data.data,
    },
  };
};

export default PostListPage;
