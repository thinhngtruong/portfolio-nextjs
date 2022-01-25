import React from "react";
import { MainLayout } from "@/components/layout";
import { GetStaticProps, GetStaticPropsContext } from "next";
import { getPosts } from "@/api/index";
import { PostOrPage } from "@tryghost/content-api";
import Link from "next/link";

interface BlogPageProps {
  posts: Array<PostOrPage>;
}

const BlogPage = (props: BlogPageProps) => {
  return (
    <div>
      <h1>Blog page</h1>
      <div>
        <ul>
          {props.posts.map((post) => (
            <li key={post.id}>
              <Link href={`/blog/${post.slug}`}>
                <a> {post.title} </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

BlogPage.Layout = MainLayout;

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts();
  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts },
  };
};

export default BlogPage;
